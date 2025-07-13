/* eslint-disable react-hooks/rules-of-hooks */
import { ThemeProvider } from '@hakit/components';
import { useEffect, useMemo, useRef } from 'react';
import { CSSProperties } from 'react';
import { useHass } from '@hakit/core';
import styled from '@emotion/styled';

const defaultBackground = new URL('./default-background.jpg', import.meta.url).href;
interface BackgroundProps {
  /** the background image to apply to the dashboard @default defaultBackground */
  backgroundImage?: string;
  /** the background color to apply to the background overlay color @default "#4254c5" */
  backgroundColor?: string;
  /** the blend mode to apply to the background overlay color, this essentially applies an effect to the image @default "multiply" */
  blendMode?: CSSProperties['mixBlendMode'];
  /** the blur amount to apply to the background image of the dashboard @default 15 */
  blur?: number;
  /** the opacity of the background overlay color @default 0.9 */
  opacity?: number;

  test?: string;
}


const BackgroundElement = styled.div<BackgroundProps>`
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  /* pointer-events: none;   */
  filter: ${({ blur }) => (blur ? `blur(${blur}px)` : 'none')};
  ${({ backgroundImage, backgroundColor, opacity, blendMode }) => `
    ${backgroundImage ? `background-image: url(${backgroundImage});` : ''}
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: inherit;
      opacity: ${opacity};
      background: ${backgroundColor};
      mix-blend-mode: ${blendMode};
    }
    &:after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at top center, ${backgroundColor} 0%, rgba(255, 255, 255, 0) 100%);
      width: 80vw;
      height: 80vh;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      mix-blend-mode: color-dodge;
    }
  `}
`;

const BackgroundWrapper = styled.div`
  position: absolute !important;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  /* height: 100%; */
`;
export type RootProps = {
  background: BackgroundProps;
};

export const config = {
  label: 'Root',
  withSizeOptions: false,
  fields: {
    background: {
      type: 'object',
      label: 'Background options',
      description: 'General options for the main background',
      default: {},
      disableBreakpoints: true,
      collapsible: {
        open: true,
      },
      objectFields: {
        useBackgroundImage: {
          type: 'radio',
          label: 'Use Background Image',
          description: 'Whether to use a background image or not',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
          default: true,
        },
        backgroundImage: {
          type: 'imageUpload',
          label: 'Background Image',
          description: 'The entity to display in the button card',
          default: undefined,
          visible(data) {
            return data.background?.useBackgroundImage;
          }
        },
        backgroundColor: {
          type: 'color',
          label: 'Background Color',
          description: 'The background color of the button card',
          default: '#4254c5',
        },
        blendMode: {
          type: 'select',
          label: 'Blend Mode',
          description: 'The blend mode to apply to the background overlay color',
          default: 'multiply',
          options: [
            { label: 'Color', value: 'color' },
            { label: 'Color Burn', value: 'color-burn' },
            { label: 'Color Dodge', value: 'color-dodge' },
            { label: 'Darken', value: 'darken' },
            { label: 'Difference', value: 'difference' },
            { label: 'Exclusion', value: 'exclusion' },
            { label: 'Hard Light', value: 'hard-light' },
            { label: 'Hue', value: 'hue' },
            { label: 'Lighten', value: 'lighten' },
            { label: 'Luminosity', value: 'luminosity' },
            { label: 'Multiply', value: 'multiply' },
            { label: 'Normal', value: 'normal' },
            { label: 'Overlay', value: 'overlay' },
            { label: 'Saturation', value: 'saturation' },
            { label: 'Screen', value: 'screen' },
            { label: 'Soft Light', value: 'soft-light' },
          ],
        },
        blur: {
          type: 'number',
          label: 'Blur',
          min: 0,
          description: 'The blur amount to apply to the background image of the dashboard',
          default: 25,
        },
        opacity: {
          type: 'number',
          label: 'Opacity',
          description: 'The opacity of the background overlay color',
          default: 0.9,
          min: 0,
          max: 1,
          step: 0.1,
        },
      },
    }
  },
  // resolveData: async data => {
  //   const props = data.props;
  //   let lastId: string | null = null;
  //   if (props?.dashboards) {
  //     const shallowCopy = [...props.dashboards].map(dashboard => ({ ...dashboard }));;
  //     // for (const dashboard of shallowCopy) {
  //     //   if (dashboard.id === lastId && dashboard.id) {
  //     //     // If the ID is the same as the previous ID, we're likely cloning the item
  //     //     const clonedDashboard: { id: string } = await callApi('/api/page/configuration/clone', {
  //     //       id: dashboard.id,
  //     //     });
  //     //     dashboard.id = clonedDashboard.id;
  //     //   }
  //     //   lastId = dashboard.id;
  //     //   // no ID because the default is null
  //     //   if (!dashboard.id) {
  //     //     const newDashboard = await callApi('/api/page/configuration/new');
  //     //     dashboard.id = newDashboard.id;
  //     //   }
  //     // }
  //     props.dashboards = shallowCopy;
  //   }

  //   return { ...data };
  // },
  
}

export function Render(props) {
    const { editMode, _editor, background } = props;

    const { useStore } = useHass();
    const hasSetWindowContext = useRef(false);
    const setWindowContext = useStore(store => store.setWindowContext);
    const windowContext = useStore(store => store.windowContext);
    const container = editMode ? _editor.iframe : document.head;

    useEffect(() => {
      const newWindowContext = (container as HTMLIFrameElement)?.contentWindow as Window;
      if (editMode && windowContext !== newWindowContext && hasSetWindowContext.current === false && typeof newWindowContext !== 'undefined' && newWindowContext) {
        setWindowContext(newWindowContext);
        hasSetWindowContext.current = true;
        console.log('Setting window context', newWindowContext);
      }
    }, [container, editMode, windowContext, setWindowContext]);

    useEffect(() => {
      return () => {
        setWindowContext(window);
        // hasSetWindowContext.current = false;
      };
    }, [setWindowContext]);

    if (!container) {
      return <></>;
    }
    if (editMode && !hasSetWindowContext.current) {
      return <></>;
    }
    return <>
      {/* <ThemeProvider
        breakpoints={breakpoints}
        // emotionCache={{
        //   key: 'css',
        //   container: iframe.contentDocument?.head,
        // }}
        // hue={data.root.props?.theme?.hue}
        // saturation={data.root.props?.theme?.saturation}
        // lightness={data.root.props?.theme?.lightness}
        // contrastThreshold={data.root.props?.theme?.contrastThreshold}
        // tint={data.root.props?.theme?.tint}
        // darkMode={data.root.props?.theme?.darkMode}
        globalStyles={`
        --ha-hide-body-overflow-y: hidden;
      `}> */}
        {props.children}
        <BackgroundWrapper>
          <BackgroundElement
            blendMode={background?.blendMode}
            backgroundColor={background?.backgroundColor}
            backgroundImage={background?.useBackgroundImage ? background?.backgroundImage ? background?.backgroundImage : defaultBackground : undefined}
            blur={background?.blur}
            opacity={background?.opacity}
          />
        </BackgroundWrapper>
      {/* </ThemeProvider> */}
    </>
  }
