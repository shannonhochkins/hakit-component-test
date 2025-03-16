import { importShared } from './__federation_fn_import-CW4o4b8t.js';
import { o as oe, K, r as re, Q } from './index-DNwB73eM.js';

const {useCallback:u} = await importShared('react');
const f = /* @__PURE__ */ Q("div", {
  target: "e97anlh0"
} )({
  name: "jy7joq",
  styles: "display:flex;flex-direction:column;justify-content:center;white-space:nowrap;div{text-align:right;}.value{direction:ltr;}"
} );
function y({
  entity: t
}) {
  const {
    useStore: o
  } = oe(), n = o((e) => e.config), r = o((e) => e.entities), s = o((e) => e.connection), a = u(() => K(t, s, n, r, t.state), [n, s, r, t]);
  return /* @__PURE__ */ re(f, { children: /* @__PURE__ */ re("div", { className: "text-content value", children: a() }) });
}

export { y as default };
