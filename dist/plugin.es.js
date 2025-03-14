var n = { exports: {} }, t = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var u;
function c() {
  if (u) return t;
  u = 1;
  var i = Symbol.for("react.transitional.element"), p = Symbol.for("react.fragment");
  function o(v, e, l) {
    var a = null;
    if (l !== void 0 && (a = "" + l), e.key !== void 0 && (a = "" + e.key), "key" in e) {
      l = {};
      for (var r in e)
        r !== "key" && (l[r] = e[r]);
    } else l = e;
    return e = l.ref, {
      $$typeof: i,
      type: v,
      key: a,
      ref: e !== void 0 ? e : null,
      props: l
    };
  }
  return t.Fragment = p, t.jsx = o, t.jsxs = o, t;
}
var s;
function d() {
  return s || (s = 1, n.exports = c()), n.exports;
}
var b = d();
const x = [
  { label: "Center", value: "center" },
  { label: "Flex End", value: "flex-end" },
  { label: "Flex Start", value: "flex-start" },
  { label: "Stretch", value: "stretch" }
], R = [
  { label: "Center", value: "center" },
  { label: "End", value: "end" },
  { label: "Flex End", value: "flex-end" },
  { label: "Flex Start", value: "flex-start" },
  { label: "Start", value: "start" },
  { label: "Space Around", value: "space-around" },
  { label: "Space Between", value: "space-between" },
  { label: "Space Evenly", value: "space-evenly" },
  { label: "Stretch", value: "stretch" }
], m = [
  { label: "No Wrap", value: "nowrap" },
  { label: "Wrap", value: "wrap" },
  { label: "Wrap Reverse", value: "wrap-reverse" }
], E = [
  { label: "Row", value: "row" },
  { label: "Row Reverse", value: "row-reverse" },
  { label: "Column", value: "column" },
  { label: "Column Reverse", value: "column-reverse" }
], f = {
  label: "Layout",
  version: "1.0.0",
  description: "A layout component that can be used to arrange child components in a grid or flex layout.",
  fields: {
    options: {
      type: "object",
      label: "Layout Options",
      objectFields: {
        direction: {
          type: "radio",
          label: "Direction",
          options: E
        },
        alignItems: {
          type: "select",
          label: "Align Items",
          options: x
        },
        justifyContent: {
          type: "select",
          label: "Justify Content",
          options: R
        },
        wrap: {
          type: "select",
          label: "Wrap",
          options: m
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
  render: () => /* @__PURE__ */ b.jsx("div", { children: "APPLES" })
};
export {
  f as default
};
