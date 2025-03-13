import { jsx as r } from "react/jsx-runtime";
import { DropZone as p } from "@measured/puck";
const o = [
  { label: "Center", value: "center" },
  { label: "Flex End", value: "flex-end" },
  { label: "Flex Start", value: "flex-start" },
  { label: "Stretch", value: "stretch" }
], s = [
  { label: "Center", value: "center" },
  { label: "End", value: "end" },
  { label: "Flex End", value: "flex-end" },
  { label: "Flex Start", value: "flex-start" },
  { label: "Start", value: "start" },
  { label: "Space Around", value: "space-around" },
  { label: "Space Between", value: "space-between" },
  { label: "Space Evenly", value: "space-evenly" },
  { label: "Stretch", value: "stretch" }
], u = [
  { label: "No Wrap", value: "nowrap" },
  { label: "Wrap", value: "wrap" },
  { label: "Wrap Reverse", value: "wrap-reverse" }
], i = [
  { label: "Row", value: "row" },
  { label: "Row Reverse", value: "row-reverse" },
  { label: "Column", value: "column" },
  { label: "Column Reverse", value: "column-reverse" }
], v = {
  label: "Layout",
  fields: {
    options: {
      type: "object",
      label: "Layout Options",
      objectFields: {
        direction: {
          type: "radio",
          label: "Direction",
          options: i
        },
        alignItems: {
          type: "select",
          label: "Align Items",
          options: o
        },
        justifyContent: {
          type: "select",
          label: "Justify Content",
          options: s
        },
        wrap: {
          type: "select",
          label: "Wrap",
          options: u
        },
        gap: {
          type: "number",
          label: "Gap",
          min: 0
        },
        padding: {
          type: "number",
          label: "Padding"
        },
        margin: {
          type: "number",
          label: "Margin"
        }
      }
    }
  },
  inline: !0,
  render: ({ puck: a, options: e }) => {
    const l = e.gap ?? 0, t = e.padding ?? 0, n = e.margin ?? 0;
    return /* @__PURE__ */ r(
      p,
      {
        ref: a.dragRef,
        minEmptyHeight: 200,
        zone: "layout",
        style: {
          gap: `${l}px`,
          flexDirection: e.direction ?? "row",
          flexWrap: e.wrap ?? "wrap",
          justifyContent: e.justifyContent ?? "center",
          alignItems: e.alignItems ?? "center",
          "--stretch": e.justifyContent === "stretch" ? "100%" : "false",
          "--gap": `${l}px`,
          padding: `${t}px`,
          margin: `${n}px`
        }
      }
    );
  }
};
export {
  v as default
};
