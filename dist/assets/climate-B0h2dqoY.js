import { importShared } from './__federation_fn_import-CW4o4b8t.js';
import { a as ae, m, d, c, h, E, L, o as oe, l, K, t as te, r as re, e as ee, T as T$1, Q, b as o } from './index-DNwB73eM.js';

const f$1 = /* @__PURE__ */ new Set([
  "temperature",
  "current_temperature",
  "target_temperature",
  "target_temp_temp",
  "target_temp_high",
  "target_temp_low",
  "target_temp_step",
  "min_temp",
  "max_temp"
]), g = {
  light: {
    brightness: (e) => Math.round(e / 255 * 100).toString()
  },
  media_player: {
    volume_level: (e) => Math.round(e * 100).toString(),
    media_duration: (e) => d(e.toString(), "s")
  }
}, T = {
  climate: {
    humidity: "%",
    current_humidity: "%",
    target_humidity_low: "%",
    target_humidity_high: "%",
    target_humidity_step: "%",
    min_humidity: "%",
    max_humidity: "%"
  },
  cover: {
    current_position: "%",
    current_tilt_position: "%"
  },
  fan: {
    percentage: "%"
  },
  humidifier: {
    humidity: "%",
    current_humidity: "%",
    min_humidity: "%",
    max_humidity: "%"
  },
  light: {
    color_temp: "mired",
    max_mireds: "mired",
    min_mireds: "mired",
    color_temp_kelvin: "K",
    min_color_temp_kelvin: "K",
    max_color_temp_kelvin: "K",
    brightness: "%"
  },
  sun: {
    azimuth: "°",
    elevation: "°"
  },
  vacuum: {
    battery_level: "%"
  },
  valve: {
    current_position: "%"
  },
  sensor: {
    battery_level: "%"
  },
  media_player: {
    volume_level: "%"
  }
}, v = (e, n, m) => {
  const i = e.unit_system.length || "";
  switch (m) {
    case "visibility":
      return n.attributes.visibility_unit || i;
    case "precipitation":
      return n.attributes.precipitation_unit || (i === "km" ? "mm" : "in");
    case "pressure":
      return n.attributes.pressure_unit || (i === "km" ? "hPa" : "inHg");
    case "temperature":
    case "templow":
      return n.attributes.temperature_unit || e.unit_system.temperature;
    case "wind_speed":
      return n.attributes.wind_speed_unit || `${i}/h`;
    case "humidity":
    case "precipitation_probability":
      return "%";
    default: {
      const a = e.unit_system;
      return m in a ? a[m] : "";
    }
  }
}, A = (e, n, m$1, i, a) => {
  const t = a !== void 0 ? a : e.attributes[i];
  if (t === null)
    return ae("unknown");
  if (typeof t == "number") {
    const r = m(e.entity_id), o = g[r]?.[i], s = o ? o(t) : c(t);
    let u = T[r]?.[i];
    return r === "weather" ? u = v(n, e, i) : f$1.has(i) && (u = n.unit_system.temperature), u ? `${s}${u}` : s;
  }
  if (typeof t == "string" && h(t, true)) {
    if (E(t)) {
      const o = new Date(t);
      if (L(o))
        return new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hourCycle: "h12"
        }).format(o);
    }
    const r = new Date(t);
    if (L(r))
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }).format(r);
  }
  return Array.isArray(t) && t.some((r) => r instanceof Object) || !Array.isArray(t) && t instanceof Object ? JSON.stringify(t) : Array.isArray(t) ? t.map((r) => A(e, n, m$1, i, r)).join(", ") : ae(t);
};

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
  } = oe(), n = u((r) => r.config), i = u((r) => r.entities), c = u((r) => r.connection), o$1 = l(t.state), e = f((r) => A(t, n, i, r), [t, n, i]), g = f(() => K(t, c, n, i, t.state), [n, c, i, t]), b = () => {
    if (t.attributes.current_temperature != null && t.attributes.current_humidity != null)
      return `${e("current_temperature")}/
      ${e("current_humidity")}`;
    if (t.attributes.current_temperature != null)
      return e("current_temperature");
    if (t.attributes.current_humidity != null)
      return e("current_humidity");
  }, l$1 = () => {
    if (o$1)
      return ae("unavailable");
    const r = g();
    return t.attributes.hvac_action && t.state !== o ? `${e("hvac_action")} (${r})` : r;
  }, S = () => t.attributes.target_temp_low != null && t.attributes.target_temp_high != null ? `${e("target_temp_low")}-${e("target_temp_high")}` : t.attributes.temperature != null ? e("temperature") : t.attributes.target_humidity_low != null && t.attributes.target_humidity_high != null ? `${e("target_humidity_low")}-${e("target_humidity_high")}` : t.attributes.humidity != null ? e("humidity") : "", m = b();
  return /* @__PURE__ */ te(O, { className: `action-type-climate ${_}`, ...h, children: [
    /* @__PURE__ */ re("div", { className: "target", children: o$1 ? l$1() : /* @__PURE__ */ te(ee, { children: [
      /* @__PURE__ */ te("span", { className: "state-label", children: [
        l$1(),
        t.attributes.preset_mode && t.attributes.preset_mode !== T$1 ? /* @__PURE__ */ te(ee, { children: [
          "- ",
          e("preset_mode")
        ] }) : null
      ] }),
      /* @__PURE__ */ re("div", { className: "unit", children: S() })
    ] }) }),
    m && !o$1 ? /* @__PURE__ */ te("div", { className: "current", children: [
      ae("currently"),
      ":",
      /* @__PURE__ */ re("div", { className: "unit", children: m })
    ] }) : null
  ] });
}

export { z as default };
