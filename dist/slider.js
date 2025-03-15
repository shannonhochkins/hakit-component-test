import * as G from "react";
import { createContext as Lt, useRef as ut, useLayoutEffect as sa, useEffect as ne, useContext as $, useId as ra, useCallback as Rt, useMemo as Re, useInsertionEffect as oa, forwardRef as cr, Fragment as ur, createElement as aa, Component as la, useState as de } from "react";
import { FabCard as bi } from "@hakit/components";
import { v4 as ca } from "uuid";
var le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function fr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var _e = { exports: {} }, It = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xi;
function ua() {
  if (xi) return It;
  xi = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function n(i, s, o) {
    var r = null;
    if (o !== void 0 && (r = "" + o), s.key !== void 0 && (r = "" + s.key), "key" in s) {
      o = {};
      for (var a in s)
        a !== "key" && (o[a] = s[a]);
    } else o = s;
    return s = o.ref, {
      $$typeof: t,
      type: i,
      key: r,
      ref: s !== void 0 ? s : null,
      props: o
    };
  }
  return It.Fragment = e, It.jsx = n, It.jsxs = n, It;
}
var Ti;
function fa() {
  return Ti || (Ti = 1, _e.exports = ua()), _e.exports;
}
var Q = fa();
const hr = Lt({});
function ha(t) {
  const e = ut(null);
  return e.current === null && (e.current = t()), e.current;
}
const In = typeof window < "u", da = In ? sa : ne, Bn = /* @__PURE__ */ Lt(null), dr = Lt({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function pa(t = !0) {
  const e = $(Bn);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: i, register: s } = e, o = ra();
  ne(() => {
    if (t)
      return s(o);
  }, [t]);
  const r = Rt(() => t && i && i(o), [o, i, t]);
  return !n && i ? [!1, r] : [!0];
}
function _n(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Nn(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const K = /* @__NO_SIDE_EFFECTS__ */ (t) => t;
let pr = K;
const ma = {
  useManualTiming: !1
};
// @__NO_SIDE_EFFECTS__
function Un(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const Mt = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const i = e - t;
  return i === 0 ? 1 : (n - t) / i;
};
class $n {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return _n(this.subscriptions, e), () => Nn(this.subscriptions, e);
  }
  notify(e, n, i) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1)
        this.subscriptions[0](e, n, i);
      else
        for (let o = 0; o < s; o++) {
          const r = this.subscriptions[o];
          r && r(e, n, i);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ot = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, at = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3;
function mr(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const ga = /* @__PURE__ */ Un(() => window.ScrollTimeline !== void 0);
class ya {
  constructor(e) {
    this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((e) => "finished" in e ? e.finished : e));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(e) {
    return this.animations[0][e];
  }
  setAll(e, n) {
    for (let i = 0; i < this.animations.length; i++)
      this.animations[i][e] = n;
  }
  attachTimeline(e, n) {
    const i = this.animations.map((s) => {
      if (ga() && s.attachTimeline)
        return s.attachTimeline(e);
      if (typeof n == "function")
        return n(s);
    });
    return () => {
      i.forEach((s, o) => {
        s && s(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(e) {
    this.setAll("time", e);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(e) {
    this.setAll("speed", e);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let e = 0;
    for (let n = 0; n < this.animations.length; n++)
      e = Math.max(e, this.animations[n].duration);
    return e;
  }
  runAll(e) {
    this.animations.forEach((n) => n[e]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class va extends ya {
  then(e, n) {
    return Promise.all(this.animations).then(e).catch(n);
  }
}
function Wn(t, e) {
  return t ? t[e] || t.default || t : void 0;
}
const mn = 2e4;
function gr(t) {
  let e = 0;
  const n = 50;
  let i = t.next(e);
  for (; !i.done && e < mn; )
    e += n, i = t.next(e);
  return e >= mn ? 1 / 0 : e;
}
function Gn(t) {
  return typeof t == "function";
}
function Si(t, e) {
  t.timeline = e, t.onfinish = null;
}
const zn = (t) => Array.isArray(t) && typeof t[0] == "number", ba = {
  linearEasing: void 0
};
function xa(t, e) {
  const n = /* @__PURE__ */ Un(t);
  return () => {
    var i;
    return (i = ba[e]) !== null && i !== void 0 ? i : n();
  };
}
const xe = /* @__PURE__ */ xa(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), yr = (t, e, n = 10) => {
  let i = "";
  const s = Math.max(Math.round(e / n), 2);
  for (let o = 0; o < s; o++)
    i += t(/* @__PURE__ */ Mt(0, s - 1, o)) + ", ";
  return `linear(${i.substring(0, i.length - 2)})`;
};
function vr(t) {
  return !!(typeof t == "function" && xe() || !t || typeof t == "string" && (t in gn || xe()) || zn(t) || Array.isArray(t) && t.every(vr));
}
const Nt = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`, gn = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Nt([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Nt([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Nt([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Nt([0.33, 1.53, 0.69, 0.99])
};
function br(t, e) {
  if (t)
    return typeof t == "function" && xe() ? yr(t, e) : zn(t) ? Nt(t) : Array.isArray(t) ? t.map((n) => br(n, e) || gn.easeOut) : gn[t];
}
const ce = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], Pi = {
  value: null
};
function Ta(t, e) {
  let n = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), s = !1, o = !1;
  const r = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, l = 0;
  function c(f) {
    r.has(f) && (u.schedule(f), t()), l++, f(a);
  }
  const u = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (f, h = !1, d = !1) => {
      const p = d && s ? n : i;
      return h && r.add(f), p.has(f) || p.add(f), f;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (f) => {
      i.delete(f), r.delete(f);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (f) => {
      if (a = f, s) {
        o = !0;
        return;
      }
      s = !0, [n, i] = [i, n], n.forEach(c), e && Pi.value && Pi.value.frameloop[e].push(l), l = 0, n.clear(), s = !1, o && (o = !1, u.process(f));
    }
  };
  return u;
}
const Sa = 40;
function xr(t, e) {
  let n = !1, i = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, r = ce.reduce((g, v) => (g[v] = Ta(o, e ? v : void 0), g), {}), { read: a, resolveKeyframes: l, update: c, preRender: u, render: f, postRender: h } = r, d = () => {
    const g = performance.now();
    n = !1, s.delta = i ? 1e3 / 60 : Math.max(Math.min(g - s.timestamp, Sa), 1), s.timestamp = g, s.isProcessing = !0, a.process(s), l.process(s), c.process(s), u.process(s), f.process(s), h.process(s), s.isProcessing = !1, n && e && (i = !1, t(d));
  }, m = () => {
    n = !0, i = !0, s.isProcessing || t(d);
  };
  return { schedule: ce.reduce((g, v) => {
    const x = r[v];
    return g[v] = (w, b = !1, T = !1) => (n || m(), x.schedule(w, b, T)), g;
  }, {}), cancel: (g) => {
    for (let v = 0; v < ce.length; v++)
      r[ce[v]].cancel(g);
  }, state: s, steps: r };
}
const { schedule: R, cancel: ft, state: j, steps: Ne } = /* @__PURE__ */ xr(typeof requestAnimationFrame < "u" ? requestAnimationFrame : K, !0), { schedule: qn } = /* @__PURE__ */ xr(queueMicrotask, !1);
let pe;
function Pa() {
  pe = void 0;
}
const nt = {
  now: () => (pe === void 0 && nt.set(j.isProcessing || ma.useManualTiming ? j.timestamp : performance.now()), pe),
  set: (t) => {
    pe = t, queueMicrotask(Pa);
  }
}, J = {
  x: !1,
  y: !1
};
function Tr() {
  return J.x || J.y;
}
function wa(t) {
  return t === "x" || t === "y" ? J[t] ? null : (J[t] = !0, () => {
    J[t] = !1;
  }) : J.x || J.y ? null : (J.x = J.y = !0, () => {
    J.x = J.y = !1;
  });
}
function Aa(t, e, n) {
  var i;
  if (t instanceof EventTarget)
    return [t];
  if (typeof t == "string") {
    let s = document;
    const o = (i = void 0) !== null && i !== void 0 ? i : s.querySelectorAll(t);
    return o ? Array.from(o) : [];
  }
  return Array.from(t);
}
function Sr(t, e) {
  const n = Aa(t), i = new AbortController(), s = {
    passive: !0,
    ...e,
    signal: i.signal
  };
  return [n, s, () => i.abort()];
}
function wi(t) {
  return !(t.pointerType === "touch" || Tr());
}
function Ca(t, e, n = {}) {
  const [i, s, o] = Sr(t, n), r = (a) => {
    if (!wi(a))
      return;
    const { target: l } = a, c = e(l, a);
    if (typeof c != "function" || !l)
      return;
    const u = (f) => {
      wi(f) && (c(f), l.removeEventListener("pointerleave", u));
    };
    l.addEventListener("pointerleave", u, s);
  };
  return i.forEach((a) => {
    a.addEventListener("pointerenter", r, s);
  }), o;
}
function Ai(t, e) {
  const n = `${e}PointerCapture`;
  if (t.target instanceof Element && n in t.target && t.pointerId !== void 0)
    try {
      t.target[n](t.pointerId);
    } catch {
    }
}
const Pr = (t, e) => e ? t === e ? !0 : Pr(t, e.parentElement) : !1, Kn = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, Va = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Ra(t) {
  return Va.has(t.tagName) || t.tabIndex !== -1;
}
const Ut = /* @__PURE__ */ new WeakSet();
function Ci(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function Ue(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const Ma = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const i = Ci(() => {
    if (Ut.has(n))
      return;
    Ue(n, "down");
    const s = Ci(() => {
      Ue(n, "up");
    }), o = () => Ue(n, "cancel");
    n.addEventListener("keyup", s, e), n.addEventListener("blur", o, e);
  });
  n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e);
};
function Vi(t) {
  return Kn(t) && !Tr();
}
function Da(t, e, n = {}) {
  const [i, s, o] = Sr(t, n), r = (a) => {
    const l = a.currentTarget;
    if (!l || !Vi(a) || Ut.has(l))
      return;
    Ut.add(l), Ai(a, "set");
    const c = e(l, a), u = (d, m) => {
      l.removeEventListener("pointerup", f), l.removeEventListener("pointercancel", h), Ai(d, "release"), !(!Vi(d) || !Ut.has(l)) && (Ut.delete(l), typeof c == "function" && c(d, { success: m }));
    }, f = (d) => {
      (d.isTrusted ? Ea(d, l instanceof Element ? l.getBoundingClientRect() : {
        left: 0,
        top: 0,
        right: window.innerWidth,
        bottom: window.innerHeight
      }) : !1) ? u(d, !1) : u(d, !(l instanceof Element) || Pr(l, d.target));
    }, h = (d) => {
      u(d, !1);
    };
    l.addEventListener("pointerup", f, s), l.addEventListener("pointercancel", h, s), l.addEventListener("lostpointercapture", h, s);
  };
  return i.forEach((a) => {
    a = n.useGlobalTarget ? window : a;
    let l = !1;
    a instanceof HTMLElement && (l = !0, !Ra(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0)), a.addEventListener("pointerdown", r, s), l && a.addEventListener("focus", (c) => Ma(c, s), s);
  }), o;
}
function Ea(t, e) {
  return t.clientX < e.left || t.clientX > e.right || t.clientY < e.top || t.clientY > e.bottom;
}
const Ri = 30, ka = (t) => !isNaN(parseFloat(t));
class La {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(e, n = {}) {
    this.version = "12.5.0", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i, s = !0) => {
      const o = nt.now();
      this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), s && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = nt.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = ka(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new $n());
    const i = this.events[e].add(n);
    return e === "change" ? () => {
      i(), R.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : i;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, n, i) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - i;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, n = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const e = nt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Ri)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Ri);
    return mr(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function qt(t, e) {
  return new La(t, e);
}
const wr = Lt({ strict: !1 }), Mi = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Dt = {};
for (const t in Mi)
  Dt[t] = {
    isEnabled: (e) => Mi[t].some((n) => !!e[n])
  };
function Oa(t) {
  for (const e in t)
    Dt[e] = {
      ...Dt[e],
      ...t[e]
    };
}
const Fa = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function Te(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Fa.has(t);
}
let Ar = (t) => !Te(t);
function ja(t) {
  t && (Ar = (e) => e.startsWith("on") ? !Te(e) : t(e));
}
try {
  ja(require("@emotion/is-prop-valid").default);
} catch {
}
function Ia(t, e, n) {
  const i = {};
  for (const s in t)
    s === "values" && typeof t.values == "object" || (Ar(s) || n === !0 && Te(s) || !e && !Te(s) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && s.startsWith("onDrag")) && (i[s] = t[s]);
  return i;
}
function Ba(t) {
  if (typeof Proxy > "u")
    return t;
  const e = /* @__PURE__ */ new Map(), n = (...i) => t(...i);
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (i, s) => s === "create" ? t : (e.has(s) || e.set(s, t(s)), e.get(s))
  });
}
const Me = /* @__PURE__ */ Lt({});
function De(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Kt(t) {
  return typeof t == "string" || Array.isArray(t);
}
const Hn = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Xn = ["initial", ...Hn];
function Ee(t) {
  return De(t.animate) || Xn.some((e) => Kt(t[e]));
}
function Cr(t) {
  return !!(Ee(t) || t.variants);
}
function _a(t, e) {
  if (Ee(t)) {
    const { initial: n, animate: i } = t;
    return {
      initial: n === !1 || Kt(n) ? n : void 0,
      animate: Kt(i) ? i : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function Na(t) {
  const { initial: e, animate: n } = _a(t, $(Me));
  return Re(() => ({ initial: e, animate: n }), [Di(e), Di(n)]);
}
function Di(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Ua = Symbol.for("motionComponentSymbol");
function St(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function $a(t, e, n) {
  return Rt(
    (i) => {
      i && t.onMount && t.onMount(i), e && (i ? e.mount(i) : e.unmount()), n && (typeof n == "function" ? n(i) : St(n) && (n.current = i));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [e]
  );
}
const Yn = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Wa = "framerAppearId", Vr = "data-" + Yn(Wa), Rr = Lt({});
function Ga(t, e, n, i, s) {
  var o, r;
  const { visualElement: a } = $(Me), l = $(wr), c = $(Bn), u = $(dr).reducedMotion, f = ut(null);
  i = i || l.renderer, !f.current && i && (f.current = i(t, {
    visualState: e,
    parent: a,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: u
  }));
  const h = f.current, d = $(Rr);
  h && !h.projection && s && (h.type === "html" || h.type === "svg") && za(f.current, n, s, d);
  const m = ut(!1);
  oa(() => {
    h && m.current && h.update(n, c);
  });
  const p = n[Vr], y = ut(!!p && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, p)) && ((r = window.MotionHasOptimisedAnimation) === null || r === void 0 ? void 0 : r.call(window, p)));
  return da(() => {
    h && (m.current = !0, window.MotionIsMounted = !0, h.updateFeatures(), qn.render(h.render), y.current && h.animationState && h.animationState.animateChanges());
  }), ne(() => {
    h && (!y.current && h.animationState && h.animationState.animateChanges(), y.current && (queueMicrotask(() => {
      var g;
      (g = window.MotionHandoffMarkAsComplete) === null || g === void 0 || g.call(window, p);
    }), y.current = !1));
  }), h;
}
function za(t, e, n, i) {
  const { layoutId: s, layout: o, drag: r, dragConstraints: a, layoutScroll: l, layoutRoot: c } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : Mr(t.parent)), t.projection.setOptions({
    layoutId: s,
    layout: o,
    alwaysMeasureLayout: !!r || a && St(a),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: i,
    layoutScroll: l,
    layoutRoot: c
  });
}
function Mr(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : Mr(t.parent);
}
function qa({ preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: i, Component: s }) {
  var o, r;
  t && Oa(t);
  function a(c, u) {
    let f;
    const h = {
      ...$(dr),
      ...c,
      layoutId: Ka(c)
    }, { isStatic: d } = h, m = Na(c), p = i(c, d);
    if (!d && In) {
      Ha();
      const y = Xa(h);
      f = y.MeasureLayout, m.visualElement = Ga(s, p, h, e, y.ProjectionNode);
    }
    return Q.jsxs(Me.Provider, { value: m, children: [f && m.visualElement ? Q.jsx(f, { visualElement: m.visualElement, ...h }) : null, n(s, c, $a(p, m.visualElement, u), p, d, m.visualElement)] });
  }
  a.displayName = `motion.${typeof s == "string" ? s : `create(${(r = (o = s.displayName) !== null && o !== void 0 ? o : s.name) !== null && r !== void 0 ? r : ""})`}`;
  const l = cr(a);
  return l[Ua] = s, l;
}
function Ka({ layoutId: t }) {
  const e = $(hr).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Ha(t, e) {
  $(wr).strict;
}
function Xa(t) {
  const { drag: e, layout: n } = Dt;
  if (!e && !n)
    return {};
  const i = { ...e, ...n };
  return {
    MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? i.MeasureLayout : void 0,
    ProjectionNode: i.ProjectionNode
  };
}
const Dr = (t) => (e) => typeof e == "string" && e.startsWith(t), Zn = /* @__PURE__ */ Dr("--"), Ya = /* @__PURE__ */ Dr("var(--"), Jn = (t) => Ya(t) ? Za.test(t.split("/*")[0].trim()) : !1, Za = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Ht = {};
function Ja(t) {
  for (const e in t)
    Ht[e] = t[e], Zn(e) && (Ht[e].isCSSVariable = !0);
}
const Ot = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], bt = new Set(Ot);
function Er(t, { layout: e, layoutId: n }) {
  return bt.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Ht[t] || t === "opacity");
}
const N = (t) => !!(t && t.getVelocity), kr = (t, e) => e && typeof t == "number" ? e.transform(t) : t, lt = (t, e, n) => n > e ? e : n < t ? t : n, Ft = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, Xt = {
  ...Ft,
  transform: (t) => lt(0, 1, t)
}, ue = {
  ...Ft,
  default: 1
}, ie = (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), ct = /* @__PURE__ */ ie("deg"), it = /* @__PURE__ */ ie("%"), A = /* @__PURE__ */ ie("px"), Qa = /* @__PURE__ */ ie("vh"), tl = /* @__PURE__ */ ie("vw"), Ei = {
  ...it,
  parse: (t) => it.parse(t) / 100,
  transform: (t) => it.transform(t * 100)
}, el = {
  // Border props
  borderWidth: A,
  borderTopWidth: A,
  borderRightWidth: A,
  borderBottomWidth: A,
  borderLeftWidth: A,
  borderRadius: A,
  radius: A,
  borderTopLeftRadius: A,
  borderTopRightRadius: A,
  borderBottomRightRadius: A,
  borderBottomLeftRadius: A,
  // Positioning props
  width: A,
  maxWidth: A,
  height: A,
  maxHeight: A,
  top: A,
  right: A,
  bottom: A,
  left: A,
  // Spacing props
  padding: A,
  paddingTop: A,
  paddingRight: A,
  paddingBottom: A,
  paddingLeft: A,
  margin: A,
  marginTop: A,
  marginRight: A,
  marginBottom: A,
  marginLeft: A,
  // Misc
  backgroundPositionX: A,
  backgroundPositionY: A
}, nl = {
  rotate: ct,
  rotateX: ct,
  rotateY: ct,
  rotateZ: ct,
  scale: ue,
  scaleX: ue,
  scaleY: ue,
  scaleZ: ue,
  skew: ct,
  skewX: ct,
  skewY: ct,
  distance: A,
  translateX: A,
  translateY: A,
  translateZ: A,
  x: A,
  y: A,
  z: A,
  perspective: A,
  transformPerspective: A,
  opacity: Xt,
  originX: Ei,
  originY: Ei,
  originZ: A
}, ki = {
  ...Ft,
  transform: Math.round
}, Qn = {
  ...el,
  ...nl,
  zIndex: ki,
  size: A,
  // SVG
  fillOpacity: Xt,
  strokeOpacity: Xt,
  numOctaves: ki
}, il = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, sl = Ot.length;
function rl(t, e, n) {
  let i = "", s = !0;
  for (let o = 0; o < sl; o++) {
    const r = Ot[o], a = t[r];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const c = kr(a, Qn[r]);
      if (!l) {
        s = !1;
        const u = il[r] || r;
        i += `${u}(${c}) `;
      }
      n && (e[r] = c);
    }
  }
  return i = i.trim(), n ? i = n(e, s ? "" : i) : s && (i = "none"), i;
}
function ti(t, e, n) {
  const { style: i, vars: s, transformOrigin: o } = t;
  let r = !1, a = !1;
  for (const l in e) {
    const c = e[l];
    if (bt.has(l)) {
      r = !0;
      continue;
    } else if (Zn(l)) {
      s[l] = c;
      continue;
    } else {
      const u = kr(c, Qn[l]);
      l.startsWith("origin") ? (a = !0, o[l] = u) : i[l] = u;
    }
  }
  if (e.transform || (r || n ? i.transform = rl(e, t.transform, n) : i.transform && (i.transform = "none")), a) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = o;
    i.transformOrigin = `${l} ${c} ${u}`;
  }
}
const ei = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Lr(t, e, n) {
  for (const i in e)
    !N(e[i]) && !Er(i, n) && (t[i] = e[i]);
}
function ol({ transformTemplate: t }, e) {
  return Re(() => {
    const n = ei();
    return ti(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function al(t, e) {
  const n = t.style || {}, i = {};
  return Lr(i, n, t), Object.assign(i, ol(t, e)), i;
}
function ll(t, e) {
  const n = {}, i = al(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n;
}
const cl = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function ni(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(cl.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
const ul = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, fl = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function hl(t, e, n = 1, i = 0, s = !0) {
  t.pathLength = 1;
  const o = s ? ul : fl;
  t[o.offset] = A.transform(-i);
  const r = A.transform(e), a = A.transform(n);
  t[o.array] = `${r} ${a}`;
}
function Li(t, e, n) {
  return typeof t == "string" ? t : A.transform(e + n * t);
}
function dl(t, e, n) {
  const i = Li(e, t.x, t.width), s = Li(n, t.y, t.height);
  return `${i} ${s}`;
}
function ii(t, {
  attrX: e,
  attrY: n,
  attrScale: i,
  originX: s,
  originY: o,
  pathLength: r,
  pathSpacing: a = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, u, f) {
  if (ti(t, c, f), u) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: h, style: d, dimensions: m } = t;
  h.transform && (m && (d.transform = h.transform), delete h.transform), m && (s !== void 0 || o !== void 0 || d.transform) && (d.transformOrigin = dl(m, s !== void 0 ? s : 0.5, o !== void 0 ? o : 0.5)), e !== void 0 && (h.x = e), n !== void 0 && (h.y = n), i !== void 0 && (h.scale = i), r !== void 0 && hl(h, r, a, l, !1);
}
const Or = () => ({
  ...ei(),
  attrs: {}
}), si = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function pl(t, e, n, i) {
  const s = Re(() => {
    const o = Or();
    return ii(o, e, si(i), t.transformTemplate), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    Lr(o, t.style, t), s.style = { ...o, ...s.style };
  }
  return s;
}
function ml(t = !1) {
  return (n, i, s, { latestValues: o }, r) => {
    const l = (ni(n) ? pl : ll)(i, o, r, n), c = Ia(i, typeof n == "string", t), u = n !== ur ? { ...c, ...l, ref: s } : {}, { children: f } = i, h = Re(() => N(f) ? f.get() : f, [f]);
    return aa(n, {
      ...u,
      children: h
    });
  };
}
function Oi(t) {
  const e = [{}, {}];
  return t == null || t.values.forEach((n, i) => {
    e[0][i] = n.get(), e[1][i] = n.getVelocity();
  }), e;
}
function ri(t, e, n, i) {
  if (typeof e == "function") {
    const [s, o] = Oi(i);
    e = e(n !== void 0 ? n : t.custom, s, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [s, o] = Oi(i);
    e = e(n !== void 0 ? n : t.custom, s, o);
  }
  return e;
}
const yn = (t) => Array.isArray(t), gl = (t) => !!(t && typeof t == "object" && t.mix && t.toValue), yl = (t) => yn(t) ? t[t.length - 1] || 0 : t;
function me(t) {
  const e = N(t) ? t.get() : t;
  return gl(e) ? e.toValue() : e;
}
function vl({ scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: n }, i, s, o) {
  const r = {
    latestValues: bl(i, s, o, t),
    renderState: e()
  };
  return n && (r.onMount = (a) => n({ props: i, current: a, ...r }), r.onUpdate = (a) => n(a)), r;
}
const Fr = (t) => (e, n) => {
  const i = $(Me), s = $(Bn), o = () => vl(t, e, i, s);
  return n ? o() : ha(o);
};
function bl(t, e, n, i) {
  const s = {}, o = i(t, {});
  for (const h in o)
    s[h] = me(o[h]);
  let { initial: r, animate: a } = t;
  const l = Ee(t), c = Cr(t);
  e && c && !l && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || r === !1;
  const f = u ? a : r;
  if (f && typeof f != "boolean" && !De(f)) {
    const h = Array.isArray(f) ? f : [f];
    for (let d = 0; d < h.length; d++) {
      const m = ri(t, h[d]);
      if (m) {
        const { transitionEnd: p, transition: y, ...g } = m;
        for (const v in g) {
          let x = g[v];
          if (Array.isArray(x)) {
            const w = u ? x.length - 1 : 0;
            x = x[w];
          }
          x !== null && (s[v] = x);
        }
        for (const v in p)
          s[v] = p[v];
      }
    }
  }
  return s;
}
function oi(t, e, n) {
  var i;
  const { style: s } = t, o = {};
  for (const r in s)
    (N(s[r]) || e.style && N(e.style[r]) || Er(r, t) || ((i = n == null ? void 0 : n.getValue(r)) === null || i === void 0 ? void 0 : i.liveStyle) !== void 0) && (o[r] = s[r]);
  return o;
}
const xl = {
  useVisualState: Fr({
    scrapeMotionValuesFromProps: oi,
    createRenderState: ei
  })
};
function jr(t, e) {
  try {
    e.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
  } catch {
    e.dimensions = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
}
function Ir(t, { style: e, vars: n }, i, s) {
  Object.assign(t.style, e, s && s.getProjectionStyles(i));
  for (const o in n)
    t.style.setProperty(o, n[o]);
}
const Br = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function _r(t, e, n, i) {
  Ir(t, e, void 0, i);
  for (const s in e.attrs)
    t.setAttribute(Br.has(s) ? s : Yn(s), e.attrs[s]);
}
function Nr(t, e, n) {
  const i = oi(t, e, n);
  for (const s in t)
    if (N(t[s]) || N(e[s])) {
      const o = Ot.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      i[o] = t[s];
    }
  return i;
}
const Fi = ["x", "y", "width", "height", "cx", "cy", "r"], Tl = {
  useVisualState: Fr({
    scrapeMotionValuesFromProps: Nr,
    createRenderState: Or,
    onUpdate: ({ props: t, prevProps: e, current: n, renderState: i, latestValues: s }) => {
      if (!n)
        return;
      let o = !!t.drag;
      if (!o) {
        for (const a in s)
          if (bt.has(a)) {
            o = !0;
            break;
          }
      }
      if (!o)
        return;
      let r = !e;
      if (e)
        for (let a = 0; a < Fi.length; a++) {
          const l = Fi[a];
          t[l] !== e[l] && (r = !0);
        }
      r && R.read(() => {
        jr(n, i), R.render(() => {
          ii(i, s, si(n.tagName), t.transformTemplate), _r(n, i);
        });
      });
    }
  })
};
function Sl(t, e) {
  return function(i, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const r = {
      ...ni(i) ? Tl : xl,
      preloadedFeatures: t,
      useRender: ml(s),
      createVisualElement: e,
      Component: i
    };
    return qa(r);
  };
}
function Yt(t, e, n) {
  const i = t.getProps();
  return ri(i, e, n !== void 0 ? n : i.custom, t);
}
const Ur = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Ot
]);
function Pl(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, qt(n));
}
function wl(t, e) {
  const n = Yt(t, e);
  let { transitionEnd: i = {}, transition: s = {}, ...o } = n || {};
  o = { ...o, ...i };
  for (const r in o) {
    const a = yl(o[r]);
    Pl(t, r, a);
  }
}
function Al(t) {
  return !!(N(t) && t.add);
}
function vn(t, e) {
  const n = t.getValue("willChange");
  if (Al(n))
    return n.add(e);
}
function $r(t) {
  return t.props[Vr];
}
const Wr = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, Cl = 1e-7, Vl = 12;
function Rl(t, e, n, i, s) {
  let o, r, a = 0;
  do
    r = e + (n - e) / 2, o = Wr(r, i, s) - t, o > 0 ? n = r : e = r;
  while (Math.abs(o) > Cl && ++a < Vl);
  return r;
}
function se(t, e, n, i) {
  if (t === e && n === i)
    return K;
  const s = (o) => Rl(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : Wr(s(o), e, i);
}
const Gr = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, zr = (t) => (e) => 1 - t(1 - e), qr = /* @__PURE__ */ se(0.33, 1.53, 0.69, 0.99), ai = /* @__PURE__ */ zr(qr), Kr = /* @__PURE__ */ Gr(ai), Hr = (t) => (t *= 2) < 1 ? 0.5 * ai(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), li = (t) => 1 - Math.sin(Math.acos(t)), Xr = zr(li), Yr = Gr(li), Zr = (t) => /^0[^.\s]+$/u.test(t);
function Ml(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Zr(t) : !0;
}
const $t = (t) => Math.round(t * 1e5) / 1e5, ci = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Dl(t) {
  return t == null;
}
const El = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, ui = (t, e) => (n) => !!(typeof n == "string" && El.test(n) && n.startsWith(t) || e && !Dl(n) && Object.prototype.hasOwnProperty.call(n, e)), Jr = (t, e, n) => (i) => {
  if (typeof i != "string")
    return i;
  const [s, o, r, a] = i.match(ci);
  return {
    [t]: parseFloat(s),
    [e]: parseFloat(o),
    [n]: parseFloat(r),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, kl = (t) => lt(0, 255, t), $e = {
  ...Ft,
  transform: (t) => Math.round(kl(t))
}, gt = {
  test: /* @__PURE__ */ ui("rgb", "red"),
  parse: /* @__PURE__ */ Jr("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) => "rgba(" + $e.transform(t) + ", " + $e.transform(e) + ", " + $e.transform(n) + ", " + $t(Xt.transform(i)) + ")"
};
function Ll(t) {
  let e = "", n = "", i = "", s = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), s = t.substring(4, 5), e += e, n += n, i += i, s += s), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(i, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const bn = {
  test: /* @__PURE__ */ ui("#"),
  parse: Ll,
  transform: gt.transform
}, Pt = {
  test: /* @__PURE__ */ ui("hsl", "hue"),
  parse: /* @__PURE__ */ Jr("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + it.transform($t(e)) + ", " + it.transform($t(n)) + ", " + $t(Xt.transform(i)) + ")"
}, _ = {
  test: (t) => gt.test(t) || bn.test(t) || Pt.test(t),
  parse: (t) => gt.test(t) ? gt.parse(t) : Pt.test(t) ? Pt.parse(t) : bn.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? gt.transform(t) : Pt.transform(t)
}, Ol = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Fl(t) {
  var e, n;
  return isNaN(t) && typeof t == "string" && (((e = t.match(ci)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(Ol)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Qr = "number", to = "color", jl = "var", Il = "var(", ji = "${}", Bl = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Zt(t) {
  const e = t.toString(), n = [], i = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let o = 0;
  const a = e.replace(Bl, (l) => (_.test(l) ? (i.color.push(o), s.push(to), n.push(_.parse(l))) : l.startsWith(Il) ? (i.var.push(o), s.push(jl), n.push(l)) : (i.number.push(o), s.push(Qr), n.push(parseFloat(l))), ++o, ji)).split(ji);
  return { values: n, split: a, indexes: i, types: s };
}
function eo(t) {
  return Zt(t).values;
}
function no(t) {
  const { split: e, types: n } = Zt(t), i = e.length;
  return (s) => {
    let o = "";
    for (let r = 0; r < i; r++)
      if (o += e[r], s[r] !== void 0) {
        const a = n[r];
        a === Qr ? o += $t(s[r]) : a === to ? o += _.transform(s[r]) : o += s[r];
      }
    return o;
  };
}
const _l = (t) => typeof t == "number" ? 0 : t;
function Nl(t) {
  const e = eo(t);
  return no(t)(e.map(_l));
}
const ht = {
  test: Fl,
  parse: eo,
  createTransformer: no,
  getAnimatableNone: Nl
}, Ul = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function $l(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [i] = n.match(ci) || [];
  if (!i)
    return t;
  const s = n.replace(i, "");
  let o = Ul.has(e) ? 1 : 0;
  return i !== n && (o *= 100), e + "(" + o + s + ")";
}
const Wl = /\b([a-z-]*)\(.*?\)/gu, xn = {
  ...ht,
  getAnimatableNone: (t) => {
    const e = t.match(Wl);
    return e ? e.map($l).join(" ") : t;
  }
}, Gl = {
  ...Qn,
  // Color props
  color: _,
  backgroundColor: _,
  outlineColor: _,
  fill: _,
  stroke: _,
  // Border props
  borderColor: _,
  borderTopColor: _,
  borderRightColor: _,
  borderBottomColor: _,
  borderLeftColor: _,
  filter: xn,
  WebkitFilter: xn
}, io = (t) => Gl[t];
function so(t, e) {
  let n = io(t);
  return n !== xn && (n = ht), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const zl = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function ql(t, e, n) {
  let i = 0, s;
  for (; i < t.length && !s; ) {
    const o = t[i];
    typeof o == "string" && !zl.has(o) && Zt(o).values.length && (s = t[i]), i++;
  }
  if (s && n)
    for (const o of e)
      t[o] = so(n, s);
}
const yt = (t) => t * 180 / Math.PI, Tn = (t) => {
  const e = yt(Math.atan2(t[1], t[0]));
  return Sn(e);
}, Kl = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: Tn,
  rotateZ: Tn,
  skewX: (t) => yt(Math.atan(t[1])),
  skewY: (t) => yt(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, Sn = (t) => (t = t % 360, t < 0 && (t += 360), t), Ii = Tn, Bi = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), _i = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), Hl = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Bi,
  scaleY: _i,
  scale: (t) => (Bi(t) + _i(t)) / 2,
  rotateX: (t) => Sn(yt(Math.atan2(t[6], t[5]))),
  rotateY: (t) => Sn(yt(Math.atan2(-t[2], t[0]))),
  rotateZ: Ii,
  rotate: Ii,
  skewX: (t) => yt(Math.atan(t[4])),
  skewY: (t) => yt(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function Ni(t) {
  return t.includes("scale") ? 1 : 0;
}
function Pn(t, e) {
  if (!t || t === "none")
    return Ni(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let i, s;
  if (n)
    i = Hl, s = n;
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    i = Kl, s = a;
  }
  if (!s)
    return Ni(e);
  const o = i[e], r = s[1].split(",").map(Yl);
  return typeof o == "function" ? o(r) : r[o];
}
const Xl = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return Pn(n, e);
};
function Yl(t) {
  return parseFloat(t.trim());
}
const Ui = (t) => t === Ft || t === A, Zl = /* @__PURE__ */ new Set(["x", "y", "z"]), Jl = Ot.filter((t) => !Zl.has(t));
function Ql(t) {
  const e = [];
  return Jl.forEach((n) => {
    const i = t.getValue(n);
    i !== void 0 && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const Et = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: (t, { transform: e }) => Pn(e, "x"),
  y: (t, { transform: e }) => Pn(e, "y")
};
Et.translateX = Et.x;
Et.translateY = Et.y;
const vt = /* @__PURE__ */ new Set();
let wn = !1, An = !1;
function ro() {
  if (An) {
    const t = Array.from(vt).filter((i) => i.needsMeasurement), e = new Set(t.map((i) => i.element)), n = /* @__PURE__ */ new Map();
    e.forEach((i) => {
      const s = Ql(i);
      s.length && (n.set(i, s), i.render());
    }), t.forEach((i) => i.measureInitialState()), e.forEach((i) => {
      i.render();
      const s = n.get(i);
      s && s.forEach(([o, r]) => {
        var a;
        (a = i.getValue(o)) === null || a === void 0 || a.set(r);
      });
    }), t.forEach((i) => i.measureEndState()), t.forEach((i) => {
      i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY);
    });
  }
  An = !1, wn = !1, vt.forEach((t) => t.complete()), vt.clear();
}
function oo() {
  vt.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (An = !0);
  });
}
function tc() {
  oo(), ro();
}
class fi {
  constructor(e, n, i, s, o, r = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = i, this.motionValue = s, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (vt.add(this), wn || (wn = !0, R.read(oo), R.resolveKeyframes(ro))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: i, motionValue: s } = this;
    for (let o = 0; o < e.length; o++)
      if (e[o] === null)
        if (o === 0) {
          const r = s == null ? void 0 : s.get(), a = e[e.length - 1];
          if (r !== void 0)
            e[0] = r;
          else if (i && n) {
            const l = i.readValue(n, a);
            l != null && (e[0] = l);
          }
          e[0] === void 0 && (e[0] = a), s && r === void 0 && s.set(e[0]);
        } else
          e[o] = e[o - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), vt.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, vt.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const ao = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t), ec = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function nc(t) {
  const e = ec.exec(t);
  if (!e)
    return [,];
  const [, n, i, s] = e;
  return [`--${n ?? i}`, s];
}
function lo(t, e, n = 1) {
  const [i, s] = nc(t);
  if (!i)
    return;
  const o = window.getComputedStyle(e).getPropertyValue(i);
  if (o) {
    const r = o.trim();
    return ao(r) ? parseFloat(r) : r;
  }
  return Jn(s) ? lo(s, e, n + 1) : s;
}
const co = (t) => (e) => e.test(t), ic = {
  test: (t) => t === "auto",
  parse: (t) => t
}, uo = [Ft, A, it, ct, tl, Qa, ic], $i = (t) => uo.find(co(t));
class fo extends fi {
  constructor(e, n, i, s, o) {
    super(e, n, i, s, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: i } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let c = e[l];
      if (typeof c == "string" && (c = c.trim(), Jn(c))) {
        const u = lo(c, n.current);
        u !== void 0 && (e[l] = u), l === e.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !Ur.has(i) || e.length !== 2)
      return;
    const [s, o] = e, r = $i(s), a = $i(o);
    if (r !== a)
      if (Ui(r) && Ui(a))
        for (let l = 0; l < e.length; l++) {
          const c = e[l];
          typeof c == "string" && (e[l] = parseFloat(c));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, i = [];
    for (let s = 0; s < e.length; s++)
      Ml(e[s]) && i.push(s);
    i.length && ql(e, i, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: i } = this;
    if (!e || !e.current)
      return;
    i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Et[i](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const s = n[n.length - 1];
    s !== void 0 && e.getValue(i, s).jump(s, !1);
  }
  measureEndState() {
    var e;
    const { element: n, name: i, unresolvedKeyframes: s } = this;
    if (!n || !n.current)
      return;
    const o = n.getValue(i);
    o && o.jump(this.measuredOrigin, !1);
    const r = s.length - 1, a = s[r];
    s[r] = Et[i](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([l, c]) => {
      n.getValue(l).set(c);
    }), this.resolveNoneKeyframes();
  }
}
const Wi = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(ht.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function sc(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function rc(t, e, n, i) {
  const s = t[0];
  if (s === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const o = t[t.length - 1], r = Wi(s, e), a = Wi(o, e);
  return !r || !a ? !1 : sc(t) || (n === "spring" || Gn(n)) && i;
}
const oc = (t) => t !== null;
function ke(t, { repeat: e, repeatType: n = "loop" }, i) {
  const s = t.filter(oc), o = e && n !== "loop" && e % 2 === 1 ? 0 : s.length - 1;
  return !o || i === void 0 ? s[o] : i;
}
const ac = 40;
class ho {
  constructor({ autoplay: e = !0, delay: n = 0, type: i = "keyframes", repeat: s = 0, repeatDelay: o = 0, repeatType: r = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = nt.now(), this.options = {
      autoplay: e,
      delay: n,
      type: i,
      repeat: s,
      repeatDelay: o,
      repeatType: r,
      ...a
    }, this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > ac ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && tc(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(e, n) {
    this.resolvedAt = nt.now(), this.hasAttemptedResolve = !0;
    const { name: i, type: s, velocity: o, delay: r, onComplete: a, onUpdate: l, isGenerator: c } = this.options;
    if (!c && !rc(e, i, s, o))
      if (r)
        this.options.duration = 0;
      else {
        l && l(ke(e, this.options, n)), a && a(), this.resolveFinishedPromise();
        return;
      }
    const u = this.initPlayback(e, n);
    u !== !1 && (this._resolved = {
      keyframes: e,
      finalKeyframe: n,
      ...u
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, n) {
    return this.currentFinishedPromise.then(e, n);
  }
  flatten() {
    this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((e) => {
      this.resolveFinishedPromise = e;
    });
  }
}
const D = (t, e, n) => t + (e - t) * n;
function We(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function lc({ hue: t, saturation: e, lightness: n, alpha: i }) {
  t /= 360, e /= 100, n /= 100;
  let s = 0, o = 0, r = 0;
  if (!e)
    s = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    s = We(l, a, t + 1 / 3), o = We(l, a, t), r = We(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: i
  };
}
function Se(t, e) {
  return (n) => n > 0 ? e : t;
}
const Ge = (t, e, n) => {
  const i = t * t, s = n * (e * e - i) + i;
  return s < 0 ? 0 : Math.sqrt(s);
}, cc = [bn, gt, Pt], uc = (t) => cc.find((e) => e.test(t));
function Gi(t) {
  const e = uc(t);
  if (!e)
    return !1;
  let n = e.parse(t);
  return e === Pt && (n = lc(n)), n;
}
const zi = (t, e) => {
  const n = Gi(t), i = Gi(e);
  if (!n || !i)
    return Se(t, e);
  const s = { ...n };
  return (o) => (s.red = Ge(n.red, i.red, o), s.green = Ge(n.green, i.green, o), s.blue = Ge(n.blue, i.blue, o), s.alpha = D(n.alpha, i.alpha, o), gt.transform(s));
}, fc = (t, e) => (n) => e(t(n)), re = (...t) => t.reduce(fc), Cn = /* @__PURE__ */ new Set(["none", "hidden"]);
function hc(t, e) {
  return Cn.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function dc(t, e) {
  return (n) => D(t, e, n);
}
function hi(t) {
  return typeof t == "number" ? dc : typeof t == "string" ? Jn(t) ? Se : _.test(t) ? zi : gc : Array.isArray(t) ? po : typeof t == "object" ? _.test(t) ? zi : pc : Se;
}
function po(t, e) {
  const n = [...t], i = n.length, s = t.map((o, r) => hi(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < i; r++)
      n[r] = s[r](o);
    return n;
  };
}
function pc(t, e) {
  const n = { ...t, ...e }, i = {};
  for (const s in n)
    t[s] !== void 0 && e[s] !== void 0 && (i[s] = hi(t[s])(t[s], e[s]));
  return (s) => {
    for (const o in i)
      n[o] = i[o](s);
    return n;
  };
}
function mc(t, e) {
  var n;
  const i = [], s = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < e.values.length; o++) {
    const r = e.types[o], a = t.indexes[r][s[r]], l = (n = t.values[a]) !== null && n !== void 0 ? n : 0;
    i[o] = l, s[r]++;
  }
  return i;
}
const gc = (t, e) => {
  const n = ht.createTransformer(e), i = Zt(t), s = Zt(e);
  return i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length ? Cn.has(t) && !s.values.length || Cn.has(e) && !i.values.length ? hc(t, e) : re(po(mc(i, s), s.values), n) : Se(t, e);
};
function mo(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? D(t, e, n) : hi(t)(t, e);
}
const yc = 5;
function go(t, e, n) {
  const i = Math.max(e - yc, 0);
  return mr(n - t(i), e - i);
}
const k = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, qi = 1e-3;
function vc({ duration: t = k.duration, bounce: e = k.bounce, velocity: n = k.velocity, mass: i = k.mass }) {
  let s, o, r = 1 - e;
  r = lt(k.minDamping, k.maxDamping, r), t = lt(k.minDuration, k.maxDuration, /* @__PURE__ */ at(t)), r < 1 ? (s = (c) => {
    const u = c * r, f = u * t, h = u - n, d = Vn(c, r), m = Math.exp(-f);
    return qi - h / d * m;
  }, o = (c) => {
    const f = c * r * t, h = f * n + n, d = Math.pow(r, 2) * Math.pow(c, 2) * t, m = Math.exp(-f), p = Vn(Math.pow(c, 2), r);
    return (-s(c) + qi > 0 ? -1 : 1) * ((h - d) * m) / p;
  }) : (s = (c) => {
    const u = Math.exp(-c * t), f = (c - n) * t + 1;
    return -1e-3 + u * f;
  }, o = (c) => {
    const u = Math.exp(-c * t), f = (n - c) * (t * t);
    return u * f;
  });
  const a = 5 / t, l = xc(s, o, a);
  if (t = /* @__PURE__ */ ot(t), isNaN(l))
    return {
      stiffness: k.stiffness,
      damping: k.damping,
      duration: t
    };
  {
    const c = Math.pow(l, 2) * i;
    return {
      stiffness: c,
      damping: r * 2 * Math.sqrt(i * c),
      duration: t
    };
  }
}
const bc = 12;
function xc(t, e, n) {
  let i = n;
  for (let s = 1; s < bc; s++)
    i = i - t(i) / e(i);
  return i;
}
function Vn(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Tc = ["duration", "bounce"], Sc = ["stiffness", "damping", "mass"];
function Ki(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Pc(t) {
  let e = {
    velocity: k.velocity,
    stiffness: k.stiffness,
    damping: k.damping,
    mass: k.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!Ki(t, Sc) && Ki(t, Tc))
    if (t.visualDuration) {
      const n = t.visualDuration, i = 2 * Math.PI / (n * 1.2), s = i * i, o = 2 * lt(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
      e = {
        ...e,
        mass: k.mass,
        stiffness: s,
        damping: o
      };
    } else {
      const n = vc(t);
      e = {
        ...e,
        ...n,
        mass: k.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function yo(t = k.visualDuration, e = k.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: i, restDelta: s } = n;
  const o = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: l, damping: c, mass: u, duration: f, velocity: h, isResolvedFromDuration: d } = Pc({
    ...n,
    velocity: -/* @__PURE__ */ at(n.velocity || 0)
  }), m = h || 0, p = c / (2 * Math.sqrt(l * u)), y = r - o, g = /* @__PURE__ */ at(Math.sqrt(l / u)), v = Math.abs(y) < 5;
  i || (i = v ? k.restSpeed.granular : k.restSpeed.default), s || (s = v ? k.restDelta.granular : k.restDelta.default);
  let x;
  if (p < 1) {
    const b = Vn(g, p);
    x = (T) => {
      const S = Math.exp(-p * g * T);
      return r - S * ((m + p * g * y) / b * Math.sin(b * T) + y * Math.cos(b * T));
    };
  } else if (p === 1)
    x = (b) => r - Math.exp(-g * b) * (y + (m + g * y) * b);
  else {
    const b = g * Math.sqrt(p * p - 1);
    x = (T) => {
      const S = Math.exp(-p * g * T), P = Math.min(b * T, 300);
      return r - S * ((m + p * g * y) * Math.sinh(P) + b * y * Math.cosh(P)) / b;
    };
  }
  const w = {
    calculatedDuration: d && f || null,
    next: (b) => {
      const T = x(b);
      if (d)
        a.done = b >= f;
      else {
        let S = 0;
        p < 1 && (S = b === 0 ? /* @__PURE__ */ ot(m) : go(x, b, T));
        const P = Math.abs(S) <= i, M = Math.abs(r - T) <= s;
        a.done = P && M;
      }
      return a.value = a.done ? r : T, a;
    },
    toString: () => {
      const b = Math.min(gr(w), mn), T = yr((S) => w.next(b * S).value, b, 30);
      return b + "ms " + T;
    }
  };
  return w;
}
function Hi({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: i = 325, bounceDamping: s = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const f = t[0], h = {
    done: !1,
    value: f
  }, d = (P) => a !== void 0 && P < a || l !== void 0 && P > l, m = (P) => a === void 0 ? l : l === void 0 || Math.abs(a - P) < Math.abs(l - P) ? a : l;
  let p = n * e;
  const y = f + p, g = r === void 0 ? y : r(y);
  g !== y && (p = g - f);
  const v = (P) => -p * Math.exp(-P / i), x = (P) => g + v(P), w = (P) => {
    const M = v(P), E = x(P);
    h.done = Math.abs(M) <= c, h.value = h.done ? g : E;
  };
  let b, T;
  const S = (P) => {
    d(h.value) && (b = P, T = yo({
      keyframes: [h.value, m(h.value)],
      velocity: go(x, P, h.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: o,
      restDelta: c,
      restSpeed: u
    }));
  };
  return S(0), {
    calculatedDuration: null,
    next: (P) => {
      let M = !1;
      return !T && b === void 0 && (M = !0, w(P), S(P)), b !== void 0 && P >= b ? T.next(P - b) : (!M && w(P), h);
    }
  };
}
const wc = /* @__PURE__ */ se(0.42, 0, 1, 1), Ac = /* @__PURE__ */ se(0, 0, 0.58, 1), vo = /* @__PURE__ */ se(0.42, 0, 0.58, 1), Cc = (t) => Array.isArray(t) && typeof t[0] != "number", Vc = {
  linear: K,
  easeIn: wc,
  easeInOut: vo,
  easeOut: Ac,
  circIn: li,
  circInOut: Yr,
  circOut: Xr,
  backIn: ai,
  backInOut: Kr,
  backOut: qr,
  anticipate: Hr
}, Xi = (t) => {
  if (zn(t)) {
    pr(t.length === 4);
    const [e, n, i, s] = t;
    return se(e, n, i, s);
  } else if (typeof t == "string")
    return Vc[t];
  return t;
};
function Rc(t, e, n) {
  const i = [], s = n || mo, o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = s(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || K : e;
      a = re(l, a);
    }
    i.push(a);
  }
  return i;
}
function Mc(t, e, { clamp: n = !0, ease: i, mixer: s } = {}) {
  const o = t.length;
  if (pr(o === e.length), o === 1)
    return () => e[0];
  if (o === 2 && e[0] === e[1])
    return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = Rc(e, i, s), l = a.length, c = (u) => {
    if (r && u < t[0])
      return e[0];
    let f = 0;
    if (l > 1)
      for (; f < t.length - 2 && !(u < t[f + 1]); f++)
        ;
    const h = /* @__PURE__ */ Mt(t[f], t[f + 1], u);
    return a[f](h);
  };
  return n ? (u) => c(lt(t[0], t[o - 1], u)) : c;
}
function Dc(t, e) {
  const n = t[t.length - 1];
  for (let i = 1; i <= e; i++) {
    const s = /* @__PURE__ */ Mt(0, e, i);
    t.push(D(n, 1, s));
  }
}
function Ec(t) {
  const e = [0];
  return Dc(e, t.length - 1), e;
}
function kc(t, e) {
  return t.map((n) => n * e);
}
function Lc(t, e) {
  return t.map(() => e || vo).splice(0, t.length - 1);
}
function Pe({ duration: t = 300, keyframes: e, times: n, ease: i = "easeInOut" }) {
  const s = Cc(i) ? i.map(Xi) : Xi(i), o = {
    done: !1,
    value: e[0]
  }, r = kc(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : Ec(e),
    t
  ), a = Mc(r, e, {
    ease: Array.isArray(s) ? s : Lc(e, s)
  });
  return {
    calculatedDuration: t,
    next: (l) => (o.value = a(l), o.done = l >= t, o)
  };
}
const Oc = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: () => R.update(e, !0),
    stop: () => ft(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => j.isProcessing ? j.timestamp : nt.now()
  };
}, Fc = {
  decay: Hi,
  inertia: Hi,
  tween: Pe,
  keyframes: Pe,
  spring: yo
}, jc = (t) => t / 100;
class di extends ho {
  constructor(e) {
    super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: i, element: s, keyframes: o } = this.options, r = (s == null ? void 0 : s.KeyframeResolver) || fi, a = (l, c) => this.onKeyframesResolved(l, c);
    this.resolver = new r(o, a, n, i, s), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(e) {
    const { type: n = "keyframes", repeat: i = 0, repeatDelay: s = 0, repeatType: o, velocity: r = 0 } = this.options, a = Gn(n) ? n : Fc[n] || Pe;
    let l, c;
    a !== Pe && typeof e[0] != "number" && (l = re(jc, mo(e[0], e[1])), e = [0, 100]);
    const u = a({ ...this.options, keyframes: e });
    o === "mirror" && (c = a({
      ...this.options,
      keyframes: [...e].reverse(),
      velocity: -r
    })), u.calculatedDuration === null && (u.calculatedDuration = gr(u));
    const { calculatedDuration: f } = u, h = f + s, d = h * (i + 1) - s;
    return {
      generator: u,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
      calculatedDuration: f,
      resolvedDuration: h,
      totalDuration: d
    };
  }
  onPostResolved() {
    const { autoplay: e = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(e, n = !1) {
    const { resolved: i } = this;
    if (!i) {
      const { keyframes: P } = this.options;
      return { done: !0, value: P[P.length - 1] };
    }
    const { finalKeyframe: s, generator: o, mirroredGenerator: r, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: c, totalDuration: u, resolvedDuration: f } = i;
    if (this.startTime === null)
      return o.next(0);
    const { delay: h, repeat: d, repeatType: m, repeatDelay: p, onUpdate: y } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - u / this.speed, this.startTime)), n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
    const g = this.currentTime - h * (this.speed >= 0 ? 1 : -1), v = this.speed >= 0 ? g < 0 : g > u;
    this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = u);
    let x = this.currentTime, w = o;
    if (d) {
      const P = Math.min(this.currentTime, u) / f;
      let M = Math.floor(P), E = P % 1;
      !E && P >= 1 && (E = 1), E === 1 && M--, M = Math.min(M, d + 1), !!(M % 2) && (m === "reverse" ? (E = 1 - E, p && (E -= p / f)) : m === "mirror" && (w = r)), x = lt(0, 1, E) * f;
    }
    const b = v ? { done: !1, value: l[0] } : w.next(x);
    a && (b.value = a(b.value));
    let { done: T } = b;
    !v && c !== null && (T = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const S = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
    return S && s !== void 0 && (b.value = ke(l, this.options, s)), y && y(b.value), S && this.finish(), b;
  }
  get duration() {
    const { resolved: e } = this;
    return e ? /* @__PURE__ */ at(e.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ at(this.currentTime);
  }
  set time(e) {
    e = /* @__PURE__ */ ot(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = /* @__PURE__ */ at(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: e = Oc, onPlay: n, startTime: i } = this.options;
    this.driver || (this.driver = e((o) => this.tick(o))), n && n();
    const s = this.driver.now();
    this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = s) : this.startTime = i ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var e;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: e } = this.options;
    e && e();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, !0);
  }
}
const Ic = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function Bc(t, e, n, { delay: i = 0, duration: s = 300, repeat: o = 0, repeatType: r = "loop", ease: a = "easeInOut", times: l } = {}) {
  const c = { [e]: n };
  l && (c.offset = l);
  const u = br(a, s);
  return Array.isArray(u) && (c.easing = u), t.animate(c, {
    delay: i,
    duration: s,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal"
  });
}
const _c = /* @__PURE__ */ Un(() => Object.hasOwnProperty.call(Element.prototype, "animate")), we = 10, Nc = 2e4;
function Uc(t) {
  return Gn(t.type) || t.type === "spring" || !vr(t.ease);
}
function $c(t, e) {
  const n = new di({
    ...e,
    keyframes: t,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let i = { done: !1, value: t[0] };
  const s = [];
  let o = 0;
  for (; !i.done && o < Nc; )
    i = n.sample(o), s.push(i.value), o += we;
  return {
    times: void 0,
    keyframes: s,
    duration: o - we,
    ease: "linear"
  };
}
const bo = {
  anticipate: Hr,
  backInOut: Kr,
  circInOut: Yr
};
function Wc(t) {
  return t in bo;
}
class Yi extends ho {
  constructor(e) {
    super(e);
    const { name: n, motionValue: i, element: s, keyframes: o } = this.options;
    this.resolver = new fo(o, (r, a) => this.onKeyframesResolved(r, a), n, i, s), this.resolver.scheduleResolve();
  }
  initPlayback(e, n) {
    let { duration: i = 300, times: s, ease: o, type: r, motionValue: a, name: l, startTime: c } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof o == "string" && xe() && Wc(o) && (o = bo[o]), Uc(this.options)) {
      const { onComplete: f, onUpdate: h, motionValue: d, element: m, ...p } = this.options, y = $c(e, p);
      e = y.keyframes, e.length === 1 && (e[1] = e[0]), i = y.duration, s = y.times, o = y.ease, r = "keyframes";
    }
    const u = Bc(a.owner.current, l, e, { ...this.options, duration: i, times: s, ease: o });
    return u.startTime = c ?? this.calcStartTime(), this.pendingTimeline ? (Si(u, this.pendingTimeline), this.pendingTimeline = void 0) : u.onfinish = () => {
      const { onComplete: f } = this.options;
      a.set(ke(e, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: u,
      duration: i,
      times: s,
      type: r,
      ease: o,
      keyframes: e
    };
  }
  get duration() {
    const { resolved: e } = this;
    if (!e)
      return 0;
    const { duration: n } = e;
    return /* @__PURE__ */ at(n);
  }
  get time() {
    const { resolved: e } = this;
    if (!e)
      return 0;
    const { animation: n } = e;
    return /* @__PURE__ */ at(n.currentTime || 0);
  }
  set time(e) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: i } = n;
    i.currentTime = /* @__PURE__ */ ot(e);
  }
  get speed() {
    const { resolved: e } = this;
    if (!e)
      return 1;
    const { animation: n } = e;
    return n.playbackRate;
  }
  set speed(e) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: i } = n;
    i.playbackRate = e;
  }
  get state() {
    const { resolved: e } = this;
    if (!e)
      return "idle";
    const { animation: n } = e;
    return n.playState;
  }
  get startTime() {
    const { resolved: e } = this;
    if (!e)
      return null;
    const { animation: n } = e;
    return n.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(e) {
    if (!this._resolved)
      this.pendingTimeline = e;
    else {
      const { resolved: n } = this;
      if (!n)
        return K;
      const { animation: i } = n;
      Si(i, e);
    }
    return K;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: e } = this;
    if (!e)
      return;
    const { animation: n } = e;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: e } = this;
    if (!e)
      return;
    const { animation: n } = e;
    n.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: e } = this;
    if (!e)
      return;
    const { animation: n, keyframes: i, duration: s, type: o, ease: r, times: a } = e;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: c, onUpdate: u, onComplete: f, element: h, ...d } = this.options, m = new di({
        ...d,
        keyframes: i,
        duration: s,
        type: o,
        ease: r,
        times: a,
        isGenerator: !0
      }), p = /* @__PURE__ */ ot(this.time);
      c.setWithVelocity(m.sample(p - we).value, m.sample(p).value, we);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: e } = this;
    e && e.animation.finish();
  }
  cancel() {
    const { resolved: e } = this;
    e && e.animation.cancel();
  }
  static supports(e) {
    const { motionValue: n, name: i, repeatDelay: s, repeatType: o, damping: r, type: a } = e;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
      return !1;
    const { onUpdate: l, transformTemplate: c } = n.owner.getProps();
    return _c() && i && Ic.has(i) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !c && !s && o !== "mirror" && r !== 0 && a !== "inertia";
  }
}
const Gc = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, zc = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), qc = {
  type: "keyframes",
  duration: 0.8
}, Kc = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Hc = (t, { keyframes: e }) => e.length > 2 ? qc : bt.has(t) ? t.startsWith("scale") ? zc(e[1]) : Gc : Kc;
function Xc({ when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: s, repeat: o, repeatType: r, repeatDelay: a, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
const pi = (t, e, n, i = {}, s, o) => (r) => {
  const a = Wn(i, t) || {}, l = a.delay || i.delay || 0;
  let { elapsed: c = 0 } = i;
  c = c - /* @__PURE__ */ ot(l);
  let u = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...a,
    delay: -c,
    onUpdate: (h) => {
      e.set(h), a.onUpdate && a.onUpdate(h);
    },
    onComplete: () => {
      r(), a.onComplete && a.onComplete();
    },
    name: t,
    motionValue: e,
    element: o ? void 0 : s
  };
  Xc(a) || (u = {
    ...u,
    ...Hc(t, u)
  }), u.duration && (u.duration = /* @__PURE__ */ ot(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ ot(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let f = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (f = !0)), u.allowFlatten = !a.type && !a.ease, f && !o && e.get() !== void 0) {
    const h = ke(u.keyframes, a);
    if (h !== void 0)
      return R.update(() => {
        u.onUpdate(h), u.onComplete();
      }), new va([]);
  }
  return !o && Yi.supports(u) ? new Yi(u) : new di(u);
};
function Yc({ protectedKeys: t, needsAnimating: e }, n) {
  const i = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, i;
}
function xo(t, e, { delay: n = 0, transitionOverride: i, type: s } = {}) {
  var o;
  let { transition: r = t.getDefaultTransition(), transitionEnd: a, ...l } = e;
  i && (r = i);
  const c = [], u = s && t.animationState && t.animationState.getState()[s];
  for (const f in l) {
    const h = t.getValue(f, (o = t.latestValues[f]) !== null && o !== void 0 ? o : null), d = l[f];
    if (d === void 0 || u && Yc(u, f))
      continue;
    const m = {
      delay: n,
      ...Wn(r || {}, f)
    };
    let p = !1;
    if (window.MotionHandoffAnimation) {
      const g = $r(t);
      if (g) {
        const v = window.MotionHandoffAnimation(g, f, R);
        v !== null && (m.startTime = v, p = !0);
      }
    }
    vn(t, f), h.start(pi(f, h, d, t.shouldReduceMotion && Ur.has(f) ? { type: !1 } : m, t, p));
    const y = h.animation;
    y && c.push(y);
  }
  return a && Promise.all(c).then(() => {
    R.update(() => {
      a && wl(t, a);
    });
  }), c;
}
function Rn(t, e, n = {}) {
  var i;
  const s = Yt(t, e, n.type === "exit" ? (i = t.presenceContext) === null || i === void 0 ? void 0 : i.custom : void 0);
  let { transition: o = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (o = n.transitionOverride);
  const r = s ? () => Promise.all(xo(t, s, n)) : () => Promise.resolve(), a = t.variantChildren && t.variantChildren.size ? (c = 0) => {
    const { delayChildren: u = 0, staggerChildren: f, staggerDirection: h } = o;
    return Zc(t, e, u + c, f, h, n);
  } : () => Promise.resolve(), { when: l } = o;
  if (l) {
    const [c, u] = l === "beforeChildren" ? [r, a] : [a, r];
    return c().then(() => u());
  } else
    return Promise.all([r(), a(n.delay)]);
}
function Zc(t, e, n = 0, i = 0, s = 1, o) {
  const r = [], a = (t.variantChildren.size - 1) * i, l = s === 1 ? (c = 0) => c * i : (c = 0) => a - c * i;
  return Array.from(t.variantChildren).sort(Jc).forEach((c, u) => {
    c.notify("AnimationStart", e), r.push(Rn(c, e, {
      ...o,
      delay: n + l(u)
    }).then(() => c.notify("AnimationComplete", e)));
  }), Promise.all(r);
}
function Jc(t, e) {
  return t.sortNodePosition(e);
}
function Qc(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let i;
  if (Array.isArray(e)) {
    const s = e.map((o) => Rn(t, o, n));
    i = Promise.all(s);
  } else if (typeof e == "string")
    i = Rn(t, e, n);
  else {
    const s = typeof e == "function" ? Yt(t, e, n.custom) : e;
    i = Promise.all(xo(t, s, n));
  }
  return i.then(() => {
    t.notify("AnimationComplete", e);
  });
}
function To(t, e) {
  if (!Array.isArray(e))
    return !1;
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let i = 0; i < n; i++)
    if (e[i] !== t[i])
      return !1;
  return !0;
}
const tu = Xn.length;
function So(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? So(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < tu; n++) {
    const i = Xn[n], s = t.props[i];
    (Kt(s) || s === !1) && (e[i] = s);
  }
  return e;
}
const eu = [...Hn].reverse(), nu = Hn.length;
function iu(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: i }) => Qc(t, n, i)));
}
function su(t) {
  let e = iu(t), n = Zi(), i = !0;
  const s = (l) => (c, u) => {
    var f;
    const h = Yt(t, u, l === "exit" ? (f = t.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
    if (h) {
      const { transition: d, transitionEnd: m, ...p } = h;
      c = { ...c, ...p, ...m };
    }
    return c;
  };
  function o(l) {
    e = l(t);
  }
  function r(l) {
    const { props: c } = t, u = So(t.parent) || {}, f = [], h = /* @__PURE__ */ new Set();
    let d = {}, m = 1 / 0;
    for (let y = 0; y < nu; y++) {
      const g = eu[y], v = n[g], x = c[g] !== void 0 ? c[g] : u[g], w = Kt(x), b = g === l ? v.isActive : null;
      b === !1 && (m = y);
      let T = x === u[g] && x !== c[g] && w;
      if (T && i && t.manuallyAnimateOnMount && (T = !1), v.protectedKeys = { ...d }, // If it isn't active and hasn't *just* been set as inactive
      !v.isActive && b === null || // If we didn't and don't have any defined prop for this animation type
      !x && !v.prevProp || // Or if the prop doesn't define an animation
      De(x) || typeof x == "boolean")
        continue;
      const S = ru(v.prevProp, x);
      let P = S || // If we're making this variant active, we want to always make it active
      g === l && v.isActive && !T && w || // If we removed a higher-priority variant (i is in reverse order)
      y > m && w, M = !1;
      const E = Array.isArray(x) ? x : [x];
      let q = E.reduce(s(g), {});
      b === !1 && (q = {});
      const { prevResolvedValues: xt = {} } = v, L = {
        ...xt,
        ...q
      }, Z = (U) => {
        P = !0, h.has(U) && (M = !0, h.delete(U)), v.needsAnimating[U] = !0;
        const rt = t.getValue(U);
        rt && (rt.liveStyle = !1);
      };
      for (const U in L) {
        const rt = q[U], Ie = xt[U];
        if (d.hasOwnProperty(U))
          continue;
        let Be = !1;
        yn(rt) && yn(Ie) ? Be = !To(rt, Ie) : Be = rt !== Ie, Be ? rt != null ? Z(U) : h.add(U) : rt !== void 0 && h.has(U) ? Z(U) : v.protectedKeys[U] = !0;
      }
      v.prevProp = x, v.prevResolvedValues = q, v.isActive && (d = { ...d, ...q }), i && t.blockInitialAnimation && (P = !1), P && (!(T && S) || M) && f.push(...E.map((U) => ({
        animation: U,
        options: { type: g }
      })));
    }
    if (h.size) {
      const y = {};
      if (typeof c.initial != "boolean") {
        const g = Yt(t, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        g && g.transition && (y.transition = g.transition);
      }
      h.forEach((g) => {
        const v = t.getBaseTarget(g), x = t.getValue(g);
        x && (x.liveStyle = !0), y[g] = v ?? null;
      }), f.push({ animation: y });
    }
    let p = !!f.length;
    return i && (c.initial === !1 || c.initial === c.animate) && !t.manuallyAnimateOnMount && (p = !1), i = !1, p ? e(f) : Promise.resolve();
  }
  function a(l, c) {
    var u;
    if (n[l].isActive === c)
      return Promise.resolve();
    (u = t.variantChildren) === null || u === void 0 || u.forEach((h) => {
      var d;
      return (d = h.animationState) === null || d === void 0 ? void 0 : d.setActive(l, c);
    }), n[l].isActive = c;
    const f = r(l);
    for (const h in n)
      n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: r,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = Zi(), i = !0;
    }
  };
}
function ru(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !To(e, t) : !1;
}
function pt(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Zi() {
  return {
    animate: pt(!0),
    whileInView: pt(),
    whileHover: pt(),
    whileTap: pt(),
    whileDrag: pt(),
    whileFocus: pt(),
    exit: pt()
  };
}
class dt {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
class ou extends dt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = su(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    De(e) && (this.unmountControls = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var e;
    this.node.animationState.reset(), (e = this.unmountControls) === null || e === void 0 || e.call(this);
  }
}
let au = 0;
class lu extends dt {
  constructor() {
    super(...arguments), this.id = au++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext, { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === i)
      return;
    const s = this.node.animationState.setActive("exit", !e);
    n && !e && s.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const cu = {
  animation: {
    Feature: ou
  },
  exit: {
    Feature: lu
  }
};
function Jt(t, e, n, i = { passive: !0 }) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
}
function oe(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const uu = (t) => (e) => Kn(e) && t(e, oe(e));
function Wt(t, e, n, i) {
  return Jt(t, e, uu(n), i);
}
function Po({ top: t, left: e, right: n, bottom: i }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: i }
  };
}
function fu({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function hu(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), i = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: i.y,
    right: i.x
  };
}
const wo = 1e-4, du = 1 - wo, pu = 1 + wo, Ao = 0.01, mu = 0 - Ao, gu = 0 + Ao;
function W(t) {
  return t.max - t.min;
}
function yu(t, e, n) {
  return Math.abs(t - e) <= n;
}
function Ji(t, e, n, i = 0.5) {
  t.origin = i, t.originPoint = D(e.min, e.max, t.origin), t.scale = W(n) / W(e), t.translate = D(n.min, n.max, t.origin) - t.originPoint, (t.scale >= du && t.scale <= pu || isNaN(t.scale)) && (t.scale = 1), (t.translate >= mu && t.translate <= gu || isNaN(t.translate)) && (t.translate = 0);
}
function Gt(t, e, n, i) {
  Ji(t.x, e.x, n.x, i ? i.originX : void 0), Ji(t.y, e.y, n.y, i ? i.originY : void 0);
}
function Qi(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + W(e);
}
function vu(t, e, n) {
  Qi(t.x, e.x, n.x), Qi(t.y, e.y, n.y);
}
function ts(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + W(e);
}
function zt(t, e, n) {
  ts(t.x, e.x, n.x), ts(t.y, e.y, n.y);
}
const es = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), wt = () => ({
  x: es(),
  y: es()
}), ns = () => ({ min: 0, max: 0 }), O = () => ({
  x: ns(),
  y: ns()
});
function Y(t) {
  return [t("x"), t("y")];
}
function ze(t) {
  return t === void 0 || t === 1;
}
function Mn({ scale: t, scaleX: e, scaleY: n }) {
  return !ze(t) || !ze(e) || !ze(n);
}
function mt(t) {
  return Mn(t) || Co(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function Co(t) {
  return is(t.x) || is(t.y);
}
function is(t) {
  return t && t !== "0%";
}
function Ae(t, e, n) {
  const i = t - n, s = e * i;
  return n + s;
}
function ss(t, e, n, i, s) {
  return s !== void 0 && (t = Ae(t, s, i)), Ae(t, n, i) + e;
}
function Dn(t, e = 0, n = 1, i, s) {
  t.min = ss(t.min, e, n, i, s), t.max = ss(t.max, e, n, i, s);
}
function Vo(t, { x: e, y: n }) {
  Dn(t.x, e.translate, e.scale, e.originPoint), Dn(t.y, n.translate, n.scale, n.originPoint);
}
const rs = 0.999999999999, os = 1.0000000000001;
function bu(t, e, n, i = !1) {
  const s = n.length;
  if (!s)
    return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < s; a++) {
    o = n[a], r = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (i && o.options.layoutScroll && o.scroll && o !== o.root && Ct(t, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), r && (e.x *= r.x.scale, e.y *= r.y.scale, Vo(t, r)), i && mt(o.latestValues) && Ct(t, o.latestValues));
  }
  e.x < os && e.x > rs && (e.x = 1), e.y < os && e.y > rs && (e.y = 1);
}
function At(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function as(t, e, n, i, s = 0.5) {
  const o = D(t.min, t.max, s);
  Dn(t, e, n, o, i);
}
function Ct(t, e) {
  as(t.x, e.x, e.scaleX, e.scale, e.originX), as(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function Ro(t, e) {
  return Po(hu(t.getBoundingClientRect(), e));
}
function xu(t, e, n) {
  const i = Ro(t, n), { scroll: s } = e;
  return s && (At(i.x, s.offset.x), At(i.y, s.offset.y)), i;
}
const Mo = ({ current: t }) => t ? t.ownerDocument.defaultView : null, ls = (t, e) => Math.abs(t - e);
function Tu(t, e) {
  const n = ls(t.x, e.x), i = ls(t.y, e.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
class Do {
  constructor(e, n, { transformPagePoint: i, contextWindow: s, dragSnapToOrigin: o = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = Ke(this.lastMoveEventInfo, this.history), h = this.startEvent !== null, d = Tu(f.offset, { x: 0, y: 0 }) >= 3;
      if (!h && !d)
        return;
      const { point: m } = f, { timestamp: p } = j;
      this.history.push({ ...m, timestamp: p });
      const { onStart: y, onMove: g } = this.handlers;
      h || (y && y(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, h) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = qe(h, this.transformPagePoint), R.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, h) => {
      this.end();
      const { onEnd: d, onSessionEnd: m, resumeAnimation: p } = this.handlers;
      if (this.dragSnapToOrigin && p && p(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const y = Ke(f.type === "pointercancel" ? this.lastMoveEventInfo : qe(h, this.transformPagePoint), this.history);
      this.startEvent && d && d(f, y), m && m(f, y);
    }, !Kn(e))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = i, this.contextWindow = s || window;
    const r = oe(e), a = qe(r, this.transformPagePoint), { point: l } = a, { timestamp: c } = j;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = n;
    u && u(e, Ke(a, this.history)), this.removeListeners = re(Wt(this.contextWindow, "pointermove", this.handlePointerMove), Wt(this.contextWindow, "pointerup", this.handlePointerUp), Wt(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), ft(this.updatePoint);
  }
}
function qe(t, e) {
  return e ? { point: e(t.point) } : t;
}
function cs(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Ke({ point: t }, e) {
  return {
    point: t,
    delta: cs(t, Eo(e)),
    offset: cs(t, Su(e)),
    velocity: Pu(e, 0.1)
  };
}
function Su(t) {
  return t[0];
}
function Eo(t) {
  return t[t.length - 1];
}
function Pu(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, i = null;
  const s = Eo(t);
  for (; n >= 0 && (i = t[n], !(s.timestamp - i.timestamp > /* @__PURE__ */ ot(e))); )
    n--;
  if (!i)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ at(s.timestamp - i.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (s.x - i.x) / o,
    y: (s.y - i.y) / o
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function wu(t, { min: e, max: n }, i) {
  return e !== void 0 && t < e ? t = i ? D(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? D(n, t, i.max) : Math.min(t, n)), t;
}
function us(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function Au(t, { top: e, left: n, bottom: i, right: s }) {
  return {
    x: us(t.x, n, s),
    y: us(t.y, e, i)
  };
}
function fs(t, e) {
  let n = e.min - t.min, i = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i };
}
function Cu(t, e) {
  return {
    x: fs(t.x, e.x),
    y: fs(t.y, e.y)
  };
}
function Vu(t, e) {
  let n = 0.5;
  const i = W(t), s = W(e);
  return s > i ? n = /* @__PURE__ */ Mt(e.min, e.max - i, t.min) : i > s && (n = /* @__PURE__ */ Mt(t.min, t.max - s, e.min)), lt(0, 1, n);
}
function Ru(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const En = 0.35;
function Mu(t = En) {
  return t === !1 ? t = 0 : t === !0 && (t = En), {
    x: hs(t, "left", "right"),
    y: hs(t, "top", "bottom")
  };
}
function hs(t, e, n) {
  return {
    min: ds(t, e),
    max: ds(t, n)
  };
}
function ds(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Du = /* @__PURE__ */ new WeakMap();
class Eu {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = O(), this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1)
      return;
    const s = (u) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(oe(u).point);
    }, o = (u, f) => {
      const { drag: h, dragPropagation: d, onDragStart: m } = this.getProps();
      if (h && !d && (this.openDragLock && this.openDragLock(), this.openDragLock = wa(h), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Y((y) => {
        let g = this.getAxisMotionValue(y).get() || 0;
        if (it.test(g)) {
          const { projection: v } = this.visualElement;
          if (v && v.layout) {
            const x = v.layout.layoutBox[y];
            x && (g = W(x) * (parseFloat(g) / 100));
          }
        }
        this.originPoint[y] = g;
      }), m && R.postRender(() => m(u, f)), vn(this.visualElement, "transform");
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, r = (u, f) => {
      const { dragPropagation: h, dragDirectionLock: d, onDirectionLock: m, onDrag: p } = this.getProps();
      if (!h && !this.openDragLock)
        return;
      const { offset: y } = f;
      if (d && this.currentDirection === null) {
        this.currentDirection = ku(y), this.currentDirection !== null && m && m(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, y), this.updateAxis("y", f.point, y), this.visualElement.render(), p && p(u, f);
    }, a = (u, f) => this.stop(u, f), l = () => Y((u) => {
      var f;
      return this.getAnimationState(u) === "paused" && ((f = this.getAxisMotionValue(u).animation) === null || f === void 0 ? void 0 : f.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Do(e, {
      onSessionStart: s,
      onStart: o,
      onMove: r,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      contextWindow: Mo(this.visualElement)
    });
  }
  stop(e, n) {
    const i = this.isDragging;
    if (this.cancel(), !i)
      return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: o } = this.getProps();
    o && R.postRender(() => o(e, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: i } = this.getProps();
    !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, i) {
    const { drag: s } = this.getProps();
    if (!i || !fe(e, s, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + i[e];
    this.constraints && this.constraints[e] && (r = wu(r, this.constraints[e], this.elastic[e])), o.set(r);
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: n, dragElastic: i } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, o = this.constraints;
    n && St(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && s ? this.constraints = Au(s.layoutBox, n) : this.constraints = !1, this.elastic = Mu(i), o !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && Y((r) => {
      this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = Ru(s.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !St(e))
      return !1;
    const i = e.current, { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const o = xu(i, s.root, this.visualElement.getTransformPagePoint());
    let r = Cu(s.layout.layoutBox, o);
    if (n) {
      const a = n(fu(r));
      this.hasMutatedConstraints = !!a, a && (r = Po(a));
    }
    return r;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: i, dragElastic: s, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = Y((u) => {
      if (!fe(u, n, this.currentDirection))
        return;
      let f = l && l[u] || {};
      r && (f = { min: 0, max: 0 });
      const h = s ? 200 : 1e6, d = s ? 40 : 1e7, m = {
        type: "inertia",
        velocity: i ? e[u] : 0,
        bounceStiffness: h,
        bounceDamping: d,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...f
      };
      return this.startAxisValueAnimation(u, m);
    });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(e, n) {
    const i = this.getAxisMotionValue(e);
    return vn(this.visualElement, e), i.start(pi(e, i, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    Y((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    Y((e) => {
      var n;
      return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(e) {
    var n;
    return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`, i = this.visualElement.getProps(), s = i[n];
    return s || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    Y((n) => {
      const { drag: i } = this.getProps();
      if (!fe(n, i, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, o = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: r, max: a } = s.layout.layoutBox[n];
        o.set(e[n] - D(r, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: i } = this.visualElement;
    if (!St(n) || !i || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    Y((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[r] = Vu({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), Y((r) => {
      if (!fe(r, e, null))
        return;
      const a = this.getAxisMotionValue(r), { min: l, max: c } = this.constraints[r];
      a.set(D(l, c, s[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Du.set(this.visualElement, this);
    const e = this.visualElement.current, n = Wt(e, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), i = () => {
      const { dragConstraints: l } = this.getProps();
      St(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, o = s.addEventListener("measure", i);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), R.read(i);
    const r = Jt(window, "resize", () => this.scalePositionWithinConstraints()), a = s.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (Y((u) => {
        const f = this.getAxisMotionValue(u);
        f && (this.originPoint[u] += l[u].translate, f.set(f.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      r(), n(), o(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: i = !1, dragPropagation: s = !1, dragConstraints: o = !1, dragElastic: r = En, dragMomentum: a = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: i,
      dragPropagation: s,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a
    };
  }
}
function fe(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function ku(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class Lu extends dt {
  constructor(e) {
    super(e), this.removeGroupControls = K, this.removeListeners = K, this.controls = new Eu(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || K;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ps = (t) => (e, n) => {
  t && R.postRender(() => t(e, n));
};
class Ou extends dt {
  constructor() {
    super(...arguments), this.removePointerDownListener = K;
  }
  onPointerDown(e) {
    this.session = new Do(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Mo(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: i, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: ps(e),
      onStart: ps(n),
      onMove: i,
      onEnd: (o, r) => {
        delete this.session, s && R.postRender(() => s(o, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Wt(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const ge = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function ms(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const Bt = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (A.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = ms(t, e.target.x), i = ms(t, e.target.y);
    return `${n}% ${i}%`;
  }
}, Fu = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const i = t, s = ht.parse(t);
    if (s.length > 5)
      return i;
    const o = ht.createTransformer(t), r = typeof s[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
    s[0 + r] /= a, s[1 + r] /= l;
    const c = D(a, l, 0.5);
    return typeof s[2 + r] == "number" && (s[2 + r] /= c), typeof s[3 + r] == "number" && (s[3 + r] /= c), o(s);
  }
};
class ju extends la {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: s } = this.props, { projection: o } = e;
    Ja(Iu), o && (n.group && n.group.add(o), i && i.register && s && i.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), ge.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: i, drag: s, isPresent: o } = this.props, r = i.projection;
    return r && (r.isPresent = o, s || e.layoutDependency !== n || n === void 0 || e.isPresent !== o ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || R.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), qn.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i } = this.props, { projection: s } = e;
    s && (s.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(s), i && i.deregister && i.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function ko(t) {
  const [e, n] = pa(), i = $(hr);
  return Q.jsx(ju, { ...t, layoutGroup: i, switchLayoutGroup: $(Rr), isPresent: e, safeToRemove: n });
}
const Iu = {
  borderRadius: {
    ...Bt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Bt,
  borderTopRightRadius: Bt,
  borderBottomLeftRadius: Bt,
  borderBottomRightRadius: Bt,
  boxShadow: Fu
};
function Bu(t, e, n) {
  const i = N(t) ? t : qt(t);
  return i.start(pi("", i, e, n)), i.animation;
}
function _u(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
const Nu = (t, e) => t.depth - e.depth;
class Uu {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    _n(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    Nn(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(Nu), this.isDirty = !1, this.children.forEach(e);
  }
}
function $u(t, e) {
  const n = nt.now(), i = ({ timestamp: s }) => {
    const o = s - n;
    o >= e && (ft(i), t(o - e));
  };
  return R.read(i, !0), () => ft(i);
}
const Lo = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Wu = Lo.length, gs = (t) => typeof t == "string" ? parseFloat(t) : t, ys = (t) => typeof t == "number" || A.test(t);
function Gu(t, e, n, i, s, o) {
  s ? (t.opacity = D(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    zu(i)
  ), t.opacityExit = D(e.opacity !== void 0 ? e.opacity : 1, 0, qu(i))) : o && (t.opacity = D(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, i));
  for (let r = 0; r < Wu; r++) {
    const a = `border${Lo[r]}Radius`;
    let l = vs(e, a), c = vs(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || ys(l) === ys(c) ? (t[a] = Math.max(D(gs(l), gs(c), i), 0), (it.test(c) || it.test(l)) && (t[a] += "%")) : t[a] = c;
  }
  (e.rotate || n.rotate) && (t.rotate = D(e.rotate || 0, n.rotate || 0, i));
}
function vs(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const zu = /* @__PURE__ */ Oo(0, 0.5, Xr), qu = /* @__PURE__ */ Oo(0.5, 0.95, K);
function Oo(t, e, n) {
  return (i) => i < t ? 0 : i > e ? 1 : n(/* @__PURE__ */ Mt(t, e, i));
}
function bs(t, e) {
  t.min = e.min, t.max = e.max;
}
function X(t, e) {
  bs(t.x, e.x), bs(t.y, e.y);
}
function xs(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function Ts(t, e, n, i, s) {
  return t -= e, t = Ae(t, 1 / n, i), s !== void 0 && (t = Ae(t, 1 / s, i)), t;
}
function Ku(t, e = 0, n = 1, i = 0.5, s, o = t, r = t) {
  if (it.test(e) && (e = parseFloat(e), e = D(r.min, r.max, e / 100) - r.min), typeof e != "number")
    return;
  let a = D(o.min, o.max, i);
  t === o && (a -= e), t.min = Ts(t.min, e, n, a, s), t.max = Ts(t.max, e, n, a, s);
}
function Ss(t, e, [n, i, s], o, r) {
  Ku(t, e[n], e[i], e[s], e.scale, o, r);
}
const Hu = ["x", "scaleX", "originX"], Xu = ["y", "scaleY", "originY"];
function Ps(t, e, n, i) {
  Ss(t.x, e, Hu, n ? n.x : void 0, i ? i.x : void 0), Ss(t.y, e, Xu, n ? n.y : void 0, i ? i.y : void 0);
}
function ws(t) {
  return t.translate === 0 && t.scale === 1;
}
function Fo(t) {
  return ws(t.x) && ws(t.y);
}
function As(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Yu(t, e) {
  return As(t.x, e.x) && As(t.y, e.y);
}
function Cs(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function jo(t, e) {
  return Cs(t.x, e.x) && Cs(t.y, e.y);
}
function Vs(t) {
  return W(t.x) / W(t.y);
}
function Rs(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class Zu {
  constructor() {
    this.members = [];
  }
  add(e) {
    _n(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (Nn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((s) => e === s);
    if (n === 0)
      return !1;
    let i;
    for (let s = n; s >= 0; s--) {
      const o = this.members[s];
      if (o.isPresent !== !1) {
        i = o;
        break;
      }
    }
    return i ? (this.promote(i), !0) : !1;
  }
  promote(e, n) {
    const i = this.lead;
    if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
      i.instance && i.scheduleRender(), e.scheduleRender(), e.resumeFrom = i, n && (e.resumeFrom.preserveOpacity = !0), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: s } = e.options;
      s === !1 && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: i } = e;
      n.onExitComplete && n.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Ju(t, e, n) {
  let i = "";
  const s = t.x.translate / e.x, o = t.y.translate / e.y, r = (n == null ? void 0 : n.z) || 0;
  if ((s || o || r) && (i = `translate3d(${s}px, ${o}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: c, rotate: u, rotateX: f, rotateY: h, skewX: d, skewY: m } = n;
    c && (i = `perspective(${c}px) ${i}`), u && (i += `rotate(${u}deg) `), f && (i += `rotateX(${f}deg) `), h && (i += `rotateY(${h}deg) `), d && (i += `skewX(${d}deg) `), m && (i += `skewY(${m}deg) `);
  }
  const a = t.x.scale * e.x, l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (i += `scale(${a}, ${l})`), i || "none";
}
const He = ["", "X", "Y", "Z"], Qu = { visibility: "hidden" }, Ms = 1e3;
let tf = 0;
function Xe(t, e, n, i) {
  const { latestValues: s } = e;
  s[t] && (n[t] = s[t], e.setStaticValue(t, 0), i && (i[t] = 0));
}
function Io(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = $r(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", R, !(s || o));
  }
  const { parent: i } = t;
  i && !i.hasCheckedOptimisedAppear && Io(i);
}
function Bo({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: s }) {
  return class {
    constructor(r = {}, a = e == null ? void 0 : e()) {
      this.id = tf++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(sf), this.nodes.forEach(cf), this.nodes.forEach(uf), this.nodes.forEach(rf);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Uu());
    }
    addEventListener(r, a) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new $n()), this.eventHandlers.get(r).add(a);
    }
    notifyListeners(r, ...a) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    /**
     * Lifecycles
     */
    mount(r, a = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = _u(r), this.instance = r;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || l) && (this.isLayoutDirty = !0), t) {
        let f;
        const h = () => this.root.updateBlockedByResize = !1;
        t(r, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = $u(h, 250), ge.hasAnimatedSinceResize && (ge.hasAnimatedSinceResize = !1, this.nodes.forEach(Es));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: h, hasRelativeLayoutChanged: d, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const p = this.options.transition || u.getDefaultTransition() || mf, { onLayoutAnimationStart: y, onLayoutAnimationComplete: g } = u.getProps(), v = !this.targetLayout || !jo(this.targetLayout, m), x = !h && d;
        if (this.options.layoutRoot || this.resumeFrom || x || h && (v || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, x);
          const w = {
            ...Wn(p, "layout"),
            onPlay: y,
            onComplete: g
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w);
        } else
          h || Es(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, ft(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(ff), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Io(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const f = this.path[u];
        f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ds);
        return;
      }
      this.isUpdating || this.nodes.forEach(af), this.isUpdating = !1, this.nodes.forEach(lf), this.nodes.forEach(ef), this.nodes.forEach(nf), this.clearAllSnapshots();
      const a = nt.now();
      j.delta = lt(0, 1e3 / 60, a - j.timestamp), j.timestamp = a, j.isProcessing = !0, Ne.update.process(j), Ne.preRender.process(j), Ne.render.process(j), j.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, qn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(of), this.sharedNodes.forEach(hf);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, R.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      R.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !W(this.snapshot.measuredBox.x) && !W(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const r = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = O(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = !1), a) {
        const l = i(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!s)
        return;
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Fo(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      r && (a || mt(this.latestValues) || u) && (s(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return r && (l = this.removeTransform(l)), gf(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var r;
      const { visualElement: a } = this.options;
      if (!a)
        return O();
      const l = a.measureViewportBox();
      if (!(((r = this.scroll) === null || r === void 0 ? void 0 : r.wasRoot) || this.path.some(yf))) {
        const { scroll: u } = this.root;
        u && (At(l.x, u.offset.x), At(l.y, u.offset.y));
      }
      return l;
    }
    removeElementScroll(r) {
      var a;
      const l = O();
      if (X(l, r), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c], { scroll: f, options: h } = u;
        u !== this.root && f && h.layoutScroll && (f.wasRoot && X(l, r), At(l.x, f.offset.x), At(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(r, a = !1) {
      const l = O();
      X(l, r);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a && u.options.layoutScroll && u.scroll && u !== u.root && Ct(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), mt(u.latestValues) && Ct(l, u.latestValues);
      }
      return mt(this.latestValues) && Ct(l, this.latestValues), l;
    }
    removeTransform(r) {
      const a = O();
      X(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !mt(c.latestValues))
          continue;
        Mn(c.latestValues) && c.updateSnapshot();
        const u = O(), f = c.measurePageBox();
        X(u, f), Ps(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return mt(this.latestValues) && Ps(a, this.latestValues), a;
    }
    setTargetDelta(r) {
      this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== j.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (!(r || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: f, layoutId: h } = this.options;
      if (!(!this.layout || !(f || h))) {
        if (this.resolvedRelativeTargetAt = j.timestamp, !this.targetDelta && !this.relativeTarget) {
          const d = this.getClosestProjectingParent();
          d && d.layout && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = O(), this.relativeTargetOrigin = O(), zt(this.relativeTargetOrigin, this.layout.layoutBox, d.layout.layoutBox), X(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = O(), this.targetWithTransforms = O()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), vu(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : X(this.target, this.layout.layoutBox), Vo(this.target, this.targetDelta)) : X(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const d = this.getClosestProjectingParent();
          d && !!d.resumingFrom == !!this.resumingFrom && !d.options.layoutScroll && d.target && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = O(), this.relativeTargetOrigin = O(), zt(this.relativeTargetOrigin, this.target, d.target), X(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Mn(this.parent.latestValues) || Co(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var r;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let c = !0;
      if ((this.isProjectionDirty || !((r = this.parent) === null || r === void 0) && r.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === j.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: f } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || f))
        return;
      X(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, d = this.treeScale.y;
      bu(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = O());
      const { target: m } = a;
      if (!m) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (xs(this.prevProjectionDelta.x, this.projectionDelta.x), xs(this.prevProjectionDelta.y, this.projectionDelta.y)), Gt(this.projectionDelta, this.layoutCorrected, m, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== d || !Rs(this.projectionDelta.x, this.prevProjectionDelta.x) || !Rs(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      var a;
      if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), r) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = wt(), this.projectionDelta = wt(), this.projectionDeltaWithTransform = wt();
    }
    setAnimationOrigin(r, a = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, f = wt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const h = O(), d = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, p = d !== m, y = this.getStack(), g = !y || y.members.length <= 1, v = !!(p && !g && this.options.crossfade === !0 && !this.path.some(pf));
      this.animationProgress = 0;
      let x;
      this.mixTargetDelta = (w) => {
        const b = w / 1e3;
        ks(f.x, r.x, b), ks(f.y, r.y, b), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (zt(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), df(this.relativeTarget, this.relativeTargetOrigin, h, b), x && Yu(this.relativeTarget, x) && (this.isProjectionDirty = !1), x || (x = O()), X(x, this.relativeTarget)), p && (this.animationValues = u, Gu(u, c, this.latestValues, b, v, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = b;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (ft(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = R.update(() => {
        ge.hasAnimatedSinceResize = !0, this.currentAnimation = Bu(0, Ms, {
          ...r,
          onUpdate: (a) => {
            this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a);
          },
          onStop: () => {
          },
          onComplete: () => {
            r.onComplete && r.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const r = this.getStack();
      r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Ms), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = r;
      if (!(!a || !l || !c)) {
        if (this !== r && this.layout && c && _o(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || O();
          const f = W(this.layout.layoutBox.x);
          l.x.min = r.target.x.min, l.x.max = l.x.min + f;
          const h = W(this.layout.layoutBox.y);
          l.y.min = r.target.y.min, l.y.max = l.y.min + h;
        }
        X(a, l), Ct(a, u), Gt(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new Zu()), this.sharedNodes.get(r).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      var r;
      const { layoutId: a } = this.options;
      return a ? ((r = this.getStack()) === null || r === void 0 ? void 0 : r.lead) || this : this;
    }
    getPrevLead() {
      var r;
      const { layoutId: a } = this.options;
      return a ? (r = this.getStack()) === null || r === void 0 ? void 0 : r.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r)
        return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), r && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r)
        return;
      let a = !1;
      const { latestValues: l } = r;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const c = {};
      l.z && Xe("z", r, c, this.animationValues);
      for (let u = 0; u < He.length; u++)
        Xe(`rotate${He[u]}`, r, c, this.animationValues), Xe(`skew${He[u]}`, r, c, this.animationValues);
      r.render();
      for (const u in c)
        r.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]);
      r.scheduleRender();
    }
    getProjectionStyles(r) {
      var a, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return Qu;
      const c = {
        visibility: ""
      }, u = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = me(r == null ? void 0 : r.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const p = {};
        return this.options.layoutId && (p.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, p.pointerEvents = me(r == null ? void 0 : r.pointerEvents) || ""), this.hasProjected && !mt(this.latestValues) && (p.transform = u ? u({}, "") : "none", this.hasProjected = !1), p;
      }
      const h = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), c.transform = Ju(this.projectionDeltaWithTransform, this.treeScale, h), u && (c.transform = u(h, c.transform));
      const { x: d, y: m } = this.projectionDelta;
      c.transformOrigin = `${d.origin * 100}% ${m.origin * 100}% 0`, f.animationValues ? c.opacity = f === this ? (l = (a = h.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : c.opacity = f === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
      for (const p in Ht) {
        if (h[p] === void 0)
          continue;
        const { correct: y, applyTo: g, isCSSVariable: v } = Ht[p], x = c.transform === "none" ? h[p] : y(h[p], f);
        if (g) {
          const w = g.length;
          for (let b = 0; b < w; b++)
            c[g[b]] = x;
        } else
          v ? this.options.visualElement.renderState.vars[p] = x : c[p] = x;
      }
      return this.options.layoutId && (c.pointerEvents = f === this ? me(r == null ? void 0 : r.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => {
        var a;
        return (a = r.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(Ds), this.root.sharedNodes.clear();
    }
  };
}
function ef(t) {
  t.updateLayout();
}
function nf(t) {
  var e;
  const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: s } = t.layout, { animationType: o } = t.options, r = n.source !== t.layout.source;
    o === "size" ? Y((f) => {
      const h = r ? n.measuredBox[f] : n.layoutBox[f], d = W(h);
      h.min = i[f].min, h.max = h.min + d;
    }) : _o(o, n.layoutBox, i) && Y((f) => {
      const h = r ? n.measuredBox[f] : n.layoutBox[f], d = W(i[f]);
      h.max = h.min + d, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[f].max = t.relativeTarget[f].min + d);
    });
    const a = wt();
    Gt(a, i, n.layoutBox);
    const l = wt();
    r ? Gt(l, t.applyTransform(s, !0), n.measuredBox) : Gt(l, i, n.layoutBox);
    const c = !Fo(a);
    let u = !1;
    if (!t.resumeFrom) {
      const f = t.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: d } = f;
        if (h && d) {
          const m = O();
          zt(m, n.layoutBox, h.layoutBox);
          const p = O();
          zt(p, i, d.layoutBox), jo(m, p) || (u = !0), f.options.layoutRoot && (t.relativeTarget = p, t.relativeTargetOrigin = m, t.relativeParent = f);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: i,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: u
    });
  } else if (t.isLead()) {
    const { onExitComplete: i } = t.options;
    i && i();
  }
  t.options.transition = void 0;
}
function sf(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function rf(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function of(t) {
  t.clearSnapshot();
}
function Ds(t) {
  t.clearMeasurements();
}
function af(t) {
  t.isLayoutDirty = !1;
}
function lf(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function Es(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function cf(t) {
  t.resolveTargetDelta();
}
function uf(t) {
  t.calcProjection();
}
function ff(t) {
  t.resetSkewAndRotation();
}
function hf(t) {
  t.removeLeadSnapshot();
}
function ks(t, e, n) {
  t.translate = D(e.translate, 0, n), t.scale = D(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Ls(t, e, n, i) {
  t.min = D(e.min, n.min, i), t.max = D(e.max, n.max, i);
}
function df(t, e, n, i) {
  Ls(t.x, e.x, n.x, i), Ls(t.y, e.y, n.y, i);
}
function pf(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const mf = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Os = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), Fs = Os("applewebkit/") && !Os("chrome/") ? Math.round : K;
function js(t) {
  t.min = Fs(t.min), t.max = Fs(t.max);
}
function gf(t) {
  js(t.x), js(t.y);
}
function _o(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !yu(Vs(e), Vs(n), 0.2);
}
function yf(t) {
  var e;
  return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot);
}
const vf = Bo({
  attachResizeListener: (t, e) => Jt(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Ye = {
  current: void 0
}, No = Bo({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!Ye.current) {
      const t = new vf({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), Ye.current = t;
    }
    return Ye.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), bf = {
  pan: {
    Feature: Ou
  },
  drag: {
    Feature: Lu,
    ProjectionNode: No,
    MeasureLayout: ko
  }
};
function Is(t, e, n) {
  const { props: i } = t;
  t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n, o = i[s];
  o && R.postRender(() => o(e, oe(e)));
}
class xf extends dt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = Ca(e, (n, i) => (Is(this.node, i, "Start"), (s) => Is(this.node, s, "End"))));
  }
  unmount() {
  }
}
class Tf extends dt {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = re(Jt(this.node.current, "focus", () => this.onFocus()), Jt(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Bs(t, e, n) {
  const { props: i } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n), o = i[s];
  o && R.postRender(() => o(e, oe(e)));
}
class Sf extends dt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = Da(e, (n, i) => (Bs(this.node, i, "Start"), (s, { success: o }) => Bs(this.node, s, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const kn = /* @__PURE__ */ new WeakMap(), Ze = /* @__PURE__ */ new WeakMap(), Pf = (t) => {
  const e = kn.get(t.target);
  e && e(t);
}, wf = (t) => {
  t.forEach(Pf);
};
function Af({ root: t, ...e }) {
  const n = t || document;
  Ze.has(n) || Ze.set(n, {});
  const i = Ze.get(n), s = JSON.stringify(e);
  return i[s] || (i[s] = new IntersectionObserver(wf, { root: t, ...e })), i[s];
}
function Cf(t, e, n) {
  const i = Af(e);
  return kn.set(t, n), i.observe(t), () => {
    kn.delete(t), i.unobserve(t);
  };
}
const Vf = {
  some: 0,
  all: 1
};
class Rf extends dt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: i, amount: s = "some", once: o } = e, r = {
      root: n ? n.current : void 0,
      rootMargin: i,
      threshold: typeof s == "number" ? s : Vf[s]
    }, a = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, o && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: f } = this.node.getProps(), h = c ? u : f;
      h && h(l);
    };
    return Cf(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Mf(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Mf({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Df = {
  inView: {
    Feature: Rf
  },
  tap: {
    Feature: Sf
  },
  focus: {
    Feature: Tf
  },
  hover: {
    Feature: xf
  }
}, Ef = {
  layout: {
    ProjectionNode: No,
    MeasureLayout: ko
  }
}, Ln = { current: null }, Uo = { current: !1 };
function kf() {
  if (Uo.current = !0, !!In)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => Ln.current = t.matches;
      t.addListener(e), e();
    } else
      Ln.current = !1;
}
const Lf = [...uo, _, ht], Of = (t) => Lf.find(co(t)), Ff = /* @__PURE__ */ new WeakMap();
function jf(t, e, n) {
  for (const i in e) {
    const s = e[i], o = n[i];
    if (N(s))
      t.addValue(i, s);
    else if (N(o))
      t.addValue(i, qt(s, { owner: t }));
    else if (o !== s)
      if (t.hasValue(i)) {
        const r = t.getValue(i);
        r.liveStyle === !0 ? r.jump(s) : r.hasAnimated || r.set(s);
      } else {
        const r = t.getStaticValue(i);
        t.addValue(i, qt(r !== void 0 ? r : s, { owner: t }));
      }
  }
  for (const i in n)
    e[i] === void 0 && t.removeValue(i);
  return e;
}
const _s = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class If {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, n, i) {
    return {};
  }
  constructor({ parent: e, props: n, presenceContext: i, reducedMotionConfig: s, blockInitialAnimation: o, visualState: r }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = fi, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const d = nt.now();
      this.renderScheduledAt < d && (this.renderScheduledAt = d, R.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: c, onUpdate: u } = r;
    this.onUpdate = u, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = c, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = s, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = Ee(n), this.isVariantNode = Cr(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: f, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const d in h) {
      const m = h[d];
      l[d] !== void 0 && N(m) && m.set(l[d], !1);
    }
  }
  mount(e) {
    this.current = e, Ff.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, i) => this.bindToMotionValue(i, n)), Uo.current || kf(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ln.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), ft(this.notifyUpdate), ft(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const e in this.events)
      this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const i = bt.has(e);
    i && this.onBindTransform && this.onBindTransform();
    const s = n.on("change", (a) => {
      this.latestValues[e] = a, this.props.onUpdate && R.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0);
    }), o = n.on("renderRequest", this.scheduleRender);
    let r;
    window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      s(), o(), r && r(), n.owner && n.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in Dt) {
      const n = Dt[e];
      if (!n)
        continue;
      const { isEnabled: i, Feature: s } = n;
      if (!this.features[e] && s && i(this.props) && (this.features[e] = new s(this)), this.features[e]) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : O();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let i = 0; i < _s.length; i++) {
      const s = _s[i];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const o = "on" + s, r = e[o];
      r && (this.propEventSubscriptions[s] = this.on(s, r));
    }
    this.prevMotionValues = jf(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    const i = this.values.get(e);
    n !== i && (i && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let i = this.values.get(e);
    return i === void 0 && n !== void 0 && (i = qt(n === null ? void 0 : n, { owner: this }), this.addValue(e, i)), i;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    var i;
    let s = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (i = this.getBaseTargetFromProps(this.props, e)) !== null && i !== void 0 ? i : this.readValueFromInstance(this.current, e, this.options);
    return s != null && (typeof s == "string" && (ao(s) || Zr(s)) ? s = parseFloat(s) : !Of(s) && ht.test(n) && (s = so(e, n)), this.setBaseTarget(e, N(s) ? s.get() : s)), N(s) ? s.get() : s;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    var n;
    const { initial: i } = this.props;
    let s;
    if (typeof i == "string" || typeof i == "object") {
      const r = ri(this.props, i, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      r && (s = r[e]);
    }
    if (i && s !== void 0)
      return s;
    const o = this.getBaseTargetFromProps(this.props, e);
    return o !== void 0 && !N(o) ? o : this.initialValues[e] !== void 0 && s === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new $n()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class $o extends If {
  constructor() {
    super(...arguments), this.KeyframeResolver = fo;
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: i }) {
    delete n[e], delete i[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    N(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function Bf(t) {
  return window.getComputedStyle(t);
}
class _f extends $o {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Ir;
  }
  readValueFromInstance(e, n) {
    if (bt.has(n))
      return Xl(e, n);
    {
      const i = Bf(e), s = (Zn(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Ro(e, n);
  }
  build(e, n, i) {
    ti(e, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return oi(e, n, i);
  }
}
class Nf extends $o {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = O, this.updateDimensions = () => {
      this.current && !this.renderState.dimensions && jr(this.current, this.renderState);
    };
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (bt.has(n)) {
      const i = io(n);
      return i && i.default || 0;
    }
    return n = Br.has(n) ? n : Yn(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return Nr(e, n, i);
  }
  onBindTransform() {
    this.current && !this.renderState.dimensions && R.postRender(this.updateDimensions);
  }
  build(e, n, i) {
    ii(e, n, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(e, n, i, s) {
    _r(e, n, i, s);
  }
  mount(e) {
    this.isSVGTag = si(e.tagName), super.mount(e);
  }
}
const Uf = (t, e) => ni(t) ? new Nf(e) : new _f(e, {
  allowProjection: t !== ur
}), $f = /* @__PURE__ */ Sl({
  ...cu,
  ...Df,
  ...bf,
  ...Ef
}, Uf), Wo = /* @__PURE__ */ Ba($f);
function On() {
  return On = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var i in n) ({}).hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, On.apply(null, arguments);
}
function Wf(t) {
  if (t.sheet)
    return t.sheet;
  for (var e = 0; e < document.styleSheets.length; e++)
    if (document.styleSheets[e].ownerNode === t)
      return document.styleSheets[e];
}
function Gf(t) {
  var e = document.createElement("style");
  return e.setAttribute("data-emotion", t.key), t.nonce !== void 0 && e.setAttribute("nonce", t.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
}
var zf = /* @__PURE__ */ function() {
  function t(n) {
    var i = this;
    this._insertTag = function(s) {
      var o;
      i.tags.length === 0 ? i.insertionPoint ? o = i.insertionPoint.nextSibling : i.prepend ? o = i.container.firstChild : o = i.before : o = i.tags[i.tags.length - 1].nextSibling, i.container.insertBefore(s, o), i.tags.push(s);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var e = t.prototype;
  return e.hydrate = function(i) {
    i.forEach(this._insertTag);
  }, e.insert = function(i) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Gf(this));
    var s = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = Wf(s);
      try {
        o.insertRule(i, o.cssRules.length);
      } catch {
      }
    } else
      s.appendChild(document.createTextNode(i));
    this.ctr++;
  }, e.flush = function() {
    this.tags.forEach(function(i) {
      var s;
      return (s = i.parentNode) == null ? void 0 : s.removeChild(i);
    }), this.tags = [], this.ctr = 0;
  }, t;
}(), B = "-ms-", Ce = "-moz-", C = "-webkit-", Go = "comm", mi = "rule", gi = "decl", qf = "@import", zo = "@keyframes", Kf = "@layer", Hf = Math.abs, Le = String.fromCharCode, Xf = Object.assign;
function Yf(t, e) {
  return I(t, 0) ^ 45 ? (((e << 2 ^ I(t, 0)) << 2 ^ I(t, 1)) << 2 ^ I(t, 2)) << 2 ^ I(t, 3) : 0;
}
function qo(t) {
  return t.trim();
}
function Zf(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function V(t, e, n) {
  return t.replace(e, n);
}
function Fn(t, e) {
  return t.indexOf(e);
}
function I(t, e) {
  return t.charCodeAt(e) | 0;
}
function Qt(t, e, n) {
  return t.slice(e, n);
}
function tt(t) {
  return t.length;
}
function yi(t) {
  return t.length;
}
function he(t, e) {
  return e.push(t), t;
}
function Jf(t, e) {
  return t.map(e).join("");
}
var Oe = 1, kt = 1, Ko = 0, z = 0, F = 0, jt = "";
function Fe(t, e, n, i, s, o, r) {
  return { value: t, root: e, parent: n, type: i, props: s, children: o, line: Oe, column: kt, length: r, return: "" };
}
function _t(t, e) {
  return Xf(Fe("", null, null, "", null, null, 0), t, { length: -t.length }, e);
}
function Qf() {
  return F;
}
function th() {
  return F = z > 0 ? I(jt, --z) : 0, kt--, F === 10 && (kt = 1, Oe--), F;
}
function H() {
  return F = z < Ko ? I(jt, z++) : 0, kt++, F === 10 && (kt = 1, Oe++), F;
}
function st() {
  return I(jt, z);
}
function ye() {
  return z;
}
function ae(t, e) {
  return Qt(jt, t, e);
}
function te(t) {
  switch (t) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ho(t) {
  return Oe = kt = 1, Ko = tt(jt = t), z = 0, [];
}
function Xo(t) {
  return jt = "", t;
}
function ve(t) {
  return qo(ae(z - 1, jn(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function eh(t) {
  for (; (F = st()) && F < 33; )
    H();
  return te(t) > 2 || te(F) > 3 ? "" : " ";
}
function nh(t, e) {
  for (; --e && H() && !(F < 48 || F > 102 || F > 57 && F < 65 || F > 70 && F < 97); )
    ;
  return ae(t, ye() + (e < 6 && st() == 32 && H() == 32));
}
function jn(t) {
  for (; H(); )
    switch (F) {
      // ] ) " '
      case t:
        return z;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && jn(F);
        break;
      // (
      case 40:
        t === 41 && jn(t);
        break;
      // \
      case 92:
        H();
        break;
    }
  return z;
}
function ih(t, e) {
  for (; H() && t + F !== 57; )
    if (t + F === 84 && st() === 47)
      break;
  return "/*" + ae(e, z - 1) + "*" + Le(t === 47 ? t : H());
}
function sh(t) {
  for (; !te(st()); )
    H();
  return ae(t, z);
}
function rh(t) {
  return Xo(be("", null, null, null, [""], t = Ho(t), 0, [0], t));
}
function be(t, e, n, i, s, o, r, a, l) {
  for (var c = 0, u = 0, f = r, h = 0, d = 0, m = 0, p = 1, y = 1, g = 1, v = 0, x = "", w = s, b = o, T = i, S = x; y; )
    switch (m = v, v = H()) {
      // (
      case 40:
        if (m != 108 && I(S, f - 1) == 58) {
          Fn(S += V(ve(v), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        S += ve(v);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        S += eh(m);
        break;
      // \
      case 92:
        S += nh(ye() - 1, 7);
        continue;
      // /
      case 47:
        switch (st()) {
          case 42:
          case 47:
            he(oh(ih(H(), ye()), e, n), l);
            break;
          default:
            S += "/";
        }
        break;
      // {
      case 123 * p:
        a[c++] = tt(S) * g;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        switch (v) {
          // \0 }
          case 0:
          case 125:
            y = 0;
          // ;
          case 59 + u:
            g == -1 && (S = V(S, /\f/g, "")), d > 0 && tt(S) - f && he(d > 32 ? Us(S + ";", i, n, f - 1) : Us(V(S, " ", "") + ";", i, n, f - 2), l);
            break;
          // @ ;
          case 59:
            S += ";";
          // { rule/at-rule
          default:
            if (he(T = Ns(S, e, n, c, u, s, a, x, w = [], b = [], f), o), v === 123)
              if (u === 0)
                be(S, e, T, T, w, o, f, a, b);
              else
                switch (h === 99 && I(S, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    be(t, T, T, i && he(Ns(t, T, T, 0, 0, s, a, x, s, w = [], f), b), s, b, f, a, i ? w : b);
                    break;
                  default:
                    be(S, T, T, T, [""], b, 0, a, b);
                }
        }
        c = u = d = 0, p = g = 1, x = S = "", f = r;
        break;
      // :
      case 58:
        f = 1 + tt(S), d = m;
      default:
        if (p < 1) {
          if (v == 123)
            --p;
          else if (v == 125 && p++ == 0 && th() == 125)
            continue;
        }
        switch (S += Le(v), v * p) {
          // &
          case 38:
            g = u > 0 ? 1 : (S += "\f", -1);
            break;
          // ,
          case 44:
            a[c++] = (tt(S) - 1) * g, g = 1;
            break;
          // @
          case 64:
            st() === 45 && (S += ve(H())), h = st(), u = f = tt(x = S += sh(ye())), v++;
            break;
          // -
          case 45:
            m === 45 && tt(S) == 2 && (p = 0);
        }
    }
  return o;
}
function Ns(t, e, n, i, s, o, r, a, l, c, u) {
  for (var f = s - 1, h = s === 0 ? o : [""], d = yi(h), m = 0, p = 0, y = 0; m < i; ++m)
    for (var g = 0, v = Qt(t, f + 1, f = Hf(p = r[m])), x = t; g < d; ++g)
      (x = qo(p > 0 ? h[g] + " " + v : V(v, /&\f/g, h[g]))) && (l[y++] = x);
  return Fe(t, e, n, s === 0 ? mi : a, l, c, u);
}
function oh(t, e, n) {
  return Fe(t, e, n, Go, Le(Qf()), Qt(t, 2, -2), 0);
}
function Us(t, e, n, i) {
  return Fe(t, e, n, gi, Qt(t, 0, i), Qt(t, i + 1, -1), i);
}
function Vt(t, e) {
  for (var n = "", i = yi(t), s = 0; s < i; s++)
    n += e(t[s], s, t, e) || "";
  return n;
}
function ah(t, e, n, i) {
  switch (t.type) {
    case Kf:
      if (t.children.length) break;
    case qf:
    case gi:
      return t.return = t.return || t.value;
    case Go:
      return "";
    case zo:
      return t.return = t.value + "{" + Vt(t.children, i) + "}";
    case mi:
      t.value = t.props.join(",");
  }
  return tt(n = Vt(t.children, i)) ? t.return = t.value + "{" + n + "}" : "";
}
function lh(t) {
  var e = yi(t);
  return function(n, i, s, o) {
    for (var r = "", a = 0; a < e; a++)
      r += t[a](n, i, s, o) || "";
    return r;
  };
}
function ch(t) {
  return function(e) {
    e.root || (e = e.return) && t(e);
  };
}
function Yo(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return e[n] === void 0 && (e[n] = t(n)), e[n];
  };
}
var uh = function(e, n, i) {
  for (var s = 0, o = 0; s = o, o = st(), s === 38 && o === 12 && (n[i] = 1), !te(o); )
    H();
  return ae(e, z);
}, fh = function(e, n) {
  var i = -1, s = 44;
  do
    switch (te(s)) {
      case 0:
        s === 38 && st() === 12 && (n[i] = 1), e[i] += uh(z - 1, n, i);
        break;
      case 2:
        e[i] += ve(s);
        break;
      case 4:
        if (s === 44) {
          e[++i] = st() === 58 ? "&\f" : "", n[i] = e[i].length;
          break;
        }
      // fallthrough
      default:
        e[i] += Le(s);
    }
  while (s = H());
  return e;
}, hh = function(e, n) {
  return Xo(fh(Ho(e), n));
}, $s = /* @__PURE__ */ new WeakMap(), dh = function(e) {
  if (!(e.type !== "rule" || !e.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  e.length < 1)) {
    for (var n = e.value, i = e.parent, s = e.column === i.column && e.line === i.line; i.type !== "rule"; )
      if (i = i.parent, !i) return;
    if (!(e.props.length === 1 && n.charCodeAt(0) !== 58 && !$s.get(i)) && !s) {
      $s.set(e, !0);
      for (var o = [], r = hh(n, o), a = i.props, l = 0, c = 0; l < r.length; l++)
        for (var u = 0; u < a.length; u++, c++)
          e.props[c] = o[l] ? r[l].replace(/&\f/g, a[u]) : a[u] + " " + r[l];
    }
  }
}, ph = function(e) {
  if (e.type === "decl") {
    var n = e.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (e.return = "", e.value = "");
  }
};
function Zo(t, e) {
  switch (Yf(t, e)) {
    // color-adjust
    case 5103:
      return C + "print-" + t + t;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return C + t + t;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return C + t + Ce + t + B + t + t;
    // flex, flex-direction
    case 6828:
    case 4268:
      return C + t + B + t + t;
    // order
    case 6165:
      return C + t + B + "flex-" + t + t;
    // align-items
    case 5187:
      return C + t + V(t, /(\w+).+(:[^]+)/, C + "box-$1$2" + B + "flex-$1$2") + t;
    // align-self
    case 5443:
      return C + t + B + "flex-item-" + V(t, /flex-|-self/, "") + t;
    // align-content
    case 4675:
      return C + t + B + "flex-line-pack" + V(t, /align-content|flex-|-self/, "") + t;
    // flex-shrink
    case 5548:
      return C + t + B + V(t, "shrink", "negative") + t;
    // flex-basis
    case 5292:
      return C + t + B + V(t, "basis", "preferred-size") + t;
    // flex-grow
    case 6060:
      return C + "box-" + V(t, "-grow", "") + C + t + B + V(t, "grow", "positive") + t;
    // transition
    case 4554:
      return C + V(t, /([^-])(transform)/g, "$1" + C + "$2") + t;
    // cursor
    case 6187:
      return V(V(V(t, /(zoom-|grab)/, C + "$1"), /(image-set)/, C + "$1"), t, "") + t;
    // background, background-image
    case 5495:
    case 3959:
      return V(t, /(image-set\([^]*)/, C + "$1$`$1");
    // justify-content
    case 4968:
      return V(V(t, /(.+:)(flex-)?(.*)/, C + "box-pack:$3" + B + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + C + t + t;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return V(t, /(.+)-inline(.+)/, C + "$1$2") + t;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (tt(t) - 1 - e > 6) switch (I(t, e + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (I(t, e + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return V(t, /(.+:)(.+)-([^]+)/, "$1" + C + "$2-$3$1" + Ce + (I(t, e + 3) == 108 ? "$3" : "$2-$3")) + t;
        // (s)tretch
        case 115:
          return ~Fn(t, "stretch") ? Zo(V(t, "stretch", "fill-available"), e) + t : t;
      }
      break;
    // position: sticky
    case 4949:
      if (I(t, e + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (I(t, tt(t) - 3 - (~Fn(t, "!important") && 10))) {
        // stic(k)y
        case 107:
          return V(t, ":", ":" + C) + t;
        // (inline-)?fl(e)x
        case 101:
          return V(t, /(.+:)([^;!]+)(;|!.+)?/, "$1" + C + (I(t, 14) === 45 ? "inline-" : "") + "box$3$1" + C + "$2$3$1" + B + "$2box$3") + t;
      }
      break;
    // writing-mode
    case 5936:
      switch (I(t, e + 11)) {
        // vertical-l(r)
        case 114:
          return C + t + B + V(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        // vertical-r(l)
        case 108:
          return C + t + B + V(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        // horizontal(-)tb
        case 45:
          return C + t + B + V(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
      return C + t + B + t + t;
  }
  return t;
}
var mh = function(e, n, i, s) {
  if (e.length > -1 && !e.return) switch (e.type) {
    case gi:
      e.return = Zo(e.value, e.length);
      break;
    case zo:
      return Vt([_t(e, {
        value: V(e.value, "@", "@" + C)
      })], s);
    case mi:
      if (e.length) return Jf(e.props, function(o) {
        switch (Zf(o, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Vt([_t(e, {
              props: [V(o, /:(read-\w+)/, ":" + Ce + "$1")]
            })], s);
          // :placeholder
          case "::placeholder":
            return Vt([_t(e, {
              props: [V(o, /:(plac\w+)/, ":" + C + "input-$1")]
            }), _t(e, {
              props: [V(o, /:(plac\w+)/, ":" + Ce + "$1")]
            }), _t(e, {
              props: [V(o, /:(plac\w+)/, B + "input-$1")]
            })], s);
        }
        return "";
      });
  }
}, gh = [mh], yh = function(e) {
  var n = e.key;
  if (n === "css") {
    var i = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(i, function(p) {
      var y = p.getAttribute("data-emotion");
      y.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var s = e.stylisPlugins || gh, o = {}, r, a = [];
  r = e.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(p) {
      for (var y = p.getAttribute("data-emotion").split(" "), g = 1; g < y.length; g++)
        o[y[g]] = !0;
      a.push(p);
    }
  );
  var l, c = [dh, ph];
  {
    var u, f = [ah, ch(function(p) {
      u.insert(p);
    })], h = lh(c.concat(s, f)), d = function(y) {
      return Vt(rh(y), h);
    };
    l = function(y, g, v, x) {
      u = v, d(y ? y + "{" + g.styles + "}" : g.styles), x && (m.inserted[g.name] = !0);
    };
  }
  var m = {
    key: n,
    sheet: new zf({
      key: n,
      container: r,
      nonce: e.nonce,
      speedy: e.speedy,
      prepend: e.prepend,
      insertionPoint: e.insertionPoint
    }),
    nonce: e.nonce,
    inserted: o,
    registered: {},
    insert: l
  };
  return m.sheet.hydrate(a), m;
}, vh = !0;
function bh(t, e, n) {
  var i = "";
  return n.split(" ").forEach(function(s) {
    t[s] !== void 0 ? e.push(t[s] + ";") : s && (i += s + " ");
  }), i;
}
var Jo = function(e, n, i) {
  var s = e.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (i === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  vh === !1) && e.registered[s] === void 0 && (e.registered[s] = n.styles);
}, xh = function(e, n, i) {
  Jo(e, n, i);
  var s = e.key + "-" + n.name;
  if (e.inserted[n.name] === void 0) {
    var o = n;
    do
      e.insert(n === o ? "." + s : "", o, e.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function Th(t) {
  for (var e = 0, n, i = 0, s = t.length; s >= 4; ++i, s -= 4)
    n = t.charCodeAt(i) & 255 | (t.charCodeAt(++i) & 255) << 8 | (t.charCodeAt(++i) & 255) << 16 | (t.charCodeAt(++i) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, e = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  switch (s) {
    case 3:
      e ^= (t.charCodeAt(i + 2) & 255) << 16;
    case 2:
      e ^= (t.charCodeAt(i + 1) & 255) << 8;
    case 1:
      e ^= t.charCodeAt(i) & 255, e = /* Math.imul(h, m): */
      (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  }
  return e ^= e >>> 13, e = /* Math.imul(h, m): */
  (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
}
var Sh = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Ph = /[A-Z]|^ms/g, wh = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Qo = function(e) {
  return e.charCodeAt(1) === 45;
}, Ws = function(e) {
  return e != null && typeof e != "boolean";
}, Je = /* @__PURE__ */ Yo(function(t) {
  return Qo(t) ? t : t.replace(Ph, "-$&").toLowerCase();
}), Gs = function(e, n) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(wh, function(i, s, o) {
          return et = {
            name: s,
            styles: o,
            next: et
          }, s;
        });
  }
  return Sh[e] !== 1 && !Qo(e) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function ee(t, e, n) {
  if (n == null)
    return "";
  var i = n;
  if (i.__emotion_styles !== void 0)
    return i;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var s = n;
      if (s.anim === 1)
        return et = {
          name: s.name,
          styles: s.styles,
          next: et
        }, s.name;
      var o = n;
      if (o.styles !== void 0) {
        var r = o.next;
        if (r !== void 0)
          for (; r !== void 0; )
            et = {
              name: r.name,
              styles: r.styles,
              next: et
            }, r = r.next;
        var a = o.styles + ";";
        return a;
      }
      return Ah(t, e, n);
    }
    case "function": {
      if (t !== void 0) {
        var l = et, c = n(t);
        return et = l, ee(t, e, c);
      }
      break;
    }
  }
  var u = n;
  if (e == null)
    return u;
  var f = e[u];
  return f !== void 0 ? f : u;
}
function Ah(t, e, n) {
  var i = "";
  if (Array.isArray(n))
    for (var s = 0; s < n.length; s++)
      i += ee(t, e, n[s]) + ";";
  else
    for (var o in n) {
      var r = n[o];
      if (typeof r != "object") {
        var a = r;
        e != null && e[a] !== void 0 ? i += o + "{" + e[a] + "}" : Ws(a) && (i += Je(o) + ":" + Gs(o, a) + ";");
      } else if (Array.isArray(r) && typeof r[0] == "string" && (e == null || e[r[0]] === void 0))
        for (var l = 0; l < r.length; l++)
          Ws(r[l]) && (i += Je(o) + ":" + Gs(o, r[l]) + ";");
      else {
        var c = ee(t, e, r);
        switch (o) {
          case "animation":
          case "animationName": {
            i += Je(o) + ":" + c + ";";
            break;
          }
          default:
            i += o + "{" + c + "}";
        }
      }
    }
  return i;
}
var zs = /label:\s*([^\s;{]+)\s*(;|$)/g, et;
function Ch(t, e, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var i = !0, s = "";
  et = void 0;
  var o = t[0];
  if (o == null || o.raw === void 0)
    i = !1, s += ee(n, e, o);
  else {
    var r = o;
    s += r[0];
  }
  for (var a = 1; a < t.length; a++)
    if (s += ee(n, e, t[a]), i) {
      var l = o;
      s += l[a];
    }
  zs.lastIndex = 0;
  for (var c = "", u; (u = zs.exec(s)) !== null; )
    c += "-" + u[1];
  var f = Th(s) + c;
  return {
    name: f,
    styles: s,
    next: et
  };
}
var Vh = function(e) {
  return e();
}, Rh = G.useInsertionEffect ? G.useInsertionEffect : !1, Mh = Rh || Vh, ta = /* @__PURE__ */ G.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ yh({
    key: "css"
  }) : null
);
ta.Provider;
var Dh = function(e) {
  return /* @__PURE__ */ cr(function(n, i) {
    var s = $(ta);
    return e(n, s, i);
  });
}, Eh = /* @__PURE__ */ G.createContext({}), kh = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Lh = /* @__PURE__ */ Yo(
  function(t) {
    return kh.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Oh = Lh, Fh = function(e) {
  return e !== "theme";
}, qs = function(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96 ? Oh : Fh;
}, Ks = function(e, n, i) {
  var s;
  if (n) {
    var o = n.shouldForwardProp;
    s = e.__emotion_forwardProp && o ? function(r) {
      return e.__emotion_forwardProp(r) && o(r);
    } : o;
  }
  return typeof s != "function" && i && (s = e.__emotion_forwardProp), s;
}, jh = function(e) {
  var n = e.cache, i = e.serialized, s = e.isStringTag;
  return Jo(n, i, s), Mh(function() {
    return xh(n, i, s);
  }), null;
}, Ih = function t(e, n) {
  var i = e.__emotion_real === e, s = i && e.__emotion_base || e, o, r;
  n !== void 0 && (o = n.label, r = n.target);
  var a = Ks(e, n, i), l = a || qs(s), c = !l("as");
  return function() {
    var u = arguments, f = i && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
    if (o !== void 0 && f.push("label:" + o + ";"), u[0] == null || u[0].raw === void 0)
      f.push.apply(f, u);
    else {
      var h = u[0];
      f.push(h[0]);
      for (var d = u.length, m = 1; m < d; m++)
        f.push(u[m], h[m]);
    }
    var p = Dh(function(y, g, v) {
      var x = c && y.as || s, w = "", b = [], T = y;
      if (y.theme == null) {
        T = {};
        for (var S in y)
          T[S] = y[S];
        T.theme = G.useContext(Eh);
      }
      typeof y.className == "string" ? w = bh(g.registered, b, y.className) : y.className != null && (w = y.className + " ");
      var P = Ch(f.concat(b), g.registered, T);
      w += g.key + "-" + P.name, r !== void 0 && (w += " " + r);
      var M = c && a === void 0 ? qs(x) : l, E = {};
      for (var q in y)
        c && q === "as" || M(q) && (E[q] = y[q]);
      return E.className = w, v && (E.ref = v), /* @__PURE__ */ G.createElement(G.Fragment, null, /* @__PURE__ */ G.createElement(jh, {
        cache: g,
        serialized: P,
        isStringTag: typeof x == "string"
      }), /* @__PURE__ */ G.createElement(x, E));
    });
    return p.displayName = o !== void 0 ? o : "Styled(" + (typeof s == "string" ? s : s.displayName || s.name || "Component") + ")", p.defaultProps = e.defaultProps, p.__emotion_real = p, p.__emotion_base = s, p.__emotion_styles = f, p.__emotion_forwardProp = a, Object.defineProperty(p, "toString", {
      value: function() {
        return "." + r;
      }
    }), p.withComponent = function(y, g) {
      var v = t(y, On({}, n, g, {
        shouldForwardProp: Ks(p, g, !0)
      }));
      return v.apply(void 0, f);
    }, p;
  };
}, Bh = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Ve = Ih.bind(null);
Bh.forEach(function(t) {
  Ve[t] = Ve(t);
});
var Qe, Hs;
function vi() {
  if (Hs) return Qe;
  Hs = 1;
  function t(e) {
    var n = typeof e;
    return e != null && (n == "object" || n == "function");
  }
  return Qe = t, Qe;
}
var tn, Xs;
function _h() {
  if (Xs) return tn;
  Xs = 1;
  var t = typeof le == "object" && le && le.Object === Object && le;
  return tn = t, tn;
}
var en, Ys;
function ea() {
  if (Ys) return en;
  Ys = 1;
  var t = _h(), e = typeof self == "object" && self && self.Object === Object && self, n = t || e || Function("return this")();
  return en = n, en;
}
var nn, Zs;
function Nh() {
  if (Zs) return nn;
  Zs = 1;
  var t = ea(), e = function() {
    return t.Date.now();
  };
  return nn = e, nn;
}
var sn, Js;
function Uh() {
  if (Js) return sn;
  Js = 1;
  var t = /\s/;
  function e(n) {
    for (var i = n.length; i-- && t.test(n.charAt(i)); )
      ;
    return i;
  }
  return sn = e, sn;
}
var rn, Qs;
function $h() {
  if (Qs) return rn;
  Qs = 1;
  var t = Uh(), e = /^\s+/;
  function n(i) {
    return i && i.slice(0, t(i) + 1).replace(e, "");
  }
  return rn = n, rn;
}
var on, tr;
function na() {
  if (tr) return on;
  tr = 1;
  var t = ea(), e = t.Symbol;
  return on = e, on;
}
var an, er;
function Wh() {
  if (er) return an;
  er = 1;
  var t = na(), e = Object.prototype, n = e.hasOwnProperty, i = e.toString, s = t ? t.toStringTag : void 0;
  function o(r) {
    var a = n.call(r, s), l = r[s];
    try {
      r[s] = void 0;
      var c = !0;
    } catch {
    }
    var u = i.call(r);
    return c && (a ? r[s] = l : delete r[s]), u;
  }
  return an = o, an;
}
var ln, nr;
function Gh() {
  if (nr) return ln;
  nr = 1;
  var t = Object.prototype, e = t.toString;
  function n(i) {
    return e.call(i);
  }
  return ln = n, ln;
}
var cn, ir;
function zh() {
  if (ir) return cn;
  ir = 1;
  var t = na(), e = Wh(), n = Gh(), i = "[object Null]", s = "[object Undefined]", o = t ? t.toStringTag : void 0;
  function r(a) {
    return a == null ? a === void 0 ? s : i : o && o in Object(a) ? e(a) : n(a);
  }
  return cn = r, cn;
}
var un, sr;
function qh() {
  if (sr) return un;
  sr = 1;
  function t(e) {
    return e != null && typeof e == "object";
  }
  return un = t, un;
}
var fn, rr;
function Kh() {
  if (rr) return fn;
  rr = 1;
  var t = zh(), e = qh(), n = "[object Symbol]";
  function i(s) {
    return typeof s == "symbol" || e(s) && t(s) == n;
  }
  return fn = i, fn;
}
var hn, or;
function Hh() {
  if (or) return hn;
  or = 1;
  var t = $h(), e = vi(), n = Kh(), i = NaN, s = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, r = /^0o[0-7]+$/i, a = parseInt;
  function l(c) {
    if (typeof c == "number")
      return c;
    if (n(c))
      return i;
    if (e(c)) {
      var u = typeof c.valueOf == "function" ? c.valueOf() : c;
      c = e(u) ? u + "" : u;
    }
    if (typeof c != "string")
      return c === 0 ? c : +c;
    c = t(c);
    var f = o.test(c);
    return f || r.test(c) ? a(c.slice(2), f ? 2 : 8) : s.test(c) ? i : +c;
  }
  return hn = l, hn;
}
var dn, ar;
function ia() {
  if (ar) return dn;
  ar = 1;
  var t = vi(), e = Nh(), n = Hh(), i = "Expected a function", s = Math.max, o = Math.min;
  function r(a, l, c) {
    var u, f, h, d, m, p, y = 0, g = !1, v = !1, x = !0;
    if (typeof a != "function")
      throw new TypeError(i);
    l = n(l) || 0, t(c) && (g = !!c.leading, v = "maxWait" in c, h = v ? s(n(c.maxWait) || 0, l) : h, x = "trailing" in c ? !!c.trailing : x);
    function w(L) {
      var Z = u, Tt = f;
      return u = f = void 0, y = L, d = a.apply(Tt, Z), d;
    }
    function b(L) {
      return y = L, m = setTimeout(P, l), g ? w(L) : d;
    }
    function T(L) {
      var Z = L - p, Tt = L - y, je = l - Z;
      return v ? o(je, h - Tt) : je;
    }
    function S(L) {
      var Z = L - p, Tt = L - y;
      return p === void 0 || Z >= l || Z < 0 || v && Tt >= h;
    }
    function P() {
      var L = e();
      if (S(L))
        return M(L);
      m = setTimeout(P, T(L));
    }
    function M(L) {
      return m = void 0, x && u ? w(L) : (u = f = void 0, d);
    }
    function E() {
      m !== void 0 && clearTimeout(m), y = 0, u = p = f = m = void 0;
    }
    function q() {
      return m === void 0 ? d : M(e());
    }
    function xt() {
      var L = e(), Z = S(L);
      if (u = arguments, f = this, p = L, Z) {
        if (m === void 0)
          return b(p);
        if (v)
          return clearTimeout(m), m = setTimeout(P, l), w(p);
      }
      return m === void 0 && (m = setTimeout(P, l)), d;
    }
    return xt.cancel = E, xt.flush = q, xt;
  }
  return dn = r, dn;
}
var Xh = ia();
const Yh = /* @__PURE__ */ fr(Xh);
var pn, lr;
function Zh() {
  if (lr) return pn;
  lr = 1;
  var t = ia(), e = vi(), n = "Expected a function";
  function i(s, o, r) {
    var a = !0, l = !0;
    if (typeof s != "function")
      throw new TypeError(n);
    return e(r) && (a = "leading" in r ? !!r.leading : a, l = "trailing" in r ? !!r.trailing : l), t(s, o, {
      leading: a,
      maxWait: o,
      trailing: l
    });
  }
  return pn = i, pn;
}
var Jh = Zh();
const Qh = /* @__PURE__ */ fr(Jh), td = (t, e, n, i) => {
  switch (e) {
    case "debounce":
      return Yh(t, n, i);
    case "throttle":
      return Qh(t, n, i);
    default:
      return t;
  }
}, ed = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (t) => {
    const e = G.useRef(t);
    return G.useEffect(() => {
      e.current = t;
    }), G.useMemo(() => (...n) => {
      var i;
      return (i = e.current) === null || i === void 0 ? void 0 : i.call(e, ...n);
    }, []);
  }
), nd = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (t) => {
    const [e, n] = G.useState((t == null ? void 0 : t.current) || null);
    return t && setTimeout(() => {
      t.current !== e && n(t.current);
    }, 0), { refProxy: G.useMemo(() => new Proxy((s) => {
      s !== e && n(s);
    }, {
      get(s, o) {
        return o === "current" ? e : s[o];
      },
      set(s, o, r) {
        return o === "current" ? n(r) : s[o] = r, !0;
      }
    }), [e]), refElement: e, setRefElement: n };
  }
), id = (t, e) => e === "border-box" ? {
  width: t.borderBoxSize[0].inlineSize,
  height: t.borderBoxSize[0].blockSize
} : e === "content-box" ? {
  width: t.contentBoxSize[0].inlineSize,
  height: t.contentBoxSize[0].blockSize
} : {
  width: t.contentRect.width,
  height: t.contentRect.height
};
function sd({ skipOnMount: t = !1, refreshMode: e, refreshRate: n = 1e3, refreshOptions: i, handleWidth: s = !0, handleHeight: o = !0, targetRef: r, observerOptions: a, onResize: l } = {}) {
  const c = ut(t), u = ed(l), [f, h] = de({
    width: void 0,
    height: void 0
  }), { refProxy: d, refElement: m } = nd(r), { box: p } = a || {}, y = Rt((v) => {
    if (!s && !o)
      return;
    if (c.current) {
      c.current = !1;
      return;
    }
    const x = (w, b) => s && w.width !== b.width || o && w.height !== b.height;
    v.forEach((w) => {
      const b = id(w, p);
      h((T) => x(T, b) ? (u == null || u({
        width: b.width,
        height: b.height,
        entry: w
      }), b) : T);
    });
  }, [s, o, c, p]), g = Rt(td(y, e, n, i), [
    y,
    e,
    n,
    i
  ]);
  return ne(() => {
    let v;
    return m ? (v = new window.ResizeObserver(g), v.observe(m, a)) : (f.width || f.height) && (u == null || u({
      width: null,
      height: null,
      entry: null
    }), h({ width: void 0, height: void 0 })), () => {
      var x, w, b;
      (x = v == null ? void 0 : v.disconnect) === null || x === void 0 || x.call(v), (b = (w = g).cancel) === null || b === void 0 || b.call(w);
    };
  }, [g, m]), Object.assign({ ref: d }, f);
}
const rd = Ve(Wo.div)`
  height: 100%;
  max-height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
function od({ index: t, onSizeChange: e, ...n }) {
  const { ref: i } = sd({
    handleHeight: !1,
    refreshMode: "debounce",
    refreshRate: 1e3,
    onResize({ width: s, height: o }) {
      e(t, s, o);
    }
  });
  return /* @__PURE__ */ Q.jsx(rd, { ref: i, ...n });
}
const ad = Ve(Wo.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  .wrapper {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 50%;
    pointer-events: none;
    z-index: 3;
    button {
      &:not(:disabled),
      &:not(.disabled) {
        pointer-events: auto;
      }
      top: 0;
      &:first-of-type {
        position: absolute;
        left: 0;
        translate: 50% -50%;
      }
      &:last-of-type {
        position: absolute;
        right: 0;
        translate: -50% -50%;
      }
    }
  }
`, ld = {
  enter: ({ direction: t }) => ({
    scale: 0.2,
    // Or any initial scale based on index
    x: t < 1 ? 50 : -50,
    opacity: 0
  }),
  center: ({ activeIndex: t, inactiveBlur: e, currentIndex: n, direction: i, x: s, inactiveScaleMultiplier: o }) => {
    let r = 1, a = 1, l = "0px";
    if (n > t && (a = 0.9), n < t) {
      l = `${e}px`, a = 0.9;
      const c = o * (t - n);
      r = Math.max(0, 1 - c);
    }
    return {
      scale: r,
      filter: `blur(${l})`,
      x: s,
      zIndex: cd({ activeIndex: t, currentIndex: n, direction: i }),
      opacity: r === 0 ? 0 : a
    };
  },
  // ... center variant as previously defined ...
  exit: ({ direction: t }) => ({
    scale: 0.2,
    // Or any exit scale based on index
    x: t < 1 ? -50 : 50,
    opacity: 0
  })
};
function cd({ activeIndex: t, currentIndex: e, direction: n }) {
  if (!(n < 0))
    return e === t ? 3 : 2;
}
const ud = 100, fd = ({
  slides: t,
  options: e,
  ref: n
}) => {
  const {
    spacing: i = 20,
    inactiveOffset: s = 150,
    inactiveScaleMultiplier: o = 0.1,
    inactiveBlur: r = 15
  } = e, a = ut(0), [[l, c], u] = de([0, 0]), [f, h] = de([]), d = ut(null), [m, p] = de(0), y = (l % t.length + t.length) % t.length, g = ut(!1), v = Rt(
    (b) => {
      u((T) => {
        const S = T[0] + b;
        return S < 0 || S >= t.length ? T : [S, b];
      });
    },
    [t]
  ), x = Rt(
    (b, { offset: T }) => {
      if (g.current) return;
      const S = ud / 2, P = l === t.length - 1, M = l === 0;
      T.x < -50 && !P ? a.current = 1 : T.x > S && !M ? a.current = -1 : a.current = 0;
    },
    [t, l]
  );
  ne(() => {
    if (d.current && f.length > 0) {
      const b = d.current.clientWidth, T = f[l], S = b / 2 - T / 2;
      p(S);
    }
  }, [f, l]);
  const w = (b, T) => {
    let S = 0;
    if (T < b) {
      for (let P = 0; P < T; P++)
        S -= f[P] + i;
      s === !1 ? S -= f[T] * (b - T) : S -= s * (b - T);
    } else
      for (let P = 0; P < b; P++)
        S -= f[P] + i;
    return S;
  };
  return /* @__PURE__ */ Q.jsxs(
    ad,
    {
      ref: n,
      dragElastic: 0,
      dragMomentum: !1,
      drag: t.length > 1 ? "x" : !1,
      onDrag: x,
      onDragStart: () => g.current = !1,
      onDragEnd: () => {
        g.current = !0, a.current !== 0 && v(a.current);
      },
      dragConstraints: { left: 0, right: 0, top: 0, bottom: 0 },
      children: [
        /* @__PURE__ */ Q.jsx(
          "div",
          {
            className: "wrapper",
            ref: d,
            style: {
              gap: `${i}px`
            },
            children: t.map((b, T) => /* @__PURE__ */ Q.jsx(
              od,
              {
                className: "card",
                onSizeChange: (S, P) => {
                  f[S] !== P && h((M) => {
                    const E = [...M];
                    return P && (E[S] = P), E;
                  });
                },
                index: T,
                layout: !0,
                custom: {
                  activeIndex: y,
                  currentIndex: T,
                  direction: c,
                  inactiveBlur: r,
                  inactiveScaleMultiplier: o,
                  x: w(l, T) + m
                },
                variants: ld,
                initial: !1,
                animate: "center",
                exit: "exit",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  duration: 0.5
                }
              },
              T
            ))
          }
        ),
        /* @__PURE__ */ Q.jsxs("div", { className: "buttons", children: [
          /* @__PURE__ */ Q.jsx(
            bi,
            {
              disabled: l === 0,
              whileTap: { scale: 0.8 },
              onClick: () => v(-1),
              icon: "mdi:chevron-left",
              cssStyles: `
            background: rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            backdrop-filter: blur(5px);
            border: 2px solid rgba(255, 255, 255, 0.1);
          `
            }
          ),
          /* @__PURE__ */ Q.jsx(
            bi,
            {
              disabled: l === t.length - 1,
              icon: "mdi:chevron-right",
              cssStyles: `
            background: rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            backdrop-filter: blur(5px);
            border: 2px solid rgba(255, 255, 255, 0.1);
          `,
              whileTap: { scale: 0.8 },
              onClick: () => v(1)
            }
          )
        ] })
      ]
    }
  );
}, gd = {
  category: "Misc",
  label: "Slider",
  version: "1.0.0",
  description: "A slider component that can be used to display a series of slides with nested components.",
  fields: {
    slides: {
      type: "array",
      label: "Slides",
      default: [],
      min: 5,
      max: 5,
      collapsible: {
        open: !0
      },
      getItemSummary: (t, e) => t.label || `Viewport #${e}`,
      defaultItemProps: {
        id: "",
        label: "Slide Name"
      },
      disableBreakpoints: !0,
      arrayFields: {
        label: {
          label: "Label",
          type: "text",
          default: "Slide Name"
        },
        id: {
          type: "hidden",
          default: "",
          disableBreakpoints: !0
        }
      }
    },
    options: {
      type: "object",
      default: {},
      label: "Slider options",
      collapsible: {
        open: !1
      },
      objectFields: {
        spacing: {
          label: "Spacing",
          type: "number",
          default: 0,
          min: 0,
          max: 100,
          step: 1
        },
        inactiveOffset: {
          label: "Inactive Offset",
          type: "number",
          default: 150,
          min: 0,
          max: 1e3,
          step: 5
        },
        inactiveScaleMultiplier: {
          label: "Inactive Scale Multiplier",
          type: "number",
          default: 0.1,
          min: 0,
          max: 1,
          step: 0.1
        },
        inactiveBlur: {
          label: "Inactive Blur",
          type: "number",
          min: 0,
          max: 100,
          step: 1,
          default: 15
        }
      }
    }
  },
  resolveData: ({ props: t }) => {
    let e = null;
    const n = [...t.slides ?? []].map((i) => ({ ...i }));
    for (const i of n) {
      if (!i.id || i.id === e) {
        const s = ca();
        i.id = s;
      }
      e = i.id;
    }
    return t.slides = n, {
      props: t
    };
  },
  inline: !0,
  permissions: {
    drag: !1,
    delete: !1,
    duplicate: !1,
    insert: !1
  },
  render({ puck: t, options: e, slides: n = [] }) {
    const i = n.filter((s) => s.id && s.id.length > 0);
    return /* @__PURE__ */ Q.jsx(fd, { options: e, slides: i, ref: t.dragRef });
  }
};
export {
  gd as default
};
