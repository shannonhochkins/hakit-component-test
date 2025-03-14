// import { DropZone, ComponentConfig } from '@measured/puck';
const ALIGN_ITEMS = [
  { label: 'Center', value: 'center' },
  { label: 'Flex End', value: 'flex-end' },
  { label: 'Flex Start', value: 'flex-start' },
  { label: 'Stretch', value: 'stretch' },
];
const JUSTIFY_CONTENT = [
  { label: 'Center', value: 'center' },
  { label: 'End', value: 'end' },
  { label: 'Flex End', value: 'flex-end' },
  { label: 'Flex Start', value: 'flex-start' },
  { label: 'Start', value: 'start' },
  { label: 'Space Around', value: 'space-around' },
  { label: 'Space Between', value: 'space-between' },
  { label: 'Space Evenly', value: 'space-evenly' },
  { label: 'Stretch', value: 'stretch' },
];
const WRAP = [
  { label: 'No Wrap', value: 'nowrap' },
  { label: 'Wrap', value: 'wrap' },
  { label: 'Wrap Reverse', value: 'wrap-reverse' },
];
const DIRECTION = [
  { label: 'Row', value: 'row' },
  { label: 'Row Reverse', value: 'row-reverse' },
  { label: 'Column', value: 'column' },
  { label: 'Column Reverse', value: 'column-reverse' },
];

export type LayoutProps = {
  options: {
    direction: React.CSSProperties['flexDirection'];
    alignItems: React.CSSProperties['alignItems'];
    justifyContent: React.CSSProperties['justifyContent'];
    wrap: React.CSSProperties['flexWrap'];
    gap: number;
    padding: number;
    margin: number;
  };
};


export default {
  label: 'Layout',
  version: '1.0.0',
  description: 'A layout component that can be used to arrange child components in a grid or flex layout.',
  fields: {
    options: {
      type: 'object',
      label: 'Layout Options',
      objectFields: {
        direction: {
          type: 'radio',
          label: 'Direction',
          options: DIRECTION,
        },
        alignItems: {
          type: 'select',
          label: 'Align Items',
          options: ALIGN_ITEMS,
        },
        justifyContent: {
          type: 'select',
          label: 'Justify Content',
          options: JUSTIFY_CONTENT,
        },
        wrap: {
          type: 'select',
          label: 'Wrap',
          options: WRAP,
        },
        gap: {
          type: 'number',
          label: 'Gap',
          min: 0,
        },
        padding: {
          type: 'number',
          label: 'Padding',
        },
        margin: {
          type: 'number',
          label: 'Margin',
        },
      },
    },
  },
  inline: true,
  render: () => {
    return (
      <div>
        APPLES
      </div>
    );
  },
}
