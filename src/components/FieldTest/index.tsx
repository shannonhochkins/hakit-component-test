

const ALIGN_ITEMS = [
  { label: 'Center', value: 'center' },
  { label: 'Flex End', value: 'flex-end' },
  { label: 'Flex Start', value: 'flex-start' },
  { label: 'Stretch', value: 'stretch' },
];

const DIRECTION = [
  { label: 'Row', value: 'row' },
  { label: 'Row Reverse', value: 'row-reverse' },
  { label: 'Column', value: 'column' },
  { label: 'Column Reverse', value: 'column-reverse' },
];

export type LayoutProps = {
  text: string;
  accordion: {
    open: boolean;
    title: string;
    description: string;
  };
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
  label: 'Field Test',
  fields: {
    text: {
      type: 'text',
      label: 'Text Field',
      default: 'This is a text field',
      collapseOptions: {
        
      },
      description: 'A simple text field for testing purposes',
    },
    accordion: {
      type: 'object',
      label: 'Accordion Field',
      objectFields: {
        open: {
          type: 'boolean',
          label: 'Open',
          default: true,
          description: 'Whether the accordion is open or closed',
        },
        title: {
          type: 'text',
          label: 'Title',
          default: 'Accordion Title',
          description: 'The title of the accordion',
        },
        description: {
          type: 'text',
          label: 'Description',
          default: 'This is a description for the accordion field.',
          description: 'A description for the accordion field',
        },
      },
    },
    random: {
      type: 'invalid',
    },
    options: {
      type: 'object',
      default: {},
      label: 'Field Examples',
      collapsible: {
        open: true,
      },
      description: 'Variations of different field types',
      objectFields: {
        radio: {
          type: 'radio',
          default: 'row',
          label: 'Radio',
          description: 'Radio Field',
          options: DIRECTION,
          visible(data: LayoutProps) {
            return true;
          }
        },
        select: {
          type: 'select',
          default: 'flex-start',
          label: 'Select',
          description: 'Select Field',
          options: ALIGN_ITEMS,
        },
        number: {
          type: 'number',
          label: 'Number',
          default: 16,
          min: 0,
          description: 'Number Field',
        },
        text: {
          type: 'text',
          label: 'Text',
          default: '',
          description: 'Text field',
        },
        // entity: {
        //   type: 'entity',
        //   label: 'Entity',
        //   description: 'Entity Field',
        //   options(data) {
        //     return Object.values(data.entities || {});
        //   },
        //   default: (options) => {
        //     const defaultEntity = options.find(entity => entity.entity_id === 'sensor.time');
        //     return defaultEntity?.entity_id ?? undefined;
        //   },
        // },
        array: {
          type: 'array',
          label: 'Array',
          default: [{
            label: 'Test',
            id: '123',
          }],
          min: 5,
          max: 5,
          collapsible: {
            open: true,
          },
          getItemSummary: (item, i) => item.label || `Item #${i}`,
          defaultItemProps: {
            id: '',
            label: 'Item Name',
          },
          arrayFields: {
            label: {
              label: 'Label',
              type: 'text',
              default: 'Item Name',
            },
            id: {
              type: 'hidden',
              default: '',
              disableBreakpoints: true,
            },
          },
        }
      },
    },
  },
  render: (props) => {
    console.log('FieldTest render', props);
    return (
      <pre ref={props.dragRef}>
        {JSON.stringify(props.options, null, 2)}
      </pre>
    );
  },
}
