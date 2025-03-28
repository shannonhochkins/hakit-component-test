/* eslint-disable react-hooks/rules-of-hooks */
import { ThemeProvider } from '@hakit/components';
import { useEffect, useMemo, useRef } from 'react';
import { type ViewportItem } from './viewports';
import { DEFAULT_THEME_OPTIONS } from '@hakit/components';
import { useHass } from '@hakit/core';
// import { useViewports, toBreakpoints } from '../../hooks/useViewports';

export type DashboardItem = {
  title: string;
  id: string | null;
};

export type RootProps = {
  dashboards: DashboardItem[];
  viewports: ViewportItem[];
  theme?: {
    hue?: number;
    darkMode?: boolean;
    tint?: number;
    saturation?: number;
    lightness?: number;
    contrastThreshold?: number;
  };
};

export default {
  label: 'Root',
  category: 'other',
  withSizeOptions: false,
  fields: {
    dashboards: {
      type: 'array',
      default: [],
      collapsible: {
        open: true,
      },
      getItemSummary: (item, i) => item.title || `Dashboard #${i}`,
      defaultItemProps: {
        title: 'Dashboard',
        id: null,
      },
      arrayFields: {
        title: {
          type: 'text',
          label: 'Dashboard Title',
          default: 'Dashboard',
          disableBreakpoints: true,
        },
        id: {
          type: 'hidden',
        },
      },
      label: 'Manage Dashboards',
      disableBreakpoints: true,
      description: 'Add an entirely new dashboard',
    },
    viewports: {
      type: 'array',
      default: [],
      collapsible: {
        open: false,
      },
      min: 5,
      max: 5,
      getItemSummary: (item, i) => item.label || `Viewport #${i}`,
      defaultItemProps: {
        label: 'Viewport',
        width: 0,
        disabled: false,
      },
      disableBreakpoints: true,
      arrayFields: {
        label: {
          type: 'hidden',
        },
        width: {
          type: 'number',
          label: 'Viewport Width',
          default: '',
          disableBreakpoints: true,
        },
        disabled: {
          disableBreakpoints: true,
          type: 'radio',
          default: false,
          label: 'Behavior',
          options: [
            {
              label: 'Enabled',
              value: false,
            },
            {
              label: 'Disabled',
              value: true,
            },
          ],
        },
      },
      label: 'Manage Viewports',
      description: 'Configure viewports',
    },
    theme: {
      type: 'object',
      default: {},
      label: 'Theme Options',
      disableBreakpoints: true,
      collapsible: {
        open: true,
      },
      description: 'Main theme controls for the dashboard',
      objectFields: {
        hue: {
          type: 'slider',
          default: DEFAULT_THEME_OPTIONS.hue,
          label: 'Hue',
          description: 'Change the overall hue of the colors',
          min: 0,
          max: 360,
          step: 1,
          disableBreakpoints: true,
        },
        darkMode: {
          type: 'radio',
          default: DEFAULT_THEME_OPTIONS.darkMode,
          label: 'Dark Mode',
          description: 'Toggle dark mode',
          options: [
            {
              label: 'Enabled',
              value: true,
            },
            {
              label: 'Disabled',
              value: false,
            },
          ],
          disableBreakpoints: true,
        },
        tint: {
          type: 'slider',
          default: DEFAULT_THEME_OPTIONS.tint,
          label: 'Shade Tint',
          description: 'Will change the hue tint for the shade colors',
          min: 0,
          max: 1,
          step: 0.05,
          disableBreakpoints: true,
        },
        saturation: {
          type: 'slider',
          default: DEFAULT_THEME_OPTIONS.saturation,
          label: 'Saturation',
          description: 'Control the saturation of the color',
          min: 0,
          max: 100,
          step: 1,
          disableBreakpoints: true,
        },
        lightness: {
          type: 'slider',
          default: DEFAULT_THEME_OPTIONS.lightness,
          label: 'Lightness',
          description: 'Control how bright the primary colors are',
          min: 0,
          max: 100,
          step: 1,
          disableBreakpoints: true,
        },
        contrastThreshold: {
          type: 'slider',
          default: DEFAULT_THEME_OPTIONS.contrastThreshold,
          label: 'Contrast Threshold',
          description: 'Changes output calculation for text color',
          min: 0,
          max: 100,
          step: 1,
          disableBreakpoints: true,
        },
      },
    },
  },
  resolveData: async data => {
    const props = data.props;
    let lastId: string | null = null;
    if (props?.dashboards) {
      const shallowCopy = [...props.dashboards].map(dashboard => ({ ...dashboard }));;
      // for (const dashboard of shallowCopy) {
      //   if (dashboard.id === lastId && dashboard.id) {
      //     // If the ID is the same as the previous ID, we're likely cloning the item
      //     const clonedDashboard: { id: string } = await callApi('/api/page/configuration/clone', {
      //       id: dashboard.id,
      //     });
      //     dashboard.id = clonedDashboard.id;
      //   }
      //   lastId = dashboard.id;
      //   // no ID because the default is null
      //   if (!dashboard.id) {
      //     const newDashboard = await callApi('/api/page/configuration/new');
      //     dashboard.id = newDashboard.id;
      //   }
      // }
      props.dashboards = shallowCopy;
    }

    return { ...data };
  },
  render({ DropZone, editMode, data, editorFrame }) {
    const { useStore } = useHass();
    const hasSetWindowContext = useRef(false);
    const setWindowContext = useStore(store => store.setWindowContext);
    const windowContext = useStore(store => store.windowContext);
    const container = editMode ? editorFrame : document.head;
    // const viewports = useViewports(data);
    // const breakpoints = useMemo(() => toBreakpoints(viewports), [viewports]);

    useEffect(() => {
      const newWindowContext = (container as HTMLIFrameElement)?.contentWindow as Window;
      if (editMode && windowContext !== newWindowContext && hasSetWindowContext.current === false && typeof newWindowContext !== 'undefined' && newWindowContext) {
        setWindowContext(newWindowContext);
        hasSetWindowContext.current = true;
      }
    }, [container, editMode, windowContext, setWindowContext]);

    useEffect(() => {
      return () => {
        setWindowContext(window);
        hasSetWindowContext.current = false;
      };
    }, [setWindowContext]);

    if (!container) {
      return <></>;
    }
    if (editMode && !hasSetWindowContext.current) {
      return <></>;
    }
    return <>
      <ThemeProvider
        // breakpoints={breakpoints}
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
      `}>
        <DropZone zone={'default-zone'} style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          // stretch the children
          alignItems: 'stretch',
        }} />
      </ThemeProvider>
    </>
  },
}
