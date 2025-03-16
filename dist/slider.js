import * as Mt from "react";
import { createContext as xt, useRef as Q, useLayoutEffect as io, useEffect as _t, useContext as I, useId as so, useCallback as gt, useMemo as se, useInsertionEffect as ro, forwardRef as oo, Fragment as bs, createElement as ao, Component as lo, useState as Ht } from "react";
import { FabCard as _n } from "@hakit/components";
import { v4 as uo } from "uuid";
var Kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ss(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var fe = { exports: {} }, Pt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nn;
function co() {
  if (Nn) return Pt;
  Nn = 1;
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
  return Pt.Fragment = e, Pt.jsx = n, Pt.jsxs = n, Pt;
}
var Un;
function ho() {
  return Un || (Un = 1, fe.exports = co()), fe.exports;
}
var K = ho();
const Ps = xt({});
function fo(t) {
  const e = Q(null);
  return e.current === null && (e.current = t()), e.current;
}
const on = typeof window < "u", mo = on ? io : _t, an = /* @__PURE__ */ xt(null), ws = xt({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function po(t = !0) {
  const e = I(an);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: i, register: s } = e, o = so();
  _t(() => {
    if (t)
      return s(o);
  }, [t]);
  const r = gt(() => t && i && i(o), [o, i, t]);
  return !n && i ? [!1, r] : [!0];
}
function ln(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function un(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const _ = /* @__NO_SIDE_EFFECTS__ */ (t) => t;
let As = _;
const go = {
  useManualTiming: !1
};
// @__NO_SIDE_EFFECTS__
function cn(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const yt = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const i = e - t;
  return i === 0 ? 1 : (n - t) / i;
};
class hn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return ln(this.subscriptions, e), () => un(this.subscriptions, e);
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
const H = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, X = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3;
function Vs(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const yo = /* @__PURE__ */ cn(() => window.ScrollTimeline !== void 0);
class vo {
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
      if (yo() && s.attachTimeline)
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
class To extends vo {
  then(e, n) {
    return Promise.all(this.animations).then(e).catch(n);
  }
}
function fn(t, e) {
  return t ? t[e] || t.default || t : void 0;
}
const Ne = 2e4;
function Ms(t) {
  let e = 0;
  const n = 50;
  let i = t.next(e);
  for (; !i.done && e < Ne; )
    e += n, i = t.next(e);
  return e >= Ne ? 1 / 0 : e;
}
function dn(t) {
  return typeof t == "function";
}
function Wn(t, e) {
  t.timeline = e, t.onfinish = null;
}
const mn = (t) => Array.isArray(t) && typeof t[0] == "number", xo = {
  linearEasing: void 0
};
function bo(t, e) {
  const n = /* @__PURE__ */ cn(t);
  return () => {
    var i;
    return (i = xo[e]) !== null && i !== void 0 ? i : n();
  };
}
const Jt = /* @__PURE__ */ bo(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Cs = (t, e, n = 10) => {
  let i = "";
  const s = Math.max(Math.round(e / n), 2);
  for (let o = 0; o < s; o++)
    i += t(/* @__PURE__ */ yt(0, s - 1, o)) + ", ";
  return `linear(${i.substring(0, i.length - 2)})`;
};
function Ds(t) {
  return !!(typeof t == "function" && Jt() || !t || typeof t == "string" && (t in Ue || Jt()) || mn(t) || Array.isArray(t) && t.every(Ds));
}
const At = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`, Ue = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ At([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ At([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ At([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ At([0.33, 1.53, 0.69, 0.99])
};
function Rs(t, e) {
  if (t)
    return typeof t == "function" && Jt() ? Cs(t, e) : mn(t) ? At(t) : Array.isArray(t) ? t.map((n) => Rs(n, e) || Ue.easeOut) : Ue[t];
}
const $t = [
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
], Gn = {
  value: null
};
function So(t, e) {
  let n = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), s = !1, o = !1;
  const r = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, l = 0;
  function u(h) {
    r.has(h) && (c.schedule(h), t()), l++, h(a);
  }
  const c = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (h, f = !1, d = !1) => {
      const p = d && s ? n : i;
      return f && r.add(h), p.has(h) || p.add(h), h;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (h) => {
      i.delete(h), r.delete(h);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (h) => {
      if (a = h, s) {
        o = !0;
        return;
      }
      s = !0, [n, i] = [i, n], n.forEach(u), e && Gn.value && Gn.value.frameloop[e].push(l), l = 0, n.clear(), s = !1, o && (o = !1, c.process(h));
    }
  };
  return c;
}
const Po = 40;
function Es(t, e) {
  let n = !1, i = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, r = $t.reduce((g, T) => (g[T] = So(o, e ? T : void 0), g), {}), { read: a, resolveKeyframes: l, update: u, preRender: c, render: h, postRender: f } = r, d = () => {
    const g = performance.now();
    n = !1, s.delta = i ? 1e3 / 60 : Math.max(Math.min(g - s.timestamp, Po), 1), s.timestamp = g, s.isProcessing = !0, a.process(s), l.process(s), u.process(s), c.process(s), h.process(s), f.process(s), s.isProcessing = !1, n && e && (i = !1, t(d));
  }, m = () => {
    n = !0, i = !0, s.isProcessing || t(d);
  };
  return { schedule: $t.reduce((g, T) => {
    const x = r[T];
    return g[T] = (w, v = !1, S = !1) => (n || m(), x.schedule(w, v, S)), g;
  }, {}), cancel: (g) => {
    for (let T = 0; T < $t.length; T++)
      r[$t[T]].cancel(g);
  }, state: s, steps: r };
}
const { schedule: V, cancel: tt, state: j, steps: de } = /* @__PURE__ */ Es(typeof requestAnimationFrame < "u" ? requestAnimationFrame : _, !0), { schedule: pn } = /* @__PURE__ */ Es(queueMicrotask, !1);
let Xt;
function wo() {
  Xt = void 0;
}
const $ = {
  now: () => (Xt === void 0 && $.set(j.isProcessing || go.useManualTiming ? j.timestamp : performance.now()), Xt),
  set: (t) => {
    Xt = t, queueMicrotask(wo);
  }
}, G = {
  x: !1,
  y: !1
};
function Ls() {
  return G.x || G.y;
}
function Ao(t) {
  return t === "x" || t === "y" ? G[t] ? null : (G[t] = !0, () => {
    G[t] = !1;
  }) : G.x || G.y ? null : (G.x = G.y = !0, () => {
    G.x = G.y = !1;
  });
}
function Vo(t, e, n) {
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
function js(t, e) {
  const n = Vo(t), i = new AbortController(), s = {
    passive: !0,
    ...e,
    signal: i.signal
  };
  return [n, s, () => i.abort()];
}
function Kn(t) {
  return !(t.pointerType === "touch" || Ls());
}
function Mo(t, e, n = {}) {
  const [i, s, o] = js(t, n), r = (a) => {
    if (!Kn(a))
      return;
    const { target: l } = a, u = e(l, a);
    if (typeof u != "function" || !l)
      return;
    const c = (h) => {
      Kn(h) && (u(h), l.removeEventListener("pointerleave", c));
    };
    l.addEventListener("pointerleave", c, s);
  };
  return i.forEach((a) => {
    a.addEventListener("pointerenter", r, s);
  }), o;
}
function $n(t, e) {
  const n = `${e}PointerCapture`;
  if (t.target instanceof Element && n in t.target && t.pointerId !== void 0)
    try {
      t.target[n](t.pointerId);
    } catch {
    }
}
const ks = (t, e) => e ? t === e ? !0 : ks(t, e.parentElement) : !1, gn = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, Co = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Do(t) {
  return Co.has(t.tagName) || t.tabIndex !== -1;
}
const Vt = /* @__PURE__ */ new WeakSet();
function qn(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function me(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const Ro = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const i = qn(() => {
    if (Vt.has(n))
      return;
    me(n, "down");
    const s = qn(() => {
      me(n, "up");
    }), o = () => me(n, "cancel");
    n.addEventListener("keyup", s, e), n.addEventListener("blur", o, e);
  });
  n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e);
};
function zn(t) {
  return gn(t) && !Ls();
}
function Eo(t, e, n = {}) {
  const [i, s, o] = js(t, n), r = (a) => {
    const l = a.currentTarget;
    if (!l || !zn(a) || Vt.has(l))
      return;
    Vt.add(l), $n(a, "set");
    const u = e(l, a), c = (d, m) => {
      l.removeEventListener("pointerup", h), l.removeEventListener("pointercancel", f), $n(d, "release"), !(!zn(d) || !Vt.has(l)) && (Vt.delete(l), typeof u == "function" && u(d, { success: m }));
    }, h = (d) => {
      (d.isTrusted ? Lo(d, l instanceof Element ? l.getBoundingClientRect() : {
        left: 0,
        top: 0,
        right: window.innerWidth,
        bottom: window.innerHeight
      }) : !1) ? c(d, !1) : c(d, !(l instanceof Element) || ks(l, d.target));
    }, f = (d) => {
      c(d, !1);
    };
    l.addEventListener("pointerup", h, s), l.addEventListener("pointercancel", f, s), l.addEventListener("lostpointercapture", f, s);
  };
  return i.forEach((a) => {
    a = n.useGlobalTarget ? window : a;
    let l = !1;
    a instanceof HTMLElement && (l = !0, !Do(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0)), a.addEventListener("pointerdown", r, s), l && a.addEventListener("focus", (u) => Ro(u, s), s);
  }), o;
}
function Lo(t, e) {
  return t.clientX < e.left || t.clientX > e.right || t.clientY < e.top || t.clientY > e.bottom;
}
const Hn = 30, jo = (t) => !isNaN(parseFloat(t));
class ko {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(e, n = {}) {
    this.version = "12.5.0", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i, s = !0) => {
      const o = $.now();
      this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), s && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = $.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = jo(this.current));
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
    this.events[e] || (this.events[e] = new hn());
    const i = this.events[e].add(n);
    return e === "change" ? () => {
      i(), V.read(() => {
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
    const e = $.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Hn)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Hn);
    return Vs(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function Lt(t, e) {
  return new ko(t, e);
}
const Bs = xt({ strict: !1 }), Xn = {
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
}, vt = {};
for (const t in Xn)
  vt[t] = {
    isEnabled: (e) => Xn[t].some((n) => !!e[n])
  };
function Bo(t) {
  for (const e in t)
    vt[e] = {
      ...vt[e],
      ...t[e]
    };
}
const Fo = /* @__PURE__ */ new Set([
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
function Qt(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Fo.has(t);
}
let Fs = (t) => !Qt(t);
function Oo(t) {
  t && (Fs = (e) => e.startsWith("on") ? !Qt(e) : t(e));
}
try {
  Oo(require("@emotion/is-prop-valid").default);
} catch {
}
function Io(t, e, n) {
  const i = {};
  for (const s in t)
    s === "values" && typeof t.values == "object" || (Fs(s) || n === !0 && Qt(s) || !e && !Qt(s) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && s.startsWith("onDrag")) && (i[s] = t[s]);
  return i;
}
function _o(t) {
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
const re = /* @__PURE__ */ xt({});
function oe(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function jt(t) {
  return typeof t == "string" || Array.isArray(t);
}
const yn = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], vn = ["initial", ...yn];
function ae(t) {
  return oe(t.animate) || vn.some((e) => jt(t[e]));
}
function Os(t) {
  return !!(ae(t) || t.variants);
}
function No(t, e) {
  if (ae(t)) {
    const { initial: n, animate: i } = t;
    return {
      initial: n === !1 || jt(n) ? n : void 0,
      animate: jt(i) ? i : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function Uo(t) {
  const { initial: e, animate: n } = No(t, I(re));
  return se(() => ({ initial: e, animate: n }), [Yn(e), Yn(n)]);
}
function Yn(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Wo = Symbol.for("motionComponentSymbol");
function ht(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Go(t, e, n) {
  return gt(
    (i) => {
      i && t.onMount && t.onMount(i), e && (i ? e.mount(i) : e.unmount()), n && (typeof n == "function" ? n(i) : ht(n) && (n.current = i));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [e]
  );
}
const Tn = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Ko = "framerAppearId", Is = "data-" + Tn(Ko), _s = xt({});
function $o(t, e, n, i, s) {
  var o, r;
  const { visualElement: a } = I(re), l = I(Bs), u = I(an), c = I(ws).reducedMotion, h = Q(null);
  i = i || l.renderer, !h.current && i && (h.current = i(t, {
    visualState: e,
    parent: a,
    props: n,
    presenceContext: u,
    blockInitialAnimation: u ? u.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const f = h.current, d = I(_s);
  f && !f.projection && s && (f.type === "html" || f.type === "svg") && qo(h.current, n, s, d);
  const m = Q(!1);
  ro(() => {
    f && m.current && f.update(n, u);
  });
  const p = n[Is], y = Q(!!p && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, p)) && ((r = window.MotionHasOptimisedAnimation) === null || r === void 0 ? void 0 : r.call(window, p)));
  return mo(() => {
    f && (m.current = !0, window.MotionIsMounted = !0, f.updateFeatures(), pn.render(f.render), y.current && f.animationState && f.animationState.animateChanges());
  }), _t(() => {
    f && (!y.current && f.animationState && f.animationState.animateChanges(), y.current && (queueMicrotask(() => {
      var g;
      (g = window.MotionHandoffMarkAsComplete) === null || g === void 0 || g.call(window, p);
    }), y.current = !1));
  }), f;
}
function qo(t, e, n, i) {
  const { layoutId: s, layout: o, drag: r, dragConstraints: a, layoutScroll: l, layoutRoot: u } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : Ns(t.parent)), t.projection.setOptions({
    layoutId: s,
    layout: o,
    alwaysMeasureLayout: !!r || a && ht(a),
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
    layoutRoot: u
  });
}
function Ns(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : Ns(t.parent);
}
function zo({ preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: i, Component: s }) {
  var o, r;
  t && Bo(t);
  function a(u, c) {
    let h;
    const f = {
      ...I(ws),
      ...u,
      layoutId: Ho(u)
    }, { isStatic: d } = f, m = Uo(u), p = i(u, d);
    if (!d && on) {
      Xo();
      const y = Yo(f);
      h = y.MeasureLayout, m.visualElement = $o(s, p, f, e, y.ProjectionNode);
    }
    return K.jsxs(re.Provider, { value: m, children: [h && m.visualElement ? K.jsx(h, { visualElement: m.visualElement, ...f }) : null, n(s, u, Go(p, m.visualElement, c), p, d, m.visualElement)] });
  }
  a.displayName = `motion.${typeof s == "string" ? s : `create(${(r = (o = s.displayName) !== null && o !== void 0 ? o : s.name) !== null && r !== void 0 ? r : ""})`}`;
  const l = oo(a);
  return l[Wo] = s, l;
}
function Ho({ layoutId: t }) {
  const e = I(Ps).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Xo(t, e) {
  I(Bs).strict;
}
function Yo(t) {
  const { drag: e, layout: n } = vt;
  if (!e && !n)
    return {};
  const i = { ...e, ...n };
  return {
    MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? i.MeasureLayout : void 0,
    ProjectionNode: i.ProjectionNode
  };
}
const Us = (t) => (e) => typeof e == "string" && e.startsWith(t), xn = /* @__PURE__ */ Us("--"), Zo = /* @__PURE__ */ Us("var(--"), bn = (t) => Zo(t) ? Jo.test(t.split("/*")[0].trim()) : !1, Jo = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, kt = {};
function Qo(t) {
  for (const e in t)
    kt[e] = t[e], xn(e) && (kt[e].isCSSVariable = !0);
}
const bt = [
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
], lt = new Set(bt);
function Ws(t, { layout: e, layoutId: n }) {
  return lt.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!kt[t] || t === "opacity");
}
const B = (t) => !!(t && t.getVelocity), Gs = (t, e) => e && typeof t == "number" ? e.transform(t) : t, Y = (t, e, n) => n > e ? e : n < t ? t : n, St = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, Bt = {
  ...St,
  transform: (t) => Y(0, 1, t)
}, qt = {
  ...St,
  default: 1
}, Nt = (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), J = /* @__PURE__ */ Nt("deg"), q = /* @__PURE__ */ Nt("%"), P = /* @__PURE__ */ Nt("px"), ta = /* @__PURE__ */ Nt("vh"), ea = /* @__PURE__ */ Nt("vw"), Zn = {
  ...q,
  parse: (t) => q.parse(t) / 100,
  transform: (t) => q.transform(t * 100)
}, na = {
  // Border props
  borderWidth: P,
  borderTopWidth: P,
  borderRightWidth: P,
  borderBottomWidth: P,
  borderLeftWidth: P,
  borderRadius: P,
  radius: P,
  borderTopLeftRadius: P,
  borderTopRightRadius: P,
  borderBottomRightRadius: P,
  borderBottomLeftRadius: P,
  // Positioning props
  width: P,
  maxWidth: P,
  height: P,
  maxHeight: P,
  top: P,
  right: P,
  bottom: P,
  left: P,
  // Spacing props
  padding: P,
  paddingTop: P,
  paddingRight: P,
  paddingBottom: P,
  paddingLeft: P,
  margin: P,
  marginTop: P,
  marginRight: P,
  marginBottom: P,
  marginLeft: P,
  // Misc
  backgroundPositionX: P,
  backgroundPositionY: P
}, ia = {
  rotate: J,
  rotateX: J,
  rotateY: J,
  rotateZ: J,
  scale: qt,
  scaleX: qt,
  scaleY: qt,
  scaleZ: qt,
  skew: J,
  skewX: J,
  skewY: J,
  distance: P,
  translateX: P,
  translateY: P,
  translateZ: P,
  x: P,
  y: P,
  z: P,
  perspective: P,
  transformPerspective: P,
  opacity: Bt,
  originX: Zn,
  originY: Zn,
  originZ: P
}, Jn = {
  ...St,
  transform: Math.round
}, Sn = {
  ...na,
  ...ia,
  zIndex: Jn,
  size: P,
  // SVG
  fillOpacity: Bt,
  strokeOpacity: Bt,
  numOctaves: Jn
}, sa = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, ra = bt.length;
function oa(t, e, n) {
  let i = "", s = !0;
  for (let o = 0; o < ra; o++) {
    const r = bt[o], a = t[r];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = Gs(a, Sn[r]);
      if (!l) {
        s = !1;
        const c = sa[r] || r;
        i += `${c}(${u}) `;
      }
      n && (e[r] = u);
    }
  }
  return i = i.trim(), n ? i = n(e, s ? "" : i) : s && (i = "none"), i;
}
function Pn(t, e, n) {
  const { style: i, vars: s, transformOrigin: o } = t;
  let r = !1, a = !1;
  for (const l in e) {
    const u = e[l];
    if (lt.has(l)) {
      r = !0;
      continue;
    } else if (xn(l)) {
      s[l] = u;
      continue;
    } else {
      const c = Gs(u, Sn[l]);
      l.startsWith("origin") ? (a = !0, o[l] = c) : i[l] = c;
    }
  }
  if (e.transform || (r || n ? i.transform = oa(e, t.transform, n) : i.transform && (i.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    i.transformOrigin = `${l} ${u} ${c}`;
  }
}
const wn = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Ks(t, e, n) {
  for (const i in e)
    !B(e[i]) && !Ws(i, n) && (t[i] = e[i]);
}
function aa({ transformTemplate: t }, e) {
  return se(() => {
    const n = wn();
    return Pn(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function la(t, e) {
  const n = t.style || {}, i = {};
  return Ks(i, n, t), Object.assign(i, aa(t, e)), i;
}
function ua(t, e) {
  const n = {}, i = la(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n;
}
const ca = [
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
function An(t) {
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
      !!(ca.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
const ha = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, fa = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function da(t, e, n = 1, i = 0, s = !0) {
  t.pathLength = 1;
  const o = s ? ha : fa;
  t[o.offset] = P.transform(-i);
  const r = P.transform(e), a = P.transform(n);
  t[o.array] = `${r} ${a}`;
}
function Qn(t, e, n) {
  return typeof t == "string" ? t : P.transform(e + n * t);
}
function ma(t, e, n) {
  const i = Qn(e, t.x, t.width), s = Qn(n, t.y, t.height);
  return `${i} ${s}`;
}
function Vn(t, {
  attrX: e,
  attrY: n,
  attrScale: i,
  originX: s,
  originY: o,
  pathLength: r,
  pathSpacing: a = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...u
}, c, h) {
  if (Pn(t, u, h), c) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: f, style: d, dimensions: m } = t;
  f.transform && (m && (d.transform = f.transform), delete f.transform), m && (s !== void 0 || o !== void 0 || d.transform) && (d.transformOrigin = ma(m, s !== void 0 ? s : 0.5, o !== void 0 ? o : 0.5)), e !== void 0 && (f.x = e), n !== void 0 && (f.y = n), i !== void 0 && (f.scale = i), r !== void 0 && da(f, r, a, l, !1);
}
const $s = () => ({
  ...wn(),
  attrs: {}
}), Mn = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function pa(t, e, n, i) {
  const s = se(() => {
    const o = $s();
    return Vn(o, e, Mn(i), t.transformTemplate), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    Ks(o, t.style, t), s.style = { ...o, ...s.style };
  }
  return s;
}
function ga(t = !1) {
  return (n, i, s, { latestValues: o }, r) => {
    const l = (An(n) ? pa : ua)(i, o, r, n), u = Io(i, typeof n == "string", t), c = n !== bs ? { ...u, ...l, ref: s } : {}, { children: h } = i, f = se(() => B(h) ? h.get() : h, [h]);
    return ao(n, {
      ...c,
      children: f
    });
  };
}
function ti(t) {
  const e = [{}, {}];
  return t == null || t.values.forEach((n, i) => {
    e[0][i] = n.get(), e[1][i] = n.getVelocity();
  }), e;
}
function Cn(t, e, n, i) {
  if (typeof e == "function") {
    const [s, o] = ti(i);
    e = e(n !== void 0 ? n : t.custom, s, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [s, o] = ti(i);
    e = e(n !== void 0 ? n : t.custom, s, o);
  }
  return e;
}
const We = (t) => Array.isArray(t), ya = (t) => !!(t && typeof t == "object" && t.mix && t.toValue), va = (t) => We(t) ? t[t.length - 1] || 0 : t;
function Yt(t) {
  const e = B(t) ? t.get() : t;
  return ya(e) ? e.toValue() : e;
}
function Ta({ scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: n }, i, s, o) {
  const r = {
    latestValues: xa(i, s, o, t),
    renderState: e()
  };
  return n && (r.onMount = (a) => n({ props: i, current: a, ...r }), r.onUpdate = (a) => n(a)), r;
}
const qs = (t) => (e, n) => {
  const i = I(re), s = I(an), o = () => Ta(t, e, i, s);
  return n ? o() : fo(o);
};
function xa(t, e, n, i) {
  const s = {}, o = i(t, {});
  for (const f in o)
    s[f] = Yt(o[f]);
  let { initial: r, animate: a } = t;
  const l = ae(t), u = Os(t);
  e && u && !l && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || r === !1;
  const h = c ? a : r;
  if (h && typeof h != "boolean" && !oe(h)) {
    const f = Array.isArray(h) ? h : [h];
    for (let d = 0; d < f.length; d++) {
      const m = Cn(t, f[d]);
      if (m) {
        const { transitionEnd: p, transition: y, ...g } = m;
        for (const T in g) {
          let x = g[T];
          if (Array.isArray(x)) {
            const w = c ? x.length - 1 : 0;
            x = x[w];
          }
          x !== null && (s[T] = x);
        }
        for (const T in p)
          s[T] = p[T];
      }
    }
  }
  return s;
}
function Dn(t, e, n) {
  var i;
  const { style: s } = t, o = {};
  for (const r in s)
    (B(s[r]) || e.style && B(e.style[r]) || Ws(r, t) || ((i = n == null ? void 0 : n.getValue(r)) === null || i === void 0 ? void 0 : i.liveStyle) !== void 0) && (o[r] = s[r]);
  return o;
}
const ba = {
  useVisualState: qs({
    scrapeMotionValuesFromProps: Dn,
    createRenderState: wn
  })
};
function zs(t, e) {
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
function Hs(t, { style: e, vars: n }, i, s) {
  Object.assign(t.style, e, s && s.getProjectionStyles(i));
  for (const o in n)
    t.style.setProperty(o, n[o]);
}
const Xs = /* @__PURE__ */ new Set([
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
function Ys(t, e, n, i) {
  Hs(t, e, void 0, i);
  for (const s in e.attrs)
    t.setAttribute(Xs.has(s) ? s : Tn(s), e.attrs[s]);
}
function Zs(t, e, n) {
  const i = Dn(t, e, n);
  for (const s in t)
    if (B(t[s]) || B(e[s])) {
      const o = bt.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      i[o] = t[s];
    }
  return i;
}
const ei = ["x", "y", "width", "height", "cx", "cy", "r"], Sa = {
  useVisualState: qs({
    scrapeMotionValuesFromProps: Zs,
    createRenderState: $s,
    onUpdate: ({ props: t, prevProps: e, current: n, renderState: i, latestValues: s }) => {
      if (!n)
        return;
      let o = !!t.drag;
      if (!o) {
        for (const a in s)
          if (lt.has(a)) {
            o = !0;
            break;
          }
      }
      if (!o)
        return;
      let r = !e;
      if (e)
        for (let a = 0; a < ei.length; a++) {
          const l = ei[a];
          t[l] !== e[l] && (r = !0);
        }
      r && V.read(() => {
        zs(n, i), V.render(() => {
          Vn(i, s, Mn(n.tagName), t.transformTemplate), Ys(n, i);
        });
      });
    }
  })
};
function Pa(t, e) {
  return function(i, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const r = {
      ...An(i) ? Sa : ba,
      preloadedFeatures: t,
      useRender: ga(s),
      createVisualElement: e,
      Component: i
    };
    return zo(r);
  };
}
function Ft(t, e, n) {
  const i = t.getProps();
  return Cn(i, e, n !== void 0 ? n : i.custom, t);
}
const Js = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...bt
]);
function wa(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Lt(n));
}
function Aa(t, e) {
  const n = Ft(t, e);
  let { transitionEnd: i = {}, transition: s = {}, ...o } = n || {};
  o = { ...o, ...i };
  for (const r in o) {
    const a = va(o[r]);
    wa(t, r, a);
  }
}
function Va(t) {
  return !!(B(t) && t.add);
}
function Ge(t, e) {
  const n = t.getValue("willChange");
  if (Va(n))
    return n.add(e);
}
function Qs(t) {
  return t.props[Is];
}
const tr = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, Ma = 1e-7, Ca = 12;
function Da(t, e, n, i, s) {
  let o, r, a = 0;
  do
    r = e + (n - e) / 2, o = tr(r, i, s) - t, o > 0 ? n = r : e = r;
  while (Math.abs(o) > Ma && ++a < Ca);
  return r;
}
function Ut(t, e, n, i) {
  if (t === e && n === i)
    return _;
  const s = (o) => Da(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : tr(s(o), e, i);
}
const er = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, nr = (t) => (e) => 1 - t(1 - e), ir = /* @__PURE__ */ Ut(0.33, 1.53, 0.69, 0.99), Rn = /* @__PURE__ */ nr(ir), sr = /* @__PURE__ */ er(Rn), rr = (t) => (t *= 2) < 1 ? 0.5 * Rn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), En = (t) => 1 - Math.sin(Math.acos(t)), or = nr(En), ar = er(En), lr = (t) => /^0[^.\s]+$/u.test(t);
function Ra(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || lr(t) : !0;
}
const Ct = (t) => Math.round(t * 1e5) / 1e5, Ln = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Ea(t) {
  return t == null;
}
const La = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, jn = (t, e) => (n) => !!(typeof n == "string" && La.test(n) && n.startsWith(t) || e && !Ea(n) && Object.prototype.hasOwnProperty.call(n, e)), ur = (t, e, n) => (i) => {
  if (typeof i != "string")
    return i;
  const [s, o, r, a] = i.match(Ln);
  return {
    [t]: parseFloat(s),
    [e]: parseFloat(o),
    [n]: parseFloat(r),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, ja = (t) => Y(0, 255, t), pe = {
  ...St,
  transform: (t) => Math.round(ja(t))
}, rt = {
  test: /* @__PURE__ */ jn("rgb", "red"),
  parse: /* @__PURE__ */ ur("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) => "rgba(" + pe.transform(t) + ", " + pe.transform(e) + ", " + pe.transform(n) + ", " + Ct(Bt.transform(i)) + ")"
};
function ka(t) {
  let e = "", n = "", i = "", s = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), s = t.substring(4, 5), e += e, n += n, i += i, s += s), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(i, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const Ke = {
  test: /* @__PURE__ */ jn("#"),
  parse: ka,
  transform: rt.transform
}, ft = {
  test: /* @__PURE__ */ jn("hsl", "hue"),
  parse: /* @__PURE__ */ ur("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + q.transform(Ct(e)) + ", " + q.transform(Ct(n)) + ", " + Ct(Bt.transform(i)) + ")"
}, k = {
  test: (t) => rt.test(t) || Ke.test(t) || ft.test(t),
  parse: (t) => rt.test(t) ? rt.parse(t) : ft.test(t) ? ft.parse(t) : Ke.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? rt.transform(t) : ft.transform(t)
}, Ba = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Fa(t) {
  var e, n;
  return isNaN(t) && typeof t == "string" && (((e = t.match(Ln)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(Ba)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const cr = "number", hr = "color", Oa = "var", Ia = "var(", ni = "${}", _a = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ot(t) {
  const e = t.toString(), n = [], i = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let o = 0;
  const a = e.replace(_a, (l) => (k.test(l) ? (i.color.push(o), s.push(hr), n.push(k.parse(l))) : l.startsWith(Ia) ? (i.var.push(o), s.push(Oa), n.push(l)) : (i.number.push(o), s.push(cr), n.push(parseFloat(l))), ++o, ni)).split(ni);
  return { values: n, split: a, indexes: i, types: s };
}
function fr(t) {
  return Ot(t).values;
}
function dr(t) {
  const { split: e, types: n } = Ot(t), i = e.length;
  return (s) => {
    let o = "";
    for (let r = 0; r < i; r++)
      if (o += e[r], s[r] !== void 0) {
        const a = n[r];
        a === cr ? o += Ct(s[r]) : a === hr ? o += k.transform(s[r]) : o += s[r];
      }
    return o;
  };
}
const Na = (t) => typeof t == "number" ? 0 : t;
function Ua(t) {
  const e = fr(t);
  return dr(t)(e.map(Na));
}
const et = {
  test: Fa,
  parse: fr,
  createTransformer: dr,
  getAnimatableNone: Ua
}, Wa = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Ga(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [i] = n.match(Ln) || [];
  if (!i)
    return t;
  const s = n.replace(i, "");
  let o = Wa.has(e) ? 1 : 0;
  return i !== n && (o *= 100), e + "(" + o + s + ")";
}
const Ka = /\b([a-z-]*)\(.*?\)/gu, $e = {
  ...et,
  getAnimatableNone: (t) => {
    const e = t.match(Ka);
    return e ? e.map(Ga).join(" ") : t;
  }
}, $a = {
  ...Sn,
  // Color props
  color: k,
  backgroundColor: k,
  outlineColor: k,
  fill: k,
  stroke: k,
  // Border props
  borderColor: k,
  borderTopColor: k,
  borderRightColor: k,
  borderBottomColor: k,
  borderLeftColor: k,
  filter: $e,
  WebkitFilter: $e
}, mr = (t) => $a[t];
function pr(t, e) {
  let n = mr(t);
  return n !== $e && (n = et), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const qa = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function za(t, e, n) {
  let i = 0, s;
  for (; i < t.length && !s; ) {
    const o = t[i];
    typeof o == "string" && !qa.has(o) && Ot(o).values.length && (s = t[i]), i++;
  }
  if (s && n)
    for (const o of e)
      t[o] = pr(n, s);
}
const ot = (t) => t * 180 / Math.PI, qe = (t) => {
  const e = ot(Math.atan2(t[1], t[0]));
  return ze(e);
}, Ha = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: qe,
  rotateZ: qe,
  skewX: (t) => ot(Math.atan(t[1])),
  skewY: (t) => ot(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, ze = (t) => (t = t % 360, t < 0 && (t += 360), t), ii = qe, si = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), ri = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), Xa = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: si,
  scaleY: ri,
  scale: (t) => (si(t) + ri(t)) / 2,
  rotateX: (t) => ze(ot(Math.atan2(t[6], t[5]))),
  rotateY: (t) => ze(ot(Math.atan2(-t[2], t[0]))),
  rotateZ: ii,
  rotate: ii,
  skewX: (t) => ot(Math.atan(t[4])),
  skewY: (t) => ot(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function oi(t) {
  return t.includes("scale") ? 1 : 0;
}
function He(t, e) {
  if (!t || t === "none")
    return oi(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let i, s;
  if (n)
    i = Xa, s = n;
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    i = Ha, s = a;
  }
  if (!s)
    return oi(e);
  const o = i[e], r = s[1].split(",").map(Za);
  return typeof o == "function" ? o(r) : r[o];
}
const Ya = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return He(n, e);
};
function Za(t) {
  return parseFloat(t.trim());
}
const ai = (t) => t === St || t === P, Ja = /* @__PURE__ */ new Set(["x", "y", "z"]), Qa = bt.filter((t) => !Ja.has(t));
function tl(t) {
  const e = [];
  return Qa.forEach((n) => {
    const i = t.getValue(n);
    i !== void 0 && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const Tt = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: (t, { transform: e }) => He(e, "x"),
  y: (t, { transform: e }) => He(e, "y")
};
Tt.translateX = Tt.x;
Tt.translateY = Tt.y;
const at = /* @__PURE__ */ new Set();
let Xe = !1, Ye = !1;
function gr() {
  if (Ye) {
    const t = Array.from(at).filter((i) => i.needsMeasurement), e = new Set(t.map((i) => i.element)), n = /* @__PURE__ */ new Map();
    e.forEach((i) => {
      const s = tl(i);
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
  Ye = !1, Xe = !1, at.forEach((t) => t.complete()), at.clear();
}
function yr() {
  at.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (Ye = !0);
  });
}
function el() {
  yr(), gr();
}
class kn {
  constructor(e, n, i, s, o, r = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = i, this.motionValue = s, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (at.add(this), Xe || (Xe = !0, V.read(yr), V.resolveKeyframes(gr))) : (this.readKeyframes(), this.complete());
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), at.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, at.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const vr = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t), nl = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function il(t) {
  const e = nl.exec(t);
  if (!e)
    return [,];
  const [, n, i, s] = e;
  return [`--${n ?? i}`, s];
}
function Tr(t, e, n = 1) {
  const [i, s] = il(t);
  if (!i)
    return;
  const o = window.getComputedStyle(e).getPropertyValue(i);
  if (o) {
    const r = o.trim();
    return vr(r) ? parseFloat(r) : r;
  }
  return bn(s) ? Tr(s, e, n + 1) : s;
}
const xr = (t) => (e) => e.test(t), sl = {
  test: (t) => t === "auto",
  parse: (t) => t
}, br = [St, P, q, J, ea, ta, sl], li = (t) => br.find(xr(t));
class Sr extends kn {
  constructor(e, n, i, s, o) {
    super(e, n, i, s, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: i } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let u = e[l];
      if (typeof u == "string" && (u = u.trim(), bn(u))) {
        const c = Tr(u, n.current);
        c !== void 0 && (e[l] = c), l === e.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !Js.has(i) || e.length !== 2)
      return;
    const [s, o] = e, r = li(s), a = li(o);
    if (r !== a)
      if (ai(r) && ai(a))
        for (let l = 0; l < e.length; l++) {
          const u = e[l];
          typeof u == "string" && (e[l] = parseFloat(u));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, i = [];
    for (let s = 0; s < e.length; s++)
      Ra(e[s]) && i.push(s);
    i.length && za(e, i, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: i } = this;
    if (!e || !e.current)
      return;
    i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Tt[i](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
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
    s[r] = Tt[i](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([l, u]) => {
      n.getValue(l).set(u);
    }), this.resolveNoneKeyframes();
  }
}
const ui = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(et.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function rl(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function ol(t, e, n, i) {
  const s = t[0];
  if (s === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const o = t[t.length - 1], r = ui(s, e), a = ui(o, e);
  return !r || !a ? !1 : rl(t) || (n === "spring" || dn(n)) && i;
}
const al = (t) => t !== null;
function le(t, { repeat: e, repeatType: n = "loop" }, i) {
  const s = t.filter(al), o = e && n !== "loop" && e % 2 === 1 ? 0 : s.length - 1;
  return !o || i === void 0 ? s[o] : i;
}
const ll = 40;
class Pr {
  constructor({ autoplay: e = !0, delay: n = 0, type: i = "keyframes", repeat: s = 0, repeatDelay: o = 0, repeatType: r = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = $.now(), this.options = {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > ll ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && el(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(e, n) {
    this.resolvedAt = $.now(), this.hasAttemptedResolve = !0;
    const { name: i, type: s, velocity: o, delay: r, onComplete: a, onUpdate: l, isGenerator: u } = this.options;
    if (!u && !ol(e, i, s, o))
      if (r)
        this.options.duration = 0;
      else {
        l && l(le(e, this.options, n)), a && a(), this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(e, n);
    c !== !1 && (this._resolved = {
      keyframes: e,
      finalKeyframe: n,
      ...c
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
const M = (t, e, n) => t + (e - t) * n;
function ge(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function ul({ hue: t, saturation: e, lightness: n, alpha: i }) {
  t /= 360, e /= 100, n /= 100;
  let s = 0, o = 0, r = 0;
  if (!e)
    s = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    s = ge(l, a, t + 1 / 3), o = ge(l, a, t), r = ge(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: i
  };
}
function te(t, e) {
  return (n) => n > 0 ? e : t;
}
const ye = (t, e, n) => {
  const i = t * t, s = n * (e * e - i) + i;
  return s < 0 ? 0 : Math.sqrt(s);
}, cl = [Ke, rt, ft], hl = (t) => cl.find((e) => e.test(t));
function ci(t) {
  const e = hl(t);
  if (!e)
    return !1;
  let n = e.parse(t);
  return e === ft && (n = ul(n)), n;
}
const hi = (t, e) => {
  const n = ci(t), i = ci(e);
  if (!n || !i)
    return te(t, e);
  const s = { ...n };
  return (o) => (s.red = ye(n.red, i.red, o), s.green = ye(n.green, i.green, o), s.blue = ye(n.blue, i.blue, o), s.alpha = M(n.alpha, i.alpha, o), rt.transform(s));
}, fl = (t, e) => (n) => e(t(n)), Wt = (...t) => t.reduce(fl), Ze = /* @__PURE__ */ new Set(["none", "hidden"]);
function dl(t, e) {
  return Ze.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function ml(t, e) {
  return (n) => M(t, e, n);
}
function Bn(t) {
  return typeof t == "number" ? ml : typeof t == "string" ? bn(t) ? te : k.test(t) ? hi : yl : Array.isArray(t) ? wr : typeof t == "object" ? k.test(t) ? hi : pl : te;
}
function wr(t, e) {
  const n = [...t], i = n.length, s = t.map((o, r) => Bn(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < i; r++)
      n[r] = s[r](o);
    return n;
  };
}
function pl(t, e) {
  const n = { ...t, ...e }, i = {};
  for (const s in n)
    t[s] !== void 0 && e[s] !== void 0 && (i[s] = Bn(t[s])(t[s], e[s]));
  return (s) => {
    for (const o in i)
      n[o] = i[o](s);
    return n;
  };
}
function gl(t, e) {
  var n;
  const i = [], s = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < e.values.length; o++) {
    const r = e.types[o], a = t.indexes[r][s[r]], l = (n = t.values[a]) !== null && n !== void 0 ? n : 0;
    i[o] = l, s[r]++;
  }
  return i;
}
const yl = (t, e) => {
  const n = et.createTransformer(e), i = Ot(t), s = Ot(e);
  return i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length ? Ze.has(t) && !s.values.length || Ze.has(e) && !i.values.length ? dl(t, e) : Wt(wr(gl(i, s), s.values), n) : te(t, e);
};
function Ar(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? M(t, e, n) : Bn(t)(t, e);
}
const vl = 5;
function Vr(t, e, n) {
  const i = Math.max(e - vl, 0);
  return Vs(n - t(i), e - i);
}
const C = {
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
}, fi = 1e-3;
function Tl({ duration: t = C.duration, bounce: e = C.bounce, velocity: n = C.velocity, mass: i = C.mass }) {
  let s, o, r = 1 - e;
  r = Y(C.minDamping, C.maxDamping, r), t = Y(C.minDuration, C.maxDuration, /* @__PURE__ */ X(t)), r < 1 ? (s = (u) => {
    const c = u * r, h = c * t, f = c - n, d = Je(u, r), m = Math.exp(-h);
    return fi - f / d * m;
  }, o = (u) => {
    const h = u * r * t, f = h * n + n, d = Math.pow(r, 2) * Math.pow(u, 2) * t, m = Math.exp(-h), p = Je(Math.pow(u, 2), r);
    return (-s(u) + fi > 0 ? -1 : 1) * ((f - d) * m) / p;
  }) : (s = (u) => {
    const c = Math.exp(-u * t), h = (u - n) * t + 1;
    return -1e-3 + c * h;
  }, o = (u) => {
    const c = Math.exp(-u * t), h = (n - u) * (t * t);
    return c * h;
  });
  const a = 5 / t, l = bl(s, o, a);
  if (t = /* @__PURE__ */ H(t), isNaN(l))
    return {
      stiffness: C.stiffness,
      damping: C.damping,
      duration: t
    };
  {
    const u = Math.pow(l, 2) * i;
    return {
      stiffness: u,
      damping: r * 2 * Math.sqrt(i * u),
      duration: t
    };
  }
}
const xl = 12;
function bl(t, e, n) {
  let i = n;
  for (let s = 1; s < xl; s++)
    i = i - t(i) / e(i);
  return i;
}
function Je(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Sl = ["duration", "bounce"], Pl = ["stiffness", "damping", "mass"];
function di(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function wl(t) {
  let e = {
    velocity: C.velocity,
    stiffness: C.stiffness,
    damping: C.damping,
    mass: C.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!di(t, Pl) && di(t, Sl))
    if (t.visualDuration) {
      const n = t.visualDuration, i = 2 * Math.PI / (n * 1.2), s = i * i, o = 2 * Y(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
      e = {
        ...e,
        mass: C.mass,
        stiffness: s,
        damping: o
      };
    } else {
      const n = Tl(t);
      e = {
        ...e,
        ...n,
        mass: C.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function Mr(t = C.visualDuration, e = C.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: i, restDelta: s } = n;
  const o = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: l, damping: u, mass: c, duration: h, velocity: f, isResolvedFromDuration: d } = wl({
    ...n,
    velocity: -/* @__PURE__ */ X(n.velocity || 0)
  }), m = f || 0, p = u / (2 * Math.sqrt(l * c)), y = r - o, g = /* @__PURE__ */ X(Math.sqrt(l / c)), T = Math.abs(y) < 5;
  i || (i = T ? C.restSpeed.granular : C.restSpeed.default), s || (s = T ? C.restDelta.granular : C.restDelta.default);
  let x;
  if (p < 1) {
    const v = Je(g, p);
    x = (S) => {
      const A = Math.exp(-p * g * S);
      return r - A * ((m + p * g * y) / v * Math.sin(v * S) + y * Math.cos(v * S));
    };
  } else if (p === 1)
    x = (v) => r - Math.exp(-g * v) * (y + (m + g * y) * v);
  else {
    const v = g * Math.sqrt(p * p - 1);
    x = (S) => {
      const A = Math.exp(-p * g * S), b = Math.min(v * S, 300);
      return r - A * ((m + p * g * y) * Math.sinh(b) + v * y * Math.cosh(b)) / v;
    };
  }
  const w = {
    calculatedDuration: d && h || null,
    next: (v) => {
      const S = x(v);
      if (d)
        a.done = v >= h;
      else {
        let A = 0;
        p < 1 && (A = v === 0 ? /* @__PURE__ */ H(m) : Vr(x, v, S));
        const b = Math.abs(A) <= i, D = Math.abs(r - S) <= s;
        a.done = b && D;
      }
      return a.value = a.done ? r : S, a;
    },
    toString: () => {
      const v = Math.min(Ms(w), Ne), S = Cs((A) => w.next(v * A).value, v, 30);
      return v + "ms " + S;
    }
  };
  return w;
}
function mi({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: i = 325, bounceDamping: s = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const h = t[0], f = {
    done: !1,
    value: h
  }, d = (b) => a !== void 0 && b < a || l !== void 0 && b > l, m = (b) => a === void 0 ? l : l === void 0 || Math.abs(a - b) < Math.abs(l - b) ? a : l;
  let p = n * e;
  const y = h + p, g = r === void 0 ? y : r(y);
  g !== y && (p = g - h);
  const T = (b) => -p * Math.exp(-b / i), x = (b) => g + T(b), w = (b) => {
    const D = T(b), L = x(b);
    f.done = Math.abs(D) <= u, f.value = f.done ? g : L;
  };
  let v, S;
  const A = (b) => {
    d(f.value) && (v = b, S = Mr({
      keyframes: [f.value, m(f.value)],
      velocity: Vr(x, b, f.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: o,
      restDelta: u,
      restSpeed: c
    }));
  };
  return A(0), {
    calculatedDuration: null,
    next: (b) => {
      let D = !1;
      return !S && v === void 0 && (D = !0, w(b), A(b)), v !== void 0 && b >= v ? S.next(b - v) : (!D && w(b), f);
    }
  };
}
const Al = /* @__PURE__ */ Ut(0.42, 0, 1, 1), Vl = /* @__PURE__ */ Ut(0, 0, 0.58, 1), Cr = /* @__PURE__ */ Ut(0.42, 0, 0.58, 1), Ml = (t) => Array.isArray(t) && typeof t[0] != "number", Cl = {
  linear: _,
  easeIn: Al,
  easeInOut: Cr,
  easeOut: Vl,
  circIn: En,
  circInOut: ar,
  circOut: or,
  backIn: Rn,
  backInOut: sr,
  backOut: ir,
  anticipate: rr
}, pi = (t) => {
  if (mn(t)) {
    As(t.length === 4);
    const [e, n, i, s] = t;
    return Ut(e, n, i, s);
  } else if (typeof t == "string")
    return Cl[t];
  return t;
};
function Dl(t, e, n) {
  const i = [], s = n || Ar, o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = s(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || _ : e;
      a = Wt(l, a);
    }
    i.push(a);
  }
  return i;
}
function Rl(t, e, { clamp: n = !0, ease: i, mixer: s } = {}) {
  const o = t.length;
  if (As(o === e.length), o === 1)
    return () => e[0];
  if (o === 2 && e[0] === e[1])
    return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = Dl(e, i, s), l = a.length, u = (c) => {
    if (r && c < t[0])
      return e[0];
    let h = 0;
    if (l > 1)
      for (; h < t.length - 2 && !(c < t[h + 1]); h++)
        ;
    const f = /* @__PURE__ */ yt(t[h], t[h + 1], c);
    return a[h](f);
  };
  return n ? (c) => u(Y(t[0], t[o - 1], c)) : u;
}
function El(t, e) {
  const n = t[t.length - 1];
  for (let i = 1; i <= e; i++) {
    const s = /* @__PURE__ */ yt(0, e, i);
    t.push(M(n, 1, s));
  }
}
function Ll(t) {
  const e = [0];
  return El(e, t.length - 1), e;
}
function jl(t, e) {
  return t.map((n) => n * e);
}
function kl(t, e) {
  return t.map(() => e || Cr).splice(0, t.length - 1);
}
function ee({ duration: t = 300, keyframes: e, times: n, ease: i = "easeInOut" }) {
  const s = Ml(i) ? i.map(pi) : pi(i), o = {
    done: !1,
    value: e[0]
  }, r = jl(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : Ll(e),
    t
  ), a = Rl(r, e, {
    ease: Array.isArray(s) ? s : kl(e, s)
  });
  return {
    calculatedDuration: t,
    next: (l) => (o.value = a(l), o.done = l >= t, o)
  };
}
const Bl = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: () => V.update(e, !0),
    stop: () => tt(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => j.isProcessing ? j.timestamp : $.now()
  };
}, Fl = {
  decay: mi,
  inertia: mi,
  tween: ee,
  keyframes: ee,
  spring: Mr
}, Ol = (t) => t / 100;
class Fn extends Pr {
  constructor(e) {
    super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: i, element: s, keyframes: o } = this.options, r = (s == null ? void 0 : s.KeyframeResolver) || kn, a = (l, u) => this.onKeyframesResolved(l, u);
    this.resolver = new r(o, a, n, i, s), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(e) {
    const { type: n = "keyframes", repeat: i = 0, repeatDelay: s = 0, repeatType: o, velocity: r = 0 } = this.options, a = dn(n) ? n : Fl[n] || ee;
    let l, u;
    a !== ee && typeof e[0] != "number" && (l = Wt(Ol, Ar(e[0], e[1])), e = [0, 100]);
    const c = a({ ...this.options, keyframes: e });
    o === "mirror" && (u = a({
      ...this.options,
      keyframes: [...e].reverse(),
      velocity: -r
    })), c.calculatedDuration === null && (c.calculatedDuration = Ms(c));
    const { calculatedDuration: h } = c, f = h + s, d = f * (i + 1) - s;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: h,
      resolvedDuration: f,
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
      const { keyframes: b } = this.options;
      return { done: !0, value: b[b.length - 1] };
    }
    const { finalKeyframe: s, generator: o, mirroredGenerator: r, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: u, totalDuration: c, resolvedDuration: h } = i;
    if (this.startTime === null)
      return o.next(0);
    const { delay: f, repeat: d, repeatType: m, repeatDelay: p, onUpdate: y } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - c / this.speed, this.startTime)), n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
    const g = this.currentTime - f * (this.speed >= 0 ? 1 : -1), T = this.speed >= 0 ? g < 0 : g > c;
    this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let x = this.currentTime, w = o;
    if (d) {
      const b = Math.min(this.currentTime, c) / h;
      let D = Math.floor(b), L = b % 1;
      !L && b >= 1 && (L = 1), L === 1 && D--, D = Math.min(D, d + 1), !!(D % 2) && (m === "reverse" ? (L = 1 - L, p && (L -= p / h)) : m === "mirror" && (w = r)), x = Y(0, 1, L) * h;
    }
    const v = T ? { done: !1, value: l[0] } : w.next(x);
    a && (v.value = a(v.value));
    let { done: S } = v;
    !T && u !== null && (S = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const A = this.holdTime === null && (this.state === "finished" || this.state === "running" && S);
    return A && s !== void 0 && (v.value = le(l, this.options, s)), y && y(v.value), A && this.finish(), v;
  }
  get duration() {
    const { resolved: e } = this;
    return e ? /* @__PURE__ */ X(e.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ X(this.currentTime);
  }
  set time(e) {
    e = /* @__PURE__ */ H(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = /* @__PURE__ */ X(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: e = Bl, onPlay: n, startTime: i } = this.options;
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
const Il = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function _l(t, e, n, { delay: i = 0, duration: s = 300, repeat: o = 0, repeatType: r = "loop", ease: a = "easeInOut", times: l } = {}) {
  const u = { [e]: n };
  l && (u.offset = l);
  const c = Rs(a, s);
  return Array.isArray(c) && (u.easing = c), t.animate(u, {
    delay: i,
    duration: s,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal"
  });
}
const Nl = /* @__PURE__ */ cn(() => Object.hasOwnProperty.call(Element.prototype, "animate")), ne = 10, Ul = 2e4;
function Wl(t) {
  return dn(t.type) || t.type === "spring" || !Ds(t.ease);
}
function Gl(t, e) {
  const n = new Fn({
    ...e,
    keyframes: t,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let i = { done: !1, value: t[0] };
  const s = [];
  let o = 0;
  for (; !i.done && o < Ul; )
    i = n.sample(o), s.push(i.value), o += ne;
  return {
    times: void 0,
    keyframes: s,
    duration: o - ne,
    ease: "linear"
  };
}
const Dr = {
  anticipate: rr,
  backInOut: sr,
  circInOut: ar
};
function Kl(t) {
  return t in Dr;
}
class gi extends Pr {
  constructor(e) {
    super(e);
    const { name: n, motionValue: i, element: s, keyframes: o } = this.options;
    this.resolver = new Sr(o, (r, a) => this.onKeyframesResolved(r, a), n, i, s), this.resolver.scheduleResolve();
  }
  initPlayback(e, n) {
    let { duration: i = 300, times: s, ease: o, type: r, motionValue: a, name: l, startTime: u } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof o == "string" && Jt() && Kl(o) && (o = Dr[o]), Wl(this.options)) {
      const { onComplete: h, onUpdate: f, motionValue: d, element: m, ...p } = this.options, y = Gl(e, p);
      e = y.keyframes, e.length === 1 && (e[1] = e[0]), i = y.duration, s = y.times, o = y.ease, r = "keyframes";
    }
    const c = _l(a.owner.current, l, e, { ...this.options, duration: i, times: s, ease: o });
    return c.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (Wn(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
      const { onComplete: h } = this.options;
      a.set(le(e, this.options, n)), h && h(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: c,
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
    return /* @__PURE__ */ X(n);
  }
  get time() {
    const { resolved: e } = this;
    if (!e)
      return 0;
    const { animation: n } = e;
    return /* @__PURE__ */ X(n.currentTime || 0);
  }
  set time(e) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: i } = n;
    i.currentTime = /* @__PURE__ */ H(e);
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
        return _;
      const { animation: i } = n;
      Wn(i, e);
    }
    return _;
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
      const { motionValue: u, onUpdate: c, onComplete: h, element: f, ...d } = this.options, m = new Fn({
        ...d,
        keyframes: i,
        duration: s,
        type: o,
        ease: r,
        times: a,
        isGenerator: !0
      }), p = /* @__PURE__ */ H(this.time);
      u.setWithVelocity(m.sample(p - ne).value, m.sample(p).value, ne);
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
    const { onUpdate: l, transformTemplate: u } = n.owner.getProps();
    return Nl() && i && Il.has(i) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !u && !s && o !== "mirror" && r !== 0 && a !== "inertia";
  }
}
const $l = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, ql = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), zl = {
  type: "keyframes",
  duration: 0.8
}, Hl = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Xl = (t, { keyframes: e }) => e.length > 2 ? zl : lt.has(t) ? t.startsWith("scale") ? ql(e[1]) : $l : Hl;
function Yl({ when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: s, repeat: o, repeatType: r, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const On = (t, e, n, i = {}, s, o) => (r) => {
  const a = fn(i, t) || {}, l = a.delay || i.delay || 0;
  let { elapsed: u = 0 } = i;
  u = u - /* @__PURE__ */ H(l);
  let c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...a,
    delay: -u,
    onUpdate: (f) => {
      e.set(f), a.onUpdate && a.onUpdate(f);
    },
    onComplete: () => {
      r(), a.onComplete && a.onComplete();
    },
    name: t,
    motionValue: e,
    element: o ? void 0 : s
  };
  Yl(a) || (c = {
    ...c,
    ...Xl(t, c)
  }), c.duration && (c.duration = /* @__PURE__ */ H(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ H(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let h = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (h = !0)), c.allowFlatten = !a.type && !a.ease, h && !o && e.get() !== void 0) {
    const f = le(c.keyframes, a);
    if (f !== void 0)
      return V.update(() => {
        c.onUpdate(f), c.onComplete();
      }), new To([]);
  }
  return !o && gi.supports(c) ? new gi(c) : new Fn(c);
};
function Zl({ protectedKeys: t, needsAnimating: e }, n) {
  const i = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, i;
}
function Rr(t, e, { delay: n = 0, transitionOverride: i, type: s } = {}) {
  var o;
  let { transition: r = t.getDefaultTransition(), transitionEnd: a, ...l } = e;
  i && (r = i);
  const u = [], c = s && t.animationState && t.animationState.getState()[s];
  for (const h in l) {
    const f = t.getValue(h, (o = t.latestValues[h]) !== null && o !== void 0 ? o : null), d = l[h];
    if (d === void 0 || c && Zl(c, h))
      continue;
    const m = {
      delay: n,
      ...fn(r || {}, h)
    };
    let p = !1;
    if (window.MotionHandoffAnimation) {
      const g = Qs(t);
      if (g) {
        const T = window.MotionHandoffAnimation(g, h, V);
        T !== null && (m.startTime = T, p = !0);
      }
    }
    Ge(t, h), f.start(On(h, f, d, t.shouldReduceMotion && Js.has(h) ? { type: !1 } : m, t, p));
    const y = f.animation;
    y && u.push(y);
  }
  return a && Promise.all(u).then(() => {
    V.update(() => {
      a && Aa(t, a);
    });
  }), u;
}
function Qe(t, e, n = {}) {
  var i;
  const s = Ft(t, e, n.type === "exit" ? (i = t.presenceContext) === null || i === void 0 ? void 0 : i.custom : void 0);
  let { transition: o = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (o = n.transitionOverride);
  const r = s ? () => Promise.all(Rr(t, s, n)) : () => Promise.resolve(), a = t.variantChildren && t.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: h, staggerDirection: f } = o;
    return Jl(t, e, c + u, h, f, n);
  } : () => Promise.resolve(), { when: l } = o;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [r, a] : [a, r];
    return u().then(() => c());
  } else
    return Promise.all([r(), a(n.delay)]);
}
function Jl(t, e, n = 0, i = 0, s = 1, o) {
  const r = [], a = (t.variantChildren.size - 1) * i, l = s === 1 ? (u = 0) => u * i : (u = 0) => a - u * i;
  return Array.from(t.variantChildren).sort(Ql).forEach((u, c) => {
    u.notify("AnimationStart", e), r.push(Qe(u, e, {
      ...o,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", e)));
  }), Promise.all(r);
}
function Ql(t, e) {
  return t.sortNodePosition(e);
}
function tu(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let i;
  if (Array.isArray(e)) {
    const s = e.map((o) => Qe(t, o, n));
    i = Promise.all(s);
  } else if (typeof e == "string")
    i = Qe(t, e, n);
  else {
    const s = typeof e == "function" ? Ft(t, e, n.custom) : e;
    i = Promise.all(Rr(t, s, n));
  }
  return i.then(() => {
    t.notify("AnimationComplete", e);
  });
}
function Er(t, e) {
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
const eu = vn.length;
function Lr(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? Lr(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < eu; n++) {
    const i = vn[n], s = t.props[i];
    (jt(s) || s === !1) && (e[i] = s);
  }
  return e;
}
const nu = [...yn].reverse(), iu = yn.length;
function su(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: i }) => tu(t, n, i)));
}
function ru(t) {
  let e = su(t), n = yi(), i = !0;
  const s = (l) => (u, c) => {
    var h;
    const f = Ft(t, c, l === "exit" ? (h = t.presenceContext) === null || h === void 0 ? void 0 : h.custom : void 0);
    if (f) {
      const { transition: d, transitionEnd: m, ...p } = f;
      u = { ...u, ...p, ...m };
    }
    return u;
  };
  function o(l) {
    e = l(t);
  }
  function r(l) {
    const { props: u } = t, c = Lr(t.parent) || {}, h = [], f = /* @__PURE__ */ new Set();
    let d = {}, m = 1 / 0;
    for (let y = 0; y < iu; y++) {
      const g = nu[y], T = n[g], x = u[g] !== void 0 ? u[g] : c[g], w = jt(x), v = g === l ? T.isActive : null;
      v === !1 && (m = y);
      let S = x === c[g] && x !== u[g] && w;
      if (S && i && t.manuallyAnimateOnMount && (S = !1), T.protectedKeys = { ...d }, // If it isn't active and hasn't *just* been set as inactive
      !T.isActive && v === null || // If we didn't and don't have any defined prop for this animation type
      !x && !T.prevProp || // Or if the prop doesn't define an animation
      oe(x) || typeof x == "boolean")
        continue;
      const A = ou(T.prevProp, x);
      let b = A || // If we're making this variant active, we want to always make it active
      g === l && T.isActive && !S && w || // If we removed a higher-priority variant (i is in reverse order)
      y > m && w, D = !1;
      const L = Array.isArray(x) ? x : [x];
      let Z = L.reduce(s(g), {});
      v === !1 && (Z = {});
      const { prevResolvedValues: ut = {} } = T, R = {
        ...ut,
        ...Z
      }, W = (F) => {
        b = !0, f.has(F) && (D = !0, f.delete(F)), T.needsAnimating[F] = !0;
        const z = t.getValue(F);
        z && (z.liveStyle = !1);
      };
      for (const F in R) {
        const z = Z[F], ce = ut[F];
        if (d.hasOwnProperty(F))
          continue;
        let he = !1;
        We(z) && We(ce) ? he = !Er(z, ce) : he = z !== ce, he ? z != null ? W(F) : f.add(F) : z !== void 0 && f.has(F) ? W(F) : T.protectedKeys[F] = !0;
      }
      T.prevProp = x, T.prevResolvedValues = Z, T.isActive && (d = { ...d, ...Z }), i && t.blockInitialAnimation && (b = !1), b && (!(S && A) || D) && h.push(...L.map((F) => ({
        animation: F,
        options: { type: g }
      })));
    }
    if (f.size) {
      const y = {};
      if (typeof u.initial != "boolean") {
        const g = Ft(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        g && g.transition && (y.transition = g.transition);
      }
      f.forEach((g) => {
        const T = t.getBaseTarget(g), x = t.getValue(g);
        x && (x.liveStyle = !0), y[g] = T ?? null;
      }), h.push({ animation: y });
    }
    let p = !!h.length;
    return i && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (p = !1), i = !1, p ? e(h) : Promise.resolve();
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u)
      return Promise.resolve();
    (c = t.variantChildren) === null || c === void 0 || c.forEach((f) => {
      var d;
      return (d = f.animationState) === null || d === void 0 ? void 0 : d.setActive(l, u);
    }), n[l].isActive = u;
    const h = r(l);
    for (const f in n)
      n[f].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: r,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = yi(), i = !0;
    }
  };
}
function ou(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Er(e, t) : !1;
}
function it(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function yi() {
  return {
    animate: it(!0),
    whileInView: it(),
    whileHover: it(),
    whileTap: it(),
    whileDrag: it(),
    whileFocus: it(),
    exit: it()
  };
}
class nt {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
class au extends nt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = ru(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    oe(e) && (this.unmountControls = e.subscribe(this.node));
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
let lu = 0;
class uu extends nt {
  constructor() {
    super(...arguments), this.id = lu++;
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
    Feature: au
  },
  exit: {
    Feature: uu
  }
};
function It(t, e, n, i = { passive: !0 }) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
}
function Gt(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const hu = (t) => (e) => gn(e) && t(e, Gt(e));
function Dt(t, e, n, i) {
  return It(t, e, hu(n), i);
}
function jr({ top: t, left: e, right: n, bottom: i }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: i }
  };
}
function fu({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function du(t, e) {
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
const kr = 1e-4, mu = 1 - kr, pu = 1 + kr, Br = 0.01, gu = 0 - Br, yu = 0 + Br;
function O(t) {
  return t.max - t.min;
}
function vu(t, e, n) {
  return Math.abs(t - e) <= n;
}
function vi(t, e, n, i = 0.5) {
  t.origin = i, t.originPoint = M(e.min, e.max, t.origin), t.scale = O(n) / O(e), t.translate = M(n.min, n.max, t.origin) - t.originPoint, (t.scale >= mu && t.scale <= pu || isNaN(t.scale)) && (t.scale = 1), (t.translate >= gu && t.translate <= yu || isNaN(t.translate)) && (t.translate = 0);
}
function Rt(t, e, n, i) {
  vi(t.x, e.x, n.x, i ? i.originX : void 0), vi(t.y, e.y, n.y, i ? i.originY : void 0);
}
function Ti(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + O(e);
}
function Tu(t, e, n) {
  Ti(t.x, e.x, n.x), Ti(t.y, e.y, n.y);
}
function xi(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + O(e);
}
function Et(t, e, n) {
  xi(t.x, e.x, n.x), xi(t.y, e.y, n.y);
}
const bi = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), dt = () => ({
  x: bi(),
  y: bi()
}), Si = () => ({ min: 0, max: 0 }), E = () => ({
  x: Si(),
  y: Si()
});
function U(t) {
  return [t("x"), t("y")];
}
function ve(t) {
  return t === void 0 || t === 1;
}
function tn({ scale: t, scaleX: e, scaleY: n }) {
  return !ve(t) || !ve(e) || !ve(n);
}
function st(t) {
  return tn(t) || Fr(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function Fr(t) {
  return Pi(t.x) || Pi(t.y);
}
function Pi(t) {
  return t && t !== "0%";
}
function ie(t, e, n) {
  const i = t - n, s = e * i;
  return n + s;
}
function wi(t, e, n, i, s) {
  return s !== void 0 && (t = ie(t, s, i)), ie(t, n, i) + e;
}
function en(t, e = 0, n = 1, i, s) {
  t.min = wi(t.min, e, n, i, s), t.max = wi(t.max, e, n, i, s);
}
function Or(t, { x: e, y: n }) {
  en(t.x, e.translate, e.scale, e.originPoint), en(t.y, n.translate, n.scale, n.originPoint);
}
const Ai = 0.999999999999, Vi = 1.0000000000001;
function xu(t, e, n, i = !1) {
  const s = n.length;
  if (!s)
    return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < s; a++) {
    o = n[a], r = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (i && o.options.layoutScroll && o.scroll && o !== o.root && pt(t, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), r && (e.x *= r.x.scale, e.y *= r.y.scale, Or(t, r)), i && st(o.latestValues) && pt(t, o.latestValues));
  }
  e.x < Vi && e.x > Ai && (e.x = 1), e.y < Vi && e.y > Ai && (e.y = 1);
}
function mt(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function Mi(t, e, n, i, s = 0.5) {
  const o = M(t.min, t.max, s);
  en(t, e, n, o, i);
}
function pt(t, e) {
  Mi(t.x, e.x, e.scaleX, e.scale, e.originX), Mi(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function Ir(t, e) {
  return jr(du(t.getBoundingClientRect(), e));
}
function bu(t, e, n) {
  const i = Ir(t, n), { scroll: s } = e;
  return s && (mt(i.x, s.offset.x), mt(i.y, s.offset.y)), i;
}
const _r = ({ current: t }) => t ? t.ownerDocument.defaultView : null, Ci = (t, e) => Math.abs(t - e);
function Su(t, e) {
  const n = Ci(t.x, e.x), i = Ci(t.y, e.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
class Nr {
  constructor(e, n, { transformPagePoint: i, contextWindow: s, dragSnapToOrigin: o = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const h = xe(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, d = Su(h.offset, { x: 0, y: 0 }) >= 3;
      if (!f && !d)
        return;
      const { point: m } = h, { timestamp: p } = j;
      this.history.push({ ...m, timestamp: p });
      const { onStart: y, onMove: g } = this.handlers;
      f || (y && y(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, h);
    }, this.handlePointerMove = (h, f) => {
      this.lastMoveEvent = h, this.lastMoveEventInfo = Te(f, this.transformPagePoint), V.update(this.updatePoint, !0);
    }, this.handlePointerUp = (h, f) => {
      this.end();
      const { onEnd: d, onSessionEnd: m, resumeAnimation: p } = this.handlers;
      if (this.dragSnapToOrigin && p && p(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const y = xe(h.type === "pointercancel" ? this.lastMoveEventInfo : Te(f, this.transformPagePoint), this.history);
      this.startEvent && d && d(h, y), m && m(h, y);
    }, !gn(e))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = i, this.contextWindow = s || window;
    const r = Gt(e), a = Te(r, this.transformPagePoint), { point: l } = a, { timestamp: u } = j;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(e, xe(a, this.history)), this.removeListeners = Wt(Dt(this.contextWindow, "pointermove", this.handlePointerMove), Dt(this.contextWindow, "pointerup", this.handlePointerUp), Dt(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), tt(this.updatePoint);
  }
}
function Te(t, e) {
  return e ? { point: e(t.point) } : t;
}
function Di(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function xe({ point: t }, e) {
  return {
    point: t,
    delta: Di(t, Ur(e)),
    offset: Di(t, Pu(e)),
    velocity: wu(e, 0.1)
  };
}
function Pu(t) {
  return t[0];
}
function Ur(t) {
  return t[t.length - 1];
}
function wu(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, i = null;
  const s = Ur(t);
  for (; n >= 0 && (i = t[n], !(s.timestamp - i.timestamp > /* @__PURE__ */ H(e))); )
    n--;
  if (!i)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ X(s.timestamp - i.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (s.x - i.x) / o,
    y: (s.y - i.y) / o
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function Au(t, { min: e, max: n }, i) {
  return e !== void 0 && t < e ? t = i ? M(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? M(n, t, i.max) : Math.min(t, n)), t;
}
function Ri(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function Vu(t, { top: e, left: n, bottom: i, right: s }) {
  return {
    x: Ri(t.x, n, s),
    y: Ri(t.y, e, i)
  };
}
function Ei(t, e) {
  let n = e.min - t.min, i = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i };
}
function Mu(t, e) {
  return {
    x: Ei(t.x, e.x),
    y: Ei(t.y, e.y)
  };
}
function Cu(t, e) {
  let n = 0.5;
  const i = O(t), s = O(e);
  return s > i ? n = /* @__PURE__ */ yt(e.min, e.max - i, t.min) : i > s && (n = /* @__PURE__ */ yt(t.min, t.max - s, e.min)), Y(0, 1, n);
}
function Du(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const nn = 0.35;
function Ru(t = nn) {
  return t === !1 ? t = 0 : t === !0 && (t = nn), {
    x: Li(t, "left", "right"),
    y: Li(t, "top", "bottom")
  };
}
function Li(t, e, n) {
  return {
    min: ji(t, e),
    max: ji(t, n)
  };
}
function ji(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Eu = /* @__PURE__ */ new WeakMap();
class Lu {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = E(), this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1)
      return;
    const s = (c) => {
      const { dragSnapToOrigin: h } = this.getProps();
      h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Gt(c).point);
    }, o = (c, h) => {
      const { drag: f, dragPropagation: d, onDragStart: m } = this.getProps();
      if (f && !d && (this.openDragLock && this.openDragLock(), this.openDragLock = Ao(f), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), U((y) => {
        let g = this.getAxisMotionValue(y).get() || 0;
        if (q.test(g)) {
          const { projection: T } = this.visualElement;
          if (T && T.layout) {
            const x = T.layout.layoutBox[y];
            x && (g = O(x) * (parseFloat(g) / 100));
          }
        }
        this.originPoint[y] = g;
      }), m && V.postRender(() => m(c, h)), Ge(this.visualElement, "transform");
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, r = (c, h) => {
      const { dragPropagation: f, dragDirectionLock: d, onDirectionLock: m, onDrag: p } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: y } = h;
      if (d && this.currentDirection === null) {
        this.currentDirection = ju(y), this.currentDirection !== null && m && m(this.currentDirection);
        return;
      }
      this.updateAxis("x", h.point, y), this.updateAxis("y", h.point, y), this.visualElement.render(), p && p(c, h);
    }, a = (c, h) => this.stop(c, h), l = () => U((c) => {
      var h;
      return this.getAnimationState(c) === "paused" && ((h = this.getAxisMotionValue(c).animation) === null || h === void 0 ? void 0 : h.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Nr(e, {
      onSessionStart: s,
      onStart: o,
      onMove: r,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: _r(this.visualElement)
    });
  }
  stop(e, n) {
    const i = this.isDragging;
    if (this.cancel(), !i)
      return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: o } = this.getProps();
    o && V.postRender(() => o(e, n));
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
    if (!i || !zt(e, s, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + i[e];
    this.constraints && this.constraints[e] && (r = Au(r, this.constraints[e], this.elastic[e])), o.set(r);
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: n, dragElastic: i } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, o = this.constraints;
    n && ht(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && s ? this.constraints = Vu(s.layoutBox, n) : this.constraints = !1, this.elastic = Ru(i), o !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && U((r) => {
      this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = Du(s.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !ht(e))
      return !1;
    const i = e.current, { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const o = bu(i, s.root, this.visualElement.getTransformPagePoint());
    let r = Mu(s.layout.layoutBox, o);
    if (n) {
      const a = n(fu(r));
      this.hasMutatedConstraints = !!a, a && (r = jr(a));
    }
    return r;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: i, dragElastic: s, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = U((c) => {
      if (!zt(c, n, this.currentDirection))
        return;
      let h = l && l[c] || {};
      r && (h = { min: 0, max: 0 });
      const f = s ? 200 : 1e6, d = s ? 40 : 1e7, m = {
        type: "inertia",
        velocity: i ? e[c] : 0,
        bounceStiffness: f,
        bounceDamping: d,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...h
      };
      return this.startAxisValueAnimation(c, m);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const i = this.getAxisMotionValue(e);
    return Ge(this.visualElement, e), i.start(On(e, i, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    U((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    U((e) => {
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
    U((n) => {
      const { drag: i } = this.getProps();
      if (!zt(n, i, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, o = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: r, max: a } = s.layout.layoutBox[n];
        o.set(e[n] - M(r, a, 0.5));
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
    if (!ht(n) || !i || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    U((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[r] = Cu({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), U((r) => {
      if (!zt(r, e, null))
        return;
      const a = this.getAxisMotionValue(r), { min: l, max: u } = this.constraints[r];
      a.set(M(l, u, s[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Eu.set(this.visualElement, this);
    const e = this.visualElement.current, n = Dt(e, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), i = () => {
      const { dragConstraints: l } = this.getProps();
      ht(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, o = s.addEventListener("measure", i);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), V.read(i);
    const r = It(window, "resize", () => this.scalePositionWithinConstraints()), a = s.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (U((c) => {
        const h = this.getAxisMotionValue(c);
        h && (this.originPoint[c] += l[c].translate, h.set(h.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      r(), n(), o(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: i = !1, dragPropagation: s = !1, dragConstraints: o = !1, dragElastic: r = nn, dragMomentum: a = !0 } = e;
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
function zt(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function ju(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class ku extends nt {
  constructor(e) {
    super(e), this.removeGroupControls = _, this.removeListeners = _, this.controls = new Lu(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || _;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ki = (t) => (e, n) => {
  t && V.postRender(() => t(e, n));
};
class Bu extends nt {
  constructor() {
    super(...arguments), this.removePointerDownListener = _;
  }
  onPointerDown(e) {
    this.session = new Nr(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: _r(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: i, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: ki(e),
      onStart: ki(n),
      onMove: i,
      onEnd: (o, r) => {
        delete this.session, s && V.postRender(() => s(o, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Dt(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Zt = {
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
function Bi(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const wt = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (P.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = Bi(t, e.target.x), i = Bi(t, e.target.y);
    return `${n}% ${i}%`;
  }
}, Fu = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const i = t, s = et.parse(t);
    if (s.length > 5)
      return i;
    const o = et.createTransformer(t), r = typeof s[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
    s[0 + r] /= a, s[1 + r] /= l;
    const u = M(a, l, 0.5);
    return typeof s[2 + r] == "number" && (s[2 + r] /= u), typeof s[3 + r] == "number" && (s[3 + r] /= u), o(s);
  }
};
class Ou extends lo {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: s } = this.props, { projection: o } = e;
    Qo(Iu), o && (n.group && n.group.add(o), i && i.register && s && i.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), Zt.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: i, drag: s, isPresent: o } = this.props, r = i.projection;
    return r && (r.isPresent = o, s || e.layoutDependency !== n || n === void 0 || e.isPresent !== o ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || V.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), pn.postRender(() => {
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
function Wr(t) {
  const [e, n] = po(), i = I(Ps);
  return K.jsx(Ou, { ...t, layoutGroup: i, switchLayoutGroup: I(_s), isPresent: e, safeToRemove: n });
}
const Iu = {
  borderRadius: {
    ...wt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: wt,
  borderTopRightRadius: wt,
  borderBottomLeftRadius: wt,
  borderBottomRightRadius: wt,
  boxShadow: Fu
};
function _u(t, e, n) {
  const i = B(t) ? t : Lt(t);
  return i.start(On("", i, e, n)), i.animation;
}
function Nu(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
const Uu = (t, e) => t.depth - e.depth;
class Wu {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    ln(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    un(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(Uu), this.isDirty = !1, this.children.forEach(e);
  }
}
function Gu(t, e) {
  const n = $.now(), i = ({ timestamp: s }) => {
    const o = s - n;
    o >= e && (tt(i), t(o - e));
  };
  return V.read(i, !0), () => tt(i);
}
const Gr = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Ku = Gr.length, Fi = (t) => typeof t == "string" ? parseFloat(t) : t, Oi = (t) => typeof t == "number" || P.test(t);
function $u(t, e, n, i, s, o) {
  s ? (t.opacity = M(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    qu(i)
  ), t.opacityExit = M(e.opacity !== void 0 ? e.opacity : 1, 0, zu(i))) : o && (t.opacity = M(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, i));
  for (let r = 0; r < Ku; r++) {
    const a = `border${Gr[r]}Radius`;
    let l = Ii(e, a), u = Ii(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || Oi(l) === Oi(u) ? (t[a] = Math.max(M(Fi(l), Fi(u), i), 0), (q.test(u) || q.test(l)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = M(e.rotate || 0, n.rotate || 0, i));
}
function Ii(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const qu = /* @__PURE__ */ Kr(0, 0.5, or), zu = /* @__PURE__ */ Kr(0.5, 0.95, _);
function Kr(t, e, n) {
  return (i) => i < t ? 0 : i > e ? 1 : n(/* @__PURE__ */ yt(t, e, i));
}
function _i(t, e) {
  t.min = e.min, t.max = e.max;
}
function N(t, e) {
  _i(t.x, e.x), _i(t.y, e.y);
}
function Ni(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function Ui(t, e, n, i, s) {
  return t -= e, t = ie(t, 1 / n, i), s !== void 0 && (t = ie(t, 1 / s, i)), t;
}
function Hu(t, e = 0, n = 1, i = 0.5, s, o = t, r = t) {
  if (q.test(e) && (e = parseFloat(e), e = M(r.min, r.max, e / 100) - r.min), typeof e != "number")
    return;
  let a = M(o.min, o.max, i);
  t === o && (a -= e), t.min = Ui(t.min, e, n, a, s), t.max = Ui(t.max, e, n, a, s);
}
function Wi(t, e, [n, i, s], o, r) {
  Hu(t, e[n], e[i], e[s], e.scale, o, r);
}
const Xu = ["x", "scaleX", "originX"], Yu = ["y", "scaleY", "originY"];
function Gi(t, e, n, i) {
  Wi(t.x, e, Xu, n ? n.x : void 0, i ? i.x : void 0), Wi(t.y, e, Yu, n ? n.y : void 0, i ? i.y : void 0);
}
function Ki(t) {
  return t.translate === 0 && t.scale === 1;
}
function $r(t) {
  return Ki(t.x) && Ki(t.y);
}
function $i(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Zu(t, e) {
  return $i(t.x, e.x) && $i(t.y, e.y);
}
function qi(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function qr(t, e) {
  return qi(t.x, e.x) && qi(t.y, e.y);
}
function zi(t) {
  return O(t.x) / O(t.y);
}
function Hi(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class Ju {
  constructor() {
    this.members = [];
  }
  add(e) {
    ln(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (un(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
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
function Qu(t, e, n) {
  let i = "";
  const s = t.x.translate / e.x, o = t.y.translate / e.y, r = (n == null ? void 0 : n.z) || 0;
  if ((s || o || r) && (i = `translate3d(${s}px, ${o}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: h, rotateY: f, skewX: d, skewY: m } = n;
    u && (i = `perspective(${u}px) ${i}`), c && (i += `rotate(${c}deg) `), h && (i += `rotateX(${h}deg) `), f && (i += `rotateY(${f}deg) `), d && (i += `skewX(${d}deg) `), m && (i += `skewY(${m}deg) `);
  }
  const a = t.x.scale * e.x, l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (i += `scale(${a}, ${l})`), i || "none";
}
const be = ["", "X", "Y", "Z"], tc = { visibility: "hidden" }, Xi = 1e3;
let ec = 0;
function Se(t, e, n, i) {
  const { latestValues: s } = e;
  s[t] && (n[t] = s[t], e.setStaticValue(t, 0), i && (i[t] = 0));
}
function zr(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = Qs(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", V, !(s || o));
  }
  const { parent: i } = t;
  i && !i.hasCheckedOptimisedAppear && zr(i);
}
function Hr({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: s }) {
  return class {
    constructor(r = {}, a = e == null ? void 0 : e()) {
      this.id = ec++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(sc), this.nodes.forEach(uc), this.nodes.forEach(cc), this.nodes.forEach(rc);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Wu());
    }
    addEventListener(r, a) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new hn()), this.eventHandlers.get(r).add(a);
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
      this.isSVG = Nu(r), this.instance = r;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), t) {
        let h;
        const f = () => this.root.updateBlockedByResize = !1;
        t(r, () => {
          this.root.updateBlockedByResize = !0, h && h(), h = Gu(f, 250), Zt.hasAnimatedSinceResize && (Zt.hasAnimatedSinceResize = !1, this.nodes.forEach(Zi));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: h, hasLayoutChanged: f, hasRelativeLayoutChanged: d, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const p = this.options.transition || c.getDefaultTransition() || pc, { onLayoutAnimationStart: y, onLayoutAnimationComplete: g } = c.getProps(), T = !this.targetLayout || !qr(this.targetLayout, m), x = !f && d;
        if (this.options.layoutRoot || this.resumeFrom || x || f && (T || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(h, x);
          const w = {
            ...fn(p, "layout"),
            onPlay: y,
            onComplete: g
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w);
        } else
          f || Zi(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, tt(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(hc), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && zr(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const h = this.path[c];
        h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Yi);
        return;
      }
      this.isUpdating || this.nodes.forEach(ac), this.isUpdating = !1, this.nodes.forEach(lc), this.nodes.forEach(nc), this.nodes.forEach(ic), this.clearAllSnapshots();
      const a = $.now();
      j.delta = Y(0, 1e3 / 60, a - j.timestamp), j.timestamp = a, j.isProcessing = !0, de.update.process(j), de.preRender.process(j), de.render.process(j), j.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, pn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(oc), this.sharedNodes.forEach(fc);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, V.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      V.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !O(this.snapshot.measuredBox.x) && !O(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const r = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = E(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !$r(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      r && (a || st(this.latestValues) || c) && (s(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return r && (l = this.removeTransform(l)), gc(l), {
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
        return E();
      const l = a.measureViewportBox();
      if (!(((r = this.scroll) === null || r === void 0 ? void 0 : r.wasRoot) || this.path.some(yc))) {
        const { scroll: c } = this.root;
        c && (mt(l.x, c.offset.x), mt(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(r) {
      var a;
      const l = E();
      if (N(l, r), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: h, options: f } = c;
        c !== this.root && h && f.layoutScroll && (h.wasRoot && N(l, r), mt(l.x, h.offset.x), mt(l.y, h.offset.y));
      }
      return l;
    }
    applyTransform(r, a = !1) {
      const l = E();
      N(l, r);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && pt(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), st(c.latestValues) && pt(l, c.latestValues);
      }
      return st(this.latestValues) && pt(l, this.latestValues), l;
    }
    removeTransform(r) {
      const a = E();
      N(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !st(u.latestValues))
          continue;
        tn(u.latestValues) && u.updateSnapshot();
        const c = E(), h = u.measurePageBox();
        N(c, h), Gi(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return st(this.latestValues) && Gi(a, this.latestValues), a;
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
      const u = !!this.resumingFrom || this !== l;
      if (!(r || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: h, layoutId: f } = this.options;
      if (!(!this.layout || !(h || f))) {
        if (this.resolvedRelativeTargetAt = j.timestamp, !this.targetDelta && !this.relativeTarget) {
          const d = this.getClosestProjectingParent();
          d && d.layout && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = E(), this.relativeTargetOrigin = E(), Et(this.relativeTargetOrigin, this.layout.layoutBox, d.layout.layoutBox), N(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = E(), this.targetWithTransforms = E()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Tu(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : N(this.target, this.layout.layoutBox), Or(this.target, this.targetDelta)) : N(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const d = this.getClosestProjectingParent();
          d && !!d.resumingFrom == !!this.resumingFrom && !d.options.layoutScroll && d.target && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = E(), this.relativeTargetOrigin = E(), Et(this.relativeTargetOrigin, this.target, d.target), N(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || tn(this.parent.latestValues) || Fr(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var r;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let u = !0;
      if ((this.isProjectionDirty || !((r = this.parent) === null || r === void 0) && r.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === j.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: h } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || h))
        return;
      N(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, d = this.treeScale.y;
      xu(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = E());
      const { target: m } = a;
      if (!m) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ni(this.prevProjectionDelta.x, this.projectionDelta.x), Ni(this.prevProjectionDelta.y, this.projectionDelta.y)), Rt(this.projectionDelta, this.layoutCorrected, m, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== d || !Hi(this.projectionDelta.x, this.prevProjectionDelta.x) || !Hi(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m));
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
      this.prevProjectionDelta = dt(), this.projectionDelta = dt(), this.projectionDeltaWithTransform = dt();
    }
    setAnimationOrigin(r, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, h = dt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = E(), d = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, p = d !== m, y = this.getStack(), g = !y || y.members.length <= 1, T = !!(p && !g && this.options.crossfade === !0 && !this.path.some(mc));
      this.animationProgress = 0;
      let x;
      this.mixTargetDelta = (w) => {
        const v = w / 1e3;
        Ji(h.x, r.x, v), Ji(h.y, r.y, v), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Et(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), dc(this.relativeTarget, this.relativeTargetOrigin, f, v), x && Zu(this.relativeTarget, x) && (this.isProjectionDirty = !1), x || (x = E()), N(x, this.relativeTarget)), p && (this.animationValues = c, $u(c, u, this.latestValues, v, T, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = v;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (tt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = V.update(() => {
        Zt.hasAnimatedSinceResize = !0, this.currentAnimation = _u(0, Xi, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Xi), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = r;
      if (!(!a || !l || !u)) {
        if (this !== r && this.layout && u && Xr(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || E();
          const h = O(this.layout.layoutBox.x);
          l.x.min = r.target.x.min, l.x.max = l.x.min + h;
          const f = O(this.layout.layoutBox.y);
          l.y.min = r.target.y.min, l.y.max = l.y.min + f;
        }
        N(a, l), pt(a, c), Rt(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new Ju()), this.sharedNodes.get(r).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
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
      const u = this.getStack();
      u && u.promote(this, l), r && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
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
      const u = {};
      l.z && Se("z", r, u, this.animationValues);
      for (let c = 0; c < be.length; c++)
        Se(`rotate${be[c]}`, r, u, this.animationValues), Se(`skew${be[c]}`, r, u, this.animationValues);
      r.render();
      for (const c in u)
        r.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      r.scheduleRender();
    }
    getProjectionStyles(r) {
      var a, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return tc;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Yt(r == null ? void 0 : r.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const p = {};
        return this.options.layoutId && (p.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, p.pointerEvents = Yt(r == null ? void 0 : r.pointerEvents) || ""), this.hasProjected && !st(this.latestValues) && (p.transform = c ? c({}, "") : "none", this.hasProjected = !1), p;
      }
      const f = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(), u.transform = Qu(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: d, y: m } = this.projectionDelta;
      u.transformOrigin = `${d.origin * 100}% ${m.origin * 100}% 0`, h.animationValues ? u.opacity = h === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = h === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const p in kt) {
        if (f[p] === void 0)
          continue;
        const { correct: y, applyTo: g, isCSSVariable: T } = kt[p], x = u.transform === "none" ? f[p] : y(f[p], h);
        if (g) {
          const w = g.length;
          for (let v = 0; v < w; v++)
            u[g[v]] = x;
        } else
          T ? this.options.visualElement.renderState.vars[p] = x : u[p] = x;
      }
      return this.options.layoutId && (u.pointerEvents = h === this ? Yt(r == null ? void 0 : r.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => {
        var a;
        return (a = r.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(Yi), this.root.sharedNodes.clear();
    }
  };
}
function nc(t) {
  t.updateLayout();
}
function ic(t) {
  var e;
  const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: s } = t.layout, { animationType: o } = t.options, r = n.source !== t.layout.source;
    o === "size" ? U((h) => {
      const f = r ? n.measuredBox[h] : n.layoutBox[h], d = O(f);
      f.min = i[h].min, f.max = f.min + d;
    }) : Xr(o, n.layoutBox, i) && U((h) => {
      const f = r ? n.measuredBox[h] : n.layoutBox[h], d = O(i[h]);
      f.max = f.min + d, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[h].max = t.relativeTarget[h].min + d);
    });
    const a = dt();
    Rt(a, i, n.layoutBox);
    const l = dt();
    r ? Rt(l, t.applyTransform(s, !0), n.measuredBox) : Rt(l, i, n.layoutBox);
    const u = !$r(a);
    let c = !1;
    if (!t.resumeFrom) {
      const h = t.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: f, layout: d } = h;
        if (f && d) {
          const m = E();
          Et(m, n.layoutBox, f.layoutBox);
          const p = E();
          Et(p, i, d.layoutBox), qr(m, p) || (c = !0), h.options.layoutRoot && (t.relativeTarget = p, t.relativeTargetOrigin = m, t.relativeParent = h);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: i,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c
    });
  } else if (t.isLead()) {
    const { onExitComplete: i } = t.options;
    i && i();
  }
  t.options.transition = void 0;
}
function sc(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function rc(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function oc(t) {
  t.clearSnapshot();
}
function Yi(t) {
  t.clearMeasurements();
}
function ac(t) {
  t.isLayoutDirty = !1;
}
function lc(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function Zi(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function uc(t) {
  t.resolveTargetDelta();
}
function cc(t) {
  t.calcProjection();
}
function hc(t) {
  t.resetSkewAndRotation();
}
function fc(t) {
  t.removeLeadSnapshot();
}
function Ji(t, e, n) {
  t.translate = M(e.translate, 0, n), t.scale = M(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Qi(t, e, n, i) {
  t.min = M(e.min, n.min, i), t.max = M(e.max, n.max, i);
}
function dc(t, e, n, i) {
  Qi(t.x, e.x, n.x, i), Qi(t.y, e.y, n.y, i);
}
function mc(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const pc = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, ts = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), es = ts("applewebkit/") && !ts("chrome/") ? Math.round : _;
function ns(t) {
  t.min = es(t.min), t.max = es(t.max);
}
function gc(t) {
  ns(t.x), ns(t.y);
}
function Xr(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !vu(zi(e), zi(n), 0.2);
}
function yc(t) {
  var e;
  return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot);
}
const vc = Hr({
  attachResizeListener: (t, e) => It(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Pe = {
  current: void 0
}, Yr = Hr({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!Pe.current) {
      const t = new vc({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), Pe.current = t;
    }
    return Pe.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), Tc = {
  pan: {
    Feature: Bu
  },
  drag: {
    Feature: ku,
    ProjectionNode: Yr,
    MeasureLayout: Wr
  }
};
function is(t, e, n) {
  const { props: i } = t;
  t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n, o = i[s];
  o && V.postRender(() => o(e, Gt(e)));
}
class xc extends nt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = Mo(e, (n, i) => (is(this.node, i, "Start"), (s) => is(this.node, s, "End"))));
  }
  unmount() {
  }
}
class bc extends nt {
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
    this.unmount = Wt(It(this.node.current, "focus", () => this.onFocus()), It(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function ss(t, e, n) {
  const { props: i } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n), o = i[s];
  o && V.postRender(() => o(e, Gt(e)));
}
class Sc extends nt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = Eo(e, (n, i) => (ss(this.node, i, "Start"), (s, { success: o }) => ss(this.node, s, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const sn = /* @__PURE__ */ new WeakMap(), we = /* @__PURE__ */ new WeakMap(), Pc = (t) => {
  const e = sn.get(t.target);
  e && e(t);
}, wc = (t) => {
  t.forEach(Pc);
};
function Ac({ root: t, ...e }) {
  const n = t || document;
  we.has(n) || we.set(n, {});
  const i = we.get(n), s = JSON.stringify(e);
  return i[s] || (i[s] = new IntersectionObserver(wc, { root: t, ...e })), i[s];
}
function Vc(t, e, n) {
  const i = Ac(e);
  return sn.set(t, n), i.observe(t), () => {
    sn.delete(t), i.unobserve(t);
  };
}
const Mc = {
  some: 0,
  all: 1
};
class Cc extends nt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: i, amount: s = "some", once: o } = e, r = {
      root: n ? n.current : void 0,
      rootMargin: i,
      threshold: typeof s == "number" ? s : Mc[s]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: h } = this.node.getProps(), f = u ? c : h;
      f && f(l);
    };
    return Vc(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Dc(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Dc({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Rc = {
  inView: {
    Feature: Cc
  },
  tap: {
    Feature: Sc
  },
  focus: {
    Feature: bc
  },
  hover: {
    Feature: xc
  }
}, Ec = {
  layout: {
    ProjectionNode: Yr,
    MeasureLayout: Wr
  }
}, rn = { current: null }, Zr = { current: !1 };
function Lc() {
  if (Zr.current = !0, !!on)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => rn.current = t.matches;
      t.addListener(e), e();
    } else
      rn.current = !1;
}
const jc = [...br, k, et], kc = (t) => jc.find(xr(t)), Bc = /* @__PURE__ */ new WeakMap();
function Fc(t, e, n) {
  for (const i in e) {
    const s = e[i], o = n[i];
    if (B(s))
      t.addValue(i, s);
    else if (B(o))
      t.addValue(i, Lt(s, { owner: t }));
    else if (o !== s)
      if (t.hasValue(i)) {
        const r = t.getValue(i);
        r.liveStyle === !0 ? r.jump(s) : r.hasAnimated || r.set(s);
      } else {
        const r = t.getStaticValue(i);
        t.addValue(i, Lt(r !== void 0 ? r : s, { owner: t }));
      }
  }
  for (const i in n)
    e[i] === void 0 && t.removeValue(i);
  return e;
}
const rs = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Oc {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = kn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const d = $.now();
      this.renderScheduledAt < d && (this.renderScheduledAt = d, V.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u, onUpdate: c } = r;
    this.onUpdate = c, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = s, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = ae(n), this.isVariantNode = Os(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: h, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const d in f) {
      const m = f[d];
      l[d] !== void 0 && B(m) && m.set(l[d], !1);
    }
  }
  mount(e) {
    this.current = e, Bc.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, i) => this.bindToMotionValue(i, n)), Zr.current || Lc(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : rn.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), tt(this.notifyUpdate), tt(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const i = lt.has(e);
    i && this.onBindTransform && this.onBindTransform();
    const s = n.on("change", (a) => {
      this.latestValues[e] = a, this.props.onUpdate && V.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0);
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
    for (e in vt) {
      const n = vt[e];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : E();
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
    for (let i = 0; i < rs.length; i++) {
      const s = rs[i];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const o = "on" + s, r = e[o];
      r && (this.propEventSubscriptions[s] = this.on(s, r));
    }
    this.prevMotionValues = Fc(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return i === void 0 && n !== void 0 && (i = Lt(n === null ? void 0 : n, { owner: this }), this.addValue(e, i)), i;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    var i;
    let s = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (i = this.getBaseTargetFromProps(this.props, e)) !== null && i !== void 0 ? i : this.readValueFromInstance(this.current, e, this.options);
    return s != null && (typeof s == "string" && (vr(s) || lr(s)) ? s = parseFloat(s) : !kc(s) && et.test(n) && (s = pr(e, n)), this.setBaseTarget(e, B(s) ? s.get() : s)), B(s) ? s.get() : s;
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
      const r = Cn(this.props, i, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      r && (s = r[e]);
    }
    if (i && s !== void 0)
      return s;
    const o = this.getBaseTargetFromProps(this.props, e);
    return o !== void 0 && !B(o) ? o : this.initialValues[e] !== void 0 && s === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new hn()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class Jr extends Oc {
  constructor() {
    super(...arguments), this.KeyframeResolver = Sr;
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
    B(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function Ic(t) {
  return window.getComputedStyle(t);
}
class _c extends Jr {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Hs;
  }
  readValueFromInstance(e, n) {
    if (lt.has(n))
      return Ya(e, n);
    {
      const i = Ic(e), s = (xn(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Ir(e, n);
  }
  build(e, n, i) {
    Pn(e, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return Dn(e, n, i);
  }
}
class Nc extends Jr {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = E, this.updateDimensions = () => {
      this.current && !this.renderState.dimensions && zs(this.current, this.renderState);
    };
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (lt.has(n)) {
      const i = mr(n);
      return i && i.default || 0;
    }
    return n = Xs.has(n) ? n : Tn(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return Zs(e, n, i);
  }
  onBindTransform() {
    this.current && !this.renderState.dimensions && V.postRender(this.updateDimensions);
  }
  build(e, n, i) {
    Vn(e, n, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(e, n, i, s) {
    Ys(e, n, i, s);
  }
  mount(e) {
    this.isSVGTag = Mn(e.tagName), super.mount(e);
  }
}
const Uc = (t, e) => An(t) ? new Nc(e) : new _c(e, {
  allowProjection: t !== bs
}), Wc = /* @__PURE__ */ Pa({
  ...cu,
  ...Rc,
  ...Tc,
  ...Ec
}, Uc), Qr = /* @__PURE__ */ _o(Wc);
var Ae, os;
function In() {
  if (os) return Ae;
  os = 1;
  function t(e) {
    var n = typeof e;
    return e != null && (n == "object" || n == "function");
  }
  return Ae = t, Ae;
}
var Ve, as;
function Gc() {
  if (as) return Ve;
  as = 1;
  var t = typeof Kt == "object" && Kt && Kt.Object === Object && Kt;
  return Ve = t, Ve;
}
var Me, ls;
function to() {
  if (ls) return Me;
  ls = 1;
  var t = Gc(), e = typeof self == "object" && self && self.Object === Object && self, n = t || e || Function("return this")();
  return Me = n, Me;
}
var Ce, us;
function Kc() {
  if (us) return Ce;
  us = 1;
  var t = to(), e = function() {
    return t.Date.now();
  };
  return Ce = e, Ce;
}
var De, cs;
function $c() {
  if (cs) return De;
  cs = 1;
  var t = /\s/;
  function e(n) {
    for (var i = n.length; i-- && t.test(n.charAt(i)); )
      ;
    return i;
  }
  return De = e, De;
}
var Re, hs;
function qc() {
  if (hs) return Re;
  hs = 1;
  var t = $c(), e = /^\s+/;
  function n(i) {
    return i && i.slice(0, t(i) + 1).replace(e, "");
  }
  return Re = n, Re;
}
var Ee, fs;
function eo() {
  if (fs) return Ee;
  fs = 1;
  var t = to(), e = t.Symbol;
  return Ee = e, Ee;
}
var Le, ds;
function zc() {
  if (ds) return Le;
  ds = 1;
  var t = eo(), e = Object.prototype, n = e.hasOwnProperty, i = e.toString, s = t ? t.toStringTag : void 0;
  function o(r) {
    var a = n.call(r, s), l = r[s];
    try {
      r[s] = void 0;
      var u = !0;
    } catch {
    }
    var c = i.call(r);
    return u && (a ? r[s] = l : delete r[s]), c;
  }
  return Le = o, Le;
}
var je, ms;
function Hc() {
  if (ms) return je;
  ms = 1;
  var t = Object.prototype, e = t.toString;
  function n(i) {
    return e.call(i);
  }
  return je = n, je;
}
var ke, ps;
function Xc() {
  if (ps) return ke;
  ps = 1;
  var t = eo(), e = zc(), n = Hc(), i = "[object Null]", s = "[object Undefined]", o = t ? t.toStringTag : void 0;
  function r(a) {
    return a == null ? a === void 0 ? s : i : o && o in Object(a) ? e(a) : n(a);
  }
  return ke = r, ke;
}
var Be, gs;
function Yc() {
  if (gs) return Be;
  gs = 1;
  function t(e) {
    return e != null && typeof e == "object";
  }
  return Be = t, Be;
}
var Fe, ys;
function Zc() {
  if (ys) return Fe;
  ys = 1;
  var t = Xc(), e = Yc(), n = "[object Symbol]";
  function i(s) {
    return typeof s == "symbol" || e(s) && t(s) == n;
  }
  return Fe = i, Fe;
}
var Oe, vs;
function Jc() {
  if (vs) return Oe;
  vs = 1;
  var t = qc(), e = In(), n = Zc(), i = NaN, s = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, r = /^0o[0-7]+$/i, a = parseInt;
  function l(u) {
    if (typeof u == "number")
      return u;
    if (n(u))
      return i;
    if (e(u)) {
      var c = typeof u.valueOf == "function" ? u.valueOf() : u;
      u = e(c) ? c + "" : c;
    }
    if (typeof u != "string")
      return u === 0 ? u : +u;
    u = t(u);
    var h = o.test(u);
    return h || r.test(u) ? a(u.slice(2), h ? 2 : 8) : s.test(u) ? i : +u;
  }
  return Oe = l, Oe;
}
var Ie, Ts;
function no() {
  if (Ts) return Ie;
  Ts = 1;
  var t = In(), e = Kc(), n = Jc(), i = "Expected a function", s = Math.max, o = Math.min;
  function r(a, l, u) {
    var c, h, f, d, m, p, y = 0, g = !1, T = !1, x = !0;
    if (typeof a != "function")
      throw new TypeError(i);
    l = n(l) || 0, t(u) && (g = !!u.leading, T = "maxWait" in u, f = T ? s(n(u.maxWait) || 0, l) : f, x = "trailing" in u ? !!u.trailing : x);
    function w(R) {
      var W = c, ct = h;
      return c = h = void 0, y = R, d = a.apply(ct, W), d;
    }
    function v(R) {
      return y = R, m = setTimeout(b, l), g ? w(R) : d;
    }
    function S(R) {
      var W = R - p, ct = R - y, ue = l - W;
      return T ? o(ue, f - ct) : ue;
    }
    function A(R) {
      var W = R - p, ct = R - y;
      return p === void 0 || W >= l || W < 0 || T && ct >= f;
    }
    function b() {
      var R = e();
      if (A(R))
        return D(R);
      m = setTimeout(b, S(R));
    }
    function D(R) {
      return m = void 0, x && c ? w(R) : (c = h = void 0, d);
    }
    function L() {
      m !== void 0 && clearTimeout(m), y = 0, c = p = h = m = void 0;
    }
    function Z() {
      return m === void 0 ? d : D(e());
    }
    function ut() {
      var R = e(), W = A(R);
      if (c = arguments, h = this, p = R, W) {
        if (m === void 0)
          return v(p);
        if (T)
          return clearTimeout(m), m = setTimeout(b, l), w(p);
      }
      return m === void 0 && (m = setTimeout(b, l)), d;
    }
    return ut.cancel = L, ut.flush = Z, ut;
  }
  return Ie = r, Ie;
}
var Qc = no();
const th = /* @__PURE__ */ Ss(Qc);
var _e, xs;
function eh() {
  if (xs) return _e;
  xs = 1;
  var t = no(), e = In(), n = "Expected a function";
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
  return _e = i, _e;
}
var nh = eh();
const ih = /* @__PURE__ */ Ss(nh), sh = (t, e, n, i) => {
  switch (e) {
    case "debounce":
      return th(t, n, i);
    case "throttle":
      return ih(t, n, i);
    default:
      return t;
  }
}, rh = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (t) => {
    const e = Mt.useRef(t);
    return Mt.useEffect(() => {
      e.current = t;
    }), Mt.useMemo(() => (...n) => {
      var i;
      return (i = e.current) === null || i === void 0 ? void 0 : i.call(e, ...n);
    }, []);
  }
), oh = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (t) => {
    const [e, n] = Mt.useState((t == null ? void 0 : t.current) || null);
    return t && setTimeout(() => {
      t.current !== e && n(t.current);
    }, 0), { refProxy: Mt.useMemo(() => new Proxy((s) => {
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
), ah = (t, e) => e === "border-box" ? {
  width: t.borderBoxSize[0].inlineSize,
  height: t.borderBoxSize[0].blockSize
} : e === "content-box" ? {
  width: t.contentBoxSize[0].inlineSize,
  height: t.contentBoxSize[0].blockSize
} : {
  width: t.contentRect.width,
  height: t.contentRect.height
};
function lh({ skipOnMount: t = !1, refreshMode: e, refreshRate: n = 1e3, refreshOptions: i, handleWidth: s = !0, handleHeight: o = !0, targetRef: r, observerOptions: a, onResize: l } = {}) {
  const u = Q(t), c = rh(l), [h, f] = Ht({
    width: void 0,
    height: void 0
  }), { refProxy: d, refElement: m } = oh(r), { box: p } = a || {}, y = gt((T) => {
    if (!s && !o)
      return;
    if (u.current) {
      u.current = !1;
      return;
    }
    const x = (w, v) => s && w.width !== v.width || o && w.height !== v.height;
    T.forEach((w) => {
      const v = ah(w, p);
      f((S) => x(S, v) ? (c == null || c({
        width: v.width,
        height: v.height,
        entry: w
      }), v) : S);
    });
  }, [s, o, u, p]), g = gt(sh(y, e, n, i), [
    y,
    e,
    n,
    i
  ]);
  return _t(() => {
    let T;
    return m ? (T = new window.ResizeObserver(g), T.observe(m, a)) : (h.width || h.height) && (c == null || c({
      width: null,
      height: null,
      entry: null
    }), f({ width: void 0, height: void 0 })), () => {
      var x, w, v;
      (x = T == null ? void 0 : T.disconnect) === null || x === void 0 || x.call(T), (v = (w = g).cancel) === null || v === void 0 || v.call(w);
    };
  }, [g, m]), Object.assign({ ref: d }, h);
}
function uh({ index: t, onSizeChange: e, ...n }) {
  const { ref: i } = lh({
    handleHeight: !1,
    refreshMode: "debounce",
    refreshRate: 1e3,
    onResize({ width: s, height: o }) {
      e(t, s, o);
    }
  });
  return /* @__PURE__ */ K.jsx(Qr.div, { style: {
    height: "100%",
    maxHeight: "65vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  }, ref: i, ...n });
}
const ch = {
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
      const u = o * (t - n);
      r = Math.max(0, 1 - u);
    }
    return {
      scale: r,
      filter: `blur(${l})`,
      x: s,
      zIndex: hh({ activeIndex: t, currentIndex: n, direction: i }),
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
function hh({ activeIndex: t, currentIndex: e, direction: n }) {
  if (!(n < 0))
    return e === t ? 3 : 2;
}
const fh = 100, dh = ({
  slides: t,
  options: e,
  ref: n
}) => {
  const {
    spacing: i = 20,
    inactiveOffset: s = 150,
    inactiveScaleMultiplier: o = 0.1,
    inactiveBlur: r = 15
  } = e, a = Q(0), [[l, u], c] = Ht([0, 0]), [h, f] = Ht([]), d = Q(null), [m, p] = Ht(0), y = (l % t.length + t.length) % t.length, g = Q(!1), T = gt(
    (v) => {
      c((S) => {
        const A = S[0] + v;
        return A < 0 || A >= t.length ? S : [A, v];
      });
    },
    [t]
  ), x = gt(
    (v, { offset: S }) => {
      if (g.current) return;
      const A = fh / 2, b = l === t.length - 1, D = l === 0;
      S.x < -50 && !b ? a.current = 1 : S.x > A && !D ? a.current = -1 : a.current = 0;
    },
    [t, l]
  );
  _t(() => {
    if (d.current && h.length > 0) {
      const v = d.current.clientWidth, S = h[l], A = v / 2 - S / 2;
      p(A);
    }
  }, [h, l]);
  const w = (v, S) => {
    let A = 0;
    if (S < v) {
      for (let b = 0; b < S; b++)
        A -= h[b] + i;
      s === !1 ? A -= h[S] * (v - S) : A -= s * (v - S);
    } else
      for (let b = 0; b < v; b++)
        A -= h[b] + i;
    return A;
  };
  return /* @__PURE__ */ K.jsxs(
    Qr.div,
    {
      ref: n,
      dragElastic: 0,
      dragMomentum: !1,
      drag: t.length > 1 ? "x" : !1,
      onDrag: x,
      onDragStart: () => g.current = !1,
      onDragEnd: () => {
        g.current = !0, a.current !== 0 && T(a.current);
      },
      dragConstraints: { left: 0, right: 0, top: 0, bottom: 0 },
      children: [
        /* @__PURE__ */ K.jsx(
          "div",
          {
            className: "wrapper",
            ref: d,
            style: {
              gap: `${i}px`
            },
            children: t.map((v, S) => /* @__PURE__ */ K.jsx(
              uh,
              {
                className: "card",
                onSizeChange: (A, b) => {
                  h[A] !== b && f((D) => {
                    const L = [...D];
                    return b && (L[A] = b), L;
                  });
                },
                index: S,
                layout: !0,
                custom: {
                  activeIndex: y,
                  currentIndex: S,
                  direction: u,
                  inactiveBlur: r,
                  inactiveScaleMultiplier: o,
                  x: w(l, S) + m
                },
                variants: ch,
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
              S
            ))
          }
        ),
        /* @__PURE__ */ K.jsxs("div", { className: "buttons", children: [
          /* @__PURE__ */ K.jsx(
            _n,
            {
              disabled: l === 0,
              whileTap: { scale: 0.8 },
              onClick: () => T(-1),
              icon: "mdi:chevron-left",
              cssStyles: `
            background: rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            backdrop-filter: blur(5px);
            border: 2px solid rgba(255, 255, 255, 0.1);
          `
            }
          ),
          /* @__PURE__ */ K.jsx(
            _n,
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
              onClick: () => T(1)
            }
          )
        ] })
      ]
    }
  );
}, vh = {
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
        const s = uo();
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
    return /* @__PURE__ */ K.jsx(dh, { options: e, slides: i, ref: t.dragRef });
  }
};
export {
  vh as default
};
