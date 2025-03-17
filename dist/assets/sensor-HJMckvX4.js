import { importShared } from './__federation_fn_import-Cbj1D39_.js';
import { r as re, Q } from './index-D38eh1Gu.js';

const {useHass:l,computeStateDisplay:p} = await importShared('@hakit/core');

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
  } = l(), n = o((e) => e.config), r = o((e) => e.entities), s = o((e) => e.connection), a = u(() => p(t, s, n, r, t.state), [n, s, r, t]);
  return /* @__PURE__ */ re(f, { children: /* @__PURE__ */ re("div", { className: "text-content value", children: a() }) });
}

export { y as default };
