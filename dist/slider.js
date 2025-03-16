import { jsxs as Ie, jsx as J } from "react/jsx-runtime";
import * as Vt from "react";
import { createContext as bt, useRef as Q, useLayoutEffect as to, useEffect as It, useContext as I, useId as eo, useCallback as gt, useMemo as ie, useInsertionEffect as no, forwardRef as io, Fragment as vs, createElement as so, Component as ro, useState as qt } from "react";
import { FabCard as In } from "@hakit/components";
import { v4 as oo } from "uuid";
const Ts = bt({});
function ao(t) {
  const e = Q(null);
  return e.current === null && (e.current = t()), e.current;
}
const rn = typeof window < "u", lo = rn ? to : It, on = /* @__PURE__ */ bt(null), bs = bt({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function uo(t = !0) {
  const e = I(on);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: i, register: s } = e, o = eo();
  It(() => {
    if (t)
      return s(o);
  }, [t]);
  const r = gt(() => t && i && i(o), [o, i, t]);
  return !n && i ? [!1, r] : [!0];
}
function an(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function ln(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const _ = /* @__NO_SIDE_EFFECTS__ */ (t) => t;
let xs = _;
const co = {
  useManualTiming: !1
};
// @__NO_SIDE_EFFECTS__
function un(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const yt = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const i = e - t;
  return i === 0 ? 1 : (n - t) / i;
};
class cn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return an(this.subscriptions, e), () => ln(this.subscriptions, e);
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
const q = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, H = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3;
function Ss(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const ho = /* @__PURE__ */ un(() => window.ScrollTimeline !== void 0);
class fo {
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
      if (ho() && s.attachTimeline)
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
class mo extends fo {
  then(e, n) {
    return Promise.all(this.animations).then(e).catch(n);
  }
}
function hn(t, e) {
  return t ? t[e] || t.default || t : void 0;
}
const _e = 2e4;
function Ps(t) {
  let e = 0;
  const n = 50;
  let i = t.next(e);
  for (; !i.done && e < _e; )
    e += n, i = t.next(e);
  return e >= _e ? 1 / 0 : e;
}
function fn(t) {
  return typeof t == "function";
}
function _n(t, e) {
  t.timeline = e, t.onfinish = null;
}
const dn = (t) => Array.isArray(t) && typeof t[0] == "number", po = {
  linearEasing: void 0
};
function go(t, e) {
  const n = /* @__PURE__ */ un(t);
  return () => {
    var i;
    return (i = po[e]) !== null && i !== void 0 ? i : n();
  };
}
const Zt = /* @__PURE__ */ go(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), ws = (t, e, n = 10) => {
  let i = "";
  const s = Math.max(Math.round(e / n), 2);
  for (let o = 0; o < s; o++)
    i += t(/* @__PURE__ */ yt(0, s - 1, o)) + ", ";
  return `linear(${i.substring(0, i.length - 2)})`;
};
function As(t) {
  return !!(typeof t == "function" && Zt() || !t || typeof t == "string" && (t in Ne || Zt()) || dn(t) || Array.isArray(t) && t.every(As));
}
const wt = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`, Ne = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ wt([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ wt([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ wt([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ wt([0.33, 1.53, 0.69, 0.99])
};
function Vs(t, e) {
  if (t)
    return typeof t == "function" && Zt() ? ws(t, e) : dn(t) ? wt(t) : Array.isArray(t) ? t.map((n) => Vs(n, e) || Ne.easeOut) : Ne[t];
}
const Kt = [
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
], Nn = {
  value: null
};
function yo(t, e) {
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
      s = !0, [n, i] = [i, n], n.forEach(u), e && Nn.value && Nn.value.frameloop[e].push(l), l = 0, n.clear(), s = !1, o && (o = !1, c.process(h));
    }
  };
  return c;
}
const vo = 40;
function Ms(t, e) {
  let n = !1, i = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, r = Kt.reduce((g, T) => (g[T] = yo(o, e ? T : void 0), g), {}), { read: a, resolveKeyframes: l, update: u, preRender: c, render: h, postRender: f } = r, d = () => {
    const g = performance.now();
    n = !1, s.delta = i ? 1e3 / 60 : Math.max(Math.min(g - s.timestamp, vo), 1), s.timestamp = g, s.isProcessing = !0, a.process(s), l.process(s), u.process(s), c.process(s), h.process(s), f.process(s), s.isProcessing = !1, n && e && (i = !1, t(d));
  }, m = () => {
    n = !0, i = !0, s.isProcessing || t(d);
  };
  return { schedule: Kt.reduce((g, T) => {
    const b = r[T];
    return g[T] = (w, v = !1, S = !1) => (n || m(), b.schedule(w, v, S)), g;
  }, {}), cancel: (g) => {
    for (let T = 0; T < Kt.length; T++)
      r[Kt[T]].cancel(g);
  }, state: s, steps: r };
}
const { schedule: V, cancel: tt, state: k, steps: he } = /* @__PURE__ */ Ms(typeof requestAnimationFrame < "u" ? requestAnimationFrame : _, !0), { schedule: mn } = /* @__PURE__ */ Ms(queueMicrotask, !1);
let Ht;
function To() {
  Ht = void 0;
}
const G = {
  now: () => (Ht === void 0 && G.set(k.isProcessing || co.useManualTiming ? k.timestamp : performance.now()), Ht),
  set: (t) => {
    Ht = t, queueMicrotask(To);
  }
}, K = {
  x: !1,
  y: !1
};
function Ds() {
  return K.x || K.y;
}
function bo(t) {
  return t === "x" || t === "y" ? K[t] ? null : (K[t] = !0, () => {
    K[t] = !1;
  }) : K.x || K.y ? null : (K.x = K.y = !0, () => {
    K.x = K.y = !1;
  });
}
function xo(t, e, n) {
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
function Cs(t, e) {
  const n = xo(t), i = new AbortController(), s = {
    passive: !0,
    ...e,
    signal: i.signal
  };
  return [n, s, () => i.abort()];
}
function Un(t) {
  return !(t.pointerType === "touch" || Ds());
}
function So(t, e, n = {}) {
  const [i, s, o] = Cs(t, n), r = (a) => {
    if (!Un(a))
      return;
    const { target: l } = a, u = e(l, a);
    if (typeof u != "function" || !l)
      return;
    const c = (h) => {
      Un(h) && (u(h), l.removeEventListener("pointerleave", c));
    };
    l.addEventListener("pointerleave", c, s);
  };
  return i.forEach((a) => {
    a.addEventListener("pointerenter", r, s);
  }), o;
}
function Wn(t, e) {
  const n = `${e}PointerCapture`;
  if (t.target instanceof Element && n in t.target && t.pointerId !== void 0)
    try {
      t.target[n](t.pointerId);
    } catch {
    }
}
const Rs = (t, e) => e ? t === e ? !0 : Rs(t, e.parentElement) : !1, pn = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, Po = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function wo(t) {
  return Po.has(t.tagName) || t.tabIndex !== -1;
}
const At = /* @__PURE__ */ new WeakSet();
function Kn(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function fe(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const Ao = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const i = Kn(() => {
    if (At.has(n))
      return;
    fe(n, "down");
    const s = Kn(() => {
      fe(n, "up");
    }), o = () => fe(n, "cancel");
    n.addEventListener("keyup", s, e), n.addEventListener("blur", o, e);
  });
  n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e);
};
function Gn(t) {
  return pn(t) && !Ds();
}
function Vo(t, e, n = {}) {
  const [i, s, o] = Cs(t, n), r = (a) => {
    const l = a.currentTarget;
    if (!l || !Gn(a) || At.has(l))
      return;
    At.add(l), Wn(a, "set");
    const u = e(l, a), c = (d, m) => {
      l.removeEventListener("pointerup", h), l.removeEventListener("pointercancel", f), Wn(d, "release"), !(!Gn(d) || !At.has(l)) && (At.delete(l), typeof u == "function" && u(d, { success: m }));
    }, h = (d) => {
      (d.isTrusted ? Mo(d, l instanceof Element ? l.getBoundingClientRect() : {
        left: 0,
        top: 0,
        right: window.innerWidth,
        bottom: window.innerHeight
      }) : !1) ? c(d, !1) : c(d, !(l instanceof Element) || Rs(l, d.target));
    }, f = (d) => {
      c(d, !1);
    };
    l.addEventListener("pointerup", h, s), l.addEventListener("pointercancel", f, s), l.addEventListener("lostpointercapture", f, s);
  };
  return i.forEach((a) => {
    a = n.useGlobalTarget ? window : a;
    let l = !1;
    a instanceof HTMLElement && (l = !0, !wo(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0)), a.addEventListener("pointerdown", r, s), l && a.addEventListener("focus", (u) => Ao(u, s), s);
  }), o;
}
function Mo(t, e) {
  return t.clientX < e.left || t.clientX > e.right || t.clientY < e.top || t.clientY > e.bottom;
}
const $n = 30, Do = (t) => !isNaN(parseFloat(t));
class Co {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(e, n = {}) {
    this.version = "12.5.0", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i, s = !0) => {
      const o = G.now();
      this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), s && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = G.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Do(this.current));
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
    this.events[e] || (this.events[e] = new cn());
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
    const e = G.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > $n)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, $n);
    return Ss(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function Et(t, e) {
  return new Co(t, e);
}
const Es = bt({ strict: !1 }), zn = {
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
for (const t in zn)
  vt[t] = {
    isEnabled: (e) => zn[t].some((n) => !!e[n])
  };
function Ro(t) {
  for (const e in t)
    vt[e] = {
      ...vt[e],
      ...t[e]
    };
}
const Eo = /* @__PURE__ */ new Set([
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
function Jt(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Eo.has(t);
}
let Ls = (t) => !Jt(t);
function Lo(t) {
  t && (Ls = (e) => e.startsWith("on") ? !Jt(e) : t(e));
}
try {
  Lo(require("@emotion/is-prop-valid").default);
} catch {
}
function ko(t, e, n) {
  const i = {};
  for (const s in t)
    s === "values" && typeof t.values == "object" || (Ls(s) || n === !0 && Jt(s) || !e && !Jt(s) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && s.startsWith("onDrag")) && (i[s] = t[s]);
  return i;
}
function Bo(t) {
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
const se = /* @__PURE__ */ bt({});
function re(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Lt(t) {
  return typeof t == "string" || Array.isArray(t);
}
const gn = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], yn = ["initial", ...gn];
function oe(t) {
  return re(t.animate) || yn.some((e) => Lt(t[e]));
}
function ks(t) {
  return !!(oe(t) || t.variants);
}
function Oo(t, e) {
  if (oe(t)) {
    const { initial: n, animate: i } = t;
    return {
      initial: n === !1 || Lt(n) ? n : void 0,
      animate: Lt(i) ? i : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function Fo(t) {
  const { initial: e, animate: n } = Oo(t, I(se));
  return ie(() => ({ initial: e, animate: n }), [qn(e), qn(n)]);
}
function qn(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const jo = Symbol.for("motionComponentSymbol");
function ht(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Io(t, e, n) {
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
const vn = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), _o = "framerAppearId", Bs = "data-" + vn(_o), Os = bt({});
function No(t, e, n, i, s) {
  var o, r;
  const { visualElement: a } = I(se), l = I(Es), u = I(on), c = I(bs).reducedMotion, h = Q(null);
  i = i || l.renderer, !h.current && i && (h.current = i(t, {
    visualState: e,
    parent: a,
    props: n,
    presenceContext: u,
    blockInitialAnimation: u ? u.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const f = h.current, d = I(Os);
  f && !f.projection && s && (f.type === "html" || f.type === "svg") && Uo(h.current, n, s, d);
  const m = Q(!1);
  no(() => {
    f && m.current && f.update(n, u);
  });
  const p = n[Bs], y = Q(!!p && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, p)) && ((r = window.MotionHasOptimisedAnimation) === null || r === void 0 ? void 0 : r.call(window, p)));
  return lo(() => {
    f && (m.current = !0, window.MotionIsMounted = !0, f.updateFeatures(), mn.render(f.render), y.current && f.animationState && f.animationState.animateChanges());
  }), It(() => {
    f && (!y.current && f.animationState && f.animationState.animateChanges(), y.current && (queueMicrotask(() => {
      var g;
      (g = window.MotionHandoffMarkAsComplete) === null || g === void 0 || g.call(window, p);
    }), y.current = !1));
  }), f;
}
function Uo(t, e, n, i) {
  const { layoutId: s, layout: o, drag: r, dragConstraints: a, layoutScroll: l, layoutRoot: u } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : Fs(t.parent)), t.projection.setOptions({
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
function Fs(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : Fs(t.parent);
}
function Wo({ preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: i, Component: s }) {
  var o, r;
  t && Ro(t);
  function a(u, c) {
    let h;
    const f = {
      ...I(bs),
      ...u,
      layoutId: Ko(u)
    }, { isStatic: d } = f, m = Fo(u), p = i(u, d);
    if (!d && rn) {
      Go();
      const y = $o(f);
      h = y.MeasureLayout, m.visualElement = No(s, p, f, e, y.ProjectionNode);
    }
    return Ie(se.Provider, { value: m, children: [h && m.visualElement ? J(h, { visualElement: m.visualElement, ...f }) : null, n(s, u, Io(p, m.visualElement, c), p, d, m.visualElement)] });
  }
  a.displayName = `motion.${typeof s == "string" ? s : `create(${(r = (o = s.displayName) !== null && o !== void 0 ? o : s.name) !== null && r !== void 0 ? r : ""})`}`;
  const l = io(a);
  return l[jo] = s, l;
}
function Ko({ layoutId: t }) {
  const e = I(Ts).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Go(t, e) {
  I(Es).strict;
}
function $o(t) {
  const { drag: e, layout: n } = vt;
  if (!e && !n)
    return {};
  const i = { ...e, ...n };
  return {
    MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? i.MeasureLayout : void 0,
    ProjectionNode: i.ProjectionNode
  };
}
const js = (t) => (e) => typeof e == "string" && e.startsWith(t), Tn = /* @__PURE__ */ js("--"), zo = /* @__PURE__ */ js("var(--"), bn = (t) => zo(t) ? qo.test(t.split("/*")[0].trim()) : !1, qo = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, kt = {};
function Ho(t) {
  for (const e in t)
    kt[e] = t[e], Tn(e) && (kt[e].isCSSVariable = !0);
}
const xt = [
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
], lt = new Set(xt);
function Is(t, { layout: e, layoutId: n }) {
  return lt.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!kt[t] || t === "opacity");
}
const O = (t) => !!(t && t.getVelocity), _s = (t, e) => e && typeof t == "number" ? e.transform(t) : t, X = (t, e, n) => n > e ? e : n < t ? t : n, St = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, Bt = {
  ...St,
  transform: (t) => X(0, 1, t)
}, Gt = {
  ...St,
  default: 1
}, _t = (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), Z = /* @__PURE__ */ _t("deg"), $ = /* @__PURE__ */ _t("%"), P = /* @__PURE__ */ _t("px"), Xo = /* @__PURE__ */ _t("vh"), Yo = /* @__PURE__ */ _t("vw"), Hn = {
  ...$,
  parse: (t) => $.parse(t) / 100,
  transform: (t) => $.transform(t * 100)
}, Zo = {
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
}, Jo = {
  rotate: Z,
  rotateX: Z,
  rotateY: Z,
  rotateZ: Z,
  scale: Gt,
  scaleX: Gt,
  scaleY: Gt,
  scaleZ: Gt,
  skew: Z,
  skewX: Z,
  skewY: Z,
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
  originX: Hn,
  originY: Hn,
  originZ: P
}, Xn = {
  ...St,
  transform: Math.round
}, xn = {
  ...Zo,
  ...Jo,
  zIndex: Xn,
  size: P,
  // SVG
  fillOpacity: Bt,
  strokeOpacity: Bt,
  numOctaves: Xn
}, Qo = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, ta = xt.length;
function ea(t, e, n) {
  let i = "", s = !0;
  for (let o = 0; o < ta; o++) {
    const r = xt[o], a = t[r];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = _s(a, xn[r]);
      if (!l) {
        s = !1;
        const c = Qo[r] || r;
        i += `${c}(${u}) `;
      }
      n && (e[r] = u);
    }
  }
  return i = i.trim(), n ? i = n(e, s ? "" : i) : s && (i = "none"), i;
}
function Sn(t, e, n) {
  const { style: i, vars: s, transformOrigin: o } = t;
  let r = !1, a = !1;
  for (const l in e) {
    const u = e[l];
    if (lt.has(l)) {
      r = !0;
      continue;
    } else if (Tn(l)) {
      s[l] = u;
      continue;
    } else {
      const c = _s(u, xn[l]);
      l.startsWith("origin") ? (a = !0, o[l] = c) : i[l] = c;
    }
  }
  if (e.transform || (r || n ? i.transform = ea(e, t.transform, n) : i.transform && (i.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    i.transformOrigin = `${l} ${u} ${c}`;
  }
}
const Pn = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Ns(t, e, n) {
  for (const i in e)
    !O(e[i]) && !Is(i, n) && (t[i] = e[i]);
}
function na({ transformTemplate: t }, e) {
  return ie(() => {
    const n = Pn();
    return Sn(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function ia(t, e) {
  const n = t.style || {}, i = {};
  return Ns(i, n, t), Object.assign(i, na(t, e)), i;
}
function sa(t, e) {
  const n = {}, i = ia(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n;
}
const ra = [
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
function wn(t) {
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
      !!(ra.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
const oa = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, aa = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function la(t, e, n = 1, i = 0, s = !0) {
  t.pathLength = 1;
  const o = s ? oa : aa;
  t[o.offset] = P.transform(-i);
  const r = P.transform(e), a = P.transform(n);
  t[o.array] = `${r} ${a}`;
}
function Yn(t, e, n) {
  return typeof t == "string" ? t : P.transform(e + n * t);
}
function ua(t, e, n) {
  const i = Yn(e, t.x, t.width), s = Yn(n, t.y, t.height);
  return `${i} ${s}`;
}
function An(t, {
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
  if (Sn(t, u, h), c) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: f, style: d, dimensions: m } = t;
  f.transform && (m && (d.transform = f.transform), delete f.transform), m && (s !== void 0 || o !== void 0 || d.transform) && (d.transformOrigin = ua(m, s !== void 0 ? s : 0.5, o !== void 0 ? o : 0.5)), e !== void 0 && (f.x = e), n !== void 0 && (f.y = n), i !== void 0 && (f.scale = i), r !== void 0 && la(f, r, a, l, !1);
}
const Us = () => ({
  ...Pn(),
  attrs: {}
}), Vn = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function ca(t, e, n, i) {
  const s = ie(() => {
    const o = Us();
    return An(o, e, Vn(i), t.transformTemplate), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    Ns(o, t.style, t), s.style = { ...o, ...s.style };
  }
  return s;
}
function ha(t = !1) {
  return (n, i, s, { latestValues: o }, r) => {
    const l = (wn(n) ? ca : sa)(i, o, r, n), u = ko(i, typeof n == "string", t), c = n !== vs ? { ...u, ...l, ref: s } : {}, { children: h } = i, f = ie(() => O(h) ? h.get() : h, [h]);
    return so(n, {
      ...c,
      children: f
    });
  };
}
function Zn(t) {
  const e = [{}, {}];
  return t == null || t.values.forEach((n, i) => {
    e[0][i] = n.get(), e[1][i] = n.getVelocity();
  }), e;
}
function Mn(t, e, n, i) {
  if (typeof e == "function") {
    const [s, o] = Zn(i);
    e = e(n !== void 0 ? n : t.custom, s, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [s, o] = Zn(i);
    e = e(n !== void 0 ? n : t.custom, s, o);
  }
  return e;
}
const Ue = (t) => Array.isArray(t), fa = (t) => !!(t && typeof t == "object" && t.mix && t.toValue), da = (t) => Ue(t) ? t[t.length - 1] || 0 : t;
function Xt(t) {
  const e = O(t) ? t.get() : t;
  return fa(e) ? e.toValue() : e;
}
function ma({ scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: n }, i, s, o) {
  const r = {
    latestValues: pa(i, s, o, t),
    renderState: e()
  };
  return n && (r.onMount = (a) => n({ props: i, current: a, ...r }), r.onUpdate = (a) => n(a)), r;
}
const Ws = (t) => (e, n) => {
  const i = I(se), s = I(on), o = () => ma(t, e, i, s);
  return n ? o() : ao(o);
};
function pa(t, e, n, i) {
  const s = {}, o = i(t, {});
  for (const f in o)
    s[f] = Xt(o[f]);
  let { initial: r, animate: a } = t;
  const l = oe(t), u = ks(t);
  e && u && !l && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || r === !1;
  const h = c ? a : r;
  if (h && typeof h != "boolean" && !re(h)) {
    const f = Array.isArray(h) ? h : [h];
    for (let d = 0; d < f.length; d++) {
      const m = Mn(t, f[d]);
      if (m) {
        const { transitionEnd: p, transition: y, ...g } = m;
        for (const T in g) {
          let b = g[T];
          if (Array.isArray(b)) {
            const w = c ? b.length - 1 : 0;
            b = b[w];
          }
          b !== null && (s[T] = b);
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
    (O(s[r]) || e.style && O(e.style[r]) || Is(r, t) || ((i = n == null ? void 0 : n.getValue(r)) === null || i === void 0 ? void 0 : i.liveStyle) !== void 0) && (o[r] = s[r]);
  return o;
}
const ga = {
  useVisualState: Ws({
    scrapeMotionValuesFromProps: Dn,
    createRenderState: Pn
  })
};
function Ks(t, e) {
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
function Gs(t, { style: e, vars: n }, i, s) {
  Object.assign(t.style, e, s && s.getProjectionStyles(i));
  for (const o in n)
    t.style.setProperty(o, n[o]);
}
const $s = /* @__PURE__ */ new Set([
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
function zs(t, e, n, i) {
  Gs(t, e, void 0, i);
  for (const s in e.attrs)
    t.setAttribute($s.has(s) ? s : vn(s), e.attrs[s]);
}
function qs(t, e, n) {
  const i = Dn(t, e, n);
  for (const s in t)
    if (O(t[s]) || O(e[s])) {
      const o = xt.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      i[o] = t[s];
    }
  return i;
}
const Jn = ["x", "y", "width", "height", "cx", "cy", "r"], ya = {
  useVisualState: Ws({
    scrapeMotionValuesFromProps: qs,
    createRenderState: Us,
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
        for (let a = 0; a < Jn.length; a++) {
          const l = Jn[a];
          t[l] !== e[l] && (r = !0);
        }
      r && V.read(() => {
        Ks(n, i), V.render(() => {
          An(i, s, Vn(n.tagName), t.transformTemplate), zs(n, i);
        });
      });
    }
  })
};
function va(t, e) {
  return function(i, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const r = {
      ...wn(i) ? ya : ga,
      preloadedFeatures: t,
      useRender: ha(s),
      createVisualElement: e,
      Component: i
    };
    return Wo(r);
  };
}
function Ot(t, e, n) {
  const i = t.getProps();
  return Mn(i, e, n !== void 0 ? n : i.custom, t);
}
const Hs = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...xt
]);
function Ta(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Et(n));
}
function ba(t, e) {
  const n = Ot(t, e);
  let { transitionEnd: i = {}, transition: s = {}, ...o } = n || {};
  o = { ...o, ...i };
  for (const r in o) {
    const a = da(o[r]);
    Ta(t, r, a);
  }
}
function xa(t) {
  return !!(O(t) && t.add);
}
function We(t, e) {
  const n = t.getValue("willChange");
  if (xa(n))
    return n.add(e);
}
function Xs(t) {
  return t.props[Bs];
}
const Ys = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, Sa = 1e-7, Pa = 12;
function wa(t, e, n, i, s) {
  let o, r, a = 0;
  do
    r = e + (n - e) / 2, o = Ys(r, i, s) - t, o > 0 ? n = r : e = r;
  while (Math.abs(o) > Sa && ++a < Pa);
  return r;
}
function Nt(t, e, n, i) {
  if (t === e && n === i)
    return _;
  const s = (o) => wa(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : Ys(s(o), e, i);
}
const Zs = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, Js = (t) => (e) => 1 - t(1 - e), Qs = /* @__PURE__ */ Nt(0.33, 1.53, 0.69, 0.99), Cn = /* @__PURE__ */ Js(Qs), tr = /* @__PURE__ */ Zs(Cn), er = (t) => (t *= 2) < 1 ? 0.5 * Cn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), Rn = (t) => 1 - Math.sin(Math.acos(t)), nr = Js(Rn), ir = Zs(Rn), sr = (t) => /^0[^.\s]+$/u.test(t);
function Aa(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || sr(t) : !0;
}
const Mt = (t) => Math.round(t * 1e5) / 1e5, En = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Va(t) {
  return t == null;
}
const Ma = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Ln = (t, e) => (n) => !!(typeof n == "string" && Ma.test(n) && n.startsWith(t) || e && !Va(n) && Object.prototype.hasOwnProperty.call(n, e)), rr = (t, e, n) => (i) => {
  if (typeof i != "string")
    return i;
  const [s, o, r, a] = i.match(En);
  return {
    [t]: parseFloat(s),
    [e]: parseFloat(o),
    [n]: parseFloat(r),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, Da = (t) => X(0, 255, t), de = {
  ...St,
  transform: (t) => Math.round(Da(t))
}, rt = {
  test: /* @__PURE__ */ Ln("rgb", "red"),
  parse: /* @__PURE__ */ rr("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) => "rgba(" + de.transform(t) + ", " + de.transform(e) + ", " + de.transform(n) + ", " + Mt(Bt.transform(i)) + ")"
};
function Ca(t) {
  let e = "", n = "", i = "", s = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), s = t.substring(4, 5), e += e, n += n, i += i, s += s), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(i, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const Ke = {
  test: /* @__PURE__ */ Ln("#"),
  parse: Ca,
  transform: rt.transform
}, ft = {
  test: /* @__PURE__ */ Ln("hsl", "hue"),
  parse: /* @__PURE__ */ rr("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + $.transform(Mt(e)) + ", " + $.transform(Mt(n)) + ", " + Mt(Bt.transform(i)) + ")"
}, B = {
  test: (t) => rt.test(t) || Ke.test(t) || ft.test(t),
  parse: (t) => rt.test(t) ? rt.parse(t) : ft.test(t) ? ft.parse(t) : Ke.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? rt.transform(t) : ft.transform(t)
}, Ra = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Ea(t) {
  var e, n;
  return isNaN(t) && typeof t == "string" && (((e = t.match(En)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(Ra)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const or = "number", ar = "color", La = "var", ka = "var(", Qn = "${}", Ba = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ft(t) {
  const e = t.toString(), n = [], i = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let o = 0;
  const a = e.replace(Ba, (l) => (B.test(l) ? (i.color.push(o), s.push(ar), n.push(B.parse(l))) : l.startsWith(ka) ? (i.var.push(o), s.push(La), n.push(l)) : (i.number.push(o), s.push(or), n.push(parseFloat(l))), ++o, Qn)).split(Qn);
  return { values: n, split: a, indexes: i, types: s };
}
function lr(t) {
  return Ft(t).values;
}
function ur(t) {
  const { split: e, types: n } = Ft(t), i = e.length;
  return (s) => {
    let o = "";
    for (let r = 0; r < i; r++)
      if (o += e[r], s[r] !== void 0) {
        const a = n[r];
        a === or ? o += Mt(s[r]) : a === ar ? o += B.transform(s[r]) : o += s[r];
      }
    return o;
  };
}
const Oa = (t) => typeof t == "number" ? 0 : t;
function Fa(t) {
  const e = lr(t);
  return ur(t)(e.map(Oa));
}
const et = {
  test: Ea,
  parse: lr,
  createTransformer: ur,
  getAnimatableNone: Fa
}, ja = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Ia(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [i] = n.match(En) || [];
  if (!i)
    return t;
  const s = n.replace(i, "");
  let o = ja.has(e) ? 1 : 0;
  return i !== n && (o *= 100), e + "(" + o + s + ")";
}
const _a = /\b([a-z-]*)\(.*?\)/gu, Ge = {
  ...et,
  getAnimatableNone: (t) => {
    const e = t.match(_a);
    return e ? e.map(Ia).join(" ") : t;
  }
}, Na = {
  ...xn,
  // Color props
  color: B,
  backgroundColor: B,
  outlineColor: B,
  fill: B,
  stroke: B,
  // Border props
  borderColor: B,
  borderTopColor: B,
  borderRightColor: B,
  borderBottomColor: B,
  borderLeftColor: B,
  filter: Ge,
  WebkitFilter: Ge
}, cr = (t) => Na[t];
function hr(t, e) {
  let n = cr(t);
  return n !== Ge && (n = et), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const Ua = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Wa(t, e, n) {
  let i = 0, s;
  for (; i < t.length && !s; ) {
    const o = t[i];
    typeof o == "string" && !Ua.has(o) && Ft(o).values.length && (s = t[i]), i++;
  }
  if (s && n)
    for (const o of e)
      t[o] = hr(n, s);
}
const ot = (t) => t * 180 / Math.PI, $e = (t) => {
  const e = ot(Math.atan2(t[1], t[0]));
  return ze(e);
}, Ka = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: $e,
  rotateZ: $e,
  skewX: (t) => ot(Math.atan(t[1])),
  skewY: (t) => ot(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, ze = (t) => (t = t % 360, t < 0 && (t += 360), t), ti = $e, ei = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), ni = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), Ga = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: ei,
  scaleY: ni,
  scale: (t) => (ei(t) + ni(t)) / 2,
  rotateX: (t) => ze(ot(Math.atan2(t[6], t[5]))),
  rotateY: (t) => ze(ot(Math.atan2(-t[2], t[0]))),
  rotateZ: ti,
  rotate: ti,
  skewX: (t) => ot(Math.atan(t[4])),
  skewY: (t) => ot(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function ii(t) {
  return t.includes("scale") ? 1 : 0;
}
function qe(t, e) {
  if (!t || t === "none")
    return ii(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let i, s;
  if (n)
    i = Ga, s = n;
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    i = Ka, s = a;
  }
  if (!s)
    return ii(e);
  const o = i[e], r = s[1].split(",").map(za);
  return typeof o == "function" ? o(r) : r[o];
}
const $a = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return qe(n, e);
};
function za(t) {
  return parseFloat(t.trim());
}
const si = (t) => t === St || t === P, qa = /* @__PURE__ */ new Set(["x", "y", "z"]), Ha = xt.filter((t) => !qa.has(t));
function Xa(t) {
  const e = [];
  return Ha.forEach((n) => {
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
  x: (t, { transform: e }) => qe(e, "x"),
  y: (t, { transform: e }) => qe(e, "y")
};
Tt.translateX = Tt.x;
Tt.translateY = Tt.y;
const at = /* @__PURE__ */ new Set();
let He = !1, Xe = !1;
function fr() {
  if (Xe) {
    const t = Array.from(at).filter((i) => i.needsMeasurement), e = new Set(t.map((i) => i.element)), n = /* @__PURE__ */ new Map();
    e.forEach((i) => {
      const s = Xa(i);
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
  Xe = !1, He = !1, at.forEach((t) => t.complete()), at.clear();
}
function dr() {
  at.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (Xe = !0);
  });
}
function Ya() {
  dr(), fr();
}
class kn {
  constructor(e, n, i, s, o, r = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = i, this.motionValue = s, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (at.add(this), He || (He = !0, V.read(dr), V.resolveKeyframes(fr))) : (this.readKeyframes(), this.complete());
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
const mr = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t), Za = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Ja(t) {
  const e = Za.exec(t);
  if (!e)
    return [,];
  const [, n, i, s] = e;
  return [`--${n ?? i}`, s];
}
function pr(t, e, n = 1) {
  const [i, s] = Ja(t);
  if (!i)
    return;
  const o = window.getComputedStyle(e).getPropertyValue(i);
  if (o) {
    const r = o.trim();
    return mr(r) ? parseFloat(r) : r;
  }
  return bn(s) ? pr(s, e, n + 1) : s;
}
const gr = (t) => (e) => e.test(t), Qa = {
  test: (t) => t === "auto",
  parse: (t) => t
}, yr = [St, P, $, Z, Yo, Xo, Qa], ri = (t) => yr.find(gr(t));
class vr extends kn {
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
        const c = pr(u, n.current);
        c !== void 0 && (e[l] = c), l === e.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !Hs.has(i) || e.length !== 2)
      return;
    const [s, o] = e, r = ri(s), a = ri(o);
    if (r !== a)
      if (si(r) && si(a))
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
      Aa(e[s]) && i.push(s);
    i.length && Wa(e, i, n);
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
const oi = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(et.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function tl(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function el(t, e, n, i) {
  const s = t[0];
  if (s === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const o = t[t.length - 1], r = oi(s, e), a = oi(o, e);
  return !r || !a ? !1 : tl(t) || (n === "spring" || fn(n)) && i;
}
const nl = (t) => t !== null;
function ae(t, { repeat: e, repeatType: n = "loop" }, i) {
  const s = t.filter(nl), o = e && n !== "loop" && e % 2 === 1 ? 0 : s.length - 1;
  return !o || i === void 0 ? s[o] : i;
}
const il = 40;
class Tr {
  constructor({ autoplay: e = !0, delay: n = 0, type: i = "keyframes", repeat: s = 0, repeatDelay: o = 0, repeatType: r = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = G.now(), this.options = {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > il ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Ya(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(e, n) {
    this.resolvedAt = G.now(), this.hasAttemptedResolve = !0;
    const { name: i, type: s, velocity: o, delay: r, onComplete: a, onUpdate: l, isGenerator: u } = this.options;
    if (!u && !el(e, i, s, o))
      if (r)
        this.options.duration = 0;
      else {
        l && l(ae(e, this.options, n)), a && a(), this.resolveFinishedPromise();
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
function me(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function sl({ hue: t, saturation: e, lightness: n, alpha: i }) {
  t /= 360, e /= 100, n /= 100;
  let s = 0, o = 0, r = 0;
  if (!e)
    s = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    s = me(l, a, t + 1 / 3), o = me(l, a, t), r = me(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: i
  };
}
function Qt(t, e) {
  return (n) => n > 0 ? e : t;
}
const pe = (t, e, n) => {
  const i = t * t, s = n * (e * e - i) + i;
  return s < 0 ? 0 : Math.sqrt(s);
}, rl = [Ke, rt, ft], ol = (t) => rl.find((e) => e.test(t));
function ai(t) {
  const e = ol(t);
  if (!e)
    return !1;
  let n = e.parse(t);
  return e === ft && (n = sl(n)), n;
}
const li = (t, e) => {
  const n = ai(t), i = ai(e);
  if (!n || !i)
    return Qt(t, e);
  const s = { ...n };
  return (o) => (s.red = pe(n.red, i.red, o), s.green = pe(n.green, i.green, o), s.blue = pe(n.blue, i.blue, o), s.alpha = M(n.alpha, i.alpha, o), rt.transform(s));
}, al = (t, e) => (n) => e(t(n)), Ut = (...t) => t.reduce(al), Ye = /* @__PURE__ */ new Set(["none", "hidden"]);
function ll(t, e) {
  return Ye.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function ul(t, e) {
  return (n) => M(t, e, n);
}
function Bn(t) {
  return typeof t == "number" ? ul : typeof t == "string" ? bn(t) ? Qt : B.test(t) ? li : fl : Array.isArray(t) ? br : typeof t == "object" ? B.test(t) ? li : cl : Qt;
}
function br(t, e) {
  const n = [...t], i = n.length, s = t.map((o, r) => Bn(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < i; r++)
      n[r] = s[r](o);
    return n;
  };
}
function cl(t, e) {
  const n = { ...t, ...e }, i = {};
  for (const s in n)
    t[s] !== void 0 && e[s] !== void 0 && (i[s] = Bn(t[s])(t[s], e[s]));
  return (s) => {
    for (const o in i)
      n[o] = i[o](s);
    return n;
  };
}
function hl(t, e) {
  var n;
  const i = [], s = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < e.values.length; o++) {
    const r = e.types[o], a = t.indexes[r][s[r]], l = (n = t.values[a]) !== null && n !== void 0 ? n : 0;
    i[o] = l, s[r]++;
  }
  return i;
}
const fl = (t, e) => {
  const n = et.createTransformer(e), i = Ft(t), s = Ft(e);
  return i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length ? Ye.has(t) && !s.values.length || Ye.has(e) && !i.values.length ? ll(t, e) : Ut(br(hl(i, s), s.values), n) : Qt(t, e);
};
function xr(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? M(t, e, n) : Bn(t)(t, e);
}
const dl = 5;
function Sr(t, e, n) {
  const i = Math.max(e - dl, 0);
  return Ss(n - t(i), e - i);
}
const D = {
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
}, ui = 1e-3;
function ml({ duration: t = D.duration, bounce: e = D.bounce, velocity: n = D.velocity, mass: i = D.mass }) {
  let s, o, r = 1 - e;
  r = X(D.minDamping, D.maxDamping, r), t = X(D.minDuration, D.maxDuration, /* @__PURE__ */ H(t)), r < 1 ? (s = (u) => {
    const c = u * r, h = c * t, f = c - n, d = Ze(u, r), m = Math.exp(-h);
    return ui - f / d * m;
  }, o = (u) => {
    const h = u * r * t, f = h * n + n, d = Math.pow(r, 2) * Math.pow(u, 2) * t, m = Math.exp(-h), p = Ze(Math.pow(u, 2), r);
    return (-s(u) + ui > 0 ? -1 : 1) * ((f - d) * m) / p;
  }) : (s = (u) => {
    const c = Math.exp(-u * t), h = (u - n) * t + 1;
    return -1e-3 + c * h;
  }, o = (u) => {
    const c = Math.exp(-u * t), h = (n - u) * (t * t);
    return c * h;
  });
  const a = 5 / t, l = gl(s, o, a);
  if (t = /* @__PURE__ */ q(t), isNaN(l))
    return {
      stiffness: D.stiffness,
      damping: D.damping,
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
const pl = 12;
function gl(t, e, n) {
  let i = n;
  for (let s = 1; s < pl; s++)
    i = i - t(i) / e(i);
  return i;
}
function Ze(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const yl = ["duration", "bounce"], vl = ["stiffness", "damping", "mass"];
function ci(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Tl(t) {
  let e = {
    velocity: D.velocity,
    stiffness: D.stiffness,
    damping: D.damping,
    mass: D.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!ci(t, vl) && ci(t, yl))
    if (t.visualDuration) {
      const n = t.visualDuration, i = 2 * Math.PI / (n * 1.2), s = i * i, o = 2 * X(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
      e = {
        ...e,
        mass: D.mass,
        stiffness: s,
        damping: o
      };
    } else {
      const n = ml(t);
      e = {
        ...e,
        ...n,
        mass: D.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function Pr(t = D.visualDuration, e = D.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: i, restDelta: s } = n;
  const o = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: l, damping: u, mass: c, duration: h, velocity: f, isResolvedFromDuration: d } = Tl({
    ...n,
    velocity: -/* @__PURE__ */ H(n.velocity || 0)
  }), m = f || 0, p = u / (2 * Math.sqrt(l * c)), y = r - o, g = /* @__PURE__ */ H(Math.sqrt(l / c)), T = Math.abs(y) < 5;
  i || (i = T ? D.restSpeed.granular : D.restSpeed.default), s || (s = T ? D.restDelta.granular : D.restDelta.default);
  let b;
  if (p < 1) {
    const v = Ze(g, p);
    b = (S) => {
      const A = Math.exp(-p * g * S);
      return r - A * ((m + p * g * y) / v * Math.sin(v * S) + y * Math.cos(v * S));
    };
  } else if (p === 1)
    b = (v) => r - Math.exp(-g * v) * (y + (m + g * y) * v);
  else {
    const v = g * Math.sqrt(p * p - 1);
    b = (S) => {
      const A = Math.exp(-p * g * S), x = Math.min(v * S, 300);
      return r - A * ((m + p * g * y) * Math.sinh(x) + v * y * Math.cosh(x)) / v;
    };
  }
  const w = {
    calculatedDuration: d && h || null,
    next: (v) => {
      const S = b(v);
      if (d)
        a.done = v >= h;
      else {
        let A = 0;
        p < 1 && (A = v === 0 ? /* @__PURE__ */ q(m) : Sr(b, v, S));
        const x = Math.abs(A) <= i, C = Math.abs(r - S) <= s;
        a.done = x && C;
      }
      return a.value = a.done ? r : S, a;
    },
    toString: () => {
      const v = Math.min(Ps(w), _e), S = ws((A) => w.next(v * A).value, v, 30);
      return v + "ms " + S;
    }
  };
  return w;
}
function hi({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: i = 325, bounceDamping: s = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const h = t[0], f = {
    done: !1,
    value: h
  }, d = (x) => a !== void 0 && x < a || l !== void 0 && x > l, m = (x) => a === void 0 ? l : l === void 0 || Math.abs(a - x) < Math.abs(l - x) ? a : l;
  let p = n * e;
  const y = h + p, g = r === void 0 ? y : r(y);
  g !== y && (p = g - h);
  const T = (x) => -p * Math.exp(-x / i), b = (x) => g + T(x), w = (x) => {
    const C = T(x), L = b(x);
    f.done = Math.abs(C) <= u, f.value = f.done ? g : L;
  };
  let v, S;
  const A = (x) => {
    d(f.value) && (v = x, S = Pr({
      keyframes: [f.value, m(f.value)],
      velocity: Sr(b, x, f.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: o,
      restDelta: u,
      restSpeed: c
    }));
  };
  return A(0), {
    calculatedDuration: null,
    next: (x) => {
      let C = !1;
      return !S && v === void 0 && (C = !0, w(x), A(x)), v !== void 0 && x >= v ? S.next(x - v) : (!C && w(x), f);
    }
  };
}
const bl = /* @__PURE__ */ Nt(0.42, 0, 1, 1), xl = /* @__PURE__ */ Nt(0, 0, 0.58, 1), wr = /* @__PURE__ */ Nt(0.42, 0, 0.58, 1), Sl = (t) => Array.isArray(t) && typeof t[0] != "number", Pl = {
  linear: _,
  easeIn: bl,
  easeInOut: wr,
  easeOut: xl,
  circIn: Rn,
  circInOut: ir,
  circOut: nr,
  backIn: Cn,
  backInOut: tr,
  backOut: Qs,
  anticipate: er
}, fi = (t) => {
  if (dn(t)) {
    xs(t.length === 4);
    const [e, n, i, s] = t;
    return Nt(e, n, i, s);
  } else if (typeof t == "string")
    return Pl[t];
  return t;
};
function wl(t, e, n) {
  const i = [], s = n || xr, o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = s(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || _ : e;
      a = Ut(l, a);
    }
    i.push(a);
  }
  return i;
}
function Al(t, e, { clamp: n = !0, ease: i, mixer: s } = {}) {
  const o = t.length;
  if (xs(o === e.length), o === 1)
    return () => e[0];
  if (o === 2 && e[0] === e[1])
    return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = wl(e, i, s), l = a.length, u = (c) => {
    if (r && c < t[0])
      return e[0];
    let h = 0;
    if (l > 1)
      for (; h < t.length - 2 && !(c < t[h + 1]); h++)
        ;
    const f = /* @__PURE__ */ yt(t[h], t[h + 1], c);
    return a[h](f);
  };
  return n ? (c) => u(X(t[0], t[o - 1], c)) : u;
}
function Vl(t, e) {
  const n = t[t.length - 1];
  for (let i = 1; i <= e; i++) {
    const s = /* @__PURE__ */ yt(0, e, i);
    t.push(M(n, 1, s));
  }
}
function Ml(t) {
  const e = [0];
  return Vl(e, t.length - 1), e;
}
function Dl(t, e) {
  return t.map((n) => n * e);
}
function Cl(t, e) {
  return t.map(() => e || wr).splice(0, t.length - 1);
}
function te({ duration: t = 300, keyframes: e, times: n, ease: i = "easeInOut" }) {
  const s = Sl(i) ? i.map(fi) : fi(i), o = {
    done: !1,
    value: e[0]
  }, r = Dl(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : Ml(e),
    t
  ), a = Al(r, e, {
    ease: Array.isArray(s) ? s : Cl(e, s)
  });
  return {
    calculatedDuration: t,
    next: (l) => (o.value = a(l), o.done = l >= t, o)
  };
}
const Rl = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: () => V.update(e, !0),
    stop: () => tt(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => k.isProcessing ? k.timestamp : G.now()
  };
}, El = {
  decay: hi,
  inertia: hi,
  tween: te,
  keyframes: te,
  spring: Pr
}, Ll = (t) => t / 100;
class On extends Tr {
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
    const { type: n = "keyframes", repeat: i = 0, repeatDelay: s = 0, repeatType: o, velocity: r = 0 } = this.options, a = fn(n) ? n : El[n] || te;
    let l, u;
    a !== te && typeof e[0] != "number" && (l = Ut(Ll, xr(e[0], e[1])), e = [0, 100]);
    const c = a({ ...this.options, keyframes: e });
    o === "mirror" && (u = a({
      ...this.options,
      keyframes: [...e].reverse(),
      velocity: -r
    })), c.calculatedDuration === null && (c.calculatedDuration = Ps(c));
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
      const { keyframes: x } = this.options;
      return { done: !0, value: x[x.length - 1] };
    }
    const { finalKeyframe: s, generator: o, mirroredGenerator: r, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: u, totalDuration: c, resolvedDuration: h } = i;
    if (this.startTime === null)
      return o.next(0);
    const { delay: f, repeat: d, repeatType: m, repeatDelay: p, onUpdate: y } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - c / this.speed, this.startTime)), n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
    const g = this.currentTime - f * (this.speed >= 0 ? 1 : -1), T = this.speed >= 0 ? g < 0 : g > c;
    this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let b = this.currentTime, w = o;
    if (d) {
      const x = Math.min(this.currentTime, c) / h;
      let C = Math.floor(x), L = x % 1;
      !L && x >= 1 && (L = 1), L === 1 && C--, C = Math.min(C, d + 1), !!(C % 2) && (m === "reverse" ? (L = 1 - L, p && (L -= p / h)) : m === "mirror" && (w = r)), b = X(0, 1, L) * h;
    }
    const v = T ? { done: !1, value: l[0] } : w.next(b);
    a && (v.value = a(v.value));
    let { done: S } = v;
    !T && u !== null && (S = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const A = this.holdTime === null && (this.state === "finished" || this.state === "running" && S);
    return A && s !== void 0 && (v.value = ae(l, this.options, s)), y && y(v.value), A && this.finish(), v;
  }
  get duration() {
    const { resolved: e } = this;
    return e ? /* @__PURE__ */ H(e.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ H(this.currentTime);
  }
  set time(e) {
    e = /* @__PURE__ */ q(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = /* @__PURE__ */ H(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: e = Rl, onPlay: n, startTime: i } = this.options;
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
const kl = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function Bl(t, e, n, { delay: i = 0, duration: s = 300, repeat: o = 0, repeatType: r = "loop", ease: a = "easeInOut", times: l } = {}) {
  const u = { [e]: n };
  l && (u.offset = l);
  const c = Vs(a, s);
  return Array.isArray(c) && (u.easing = c), t.animate(u, {
    delay: i,
    duration: s,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal"
  });
}
const Ol = /* @__PURE__ */ un(() => Object.hasOwnProperty.call(Element.prototype, "animate")), ee = 10, Fl = 2e4;
function jl(t) {
  return fn(t.type) || t.type === "spring" || !As(t.ease);
}
function Il(t, e) {
  const n = new On({
    ...e,
    keyframes: t,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let i = { done: !1, value: t[0] };
  const s = [];
  let o = 0;
  for (; !i.done && o < Fl; )
    i = n.sample(o), s.push(i.value), o += ee;
  return {
    times: void 0,
    keyframes: s,
    duration: o - ee,
    ease: "linear"
  };
}
const Ar = {
  anticipate: er,
  backInOut: tr,
  circInOut: ir
};
function _l(t) {
  return t in Ar;
}
class di extends Tr {
  constructor(e) {
    super(e);
    const { name: n, motionValue: i, element: s, keyframes: o } = this.options;
    this.resolver = new vr(o, (r, a) => this.onKeyframesResolved(r, a), n, i, s), this.resolver.scheduleResolve();
  }
  initPlayback(e, n) {
    let { duration: i = 300, times: s, ease: o, type: r, motionValue: a, name: l, startTime: u } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof o == "string" && Zt() && _l(o) && (o = Ar[o]), jl(this.options)) {
      const { onComplete: h, onUpdate: f, motionValue: d, element: m, ...p } = this.options, y = Il(e, p);
      e = y.keyframes, e.length === 1 && (e[1] = e[0]), i = y.duration, s = y.times, o = y.ease, r = "keyframes";
    }
    const c = Bl(a.owner.current, l, e, { ...this.options, duration: i, times: s, ease: o });
    return c.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (_n(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
      const { onComplete: h } = this.options;
      a.set(ae(e, this.options, n)), h && h(), this.cancel(), this.resolveFinishedPromise();
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
    return /* @__PURE__ */ H(n);
  }
  get time() {
    const { resolved: e } = this;
    if (!e)
      return 0;
    const { animation: n } = e;
    return /* @__PURE__ */ H(n.currentTime || 0);
  }
  set time(e) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: i } = n;
    i.currentTime = /* @__PURE__ */ q(e);
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
      _n(i, e);
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
      const { motionValue: u, onUpdate: c, onComplete: h, element: f, ...d } = this.options, m = new On({
        ...d,
        keyframes: i,
        duration: s,
        type: o,
        ease: r,
        times: a,
        isGenerator: !0
      }), p = /* @__PURE__ */ q(this.time);
      u.setWithVelocity(m.sample(p - ee).value, m.sample(p).value, ee);
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
    return Ol() && i && kl.has(i) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !u && !s && o !== "mirror" && r !== 0 && a !== "inertia";
  }
}
const Nl = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Ul = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Wl = {
  type: "keyframes",
  duration: 0.8
}, Kl = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Gl = (t, { keyframes: e }) => e.length > 2 ? Wl : lt.has(t) ? t.startsWith("scale") ? Ul(e[1]) : Nl : Kl;
function $l({ when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: s, repeat: o, repeatType: r, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const Fn = (t, e, n, i = {}, s, o) => (r) => {
  const a = hn(i, t) || {}, l = a.delay || i.delay || 0;
  let { elapsed: u = 0 } = i;
  u = u - /* @__PURE__ */ q(l);
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
  $l(a) || (c = {
    ...c,
    ...Gl(t, c)
  }), c.duration && (c.duration = /* @__PURE__ */ q(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ q(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let h = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (h = !0)), c.allowFlatten = !a.type && !a.ease, h && !o && e.get() !== void 0) {
    const f = ae(c.keyframes, a);
    if (f !== void 0)
      return V.update(() => {
        c.onUpdate(f), c.onComplete();
      }), new mo([]);
  }
  return !o && di.supports(c) ? new di(c) : new On(c);
};
function zl({ protectedKeys: t, needsAnimating: e }, n) {
  const i = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, i;
}
function Vr(t, e, { delay: n = 0, transitionOverride: i, type: s } = {}) {
  var o;
  let { transition: r = t.getDefaultTransition(), transitionEnd: a, ...l } = e;
  i && (r = i);
  const u = [], c = s && t.animationState && t.animationState.getState()[s];
  for (const h in l) {
    const f = t.getValue(h, (o = t.latestValues[h]) !== null && o !== void 0 ? o : null), d = l[h];
    if (d === void 0 || c && zl(c, h))
      continue;
    const m = {
      delay: n,
      ...hn(r || {}, h)
    };
    let p = !1;
    if (window.MotionHandoffAnimation) {
      const g = Xs(t);
      if (g) {
        const T = window.MotionHandoffAnimation(g, h, V);
        T !== null && (m.startTime = T, p = !0);
      }
    }
    We(t, h), f.start(Fn(h, f, d, t.shouldReduceMotion && Hs.has(h) ? { type: !1 } : m, t, p));
    const y = f.animation;
    y && u.push(y);
  }
  return a && Promise.all(u).then(() => {
    V.update(() => {
      a && ba(t, a);
    });
  }), u;
}
function Je(t, e, n = {}) {
  var i;
  const s = Ot(t, e, n.type === "exit" ? (i = t.presenceContext) === null || i === void 0 ? void 0 : i.custom : void 0);
  let { transition: o = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (o = n.transitionOverride);
  const r = s ? () => Promise.all(Vr(t, s, n)) : () => Promise.resolve(), a = t.variantChildren && t.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: h, staggerDirection: f } = o;
    return ql(t, e, c + u, h, f, n);
  } : () => Promise.resolve(), { when: l } = o;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [r, a] : [a, r];
    return u().then(() => c());
  } else
    return Promise.all([r(), a(n.delay)]);
}
function ql(t, e, n = 0, i = 0, s = 1, o) {
  const r = [], a = (t.variantChildren.size - 1) * i, l = s === 1 ? (u = 0) => u * i : (u = 0) => a - u * i;
  return Array.from(t.variantChildren).sort(Hl).forEach((u, c) => {
    u.notify("AnimationStart", e), r.push(Je(u, e, {
      ...o,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", e)));
  }), Promise.all(r);
}
function Hl(t, e) {
  return t.sortNodePosition(e);
}
function Xl(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let i;
  if (Array.isArray(e)) {
    const s = e.map((o) => Je(t, o, n));
    i = Promise.all(s);
  } else if (typeof e == "string")
    i = Je(t, e, n);
  else {
    const s = typeof e == "function" ? Ot(t, e, n.custom) : e;
    i = Promise.all(Vr(t, s, n));
  }
  return i.then(() => {
    t.notify("AnimationComplete", e);
  });
}
function Mr(t, e) {
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
const Yl = yn.length;
function Dr(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? Dr(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < Yl; n++) {
    const i = yn[n], s = t.props[i];
    (Lt(s) || s === !1) && (e[i] = s);
  }
  return e;
}
const Zl = [...gn].reverse(), Jl = gn.length;
function Ql(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: i }) => Xl(t, n, i)));
}
function tu(t) {
  let e = Ql(t), n = mi(), i = !0;
  const s = (l) => (u, c) => {
    var h;
    const f = Ot(t, c, l === "exit" ? (h = t.presenceContext) === null || h === void 0 ? void 0 : h.custom : void 0);
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
    const { props: u } = t, c = Dr(t.parent) || {}, h = [], f = /* @__PURE__ */ new Set();
    let d = {}, m = 1 / 0;
    for (let y = 0; y < Jl; y++) {
      const g = Zl[y], T = n[g], b = u[g] !== void 0 ? u[g] : c[g], w = Lt(b), v = g === l ? T.isActive : null;
      v === !1 && (m = y);
      let S = b === c[g] && b !== u[g] && w;
      if (S && i && t.manuallyAnimateOnMount && (S = !1), T.protectedKeys = { ...d }, // If it isn't active and hasn't *just* been set as inactive
      !T.isActive && v === null || // If we didn't and don't have any defined prop for this animation type
      !b && !T.prevProp || // Or if the prop doesn't define an animation
      re(b) || typeof b == "boolean")
        continue;
      const A = eu(T.prevProp, b);
      let x = A || // If we're making this variant active, we want to always make it active
      g === l && T.isActive && !S && w || // If we removed a higher-priority variant (i is in reverse order)
      y > m && w, C = !1;
      const L = Array.isArray(b) ? b : [b];
      let Y = L.reduce(s(g), {});
      v === !1 && (Y = {});
      const { prevResolvedValues: ut = {} } = T, R = {
        ...ut,
        ...Y
      }, W = (F) => {
        x = !0, f.has(F) && (C = !0, f.delete(F)), T.needsAnimating[F] = !0;
        const z = t.getValue(F);
        z && (z.liveStyle = !1);
      };
      for (const F in R) {
        const z = Y[F], ue = ut[F];
        if (d.hasOwnProperty(F))
          continue;
        let ce = !1;
        Ue(z) && Ue(ue) ? ce = !Mr(z, ue) : ce = z !== ue, ce ? z != null ? W(F) : f.add(F) : z !== void 0 && f.has(F) ? W(F) : T.protectedKeys[F] = !0;
      }
      T.prevProp = b, T.prevResolvedValues = Y, T.isActive && (d = { ...d, ...Y }), i && t.blockInitialAnimation && (x = !1), x && (!(S && A) || C) && h.push(...L.map((F) => ({
        animation: F,
        options: { type: g }
      })));
    }
    if (f.size) {
      const y = {};
      if (typeof u.initial != "boolean") {
        const g = Ot(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        g && g.transition && (y.transition = g.transition);
      }
      f.forEach((g) => {
        const T = t.getBaseTarget(g), b = t.getValue(g);
        b && (b.liveStyle = !0), y[g] = T ?? null;
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
      n = mi(), i = !0;
    }
  };
}
function eu(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Mr(e, t) : !1;
}
function it(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function mi() {
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
class nu extends nt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = tu(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    re(e) && (this.unmountControls = e.subscribe(this.node));
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
let iu = 0;
class su extends nt {
  constructor() {
    super(...arguments), this.id = iu++;
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
const ru = {
  animation: {
    Feature: nu
  },
  exit: {
    Feature: su
  }
};
function jt(t, e, n, i = { passive: !0 }) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
}
function Wt(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const ou = (t) => (e) => pn(e) && t(e, Wt(e));
function Dt(t, e, n, i) {
  return jt(t, e, ou(n), i);
}
function Cr({ top: t, left: e, right: n, bottom: i }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: i }
  };
}
function au({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function lu(t, e) {
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
const Rr = 1e-4, uu = 1 - Rr, cu = 1 + Rr, Er = 0.01, hu = 0 - Er, fu = 0 + Er;
function j(t) {
  return t.max - t.min;
}
function du(t, e, n) {
  return Math.abs(t - e) <= n;
}
function pi(t, e, n, i = 0.5) {
  t.origin = i, t.originPoint = M(e.min, e.max, t.origin), t.scale = j(n) / j(e), t.translate = M(n.min, n.max, t.origin) - t.originPoint, (t.scale >= uu && t.scale <= cu || isNaN(t.scale)) && (t.scale = 1), (t.translate >= hu && t.translate <= fu || isNaN(t.translate)) && (t.translate = 0);
}
function Ct(t, e, n, i) {
  pi(t.x, e.x, n.x, i ? i.originX : void 0), pi(t.y, e.y, n.y, i ? i.originY : void 0);
}
function gi(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + j(e);
}
function mu(t, e, n) {
  gi(t.x, e.x, n.x), gi(t.y, e.y, n.y);
}
function yi(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + j(e);
}
function Rt(t, e, n) {
  yi(t.x, e.x, n.x), yi(t.y, e.y, n.y);
}
const vi = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), dt = () => ({
  x: vi(),
  y: vi()
}), Ti = () => ({ min: 0, max: 0 }), E = () => ({
  x: Ti(),
  y: Ti()
});
function U(t) {
  return [t("x"), t("y")];
}
function ge(t) {
  return t === void 0 || t === 1;
}
function Qe({ scale: t, scaleX: e, scaleY: n }) {
  return !ge(t) || !ge(e) || !ge(n);
}
function st(t) {
  return Qe(t) || Lr(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function Lr(t) {
  return bi(t.x) || bi(t.y);
}
function bi(t) {
  return t && t !== "0%";
}
function ne(t, e, n) {
  const i = t - n, s = e * i;
  return n + s;
}
function xi(t, e, n, i, s) {
  return s !== void 0 && (t = ne(t, s, i)), ne(t, n, i) + e;
}
function tn(t, e = 0, n = 1, i, s) {
  t.min = xi(t.min, e, n, i, s), t.max = xi(t.max, e, n, i, s);
}
function kr(t, { x: e, y: n }) {
  tn(t.x, e.translate, e.scale, e.originPoint), tn(t.y, n.translate, n.scale, n.originPoint);
}
const Si = 0.999999999999, Pi = 1.0000000000001;
function pu(t, e, n, i = !1) {
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
    }), r && (e.x *= r.x.scale, e.y *= r.y.scale, kr(t, r)), i && st(o.latestValues) && pt(t, o.latestValues));
  }
  e.x < Pi && e.x > Si && (e.x = 1), e.y < Pi && e.y > Si && (e.y = 1);
}
function mt(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function wi(t, e, n, i, s = 0.5) {
  const o = M(t.min, t.max, s);
  tn(t, e, n, o, i);
}
function pt(t, e) {
  wi(t.x, e.x, e.scaleX, e.scale, e.originX), wi(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function Br(t, e) {
  return Cr(lu(t.getBoundingClientRect(), e));
}
function gu(t, e, n) {
  const i = Br(t, n), { scroll: s } = e;
  return s && (mt(i.x, s.offset.x), mt(i.y, s.offset.y)), i;
}
const Or = ({ current: t }) => t ? t.ownerDocument.defaultView : null, Ai = (t, e) => Math.abs(t - e);
function yu(t, e) {
  const n = Ai(t.x, e.x), i = Ai(t.y, e.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
class Fr {
  constructor(e, n, { transformPagePoint: i, contextWindow: s, dragSnapToOrigin: o = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const h = ve(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, d = yu(h.offset, { x: 0, y: 0 }) >= 3;
      if (!f && !d)
        return;
      const { point: m } = h, { timestamp: p } = k;
      this.history.push({ ...m, timestamp: p });
      const { onStart: y, onMove: g } = this.handlers;
      f || (y && y(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, h);
    }, this.handlePointerMove = (h, f) => {
      this.lastMoveEvent = h, this.lastMoveEventInfo = ye(f, this.transformPagePoint), V.update(this.updatePoint, !0);
    }, this.handlePointerUp = (h, f) => {
      this.end();
      const { onEnd: d, onSessionEnd: m, resumeAnimation: p } = this.handlers;
      if (this.dragSnapToOrigin && p && p(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const y = ve(h.type === "pointercancel" ? this.lastMoveEventInfo : ye(f, this.transformPagePoint), this.history);
      this.startEvent && d && d(h, y), m && m(h, y);
    }, !pn(e))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = i, this.contextWindow = s || window;
    const r = Wt(e), a = ye(r, this.transformPagePoint), { point: l } = a, { timestamp: u } = k;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(e, ve(a, this.history)), this.removeListeners = Ut(Dt(this.contextWindow, "pointermove", this.handlePointerMove), Dt(this.contextWindow, "pointerup", this.handlePointerUp), Dt(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), tt(this.updatePoint);
  }
}
function ye(t, e) {
  return e ? { point: e(t.point) } : t;
}
function Vi(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function ve({ point: t }, e) {
  return {
    point: t,
    delta: Vi(t, jr(e)),
    offset: Vi(t, vu(e)),
    velocity: Tu(e, 0.1)
  };
}
function vu(t) {
  return t[0];
}
function jr(t) {
  return t[t.length - 1];
}
function Tu(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, i = null;
  const s = jr(t);
  for (; n >= 0 && (i = t[n], !(s.timestamp - i.timestamp > /* @__PURE__ */ q(e))); )
    n--;
  if (!i)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ H(s.timestamp - i.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (s.x - i.x) / o,
    y: (s.y - i.y) / o
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function bu(t, { min: e, max: n }, i) {
  return e !== void 0 && t < e ? t = i ? M(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? M(n, t, i.max) : Math.min(t, n)), t;
}
function Mi(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function xu(t, { top: e, left: n, bottom: i, right: s }) {
  return {
    x: Mi(t.x, n, s),
    y: Mi(t.y, e, i)
  };
}
function Di(t, e) {
  let n = e.min - t.min, i = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i };
}
function Su(t, e) {
  return {
    x: Di(t.x, e.x),
    y: Di(t.y, e.y)
  };
}
function Pu(t, e) {
  let n = 0.5;
  const i = j(t), s = j(e);
  return s > i ? n = /* @__PURE__ */ yt(e.min, e.max - i, t.min) : i > s && (n = /* @__PURE__ */ yt(t.min, t.max - s, e.min)), X(0, 1, n);
}
function wu(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const en = 0.35;
function Au(t = en) {
  return t === !1 ? t = 0 : t === !0 && (t = en), {
    x: Ci(t, "left", "right"),
    y: Ci(t, "top", "bottom")
  };
}
function Ci(t, e, n) {
  return {
    min: Ri(t, e),
    max: Ri(t, n)
  };
}
function Ri(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Vu = /* @__PURE__ */ new WeakMap();
class Mu {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = E(), this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1)
      return;
    const s = (c) => {
      const { dragSnapToOrigin: h } = this.getProps();
      h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Wt(c).point);
    }, o = (c, h) => {
      const { drag: f, dragPropagation: d, onDragStart: m } = this.getProps();
      if (f && !d && (this.openDragLock && this.openDragLock(), this.openDragLock = bo(f), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), U((y) => {
        let g = this.getAxisMotionValue(y).get() || 0;
        if ($.test(g)) {
          const { projection: T } = this.visualElement;
          if (T && T.layout) {
            const b = T.layout.layoutBox[y];
            b && (g = j(b) * (parseFloat(g) / 100));
          }
        }
        this.originPoint[y] = g;
      }), m && V.postRender(() => m(c, h)), We(this.visualElement, "transform");
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, r = (c, h) => {
      const { dragPropagation: f, dragDirectionLock: d, onDirectionLock: m, onDrag: p } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: y } = h;
      if (d && this.currentDirection === null) {
        this.currentDirection = Du(y), this.currentDirection !== null && m && m(this.currentDirection);
        return;
      }
      this.updateAxis("x", h.point, y), this.updateAxis("y", h.point, y), this.visualElement.render(), p && p(c, h);
    }, a = (c, h) => this.stop(c, h), l = () => U((c) => {
      var h;
      return this.getAnimationState(c) === "paused" && ((h = this.getAxisMotionValue(c).animation) === null || h === void 0 ? void 0 : h.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Fr(e, {
      onSessionStart: s,
      onStart: o,
      onMove: r,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: Or(this.visualElement)
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
    if (!i || !$t(e, s, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + i[e];
    this.constraints && this.constraints[e] && (r = bu(r, this.constraints[e], this.elastic[e])), o.set(r);
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: n, dragElastic: i } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, o = this.constraints;
    n && ht(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && s ? this.constraints = xu(s.layoutBox, n) : this.constraints = !1, this.elastic = Au(i), o !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && U((r) => {
      this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = wu(s.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !ht(e))
      return !1;
    const i = e.current, { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const o = gu(i, s.root, this.visualElement.getTransformPagePoint());
    let r = Su(s.layout.layoutBox, o);
    if (n) {
      const a = n(au(r));
      this.hasMutatedConstraints = !!a, a && (r = Cr(a));
    }
    return r;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: i, dragElastic: s, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = U((c) => {
      if (!$t(c, n, this.currentDirection))
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
    return We(this.visualElement, e), i.start(Fn(e, i, 0, n, this.visualElement, !1));
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
      if (!$t(n, i, this.currentDirection))
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
        s[r] = Pu({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), U((r) => {
      if (!$t(r, e, null))
        return;
      const a = this.getAxisMotionValue(r), { min: l, max: u } = this.constraints[r];
      a.set(M(l, u, s[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Vu.set(this.visualElement, this);
    const e = this.visualElement.current, n = Dt(e, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), i = () => {
      const { dragConstraints: l } = this.getProps();
      ht(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, o = s.addEventListener("measure", i);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), V.read(i);
    const r = jt(window, "resize", () => this.scalePositionWithinConstraints()), a = s.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
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
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: i = !1, dragPropagation: s = !1, dragConstraints: o = !1, dragElastic: r = en, dragMomentum: a = !0 } = e;
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
function $t(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function Du(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class Cu extends nt {
  constructor(e) {
    super(e), this.removeGroupControls = _, this.removeListeners = _, this.controls = new Mu(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || _;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ei = (t) => (e, n) => {
  t && V.postRender(() => t(e, n));
};
class Ru extends nt {
  constructor() {
    super(...arguments), this.removePointerDownListener = _;
  }
  onPointerDown(e) {
    this.session = new Fr(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Or(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: i, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: Ei(e),
      onStart: Ei(n),
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
const Yt = {
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
function Li(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const Pt = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (P.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = Li(t, e.target.x), i = Li(t, e.target.y);
    return `${n}% ${i}%`;
  }
}, Eu = {
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
class Lu extends ro {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: s } = this.props, { projection: o } = e;
    Ho(ku), o && (n.group && n.group.add(o), i && i.register && s && i.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), Yt.hasEverUpdated = !0;
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
    e && (e.root.didUpdate(), mn.postRender(() => {
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
function Ir(t) {
  const [e, n] = uo(), i = I(Ts);
  return J(Lu, { ...t, layoutGroup: i, switchLayoutGroup: I(Os), isPresent: e, safeToRemove: n });
}
const ku = {
  borderRadius: {
    ...Pt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Pt,
  borderTopRightRadius: Pt,
  borderBottomLeftRadius: Pt,
  borderBottomRightRadius: Pt,
  boxShadow: Eu
};
function Bu(t, e, n) {
  const i = O(t) ? t : Et(t);
  return i.start(Fn("", i, e, n)), i.animation;
}
function Ou(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
const Fu = (t, e) => t.depth - e.depth;
class ju {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    an(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    ln(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(Fu), this.isDirty = !1, this.children.forEach(e);
  }
}
function Iu(t, e) {
  const n = G.now(), i = ({ timestamp: s }) => {
    const o = s - n;
    o >= e && (tt(i), t(o - e));
  };
  return V.read(i, !0), () => tt(i);
}
const _r = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], _u = _r.length, ki = (t) => typeof t == "string" ? parseFloat(t) : t, Bi = (t) => typeof t == "number" || P.test(t);
function Nu(t, e, n, i, s, o) {
  s ? (t.opacity = M(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    Uu(i)
  ), t.opacityExit = M(e.opacity !== void 0 ? e.opacity : 1, 0, Wu(i))) : o && (t.opacity = M(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, i));
  for (let r = 0; r < _u; r++) {
    const a = `border${_r[r]}Radius`;
    let l = Oi(e, a), u = Oi(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || Bi(l) === Bi(u) ? (t[a] = Math.max(M(ki(l), ki(u), i), 0), ($.test(u) || $.test(l)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = M(e.rotate || 0, n.rotate || 0, i));
}
function Oi(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Uu = /* @__PURE__ */ Nr(0, 0.5, nr), Wu = /* @__PURE__ */ Nr(0.5, 0.95, _);
function Nr(t, e, n) {
  return (i) => i < t ? 0 : i > e ? 1 : n(/* @__PURE__ */ yt(t, e, i));
}
function Fi(t, e) {
  t.min = e.min, t.max = e.max;
}
function N(t, e) {
  Fi(t.x, e.x), Fi(t.y, e.y);
}
function ji(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function Ii(t, e, n, i, s) {
  return t -= e, t = ne(t, 1 / n, i), s !== void 0 && (t = ne(t, 1 / s, i)), t;
}
function Ku(t, e = 0, n = 1, i = 0.5, s, o = t, r = t) {
  if ($.test(e) && (e = parseFloat(e), e = M(r.min, r.max, e / 100) - r.min), typeof e != "number")
    return;
  let a = M(o.min, o.max, i);
  t === o && (a -= e), t.min = Ii(t.min, e, n, a, s), t.max = Ii(t.max, e, n, a, s);
}
function _i(t, e, [n, i, s], o, r) {
  Ku(t, e[n], e[i], e[s], e.scale, o, r);
}
const Gu = ["x", "scaleX", "originX"], $u = ["y", "scaleY", "originY"];
function Ni(t, e, n, i) {
  _i(t.x, e, Gu, n ? n.x : void 0, i ? i.x : void 0), _i(t.y, e, $u, n ? n.y : void 0, i ? i.y : void 0);
}
function Ui(t) {
  return t.translate === 0 && t.scale === 1;
}
function Ur(t) {
  return Ui(t.x) && Ui(t.y);
}
function Wi(t, e) {
  return t.min === e.min && t.max === e.max;
}
function zu(t, e) {
  return Wi(t.x, e.x) && Wi(t.y, e.y);
}
function Ki(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function Wr(t, e) {
  return Ki(t.x, e.x) && Ki(t.y, e.y);
}
function Gi(t) {
  return j(t.x) / j(t.y);
}
function $i(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class qu {
  constructor() {
    this.members = [];
  }
  add(e) {
    an(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (ln(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
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
function Hu(t, e, n) {
  let i = "";
  const s = t.x.translate / e.x, o = t.y.translate / e.y, r = (n == null ? void 0 : n.z) || 0;
  if ((s || o || r) && (i = `translate3d(${s}px, ${o}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: h, rotateY: f, skewX: d, skewY: m } = n;
    u && (i = `perspective(${u}px) ${i}`), c && (i += `rotate(${c}deg) `), h && (i += `rotateX(${h}deg) `), f && (i += `rotateY(${f}deg) `), d && (i += `skewX(${d}deg) `), m && (i += `skewY(${m}deg) `);
  }
  const a = t.x.scale * e.x, l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (i += `scale(${a}, ${l})`), i || "none";
}
const Te = ["", "X", "Y", "Z"], Xu = { visibility: "hidden" }, zi = 1e3;
let Yu = 0;
function be(t, e, n, i) {
  const { latestValues: s } = e;
  s[t] && (n[t] = s[t], e.setStaticValue(t, 0), i && (i[t] = 0));
}
function Kr(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = Xs(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", V, !(s || o));
  }
  const { parent: i } = t;
  i && !i.hasCheckedOptimisedAppear && Kr(i);
}
function Gr({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: s }) {
  return class {
    constructor(r = {}, a = e == null ? void 0 : e()) {
      this.id = Yu++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(Qu), this.nodes.forEach(sc), this.nodes.forEach(rc), this.nodes.forEach(tc);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new ju());
    }
    addEventListener(r, a) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new cn()), this.eventHandlers.get(r).add(a);
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
      this.isSVG = Ou(r), this.instance = r;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), t) {
        let h;
        const f = () => this.root.updateBlockedByResize = !1;
        t(r, () => {
          this.root.updateBlockedByResize = !0, h && h(), h = Iu(f, 250), Yt.hasAnimatedSinceResize && (Yt.hasAnimatedSinceResize = !1, this.nodes.forEach(Hi));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: h, hasLayoutChanged: f, hasRelativeLayoutChanged: d, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const p = this.options.transition || c.getDefaultTransition() || cc, { onLayoutAnimationStart: y, onLayoutAnimationComplete: g } = c.getProps(), T = !this.targetLayout || !Wr(this.targetLayout, m), b = !f && d;
        if (this.options.layoutRoot || this.resumeFrom || b || f && (T || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(h, b);
          const w = {
            ...hn(p, "layout"),
            onPlay: y,
            onComplete: g
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w);
        } else
          f || Hi(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(oc), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Kr(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(qi);
        return;
      }
      this.isUpdating || this.nodes.forEach(nc), this.isUpdating = !1, this.nodes.forEach(ic), this.nodes.forEach(Zu), this.nodes.forEach(Ju), this.clearAllSnapshots();
      const a = G.now();
      k.delta = X(0, 1e3 / 60, a - k.timestamp), k.timestamp = a, k.isProcessing = !0, he.update.process(k), he.preRender.process(k), he.render.process(k), k.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, mn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(ec), this.sharedNodes.forEach(ac);
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
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !j(this.snapshot.measuredBox.x) && !j(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
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
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Ur(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      r && (a || st(this.latestValues) || c) && (s(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return r && (l = this.removeTransform(l)), hc(l), {
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
      if (!(((r = this.scroll) === null || r === void 0 ? void 0 : r.wasRoot) || this.path.some(fc))) {
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
        Qe(u.latestValues) && u.updateSnapshot();
        const c = E(), h = u.measurePageBox();
        N(c, h), Ni(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return st(this.latestValues) && Ni(a, this.latestValues), a;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== k.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
        if (this.resolvedRelativeTargetAt = k.timestamp, !this.targetDelta && !this.relativeTarget) {
          const d = this.getClosestProjectingParent();
          d && d.layout && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = E(), this.relativeTargetOrigin = E(), Rt(this.relativeTargetOrigin, this.layout.layoutBox, d.layout.layoutBox), N(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = E(), this.targetWithTransforms = E()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), mu(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : N(this.target, this.layout.layoutBox), kr(this.target, this.targetDelta)) : N(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const d = this.getClosestProjectingParent();
          d && !!d.resumingFrom == !!this.resumingFrom && !d.options.layoutScroll && d.target && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = E(), this.relativeTargetOrigin = E(), Rt(this.relativeTargetOrigin, this.target, d.target), N(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Qe(this.parent.latestValues) || Lr(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var r;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let u = !0;
      if ((this.isProjectionDirty || !((r = this.parent) === null || r === void 0) && r.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === k.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: h } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || h))
        return;
      N(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, d = this.treeScale.y;
      pu(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = E());
      const { target: m } = a;
      if (!m) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ji(this.prevProjectionDelta.x, this.projectionDelta.x), ji(this.prevProjectionDelta.y, this.projectionDelta.y)), Ct(this.projectionDelta, this.layoutCorrected, m, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== d || !$i(this.projectionDelta.x, this.prevProjectionDelta.x) || !$i(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m));
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
      const f = E(), d = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, p = d !== m, y = this.getStack(), g = !y || y.members.length <= 1, T = !!(p && !g && this.options.crossfade === !0 && !this.path.some(uc));
      this.animationProgress = 0;
      let b;
      this.mixTargetDelta = (w) => {
        const v = w / 1e3;
        Xi(h.x, r.x, v), Xi(h.y, r.y, v), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Rt(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), lc(this.relativeTarget, this.relativeTargetOrigin, f, v), b && zu(this.relativeTarget, b) && (this.isProjectionDirty = !1), b || (b = E()), N(b, this.relativeTarget)), p && (this.animationValues = c, Nu(c, u, this.latestValues, v, T, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = v;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (tt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = V.update(() => {
        Yt.hasAnimatedSinceResize = !0, this.currentAnimation = Bu(0, zi, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(zi), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = r;
      if (!(!a || !l || !u)) {
        if (this !== r && this.layout && u && $r(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || E();
          const h = j(this.layout.layoutBox.x);
          l.x.min = r.target.x.min, l.x.max = l.x.min + h;
          const f = j(this.layout.layoutBox.y);
          l.y.min = r.target.y.min, l.y.max = l.y.min + f;
        }
        N(a, l), pt(a, c), Ct(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new qu()), this.sharedNodes.get(r).add(a);
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
      l.z && be("z", r, u, this.animationValues);
      for (let c = 0; c < Te.length; c++)
        be(`rotate${Te[c]}`, r, u, this.animationValues), be(`skew${Te[c]}`, r, u, this.animationValues);
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
        return Xu;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Xt(r == null ? void 0 : r.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const p = {};
        return this.options.layoutId && (p.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, p.pointerEvents = Xt(r == null ? void 0 : r.pointerEvents) || ""), this.hasProjected && !st(this.latestValues) && (p.transform = c ? c({}, "") : "none", this.hasProjected = !1), p;
      }
      const f = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(), u.transform = Hu(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: d, y: m } = this.projectionDelta;
      u.transformOrigin = `${d.origin * 100}% ${m.origin * 100}% 0`, h.animationValues ? u.opacity = h === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = h === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const p in kt) {
        if (f[p] === void 0)
          continue;
        const { correct: y, applyTo: g, isCSSVariable: T } = kt[p], b = u.transform === "none" ? f[p] : y(f[p], h);
        if (g) {
          const w = g.length;
          for (let v = 0; v < w; v++)
            u[g[v]] = b;
        } else
          T ? this.options.visualElement.renderState.vars[p] = b : u[p] = b;
      }
      return this.options.layoutId && (u.pointerEvents = h === this ? Xt(r == null ? void 0 : r.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => {
        var a;
        return (a = r.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(qi), this.root.sharedNodes.clear();
    }
  };
}
function Zu(t) {
  t.updateLayout();
}
function Ju(t) {
  var e;
  const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: s } = t.layout, { animationType: o } = t.options, r = n.source !== t.layout.source;
    o === "size" ? U((h) => {
      const f = r ? n.measuredBox[h] : n.layoutBox[h], d = j(f);
      f.min = i[h].min, f.max = f.min + d;
    }) : $r(o, n.layoutBox, i) && U((h) => {
      const f = r ? n.measuredBox[h] : n.layoutBox[h], d = j(i[h]);
      f.max = f.min + d, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[h].max = t.relativeTarget[h].min + d);
    });
    const a = dt();
    Ct(a, i, n.layoutBox);
    const l = dt();
    r ? Ct(l, t.applyTransform(s, !0), n.measuredBox) : Ct(l, i, n.layoutBox);
    const u = !Ur(a);
    let c = !1;
    if (!t.resumeFrom) {
      const h = t.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: f, layout: d } = h;
        if (f && d) {
          const m = E();
          Rt(m, n.layoutBox, f.layoutBox);
          const p = E();
          Rt(p, i, d.layoutBox), Wr(m, p) || (c = !0), h.options.layoutRoot && (t.relativeTarget = p, t.relativeTargetOrigin = m, t.relativeParent = h);
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
function Qu(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function tc(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function ec(t) {
  t.clearSnapshot();
}
function qi(t) {
  t.clearMeasurements();
}
function nc(t) {
  t.isLayoutDirty = !1;
}
function ic(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function Hi(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function sc(t) {
  t.resolveTargetDelta();
}
function rc(t) {
  t.calcProjection();
}
function oc(t) {
  t.resetSkewAndRotation();
}
function ac(t) {
  t.removeLeadSnapshot();
}
function Xi(t, e, n) {
  t.translate = M(e.translate, 0, n), t.scale = M(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Yi(t, e, n, i) {
  t.min = M(e.min, n.min, i), t.max = M(e.max, n.max, i);
}
function lc(t, e, n, i) {
  Yi(t.x, e.x, n.x, i), Yi(t.y, e.y, n.y, i);
}
function uc(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const cc = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Zi = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), Ji = Zi("applewebkit/") && !Zi("chrome/") ? Math.round : _;
function Qi(t) {
  t.min = Ji(t.min), t.max = Ji(t.max);
}
function hc(t) {
  Qi(t.x), Qi(t.y);
}
function $r(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !du(Gi(e), Gi(n), 0.2);
}
function fc(t) {
  var e;
  return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot);
}
const dc = Gr({
  attachResizeListener: (t, e) => jt(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), xe = {
  current: void 0
}, zr = Gr({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!xe.current) {
      const t = new dc({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), xe.current = t;
    }
    return xe.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), mc = {
  pan: {
    Feature: Ru
  },
  drag: {
    Feature: Cu,
    ProjectionNode: zr,
    MeasureLayout: Ir
  }
};
function ts(t, e, n) {
  const { props: i } = t;
  t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n, o = i[s];
  o && V.postRender(() => o(e, Wt(e)));
}
class pc extends nt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = So(e, (n, i) => (ts(this.node, i, "Start"), (s) => ts(this.node, s, "End"))));
  }
  unmount() {
  }
}
class gc extends nt {
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
    this.unmount = Ut(jt(this.node.current, "focus", () => this.onFocus()), jt(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function es(t, e, n) {
  const { props: i } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n), o = i[s];
  o && V.postRender(() => o(e, Wt(e)));
}
class yc extends nt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = Vo(e, (n, i) => (es(this.node, i, "Start"), (s, { success: o }) => es(this.node, s, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const nn = /* @__PURE__ */ new WeakMap(), Se = /* @__PURE__ */ new WeakMap(), vc = (t) => {
  const e = nn.get(t.target);
  e && e(t);
}, Tc = (t) => {
  t.forEach(vc);
};
function bc({ root: t, ...e }) {
  const n = t || document;
  Se.has(n) || Se.set(n, {});
  const i = Se.get(n), s = JSON.stringify(e);
  return i[s] || (i[s] = new IntersectionObserver(Tc, { root: t, ...e })), i[s];
}
function xc(t, e, n) {
  const i = bc(e);
  return nn.set(t, n), i.observe(t), () => {
    nn.delete(t), i.unobserve(t);
  };
}
const Sc = {
  some: 0,
  all: 1
};
class Pc extends nt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: i, amount: s = "some", once: o } = e, r = {
      root: n ? n.current : void 0,
      rootMargin: i,
      threshold: typeof s == "number" ? s : Sc[s]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: h } = this.node.getProps(), f = u ? c : h;
      f && f(l);
    };
    return xc(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(wc(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function wc({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Ac = {
  inView: {
    Feature: Pc
  },
  tap: {
    Feature: yc
  },
  focus: {
    Feature: gc
  },
  hover: {
    Feature: pc
  }
}, Vc = {
  layout: {
    ProjectionNode: zr,
    MeasureLayout: Ir
  }
}, sn = { current: null }, qr = { current: !1 };
function Mc() {
  if (qr.current = !0, !!rn)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => sn.current = t.matches;
      t.addListener(e), e();
    } else
      sn.current = !1;
}
const Dc = [...yr, B, et], Cc = (t) => Dc.find(gr(t)), Rc = /* @__PURE__ */ new WeakMap();
function Ec(t, e, n) {
  for (const i in e) {
    const s = e[i], o = n[i];
    if (O(s))
      t.addValue(i, s);
    else if (O(o))
      t.addValue(i, Et(s, { owner: t }));
    else if (o !== s)
      if (t.hasValue(i)) {
        const r = t.getValue(i);
        r.liveStyle === !0 ? r.jump(s) : r.hasAnimated || r.set(s);
      } else {
        const r = t.getStaticValue(i);
        t.addValue(i, Et(r !== void 0 ? r : s, { owner: t }));
      }
  }
  for (const i in n)
    e[i] === void 0 && t.removeValue(i);
  return e;
}
const ns = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Lc {
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
      const d = G.now();
      this.renderScheduledAt < d && (this.renderScheduledAt = d, V.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u, onUpdate: c } = r;
    this.onUpdate = c, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = s, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = oe(n), this.isVariantNode = ks(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: h, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const d in f) {
      const m = f[d];
      l[d] !== void 0 && O(m) && m.set(l[d], !1);
    }
  }
  mount(e) {
    this.current = e, Rc.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, i) => this.bindToMotionValue(i, n)), qr.current || Mc(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : sn.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
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
    for (let i = 0; i < ns.length; i++) {
      const s = ns[i];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const o = "on" + s, r = e[o];
      r && (this.propEventSubscriptions[s] = this.on(s, r));
    }
    this.prevMotionValues = Ec(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return i === void 0 && n !== void 0 && (i = Et(n === null ? void 0 : n, { owner: this }), this.addValue(e, i)), i;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    var i;
    let s = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (i = this.getBaseTargetFromProps(this.props, e)) !== null && i !== void 0 ? i : this.readValueFromInstance(this.current, e, this.options);
    return s != null && (typeof s == "string" && (mr(s) || sr(s)) ? s = parseFloat(s) : !Cc(s) && et.test(n) && (s = hr(e, n)), this.setBaseTarget(e, O(s) ? s.get() : s)), O(s) ? s.get() : s;
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
      const r = Mn(this.props, i, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      r && (s = r[e]);
    }
    if (i && s !== void 0)
      return s;
    const o = this.getBaseTargetFromProps(this.props, e);
    return o !== void 0 && !O(o) ? o : this.initialValues[e] !== void 0 && s === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new cn()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class Hr extends Lc {
  constructor() {
    super(...arguments), this.KeyframeResolver = vr;
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
    O(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function kc(t) {
  return window.getComputedStyle(t);
}
class Bc extends Hr {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Gs;
  }
  readValueFromInstance(e, n) {
    if (lt.has(n))
      return $a(e, n);
    {
      const i = kc(e), s = (Tn(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Br(e, n);
  }
  build(e, n, i) {
    Sn(e, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return Dn(e, n, i);
  }
}
class Oc extends Hr {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = E, this.updateDimensions = () => {
      this.current && !this.renderState.dimensions && Ks(this.current, this.renderState);
    };
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (lt.has(n)) {
      const i = cr(n);
      return i && i.default || 0;
    }
    return n = $s.has(n) ? n : vn(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return qs(e, n, i);
  }
  onBindTransform() {
    this.current && !this.renderState.dimensions && V.postRender(this.updateDimensions);
  }
  build(e, n, i) {
    An(e, n, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(e, n, i, s) {
    zs(e, n, i, s);
  }
  mount(e) {
    this.isSVGTag = Vn(e.tagName), super.mount(e);
  }
}
const Fc = (t, e) => wn(t) ? new Oc(e) : new Bc(e, {
  allowProjection: t !== vs
}), jc = /* @__PURE__ */ va({
  ...ru,
  ...Ac,
  ...mc,
  ...Vc
}, Fc), Xr = /* @__PURE__ */ Bo(jc);
var zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Yr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Pe, is;
function jn() {
  if (is) return Pe;
  is = 1;
  function t(e) {
    var n = typeof e;
    return e != null && (n == "object" || n == "function");
  }
  return Pe = t, Pe;
}
var we, ss;
function Ic() {
  if (ss) return we;
  ss = 1;
  var t = typeof zt == "object" && zt && zt.Object === Object && zt;
  return we = t, we;
}
var Ae, rs;
function Zr() {
  if (rs) return Ae;
  rs = 1;
  var t = Ic(), e = typeof self == "object" && self && self.Object === Object && self, n = t || e || Function("return this")();
  return Ae = n, Ae;
}
var Ve, os;
function _c() {
  if (os) return Ve;
  os = 1;
  var t = Zr(), e = function() {
    return t.Date.now();
  };
  return Ve = e, Ve;
}
var Me, as;
function Nc() {
  if (as) return Me;
  as = 1;
  var t = /\s/;
  function e(n) {
    for (var i = n.length; i-- && t.test(n.charAt(i)); )
      ;
    return i;
  }
  return Me = e, Me;
}
var De, ls;
function Uc() {
  if (ls) return De;
  ls = 1;
  var t = Nc(), e = /^\s+/;
  function n(i) {
    return i && i.slice(0, t(i) + 1).replace(e, "");
  }
  return De = n, De;
}
var Ce, us;
function Jr() {
  if (us) return Ce;
  us = 1;
  var t = Zr(), e = t.Symbol;
  return Ce = e, Ce;
}
var Re, cs;
function Wc() {
  if (cs) return Re;
  cs = 1;
  var t = Jr(), e = Object.prototype, n = e.hasOwnProperty, i = e.toString, s = t ? t.toStringTag : void 0;
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
  return Re = o, Re;
}
var Ee, hs;
function Kc() {
  if (hs) return Ee;
  hs = 1;
  var t = Object.prototype, e = t.toString;
  function n(i) {
    return e.call(i);
  }
  return Ee = n, Ee;
}
var Le, fs;
function Gc() {
  if (fs) return Le;
  fs = 1;
  var t = Jr(), e = Wc(), n = Kc(), i = "[object Null]", s = "[object Undefined]", o = t ? t.toStringTag : void 0;
  function r(a) {
    return a == null ? a === void 0 ? s : i : o && o in Object(a) ? e(a) : n(a);
  }
  return Le = r, Le;
}
var ke, ds;
function $c() {
  if (ds) return ke;
  ds = 1;
  function t(e) {
    return e != null && typeof e == "object";
  }
  return ke = t, ke;
}
var Be, ms;
function zc() {
  if (ms) return Be;
  ms = 1;
  var t = Gc(), e = $c(), n = "[object Symbol]";
  function i(s) {
    return typeof s == "symbol" || e(s) && t(s) == n;
  }
  return Be = i, Be;
}
var Oe, ps;
function qc() {
  if (ps) return Oe;
  ps = 1;
  var t = Uc(), e = jn(), n = zc(), i = NaN, s = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, r = /^0o[0-7]+$/i, a = parseInt;
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
var Fe, gs;
function Qr() {
  if (gs) return Fe;
  gs = 1;
  var t = jn(), e = _c(), n = qc(), i = "Expected a function", s = Math.max, o = Math.min;
  function r(a, l, u) {
    var c, h, f, d, m, p, y = 0, g = !1, T = !1, b = !0;
    if (typeof a != "function")
      throw new TypeError(i);
    l = n(l) || 0, t(u) && (g = !!u.leading, T = "maxWait" in u, f = T ? s(n(u.maxWait) || 0, l) : f, b = "trailing" in u ? !!u.trailing : b);
    function w(R) {
      var W = c, ct = h;
      return c = h = void 0, y = R, d = a.apply(ct, W), d;
    }
    function v(R) {
      return y = R, m = setTimeout(x, l), g ? w(R) : d;
    }
    function S(R) {
      var W = R - p, ct = R - y, le = l - W;
      return T ? o(le, f - ct) : le;
    }
    function A(R) {
      var W = R - p, ct = R - y;
      return p === void 0 || W >= l || W < 0 || T && ct >= f;
    }
    function x() {
      var R = e();
      if (A(R))
        return C(R);
      m = setTimeout(x, S(R));
    }
    function C(R) {
      return m = void 0, b && c ? w(R) : (c = h = void 0, d);
    }
    function L() {
      m !== void 0 && clearTimeout(m), y = 0, c = p = h = m = void 0;
    }
    function Y() {
      return m === void 0 ? d : C(e());
    }
    function ut() {
      var R = e(), W = A(R);
      if (c = arguments, h = this, p = R, W) {
        if (m === void 0)
          return v(p);
        if (T)
          return clearTimeout(m), m = setTimeout(x, l), w(p);
      }
      return m === void 0 && (m = setTimeout(x, l)), d;
    }
    return ut.cancel = L, ut.flush = Y, ut;
  }
  return Fe = r, Fe;
}
var Hc = Qr();
const Xc = /* @__PURE__ */ Yr(Hc);
var je, ys;
function Yc() {
  if (ys) return je;
  ys = 1;
  var t = Qr(), e = jn(), n = "Expected a function";
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
  return je = i, je;
}
var Zc = Yc();
const Jc = /* @__PURE__ */ Yr(Zc), Qc = (t, e, n, i) => {
  switch (e) {
    case "debounce":
      return Xc(t, n, i);
    case "throttle":
      return Jc(t, n, i);
    default:
      return t;
  }
}, th = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (t) => {
    const e = Vt.useRef(t);
    return Vt.useEffect(() => {
      e.current = t;
    }), Vt.useMemo(() => (...n) => {
      var i;
      return (i = e.current) === null || i === void 0 ? void 0 : i.call(e, ...n);
    }, []);
  }
), eh = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (t) => {
    const [e, n] = Vt.useState((t == null ? void 0 : t.current) || null);
    return t && setTimeout(() => {
      t.current !== e && n(t.current);
    }, 0), { refProxy: Vt.useMemo(() => new Proxy((s) => {
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
), nh = (t, e) => e === "border-box" ? {
  width: t.borderBoxSize[0].inlineSize,
  height: t.borderBoxSize[0].blockSize
} : e === "content-box" ? {
  width: t.contentBoxSize[0].inlineSize,
  height: t.contentBoxSize[0].blockSize
} : {
  width: t.contentRect.width,
  height: t.contentRect.height
};
function ih({ skipOnMount: t = !1, refreshMode: e, refreshRate: n = 1e3, refreshOptions: i, handleWidth: s = !0, handleHeight: o = !0, targetRef: r, observerOptions: a, onResize: l } = {}) {
  const u = Q(t), c = th(l), [h, f] = qt({
    width: void 0,
    height: void 0
  }), { refProxy: d, refElement: m } = eh(r), { box: p } = a || {}, y = gt((T) => {
    if (!s && !o)
      return;
    if (u.current) {
      u.current = !1;
      return;
    }
    const b = (w, v) => s && w.width !== v.width || o && w.height !== v.height;
    T.forEach((w) => {
      const v = nh(w, p);
      f((S) => b(S, v) ? (c == null || c({
        width: v.width,
        height: v.height,
        entry: w
      }), v) : S);
    });
  }, [s, o, u, p]), g = gt(Qc(y, e, n, i), [
    y,
    e,
    n,
    i
  ]);
  return It(() => {
    let T;
    return m ? (T = new window.ResizeObserver(g), T.observe(m, a)) : (h.width || h.height) && (c == null || c({
      width: null,
      height: null,
      entry: null
    }), f({ width: void 0, height: void 0 })), () => {
      var b, w, v;
      (b = T == null ? void 0 : T.disconnect) === null || b === void 0 || b.call(T), (v = (w = g).cancel) === null || v === void 0 || v.call(w);
    };
  }, [g, m]), Object.assign({ ref: d }, h);
}
function sh({ index: t, onSizeChange: e, ...n }) {
  const { ref: i } = ih({
    handleHeight: !1,
    refreshMode: "debounce",
    refreshRate: 1e3,
    onResize({ width: s, height: o }) {
      e(t, s, o);
    }
  });
  return /* @__PURE__ */ J(Xr.div, { style: {
    height: "100%",
    maxHeight: "65vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  }, ref: i, ...n });
}
const rh = {
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
      zIndex: oh({ activeIndex: t, currentIndex: n, direction: i }),
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
function oh({ activeIndex: t, currentIndex: e, direction: n }) {
  if (!(n < 0))
    return e === t ? 3 : 2;
}
const ah = 100, lh = ({
  slides: t,
  options: e,
  ref: n
}) => {
  const {
    spacing: i = 20,
    inactiveOffset: s = 150,
    inactiveScaleMultiplier: o = 0.1,
    inactiveBlur: r = 15
  } = e, a = Q(0), [[l, u], c] = qt([0, 0]), [h, f] = qt([]), d = Q(null), [m, p] = qt(0), y = (l % t.length + t.length) % t.length, g = Q(!1), T = gt(
    (v) => {
      c((S) => {
        const A = S[0] + v;
        return A < 0 || A >= t.length ? S : [A, v];
      });
    },
    [t]
  ), b = gt(
    (v, { offset: S }) => {
      if (g.current) return;
      const A = ah / 2, x = l === t.length - 1, C = l === 0;
      S.x < -50 && !x ? a.current = 1 : S.x > A && !C ? a.current = -1 : a.current = 0;
    },
    [t, l]
  );
  It(() => {
    if (d.current && h.length > 0) {
      const v = d.current.clientWidth, S = h[l], A = v / 2 - S / 2;
      p(A);
    }
  }, [h, l]);
  const w = (v, S) => {
    let A = 0;
    if (S < v) {
      for (let x = 0; x < S; x++)
        A -= h[x] + i;
      s === !1 ? A -= h[S] * (v - S) : A -= s * (v - S);
    } else
      for (let x = 0; x < v; x++)
        A -= h[x] + i;
    return A;
  };
  return /* @__PURE__ */ Ie(
    Xr.div,
    {
      ref: n,
      dragElastic: 0,
      dragMomentum: !1,
      drag: t.length > 1 ? "x" : !1,
      onDrag: b,
      onDragStart: () => g.current = !1,
      onDragEnd: () => {
        g.current = !0, a.current !== 0 && T(a.current);
      },
      dragConstraints: { left: 0, right: 0, top: 0, bottom: 0 },
      children: [
        /* @__PURE__ */ J(
          "div",
          {
            className: "wrapper",
            ref: d,
            style: {
              gap: `${i}px`
            },
            children: t.map((v, S) => /* @__PURE__ */ J(
              sh,
              {
                className: "card",
                onSizeChange: (A, x) => {
                  h[A] !== x && f((C) => {
                    const L = [...C];
                    return x && (L[A] = x), L;
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
                variants: rh,
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
        /* @__PURE__ */ Ie("div", { className: "buttons", children: [
          /* @__PURE__ */ J(
            In,
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
          /* @__PURE__ */ J(
            In,
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
}, mh = {
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
        const s = oo();
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
    return /* @__PURE__ */ J(lh, { options: e, slides: i, ref: t.dragRef });
  }
};
export {
  mh as default
};
