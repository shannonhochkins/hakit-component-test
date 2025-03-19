import { j as jsx } from './emotion-react-jsx-runtime.browser.esm-DGwdlQJW.js';

const ALIGN_ITEMS = [{
  label: "Center",
  value: "center"
}, {
  label: "Flex End",
  value: "flex-end"
}, {
  label: "Flex Start",
  value: "flex-start"
}, {
  label: "Stretch",
  value: "stretch"
}];
const JUSTIFY_CONTENT = [{
  label: "Center",
  value: "center"
}, {
  label: "End",
  value: "end"
}, {
  label: "Flex End",
  value: "flex-end"
}, {
  label: "Flex Start",
  value: "flex-start"
}, {
  label: "Start",
  value: "start"
}, {
  label: "Space Around",
  value: "space-around"
}, {
  label: "Space Between",
  value: "space-between"
}, {
  label: "Space Evenly",
  value: "space-evenly"
}, {
  label: "Stretch",
  value: "stretch"
}];
const WRAP = [{
  label: "No Wrap",
  value: "nowrap"
}, {
  label: "Wrap",
  value: "wrap"
}, {
  label: "Wrap Reverse",
  value: "wrap-reverse"
}];
const DIRECTION = [{
  label: "Row",
  value: "row"
}, {
  label: "Row Reverse",
  value: "row-reverse"
}, {
  label: "Column",
  value: "column"
}, {
  label: "Column Reverse",
  value: "column-reverse"
}];
const index = {
  label: "Layout",
  category: "Layout",
  fields: {
    options: {
      type: "object",
      default: {},
      label: "Layout Options",
      disableBreakpoints: true,
      collapsible: {
        open: false
      },
      description: "Controls the layout of the container",
      objectFields: {
        direction: {
          type: "radio",
          default: "row",
          label: "Direction",
          description: "Controls if the children should be laid out horizontally or vertically",
          options: DIRECTION
        },
        alignItems: {
          type: "select",
          default: "flex-start",
          label: "Align Items",
          description: "Controls how children are distributed along the horizontal axis",
          options: ALIGN_ITEMS
        },
        justifyContent: {
          type: "select",
          default: "flex-start",
          label: "Justify Content",
          description: "Controls how items are aligned along the vertical axis",
          options: JUSTIFY_CONTENT
        },
        wrap: {
          type: "select",
          label: "Wrap",
          default: "wrap",
          description: "Controls whether the container allows its items to move onto multiple lines.",
          options: WRAP
        },
        gap: {
          type: "number",
          label: "Gap",
          default: 16,
          min: 0,
          description: "Controls the space between items in pixels"
        },
        padding: {
          type: "number",
          label: "Padding",
          default: 0,
          description: "Controls the padding of the container in pixels"
        },
        margin: {
          type: "number",
          label: "Margin",
          default: 0,
          description: "Controls the margin of the container in pixels"
        }
      }
    }
  },
  inline: true,
  render: ({
    dragRef,
    DropZone,
    options,
    activeBreakpoint,
    sizeOptions
  }) => {
    const gap = options.gap ?? 0;
    const padding = options.padding ?? 0;
    const margin = options.margin ?? 0;
    return /* @__PURE__ */ jsx(DropZone, { ref: dragRef, minEmptyHeight: 200, zone: "layout", style: {
      gap: `${gap}px`,
      flexDirection: options.direction ?? "row",
      flexWrap: options.wrap ?? "wrap",
      justifyContent: options.justifyContent ?? "center",
      alignItems: options.alignItems ?? "center",
      ["--stretch"]: options.justifyContent === "stretch" ? "100%" : "false",
      ["--gap"]: `${gap}px`,
      padding: `${padding}px`,
      margin: `${margin}px`
    } });
  }
};

export { index as default };
