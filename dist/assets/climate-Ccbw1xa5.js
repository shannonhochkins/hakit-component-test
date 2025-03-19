import { importShared } from './__federation_fn_import-D9ReRsJu.js';
import { t as te, r as re, e as ee, T, Q } from './index-CvosAy3g.js';

const {useHass:w,isUnavailableState:x,computeAttributeValueDisplay:N,computeStateDisplay:E,localize:d,OFF:$} = await importShared('@hakit/core');

const {useCallback:f} = await importShared('react');
const O = /* @__PURE__ */ Q("div", {
  target: "e1ri2dm00"
} )({
  name: "fz81w7",
  styles: "display:flex;flex-direction:column;justify-content:center;white-space:nowrap;.target,.current{display:flex;flex-direction:row;flex-wrap:nowrap;gap:0.25rem;justify-content:flex-end;}.target{color:var(--ha-S50-contrast);}.current{color:var(--ha-S500-contrast);}.state-label{font-weight:bold;}.unit{}"
} );
function z({
  entity: t,
  className: _,
  ...h
}) {
  const {
    useStore: u
  } = w(), n = u((r) => r.config), i = u((r) => r.entities), c = u((r) => r.connection), o = x(t.state), e = f((r) => N(t, n, i, r), [t, n, i]), g = f(() => E(t, c, n, i, t.state), [n, c, i, t]), b = () => {
    if (t.attributes.current_temperature != null && t.attributes.current_humidity != null)
      return `${e("current_temperature")}/
      ${e("current_humidity")}`;
    if (t.attributes.current_temperature != null)
      return e("current_temperature");
    if (t.attributes.current_humidity != null)
      return e("current_humidity");
  }, l = () => {
    if (o)
      return d("unavailable");
    const r = g();
    return t.attributes.hvac_action && t.state !== $ ? `${e("hvac_action")} (${r})` : r;
  }, S = () => t.attributes.target_temp_low != null && t.attributes.target_temp_high != null ? `${e("target_temp_low")}-${e("target_temp_high")}` : t.attributes.temperature != null ? e("temperature") : t.attributes.target_humidity_low != null && t.attributes.target_humidity_high != null ? `${e("target_humidity_low")}-${e("target_humidity_high")}` : t.attributes.humidity != null ? e("humidity") : "", m = b();
  return /* @__PURE__ */ te(O, { className: `action-type-climate ${_}`, ...h, children: [
    /* @__PURE__ */ re("div", { className: "target", children: o ? l() : /* @__PURE__ */ te(ee, { children: [
      /* @__PURE__ */ te("span", { className: "state-label", children: [
        l(),
        t.attributes.preset_mode && t.attributes.preset_mode !== T ? /* @__PURE__ */ te(ee, { children: [
          "- ",
          e("preset_mode")
        ] }) : null
      ] }),
      /* @__PURE__ */ re("div", { className: "unit", children: S() })
    ] }) }),
    m && !o ? /* @__PURE__ */ te("div", { className: "current", children: [
      d("currently"),
      ":",
      /* @__PURE__ */ re("div", { className: "unit", children: m })
    ] }) : null
  ] });
}

export { z as default };
