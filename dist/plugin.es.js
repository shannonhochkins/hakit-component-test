import _n, { useEffect as ye, useLayoutEffect as ka, useRef as Nt, useMemo as _r, useState as ke, useCallback as he, useContext as St, createContext as Et, forwardRef as wr, createElement as wn } from "react";
import { flushSync as Sa, createPortal as Ea } from "react-dom";
var cn = { exports: {} }, qt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zi;
function Ia() {
  if (zi) return qt;
  zi = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, i, o) {
    var s = null;
    if (o !== void 0 && (s = "" + o), i.key !== void 0 && (s = "" + i.key), "key" in i) {
      o = {};
      for (var a in i)
        a !== "key" && (o[a] = i[a]);
    } else o = i;
    return i = o.ref, {
      $$typeof: e,
      type: n,
      key: s,
      ref: i !== void 0 ? i : null,
      props: o
    };
  }
  return qt.Fragment = t, qt.jsx = r, qt.jsxs = r, qt;
}
var Wi;
function Da() {
  return Wi || (Wi = 1, cn.exports = Ia()), cn.exports;
}
var F = Da(), Aa = Object.create, Zn = Object.defineProperty, Oa = Object.defineProperties, Pa = Object.getOwnPropertyDescriptor, Ca = Object.getOwnPropertyDescriptors, Yn = Object.getOwnPropertyNames, zr = Object.getOwnPropertySymbols, Ma = Object.getPrototypeOf, Vn = Object.prototype.hasOwnProperty, Bo = Object.prototype.propertyIsEnumerable, No = (e) => {
  throw TypeError(e);
}, Fi = (e, t, r) => t in e ? Zn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, q = (e, t) => {
  for (var r in t || (t = {}))
    Vn.call(t, r) && Fi(e, r, t[r]);
  if (zr)
    for (var r of zr(t))
      Bo.call(t, r) && Fi(e, r, t[r]);
  return e;
}, de = (e, t) => Oa(e, Ca(t)), Hn = (e, t) => {
  var r = {};
  for (var n in e)
    Vn.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && zr)
    for (var n of zr(e))
      t.indexOf(n) < 0 && Bo.call(e, n) && (r[n] = e[n]);
  return r;
}, $a = (e, t) => function() {
  return e && (t = (0, e[Yn(e)[0]])(e = 0)), t;
}, La = (e, t) => function() {
  return t || (0, e[Yn(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, Ta = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of Yn(t))
      !Vn.call(e, i) && i !== r && Zn(e, i, { get: () => t[i], enumerable: !(n = Pa(t, i)) || n.enumerable });
  return e;
}, ja = (e, t, r) => (r = e != null ? Aa(Ma(e)) : {}, Ta(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !e || !e.__esModule ? Zn(r, "default", { value: e, enumerable: !0 }) : r,
  e
)), zo = (e, t, r) => t.has(e) || No("Cannot " + r), Ui = (e, t, r) => (zo(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Ra = (e, t, r) => t.has(e) ? No("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Zi = (e, t, r, n) => (zo(e, t, "write to private field"), t.set(e, r), r), Ba = (e, t, r) => new Promise((n, i) => {
  var o = (d) => {
    try {
      a(r.next(d));
    } catch (h) {
      i(h);
    }
  }, s = (d) => {
    try {
      a(r.throw(d));
    } catch (h) {
      i(h);
    }
  }, a = (d) => d.done ? n(d.value) : Promise.resolve(d.value).then(o, s);
  a((r = r.apply(e, t)).next());
}), S = $a({
  "../tsup-config/react-import.js"() {
  }
});
S();
S();
S();
S();
S();
S();
var rt = "default-zone";
S();
var qn = (e, t) => {
  if (t === rt)
    return e;
  const r = de(q({}, e), {
    zones: e.zones ? q({}, e.zones) : {}
  });
  return r.zones[t] = r.zones[t] || [], r;
}, Na = Symbol.for("preact-signals");
function Kr() {
  if (lt > 1)
    lt--;
  else {
    for (var e, t = !1; cr !== void 0; ) {
      var r = cr;
      for (cr = void 0, xn++; r !== void 0; ) {
        var n = r.o;
        if (r.o = void 0, r.f &= -3, !(8 & r.f) && Fo(r)) try {
          r.c();
        } catch (i) {
          t || (e = i, t = !0);
        }
        r = n;
      }
    }
    if (xn = 0, lt--, t) throw e;
  }
}
function pe(e) {
  if (lt > 0) return e();
  lt++;
  try {
    return e();
  } finally {
    Kr();
  }
}
var ie = void 0;
function Ve(e) {
  var t = ie;
  ie = void 0;
  try {
    return e();
  } finally {
    ie = t;
  }
}
var cr = void 0, lt = 0, xn = 0, Wr = 0;
function Wo(e) {
  if (ie !== void 0) {
    var t = e.n;
    if (t === void 0 || t.t !== ie)
      return t = { i: 0, S: e, p: ie.s, n: void 0, t: ie, e: void 0, x: void 0, r: t }, ie.s !== void 0 && (ie.s.n = t), ie.s = t, e.n = t, 32 & ie.f && e.S(t), t;
    if (t.i === -1)
      return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = ie.s, t.n = void 0, ie.s.n = t, ie.s = t), t;
  }
}
function Oe(e) {
  this.v = e, this.i = 0, this.n = void 0, this.t = void 0;
}
Oe.prototype.brand = Na;
Oe.prototype.h = function() {
  return !0;
};
Oe.prototype.S = function(e) {
  this.t !== e && e.e === void 0 && (e.x = this.t, this.t !== void 0 && (this.t.e = e), this.t = e);
};
Oe.prototype.U = function(e) {
  if (this.t !== void 0) {
    var t = e.e, r = e.x;
    t !== void 0 && (t.x = r, e.e = void 0), r !== void 0 && (r.e = t, e.x = void 0), e === this.t && (this.t = r);
  }
};
Oe.prototype.subscribe = function(e) {
  var t = this;
  return me(function() {
    var r = t.value, n = ie;
    ie = void 0;
    try {
      e(r);
    } finally {
      ie = n;
    }
  });
};
Oe.prototype.valueOf = function() {
  return this.value;
};
Oe.prototype.toString = function() {
  return this.value + "";
};
Oe.prototype.toJSON = function() {
  return this.value;
};
Oe.prototype.peek = function() {
  var e = ie;
  ie = void 0;
  try {
    return this.value;
  } finally {
    ie = e;
  }
};
Object.defineProperty(Oe.prototype, "value", { get: function() {
  var e = Wo(this);
  return e !== void 0 && (e.i = this.i), this.v;
}, set: function(e) {
  if (e !== this.v) {
    if (xn > 100) throw new Error("Cycle detected");
    this.v = e, this.i++, Wr++, lt++;
    try {
      for (var t = this.t; t !== void 0; t = t.x) t.t.N();
    } finally {
      Kr();
    }
  }
} });
function Ce(e) {
  return new Oe(e);
}
function Fo(e) {
  for (var t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
  return !1;
}
function Uo(e) {
  for (var t = e.s; t !== void 0; t = t.n) {
    var r = t.S.n;
    if (r !== void 0 && (t.r = r), t.S.n = t, t.i = -1, t.n === void 0) {
      e.s = t;
      break;
    }
  }
}
function Zo(e) {
  for (var t = e.s, r = void 0; t !== void 0; ) {
    var n = t.p;
    t.i === -1 ? (t.S.U(t), n !== void 0 && (n.n = t.n), t.n !== void 0 && (t.n.p = n)) : r = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = n;
  }
  e.s = r;
}
function zt(e) {
  Oe.call(this, void 0), this.x = e, this.s = void 0, this.g = Wr - 1, this.f = 4;
}
(zt.prototype = new Oe()).h = function() {
  if (this.f &= -3, 1 & this.f) return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === Wr)) return !0;
  if (this.g = Wr, this.f |= 1, this.i > 0 && !Fo(this))
    return this.f &= -2, !0;
  var e = ie;
  try {
    Uo(this), ie = this;
    var t = this.x();
    (16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
  } catch (r) {
    this.v = r, this.f |= 16, this.i++;
  }
  return ie = e, Zo(this), this.f &= -2, !0;
};
zt.prototype.S = function(e) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
  }
  Oe.prototype.S.call(this, e);
};
zt.prototype.U = function(e) {
  if (this.t !== void 0 && (Oe.prototype.U.call(this, e), this.t === void 0)) {
    this.f &= -33;
    for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
  }
};
zt.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var e = this.t; e !== void 0; e = e.x) e.t.N();
  }
};
Object.defineProperty(zt.prototype, "value", { get: function() {
  if (1 & this.f) throw new Error("Cycle detected");
  var e = Wo(this);
  if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} });
function Yi(e) {
  return new zt(e);
}
function Yo(e) {
  var t = e.u;
  if (e.u = void 0, typeof t == "function") {
    lt++;
    var r = ie;
    ie = void 0;
    try {
      t();
    } catch (n) {
      throw e.f &= -2, e.f |= 8, Xn(e), n;
    } finally {
      ie = r, Kr();
    }
  }
}
function Xn(e) {
  for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
  e.x = void 0, e.s = void 0, Yo(e);
}
function za(e) {
  if (ie !== this) throw new Error("Out-of-order effect");
  Zo(this), ie = e, this.f &= -2, 8 & this.f && Xn(this), Kr();
}
function xr(e) {
  this.x = e, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32;
}
xr.prototype.c = function() {
  var e = this.S();
  try {
    if (8 & this.f || this.x === void 0) return;
    var t = this.x();
    typeof t == "function" && (this.u = t);
  } finally {
    e();
  }
};
xr.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, Yo(this), Uo(this), lt++;
  var e = ie;
  return ie = this, za.bind(this, e);
};
xr.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.o = cr, cr = this);
};
xr.prototype.d = function() {
  this.f |= 8, 1 & this.f || Xn(this);
};
function me(e) {
  var t = new xr(e);
  try {
    t.c();
  } catch (r) {
    throw t.d(), r;
  }
  return t.d.bind(t);
}
function Be(e, t) {
  if (t) {
    let r;
    return Yi(() => {
      const n = e();
      return n && r && t(r, n) ? r : (r = n, n);
    });
  }
  return Yi(e);
}
function Bt(e, t) {
  if (e === t)
    return !0;
  if (typeof e == "function" && typeof t == "function")
    return e === t;
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size)
      return !1;
    for (const r of e)
      if (!t.has(r))
        return !1;
    return !0;
  }
  if (Array.isArray(e))
    return !Array.isArray(t) || e.length !== t.length ? !1 : !e.some(
      (n, i) => !Bt(n, t[i])
    );
  try {
    return JSON.stringify(e) === JSON.stringify(t);
  } catch {
    return !1;
  }
}
function le({ get: e }, t) {
  return {
    init(r) {
      return Ce(r);
    },
    get() {
      return e.call(this).value;
    },
    set(r) {
      const n = e.call(this);
      n.peek() !== r && (n.value = r);
    }
  };
}
function Fr(e, t) {
  const r = /* @__PURE__ */ new WeakMap();
  return function() {
    let n = r.get(this);
    return n || (n = Be(e.bind(this)), r.set(this, n)), n.value;
  };
}
function Jr(...e) {
  const t = e.map(me);
  return () => t.forEach((r) => r());
}
var Wa = Object.create, Gn = Object.defineProperty, Fa = Object.getOwnPropertyDescriptor, Vi = Object.getOwnPropertySymbols, Ua = Object.prototype.hasOwnProperty, Za = Object.prototype.propertyIsEnumerable, Ya = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Wt = (e) => {
  throw TypeError(e);
}, Hi = Math.pow, kn = (e, t, r) => t in e ? Gn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Va = (e, t) => {
  for (var r in t || (t = {}))
    Ua.call(t, r) && kn(e, r, t[r]);
  if (Vi)
    for (var r of Vi(t))
      Za.call(t, r) && kn(e, r, t[r]);
  return e;
}, qi = (e, t) => Gn(e, "name", { value: t, configurable: !0 }), Ha = (e) => {
  var t;
  return [, , , Wa((t = void 0) != null ? t : null)];
}, Vo = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Qt = (e) => e !== void 0 && typeof e != "function" ? Wt("Function expected") : e, qa = (e, t, r, n, i) => ({ kind: Vo[e], name: t, metadata: n, addInitializer: (o) => r._ ? Wt("Already initialized") : i.push(Qt(o || null)) }), Ho = (e, t) => kn(t, Ya("metadata"), e[3]), et = (e, t, r, n) => {
  for (var i = 0, o = e[t >> 1], s = o && o.length; i < s; i++) t & 1 ? o[i].call(r) : n = o[i].call(r, n);
  return n;
}, Ft = (e, t, r, n, i, o) => {
  var s, a, d, h, _, f = t & 7, D = !!(t & 8), A = !!(t & 16), v = f > 3 ? e.length + 1 : f ? D ? 1 : 2 : 0, M = Vo[f + 5], b = f > 3 && (e[v - 1] = []), y = e[v] || (e[v] = []), w = f && (!A && !D && (i = i.prototype), f < 5 && (f > 3 || !A) && Fa(f < 4 ? i : { get [r]() {
    return Sn(this, o);
  }, set [r](x) {
    return Ur(this, o, x);
  } }, r));
  f ? A && f < 4 && qi(o, (f > 2 ? "set " : f > 1 ? "get " : "") + r) : qi(i, r);
  for (var C = n.length - 1; C >= 0; C--)
    h = qa(f, r, d = {}, e[3], y), f && (h.static = D, h.private = A, _ = h.access = { has: A ? (x) => Xa(i, x) : (x) => r in x }, f ^ 3 && (_.get = A ? (x) => (f ^ 1 ? Sn : Ga)(x, i, f ^ 4 ? o : w.get) : (x) => x[r]), f > 2 && (_.set = A ? (x, E) => Ur(x, i, E, f ^ 4 ? o : w.set) : (x, E) => x[r] = E)), a = (0, n[C])(f ? f < 4 ? A ? o : w[M] : f > 4 ? void 0 : { get: w.get, set: w.set } : i, h), d._ = 1, f ^ 4 || a === void 0 ? Qt(a) && (f > 4 ? b.unshift(a) : f ? A ? o = a : w[M] = a : i = a) : typeof a != "object" || a === null ? Wt("Object expected") : (Qt(s = a.get) && (w.get = s), Qt(s = a.set) && (w.set = s), Qt(s = a.init) && b.unshift(s));
  return f || Ho(e, i), w && Gn(i, r, w), A ? f ^ 4 ? o : w : i;
}, Kn = (e, t, r) => t.has(e) || Wt("Cannot " + r), Xa = (e, t) => Object(t) !== t ? Wt('Cannot use the "in" operator on this value') : e.has(t), Sn = (e, t, r) => (Kn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Xt = (e, t, r) => t.has(e) ? Wt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Ur = (e, t, r, n) => (Kn(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), Ga = (e, t, r) => (Kn(e, t, "access private method"), r), $e = class En {
  /**
   * @param {number} Coordinate of the point on the horizontal axis
   * @param {number} Coordinate of the point on the vertical axis
   */
  constructor(t, r) {
    this.x = t, this.y = r;
  }
  /**
   * Returns the delta between this point and another point.
   *
   * @param {Point} a - A point
   * @param {Point} b - Another point
   */
  static delta(t, r) {
    return new En(t.x - r.x, t.y - r.y);
  }
  /**
   * Returns the distance (hypotenuse) between this point and another point.
   *
   * @param {Point} a - A point
   * @param {Point} b - Another point
   */
  static distance(t, r) {
    return Math.hypot(t.x - r.x, t.y - r.y);
  }
  /**
   * Returns true if both points are equal.
   *
   * @param {Point} a - A point
   * @param {Point} b - Another point
   */
  static equals(t, r) {
    return t.x === r.x && t.y === r.y;
  }
  static from({ x: t, y: r }) {
    return new En(t, r);
  }
}, Jn = class gt {
  constructor(t, r, n, i) {
    this.left = t, this.top = r, this.width = n, this.height = i, this.scale = {
      x: 1,
      y: 1
    };
  }
  get inverseScale() {
    return {
      x: 1 / this.scale.x,
      y: 1 / this.scale.y
    };
  }
  translate(t, r) {
    const { top: n, left: i, width: o, height: s, scale: a } = this, d = new gt(i + t, n + r, o, s);
    return d.scale = Va({}, a), d;
  }
  get boundingRectangle() {
    const { width: t, height: r, left: n, top: i, right: o, bottom: s } = this;
    return { width: t, height: r, left: n, top: i, right: o, bottom: s };
  }
  get center() {
    const { left: t, top: r, right: n, bottom: i } = this;
    return new $e((t + n) / 2, (r + i) / 2);
  }
  get area() {
    const { width: t, height: r } = this;
    return t * r;
  }
  equals(t) {
    if (!(t instanceof gt))
      return !1;
    const { left: r, top: n, width: i, height: o } = this;
    return r === t.left && n === t.top && i === t.width && o === t.height;
  }
  containsPoint(t) {
    const { top: r, left: n, bottom: i, right: o } = this;
    return r <= t.y && t.y <= i && n <= t.x && t.x <= o;
  }
  intersectionArea(t) {
    return t instanceof gt ? Ka(this, t) : 0;
  }
  intersectionRatio(t) {
    const { area: r } = this, n = this.intersectionArea(t);
    return n / (t.area + r - n);
  }
  get bottom() {
    const { top: t, height: r } = this;
    return t + r;
  }
  get right() {
    const { left: t, width: r } = this;
    return t + r;
  }
  static from({ top: t, left: r, width: n, height: i }) {
    return new gt(r, t, n, i);
  }
  static intersectionRatio(t, r) {
    return gt.from(t).intersectionRatio(gt.from(r));
  }
};
function Ka(e, t) {
  const r = Math.max(t.top, e.top), n = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), o = Math.min(t.top + t.height, e.top + e.height), s = i - n, a = o - r;
  return n < i && r < o ? s * a : 0;
}
var Xi = 10, qo, Xo, Go, Ko, Jo, Qo, er, we, Qn, ei, ti, ri;
Qo = [le], Jo = [le], Ko = [le], Go = [le], Xo = [Fr], qo = [Fr];
var ut = class {
  constructor(e) {
    et(we, 5, this), Xt(this, er, 0), Xt(this, Qn, et(we, 8, this, {
      x: 0,
      y: 0
    })), et(we, 11, this), Xt(this, ei, et(we, 12, this)), et(we, 15, this), Xt(this, ti, et(we, 16, this)), et(we, 19, this), Xt(this, ri, et(we, 20, this)), et(we, 23, this);
    const t = $e.from(e);
    this.initial = t, this.current = t, this.previous = t;
  }
  get delta() {
    return $e.delta(this.current, this.initial);
  }
  get direction() {
    const e = {
      x: this.current.x - this.previous.x,
      y: this.current.y - this.previous.y
    };
    return !e.x && !e.y ? null : Math.abs(e.x) > Math.abs(e.y) ? e.x > 0 ? "right" : "left" : e.y > 0 ? "down" : "up";
  }
  reset(e) {
    const t = $e.from(e);
    pe(() => {
      Ur(this, er, 0), this.velocity = { x: 0, y: 0 }, this.current = t, this.previous = t, this.initial = t;
    });
  }
  update(e) {
    const { current: t } = this, r = $e.from(e);
    if ($e.equals(t, r))
      return;
    const n = {
      x: r.x - t.x,
      y: r.y - t.y
    }, i = Date.now(), o = i - Sn(this, er), s = (a) => Math.round(a / o * 100);
    (Math.abs(n.x) < Xi || Math.abs(n.y) < Xi) && (this.previous = t), Ur(this, er, i), this.velocity = {
      x: s(n.x),
      y: s(n.y)
    }, this.current = r;
  }
};
we = Ha();
er = /* @__PURE__ */ new WeakMap();
Qn = /* @__PURE__ */ new WeakMap();
ei = /* @__PURE__ */ new WeakMap();
ti = /* @__PURE__ */ new WeakMap();
ri = /* @__PURE__ */ new WeakMap();
Ft(we, 4, "velocity", Qo, ut, Qn);
Ft(we, 4, "initial", Jo, ut, ei);
Ft(we, 4, "previous", Ko, ut, ti);
Ft(we, 4, "current", Go, ut, ri);
Ft(we, 2, "delta", Xo, ut);
Ft(we, 2, "direction", qo, ut);
Ho(we, ut);
function Tt({ x: e, y: t }, r) {
  const n = Math.abs(e), i = Math.abs(t);
  return typeof r == "number" ? Math.sqrt(Hi(n, 2) + Hi(i, 2)) > r : "x" in r && "y" in r ? n > r.x && i > r.y : "x" in r ? n > r.x : "y" in r ? i > r.y : !1;
}
var es = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(es || {}), ts = Object.values(es), Ja = Object.create, ni = Object.defineProperty, Qa = Object.defineProperties, el = Object.getOwnPropertyDescriptor, tl = Object.getOwnPropertyDescriptors, Zr = Object.getOwnPropertySymbols, rs = Object.prototype.hasOwnProperty, ns = Object.prototype.propertyIsEnumerable, is = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Ut = (e) => {
  throw TypeError(e);
}, In = (e, t, r) => t in e ? ni(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, ii = (e, t) => {
  for (var r in t || (t = {}))
    rs.call(t, r) && In(e, r, t[r]);
  if (Zr)
    for (var r of Zr(t))
      ns.call(t, r) && In(e, r, t[r]);
  return e;
}, os = (e, t) => Qa(e, tl(t)), Gi = (e, t) => ni(e, "name", { value: t, configurable: !0 }), ss = (e, t) => {
  var r = {};
  for (var n in e)
    rs.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && Zr)
    for (var n of Zr(e))
      t.indexOf(n) < 0 && ns.call(e, n) && (r[n] = e[n]);
  return r;
}, Qr = (e) => {
  var t;
  return [, , , Ja((t = e == null ? void 0 : e[is("metadata")]) != null ? t : null)];
}, as = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], tr = (e) => e !== void 0 && typeof e != "function" ? Ut("Function expected") : e, rl = (e, t, r, n, i) => ({ kind: as[e], name: t, metadata: n, addInitializer: (o) => r._ ? Ut("Already initialized") : i.push(tr(o || null)) }), kr = (e, t) => In(t, is("metadata"), e[3]), ae = (e, t, r, n) => {
  for (var i = 0, o = e[t >> 1], s = o && o.length; i < s; i++) t & 1 ? o[i].call(r) : n = o[i].call(r, n);
  return n;
}, Pe = (e, t, r, n, i, o) => {
  var s, a, d, h, _, f = t & 7, D = !!(t & 8), A = !!(t & 16), v = f > 3 ? e.length + 1 : f ? D ? 1 : 2 : 0, M = as[f + 5], b = f > 3 && (e[v - 1] = []), y = e[v] || (e[v] = []), w = f && (!A && !D && (i = i.prototype), f < 5 && (f > 3 || !A) && el(f < 4 ? i : { get [r]() {
    return mt(this, o);
  }, set [r](x) {
    return jt(this, o, x);
  } }, r));
  f ? A && f < 4 && Gi(o, (f > 2 ? "set " : f > 1 ? "get " : "") + r) : Gi(i, r);
  for (var C = n.length - 1; C >= 0; C--)
    h = rl(f, r, d = {}, e[3], y), f && (h.static = D, h.private = A, _ = h.access = { has: A ? (x) => nl(i, x) : (x) => r in x }, f ^ 3 && (_.get = A ? (x) => (f ^ 1 ? mt : il)(x, i, f ^ 4 ? o : w.get) : (x) => x[r]), f > 2 && (_.set = A ? (x, E) => jt(x, i, E, f ^ 4 ? o : w.set) : (x, E) => x[r] = E)), a = (0, n[C])(f ? f < 4 ? A ? o : w[M] : f > 4 ? void 0 : { get: w.get, set: w.set } : i, h), d._ = 1, f ^ 4 || a === void 0 ? tr(a) && (f > 4 ? b.unshift(a) : f ? A ? o = a : w[M] = a : i = a) : typeof a != "object" || a === null ? Ut("Object expected") : (tr(s = a.get) && (w.get = s), tr(s = a.set) && (w.set = s), tr(s = a.init) && b.unshift(s));
  return f || kr(e, i), w && ni(i, r, w), A ? f ^ 4 ? o : w : i;
}, oi = (e, t, r) => t.has(e) || Ut("Cannot " + r), nl = (e, t) => Object(t) !== t ? Ut('Cannot use the "in" operator on this value') : e.has(t), mt = (e, t, r) => (oi(e, t, "read from private field"), r ? r.call(e) : t.get(e)), De = (e, t, r) => t.has(e) ? Ut("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), jt = (e, t, r, n) => (oi(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), il = (e, t, r) => (oi(e, t, "access private method"), r);
function ls(e, t) {
  return {
    plugin: e,
    options: t
  };
}
function si(e) {
  return (t) => ls(e, t);
}
function ai(e) {
  return typeof e == "function" ? {
    plugin: e,
    options: void 0
  } : e;
}
var cs, pr, li;
cs = [le];
var Ae = class {
  constructor(e, t) {
    this.manager = e, this.options = t, De(this, li, ae(pr, 8, this, !1)), ae(pr, 11, this);
  }
  /**
   * Enable a disabled plugin instance.
   * Triggers effects.
   */
  enable() {
    this.disabled = !1;
  }
  /**
   * Disable an enabled plugin instance.
   * Triggers effects.
   */
  disable() {
    this.disabled = !0;
  }
  /**
   * Whether the plugin instance is disabled.
   * Does not trigger effects when accessed.
   */
  isDisabled() {
    return Ve(() => this.disabled);
  }
  /**
   * Configure a plugin instance with new options.
   */
  configure(e) {
    this.options = e;
  }
  /**
   * Destroy a plugin instance.
   */
  destroy() {
  }
  /**
   * Configure a plugin constructor with options.
   * This method is used to configure the options that the
   * plugin constructor will use to create plugin instances.
   */
  static configure(e) {
    return ls(this, e);
  }
};
pr = Qr(null);
li = /* @__PURE__ */ new WeakMap();
Pe(pr, 4, "disabled", cs, Ae, li);
kr(pr, Ae);
var en = class extends Ae {
}, jr, un = class {
  constructor(e) {
    this.manager = e, this.instances = /* @__PURE__ */ new Map(), De(this, jr, []);
  }
  get values() {
    return Array.from(this.instances.values());
  }
  set values(e) {
    const t = e.map(ai).reduceRight((n, i) => n.some(({ plugin: o }) => o === i.plugin) ? n : [i, ...n], []), r = t.map(({ plugin: n }) => n);
    for (const n of mt(this, jr))
      if (!r.includes(n)) {
        if (n.prototype instanceof en)
          continue;
        this.unregister(n);
      }
    for (const { plugin: n, options: i } of t)
      this.register(n, i);
    jt(this, jr, r);
  }
  get(e) {
    return this.instances.get(e);
  }
  register(e, t) {
    const r = this.instances.get(e);
    if (r)
      return r.options !== t && (r.options = t), r;
    const n = new e(this.manager, t);
    return this.instances.set(e, n), n;
  }
  unregister(e) {
    const t = this.instances.get(e);
    t && (t.destroy(), this.instances.delete(e));
  }
  destroy() {
    for (const e of this.instances.values())
      e.destroy();
    this.instances.clear();
  }
};
jr = /* @__PURE__ */ new WeakMap();
function ol(e, t) {
  return e.priority === t.priority ? e.type === t.type ? t.value - e.value : t.type - e.type : t.priority - e.priority;
}
var Ki = [], rr, Ot, sl = class extends Ae {
  constructor(e) {
    super(e), De(this, rr), De(this, Ot), this.computeCollisions = this.computeCollisions.bind(this), jt(this, Ot, Ce(Ki)), this.destroy = Jr(
      () => {
        const t = this.computeCollisions(), r = Ve(
          () => this.manager.dragOperation.position.current
        ), n = mt(this, rr);
        jt(this, rr, r), !(n && r.x == n.x && r.y == n.y) && (mt(this, Ot).value = t);
      },
      () => {
        const { dragOperation: t } = this.manager;
        t.status.initialized && this.forceUpdate();
      }
    );
  }
  forceUpdate(e = !0) {
    Ve(() => {
      e ? mt(this, Ot).value = this.computeCollisions() : jt(this, rr, void 0);
    });
  }
  computeCollisions(e, t) {
    const { registry: r, dragOperation: n } = this.manager, { source: i, shape: o, status: s } = n;
    if (!s.initialized || !o)
      return Ki;
    const a = [];
    for (const d of e ?? r.droppables) {
      if (d.disabled || i && !d.accepts(i))
        continue;
      const h = t ?? d.collisionDetector;
      if (!h)
        continue;
      d.shape;
      const _ = Ve(
        () => h({
          droppable: d,
          dragOperation: n
        })
      );
      _ && (d.collisionPriority != null && (_.priority = d.collisionPriority), a.push(_));
    }
    return a.sort(ol), a;
  }
  get collisions() {
    return mt(this, Ot).value;
  }
};
rr = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
var al = class {
  constructor() {
    this.registry = /* @__PURE__ */ new Map();
  }
  addEventListener(e, t) {
    const { registry: r } = this, n = new Set(r.get(e));
    return n.add(t), r.set(e, n), () => this.removeEventListener(e, t);
  }
  removeEventListener(e, t) {
    const { registry: r } = this, n = new Set(r.get(e));
    n.delete(t), r.set(e, n);
  }
  dispatch(e, ...t) {
    const { registry: r } = this, n = r.get(e);
    if (n)
      for (const i of n)
        i(...t);
  }
}, ll = class extends al {
  constructor(e) {
    super(), this.manager = e;
  }
  dispatch(e, t) {
    const r = [t, this.manager];
    super.dispatch(e, ...r);
  }
};
function Rr(e, t = !0) {
  let r = !1;
  return os(ii({}, e), {
    cancelable: t,
    get defaultPrevented() {
      return r;
    },
    preventDefault() {
      t && (r = !0);
    }
  });
}
var cl = class extends en {
  constructor(e) {
    super(e);
    const t = (n, i) => n.map(({ id: o }) => o).join("") === i.map(({ id: o }) => o).join("");
    let r = [];
    this.destroy = Jr(
      () => {
        const { dragOperation: n, collisionObserver: i } = e;
        n.status.initializing && (r = [], i.enable());
      },
      () => {
        const { collisionObserver: n, monitor: i } = e, { collisions: o } = n;
        if (n.isDisabled())
          return;
        const s = Rr({
          collisions: o
        });
        if (i.dispatch("collision", s), s.defaultPrevented || t(o, r))
          return;
        r = o;
        const [a] = o;
        Ve(() => {
          var d;
          (a == null ? void 0 : a.id) !== ((d = e.dragOperation.target) == null ? void 0 : d.id) && (n.disable(), e.actions.setDropTarget(a == null ? void 0 : a.id).then(() => {
            n.enable();
          }));
        });
      }
    );
  }
}, Ge = /* @__PURE__ */ ((e) => (e[e.Lowest = 0] = "Lowest", e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Highest = 4] = "Highest", e))(Ge || {}), dt = /* @__PURE__ */ ((e) => (e[e.Collision = 0] = "Collision", e[e.ShapeIntersection = 1] = "ShapeIntersection", e[e.PointerIntersection = 2] = "PointerIntersection", e))(dt || {}), us, ds, fs, ps, Me, ci, ui, di, fi;
ps = [le], fs = [le], ds = [le], us = [le];
var ft = class {
  /**
   * Creates a new instance of the `Entity` class.
   *
   * @param input - An object containing the initial properties of the entity.
   * @param manager - The manager that controls the drag and drop operations.
   */
  constructor(e, t) {
    De(this, ci, ae(Me, 8, this)), ae(Me, 11, this), De(this, ui, ae(Me, 12, this)), ae(Me, 15, this), De(this, di, ae(Me, 16, this)), ae(Me, 19, this), De(this, fi, ae(Me, 20, this)), ae(Me, 23, this);
    const { effects: r, id: n, data: i = {}, disabled: o = !1 } = e;
    let s = n;
    this.manager = t, this.id = n, this.data = i, this.disabled = o, this.effects = () => {
      var a;
      return [
        () => {
          const { id: d, manager: h } = this;
          if (d !== s)
            return h == null || h.registry.register(this), () => h == null ? void 0 : h.registry.unregister(this);
        },
        ...(a = r == null ? void 0 : r()) != null ? a : []
      ];
    }, this.register = this.register.bind(this), this.unregister = this.unregister.bind(this), this.destroy = this.destroy.bind(this), t && queueMicrotask(() => {
      var a;
      return (a = this.manager) == null ? void 0 : a.registry.register(this);
    });
  }
  /**
   * A method that registers the entity with the manager.
   * @returns CleanupFunction | void
   */
  register() {
    var e;
    return (e = this.manager) == null ? void 0 : e.registry.register(this);
  }
  /**
   * A method that unregisters the entity from the manager.
   * @returns void
   */
  unregister() {
    var e;
    (e = this.manager) == null || e.registry.unregister(this);
  }
  /**
   * A method that cleans up the entity when it is no longer needed.
   * @returns void
   */
  destroy() {
    var e;
    (e = this.manager) == null || e.registry.unregister(this);
  }
};
Me = Qr(null);
ci = /* @__PURE__ */ new WeakMap();
ui = /* @__PURE__ */ new WeakMap();
di = /* @__PURE__ */ new WeakMap();
fi = /* @__PURE__ */ new WeakMap();
Pe(Me, 4, "manager", ps, ft, ci);
Pe(Me, 4, "id", fs, ft, ui);
Pe(Me, 4, "data", ds, ft, di);
Pe(Me, 4, "disabled", us, ft, fi);
kr(Me, ft);
var Ji = class {
  constructor() {
    this.map = Ce(/* @__PURE__ */ new Map()), this.cleanupFunctions = /* @__PURE__ */ new WeakMap(), this.register = (e, t) => {
      const r = this.map.peek(), n = r.get(e), i = () => this.unregister(e, t);
      if (n === t) return i;
      if (n) {
        const a = this.cleanupFunctions.get(n);
        a == null || a(), this.cleanupFunctions.delete(n);
      }
      const o = new Map(r);
      o.set(e, t), this.map.value = o;
      const s = Jr(...t.effects());
      return this.cleanupFunctions.set(t, s), i;
    }, this.unregister = (e, t) => {
      const r = this.map.peek();
      if (r.get(e) !== t)
        return;
      const n = this.cleanupFunctions.get(t);
      n == null || n(), this.cleanupFunctions.delete(t);
      const i = new Map(r);
      i.delete(e), this.map.value = i;
    };
  }
  /**
   * Iterator for the EntityRegistry class.
   * @returns An iterator for the values in the map.
   */
  [Symbol.iterator]() {
    return this.map.peek().values();
  }
  get value() {
    return this.map.value.values();
  }
  /**
   * Checks if a entity with the given identifier exists in the registry.
   * @param identifier - The unique identifier of the entity.
   * @returns True if the entity exists, false otherwise.
   */
  has(e) {
    return this.map.value.has(e);
  }
  /**
   * Retrieves a entity from the registry using its identifier.
   * @param identifier - The unique identifier of the entity.
   * @returns The entity if it exists, undefined otherwise.
   */
  get(e) {
    return this.map.value.get(e);
  }
  /**
   * Destroys all entries in the registry and clears the registry.
   */
  destroy() {
    for (const e of this) {
      const t = this.cleanupFunctions.get(e);
      t == null || t(), e.destroy();
    }
    this.map.value = /* @__PURE__ */ new Map();
  }
}, hs, gs, vs, ys, Dn, je, pi, hi, gi, ct = class extends (Dn = ft, ys = [le], vs = [le], gs = [le], hs = [Fr], Dn) {
  constructor(t, r) {
    var n = t, { modifiers: i, type: o, sensors: s } = n, a = ss(n, ["modifiers", "type", "sensors"]);
    super(a, r), ae(je, 5, this), De(this, pi, ae(je, 8, this)), ae(je, 11, this), De(this, hi, ae(je, 12, this)), ae(je, 15, this), De(this, gi, ae(je, 16, this, "idle")), ae(je, 19, this), this.type = o, this.sensors = s, this.modifiers = i;
  }
  get isDragSource() {
    var t, r;
    return ((r = (t = this.manager) == null ? void 0 : t.dragOperation.source) == null ? void 0 : r.id) === this.id;
  }
};
je = Qr(Dn);
pi = /* @__PURE__ */ new WeakMap();
hi = /* @__PURE__ */ new WeakMap();
gi = /* @__PURE__ */ new WeakMap();
Pe(je, 4, "modifiers", ys, ct, pi);
Pe(je, 4, "type", vs, ct, hi);
Pe(je, 4, "status", gs, ct, gi);
Pe(je, 2, "isDragSource", hs, ct);
kr(je, ct);
var ms, bs, _s, ws, xs, ks, An, ge, vi, yi, mi, bi, _i, Je = class extends (An = ft, ks = [le], xs = [le], ws = [le], _s = [le], bs = [le], ms = [Fr], An) {
  constructor(t, r) {
    var n = t, { accept: i, collisionDetector: o, collisionPriority: s, type: a } = n, d = ss(n, ["accept", "collisionDetector", "collisionPriority", "type"]);
    super(d, r), ae(ge, 5, this), De(this, vi, ae(ge, 8, this)), ae(ge, 11, this), De(this, yi, ae(ge, 12, this)), ae(ge, 15, this), De(this, mi, ae(ge, 16, this)), ae(ge, 19, this), De(this, bi, ae(ge, 20, this)), ae(ge, 23, this), De(this, _i, ae(ge, 24, this)), ae(ge, 27, this), this.accept = i, this.collisionDetector = o, this.collisionPriority = s, this.type = a;
  }
  /**
   * Checks whether or not the droppable accepts a given draggable.
   *
   * @param {Draggable} draggable
   * @returns {boolean}
   */
  accepts(t) {
    const { accept: r } = this;
    return r ? typeof r == "function" ? r(t) : t.type ? Array.isArray(r) ? r.includes(t.type) : t.type === r : !1 : !0;
  }
  get isDropTarget() {
    var t, r;
    return ((r = (t = this.manager) == null ? void 0 : t.dragOperation.target) == null ? void 0 : r.id) === this.id;
  }
};
ge = Qr(An);
vi = /* @__PURE__ */ new WeakMap();
yi = /* @__PURE__ */ new WeakMap();
mi = /* @__PURE__ */ new WeakMap();
bi = /* @__PURE__ */ new WeakMap();
_i = /* @__PURE__ */ new WeakMap();
Pe(ge, 4, "accept", ks, Je, vi);
Pe(ge, 4, "type", xs, Je, yi);
Pe(ge, 4, "collisionDetector", ws, Je, mi);
Pe(ge, 4, "collisionPriority", _s, Je, bi);
Pe(ge, 4, "shape", bs, Je, _i);
Pe(ge, 2, "isDropTarget", ms, Je);
kr(ge, Je);
var wt = class extends Ae {
  constructor(e, t) {
    super(e, t), this.manager = e, this.options = t;
  }
}, Qi = class extends Ae {
  constructor(e, t) {
    super(e, t), this.manager = e, this.options = t;
  }
  apply(e) {
    return e.transform;
  }
}, ul = class {
  constructor(e) {
    this.draggables = new Ji(), this.droppables = new Ji(), this.plugins = new un(e), this.sensors = new un(e), this.modifiers = new un(e);
  }
  register(e, t) {
    if (e instanceof ct)
      return this.draggables.register(e.id, e);
    if (e instanceof Je)
      return this.droppables.register(e.id, e);
    if (e.prototype instanceof Qi)
      return this.modifiers.register(e, t);
    if (e.prototype instanceof wt)
      return this.sensors.register(e, t);
    if (e.prototype instanceof Ae)
      return this.plugins.register(e, t);
    throw new Error("Invalid instance type");
  }
  unregister(e) {
    if (e instanceof ft)
      return e instanceof ct ? this.draggables.unregister(e.id, e) : e instanceof Je ? this.droppables.unregister(e.id, e) : () => {
      };
    if (e.prototype instanceof Qi)
      return this.modifiers.unregister(e);
    if (e.prototype instanceof wt)
      return this.sensors.unregister(e);
    if (e.prototype instanceof Ae)
      return this.plugins.unregister(e);
    throw new Error("Invalid instance type");
  }
  destroy() {
    this.draggables.destroy(), this.droppables.destroy(), this.plugins.destroy(), this.sensors.destroy(), this.modifiers.destroy();
  }
};
function dl(e) {
  const {
    registry: { draggables: t, droppables: r },
    monitor: n
  } = e, i = Ce(
    "idle"
    /* Idle */
  ), o = {
    initial: Ce(null),
    current: Ce(null)
  }, s = Ce(!1), a = new ut({ x: 0, y: 0 }), d = Ce(null), h = Ce(null), _ = Ce(null), f = Be(
    () => i.value === "dragging"
    /* Dragging */
  ), D = Be(
    () => i.value !== "idle"
    /* Idle */
  ), A = Be(
    () => i.value === "initializing"
    /* Initializing */
  ), v = Be(
    () => i.value === "idle"
    /* Idle */
  ), M = Be(
    () => i.value === "dropped"
    /* Dropped */
  ), b = Ce(!0);
  let y;
  const w = Be(() => {
    var c;
    const m = h.value;
    if (m == null) return null;
    const O = t.get(m);
    return O && (y = O), (c = O ?? y) != null ? c : null;
  }), C = Be(() => {
    var c;
    const m = _.value;
    return m != null && (c = r.get(m)) != null ? c : null;
  }), x = Ce([]), E = me(() => {
    var c, m, O;
    const z = x.peek();
    Bt(z, e.modifiers) || z.forEach((N) => N.destroy()), x.value = (O = (m = (c = w.value) == null ? void 0 : c.modifiers) == null ? void 0 : m.map((N) => {
      const { plugin: W, options: R } = ai(N);
      return new W(e, R);
    })) != null ? O : e.modifiers;
  }), k = Be(() => {
    const { x: c, y: m } = a.delta;
    let O = { x: c, y: m };
    const z = o.initial.peek(), N = o.current.peek(), W = {
      activatorEvent: d.peek(),
      canceled: s.peek(),
      source: w.peek(),
      target: C.peek(),
      status: {
        current: i.peek(),
        idle: v.peek(),
        initializing: A.peek(),
        initialized: D.peek(),
        dragging: f.peek(),
        dragended: b.peek(),
        dropped: M.peek()
      },
      shape: z && N ? { initial: z, current: N } : null,
      position: a
    };
    for (const R of x.value)
      O = R.apply(os(ii({}, W), { transform: O }));
    return O;
  }), P = {
    get activatorEvent() {
      return d.value;
    },
    get canceled() {
      return s.value;
    },
    get source() {
      return w.value;
    },
    get target() {
      return C.value;
    },
    status: {
      get current() {
        return i.value;
      },
      get idle() {
        return v.value;
      },
      get initializing() {
        return A.value;
      },
      get initialized() {
        return D.value;
      },
      get dragging() {
        return f.value;
      },
      get dragended() {
        return b.value;
      },
      get dropped() {
        return M.value;
      }
    },
    get shape() {
      const c = o.initial.value, m = o.current.value;
      return c && m ? { initial: c, current: m } : null;
    },
    set shape(c) {
      var m;
      if (c && ((m = o.current.peek()) != null && m.equals(c)))
        return;
      o.initial.peek() || (o.initial.value = c), o.current.value = c;
    },
    get transform() {
      return k.value;
    },
    position: a
  }, u = () => {
    pe(() => {
      i.value = "idle", h.value = null, _.value = null, o.current.value = null, o.initial.value = null, a.reset({ x: 0, y: 0 }), x.value = [];
    });
  }, g = {
    setDragSource(c) {
      h.value = c;
    },
    setDropTarget(c) {
      const m = c ?? null;
      if (_.peek() === m)
        return Promise.resolve(!1);
      _.value = m;
      const O = Rr({
        operation: Gt(P)
      });
      return i.peek() === "dragging" && n.dispatch("dragover", O), e.renderer.rendering.then(() => O.defaultPrevented);
    },
    start({ event: c, coordinates: m }) {
      if (!w.peek())
        throw new Error("Cannot start a drag operation without a drag source");
      pe(() => {
        o.initial.value = null, o.current.value = null, b.value = !1, s.value = !1, d.value = c, a.reset(m);
      });
      const z = Rr({
        operation: Gt(P)
      });
      n.dispatch("beforedragstart", z), e.renderer.rendering.then(() => {
        if (z.defaultPrevented) {
          u();
          return;
        }
        i.value = "initializing", requestAnimationFrame(() => {
          i.value = "dragging", n.dispatch("dragstart", {
            operation: Gt(P),
            cancelable: !1
          });
        });
      });
    },
    move({
      by: c,
      to: m,
      cancelable: O = !0
    }) {
      if (!f.peek())
        return;
      const z = Rr(
        {
          operation: Gt(P),
          by: c,
          to: m
        },
        O
      );
      n.dispatch("dragmove", z), queueMicrotask(() => {
        if (z.defaultPrevented)
          return;
        const N = m ?? {
          x: a.current.x + c.x,
          y: a.current.y + c.y
        };
        a.update(N);
      });
    },
    stop({ canceled: c = !1 } = {}) {
      let m;
      const O = () => {
        const N = {
          resume: () => {
          },
          abort: () => {
          }
        };
        return m = new Promise((W, R) => {
          N.resume = W, N.abort = R;
        }), N;
      }, z = () => {
        e.renderer.rendering.then(() => {
          i.value = "dropped", e.renderer.rendering.then(u);
        });
      };
      pe(() => {
        b.value = !0, s.value = c;
      }), n.dispatch("dragend", {
        operation: Gt(P),
        canceled: c,
        suspend: O
      }), m ? m.then(z).catch(u) : z();
    }
  };
  return {
    operation: P,
    actions: g,
    cleanup() {
      i.peek() !== "idle" && g.stop({ canceled: !0 }), x.value.forEach((c) => c.destroy()), E();
    }
  };
}
function Gt(e) {
  return ii({}, e);
}
var fl = {
  get rendering() {
    return Promise.resolve();
  }
}, pl = class {
  constructor(t) {
    this.destroy = () => {
      this.registry.destroy(), this.collisionObserver.destroy();
    };
    const {
      plugins: r = [],
      sensors: n = [],
      modifiers: i = [],
      renderer: o = fl
    } = t ?? {}, s = new ll(this), a = new ul(this);
    this.registry = a, this.monitor = s, this.renderer = o;
    const { actions: d, operation: h, cleanup: _ } = dl(this);
    this.actions = d, this.dragOperation = h, this.collisionObserver = new sl(this), this.plugins = [cl, ...r], this.modifiers = i, this.sensors = n;
    const { destroy: f } = this;
    this.destroy = () => {
      _(), f();
    };
  }
  get plugins() {
    return this.registry.plugins.values;
  }
  set plugins(t) {
    this.registry.plugins.values = t;
  }
  get modifiers() {
    return this.registry.modifiers.values;
  }
  set modifiers(t) {
    this.registry.modifiers.values = t;
  }
  get sensors() {
    return this.registry.sensors.values;
  }
  set sensors(t) {
    this.registry.sensors.values = t;
  }
}, Ss = (e) => {
  throw TypeError(e);
}, wi = (e, t, r) => t.has(e) || Ss("Cannot " + r), H = (e, t, r) => (wi(e, t, "read from private field"), r ? r.call(e) : t.get(e)), qe = (e, t, r) => t.has(e) ? Ss("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Xe = (e, t, r, n) => (wi(e, t, "write to private field"), t.set(e, r), r), Es = (e, t, r) => (wi(e, t, "access private method"), r);
function Is(e) {
  const { width: t, height: r, top: n, left: i, bottom: o, right: s } = e.getBoundingClientRect();
  return { width: t, height: r, top: n, left: i, bottom: o, right: s };
}
var hl = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function xi(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function Ds(e) {
  return "nodeType" in e;
}
function be(e) {
  var t, r, n;
  return e ? xi(e) ? e : Ds(e) ? "defaultView" in e ? (t = e.defaultView) != null ? t : window : (n = (r = e.ownerDocument) == null ? void 0 : r.defaultView) != null ? n : window : window : window;
}
function As(e) {
  const { Document: t } = be(e);
  return e instanceof t;
}
function xt(e) {
  return !e || xi(e) ? !1 : e instanceof be(e).HTMLElement;
}
function ze(e) {
  return e ? xi(e) ? e.document : Ds(e) ? As(e) ? e : xt(e) ? e.ownerDocument : document : document : document;
}
function gl(e) {
  const { documentElement: t } = ze(e), r = t.clientWidth, n = t.clientHeight;
  return {
    top: 0,
    left: 0,
    right: r,
    bottom: n,
    width: r,
    height: n
  };
}
function vl(e, t) {
  const r = setTimeout(e, t);
  return () => clearTimeout(r);
}
function yl(e, t) {
  const r = () => performance.now();
  let n, i;
  return function(...o) {
    const s = this;
    i ? (n == null || n(), n = vl(
      () => {
        e.apply(s, o), i = r();
      },
      t - (r() - i)
    )) : (e.apply(s, o), i = r());
  };
}
function ml(e, t) {
  return e === t ? !0 : !e || !t ? !1 : e.top == t.top && e.left == t.left && e.right == t.right && e.bottom == t.bottom;
}
function bl(e, t) {
  if (e instanceof be(e).HTMLDetailsElement && e.open === !1)
    return !1;
  const { overflow: r, overflowX: n, overflowY: i } = getComputedStyle(e);
  return r === "visible" && n === "visible" && i === "visible";
}
function tn(e, t = e.getBoundingClientRect(), r = 0) {
  var n;
  let i = t;
  const { ownerDocument: o } = e, s = (n = o.defaultView) != null ? n : window;
  let a = e.parentElement;
  for (; a && a !== o.documentElement; ) {
    if (!bl(a)) {
      const D = a.getBoundingClientRect(), A = r * (D.bottom - D.top), v = r * (D.right - D.left), M = r * (D.bottom - D.top), b = r * (D.right - D.left);
      i = {
        top: Math.max(i.top, D.top - A),
        right: Math.min(i.right, D.right + v),
        bottom: Math.min(i.bottom, D.bottom + M),
        left: Math.max(i.left, D.left - b),
        width: 0,
        // Will be calculated next
        height: 0
        // Will be calculated next
      }, i.width = i.right - i.left, i.height = i.bottom - i.top;
    }
    a = a.parentElement;
  }
  const d = s.innerWidth, h = s.innerHeight, _ = r * h, f = r * d;
  return i = {
    top: Math.max(i.top, 0 - _),
    right: Math.min(i.right, d + f),
    bottom: Math.min(i.bottom, h + _),
    left: Math.max(i.left, 0 - f),
    width: 0,
    // Will be calculated next
    height: 0
    // Will be calculated next
  }, i.width = i.right - i.left, i.height = i.bottom - i.top, i.width < 0 && (i.width = 0), i.height < 0 && (i.height = 0), i;
}
function _l(e, t = e.getBoundingClientRect()) {
  const { width: r, height: n } = tn(
    e,
    t
  );
  return r > 0 && n > 0;
}
var eo = Array.from({ length: 100 }, (e, t) => t / 100), wl = 75, Lt, vt, Yr, nt, yt, nr, xe, ur, ir, Vr, Os, Ps, xl = class {
  constructor(e, t, r = { debug: !1 }) {
    this.element = e, qe(this, Vr), qe(this, Lt), qe(this, vt, !0), qe(this, Yr), qe(this, nt), qe(this, yt), qe(this, nr), qe(this, xe), qe(this, ur, !1), qe(this, ir, yl(() => {
      var i, o, s;
      const { element: a } = this;
      if ((i = H(this, yt)) == null || i.disconnect(), H(this, ur) || !H(this, vt) || !a.isConnected)
        return;
      const d = (o = a.ownerDocument) != null ? o : document, { innerHeight: h, innerWidth: _ } = (s = d.defaultView) != null ? s : window, f = a.getBoundingClientRect(), D = tn(a, f), { top: A, left: v, bottom: M, right: b } = D, y = -Math.floor(A), w = -Math.floor(v), C = -Math.floor(_ - b), x = -Math.floor(h - M), E = `${y}px ${C}px ${x}px ${w}px`;
      this.boundingClientRect = f, Xe(this, yt, new IntersectionObserver(
        (k) => {
          const [P] = k, { intersectionRect: u } = P;
          Jn.intersectionRatio(
            u,
            D
          ) !== 1 && H(this, ir).call(this);
        },
        {
          threshold: eo,
          rootMargin: E,
          root: d
        }
      )), H(this, yt).observe(a), Es(this, Vr, Os).call(this);
    }, wl)), Xe(this, Lt, t), this.boundingClientRect = e.getBoundingClientRect(), Xe(this, vt, _l(e, this.boundingClientRect));
    const n = e.ownerDocument;
    r != null && r.debug && (Xe(this, xe, document.createElement("div")), H(this, xe).style.background = "rgba(0,0,0,0.15)", H(this, xe).style.position = "fixed", H(this, xe).style.pointerEvents = "none", n.body.appendChild(H(this, xe))), Xe(this, nr, new IntersectionObserver(
      (i) => {
        var o, s;
        const a = i[i.length - 1], { boundingClientRect: d, isIntersecting: h } = a, { width: _, height: f } = d, D = H(this, vt);
        Xe(this, vt, h), !(!_ && !f) && (D && !h ? ((o = H(this, yt)) == null || o.disconnect(), H(this, Lt).call(this, null), (s = H(this, nt)) == null || s.disconnect(), Xe(this, nt, void 0), H(this, xe) && (H(this, xe).style.visibility = "hidden")) : H(this, ir).call(this), h && !H(this, nt) && (Xe(this, nt, new ResizeObserver(H(this, ir))), H(this, nt).observe(e)));
      },
      {
        threshold: eo,
        root: n
      }
    )), H(this, vt) && H(this, Lt).call(this, this.boundingClientRect), H(this, nr).observe(e);
  }
  disconnect() {
    var e, t, r;
    Xe(this, ur, !0), (e = H(this, nt)) == null || e.disconnect(), (t = H(this, yt)) == null || t.disconnect(), H(this, nr).disconnect(), (r = H(this, xe)) == null || r.remove();
  }
};
Lt = /* @__PURE__ */ new WeakMap();
vt = /* @__PURE__ */ new WeakMap();
Yr = /* @__PURE__ */ new WeakMap();
nt = /* @__PURE__ */ new WeakMap();
yt = /* @__PURE__ */ new WeakMap();
nr = /* @__PURE__ */ new WeakMap();
xe = /* @__PURE__ */ new WeakMap();
ur = /* @__PURE__ */ new WeakMap();
ir = /* @__PURE__ */ new WeakMap();
Vr = /* @__PURE__ */ new WeakSet();
Os = function() {
  H(this, ur) || (Es(this, Vr, Ps).call(this), !ml(this.boundingClientRect, H(this, Yr)) && (H(this, Lt).call(this, this.boundingClientRect), Xe(this, Yr, this.boundingClientRect)));
};
Ps = function() {
  if (H(this, xe)) {
    const { top: e, left: t, width: r, height: n } = tn(
      this.element
    );
    H(this, xe).style.overflow = "hidden", H(this, xe).style.visibility = "visible", H(this, xe).style.top = `${Math.floor(e)}px`, H(this, xe).style.left = `${Math.floor(t)}px`, H(this, xe).style.width = `${Math.floor(r)}px`, H(this, xe).style.height = `${Math.floor(n)}px`;
  }
};
function kl() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function Sl(e) {
  const t = be(e), r = "input, textarea, select, canvas, [contenteditable]", n = e.cloneNode(!0), i = Array.from(e.querySelectorAll(r));
  return Array.from(n.querySelectorAll(r)).forEach((s, a) => {
    const d = i[a];
    if (to(s) && to(d) && (s.type !== "file" && (s.value = d.value), s.type === "radio" && s.name && (s.name = `Cloned__${s.name}`)), s instanceof t.HTMLCanvasElement && d instanceof t.HTMLCanvasElement && d.width > 0 && d.height > 0) {
      const h = s.getContext("2d");
      h == null || h.drawImage(d, 0, 0);
    }
  }), n;
}
function to(e) {
  return "value" in e;
}
function Cs(e, { x: t, y: r }) {
  const n = e.elementFromPoint(t, r);
  if (n instanceof HTMLIFrameElement) {
    const { contentDocument: i } = n;
    if (i) {
      const { left: o, top: s } = n.getBoundingClientRect();
      return Cs(i, {
        x: t - o,
        y: r - s
      });
    }
  }
  return n;
}
var On = /* @__PURE__ */ new WeakMap(), ki = class {
  constructor() {
    this.entries = /* @__PURE__ */ new Set(), this.clear = () => {
      for (const e of this.entries) {
        const [t, { type: r, listener: n, options: i }] = e;
        t.removeEventListener(r, n, i);
      }
      this.entries.clear();
    };
  }
  bind(e, t) {
    const r = Array.isArray(t) ? t : [t], n = [];
    for (const i of r) {
      const { type: o, listener: s, options: a } = i, d = [e, i];
      e.addEventListener(o, s, a), this.entries.add(d), n.push(d);
    }
    return function() {
      for (const [o, { type: s, listener: a, options: d }] of n)
        o.removeEventListener(s, a, d);
    };
  }
};
function Pn(e) {
  return "showPopover" in e && "hidePopover" in e && typeof e.showPopover == "function" && typeof e.hidePopover == "function";
}
function dn(e) {
  Pn(e) && e.isConnected && e.hasAttribute("popover") && e.showPopover();
}
function ro(e) {
  return !hl || !e ? !1 : e === ze(e).scrollingElement;
}
function Ms(e) {
  const t = be(e), r = ro(e) ? gl(e) : Is(e), n = ro(e) ? {
    height: t.innerHeight,
    width: t.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, i = {
    current: {
      x: e.scrollLeft,
      y: e.scrollTop
    },
    max: {
      x: e.scrollWidth - n.width,
      y: e.scrollHeight - n.height
    }
  }, o = i.current.y <= 0, s = i.current.x <= 0, a = i.current.y >= i.max.y, d = i.current.x >= i.max.x;
  return {
    rect: r,
    position: i,
    isTop: o,
    isLeft: s,
    isBottom: a,
    isRight: d
  };
}
function El(e, t) {
  const { isTop: r, isBottom: n, isLeft: i, isRight: o, position: s } = Ms(e), { x: a, y: d } = t ?? { x: 0, y: 0 }, h = !r && s.current.y + d > 0, _ = !n && s.current.y + d < s.max.y, f = !i && s.current.x + a > 0, D = !o && s.current.x + a < s.max.x;
  return {
    top: h,
    bottom: _,
    left: f,
    right: D,
    x: f || D,
    y: h || _
  };
}
function Il(e) {
  return e instanceof be(e).SVGElement;
}
function Qe(e) {
  return be(e).getComputedStyle(e);
}
function Dl(e, t = Qe(e)) {
  return t.position === "fixed" || t.position === "sticky";
}
function Al(e, t = Qe(e)) {
  const r = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((i) => {
    const o = t[i];
    return typeof o == "string" ? r.test(o) : !1;
  });
}
var Ol = {
  excludeElement: !0
};
function Cn(e, t = Ol) {
  const { limit: r, excludeElement: n } = t, i = /* @__PURE__ */ new Set();
  function o(s) {
    if (r != null && i.size >= r || !s)
      return i;
    if (As(s) && s.scrollingElement != null && !i.has(s.scrollingElement))
      return i.add(s.scrollingElement), i;
    if (!xt(s))
      return Il(s) ? o(s.parentElement) : i;
    if (i.has(s))
      return i;
    const a = Qe(s);
    if (n && s === e || Al(s, a) && i.add(s), Dl(s, a)) {
      const { scrollingElement: d } = s.ownerDocument;
      return d && i.add(d), i;
    }
    return o(s.parentNode);
  }
  return e ? o(e) : i;
}
function Pl(e) {
  const [t] = Cn(e, { limit: 1 });
  return t ?? null;
}
function Hr(e) {
  const t = e == null ? void 0 : e.ownerDocument.defaultView;
  return t && t.self !== t.parent ? t.frameElement : null;
}
function kt(e, t = window.frameElement) {
  const r = {
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1
  };
  if (!e) return r;
  let n = Hr(e);
  for (; n; ) {
    if (n === t)
      return r;
    const i = n.getBoundingClientRect(), { x: o, y: s } = Cl(n, i);
    r.x = r.x + i.left, r.y = r.y + i.top, r.scaleX = r.scaleX * o, r.scaleY = r.scaleY * s, n = Hr(n);
  }
  return r;
}
function Cl(e, t = e.getBoundingClientRect()) {
  const r = Math.round(t.width), n = Math.round(t.height);
  if (xt(e))
    return {
      x: r / e.offsetWidth,
      y: n / e.offsetHeight
    };
  const i = Qe(e);
  return {
    x: (parseFloat(i.width) || r) / r,
    y: (parseFloat(i.height) || n) / n
  };
}
var We = /* @__PURE__ */ ((e) => (e[e.Idle = 0] = "Idle", e[e.Forward = 1] = "Forward", e[e.Reverse = -1] = "Reverse", e))(We || {}), Ml = {
  x: 0.2,
  y: 0.2
}, $l = {
  x: 10,
  y: 10
};
function Ll(e, t, r, n = 25, i = Ml, o = $l) {
  const { x: s, y: a } = t, { rect: d, isTop: h, isBottom: _, isLeft: f, isRight: D } = Ms(e), A = kt(e), v = new Jn(
    d.left * A.scaleX + A.x,
    d.top * A.scaleY + A.y,
    d.width * A.scaleX,
    d.height * A.scaleY
  ), M = {
    x: 0,
    y: 0
    /* Idle */
  }, b = {
    x: 0,
    y: 0
  }, y = {
    height: v.height * i.y,
    width: v.width * i.x
  };
  return !h && a <= v.top + y.height && (r == null ? void 0 : r.y) !== 1 && s >= v.left - o.x && s <= v.right + o.x ? (M.y = -1, b.y = n * Math.abs(
    (v.top + y.height - a) / y.height
  )) : !_ && a >= v.bottom - y.height && (r == null ? void 0 : r.y) !== -1 && s >= v.left - o.x && s <= v.right + o.x && (M.y = 1, b.y = n * Math.abs(
    (v.bottom - y.height - a) / y.height
  )), !D && s >= v.right - y.width && (r == null ? void 0 : r.x) !== -1 && a >= v.top - o.y && a <= v.bottom + o.y ? (M.x = 1, b.x = n * Math.abs(
    (v.right - y.width - s) / y.width
  )) : !f && s <= v.left + y.width && (r == null ? void 0 : r.x) !== 1 && a >= v.top - o.y && a <= v.bottom + o.y && (M.x = -1, b.x = n * Math.abs(
    (v.left + y.width - s) / y.width
  )), {
    direction: M,
    speed: b
  };
}
function Tl(e) {
  return "scrollIntoViewIfNeeded" in e && typeof e.scrollIntoViewIfNeeded == "function";
}
function $s(e, t = !1) {
  if (Tl(e)) {
    e.scrollIntoViewIfNeeded(t);
    return;
  }
  if (!xt(e))
    return e.scrollIntoView();
  var r = Pl(e);
  if (!xt(r))
    return;
  const n = Qe(r), i = parseInt(
    n.getPropertyValue("border-top-width")
  ), o = parseInt(
    n.getPropertyValue("border-left-width")
  ), s = e.offsetTop - r.offsetTop < r.scrollTop, a = e.offsetTop - r.offsetTop + e.clientHeight - i > r.scrollTop + r.clientHeight, d = e.offsetLeft - r.offsetLeft < r.scrollLeft, h = e.offsetLeft - r.offsetLeft + e.clientWidth - o > r.scrollLeft + r.clientWidth, _ = s && !a;
  (s || a) && t && (r.scrollTop = e.offsetTop - r.offsetTop - r.clientHeight / 2 - i + e.clientHeight / 2), (d || h) && t && (r.scrollLeft = e.offsetLeft - r.offsetLeft - r.clientWidth / 2 - o + e.clientWidth / 2), (s || a || d || h) && !t && e.scrollIntoView(_);
}
var jl = class {
  constructor() {
    this.tasks = /* @__PURE__ */ new Set(), this.flush = () => {
      const e = this.tasks;
      this.animationFrame = void 0, this.tasks = /* @__PURE__ */ new Set();
      for (const t of e)
        t();
    };
  }
  schedule(e) {
    this.tasks.add(e), this.animationFrame || (this.animationFrame = requestAnimationFrame(this.flush));
  }
}, Rl = new jl();
function Bl(e, t, r) {
  const { scaleX: n, scaleY: i, x: o, y: s } = t, a = e.left - o - (1 - n) * parseFloat(r), d = e.top - s - (1 - i) * parseFloat(r.slice(r.indexOf(" ") + 1)), h = n ? e.width / n : e.width, _ = i ? e.height / i : e.height;
  return {
    width: h,
    height: _,
    top: d,
    right: a + h,
    bottom: d + _,
    left: a
  };
}
function dr(e) {
  return "style" in e && e.style instanceof be(e).CSSStyleDeclaration;
}
var Ls = class {
  constructor(e) {
    this.element = e, this.initial = /* @__PURE__ */ new Map();
  }
  set(e, t = "") {
    const { element: r } = this;
    if (dr(r))
      for (const [n, i] of Object.entries(e)) {
        const o = `${t}${n}`;
        this.initial.has(o) || this.initial.set(o, r.style.getPropertyValue(o)), r.style.setProperty(
          o,
          typeof i == "string" ? i : `${i}px`
        );
      }
  }
  remove(e, t = "") {
    const { element: r } = this;
    if (dr(r))
      for (const n of e) {
        const i = `${t}${n}`;
        r.style.removeProperty(i);
      }
  }
  reset() {
    const { element: e } = this;
    if (dr(e)) {
      for (const [t, r] of this.initial)
        e.style.setProperty(t, r);
      e.getAttribute("style") === "" && e.removeAttribute("style");
    }
  }
};
function Ts({
  element: e,
  keyframes: t,
  options: r,
  onReady: n,
  onFinish: i
}) {
  const o = new Ls(e), { transitionProperty: s } = Qe(e), a = s.split(", ");
  o.set({
    "transition-property": a.length ? a.filter(
      (d) => !d.includes("transform") && !d.includes("translate")
    ).join(", ") : "none"
  }), n == null || n(), e.animate(t, r).finished.then(() => {
    i == null || i(), o.reset();
  });
}
function qr(e) {
  if (e === "none")
    return null;
  const [t, r, n = "0"] = e.split(" "), i = { x: parseFloat(t), y: parseFloat(r), z: parseInt(n, 10) };
  return isNaN(i.x) && isNaN(i.y) ? null : {
    x: isNaN(i.x) ? 0 : i.x,
    y: isNaN(i.y) ? 0 : i.y,
    z: isNaN(i.z) ? 0 : i.z
  };
}
function Nl(e, t) {
  const { KeyframeEffect: r } = be(e), n = e.getAnimations();
  if (n.length > 0)
    for (const i of n) {
      const { effect: o } = i, a = (o instanceof r ? o.getKeyframes() : []).filter(t);
      if (a.length > 0)
        return a[a.length - 1];
    }
  return null;
}
function no(e, t = Qe(e).translate, r = !0) {
  if (r) {
    const n = Nl(
      e,
      (i) => "translate" in i
    );
    if (n) {
      const { translate: i = "" } = n;
      if (typeof i == "string") {
        const o = qr(i);
        if (o)
          return o;
      }
    }
  }
  if (t) {
    const n = qr(t);
    if (n)
      return n;
  }
  return { x: 0, y: 0, z: 0 };
}
function zl(e) {
  if (e === "none")
    return null;
  const t = e.split(" "), r = parseFloat(t[0]), n = parseFloat(t[1]);
  return isNaN(r) && isNaN(n) ? null : {
    x: isNaN(r) ? n : r,
    y: isNaN(n) ? r : n
  };
}
function js(e) {
  var t, r, n, i, o, s, a, d, h;
  const { scale: _, transform: f, translate: D } = e, A = zl(_), v = qr(D), M = Wl(f);
  if (!M && !A && !v)
    return null;
  const b = {
    x: (t = A == null ? void 0 : A.x) != null ? t : 1,
    y: (r = A == null ? void 0 : A.y) != null ? r : 1
  }, y = {
    x: (n = v == null ? void 0 : v.x) != null ? n : 0,
    y: (i = v == null ? void 0 : v.y) != null ? i : 0
  }, w = {
    x: (o = M == null ? void 0 : M.x) != null ? o : 0,
    y: (s = M == null ? void 0 : M.y) != null ? s : 0,
    scaleX: (a = M == null ? void 0 : M.scaleX) != null ? a : 1,
    scaleY: (d = M == null ? void 0 : M.scaleY) != null ? d : 1
  };
  return {
    x: y.x + w.x,
    y: y.y + w.y,
    z: (h = v == null ? void 0 : v.z) != null ? h : 0,
    scaleX: b.x * w.scaleX,
    scaleY: b.y * w.scaleY
  };
}
function Wl(e) {
  if (e.startsWith("matrix3d(")) {
    const t = e.slice(9, -1).split(/, /);
    return {
      x: +t[12],
      y: +t[13],
      scaleX: +t[0],
      scaleY: +t[5]
    };
  } else if (e.startsWith("matrix(")) {
    const t = e.slice(7, -1).split(/, /);
    return {
      x: +t[4],
      y: +t[5],
      scaleX: +t[0],
      scaleY: +t[3]
    };
  }
  return null;
}
var Ne = class extends Jn {
  constructor(e, t = {}) {
    var r, n;
    const {
      frameTransform: i = kt(e),
      ignoreTransforms: o,
      getBoundingClientRect: s = Is
    } = t, a = Ul(e), d = s(e);
    let { top: h, left: _, width: f, height: D } = d;
    const A = Qe(e), v = js(A), M = {
      x: (r = v == null ? void 0 : v.scaleX) != null ? r : 1,
      y: (n = v == null ? void 0 : v.scaleY) != null ? n : 1
    };
    a == null || a();
    const b = Fl(e);
    if (v && (o || b)) {
      const y = Bl(
        d,
        v,
        A.transformOrigin
      );
      h = y.top, _ = y.left, f = y.width, D = y.height;
    }
    b && !o && (h = h + b.y, _ = _ + b.x, f = f * b.scaleX, D = D * b.scaleY, M.x = b.scaleX, M.y = b.scaleY), i && (o || (_ *= i.scaleX, f *= i.scaleX, h *= i.scaleY, D *= i.scaleY), _ += i.x, h += i.y), super(_, h, f, D), this.scale = M;
  }
};
function Fl(e) {
  var t;
  const { KeyframeEffect: r } = be(e), n = e.getAnimations();
  let i = null;
  if (!n.length) return null;
  for (const o of n) {
    const s = o.effect instanceof r ? o.effect.getKeyframes() : [], a = s[s.length - 1];
    if (!a) continue;
    const { transform: d = "", translate: h = "", scale: _ = "" } = a;
    if (d || h || _) {
      const f = js({
        transform: typeof d == "string" ? d : "",
        translate: typeof h == "string" ? h : "",
        scale: typeof _ == "string" ? _ : ""
      });
      f && (i = i ? {
        x: i.x + f.x,
        y: i.y + f.y,
        z: (t = i.z) != null ? t : f.z,
        scaleX: i.scaleX * f.scaleX,
        scaleY: i.scaleY * f.scaleY
      } : f);
    }
  }
  return i;
}
function Ul(e) {
  const { KeyframeEffect: t } = be(e), r = e.ownerDocument.getAnimations().filter((n) => {
    if (n.effect instanceof t) {
      const { target: i } = n.effect;
      if (i !== e && (i != null && i.contains(e)))
        return n.effect.getKeyframes().some((o) => {
          const { transform: s, translate: a, scale: d, width: h, height: _ } = o;
          return s || a || d || h || _;
        });
    }
  }).map((n) => {
    const { effect: i, currentTime: o } = n, s = i == null ? void 0 : i.getComputedTiming().duration;
    if (!n.pending && typeof s == "number" && typeof o == "number" && o < s)
      return n.currentTime = s, () => {
        n.currentTime = o;
      };
  });
  if (r.length > 0)
    return () => r.forEach((n) => n == null ? void 0 : n());
}
function hr(e) {
  return e instanceof be(e).Element;
}
function gr(e) {
  if (!e) return !1;
  const { KeyboardEvent: t } = be(e.target);
  return e instanceof t;
}
function Rs(e) {
  if (!e) return !1;
  const { PointerEvent: t } = be(e.target);
  return e instanceof t;
}
var fn = {};
function Mn(e) {
  const t = fn[e] == null ? 0 : fn[e] + 1;
  return fn[e] = t, `${e}-${t}`;
}
var Zl = ({
  dragOperation: e,
  droppable: t
}) => {
  const r = e.position.current;
  if (!r)
    return null;
  const { id: n } = t;
  if (!t.shape)
    return null;
  if (t.shape.containsPoint(r)) {
    const i = $e.distance(t.shape.center, r);
    return {
      id: n,
      value: 1 / i,
      type: dt.PointerIntersection,
      priority: Ge.High
    };
  }
  return null;
}, Yl = ({
  dragOperation: e,
  droppable: t
}) => {
  const { shape: r } = e;
  if (!t.shape || !(r != null && r.current))
    return null;
  const n = r.current.intersectionArea(t.shape);
  if (n) {
    const { position: i } = e, o = $e.distance(t.shape.center, i.current), a = n / (r.current.area + t.shape.area - n) / o;
    return {
      id: t.id,
      value: a,
      type: dt.ShapeIntersection,
      priority: Ge.Normal
    };
  }
  return null;
}, Bs = (e) => {
  var t;
  return (t = Zl(e)) != null ? t : Yl(e);
}, Vl = (e) => {
  const { dragOperation: t, droppable: r } = e, { shape: n, position: i } = t;
  if (!r.shape)
    return null;
  const { left: o, top: s, right: a, bottom: d } = r.shape.boundingRectangle, f = [
    {
      x: o,
      y: s
    },
    {
      x: a,
      y: s
    },
    {
      x: o,
      y: d
    },
    {
      x: a,
      y: d
    }
  ].reduce(
    (D, A) => {
      var v;
      return D + $e.distance(
        $e.from(A),
        (v = n == null ? void 0 : n.current.center) != null ? v : i.current
      );
    },
    0
  ) / 4;
  return {
    id: r.id,
    value: 1 / f,
    type: dt.Collision,
    priority: Ge.Normal
  };
}, Hl = Object.create, Si = Object.defineProperty, ql = Object.defineProperties, Xl = Object.getOwnPropertyDescriptor, Gl = Object.getOwnPropertyDescriptors, Xr = Object.getOwnPropertySymbols, Ns = Object.prototype.hasOwnProperty, zs = Object.prototype.propertyIsEnumerable, Ws = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Zt = (e) => {
  throw TypeError(e);
}, $n = (e, t, r) => t in e ? Si(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, vr = (e, t) => {
  for (var r in t || (t = {}))
    Ns.call(t, r) && $n(e, r, t[r]);
  if (Xr)
    for (var r of Xr(t))
      zs.call(t, r) && $n(e, r, t[r]);
  return e;
}, Ei = (e, t) => ql(e, Gl(t)), io = (e, t) => Si(e, "name", { value: t, configurable: !0 }), Fs = (e, t) => {
  var r = {};
  for (var n in e)
    Ns.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && Xr)
    for (var n of Xr(e))
      t.indexOf(n) < 0 && zs.call(e, n) && (r[n] = e[n]);
  return r;
}, rn = (e) => {
  var t;
  return [, , , Hl((t = e == null ? void 0 : e[Ws("metadata")]) != null ? t : null)];
}, Us = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], or = (e) => e !== void 0 && typeof e != "function" ? Zt("Function expected") : e, Kl = (e, t, r, n, i) => ({ kind: Us[e], name: t, metadata: n, addInitializer: (o) => r._ ? Zt("Already initialized") : i.push(or(o || null)) }), Sr = (e, t) => $n(t, Ws("metadata"), e[3]), Ie = (e, t, r, n) => {
  for (var i = 0, o = e[t >> 1], s = o && o.length; i < s; i++) t & 1 ? o[i].call(r) : n = o[i].call(r, n);
  return n;
}, pt = (e, t, r, n, i, o) => {
  var s, a, d, h, _, f = t & 7, D = !!(t & 8), A = !!(t & 16), v = f > 3 ? e.length + 1 : f ? D ? 1 : 2 : 0, M = Us[f + 5], b = f > 3 && (e[v - 1] = []), y = e[v] || (e[v] = []), w = f && (!A && !D && (i = i.prototype), f < 5 && (f > 3 || !A) && Xl(f < 4 ? i : { get [r]() {
    return Re(this, o);
  }, set [r](x) {
    return Ke(this, o, x);
  } }, r));
  f ? A && f < 4 && io(o, (f > 2 ? "set " : f > 1 ? "get " : "") + r) : io(i, r);
  for (var C = n.length - 1; C >= 0; C--)
    h = Kl(f, r, d = {}, e[3], y), f && (h.static = D, h.private = A, _ = h.access = { has: A ? (x) => Jl(i, x) : (x) => r in x }, f ^ 3 && (_.get = A ? (x) => (f ^ 1 ? Re : Ql)(x, i, f ^ 4 ? o : w.get) : (x) => x[r]), f > 2 && (_.set = A ? (x, E) => Ke(x, i, E, f ^ 4 ? o : w.set) : (x, E) => x[r] = E)), a = (0, n[C])(f ? f < 4 ? A ? o : w[M] : f > 4 ? void 0 : { get: w.get, set: w.set } : i, h), d._ = 1, f ^ 4 || a === void 0 ? or(a) && (f > 4 ? b.unshift(a) : f ? A ? o = a : w[M] = a : i = a) : typeof a != "object" || a === null ? Zt("Object expected") : (or(s = a.get) && (w.get = s), or(s = a.set) && (w.set = s), or(s = a.init) && b.unshift(s));
  return f || Sr(e, i), w && Si(i, r, w), A ? f ^ 4 ? o : w : i;
}, Ii = (e, t, r) => t.has(e) || Zt("Cannot " + r), Jl = (e, t) => Object(t) !== t ? Zt('Cannot use the "in" operator on this value') : e.has(t), Re = (e, t, r) => (Ii(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Le = (e, t, r) => t.has(e) ? Zt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Ke = (e, t, r, n) => (Ii(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), Ql = (e, t, r) => (Ii(e, t, "access private method"), r), oo = {
  role: "button",
  roleDescription: "draggable"
}, ec = "dnd-kit-description", tc = "dnd-kit-announcement", rc = {
  draggable: "To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel."
}, nc = {
  dragstart({ operation: { source: e } }) {
    if (e)
      return `Picked up draggable item ${e.id}.`;
  },
  dragover({ operation: { source: e, target: t } }) {
    if (e)
      return t ? `Draggable item ${e.id} was moved over droppable target ${t.id}.` : `Draggable item ${e.id} is no longer over a droppable target.`;
  },
  dragend({ operation: { source: e, target: t }, canceled: r }) {
    if (e)
      return r ? `Dragging was cancelled. Draggable item ${e.id} was dropped.` : t ? `Draggable item ${e.id} was dropped over droppable target ${t.id}` : `Draggable item ${e.id} was dropped.`;
  }
};
function ic(e) {
  const t = be(e);
  return e instanceof t.HTMLInputElement || e instanceof t.HTMLSelectElement || e instanceof t.HTMLTextAreaElement || e instanceof t.HTMLAnchorElement || e instanceof t.HTMLButtonElement || e instanceof t.HTMLAreaElement;
}
function oc(e, t) {
  const r = document.createElement("div");
  return r.id = e, r.style.setProperty("display", "none"), r.innerText = t, r;
}
function sc(e) {
  const t = document.createElement("div");
  return t.id = e, t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-atomic", "true"), t.style.setProperty("position", "fixed"), t.style.setProperty("width", "1px"), t.style.setProperty("height", "1px"), t.style.setProperty("margin", "-1px"), t.style.setProperty("border", "0"), t.style.setProperty("padding", "0"), t.style.setProperty("overflow", "hidden"), t.style.setProperty("clip", "rect(0 0 0 0)"), t.style.setProperty("clip-path", "inset(100%)"), t.style.setProperty("white-space", "nowrap"), t;
}
var ac = class extends Ae {
  constructor(e, t) {
    super(e);
    const {
      id: r,
      idPrefix: {
        description: n = ec,
        announcement: i = tc
      } = {},
      announcements: o = nc,
      screenReaderInstructions: s = rc
    } = t ?? {}, a = r ? `${n}-${r}` : Mn(n), d = r ? `${i}-${r}` : Mn(i);
    let h, _;
    const f = Object.entries(o).map(
      ([v, M]) => this.manager.monitor.addEventListener(
        v,
        (b, y) => {
          const w = M == null ? void 0 : M(b, y);
          w && _ && (_.innerText = w);
        }
      )
    ), D = () => {
      h = oc(
        a,
        s.draggable
      ), _ = sc(d), document.body.append(h, _);
    }, A = Jr(() => {
      for (const v of e.registry.draggables.value) {
        const { element: M, handle: b } = v, y = b ?? M, w = be(y);
        if (y) {
          (!h || !_) && D(), (!ic(y) || kl()) && !y.hasAttribute("tabindex") && y.setAttribute("tabindex", "0"), !y.hasAttribute("role") && !(y instanceof w.HTMLButtonElement) && y.setAttribute("role", oo.role), y.hasAttribute("role-description") || y.setAttribute(
            "aria-roledescription",
            oo.roleDescription
          ), y.hasAttribute("aria-describedby") || y.setAttribute("aria-describedby", a);
          for (const C of ["aria-pressed", "aria-grabbed"])
            y.setAttribute(C, String(v.isDragSource));
          y.setAttribute("aria-disabled", String(v.disabled));
        }
      }
      this.destroy = () => {
        h == null || h.remove(), _ == null || _.remove(), f.forEach((v) => v()), A();
      };
    });
  }
}, lc = class extends Ae {
  constructor(e, t) {
    super(e, t), this.manager = e, this.destroy = me(() => {
      var r;
      const { dragOperation: n } = this.manager, { cursor: i = "grabbing" } = (r = this.options) != null ? r : {};
      if (n.status.initialized) {
        const o = document.createElement("style");
        return o.innerText = `* { cursor: ${i} !important; }`, document.head.appendChild(o), () => {
          o.remove();
        };
      }
    });
  }
}, Di = "data-dnd-", Ee = "--dnd-", tt = `${Di}dragging`, cc = `[${tt}] {position: fixed !important;pointer-events: none !important;touch-action: none !important;z-index: calc(infinity);will-change: translate;top: var(${Ee}top, 0px) !important;left: var(${Ee}left, 0px) !important;right: unset !important;bottom: unset !important;width: var(${Ee}width, auto) !important;height: var(${Ee}height, auto) !important;box-sizing:border-box;}[${tt}] *{pointer-events: none !important;}[${tt}][style*="${Ee}translate"] {translate: var(${Ee}translate) !important;}[style*="${Ee}transition"] {transition: var(${Ee}transition) !important;}*:where([${tt}][popover]){overflow:visible;background:var(${Ee}background);border:var(${Ee}border);margin:unset;padding:unset;color:inherit;}[${tt}]::backdrop {display: none}html:has([${tt}]) * {user-select:none;-webkit-user-select:none;}`, Zs = `${Di}placeholder`, uc = [
  tt,
  Zs,
  "popover",
  "aria-pressed",
  "aria-grabbing"
], dc = ["view-transition-name"], Ln = class extends Ae {
  constructor(t, r) {
    super(t);
    const n = /* @__PURE__ */ new Map();
    let i, o, s, a = { x: 0, y: 0 }, d, h, _ = !1;
    const f = me(() => {
      var A, v;
      const { status: M, source: b, target: y } = t.dragOperation;
      if (M.initialized) {
        const w = ze((A = b == null ? void 0 : b.element) != null ? A : null), C = ze((v = y == null ? void 0 : y.element) != null ? v : null), x = /* @__PURE__ */ new Set([w, C]);
        for (const E of x)
          if (!n.has(E)) {
            const k = document.createElement("style");
            k.innerText = cc, E.head.prepend(k), n.set(E, k);
          }
        return f;
      }
    }), D = me(() => {
      var A;
      const { dragOperation: v } = t, { position: M, source: b, status: y } = v;
      if (y.idle) {
        d = void 0, o = void 0, i = void 0, s = void 0, a = { x: 0, y: 0 }, h = void 0;
        return;
      }
      if (!b) return;
      const { element: w, feedback: C } = b;
      if (!w || C === "none")
        return;
      let x;
      const E = kt(w), k = new Ne(w, {
        frameTransform: null,
        ignoreTransforms: !0
      }), { width: P, height: u, top: g, left: c } = k, m = new Ls(w), { background: O, border: z, transition: N, translate: W } = Qe(w), R = C === "clone", U = C !== "move" ? pc(b) : null, ce = Ve(
        () => gr(t.dragOperation.activatorEvent)
      );
      if (W !== "none") {
        const Z = qr(W);
        Z && (a = Z);
      }
      const ne = g * E.scaleY + E.y, K = c * E.scaleX + E.x;
      if (o || (o = { x: K, y: ne }), i || (i = { width: P, height: u }), s || (s = E), !h) {
        const Z = Ve(() => M.current);
        h = {
          x: (Z.x - c * E.scaleX - E.x) / (P * E.scaleX),
          y: (Z.y - g * E.scaleY - E.y) / (u * E.scaleY)
        };
      }
      const fe = {
        x: o.x - K,
        y: o.y - ne
      }, J = {
        width: (i.width * s.scaleX - P * E.scaleX) * h.x,
        height: (i.height * s.scaleY - u * E.scaleY) * h.y
      }, Te = {
        x: fe.x / E.scaleX + J.width,
        y: fe.y / E.scaleY + J.height
      }, Fe = {
        left: c + Te.x,
        top: g + Te.y
      };
      w.setAttribute(tt, "true");
      const He = Ve(() => v.transform), Q = `${He.x * E.scaleX + a.x}px ${He.y * E.scaleY + a.y}px 0`;
      m.set(
        {
          width: P,
          height: u,
          top: Fe.top,
          left: Fe.left,
          background: O,
          border: z,
          translate: Q
        },
        Ee
      ), U && (w.insertAdjacentElement("afterend", U), r != null && r.rootElement && (typeof r.rootElement == "function" ? r.rootElement(b) : r.rootElement).appendChild(w)), Pn(w) && (w.hasAttribute("popover") || w.setAttribute("popover", ""), dn(w));
      const Se = new Ne(w, {
        ignoreTransforms: !0
      }), T = {
        top: Fe.top - Se.top,
        left: Fe.left - Se.left
      };
      Math.abs(T.left) > 0.01 || Math.abs(T.top) > 0.01 ? m.set(
        {
          top: Se.top + T.top,
          left: Se.left + T.left
        },
        Ee
      ) : (T.left = 0, T.top = 0);
      const l = new ResizeObserver(() => {
        if (!U) return;
        const Z = new Ne(U, {
          ignoreTransforms: !0
        }), Y = h ?? { x: 1, y: 1 }, G = (P - Z.width) * Y.x + Te.x, oe = (u - Z.height) * Y.y + Te.y;
        m.set(
          {
            width: Z.width,
            height: Z.height,
            top: g + oe,
            left: c + G
          },
          Ee
        );
        const ee = be(w);
        if (w instanceof ee.HTMLTableRowElement && U instanceof ee.HTMLTableRowElement) {
          const te = Array.from(w.cells), re = Array.from(U.cells);
          for (const [j, X] of te.entries()) {
            const ue = re[j];
            X.style.width = `${ue.offsetWidth}px`;
          }
        }
        v.shape = new Ne(w);
      });
      v.shape = new Ne(w), b.status = "dragging";
      let p, I;
      U && (l.observe(U), p = new MutationObserver(() => {
        for (const Z of Array.from(w.attributes))
          if (!(Z.name.startsWith("aria-") || uc.includes(Z.name))) {
            if (Z.name === "style") {
              if (dr(w) && dr(U)) {
                U.setAttribute("style", R ? "" : "opacity: 0;"), U.style.setProperty("transition", "none");
                for (const Y of Object.values(w.style))
                  Y.startsWith(Ee) || dc.includes(Y) || U.style.setProperty(
                    Y,
                    w.style.getPropertyValue(Y)
                  );
              }
              continue;
            }
            U.setAttribute(Z.name, Z.value);
          }
        R && (U.innerHTML = w.innerHTML);
      }), p.observe(w, {
        attributes: !0,
        subtree: !0
      }), I = new MutationObserver((Z) => {
        for (const Y of Z) {
          const { addedNodes: G } = Y;
          if (G.length > 0 && Array.from(G).some((oe) => oe.contains(w))) {
            w.insertAdjacentElement("afterend", U), dn(w);
            return;
          }
        }
      }), I.observe(w.ownerDocument.body, {
        childList: !0,
        subtree: !0
      }));
      const $ = me(function() {
        const { transform: Y, status: G } = v;
        if (!(!Y.x && !Y.y && !_) && (_ || (_ = !0), G.dragging)) {
          const oe = ce ? "250ms cubic-bezier(0.25, 1, 0.5, 1)" : "0ms linear", ee = Y.x / E.scaleX + a.x, te = Y.y / E.scaleY + a.y;
          m.set(
            {
              transition: `${N}, translate ${oe}`,
              translate: `${ee}px ${te}px 0`
            },
            Ee
          ), v.shape = new Ne(w), d = {
            x: ee,
            y: te
          };
        }
      }), L = (A = t.dragOperation.source) == null ? void 0 : A.id, B = () => {
        var Z;
        if (!ce || L == null)
          return;
        const Y = t.registry.draggables.get(L), G = (Z = Y == null ? void 0 : Y.handle) != null ? Z : Y == null ? void 0 : Y.element;
        G instanceof HTMLElement && G.focus();
      };
      let V;
      return x = () => {
        p == null || p.disconnect(), I == null || I.disconnect(), l.disconnect(), m.reset(), U && (_ || U.parentElement !== w.parentElement) && w.isConnected && U.replaceWith(w), U == null || U.remove(), w.removeAttribute(tt), Pn(w) && w.removeAttribute("popover"), $(), V == null || V(), b.status = "idle", _ = !1;
      }, V = me(function() {
        if (v.status.dropped) {
          const Y = x;
          x = void 0, b.status = "dropping";
          const G = d;
          if (!G) {
            Y == null || Y();
            return;
          }
          t.renderer.rendering.then(() => {
            dn(w);
            const oe = U ?? w, ee = w.getAnimations();
            ee.length && ee.forEach((ht) => {
              const { effect: Ht } = ht;
              Ht instanceof KeyframeEffect && Ht.getKeyframes().some((Pr) => Pr.translate) && ht.finish();
            });
            const re = {
              frameTransform: Hr(w) === Hr(oe) ? null : void 0
            }, j = new Ne(w, re), X = new Ne(oe, re), ue = {
              x: j.center.x - X.center.x,
              y: j.center.y - X.center.y
            }, _e = {
              x: G.x - ue.x,
              y: G.y - ue.y
            }, Vt = Math.round(j.height) !== Math.round(X.height) ? {
              minHeight: [`${j.height}px`, `${X.height}px`],
              maxHeight: [`${j.height}px`, `${X.height}px`]
            } : {}, It = Math.round(j.width) !== Math.round(X.width) ? {
              minWidth: [`${j.width}px`, `${X.width}px`],
              maxWidth: [`${j.width}px`, `${X.width}px`]
            } : {};
            Ts({
              element: w,
              keyframes: Ei(vr(vr({}, Vt), It), {
                translate: [
                  `${G.x}px ${G.y}px 0`,
                  `${_e.x}px ${_e.y}px 0`
                ]
              }),
              options: {
                duration: _ ? 250 : 0,
                easing: "ease"
              },
              onReady() {
                m.remove(["translate"], Ee);
              },
              onFinish() {
                requestAnimationFrame(B), Y == null || Y();
              }
            });
          });
        }
      }), () => x == null ? void 0 : x();
    });
    this.destroy = () => {
      f(), D(), n.forEach((A) => A.remove());
    };
  }
};
Ln.configure = si(Ln);
var fc = Ln;
function pc(e) {
  return Ve(() => {
    var t;
    const { element: r, manager: n } = e;
    if (!r || !n) return;
    const { droppables: i } = n.registry, o = /* @__PURE__ */ new Map();
    for (const h of i)
      if (h.element && (r === h.element || r.contains(h.element))) {
        const _ = `${Di}${Mn("dom-id")}`;
        h.element.setAttribute(_, ""), o.set(h, _);
      }
    const s = [], a = Sl(r), { remove: d } = a;
    for (const [h, _] of o) {
      if (!h.element) continue;
      const f = `[${_}]`, D = a.matches(f) ? a : a.querySelector(f);
      if ((t = h.element) == null || t.removeAttribute(_), !D) continue;
      let A = h.element;
      h.proxy = D, D.removeAttribute(_), On.set(A, D), s.push(() => {
        On.delete(A), h.proxy = void 0;
      });
    }
    return a.setAttribute("inert", "true"), a.setAttribute("tab-index", "-1"), a.setAttribute("aria-hidden", "true"), a.setAttribute(Zs, ""), a.remove = () => {
      s.forEach((h) => h()), d.call(a);
    }, a;
  });
}
var Kt = !0, hc = !1, Ys, Vs, Hs, qs, ot, Ai, Oi;
qs = (Hs = [le], We.Forward), Vs = (Ys = [le], We.Reverse);
var yr = class {
  constructor() {
    Le(this, Ai, Ie(ot, 8, this, Kt)), Ie(ot, 11, this), Le(this, Oi, Ie(ot, 12, this, Kt)), Ie(ot, 15, this);
  }
  isLocked(e) {
    return e === We.Idle ? !1 : e == null ? this[We.Forward] === Kt && this[We.Reverse] === Kt : this[e] === Kt;
  }
  unlock(e) {
    e !== We.Idle && (this[e] = hc);
  }
};
ot = rn(null);
Ai = /* @__PURE__ */ new WeakMap();
Oi = /* @__PURE__ */ new WeakMap();
pt(ot, 4, qs, Hs, yr, Ai);
pt(ot, 4, Vs, Ys, yr, Oi);
Sr(ot, yr);
var gc = [We.Forward, We.Reverse], so = class {
  constructor() {
    this.x = new yr(), this.y = new yr();
  }
  isLocked() {
    return this.x.isLocked() && this.y.isLocked();
  }
}, vc = class extends Ae {
  constructor(e) {
    super(e);
    const t = Ce(new so());
    let r = null;
    this.signal = t, me(() => {
      const { status: n } = e.dragOperation;
      if (!n.initialized) {
        r = null, t.value = new so();
        return;
      }
      const { delta: i } = e.dragOperation.position;
      if (r) {
        const o = {
          x: ao(i.x, r.x),
          y: ao(i.y, r.y)
        }, s = t.peek();
        pe(() => {
          for (const a of ts)
            for (const d of gc)
              o[a] === d && s[a].unlock(d);
          t.value = s;
        });
      }
      r = i;
    });
  }
  get current() {
    return this.signal.peek();
  }
};
function ao(e, t) {
  return Math.sign(e - t);
}
var Xs, Tn, mr, Pi, it, jn, Er = class extends (Tn = en, Xs = [le], Tn) {
  constructor(e) {
    super(e), Le(this, Pi, Ie(mr, 8, this, !1)), Ie(mr, 11, this), Le(this, it), Le(this, jn, () => {
      if (!Re(this, it))
        return;
      const { element: o, by: s } = Re(this, it);
      s.y && (o.scrollTop += s.y), s.x && (o.scrollLeft += s.x);
    }), this.scroll = (o) => {
      var s;
      if (this.disabled)
        return !1;
      const a = this.getScrollableElements();
      if (!a)
        return Ke(this, it, void 0), !1;
      const { position: d } = this.manager.dragOperation, h = d == null ? void 0 : d.current;
      if (h) {
        const { by: _ } = o ?? {}, f = _ ? {
          x: lo(_.x),
          y: lo(_.y)
        } : void 0, D = f ? void 0 : this.scrollIntentTracker.current;
        if (D != null && D.isLocked())
          return !1;
        for (const A of a) {
          const v = El(A, _);
          if (v.x || v.y) {
            const { speed: M, direction: b } = Ll(
              A,
              h,
              f
            );
            if (D)
              for (const y of ts)
                D[y].isLocked(b[y]) && (M[y] = 0, b[y] = 0);
            if (b.x || b.y) {
              const { x: y, y: w } = _ ?? b, C = y * M.x, x = w * M.y;
              if (C || x) {
                const E = (s = Re(this, it)) == null ? void 0 : s.by;
                if (this.autoScrolling && E && (E.x && !C || E.y && !x))
                  continue;
                return Ke(this, it, {
                  element: A,
                  by: {
                    x: C,
                    y: x
                  }
                }), Rl.schedule(Re(this, jn)), !0;
              }
            }
          }
        }
      }
      return Ke(this, it, void 0), !1;
    };
    let t = null, r = null;
    const n = Be(() => {
      const { position: o } = e.dragOperation;
      if (!o)
        return null;
      const s = Cs(document, o.current);
      return s && (t = s), s ?? t;
    }), i = Be(() => {
      const o = n.value, { documentElement: s } = ze(o);
      if (!o || o === s) {
        const { target: a } = e.dragOperation, d = a == null ? void 0 : a.element;
        if (d) {
          const h = Cn(d, {
            excludeElement: !1
          });
          return r = h, h;
        }
      }
      if (o) {
        const a = Cn(o, {
          excludeElement: !1
        });
        return this.autoScrolling && r && a.size < (r == null ? void 0 : r.size) ? r : (r = a, a);
      }
      return r = null, null;
    }, Bt);
    this.getScrollableElements = () => i.value, this.scrollIntentTracker = new vc(e), this.destroy = e.monitor.addEventListener("dragmove", (o) => {
      this.disabled || o.defaultPrevented || !gr(e.dragOperation.activatorEvent) || !o.by || this.scroll({ by: o.by }) && o.preventDefault();
    });
  }
};
mr = rn(Tn);
Pi = /* @__PURE__ */ new WeakMap();
it = /* @__PURE__ */ new WeakMap();
jn = /* @__PURE__ */ new WeakMap();
pt(mr, 4, "autoScrolling", Xs, Er, Pi);
Sr(mr, Er);
function lo(e) {
  return e > 0 ? We.Forward : e < 0 ? We.Reverse : We.Idle;
}
var yc = 10, Gs = class extends Ae {
  constructor(e, t) {
    super(e);
    const r = e.registry.plugins.get(Er);
    if (!r)
      throw new Error("AutoScroller plugin depends on Scroller plugin");
    this.destroy = me(() => {
      if (this.disabled)
        return;
      const { position: n, status: i } = e.dragOperation;
      if (i.dragging)
        if (r.scroll()) {
          r.autoScrolling = !0;
          const s = setInterval(r.scroll, yc);
          return () => {
            clearInterval(s);
          };
        } else
          r.autoScrolling = !1;
    });
  }
}, co = {
  capture: !0,
  passive: !0
}, sr, mc = class extends en {
  constructor(e) {
    super(e), Le(this, sr), this.handleScroll = () => {
      Re(this, sr) == null && Ke(this, sr, setTimeout(() => {
        this.manager.collisionObserver.forceUpdate(!1), Ke(this, sr, void 0);
      }, 50));
    };
    const { dragOperation: t } = this.manager;
    this.destroy = me(() => {
      var r, n, i;
      if (t.status.dragging) {
        const s = (i = (n = (r = t.source) == null ? void 0 : r.element) == null ? void 0 : n.ownerDocument) != null ? i : document;
        return s.addEventListener("scroll", this.handleScroll, co), () => {
          s.removeEventListener(
            "scroll",
            this.handleScroll,
            co
          );
        };
      }
    });
  }
};
sr = /* @__PURE__ */ new WeakMap();
var bc = class extends Ae {
  constructor(e) {
    super(e), this.manager = e, this.destroy = me(() => {
      const { dragOperation: t } = this.manager;
      if (t.status.initialized) {
        const r = document.createElement("style");
        return r.innerText = "* { user-select: none !important;, -webkit-user-select: none !important; }", document.head.appendChild(r), document.addEventListener("selectionchange", uo, {
          capture: !0
        }), () => {
          document.removeEventListener("selectionchange", uo, {
            capture: !0
          }), r.remove();
        };
      }
    });
  }
};
function uo() {
  var e;
  (e = document.getSelection()) == null || e.removeAllRanges();
}
var fo = {
  start: ["Space", "Enter"],
  cancel: ["Escape"],
  end: ["Space", "Enter", "Tab"],
  up: ["ArrowUp"],
  down: ["ArrowDown"],
  left: ["ArrowLeft"],
  right: ["ArrowRight"]
}, po = 10, ar, _c = class extends wt {
  constructor(e, t) {
    super(e), this.manager = e, this.options = t, Le(this, ar, []), this.listeners = new ki(), this.handleSourceKeyDown = (r, n, i) => {
      if (!(this.disabled || r.defaultPrevented) && hr(r.target) && !n.disabled && (!n.handle && n.element && r.target === n.element || n.handle && r.target === n.handle)) {
        const { keyboardCodes: o = fo } = i ?? {};
        if (!o.start.includes(r.code) || !this.manager.dragOperation.status.idle)
          return;
        this.handleStart(r, n, i);
      }
    };
  }
  bind(e, t = this.options) {
    return me(() => {
      var n;
      const i = (n = e.handle) != null ? n : e.element, o = (s) => {
        gr(s) && this.handleSourceKeyDown(s, e, t);
      };
      if (i)
        return i.addEventListener("keydown", o), () => {
          i.removeEventListener("keydown", o);
        };
    });
  }
  handleStart(e, t, r) {
    const { element: n } = t;
    if (!n)
      throw new Error("Source draggable does not have an associated element");
    e.preventDefault(), e.stopImmediatePropagation(), $s(n);
    const { center: i } = new Ne(n);
    pe(() => {
      this.manager.actions.setDragSource(t.id), this.manager.actions.start({
        event: e,
        coordinates: {
          x: i.x,
          y: i.y
        }
      });
    }), this.sideEffects();
    const o = ze(n), s = be(o), a = [
      this.listeners.bind(o, [
        {
          type: "keydown",
          listener: (d) => this.handleKeyDown(d, t, r),
          options: { capture: !0 }
        }
      ]),
      this.listeners.bind(s, [
        { type: "resize", listener: () => this.handleEnd(!0) }
      ])
    ];
    Re(this, ar).push(...a);
  }
  handleKeyDown(e, t, r) {
    const { keyboardCodes: n = fo } = r ?? {};
    if (Dt(e, [...n.end, ...n.cancel])) {
      e.preventDefault();
      const i = Dt(e, n.cancel);
      this.handleEnd(i);
      return;
    }
    Dt(e, n.up) ? this.handleMove("up", e) : Dt(e, n.down) && this.handleMove("down", e), Dt(e, n.left) ? this.handleMove("left", e) : Dt(e, n.right) && this.handleMove("right", e);
  }
  handleEnd(e) {
    this.manager.actions.stop({
      canceled: e
    }), this.cleanup();
  }
  handleMove(e, t) {
    const { shape: r } = this.manager.dragOperation, n = t.shiftKey ? 5 : 1;
    let i = {
      x: 0,
      y: 0
    };
    if (r) {
      switch (e) {
        case "up":
          i = { x: 0, y: -10 * n };
          break;
        case "down":
          i = { x: 0, y: po * n };
          break;
        case "left":
          i = { x: -10 * n, y: 0 };
          break;
        case "right":
          i = { x: po * n, y: 0 };
          break;
      }
      (i != null && i.x || i != null && i.y) && (t.preventDefault(), this.manager.actions.move({
        by: i
      }));
    }
  }
  sideEffects() {
    const e = this.manager.registry.plugins.get(Gs);
    (e == null ? void 0 : e.disabled) === !1 && (e.disable(), Re(this, ar).push(() => {
      e.enable();
    }));
  }
  cleanup() {
    Re(this, ar).forEach((e) => e());
  }
  destroy() {
    this.cleanup(), this.listeners.clear();
  }
};
ar = /* @__PURE__ */ new WeakMap();
function Dt(e, t) {
  return t.includes(e.code);
}
var Pt, Rn = class extends wt {
  constructor(t, r) {
    super(t), this.manager = t, this.options = r, this.listeners = new ki(), this.cleanup = /* @__PURE__ */ new Set(), Le(this, Pt), this.handleCancel = this.handleCancel.bind(this), this.handlePointerUp = this.handlePointerUp.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  bind(t, r = this.options) {
    return me(() => {
      var i;
      const o = (i = t.handle) != null ? i : t.element, s = (a) => {
        Rs(a) && this.handlePointerDown(a, t, r);
      };
      if (o)
        return Sc(o.ownerDocument.defaultView), o.addEventListener("pointerdown", s), () => {
          o.removeEventListener("pointerdown", s);
        };
    });
  }
  handlePointerDown(t, r, n = {}) {
    if (this.disabled || !t.isPrimary || t.button !== 0 || !hr(t.target) || r.disabled || xc(t))
      return;
    const { target: i } = t, o = xt(i) && i.draggable && i.getAttribute("draggable") === "true", s = kt(r.element);
    this.initialCoordinates = {
      x: t.clientX * s.scaleX + s.x,
      y: t.clientY * s.scaleY + s.y
    };
    const { activationConstraints: a } = n, d = typeof a == "function" ? a(t, r) : a;
    if (t.sensor = this, !(d != null && d.delay) && !(d != null && d.distance))
      this.handleStart(r, t);
    else {
      const { delay: D } = d;
      if (D) {
        const A = setTimeout(
          () => this.handleStart(r, t),
          D.value
        );
        Ke(this, Pt, () => {
          clearTimeout(A), Ke(this, Pt, void 0);
        });
      }
    }
    const h = ze(t.target), _ = this.listeners.bind(h, [
      {
        type: "pointermove",
        listener: (D) => this.handlePointerMove(D, r, n)
      },
      {
        type: "pointerup",
        listener: this.handlePointerUp,
        options: {
          capture: !0
        }
      },
      {
        // Cancel activation if there is a competing Drag and Drop interaction
        type: "dragstart",
        listener: o ? this.handleCancel : pn
      }
    ]), f = () => {
      var D;
      setTimeout(_), (D = Re(this, Pt)) == null || D.call(this), this.initialCoordinates = void 0;
    };
    this.cleanup.add(f);
  }
  handlePointerMove(t, r, n) {
    const i = {
      x: t.clientX,
      y: t.clientY
    }, o = kt(r.element);
    if (i.x = i.x * o.scaleX + o.x, i.y = i.y * o.scaleY + o.y, this.manager.dragOperation.status.dragging) {
      t.preventDefault(), t.stopPropagation(), this.manager.actions.move({ to: i });
      return;
    }
    if (!this.initialCoordinates)
      return;
    const s = {
      x: i.x - this.initialCoordinates.x,
      y: i.y - this.initialCoordinates.y
    }, { activationConstraints: a } = n, d = typeof a == "function" ? a(t, r) : a, { distance: h, delay: _ } = d ?? {};
    if (h) {
      if (h.tolerance != null && Tt(s, h.tolerance))
        return this.handleCancel();
      if (Tt(s, h.value))
        return this.handleStart(r, t);
    }
    if (_ && Tt(s, _.tolerance))
      return this.handleCancel();
  }
  handlePointerUp(t) {
    const { status: r } = this.manager.dragOperation;
    if (!r.idle) {
      t.preventDefault(), t.stopPropagation();
      const n = !r.initialized;
      this.manager.actions.stop({ canceled: n });
    }
    this.cleanup.forEach((n) => n()), this.cleanup.clear();
  }
  handleKeyDown(t) {
    t.key === "Escape" && (t.preventDefault(), this.handleCancel());
  }
  handleStart(t, r) {
    var n;
    const { manager: i, initialCoordinates: o } = this;
    if ((n = Re(this, Pt)) == null || n.call(this), !o || i.dragOperation.status.initialized || r.defaultPrevented)
      return;
    r.preventDefault(), pe(() => {
      i.actions.setDragSource(t.id), i.actions.start({ coordinates: o, event: r });
    });
    const s = ze(r.target), a = this.listeners.bind(s, [
      {
        // Prevent scrolling on touch devices
        type: "touchmove",
        listener: pn,
        options: {
          passive: !1
        }
      },
      {
        // Prevent click events
        type: "click",
        listener: pn
      },
      {
        type: "keydown",
        listener: this.handleKeyDown
      }
    ]);
    s.body.setPointerCapture(r.pointerId), this.cleanup.add(a);
  }
  handleCancel() {
    const { dragOperation: t } = this.manager;
    t.status.initialized && this.manager.actions.stop({ canceled: !0 }), this.cleanup.forEach((r) => r()), this.cleanup.clear();
  }
  destroy() {
    this.listeners.clear();
  }
};
Pt = /* @__PURE__ */ new WeakMap();
Rn.configure = si(Rn);
var wc = Rn;
function xc(e) {
  return "sensor" in e;
}
function pn(e) {
  e.preventDefault();
}
function kc() {
}
var ho = /* @__PURE__ */ new WeakSet();
function Sc(e) {
  !e || ho.has(e) || (e.addEventListener("touchmove", kc, {
    capture: !1,
    passive: !1
  }), ho.add(e));
}
var go = {
  plugins: [ac, Gs, lc, fc, bc],
  sensors: [
    wc.configure({
      activationConstraints(e, t) {
        var r;
        const { pointerType: n, target: i } = e;
        if (!(n === "mouse" && hr(i) && (t.handle === i || (r = t.handle) != null && r.contains(i))))
          return {
            delay: { value: 200, tolerance: 10 },
            distance: { value: 5 }
          };
      }
    }),
    _c
  ]
}, Ec = class extends pl {
  constructor(e = {}) {
    const {
      plugins: t = go.plugins,
      sensors: r = go.sensors,
      modifiers: n = []
    } = e;
    super(Ei(vr({}, e), {
      plugins: [mc, Er, ...t],
      sensors: r,
      modifiers: n
    }));
  }
}, Ks, Js, Qs, Bn, Ze, Ci, Mi, $i, Ir = class extends (Bn = ct, Qs = [le], Js = [le], Ks = [le], Bn) {
  constructor(e, t) {
    var r = e, {
      element: n,
      effects: i = () => [],
      handle: o,
      feedback: s = "default"
    } = r, a = Fs(r, [
      "element",
      "effects",
      "handle",
      "feedback"
    ]);
    super(
      vr({
        effects: () => [
          ...i(),
          () => {
            var d, h;
            const { manager: _ } = this;
            if (!_) return;
            const D = ((h = (d = this.sensors) == null ? void 0 : d.map(ai)) != null ? h : [
              ..._.sensors
            ]).map((A) => {
              const v = A instanceof wt ? A : _.registry.register(A.plugin), M = A instanceof wt ? void 0 : A.options;
              return v.bind(this, M);
            });
            return function() {
              D.forEach((v) => v());
            };
          }
        ]
      }, a),
      t
    ), Le(this, Ci, Ie(Ze, 8, this)), Ie(Ze, 11, this), Le(this, Mi, Ie(Ze, 12, this)), Ie(Ze, 15, this), Le(this, $i, Ie(Ze, 16, this)), Ie(Ze, 19, this), this.element = n, this.handle = o, this.feedback = s;
  }
};
Ze = rn(Bn);
Ci = /* @__PURE__ */ new WeakMap();
Mi = /* @__PURE__ */ new WeakMap();
$i = /* @__PURE__ */ new WeakMap();
pt(Ze, 4, "handle", Qs, Ir, Ci);
pt(Ze, 4, "element", Js, Ir, Mi);
pt(Ze, 4, "feedback", Ks, Ir, $i);
Sr(Ze, Ir);
var ea, ta, Nn, st, Li, hn, ra, na, fr, Ti, nn = class extends (Nn = Je, ta = [le], ea = [le], Nn) {
  constructor(e, t) {
    var r = e, { element: n, effects: i = () => [] } = r, o = Fs(r, ["element", "effects"]);
    const { collisionDetector: s = Bs } = o, a = (h) => {
      const { manager: _, element: f } = this;
      if (!f || h === null) {
        this.shape = void 0;
        return;
      }
      if (!_) return;
      const D = new Ne(f), A = Ve(() => this.shape);
      return D && (A != null && A.equals(D)) ? A : (this.shape = D, D);
    }, d = Ce(!1);
    super(
      Ei(vr({}, o), {
        collisionDetector: s,
        effects: () => [
          ...i(),
          () => {
            const { element: h, manager: _ } = this;
            if (!_) return;
            const { dragOperation: f } = _, { source: D } = f;
            d.value = !!(D && f.status.initialized && h && !this.disabled && this.accepts(D));
          },
          () => {
            const { element: h } = this;
            if (d.value && h) {
              const _ = new xl(
                h,
                a
              );
              return () => {
                _.disconnect(), this.shape = void 0;
              };
            }
          },
          () => {
            var h;
            if ((h = this.manager) != null && h.dragOperation.status.initialized)
              return () => {
                this.shape = void 0;
              };
          }
        ]
      }),
      t
    ), Le(this, fr), Le(this, Li, Ie(st, 8, this)), Ie(st, 11, this), Le(this, Ti, Ie(st, 12, this)), Ie(st, 15, this), this.element = n, this.refreshShape = () => a();
  }
  set element(e) {
    Ke(this, fr, e, na);
  }
  get element() {
    var e;
    return (e = this.proxy) != null ? e : Re(this, fr, ra);
  }
};
st = rn(Nn);
Li = /* @__PURE__ */ new WeakMap();
fr = /* @__PURE__ */ new WeakSet();
Ti = /* @__PURE__ */ new WeakMap();
hn = pt(st, 20, "#element", ta, fr, Li), ra = hn.get, na = hn.set;
pt(st, 4, "proxy", ea, nn, Ti);
Sr(st, nn);
function Ic(e) {
  return e != null && typeof e == "object" && "current" in e;
}
function Rt(e) {
  var t;
  if (e != null)
    return Ic(e) ? (t = e.current) != null ? t : void 0 : e;
}
var Dc = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", on = Dc ? ka : ye;
function Ac(e, t = !1) {
  let r = e.peek();
  const n = Nt(!1), i = ke(r)[1];
  return on(
    () => me(() => {
      if (r !== (r = e.value)) {
        if (!n.current) return;
        t ? Sa(() => i(r)) : i(r);
      }
    }),
    [e, t]
  ), {
    get value() {
      return n.current = !0, e.value;
    }
  };
}
function Br(e, t = [], r = !1) {
  const n = Nt(e);
  return n.current = e, Ac(
    _r(() => Be(() => n.current()), t),
    r
  );
}
function Oc(e, t) {
  e();
}
function ve(e, t, r = ye, n = Object.is) {
  const i = Nt(e);
  r(() => {
    const o = i.current;
    n(e, o) || (i.current = e, t(e, o));
  }, [t, e]);
}
function Nr(e, t) {
  const r = Nt(Rt(e));
  on(() => {
    const n = Rt(e);
    n !== r.current && (r.current = n, t(n));
  });
}
var Pc = Object.defineProperty, Cc = Object.defineProperties, Mc = Object.getOwnPropertyDescriptors, vo = Object.getOwnPropertySymbols, $c = Object.prototype.hasOwnProperty, Lc = Object.prototype.propertyIsEnumerable, yo = (e, t, r) => t in e ? Pc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Tc = (e, t) => {
  for (var r in t || (t = {}))
    $c.call(t, r) && yo(e, r, t[r]);
  if (vo)
    for (var r of vo(t))
      Lc.call(t, r) && yo(e, r, t[r]);
  return e;
}, jc = (e, t) => Cc(e, Mc(t)), Rc = new Ec(), Bc = Et(
  Rc
);
function ia() {
  return St(Bc);
}
function oa(e) {
  var t;
  const r = (t = ia()) != null ? t : void 0, [n] = ke(() => e(void 0));
  return n.manager !== r && (n.manager = r), on(n.register, [r, n]), n;
}
function Nc(e) {
  const { collisionDetector: t, data: r, disabled: n, element: i, id: o, accept: s, type: a } = e, d = oa(
    (_) => new nn(
      jc(Tc({}, e), {
        element: Rt(i)
      }),
      _
    )
  ), h = Br(() => d.isDropTarget, [d]);
  return ve(o, () => d.id = o), Nr(i, (_) => d.element = _), ve(s, () => d.id = o, void 0, Bt), ve(t, () => d.id = o), ve(r, () => r && (d.data = r)), ve(n, () => d.disabled = n === !0), ve(a, () => d.id = o), {
    get isDropTarget() {
      return h.value;
    },
    ref: he(
      (_) => {
        var f, D;
        !_ && ((f = d.element) != null && f.isConnected) && !((D = d.manager) != null && D.dragOperation.status.idle) || (d.element = _ ?? void 0);
      },
      [d]
    ),
    droppable: d
  };
}
var zc = Object.create, sa = Object.defineProperty, Wc = Object.defineProperties, Fc = Object.getOwnPropertyDescriptor, Uc = Object.getOwnPropertyDescriptors, Gr = Object.getOwnPropertySymbols, aa = Object.prototype.hasOwnProperty, la = Object.prototype.propertyIsEnumerable, Zc = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Dr = (e) => {
  throw TypeError(e);
}, zn = (e, t, r) => t in e ? sa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Yc = (e, t) => {
  for (var r in t || (t = {}))
    aa.call(t, r) && zn(e, r, t[r]);
  if (Gr)
    for (var r of Gr(t))
      la.call(t, r) && zn(e, r, t[r]);
  return e;
}, Vc = (e, t) => Wc(e, Uc(t)), Hc = (e, t) => {
  var r = {};
  for (var n in e)
    aa.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && Gr)
    for (var n of Gr(e))
      t.indexOf(n) < 0 && la.call(e, n) && (r[n] = e[n]);
  return r;
}, qc = (e) => {
  var t;
  return [, , , zc((t = void 0) != null ? t : null)];
}, ca = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], lr = (e) => e !== void 0 && typeof e != "function" ? Dr("Function expected") : e, Xc = (e, t, r, n, i) => ({ kind: ca[e], name: t, metadata: n, addInitializer: (o) => r._ ? Dr("Already initialized") : i.push(lr(o || null)) }), Gc = (e, t) => zn(t, Zc("metadata"), e[3]), Cr = (e, t, r, n) => {
  for (var i = 0, o = e[t >> 1], s = o && o.length; i < s; i++) t & 1 ? o[i].call(r) : n = o[i].call(r, n);
  return n;
}, ua = (e, t, r, n, i, o) => {
  for (var s, a, d, h, _, f = t & 7, D = !1, A = !1, v = e.length + 1, M = ca[f + 5], b = e[v - 1] = [], y = e[v] || (e[v] = []), w = (i = i.prototype, Fc({ get [r]() {
    return Wn(this, o);
  }, set [r](x) {
    return Fn(this, o, x);
  } }, r)), C = n.length - 1; C >= 0; C--)
    h = Xc(f, r, d = {}, e[3], y), h.static = D, h.private = A, _ = h.access = { has: (x) => r in x }, _.get = (x) => x[r], _.set = (x, E) => x[r] = E, a = (0, n[C])({ get: w.get, set: w.set }, h), d._ = 1, a === void 0 ? lr(a) && (w[M] = a) : typeof a != "object" || a === null ? Dr("Object expected") : (lr(s = a.get) && (w.get = s), lr(s = a.set) && (w.set = s), lr(s = a.init) && b.unshift(s));
  return w && sa(i, r, w), i;
}, da = (e, t, r) => t.has(e) || Dr("Cannot " + r), Wn = (e, t, r) => (da(e, t, "read from private field"), t.get(e)), gn = (e, t, r) => t.has(e) ? Dr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Fn = (e, t, r, n) => (da(e, t, "write to private field"), t.set(e, r), r);
function bt(e) {
  return e instanceof Bi || e instanceof ga;
}
var Mr = 10, Kc = class extends Ae {
  constructor(e) {
    super(e);
    const t = me(() => {
      const { dragOperation: n } = e;
      if (gr(n.activatorEvent) && bt(n.source) && n.status.initialized) {
        const i = e.registry.plugins.get(Er);
        if (i)
          return i.disable(), () => i.enable();
      }
    }), r = e.monitor.addEventListener(
      "dragmove",
      (n, i) => {
        queueMicrotask(() => {
          if (this.disabled || n.defaultPrevented)
            return;
          const { dragOperation: o } = i;
          if (!gr(o.activatorEvent) || !bt(o.source) || !o.shape)
            return;
          const { actions: s, collisionObserver: a, registry: d } = i, { by: h } = n;
          if (!h)
            return;
          const _ = Jc(h), { source: f, target: D } = o, { center: A } = o.shape.current, v = [], M = [];
          pe(() => {
            for (const E of d.droppables) {
              const { id: k } = E;
              if (!E.accepts(f) || k === (D == null ? void 0 : D.id) && bt(E) || !E.element)
                continue;
              let P = E.shape;
              const u = new Ne(E.element, {
                getBoundingClientRect: (g) => tn(g, void 0, 0.2)
              });
              !u.height || !u.width || (_ == "down" && A.y + Mr < u.center.y || _ == "up" && A.y - Mr > u.center.y || _ == "left" && A.x - Mr > u.center.x || _ == "right" && A.x + Mr < u.center.x) && (v.push(E), E.shape = u, M.push(() => E.shape = P));
            }
          }), n.preventDefault(), a.disable();
          const b = a.computeCollisions(
            v,
            Vl
          );
          pe(() => M.forEach((E) => E()));
          const [y] = b;
          if (!y)
            return;
          const { id: w } = y, { index: C, group: x } = f.sortable;
          s.setDropTarget(w).then((E) => {
            if (E) return;
            const { source: k, target: P } = o;
            if (!k || !bt(k))
              return;
            const {
              index: u,
              group: g,
              target: c
            } = k.sortable, m = C !== u || x !== g, O = m ? c : P == null ? void 0 : P.element;
            if (!O) return;
            $s(O);
            const z = new Ne(O);
            z && (s.move({
              to: {
                x: z.center.x,
                y: z.center.y
              }
            }), m ? s.setDropTarget(k.id).then(() => a.enable()) : a.enable());
          });
        });
      }
    );
    this.destroy = () => {
      r(), t();
    };
  }
};
function Jc(e) {
  const { x: t, y: r } = e;
  if (t > 0)
    return "right";
  if (t < 0)
    return "left";
  if (r > 0)
    return "down";
  if (r < 0)
    return "up";
}
var Qc = Object.defineProperty, eu = Object.defineProperties, tu = Object.getOwnPropertyDescriptors, mo = Object.getOwnPropertySymbols, ru = Object.prototype.hasOwnProperty, nu = Object.prototype.propertyIsEnumerable, bo = (e, t, r) => t in e ? Qc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, _o = (e, t) => {
  for (var r in t || (t = {}))
    ru.call(t, r) && bo(e, r, t[r]);
  if (mo)
    for (var r of mo(t))
      nu.call(t, r) && bo(e, r, t[r]);
  return e;
}, wo = (e, t) => eu(e, tu(t));
function iu(e, t, r) {
  if (t === r)
    return e;
  const n = e.slice();
  return n.splice(r, 0, n.splice(t, 1)[0]), n;
}
function ou(e, t, r) {
  var n, i;
  const { source: o, target: s, canceled: a } = t.operation;
  if (!o || !s || a)
    return "preventDefault" in t && t.preventDefault(), e;
  const d = (C, x) => C === x || typeof C == "object" && "id" in C && C.id === x;
  if (Array.isArray(e)) {
    const C = e.findIndex((E) => d(E, o.id)), x = e.findIndex((E) => d(E, s.id));
    if (C === -1 || x === -1)
      return e;
    if (!a && "index" in o && typeof o.index == "number") {
      const E = o.index;
      if (E !== C)
        return r(e, C, E);
    }
    return r(e, C, x);
  }
  const h = Object.entries(e);
  let _ = -1, f, D = -1, A;
  for (const [C, x] of h)
    if (_ === -1 && (_ = x.findIndex((E) => d(E, o.id)), _ !== -1 && (f = C)), D === -1 && (D = x.findIndex((E) => d(E, s.id)), D !== -1 && (A = C)), _ !== -1 && D !== -1)
      break;
  if (!o.manager) return e;
  const { dragOperation: v } = o.manager, M = (i = (n = v.shape) == null ? void 0 : n.current.center) != null ? i : v.position.current;
  if (A == null && s.id in e) {
    const C = s.shape && M.y > s.shape.center.y ? e[s.id].length : 0;
    A = s.id, D = C;
  }
  if (f == null || A == null || f === A && _ === D)
    return "preventDefault" in t && t.preventDefault(), e;
  if (f === A)
    return wo(_o({}, e), {
      [f]: r(e[f], _, D)
    });
  const y = s.shape && Math.round(M.y) > Math.round(s.shape.center.y) ? 1 : 0, w = e[f][_];
  return wo(_o({}, e), {
    [f]: [
      ...e[f].slice(0, _),
      ...e[f].slice(_ + 1)
    ],
    [A]: [
      ...e[A].slice(0, D + y),
      w,
      ...e[A].slice(D + y)
    ]
  });
}
function su(e, t) {
  return ou(e, t, iu);
}
var xo = "__default__", au = class extends Ae {
  constructor(e) {
    super(e);
    const t = () => {
      const n = /* @__PURE__ */ new Map();
      for (const i of e.registry.droppables)
        if (i instanceof Bi) {
          const { sortable: o } = i, { group: s } = o;
          let a = n.get(s);
          a || (a = /* @__PURE__ */ new Set(), n.set(s, a)), a.add(o);
        }
      for (const [i, o] of n)
        n.set(i, new Set($r(o)));
      return n;
    }, r = [
      e.monitor.addEventListener("dragover", (n, i) => {
        queueMicrotask(() => {
          if (this.disabled || n.defaultPrevented)
            return;
          const { dragOperation: o } = i, { source: s, target: a } = o;
          if (!bt(s) || !bt(a) || s.sortable === a.sortable)
            return;
          const d = t(), h = s.sortable.group === a.sortable.group, _ = d.get(s.sortable.group), f = h ? _ : d.get(a.sortable.group);
          !_ || !f || i.renderer.rendering.then(() => {
            var D, A, v;
            const M = t();
            for (const [c, m] of d.entries()) {
              const O = Array.from(m).entries();
              for (const [z, N] of O)
                if (N.index !== z || N.group !== c || !((D = M.get(c)) != null && D.has(N)))
                  return;
            }
            const b = s.sortable.element, y = a.sortable.element;
            if (!y || !b || !h && a.id === s.sortable.group)
              return;
            const w = $r(_), C = h ? w : $r(f), x = (A = s.sortable.group) != null ? A : xo, E = (v = a.sortable.group) != null ? v : xo, k = {
              [x]: w,
              [E]: C
            }, P = su(k, n);
            if (k === P) return;
            const u = P[E].indexOf(s.sortable), g = P[E].indexOf(a.sortable);
            ko(b, u, y, g), i.collisionObserver.disable(), pe(() => {
              for (const [c, m] of P[x].entries())
                m.index = c;
              if (!h)
                for (const [c, m] of P[E].entries())
                  m.group = a.sortable.group, m.index = c;
            }), i.actions.setDropTarget(s.id).then(() => i.collisionObserver.enable());
          });
        });
      }),
      e.monitor.addEventListener("dragend", (n, i) => {
        if (!n.canceled)
          return;
        const { dragOperation: o } = i, { source: s } = o;
        bt(s) && (s.sortable.initialIndex === s.sortable.index && s.sortable.initialGroup === s.sortable.group || queueMicrotask(() => {
          const a = t(), d = a.get(
            s.sortable.initialGroup
          );
          d && i.renderer.rendering.then(() => {
            var h;
            for (const [A, v] of a.entries()) {
              const M = Array.from(v).entries();
              for (const [b, y] of M)
                if (y.index !== b || y.group !== A)
                  return;
            }
            const _ = $r(d), f = s.sortable.element, D = (h = _[s.sortable.initialIndex]) == null ? void 0 : h.element;
            !D || !f || (ko(
              f,
              s.sortable.initialIndex,
              D,
              s.sortable.initialIndex
            ), pe(() => {
              for (const [A, v] of a.entries()) {
                const M = Array.from(v).values();
                for (const b of M)
                  b.index = b.initialIndex, b.group = b.initialGroup;
              }
            }));
          });
        }));
      })
    ];
    this.destroy = () => {
      for (const n of r)
        n();
    };
  }
};
function ko(e, t, r, n) {
  const i = n < t ? "afterend" : "beforebegin";
  r.insertAdjacentElement(i, e);
}
function lu(e, t) {
  return e.index - t.index;
}
function $r(e) {
  return Array.from(e).sort(lu);
}
var cu = [
  Kc,
  au
], fa = {
  duration: 250,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  idle: !1
}, pa, ha, at, ji, Ri, Ct;
ha = [le], pa = [le];
var sn = class {
  constructor(e, t) {
    gn(this, ji, Cr(at, 8, this)), Cr(at, 11, this), gn(this, Ri, Cr(at, 12, this)), Cr(at, 15, this), gn(this, Ct), this.register = () => (pe(() => {
      var D, A;
      (D = this.manager) == null || D.registry.register(this.droppable), (A = this.manager) == null || A.registry.register(this.draggable);
    }), () => this.unregister()), this.unregister = () => {
      pe(() => {
        var D, A;
        (D = this.manager) == null || D.registry.unregister(this.droppable), (A = this.manager) == null || A.registry.unregister(this.draggable);
      });
    }, this.destroy = () => {
      pe(() => {
        this.droppable.destroy(), this.draggable.destroy();
      });
    };
    var r = e, {
      effects: n = () => [],
      group: i,
      index: o,
      sensors: s,
      type: a,
      transition: d = fa,
      plugins: h = cu
    } = r, _ = Hc(r, [
      "effects",
      "group",
      "index",
      "sensors",
      "type",
      "transition",
      "plugins"
    ]);
    let f = i;
    this.droppable = new Bi(_, t, this), this.draggable = new ga(
      Vc(Yc({}, _), {
        effects: () => [
          () => {
            var D;
            return (D = this.manager) == null ? void 0 : D.monitor.addEventListener("dragstart", () => {
              this.initialIndex = this.index, this.initialGroup = this.group, this.previousIndex = this.index;
            });
          },
          () => {
            const { index: D, group: A, previousIndex: v, manager: M } = this;
            (D !== v || A !== f) && (this.previousIndex = D, f = A, this.animate());
          },
          () => {
            const { target: D } = this, { feedback: A, isDragSource: v } = this.draggable;
            A == "move" && v && (this.droppable.disabled = !D);
          },
          () => {
            const { manager: D } = this;
            for (const A of h)
              D == null || D.registry.register(A);
          },
          ...n()
        ],
        type: a,
        sensors: s
      }),
      t,
      this
    ), Fn(this, Ct, _.element), this.manager = t, this.index = o, this.previousIndex = o, this.initialIndex = o, this.group = i, this.type = a, this.transition = d;
  }
  animate() {
    Ve(() => {
      const { manager: e, transition: t } = this, { shape: r } = this.droppable;
      if (!e) return;
      const { idle: n } = e.dragOperation.status;
      !r || !t || n && !t.idle || e.renderer.rendering.then(() => {
        const { element: i } = this;
        if (!i)
          return;
        const o = this.refreshShape();
        o && queueMicrotask(() => {
          const s = {
            x: r.boundingRectangle.left - o.boundingRectangle.left,
            y: r.boundingRectangle.top - o.boundingRectangle.top
          }, { translate: a } = Qe(i), d = no(i, a, !1), h = no(i, a);
          (s.x || s.y) && Ts({
            element: i,
            keyframes: {
              translate: [
                `${d.x + s.x}px ${d.y + s.y}px ${d.z}`,
                `${h.x}px ${h.y}px ${h.z}`
              ]
            },
            options: t,
            onFinish: () => {
              e.dragOperation.status.dragging || (this.droppable.shape = void 0);
            }
          });
        });
      });
    });
  }
  get manager() {
    return this.draggable.manager;
  }
  set manager(e) {
    pe(() => {
      this.draggable.manager = e, this.droppable.manager = e;
    });
  }
  set element(e) {
    pe(() => {
      const t = Wn(this, Ct), r = this.droppable.element, n = this.draggable.element;
      (!r || r === t) && (this.droppable.element = e), (!n || n === t) && (this.draggable.element = e), Fn(this, Ct, e);
    });
  }
  get element() {
    var e, t;
    const r = Wn(this, Ct);
    if (r)
      return (t = (e = On.get(r)) != null ? e : r) != null ? t : this.droppable.element;
  }
  set target(e) {
    this.droppable.element = e;
  }
  get target() {
    return this.droppable.element;
  }
  set source(e) {
    this.draggable.element = e;
  }
  get source() {
    return this.draggable.element;
  }
  get disabled() {
    return this.draggable.disabled && this.droppable.disabled;
  }
  set feedback(e) {
    this.draggable.feedback = e;
  }
  set disabled(e) {
    pe(() => {
      this.droppable.disabled = e, this.draggable.disabled = e;
    });
  }
  set data(e) {
    pe(() => {
      this.droppable.data = e, this.draggable.data = e;
    });
  }
  set handle(e) {
    this.draggable.handle = e;
  }
  set id(e) {
    pe(() => {
      this.droppable.id = e, this.draggable.id = e;
    });
  }
  get id() {
    return this.droppable.id;
  }
  set sensors(e) {
    this.draggable.sensors = e;
  }
  set modifiers(e) {
    this.draggable.modifiers = e;
  }
  set collisionPriority(e) {
    this.droppable.collisionPriority = e;
  }
  set collisionDetector(e) {
    this.droppable.collisionDetector = e ?? Bs;
  }
  set type(e) {
    pe(() => {
      this.droppable.type = e, this.draggable.type = e;
    });
  }
  get type() {
    return this.draggable.type;
  }
  set accept(e) {
    this.droppable.accept = e;
  }
  get accept() {
    return this.droppable.accept;
  }
  get isDropTarget() {
    return this.droppable.isDropTarget;
  }
  /**
   * A boolean indicating whether the sortable item is the source of a drag operation.
   */
  get isDragSource() {
    return this.draggable.isDragSource;
  }
  get status() {
    return this.draggable.status;
  }
  refreshShape() {
    return this.droppable.refreshShape();
  }
  accepts(e) {
    return this.droppable.accepts(e);
  }
};
at = qc();
ji = /* @__PURE__ */ new WeakMap();
Ri = /* @__PURE__ */ new WeakMap();
Ct = /* @__PURE__ */ new WeakMap();
ua(at, 4, "index", ha, sn, ji);
ua(at, 4, "group", pa, sn, Ri);
Gc(at, sn);
var ga = class extends Ir {
  constructor(e, t, r) {
    super(e, t), this.sortable = r;
  }
  get index() {
    return this.sortable.index;
  }
}, Bi = class extends nn {
  constructor(e, t, r) {
    super(e, t), this.sortable = r;
  }
}, uu = Object.defineProperty, du = Object.defineProperties, fu = Object.getOwnPropertyDescriptors, So = Object.getOwnPropertySymbols, pu = Object.prototype.hasOwnProperty, hu = Object.prototype.propertyIsEnumerable, Eo = (e, t, r) => t in e ? uu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, gu = (e, t) => {
  for (var r in t || (t = {}))
    pu.call(t, r) && Eo(e, r, t[r]);
  if (So)
    for (var r of So(t))
      hu.call(t, r) && Eo(e, r, t[r]);
  return e;
}, vu = (e, t) => du(e, fu(t));
function yu(e) {
  const {
    accept: t,
    collisionDetector: r,
    collisionPriority: n,
    id: i,
    data: o,
    element: s,
    handle: a,
    index: d,
    group: h,
    disabled: _,
    feedback: f,
    modifiers: D,
    sensors: A,
    target: v,
    transition: M = fa,
    type: b
  } = e, y = oa((E) => new sn(
    vu(gu({}, e), {
      handle: Rt(a),
      element: Rt(s),
      target: Rt(v),
      feedback: f
    }),
    E
  )), w = Br(() => y.isDropTarget, [y]), C = Br(() => y.isDragSource, [y]), x = Br(() => y.status, [y]);
  return ve(i, () => y.id = i), on(() => {
    pe(() => {
      y.group = h, y.index = d;
    });
  }, [y, h, d]), ve(b, () => y.type = b), ve(
    t,
    () => y.accept = t,
    void 0,
    Bt
  ), ve(o, () => o && (y.data = o)), ve(
    d,
    () => {
      var E;
      (E = y.manager) != null && E.dragOperation.status.idle && (M != null && M.idle) && y.refreshShape();
    },
    Oc
  ), Nr(a, (E) => y.handle = E), Nr(s, (E) => y.element = E), Nr(v, (E) => y.target = E), ve(_, () => y.disabled = _ === !0), ve(A, () => y.sensors = A), ve(
    r,
    () => y.collisionDetector = r
  ), ve(
    n,
    () => y.collisionPriority = n
  ), ve(f, () => y.feedback = f ?? "default"), ve(M, () => y.transition = M), ve(
    D,
    () => y.modifiers = D,
    void 0,
    Bt
  ), {
    get isDragSource() {
      return C.value;
    },
    get isDropTarget() {
      return w.value;
    },
    get status() {
      return x.value;
    },
    handleRef: he(
      (E) => {
        y.handle = E ?? void 0;
      },
      [y]
    ),
    ref: he(
      (E) => {
        var k, P;
        !E && ((k = y.element) != null && k.isConnected) && !((P = y.manager) != null && P.dragOperation.status.idle) || (y.element = E ?? void 0);
      },
      [y]
    ),
    sourceRef: he(
      (E) => {
        var k, P;
        !E && ((k = y.source) != null && k.isConnected) && !((P = y.manager) != null && P.dragOperation.status.idle) || (y.source = E ?? void 0);
      },
      [y]
    ),
    targetRef: he(
      (E) => {
        var k, P;
        !E && ((k = y.target) != null && k.isConnected) && !((P = y.manager) != null && P.dragOperation.status.idle) || (y.target = E ?? void 0);
      },
      [y]
    )
  };
}
const Io = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (h, _) => {
    const f = typeof h == "function" ? h(t) : h;
    if (!Object.is(f, t)) {
      const D = t;
      t = _ ?? (typeof f != "object" || f === null) ? f : Object.assign({}, t, f), r.forEach((A) => A(t, D));
    }
  }, i = () => t, a = { setState: n, getState: i, getInitialState: () => d, subscribe: (h) => (r.add(h), () => r.delete(h)) }, d = t = e(n, i, a);
  return a;
}, va = (e) => e ? Io(e) : Io, mu = (e) => e;
function bu(e, t = mu) {
  const r = _n.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState())
  );
  return _n.useDebugValue(r), r;
}
const Do = (e) => Symbol.iterator in e, Ao = (e) => (
  // HACK: avoid checking entries type
  "entries" in e
), Oo = (e, t) => {
  const r = e instanceof Map ? e : new Map(e.entries()), n = t instanceof Map ? t : new Map(t.entries());
  if (r.size !== n.size)
    return !1;
  for (const [i, o] of r)
    if (!Object.is(o, n.get(i)))
      return !1;
  return !0;
}, _u = (e, t) => {
  const r = e[Symbol.iterator](), n = t[Symbol.iterator]();
  let i = r.next(), o = n.next();
  for (; !i.done && !o.done; ) {
    if (!Object.is(i.value, o.value))
      return !1;
    i = r.next(), o = n.next();
  }
  return !!i.done && !!o.done;
};
function wu(e, t) {
  return Object.is(e, t) ? !0 : typeof e != "object" || e === null || typeof t != "object" || t === null ? !1 : !Do(e) || !Do(t) ? Oo(
    { entries: () => Object.entries(e) },
    { entries: () => Object.entries(t) }
  ) : Ao(e) && Ao(t) ? Oo(e, t) : _u(e, t);
}
function xu(e) {
  const t = _n.useRef(void 0);
  return (r) => {
    const n = e(r);
    return wu(t.current, n) ? t.current : t.current = n;
  };
}
function Lr(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var vn = { exports: {} }, Po;
function ku() {
  return Po || (Po = 1, function(e, t) {
    (function(r) {
      e.exports = r();
    })(function() {
      return function r(n, i, o) {
        function s(h, _) {
          if (!i[h]) {
            if (!n[h]) {
              var f = typeof Lr == "function" && Lr;
              if (!_ && f) return f(h, !0);
              if (a) return a(h, !0);
              throw new Error("Cannot find module '" + h + "'");
            }
            _ = i[h] = { exports: {} }, n[h][0].call(_.exports, function(D) {
              var A = n[h][1][D];
              return s(A || D);
            }, _, _.exports, r, n, i, o);
          }
          return i[h].exports;
        }
        for (var a = typeof Lr == "function" && Lr, d = 0; d < o.length; d++) s(o[d]);
        return s;
      }({ 1: [function(r, n, i) {
        (function(o, s, a, d, h, _, f, D, A) {
          var v = r("crypto");
          function M(k, P) {
            P = w(k, P);
            var u;
            return (u = P.algorithm !== "passthrough" ? v.createHash(P.algorithm) : new E()).write === void 0 && (u.write = u.update, u.end = u.update), x(P, u).dispatch(k), u.update || u.end(""), u.digest ? u.digest(P.encoding === "buffer" ? void 0 : P.encoding) : (k = u.read(), P.encoding !== "buffer" ? k.toString(P.encoding) : k);
          }
          (i = n.exports = M).sha1 = function(k) {
            return M(k);
          }, i.keys = function(k) {
            return M(k, { excludeValues: !0, algorithm: "sha1", encoding: "hex" });
          }, i.MD5 = function(k) {
            return M(k, { algorithm: "md5", encoding: "hex" });
          }, i.keysMD5 = function(k) {
            return M(k, { algorithm: "md5", encoding: "hex", excludeValues: !0 });
          };
          var b = v.getHashes ? v.getHashes().slice() : ["sha1", "md5"], y = (b.push("passthrough"), ["buffer", "hex", "binary", "base64"]);
          function w(k, P) {
            var u = {};
            if (u.algorithm = (P = P || {}).algorithm || "sha1", u.encoding = P.encoding || "hex", u.excludeValues = !!P.excludeValues, u.algorithm = u.algorithm.toLowerCase(), u.encoding = u.encoding.toLowerCase(), u.ignoreUnknown = P.ignoreUnknown === !0, u.respectType = P.respectType !== !1, u.respectFunctionNames = P.respectFunctionNames !== !1, u.respectFunctionProperties = P.respectFunctionProperties !== !1, u.unorderedArrays = P.unorderedArrays === !0, u.unorderedSets = P.unorderedSets !== !1, u.unorderedObjects = P.unorderedObjects !== !1, u.replacer = P.replacer || void 0, u.excludeKeys = P.excludeKeys || void 0, k === void 0) throw new Error("Object argument required.");
            for (var g = 0; g < b.length; ++g) b[g].toLowerCase() === u.algorithm.toLowerCase() && (u.algorithm = b[g]);
            if (b.indexOf(u.algorithm) === -1) throw new Error('Algorithm "' + u.algorithm + '"  not supported. supported values: ' + b.join(", "));
            if (y.indexOf(u.encoding) === -1 && u.algorithm !== "passthrough") throw new Error('Encoding "' + u.encoding + '"  not supported. supported values: ' + y.join(", "));
            return u;
          }
          function C(k) {
            if (typeof k == "function") return /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(k)) != null;
          }
          function x(k, P, u) {
            u = u || [];
            function g(c) {
              return P.update ? P.update(c, "utf8") : P.write(c, "utf8");
            }
            return { dispatch: function(c) {
              return this["_" + ((c = k.replacer ? k.replacer(c) : c) === null ? "null" : typeof c)](c);
            }, _object: function(c) {
              var m, O = Object.prototype.toString.call(c), z = /\[object (.*)\]/i.exec(O);
              if (z = (z = z ? z[1] : "unknown:[" + O + "]").toLowerCase(), 0 <= (O = u.indexOf(c))) return this.dispatch("[CIRCULAR:" + O + "]");
              if (u.push(c), a !== void 0 && a.isBuffer && a.isBuffer(c)) return g("buffer:"), g(c);
              if (z === "object" || z === "function" || z === "asyncfunction") return O = Object.keys(c), k.unorderedObjects && (O = O.sort()), k.respectType === !1 || C(c) || O.splice(0, 0, "prototype", "__proto__", "constructor"), k.excludeKeys && (O = O.filter(function(N) {
                return !k.excludeKeys(N);
              })), g("object:" + O.length + ":"), m = this, O.forEach(function(N) {
                m.dispatch(N), g(":"), k.excludeValues || m.dispatch(c[N]), g(",");
              });
              if (!this["_" + z]) {
                if (k.ignoreUnknown) return g("[" + z + "]");
                throw new Error('Unknown object type "' + z + '"');
              }
              this["_" + z](c);
            }, _array: function(c, N) {
              N = N !== void 0 ? N : k.unorderedArrays !== !1;
              var O = this;
              if (g("array:" + c.length + ":"), !N || c.length <= 1) return c.forEach(function(W) {
                return O.dispatch(W);
              });
              var z = [], N = c.map(function(W) {
                var R = new E(), U = u.slice();
                return x(k, R, U).dispatch(W), z = z.concat(U.slice(u.length)), R.read().toString();
              });
              return u = u.concat(z), N.sort(), this._array(N, !1);
            }, _date: function(c) {
              return g("date:" + c.toJSON());
            }, _symbol: function(c) {
              return g("symbol:" + c.toString());
            }, _error: function(c) {
              return g("error:" + c.toString());
            }, _boolean: function(c) {
              return g("bool:" + c.toString());
            }, _string: function(c) {
              g("string:" + c.length + ":"), g(c.toString());
            }, _function: function(c) {
              g("fn:"), C(c) ? this.dispatch("[native]") : this.dispatch(c.toString()), k.respectFunctionNames !== !1 && this.dispatch("function-name:" + String(c.name)), k.respectFunctionProperties && this._object(c);
            }, _number: function(c) {
              return g("number:" + c.toString());
            }, _xml: function(c) {
              return g("xml:" + c.toString());
            }, _null: function() {
              return g("Null");
            }, _undefined: function() {
              return g("Undefined");
            }, _regexp: function(c) {
              return g("regex:" + c.toString());
            }, _uint8array: function(c) {
              return g("uint8array:"), this.dispatch(Array.prototype.slice.call(c));
            }, _uint8clampedarray: function(c) {
              return g("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(c));
            }, _int8array: function(c) {
              return g("int8array:"), this.dispatch(Array.prototype.slice.call(c));
            }, _uint16array: function(c) {
              return g("uint16array:"), this.dispatch(Array.prototype.slice.call(c));
            }, _int16array: function(c) {
              return g("int16array:"), this.dispatch(Array.prototype.slice.call(c));
            }, _uint32array: function(c) {
              return g("uint32array:"), this.dispatch(Array.prototype.slice.call(c));
            }, _int32array: function(c) {
              return g("int32array:"), this.dispatch(Array.prototype.slice.call(c));
            }, _float32array: function(c) {
              return g("float32array:"), this.dispatch(Array.prototype.slice.call(c));
            }, _float64array: function(c) {
              return g("float64array:"), this.dispatch(Array.prototype.slice.call(c));
            }, _arraybuffer: function(c) {
              return g("arraybuffer:"), this.dispatch(new Uint8Array(c));
            }, _url: function(c) {
              return g("url:" + c.toString());
            }, _map: function(c) {
              return g("map:"), c = Array.from(c), this._array(c, k.unorderedSets !== !1);
            }, _set: function(c) {
              return g("set:"), c = Array.from(c), this._array(c, k.unorderedSets !== !1);
            }, _file: function(c) {
              return g("file:"), this.dispatch([c.name, c.size, c.type, c.lastModfied]);
            }, _blob: function() {
              if (k.ignoreUnknown) return g("[blob]");
              throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`);
            }, _domwindow: function() {
              return g("domwindow");
            }, _bigint: function(c) {
              return g("bigint:" + c.toString());
            }, _process: function() {
              return g("process");
            }, _timer: function() {
              return g("timer");
            }, _pipe: function() {
              return g("pipe");
            }, _tcp: function() {
              return g("tcp");
            }, _udp: function() {
              return g("udp");
            }, _tty: function() {
              return g("tty");
            }, _statwatcher: function() {
              return g("statwatcher");
            }, _securecontext: function() {
              return g("securecontext");
            }, _connection: function() {
              return g("connection");
            }, _zlib: function() {
              return g("zlib");
            }, _context: function() {
              return g("context");
            }, _nodescript: function() {
              return g("nodescript");
            }, _httpparser: function() {
              return g("httpparser");
            }, _dataview: function() {
              return g("dataview");
            }, _signal: function() {
              return g("signal");
            }, _fsevent: function() {
              return g("fsevent");
            }, _tlswrap: function() {
              return g("tlswrap");
            } };
          }
          function E() {
            return { buf: "", write: function(k) {
              this.buf += k;
            }, end: function(k) {
              this.buf += k;
            }, read: function() {
              return this.buf;
            } };
          }
          i.writeToStream = function(k, P, u) {
            return u === void 0 && (u = P, P = {}), x(P = w(k, P), u).dispatch(k);
          };
        }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_9a5aa49d.js", "/");
      }, { buffer: 3, crypto: 5, lYpoI2: 11 }], 2: [function(r, n, i) {
        (function(o, s, a, d, h, _, f, D, A) {
          (function(v) {
            var M = typeof Uint8Array < "u" ? Uint8Array : Array, b = 43, y = 47, w = 48, C = 97, x = 65, E = 45, k = 95;
            function P(u) {
              return u = u.charCodeAt(0), u === b || u === E ? 62 : u === y || u === k ? 63 : u < w ? -1 : u < w + 10 ? u - w + 26 + 26 : u < x + 26 ? u - x : u < C + 26 ? u - C + 26 : void 0;
            }
            v.toByteArray = function(u) {
              var g, c;
              if (0 < u.length % 4) throw new Error("Invalid string. Length must be a multiple of 4");
              var m = u.length, m = u.charAt(m - 2) === "=" ? 2 : u.charAt(m - 1) === "=" ? 1 : 0, O = new M(3 * u.length / 4 - m), z = 0 < m ? u.length - 4 : u.length, N = 0;
              function W(R) {
                O[N++] = R;
              }
              for (g = 0; g < z; g += 4, 0) W((16711680 & (c = P(u.charAt(g)) << 18 | P(u.charAt(g + 1)) << 12 | P(u.charAt(g + 2)) << 6 | P(u.charAt(g + 3)))) >> 16), W((65280 & c) >> 8), W(255 & c);
              return m == 2 ? W(255 & (c = P(u.charAt(g)) << 2 | P(u.charAt(g + 1)) >> 4)) : m == 1 && (W((c = P(u.charAt(g)) << 10 | P(u.charAt(g + 1)) << 4 | P(u.charAt(g + 2)) >> 2) >> 8 & 255), W(255 & c)), O;
            }, v.fromByteArray = function(u) {
              var g, c, m, O, z = u.length % 3, N = "";
              function W(R) {
                return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(R);
              }
              for (g = 0, m = u.length - z; g < m; g += 3) c = (u[g] << 16) + (u[g + 1] << 8) + u[g + 2], N += W((O = c) >> 18 & 63) + W(O >> 12 & 63) + W(O >> 6 & 63) + W(63 & O);
              switch (z) {
                case 1:
                  N = (N += W((c = u[u.length - 1]) >> 2)) + W(c << 4 & 63) + "==";
                  break;
                case 2:
                  N = (N = (N += W((c = (u[u.length - 2] << 8) + u[u.length - 1]) >> 10)) + W(c >> 4 & 63)) + W(c << 2 & 63) + "=";
              }
              return N;
            };
          })(i === void 0 ? this.base64js = {} : i);
        }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js", "/node_modules/gulp-browserify/node_modules/base64-js/lib");
      }, { buffer: 3, lYpoI2: 11 }], 3: [function(r, n, i) {
        (function(o, s, b, d, h, _, f, D, A) {
          var v = r("base64-js"), M = r("ieee754");
          function b(l, p, I) {
            if (!(this instanceof b)) return new b(l, p, I);
            var $, L, B, V, Z = typeof l;
            if (p === "base64" && Z == "string") for (l = (V = l).trim ? V.trim() : V.replace(/^\s+|\s+$/g, ""); l.length % 4 != 0; ) l += "=";
            if (Z == "number") $ = ce(l);
            else if (Z == "string") $ = b.byteLength(l, p);
            else {
              if (Z != "object") throw new Error("First argument needs to be a number, array or string.");
              $ = ce(l.length);
            }
            if (b._useTypedArrays ? L = b._augment(new Uint8Array($)) : ((L = this).length = $, L._isBuffer = !0), b._useTypedArrays && typeof l.byteLength == "number") L._set(l);
            else if (ne(V = l) || b.isBuffer(V) || V && typeof V == "object" && typeof V.length == "number") for (B = 0; B < $; B++) b.isBuffer(l) ? L[B] = l.readUInt8(B) : L[B] = l[B];
            else if (Z == "string") L.write(l, 0, p);
            else if (Z == "number" && !b._useTypedArrays && !I) for (B = 0; B < $; B++) L[B] = 0;
            return L;
          }
          function y(l, p, I, $) {
            return b._charsWritten = Te(function(L) {
              for (var B = [], V = 0; V < L.length; V++) B.push(255 & L.charCodeAt(V));
              return B;
            }(p), l, I, $);
          }
          function w(l, p, I, $) {
            return b._charsWritten = Te(function(L) {
              for (var B, V, Z = [], Y = 0; Y < L.length; Y++) V = L.charCodeAt(Y), B = V >> 8, V = V % 256, Z.push(V), Z.push(B);
              return Z;
            }(p), l, I, $);
          }
          function C(l, p, I) {
            var $ = "";
            I = Math.min(l.length, I);
            for (var L = p; L < I; L++) $ += String.fromCharCode(l[L]);
            return $;
          }
          function x(l, p, I, B) {
            B || (T(typeof I == "boolean", "missing or invalid endian"), T(p != null, "missing offset"), T(p + 1 < l.length, "Trying to read beyond buffer length"));
            var L, B = l.length;
            if (!(B <= p)) return I ? (L = l[p], p + 1 < B && (L |= l[p + 1] << 8)) : (L = l[p] << 8, p + 1 < B && (L |= l[p + 1])), L;
          }
          function E(l, p, I, B) {
            B || (T(typeof I == "boolean", "missing or invalid endian"), T(p != null, "missing offset"), T(p + 3 < l.length, "Trying to read beyond buffer length"));
            var L, B = l.length;
            if (!(B <= p)) return I ? (p + 2 < B && (L = l[p + 2] << 16), p + 1 < B && (L |= l[p + 1] << 8), L |= l[p], p + 3 < B && (L += l[p + 3] << 24 >>> 0)) : (p + 1 < B && (L = l[p + 1] << 16), p + 2 < B && (L |= l[p + 2] << 8), p + 3 < B && (L |= l[p + 3]), L += l[p] << 24 >>> 0), L;
          }
          function k(l, p, I, $) {
            if ($ || (T(typeof I == "boolean", "missing or invalid endian"), T(p != null, "missing offset"), T(p + 1 < l.length, "Trying to read beyond buffer length")), !(l.length <= p)) return $ = x(l, p, I, !0), 32768 & $ ? -1 * (65535 - $ + 1) : $;
          }
          function P(l, p, I, $) {
            if ($ || (T(typeof I == "boolean", "missing or invalid endian"), T(p != null, "missing offset"), T(p + 3 < l.length, "Trying to read beyond buffer length")), !(l.length <= p)) return $ = E(l, p, I, !0), 2147483648 & $ ? -1 * (4294967295 - $ + 1) : $;
          }
          function u(l, p, I, $) {
            return $ || (T(typeof I == "boolean", "missing or invalid endian"), T(p + 3 < l.length, "Trying to read beyond buffer length")), M.read(l, p, I, 23, 4);
          }
          function g(l, p, I, $) {
            return $ || (T(typeof I == "boolean", "missing or invalid endian"), T(p + 7 < l.length, "Trying to read beyond buffer length")), M.read(l, p, I, 52, 8);
          }
          function c(l, p, I, $, L) {
            if (L || (T(p != null, "missing value"), T(typeof $ == "boolean", "missing or invalid endian"), T(I != null, "missing offset"), T(I + 1 < l.length, "trying to write beyond buffer length"), He(p, 65535)), L = l.length, !(L <= I)) for (var B = 0, V = Math.min(L - I, 2); B < V; B++) l[I + B] = (p & 255 << 8 * ($ ? B : 1 - B)) >>> 8 * ($ ? B : 1 - B);
          }
          function m(l, p, I, $, L) {
            if (L || (T(p != null, "missing value"), T(typeof $ == "boolean", "missing or invalid endian"), T(I != null, "missing offset"), T(I + 3 < l.length, "trying to write beyond buffer length"), He(p, 4294967295)), L = l.length, !(L <= I)) for (var B = 0, V = Math.min(L - I, 4); B < V; B++) l[I + B] = p >>> 8 * ($ ? B : 3 - B) & 255;
          }
          function O(l, p, I, $, L) {
            L || (T(p != null, "missing value"), T(typeof $ == "boolean", "missing or invalid endian"), T(I != null, "missing offset"), T(I + 1 < l.length, "Trying to write beyond buffer length"), Q(p, 32767, -32768)), l.length <= I || c(l, 0 <= p ? p : 65535 + p + 1, I, $, L);
          }
          function z(l, p, I, $, L) {
            L || (T(p != null, "missing value"), T(typeof $ == "boolean", "missing or invalid endian"), T(I != null, "missing offset"), T(I + 3 < l.length, "Trying to write beyond buffer length"), Q(p, 2147483647, -2147483648)), l.length <= I || m(l, 0 <= p ? p : 4294967295 + p + 1, I, $, L);
          }
          function N(l, p, I, $, L) {
            L || (T(p != null, "missing value"), T(typeof $ == "boolean", "missing or invalid endian"), T(I != null, "missing offset"), T(I + 3 < l.length, "Trying to write beyond buffer length"), Se(p, 34028234663852886e22, -34028234663852886e22)), l.length <= I || M.write(l, p, I, $, 23, 4);
          }
          function W(l, p, I, $, L) {
            L || (T(p != null, "missing value"), T(typeof $ == "boolean", "missing or invalid endian"), T(I != null, "missing offset"), T(I + 7 < l.length, "Trying to write beyond buffer length"), Se(p, 17976931348623157e292, -17976931348623157e292)), l.length <= I || M.write(l, p, I, $, 52, 8);
          }
          i.Buffer = b, i.SlowBuffer = b, i.INSPECT_MAX_BYTES = 50, b.poolSize = 8192, b._useTypedArrays = function() {
            try {
              var l = new ArrayBuffer(0), p = new Uint8Array(l);
              return p.foo = function() {
                return 42;
              }, p.foo() === 42 && typeof p.subarray == "function";
            } catch {
              return !1;
            }
          }(), b.isEncoding = function(l) {
            switch (String(l).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "raw":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }, b.isBuffer = function(l) {
            return !(l == null || !l._isBuffer);
          }, b.byteLength = function(l, p) {
            var I;
            switch (l += "", p || "utf8") {
              case "hex":
                I = l.length / 2;
                break;
              case "utf8":
              case "utf-8":
                I = fe(l).length;
                break;
              case "ascii":
              case "binary":
              case "raw":
                I = l.length;
                break;
              case "base64":
                I = J(l).length;
                break;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                I = 2 * l.length;
                break;
              default:
                throw new Error("Unknown encoding");
            }
            return I;
          }, b.concat = function(l, p) {
            if (T(ne(l), `Usage: Buffer.concat(list, [totalLength])
list should be an Array.`), l.length === 0) return new b(0);
            if (l.length === 1) return l[0];
            if (typeof p != "number") for (L = p = 0; L < l.length; L++) p += l[L].length;
            for (var I = new b(p), $ = 0, L = 0; L < l.length; L++) {
              var B = l[L];
              B.copy(I, $), $ += B.length;
            }
            return I;
          }, b.prototype.write = function(l, p, I, $) {
            isFinite(p) ? isFinite(I) || ($ = I, I = void 0) : (Y = $, $ = p, p = I, I = Y), p = Number(p) || 0;
            var L, B, V, Z, Y = this.length - p;
            switch ((!I || Y < (I = Number(I))) && (I = Y), $ = String($ || "utf8").toLowerCase()) {
              case "hex":
                L = function(G, oe, ee, te) {
                  ee = Number(ee) || 0;
                  var re = G.length - ee;
                  (!te || re < (te = Number(te))) && (te = re), T((re = oe.length) % 2 == 0, "Invalid hex string"), re / 2 < te && (te = re / 2);
                  for (var j = 0; j < te; j++) {
                    var X = parseInt(oe.substr(2 * j, 2), 16);
                    T(!isNaN(X), "Invalid hex string"), G[ee + j] = X;
                  }
                  return b._charsWritten = 2 * j, j;
                }(this, l, p, I);
                break;
              case "utf8":
              case "utf-8":
                B = this, V = p, Z = I, L = b._charsWritten = Te(fe(l), B, V, Z);
                break;
              case "ascii":
              case "binary":
                L = y(this, l, p, I);
                break;
              case "base64":
                B = this, V = p, Z = I, L = b._charsWritten = Te(J(l), B, V, Z);
                break;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                L = w(this, l, p, I);
                break;
              default:
                throw new Error("Unknown encoding");
            }
            return L;
          }, b.prototype.toString = function(l, p, I) {
            var $, L, B, V, Z = this;
            if (l = String(l || "utf8").toLowerCase(), p = Number(p) || 0, (I = I !== void 0 ? Number(I) : Z.length) === p) return "";
            switch (l) {
              case "hex":
                $ = function(Y, G, oe) {
                  var ee = Y.length;
                  (!G || G < 0) && (G = 0), (!oe || oe < 0 || ee < oe) && (oe = ee);
                  for (var te = "", re = G; re < oe; re++) te += K(Y[re]);
                  return te;
                }(Z, p, I);
                break;
              case "utf8":
              case "utf-8":
                $ = function(Y, G, oe) {
                  var ee = "", te = "";
                  oe = Math.min(Y.length, oe);
                  for (var re = G; re < oe; re++) Y[re] <= 127 ? (ee += Fe(te) + String.fromCharCode(Y[re]), te = "") : te += "%" + Y[re].toString(16);
                  return ee + Fe(te);
                }(Z, p, I);
                break;
              case "ascii":
              case "binary":
                $ = C(Z, p, I);
                break;
              case "base64":
                L = Z, V = I, $ = (B = p) === 0 && V === L.length ? v.fromByteArray(L) : v.fromByteArray(L.slice(B, V));
                break;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                $ = function(Y, G, oe) {
                  for (var ee = Y.slice(G, oe), te = "", re = 0; re < ee.length; re += 2) te += String.fromCharCode(ee[re] + 256 * ee[re + 1]);
                  return te;
                }(Z, p, I);
                break;
              default:
                throw new Error("Unknown encoding");
            }
            return $;
          }, b.prototype.toJSON = function() {
            return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
          }, b.prototype.copy = function(l, p, I, $) {
            if (p = p || 0, ($ = $ || $ === 0 ? $ : this.length) !== (I = I || 0) && l.length !== 0 && this.length !== 0) {
              T(I <= $, "sourceEnd < sourceStart"), T(0 <= p && p < l.length, "targetStart out of bounds"), T(0 <= I && I < this.length, "sourceStart out of bounds"), T(0 <= $ && $ <= this.length, "sourceEnd out of bounds"), $ > this.length && ($ = this.length);
              var L = ($ = l.length - p < $ - I ? l.length - p + I : $) - I;
              if (L < 100 || !b._useTypedArrays) for (var B = 0; B < L; B++) l[B + p] = this[B + I];
              else l._set(this.subarray(I, I + L), p);
            }
          }, b.prototype.slice = function(l, p) {
            var I = this.length;
            if (l = U(l, I, 0), p = U(p, I, I), b._useTypedArrays) return b._augment(this.subarray(l, p));
            for (var $ = p - l, L = new b($, void 0, !0), B = 0; B < $; B++) L[B] = this[B + l];
            return L;
          }, b.prototype.get = function(l) {
            return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(l);
          }, b.prototype.set = function(l, p) {
            return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(l, p);
          }, b.prototype.readUInt8 = function(l, p) {
            if (p || (T(l != null, "missing offset"), T(l < this.length, "Trying to read beyond buffer length")), !(l >= this.length)) return this[l];
          }, b.prototype.readUInt16LE = function(l, p) {
            return x(this, l, !0, p);
          }, b.prototype.readUInt16BE = function(l, p) {
            return x(this, l, !1, p);
          }, b.prototype.readUInt32LE = function(l, p) {
            return E(this, l, !0, p);
          }, b.prototype.readUInt32BE = function(l, p) {
            return E(this, l, !1, p);
          }, b.prototype.readInt8 = function(l, p) {
            if (p || (T(l != null, "missing offset"), T(l < this.length, "Trying to read beyond buffer length")), !(l >= this.length)) return 128 & this[l] ? -1 * (255 - this[l] + 1) : this[l];
          }, b.prototype.readInt16LE = function(l, p) {
            return k(this, l, !0, p);
          }, b.prototype.readInt16BE = function(l, p) {
            return k(this, l, !1, p);
          }, b.prototype.readInt32LE = function(l, p) {
            return P(this, l, !0, p);
          }, b.prototype.readInt32BE = function(l, p) {
            return P(this, l, !1, p);
          }, b.prototype.readFloatLE = function(l, p) {
            return u(this, l, !0, p);
          }, b.prototype.readFloatBE = function(l, p) {
            return u(this, l, !1, p);
          }, b.prototype.readDoubleLE = function(l, p) {
            return g(this, l, !0, p);
          }, b.prototype.readDoubleBE = function(l, p) {
            return g(this, l, !1, p);
          }, b.prototype.writeUInt8 = function(l, p, I) {
            I || (T(l != null, "missing value"), T(p != null, "missing offset"), T(p < this.length, "trying to write beyond buffer length"), He(l, 255)), p >= this.length || (this[p] = l);
          }, b.prototype.writeUInt16LE = function(l, p, I) {
            c(this, l, p, !0, I);
          }, b.prototype.writeUInt16BE = function(l, p, I) {
            c(this, l, p, !1, I);
          }, b.prototype.writeUInt32LE = function(l, p, I) {
            m(this, l, p, !0, I);
          }, b.prototype.writeUInt32BE = function(l, p, I) {
            m(this, l, p, !1, I);
          }, b.prototype.writeInt8 = function(l, p, I) {
            I || (T(l != null, "missing value"), T(p != null, "missing offset"), T(p < this.length, "Trying to write beyond buffer length"), Q(l, 127, -128)), p >= this.length || (0 <= l ? this.writeUInt8(l, p, I) : this.writeUInt8(255 + l + 1, p, I));
          }, b.prototype.writeInt16LE = function(l, p, I) {
            O(this, l, p, !0, I);
          }, b.prototype.writeInt16BE = function(l, p, I) {
            O(this, l, p, !1, I);
          }, b.prototype.writeInt32LE = function(l, p, I) {
            z(this, l, p, !0, I);
          }, b.prototype.writeInt32BE = function(l, p, I) {
            z(this, l, p, !1, I);
          }, b.prototype.writeFloatLE = function(l, p, I) {
            N(this, l, p, !0, I);
          }, b.prototype.writeFloatBE = function(l, p, I) {
            N(this, l, p, !1, I);
          }, b.prototype.writeDoubleLE = function(l, p, I) {
            W(this, l, p, !0, I);
          }, b.prototype.writeDoubleBE = function(l, p, I) {
            W(this, l, p, !1, I);
          }, b.prototype.fill = function(l, p, I) {
            if (p = p || 0, I = I || this.length, T(typeof (l = typeof (l = l || 0) == "string" ? l.charCodeAt(0) : l) == "number" && !isNaN(l), "value is not a number"), T(p <= I, "end < start"), I !== p && this.length !== 0) {
              T(0 <= p && p < this.length, "start out of bounds"), T(0 <= I && I <= this.length, "end out of bounds");
              for (var $ = p; $ < I; $++) this[$] = l;
            }
          }, b.prototype.inspect = function() {
            for (var l = [], p = this.length, I = 0; I < p; I++) if (l[I] = K(this[I]), I === i.INSPECT_MAX_BYTES) {
              l[I + 1] = "...";
              break;
            }
            return "<Buffer " + l.join(" ") + ">";
          }, b.prototype.toArrayBuffer = function() {
            if (typeof Uint8Array > "u") throw new Error("Buffer.toArrayBuffer not supported in this browser");
            if (b._useTypedArrays) return new b(this).buffer;
            for (var l = new Uint8Array(this.length), p = 0, I = l.length; p < I; p += 1) l[p] = this[p];
            return l.buffer;
          };
          var R = b.prototype;
          function U(l, p, I) {
            return typeof l != "number" ? I : p <= (l = ~~l) ? p : 0 <= l || 0 <= (l += p) ? l : 0;
          }
          function ce(l) {
            return (l = ~~Math.ceil(+l)) < 0 ? 0 : l;
          }
          function ne(l) {
            return (Array.isArray || function(p) {
              return Object.prototype.toString.call(p) === "[object Array]";
            })(l);
          }
          function K(l) {
            return l < 16 ? "0" + l.toString(16) : l.toString(16);
          }
          function fe(l) {
            for (var p = [], I = 0; I < l.length; I++) {
              var $ = l.charCodeAt(I);
              if ($ <= 127) p.push(l.charCodeAt(I));
              else for (var L = I, B = (55296 <= $ && $ <= 57343 && I++, encodeURIComponent(l.slice(L, I + 1)).substr(1).split("%")), V = 0; V < B.length; V++) p.push(parseInt(B[V], 16));
            }
            return p;
          }
          function J(l) {
            return v.toByteArray(l);
          }
          function Te(l, p, I, $) {
            for (var L = 0; L < $ && !(L + I >= p.length || L >= l.length); L++) p[L + I] = l[L];
            return L;
          }
          function Fe(l) {
            try {
              return decodeURIComponent(l);
            } catch {
              return "�";
            }
          }
          function He(l, p) {
            T(typeof l == "number", "cannot write a non-number as a number"), T(0 <= l, "specified a negative value for writing an unsigned value"), T(l <= p, "value is larger than maximum value for type"), T(Math.floor(l) === l, "value has a fractional component");
          }
          function Q(l, p, I) {
            T(typeof l == "number", "cannot write a non-number as a number"), T(l <= p, "value larger than maximum allowed value"), T(I <= l, "value smaller than minimum allowed value"), T(Math.floor(l) === l, "value has a fractional component");
          }
          function Se(l, p, I) {
            T(typeof l == "number", "cannot write a non-number as a number"), T(l <= p, "value larger than maximum allowed value"), T(I <= l, "value smaller than minimum allowed value");
          }
          function T(l, p) {
            if (!l) throw new Error(p || "Failed assertion");
          }
          b._augment = function(l) {
            return l._isBuffer = !0, l._get = l.get, l._set = l.set, l.get = R.get, l.set = R.set, l.write = R.write, l.toString = R.toString, l.toLocaleString = R.toString, l.toJSON = R.toJSON, l.copy = R.copy, l.slice = R.slice, l.readUInt8 = R.readUInt8, l.readUInt16LE = R.readUInt16LE, l.readUInt16BE = R.readUInt16BE, l.readUInt32LE = R.readUInt32LE, l.readUInt32BE = R.readUInt32BE, l.readInt8 = R.readInt8, l.readInt16LE = R.readInt16LE, l.readInt16BE = R.readInt16BE, l.readInt32LE = R.readInt32LE, l.readInt32BE = R.readInt32BE, l.readFloatLE = R.readFloatLE, l.readFloatBE = R.readFloatBE, l.readDoubleLE = R.readDoubleLE, l.readDoubleBE = R.readDoubleBE, l.writeUInt8 = R.writeUInt8, l.writeUInt16LE = R.writeUInt16LE, l.writeUInt16BE = R.writeUInt16BE, l.writeUInt32LE = R.writeUInt32LE, l.writeUInt32BE = R.writeUInt32BE, l.writeInt8 = R.writeInt8, l.writeInt16LE = R.writeInt16LE, l.writeInt16BE = R.writeInt16BE, l.writeInt32LE = R.writeInt32LE, l.writeInt32BE = R.writeInt32BE, l.writeFloatLE = R.writeFloatLE, l.writeFloatBE = R.writeFloatBE, l.writeDoubleLE = R.writeDoubleLE, l.writeDoubleBE = R.writeDoubleBE, l.fill = R.fill, l.inspect = R.inspect, l.toArrayBuffer = R.toArrayBuffer, l;
          };
        }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/buffer/index.js", "/node_modules/gulp-browserify/node_modules/buffer");
      }, { "base64-js": 2, buffer: 3, ieee754: 10, lYpoI2: 11 }], 4: [function(r, n, i) {
        (function(o, s, v, d, h, _, f, D, A) {
          var v = r("buffer").Buffer, M = 4, b = new v(M);
          b.fill(0), n.exports = { hash: function(y, w, C, x) {
            for (var E = w(function(c, m) {
              c.length % M != 0 && (O = c.length + (M - c.length % M), c = v.concat([c, b], O));
              for (var O, z = [], N = m ? c.readInt32BE : c.readInt32LE, W = 0; W < c.length; W += M) z.push(N.call(c, W));
              return z;
            }(y = v.isBuffer(y) ? y : new v(y), x), 8 * y.length), w = x, k = new v(C), P = w ? k.writeInt32BE : k.writeInt32LE, u = 0; u < E.length; u++) P.call(k, E[u], 4 * u, !0);
            return k;
          } };
        }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { buffer: 3, lYpoI2: 11 }], 5: [function(r, n, i) {
        (function(o, s, v, d, h, _, f, D, A) {
          var v = r("buffer").Buffer, M = r("./sha"), b = r("./sha256"), y = r("./rng"), w = { sha1: M, sha256: b, md5: r("./md5") }, C = 64, x = new v(C);
          function E(c, m) {
            var O = w[c = c || "sha1"], z = [];
            return O || k("algorithm:", c, "is not yet supported"), { update: function(N) {
              return v.isBuffer(N) || (N = new v(N)), z.push(N), N.length, this;
            }, digest: function(N) {
              var W = v.concat(z), W = m ? function(R, U, ce) {
                v.isBuffer(U) || (U = new v(U)), v.isBuffer(ce) || (ce = new v(ce)), U.length > C ? U = R(U) : U.length < C && (U = v.concat([U, x], C));
                for (var ne = new v(C), K = new v(C), fe = 0; fe < C; fe++) ne[fe] = 54 ^ U[fe], K[fe] = 92 ^ U[fe];
                return ce = R(v.concat([ne, ce])), R(v.concat([K, ce]));
              }(O, m, W) : O(W);
              return z = null, N ? W.toString(N) : W;
            } };
          }
          function k() {
            var c = [].slice.call(arguments).join(" ");
            throw new Error([c, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"].join(`
`));
          }
          x.fill(0), i.createHash = function(c) {
            return E(c);
          }, i.createHmac = E, i.randomBytes = function(c, m) {
            if (!m || !m.call) return new v(y(c));
            try {
              m.call(this, void 0, new v(y(c)));
            } catch (O) {
              m(O);
            }
          };
          var P, u = ["createCredentials", "createCipher", "createCipheriv", "createDecipher", "createDecipheriv", "createSign", "createVerify", "createDiffieHellman", "pbkdf2"], g = function(c) {
            i[c] = function() {
              k("sorry,", c, "is not implemented yet");
            };
          };
          for (P in u) g(u[P]);
        }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./md5": 6, "./rng": 7, "./sha": 8, "./sha256": 9, buffer: 3, lYpoI2: 11 }], 6: [function(r, n, i) {
        (function(o, s, a, d, h, _, f, D, A) {
          var v = r("./helpers");
          function M(k, P) {
            k[P >> 5] |= 128 << P % 32, k[14 + (P + 64 >>> 9 << 4)] = P;
            for (var u = 1732584193, g = -271733879, c = -1732584194, m = 271733878, O = 0; O < k.length; O += 16) {
              var z = u, N = g, W = c, R = m, u = y(u, g, c, m, k[O + 0], 7, -680876936), m = y(m, u, g, c, k[O + 1], 12, -389564586), c = y(c, m, u, g, k[O + 2], 17, 606105819), g = y(g, c, m, u, k[O + 3], 22, -1044525330);
              u = y(u, g, c, m, k[O + 4], 7, -176418897), m = y(m, u, g, c, k[O + 5], 12, 1200080426), c = y(c, m, u, g, k[O + 6], 17, -1473231341), g = y(g, c, m, u, k[O + 7], 22, -45705983), u = y(u, g, c, m, k[O + 8], 7, 1770035416), m = y(m, u, g, c, k[O + 9], 12, -1958414417), c = y(c, m, u, g, k[O + 10], 17, -42063), g = y(g, c, m, u, k[O + 11], 22, -1990404162), u = y(u, g, c, m, k[O + 12], 7, 1804603682), m = y(m, u, g, c, k[O + 13], 12, -40341101), c = y(c, m, u, g, k[O + 14], 17, -1502002290), u = w(u, g = y(g, c, m, u, k[O + 15], 22, 1236535329), c, m, k[O + 1], 5, -165796510), m = w(m, u, g, c, k[O + 6], 9, -1069501632), c = w(c, m, u, g, k[O + 11], 14, 643717713), g = w(g, c, m, u, k[O + 0], 20, -373897302), u = w(u, g, c, m, k[O + 5], 5, -701558691), m = w(m, u, g, c, k[O + 10], 9, 38016083), c = w(c, m, u, g, k[O + 15], 14, -660478335), g = w(g, c, m, u, k[O + 4], 20, -405537848), u = w(u, g, c, m, k[O + 9], 5, 568446438), m = w(m, u, g, c, k[O + 14], 9, -1019803690), c = w(c, m, u, g, k[O + 3], 14, -187363961), g = w(g, c, m, u, k[O + 8], 20, 1163531501), u = w(u, g, c, m, k[O + 13], 5, -1444681467), m = w(m, u, g, c, k[O + 2], 9, -51403784), c = w(c, m, u, g, k[O + 7], 14, 1735328473), u = C(u, g = w(g, c, m, u, k[O + 12], 20, -1926607734), c, m, k[O + 5], 4, -378558), m = C(m, u, g, c, k[O + 8], 11, -2022574463), c = C(c, m, u, g, k[O + 11], 16, 1839030562), g = C(g, c, m, u, k[O + 14], 23, -35309556), u = C(u, g, c, m, k[O + 1], 4, -1530992060), m = C(m, u, g, c, k[O + 4], 11, 1272893353), c = C(c, m, u, g, k[O + 7], 16, -155497632), g = C(g, c, m, u, k[O + 10], 23, -1094730640), u = C(u, g, c, m, k[O + 13], 4, 681279174), m = C(m, u, g, c, k[O + 0], 11, -358537222), c = C(c, m, u, g, k[O + 3], 16, -722521979), g = C(g, c, m, u, k[O + 6], 23, 76029189), u = C(u, g, c, m, k[O + 9], 4, -640364487), m = C(m, u, g, c, k[O + 12], 11, -421815835), c = C(c, m, u, g, k[O + 15], 16, 530742520), u = x(u, g = C(g, c, m, u, k[O + 2], 23, -995338651), c, m, k[O + 0], 6, -198630844), m = x(m, u, g, c, k[O + 7], 10, 1126891415), c = x(c, m, u, g, k[O + 14], 15, -1416354905), g = x(g, c, m, u, k[O + 5], 21, -57434055), u = x(u, g, c, m, k[O + 12], 6, 1700485571), m = x(m, u, g, c, k[O + 3], 10, -1894986606), c = x(c, m, u, g, k[O + 10], 15, -1051523), g = x(g, c, m, u, k[O + 1], 21, -2054922799), u = x(u, g, c, m, k[O + 8], 6, 1873313359), m = x(m, u, g, c, k[O + 15], 10, -30611744), c = x(c, m, u, g, k[O + 6], 15, -1560198380), g = x(g, c, m, u, k[O + 13], 21, 1309151649), u = x(u, g, c, m, k[O + 4], 6, -145523070), m = x(m, u, g, c, k[O + 11], 10, -1120210379), c = x(c, m, u, g, k[O + 2], 15, 718787259), g = x(g, c, m, u, k[O + 9], 21, -343485551), u = E(u, z), g = E(g, N), c = E(c, W), m = E(m, R);
            }
            return Array(u, g, c, m);
          }
          function b(k, P, u, g, c, m) {
            return E((P = E(E(P, k), E(g, m))) << c | P >>> 32 - c, u);
          }
          function y(k, P, u, g, c, m, O) {
            return b(P & u | ~P & g, k, P, c, m, O);
          }
          function w(k, P, u, g, c, m, O) {
            return b(P & g | u & ~g, k, P, c, m, O);
          }
          function C(k, P, u, g, c, m, O) {
            return b(P ^ u ^ g, k, P, c, m, O);
          }
          function x(k, P, u, g, c, m, O) {
            return b(u ^ (P | ~g), k, P, c, m, O);
          }
          function E(k, P) {
            var u = (65535 & k) + (65535 & P);
            return (k >> 16) + (P >> 16) + (u >> 16) << 16 | 65535 & u;
          }
          n.exports = function(k) {
            return v.hash(k, M, 16);
          };
        }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 7: [function(r, n, i) {
        (function(o, s, a, d, h, _, f, D, A) {
          n.exports = function(v) {
            for (var M, b = new Array(v), y = 0; y < v; y++) (3 & y) == 0 && (M = 4294967296 * Math.random()), b[y] = M >>> ((3 & y) << 3) & 255;
            return b;
          };
        }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { buffer: 3, lYpoI2: 11 }], 8: [function(r, n, i) {
        (function(o, s, a, d, h, _, f, D, A) {
          var v = r("./helpers");
          function M(w, C) {
            w[C >> 5] |= 128 << 24 - C % 32, w[15 + (C + 64 >> 9 << 4)] = C;
            for (var x, E, k, P = Array(80), u = 1732584193, g = -271733879, c = -1732584194, m = 271733878, O = -1009589776, z = 0; z < w.length; z += 16) {
              for (var N = u, W = g, R = c, U = m, ce = O, ne = 0; ne < 80; ne++) {
                P[ne] = ne < 16 ? w[z + ne] : y(P[ne - 3] ^ P[ne - 8] ^ P[ne - 14] ^ P[ne - 16], 1);
                var K = b(b(y(u, 5), (K = g, E = c, k = m, (x = ne) < 20 ? K & E | ~K & k : !(x < 40) && x < 60 ? K & E | K & k | E & k : K ^ E ^ k)), b(b(O, P[ne]), (x = ne) < 20 ? 1518500249 : x < 40 ? 1859775393 : x < 60 ? -1894007588 : -899497514)), O = m, m = c, c = y(g, 30), g = u, u = K;
              }
              u = b(u, N), g = b(g, W), c = b(c, R), m = b(m, U), O = b(O, ce);
            }
            return Array(u, g, c, m, O);
          }
          function b(w, C) {
            var x = (65535 & w) + (65535 & C);
            return (w >> 16) + (C >> 16) + (x >> 16) << 16 | 65535 & x;
          }
          function y(w, C) {
            return w << C | w >>> 32 - C;
          }
          n.exports = function(w) {
            return v.hash(w, M, 20, !0);
          };
        }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 9: [function(r, n, i) {
        (function(o, s, a, d, h, _, f, D, A) {
          function v(C, x) {
            var E = (65535 & C) + (65535 & x);
            return (C >> 16) + (x >> 16) + (E >> 16) << 16 | 65535 & E;
          }
          function M(C, x) {
            var E, k = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298), P = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225), u = new Array(64);
            C[x >> 5] |= 128 << 24 - x % 32, C[15 + (x + 64 >> 9 << 4)] = x;
            for (var g, c, m = 0; m < C.length; m += 16) {
              for (var O = P[0], z = P[1], N = P[2], W = P[3], R = P[4], U = P[5], ce = P[6], ne = P[7], K = 0; K < 64; K++) u[K] = K < 16 ? C[K + m] : v(v(v((c = u[K - 2], y(c, 17) ^ y(c, 19) ^ w(c, 10)), u[K - 7]), (c = u[K - 15], y(c, 7) ^ y(c, 18) ^ w(c, 3))), u[K - 16]), E = v(v(v(v(ne, y(c = R, 6) ^ y(c, 11) ^ y(c, 25)), R & U ^ ~R & ce), k[K]), u[K]), g = v(y(g = O, 2) ^ y(g, 13) ^ y(g, 22), O & z ^ O & N ^ z & N), ne = ce, ce = U, U = R, R = v(W, E), W = N, N = z, z = O, O = v(E, g);
              P[0] = v(O, P[0]), P[1] = v(z, P[1]), P[2] = v(N, P[2]), P[3] = v(W, P[3]), P[4] = v(R, P[4]), P[5] = v(U, P[5]), P[6] = v(ce, P[6]), P[7] = v(ne, P[7]);
            }
            return P;
          }
          var b = r("./helpers"), y = function(C, x) {
            return C >>> x | C << 32 - x;
          }, w = function(C, x) {
            return C >>> x;
          };
          n.exports = function(C) {
            return b.hash(C, M, 32, !0);
          };
        }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 10: [function(r, n, i) {
        (function(o, s, a, d, h, _, f, D, A) {
          i.read = function(v, M, b, y, m) {
            var C, x, E = 8 * m - y - 1, k = (1 << E) - 1, P = k >> 1, u = -7, g = b ? m - 1 : 0, c = b ? -1 : 1, m = v[M + g];
            for (g += c, C = m & (1 << -u) - 1, m >>= -u, u += E; 0 < u; C = 256 * C + v[M + g], g += c, u -= 8) ;
            for (x = C & (1 << -u) - 1, C >>= -u, u += y; 0 < u; x = 256 * x + v[M + g], g += c, u -= 8) ;
            if (C === 0) C = 1 - P;
            else {
              if (C === k) return x ? NaN : 1 / 0 * (m ? -1 : 1);
              x += Math.pow(2, y), C -= P;
            }
            return (m ? -1 : 1) * x * Math.pow(2, C - y);
          }, i.write = function(v, M, b, y, w, O) {
            var x, E, k = 8 * O - w - 1, P = (1 << k) - 1, u = P >> 1, g = w === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, c = y ? 0 : O - 1, m = y ? 1 : -1, O = M < 0 || M === 0 && 1 / M < 0 ? 1 : 0;
            for (M = Math.abs(M), isNaN(M) || M === 1 / 0 ? (E = isNaN(M) ? 1 : 0, x = P) : (x = Math.floor(Math.log(M) / Math.LN2), M * (y = Math.pow(2, -x)) < 1 && (x--, y *= 2), 2 <= (M += 1 <= x + u ? g / y : g * Math.pow(2, 1 - u)) * y && (x++, y /= 2), P <= x + u ? (E = 0, x = P) : 1 <= x + u ? (E = (M * y - 1) * Math.pow(2, w), x += u) : (E = M * Math.pow(2, u - 1) * Math.pow(2, w), x = 0)); 8 <= w; v[b + c] = 255 & E, c += m, E /= 256, w -= 8) ;
            for (x = x << w | E, k += w; 0 < k; v[b + c] = 255 & x, c += m, x /= 256, k -= 8) ;
            v[b + c - m] |= 128 * O;
          };
        }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/ieee754/index.js", "/node_modules/gulp-browserify/node_modules/ieee754");
      }, { buffer: 3, lYpoI2: 11 }], 11: [function(r, n, i) {
        (function(o, s, a, d, h, _, f, D, A) {
          var v, M, b;
          function y() {
          }
          (o = n.exports = {}).nextTick = (M = typeof window < "u" && window.setImmediate, b = typeof window < "u" && window.postMessage && window.addEventListener, M ? function(w) {
            return window.setImmediate(w);
          } : b ? (v = [], window.addEventListener("message", function(w) {
            var C = w.source;
            C !== window && C !== null || w.data !== "process-tick" || (w.stopPropagation(), 0 < v.length && v.shift()());
          }, !0), function(w) {
            v.push(w), window.postMessage("process-tick", "*");
          }) : function(w) {
            setTimeout(w, 0);
          }), o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.on = y, o.addListener = y, o.once = y, o.off = y, o.removeListener = y, o.removeAllListeners = y, o.emit = y, o.binding = function(w) {
            throw new Error("process.binding is not supported");
          }, o.cwd = function() {
            return "/";
          }, o.chdir = function(w) {
            throw new Error("process.chdir is not supported");
          };
        }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/process/browser.js", "/node_modules/gulp-browserify/node_modules/process");
      }, { buffer: 3, lYpoI2: 11 }] }, {}, [1])(1);
    });
  }(vn)), vn.exports;
}
ku();
var Su = ["shift", "alt", "meta", "mod", "ctrl"], Eu = {
  esc: "escape",
  return: "enter",
  ".": "period",
  ",": "comma",
  "-": "slash",
  " ": "space",
  "`": "backquote",
  "#": "backslash",
  "+": "bracketright",
  ShiftLeft: "shift",
  ShiftRight: "shift",
  AltLeft: "alt",
  AltRight: "alt",
  MetaLeft: "meta",
  MetaRight: "meta",
  OSLeft: "meta",
  OSRight: "meta",
  ControlLeft: "ctrl",
  ControlRight: "ctrl"
};
function Tr(e) {
  return (e && Eu[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "");
}
function Iu(e) {
  return Su.includes(e);
}
(function() {
  typeof document < "u" && (document.addEventListener("keydown", function(e) {
    e.key !== void 0 && Du([Tr(e.key), Tr(e.code)]);
  }), document.addEventListener("keyup", function(e) {
    e.key !== void 0 && Au([Tr(e.key), Tr(e.code)]);
  })), typeof window < "u" && window.addEventListener("blur", function() {
    _t.clear();
  });
})();
var _t = /* @__PURE__ */ new Set();
function Du(e) {
  var t = Array.isArray(e) ? e : [e];
  _t.has("meta") && _t.forEach(function(r) {
    return !Iu(r) && _t.delete(r.toLowerCase());
  }), t.forEach(function(r) {
    return _t.add(r.toLowerCase());
  });
}
function Au(e) {
  var t = Array.isArray(e) ? e : [e];
  e === "meta" ? _t.clear() : t.forEach(function(r) {
    return _t.delete(r.toLowerCase());
  });
}
var Ou = La({
  "../../node_modules/classnames/index.js"(e, t) {
    S(), function() {
      var r = {}.hasOwnProperty;
      function n() {
        for (var s = "", a = 0; a < arguments.length; a++) {
          var d = arguments[a];
          d && (s = o(s, i(d)));
        }
        return s;
      }
      function i(s) {
        if (typeof s == "string" || typeof s == "number")
          return s;
        if (typeof s != "object")
          return "";
        if (Array.isArray(s))
          return n.apply(null, s);
        if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
          return s.toString();
        var a = "";
        for (var d in s)
          r.call(s, d) && s[d] && (a = o(a, d));
        return a;
      }
      function o(s, a) {
        return a ? s ? s + " " + a : s + a : s;
      }
      typeof t < "u" && t.exports ? (n.default = n, t.exports = n) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
        return n;
      }) : window.classNames = n;
    }();
  }
});
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
var Pu = ja(Ou()), Cu = (e, t, r = { baseClass: "" }) => (n = {}) => {
  if (typeof n == "string") {
    const i = n;
    return t[`${e}-${i}`] && r.baseClass + t[`${e}-${i}`] || "";
  } else if (typeof n == "object") {
    const i = n, o = {};
    for (let a in i)
      o[t[`${e}--${a}`]] = i[a];
    const s = t[e];
    return r.baseClass + (0, Pu.default)(q({
      [s]: !!s
    }, o));
  } else
    return r.baseClass + t[e] || "";
}, Yt = Cu;
S();
var Mu = { ActionBar: "_ActionBar_rvadt_1", "ActionBar-label": "_ActionBar-label_rvadt_18", "ActionBar-action": "_ActionBar-action_rvadt_30", "ActionBar-group": "_ActionBar-group_rvadt_38" }, br = Yt("ActionBar", Mu), Ye = ({
  label: e,
  children: t
}) => /* @__PURE__ */ F.jsxs(
  "div",
  {
    className: br(),
    onClick: (r) => {
      r.stopPropagation();
    },
    children: [
      e && /* @__PURE__ */ F.jsx(Ye.Group, { children: /* @__PURE__ */ F.jsx("div", { className: br("label"), children: e }) }),
      t
    ]
  }
), $u = ({
  children: e,
  label: t,
  onClick: r
}) => /* @__PURE__ */ F.jsx(
  "button",
  {
    type: "button",
    className: br("action"),
    onClick: r,
    title: t,
    children: e
  }
), Lu = ({ children: e }) => /* @__PURE__ */ F.jsx("div", { className: br("group"), children: e }), Tu = ({ label: e }) => /* @__PURE__ */ F.jsx("div", { className: br("label"), children: e });
Ye.Action = $u;
Ye.Label = Tu;
Ye.Group = Lu;
S();
S();
S();
S();
S();
S();
S();
S();
var ju = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ya = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
S();
S();
var Ru = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, Bu = wr(
  (e, t) => {
    var r = e, {
      color: n = "currentColor",
      size: i = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: s,
      className: a = "",
      children: d,
      iconNode: h
    } = r, _ = Hn(r, [
      "color",
      "size",
      "strokeWidth",
      "absoluteStrokeWidth",
      "className",
      "children",
      "iconNode"
    ]);
    return wn(
      "svg",
      q(de(q({
        ref: t
      }, Ru), {
        width: i,
        height: i,
        stroke: n,
        strokeWidth: s ? Number(o) * 24 / Number(i) : o,
        className: ya("lucide", a)
      }), _),
      [
        ...h.map(([f, D]) => wn(f, D)),
        ...Array.isArray(d) ? d : [d]
      ]
    );
  }
), se = (e, t) => {
  const r = wr(
    (n, i) => {
      var o = n, { className: s } = o, a = Hn(o, ["className"]);
      return wn(Bu, q({
        ref: i,
        iconNode: t,
        className: ya(`lucide-${ju(e)}`, s)
      }, a));
    }
  );
  return r.displayName = `${e}`, r;
};
S();
se("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
S();
se("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
S();
se("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
S();
se("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
S();
var Nu = se("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
S();
var zu = se("CornerLeftUp", [
  ["polyline", { points: "14 9 9 4 4 9", key: "m9oyvo" }],
  ["path", { d: "M20 20h-7a4 4 0 0 1-4-4V4", key: "1blwi3" }]
]);
S();
se("EllipsisVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);
S();
se("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);
S();
se("Hash", [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
]);
S();
se("Layers", [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
]);
S();
se("LayoutGrid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
]);
S();
se("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
S();
se("List", [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
]);
S();
se("LockOpen", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
]);
S();
se("Lock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
S();
se("Monitor", [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
]);
S();
se("PanelLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
S();
se("PanelRight", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);
S();
se("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
S();
se("Redo2", [
  ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
  ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13", key: "6uklza" }]
]);
S();
se("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
S();
se("SlidersHorizontal", [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
]);
S();
se("Smartphone", [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
]);
S();
se("Tablet", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
  ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18", key: "1dp563" }]
]);
S();
var Wu = se("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]);
S();
se("Type", [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);
S();
se("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11", key: "f3b9sd" }]
]);
S();
se("ZoomIn", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
S();
se("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
S();
S();
S();
S();
S();
S();
S();
S();
S();
var Fu = { Loader: "_Loader_nacdm_13", "loader-animation": "_loader-animation_nacdm_1" }, Uu = Yt("Loader", Fu), Zu = (e) => {
  var t = e, {
    color: r,
    size: n = 16
  } = t, i = Hn(t, [
    "color",
    "size"
  ]);
  return /* @__PURE__ */ F.jsx(
    "span",
    q({
      className: Uu(),
      style: {
        width: n,
        height: n,
        color: r
      },
      "aria-label": "loading"
    }, i)
  );
};
S();
S();
var Yu = { DragIcon: "_DragIcon_17p8x_1", "DragIcon--disabled": "_DragIcon--disabled_17p8x_8" }, Vu = Yt("DragIcon", Yu), Hu = ({ isDragDisabled: e }) => /* @__PURE__ */ F.jsx("div", { className: Vu({ disabled: e }), children: /* @__PURE__ */ F.jsx("svg", { viewBox: "0 0 20 20", width: "12", fill: "currentColor", children: /* @__PURE__ */ F.jsx("path", { d: "M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z" }) }) });
S();
S();
function ma(e, t, r = {}) {
  if (!e.zone || e.zone === rt) {
    const i = t.content[e.index];
    return i != null && i.props ? de(q({}, i), { props: r[i.props.id] || i.props }) : void 0;
  }
  const n = qn(t, e.zone).zones[e.zone][e.index];
  return n != null && n.props ? de(q({}, n), { props: r[n.props.id] || n.props }) : void 0;
}
S();
var Un = [
  { width: 360, height: "auto", icon: "Smartphone", label: "Small" },
  { width: 768, height: "auto", icon: "Tablet", label: "Medium" },
  { width: 1280, height: "auto", icon: "Monitor", label: "Large" }
];
S();
S();
S();
S();
var qu = {
  data: { content: [], root: {} },
  ui: {
    leftSideBarVisible: !0,
    rightSideBarVisible: !0,
    arrayState: {},
    itemSelector: null,
    componentList: {},
    isDragging: !1,
    previewMode: "edit",
    viewports: {
      current: {
        width: Un[0].width,
        height: Un[0].height || "auto"
      },
      options: [],
      controlsVisible: !0
    },
    field: { focus: null }
  }
}, Xu = {
  state: qu,
  dispatch: () => null,
  config: { components: {} },
  componentState: {},
  setComponentState: () => {
  },
  resolveData: () => {
  },
  plugins: [],
  overrides: {},
  history: {},
  viewports: Un,
  zoomConfig: {
    autoZoom: 1,
    rootHeight: 0,
    zoom: 1
  },
  setZoomConfig: () => null,
  status: "LOADING",
  setStatus: () => null,
  iframe: {},
  globalPermissions: {},
  getPermissions: () => ({}),
  refreshPermissions: () => null
}, Gu = Et(Xu);
function Ar() {
  const e = St(Gu);
  return de(q({}, e), {
    // Helpers
    setUi: (t, r) => e.dispatch({
      type: "setUi",
      ui: t,
      recordHistory: r
    })
  });
}
S();
S();
function Ku(e) {
  return typeof window > "u" ? { ref: () => {
  } } : Nc(e);
}
function Ju(e) {
  return typeof window > "u" ? { ref: () => {
  }, status: "idle" } : yu(e);
}
S();
S();
var Mt, Co = class extends wt {
  constructor(t, r) {
    super(t), this.manager = t, this.options = r, this.listeners = new ki(), this.cleanup = /* @__PURE__ */ new Set(), this.source = void 0, Ra(this, Mt), this.handleCancel = this.handleCancel.bind(this), this.handlePointerUp = this.handlePointerUp.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this), me(() => {
      const n = this.bindGlobal(r ?? {});
      return () => {
        n();
      };
    });
  }
  bind(t, r = this.options) {
    return me(() => {
      var i;
      const o = (i = t.handle) != null ? i : t.element, s = (a) => {
        Rs(a) && this.handlePointerDown(a, t, r);
      };
      if (o)
        return ed(o.ownerDocument.defaultView), o.addEventListener("pointerdown", s), () => {
          o.removeEventListener("pointerdown", s);
        };
    });
  }
  bindGlobal(t) {
    const r = /* @__PURE__ */ new Set();
    for (const i of this.manager.registry.draggables.value)
      i.element && r.add(ze(i.element));
    for (const i of this.manager.registry.droppables.value)
      i.element && r.add(ze(i.element));
    const n = Array.from(r).map(
      (i) => this.listeners.bind(i, [
        {
          type: "pointermove",
          listener: (o) => this.handlePointerMove(o, i, t)
        },
        {
          type: "pointerup",
          listener: this.handlePointerUp,
          options: {
            capture: !0
          }
        },
        {
          // Cancel activation if there is a competing Drag and Drop interaction
          type: "dragstart",
          listener: this.handleDragStart
        }
      ])
    );
    return () => {
      n.forEach((i) => i());
    };
  }
  handlePointerDown(t, r, n = {}) {
    if (this.disabled || !t.isPrimary || t.button !== 0 || !hr(t.target) || r.disabled)
      return;
    const i = kt(r.element);
    this.initialCoordinates = {
      x: t.clientX * i.scaleX + i.x,
      y: t.clientY * i.scaleY + i.y
    }, this.source = r;
    const { activationConstraints: o } = n, s = typeof o == "function" ? o(t, r) : o;
    if (t.stopImmediatePropagation(), !(s != null && s.delay) && !(s != null && s.distance))
      this.handleStart(r, t);
    else {
      const { delay: d } = s;
      if (d) {
        const h = setTimeout(
          () => this.handleStart(r, t),
          d.value
        );
        Zi(this, Mt, () => {
          clearTimeout(h), Zi(this, Mt, void 0);
        });
      }
    }
    const a = () => {
      var d;
      (d = Ui(this, Mt)) == null || d.call(this), this.initialCoordinates = void 0, this.source = void 0;
    };
    this.cleanup.add(a);
  }
  handlePointerMove(t, r, n) {
    if (!this.source)
      return;
    const i = this.source.element && ze(this.source.element);
    if (r !== i)
      return;
    const o = {
      x: t.clientX,
      y: t.clientY
    }, s = kt(this.source.element);
    if (o.x = o.x * s.scaleX + s.x, o.y = o.y * s.scaleY + s.y, this.manager.dragOperation.status.dragging) {
      t.preventDefault(), t.stopPropagation(), this.manager.actions.move({ to: o });
      return;
    }
    if (!this.initialCoordinates)
      return;
    const a = {
      x: o.x - this.initialCoordinates.x,
      y: o.y - this.initialCoordinates.y
    }, { activationConstraints: d } = n, h = typeof d == "function" ? d(t, this.source) : d, { distance: _, delay: f } = h ?? {};
    if (_) {
      if (_.tolerance != null && Tt(a, _.tolerance))
        return this.handleCancel();
      if (Tt(a, _.value))
        return this.handleStart(this.source, t);
    }
    if (f && Tt(a, f.tolerance))
      return this.handleCancel();
  }
  handlePointerUp(t) {
    if (!this.source)
      return;
    t.preventDefault(), t.stopPropagation();
    const { status: r } = this.manager.dragOperation;
    if (!r.idle) {
      const n = !r.initialized;
      this.manager.actions.stop({ canceled: n });
    }
    this.cleanup.forEach((n) => n()), this.cleanup.clear();
  }
  handleKeyDown(t) {
    t.key === "Escape" && (t.preventDefault(), this.handleCancel());
  }
  handleStart(t, r) {
    var n;
    const { manager: i, initialCoordinates: o } = this;
    if ((n = Ui(this, Mt)) == null || n.call(this), !o || i.dragOperation.status.initialized || r.defaultPrevented)
      return;
    r.preventDefault(), pe(() => {
      i.actions.setDragSource(t.id), i.actions.start({ coordinates: o, event: r });
    });
    const s = ze(r.target), a = this.listeners.bind(s, [
      {
        // Prevent scrolling on touch devices
        type: "touchmove",
        listener: yn,
        options: {
          passive: !1
        }
      },
      {
        // Prevent click events
        type: "click",
        listener: yn
      },
      {
        type: "keydown",
        listener: this.handleKeyDown
      }
    ]);
    s.body.setPointerCapture(r.pointerId), this.cleanup.add(a);
  }
  handleDragStart(t) {
    const { target: r } = t;
    if (!hr(r))
      return;
    xt(r) && r.draggable && r.getAttribute("draggable") === "true" ? this.handleCancel() : yn(t);
  }
  handleCancel() {
    const { dragOperation: t } = this.manager;
    t.status.initialized && this.manager.actions.stop({ canceled: !0 }), this.cleanup.forEach((r) => r()), this.cleanup.clear();
  }
  destroy() {
    this.listeners.clear();
  }
};
Mt = /* @__PURE__ */ new WeakMap();
Co.configure = si(Co);
function yn(e) {
  e.preventDefault();
}
function Qu() {
}
var Mo = /* @__PURE__ */ new WeakSet();
function ed(e) {
  !e || Mo.has(e) || (e.addEventListener("touchmove", Qu, {
    capture: !1,
    passive: !1
  }), Mo.add(e));
}
S();
S();
S();
var $t = (e, t, r, n, i) => {
}, mn = "increasing", td = (e, t) => {
  var r;
  const { dragOperation: n, droppable: i } = e, { shape: o } = i, { position: s } = n, a = (r = n.shape) == null ? void 0 : r.current;
  if (!a || !o) return null;
  const d = o.center, h = Math.sqrt(
    Math.pow(d.x - t.x, 2) + Math.pow(d.y - t.y, 2)
  ), _ = Math.sqrt(
    Math.pow(d.x - s.current.x, 2) + Math.pow(d.y - s.current.y, 2)
  );
  return mn = _ === h ? mn : _ < h ? "decreasing" : "increasing", $t(
    a.center,
    d,
    i.id.toString()
  ), mn === "decreasing" ? {
    id: i.id,
    value: 1,
    type: dt.Collision
  } : null;
};
S();
var ba = (e, t) => e === "dynamic" ? Math.abs(t.y) > Math.abs(t.x) ? t.y === 0 ? null : t.y > 0 ? "down" : "up" : t.x === 0 ? null : t.x > 0 ? "right" : "left" : e === "x" ? t.x === 0 ? null : t.x > 0 ? "right" : "left" : t.y === 0 ? null : t.y > 0 ? "down" : "up";
S();
var rd = (e, t, r, n = 0) => {
  const i = e.boundingRectangle, o = t.center;
  if (r === "down") {
    const a = n * t.boundingRectangle.height;
    return i.bottom >= o.y + a;
  } else if (r === "up") {
    const a = n * t.boundingRectangle.height;
    return i.top < o.y - a;
  } else if (r === "left") {
    const a = n * t.boundingRectangle.width;
    return o.x - a >= i.left;
  }
  const s = n * t.boundingRectangle.width;
  return i.right - s >= o.x;
};
S();
var $o = 10, Ue = {
  current: { x: 0, y: 0 },
  delta: { x: 0, y: 0 },
  previous: { x: 0, y: 0 },
  direction: null
}, nd = (e, t = "dynamic") => (Ue.current = e, Ue.delta = {
  x: e.x - Ue.previous.x,
  y: e.y - Ue.previous.y
}, Ue.direction = ba(t, Ue.delta) || Ue.direction, (Math.abs(Ue.delta.x) > $o || Math.abs(Ue.delta.y) > $o) && (Ue.previous = $e.from(e)), Ue);
S();
var id = ({
  dragOperation: e,
  droppable: t
}) => {
  const r = e.position.current;
  if (!r)
    return null;
  const { id: n } = t;
  if (!t.shape)
    return null;
  if (t.shape.containsPoint(r)) {
    const i = $e.distance(t.shape.center, r);
    return {
      id: n,
      value: 1 / i,
      type: dt.PointerIntersection,
      priority: Ge.High
    };
  }
  return null;
}, od = (e) => {
  const { dragOperation: t, droppable: r } = e, { shape: n, position: i } = t;
  if (!r.shape)
    return null;
  const { left: o, top: s, right: a, bottom: d } = r.shape.boundingRectangle, f = [
    {
      x: o,
      y: s
    },
    {
      x: a,
      y: s
    },
    {
      x: o,
      y: d
    },
    {
      x: a,
      y: d
    }
  ].reduce(
    (D, A) => {
      var v;
      return D + $e.distance(
        $e.from(A),
        (v = n == null ? void 0 : n.current.center) != null ? v : i.current
      );
    },
    0
  ) / 4;
  return {
    id: r.id,
    value: 1 / f,
    type: dt.Collision,
    priority: Ge.Normal
  };
};
S();
var sd = va(() => ({
  fallbackEnabled: !1
})), bn = "", ad = (e, t = 0.05) => (r) => {
  var n, i, o, s, a;
  const { dragOperation: d, droppable: h } = r, { position: _ } = d, f = (n = d.shape) == null ? void 0 : n.current, { shape: D } = h;
  if (!f || !D)
    return null;
  const { center: A } = f, { fallbackEnabled: v } = sd.getState(), M = nd(_.current, e);
  d.data = de(q({}, d.data), {
    direction: M.direction
  });
  const b = d.data.collisionMap || {};
  d.data.collisionMap = b, b[h.id] = {
    direction: M.direction
  };
  const { center: y } = D, w = rd(
    f,
    D,
    M.direction,
    t
  );
  if (((i = d.source) == null ? void 0 : i.id) === h.id) {
    const E = td(r, M.previous);
    if ($t(A, y, h.id.toString()), E)
      return de(q({}, E), {
        priority: Ge.Highest
      });
  }
  const C = f.intersectionArea(D), x = C / D.area;
  if (C && w) {
    $t(
      A,
      y,
      h.id.toString()
    );
    const E = {
      id: h.id,
      value: x,
      priority: Ge.High,
      type: dt.Collision
    }, k = bn === h.id;
    return bn = "", de(q({}, E), { id: k ? "flush" : E.id });
  }
  if (v && ((o = d.source) == null ? void 0 : o.id) !== h.id) {
    const E = D.boundingRectangle.right > f.boundingRectangle.left && D.boundingRectangle.left < f.boundingRectangle.right, k = D.boundingRectangle.bottom > f.boundingRectangle.top && D.boundingRectangle.top < f.boundingRectangle.bottom;
    if (e === "y" && E || k) {
      const P = od(r);
      if (P) {
        const u = ba(e, {
          x: f.center.x - (((s = h.shape) == null ? void 0 : s.center.x) || 0),
          y: f.center.y - (((a = h.shape) == null ? void 0 : a.center.y) || 0)
        });
        return b[h.id] = {
          direction: u
        }, C ? ($t(
          A,
          y,
          h.id.toString()
        ), bn = h.id, de(q({}, P), {
          priority: Ge.Low
        })) : ($t(
          A,
          y,
          h.id.toString()
        ), de(q({}, P), { priority: Ge.Lowest }));
      }
    }
  }
  return $t(A, y, h.id.toString()), delete b[h.id], null;
};
S();
Et({});
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
var ld = { Drawer: "_Drawer_fkqfo_1", "Drawer-draggable": "_Drawer-draggable_fkqfo_8", "Drawer-draggableBg": "_Drawer-draggableBg_fkqfo_12", "Drawer-draggableFg": "_Drawer-draggableFg_fkqfo_21", "DrawerItem-draggable": "_DrawerItem-draggable_fkqfo_25", "DrawerItem--disabled": "_DrawerItem--disabled_fkqfo_38", DrawerItem: "_DrawerItem_fkqfo_25", "Drawer--isDraggingFrom": "_Drawer--isDraggingFrom_fkqfo_48", "DrawerItem-name": "_DrawerItem-name_fkqfo_66" };
S();
S();
S();
S();
var cd = { DraggableComponent: "_DraggableComponent_1ukn8_1", "DraggableComponent-overlay": "_DraggableComponent-overlay_1ukn8_12", "DraggableComponent-loadingOverlay": "_DraggableComponent-loadingOverlay_1ukn8_29", "DraggableComponent--hover": "_DraggableComponent--hover_1ukn8_45", "DraggableComponent--isLocked": "_DraggableComponent--isLocked_1ukn8_45", "DraggableComponent--isSelected": "_DraggableComponent--isSelected_1ukn8_54", "DraggableComponent-actionsOverlay": "_DraggableComponent-actionsOverlay_1ukn8_66", "DraggableComponent-actions": "_DraggableComponent-actions_1ukn8_66" };
S();
function Lo(e) {
  let t = {
    x: 0,
    y: 0
  }, r = e;
  for (; r && r !== document.documentElement; ) {
    const n = r.parentElement;
    n && (t.x += n.scrollLeft, t.y += n.scrollTop), r = n;
  }
  return t;
}
S();
var Or = Et(null), an = Et(
  va(() => ({
    zoneDepthIndex: {},
    nextZoneDepthIndex: {},
    areaDepthIndex: {},
    nextAreaDepthIndex: {},
    draggedItem: null,
    previewIndex: {}
  }))
), Ni = ({
  children: e,
  value: t
}) => {
  const [r, n] = ke(), [i, o] = ke(
    {}
  ), [s, a] = ke({}), { dispatch: d } = Ar(), h = he(
    (A) => {
      o((v) => de(q({}, v), { [A]: !0 }));
    },
    [o]
  ), _ = he(
    (A) => {
      d && (d({
        type: "registerZone",
        zone: A
      }), a((v) => de(q({}, v), { [A]: !0 })));
    },
    [a, d]
  ), f = he(
    (A) => {
      d && (d({
        type: "unregisterZone",
        zone: A
      }), a((v) => de(q({}, v), {
        [A]: !1
      })));
    },
    [a, d]
  ), D = _r(
    () => q({
      hoveringComponent: r,
      setHoveringComponent: n,
      registerZoneArea: h,
      areasWithZones: i,
      registerZone: _,
      unregisterZone: f,
      activeZones: s
    }, t),
    [t, r, i, s]
  );
  return /* @__PURE__ */ F.jsx(F.Fragment, { children: D && /* @__PURE__ */ F.jsx(Or.Provider, { value: D, children: e }) });
};
S();
function ln(e, t) {
  const r = St(e);
  if (!r)
    throw new Error("useContextStore must be used inside context");
  return bu(r, xu(t));
}
var Jt = Yt("DraggableComponent", cd), _a = 8, ud = _a * 6.5, dd = -44, To = _a, fd = ({
  label: e,
  children: t,
  parentAction: r
}) => /* @__PURE__ */ F.jsxs(Ye, { children: [
  /* @__PURE__ */ F.jsxs(Ye.Group, { children: [
    r,
    e && /* @__PURE__ */ F.jsx(Ye.Label, { label: e })
  ] }),
  /* @__PURE__ */ F.jsx(Ye.Group, { children: t })
] }), pd = (e, t, r) => {
  const i = (t && r.zones && t !== "default-zone" ? r.zones[t] : r.content).findIndex((o) => o.props.id === e);
  return {
    zone: t || "",
    index: i
  };
}, hd = ({
  children: e,
  depth: t,
  componentType: r,
  id: n,
  index: i,
  zoneCompound: o,
  isLoading: s = !1,
  isSelected: a = !1,
  debug: d,
  label: h,
  isEnabled: _,
  autoDragAxis: f,
  userDragAxis: D,
  inDroppableZone: A = !0
}) => {
  const {
    zoomConfig: v,
    overrides: M,
    selectedItem: b,
    getPermissions: y,
    dispatch: w,
    iframe: C,
    state: x
  } = Ar(), E = St(Or), [k, P] = ke({}), u = he(
    (j, X) => {
      var ue;
      (ue = E == null ? void 0 : E.registerLocalZone) == null || ue.call(E, j, X), P((_e) => de(q({}, _e), {
        [j]: X
      }));
    },
    [P]
  ), g = he(
    (j) => {
      var X;
      (X = E == null ? void 0 : E.unregisterLocalZone) == null || X.call(E, j), P((ue) => {
        const _e = q({}, ue);
        return delete _e[j], _e;
      });
    },
    [P]
  ), c = Object.values(k).filter(Boolean).length > 0, { path: m = [] } = E || {}, [O, z] = ke(!1);
  ye(() => {
    var j;
    const X = ma({ index: i, zone: o }, x.data);
    if (X) {
      const ue = y({
        item: X
      });
      z((j = ue.drag) != null ? j : !0);
    }
  }, [x, i, o, y]);
  const N = ln(
    an,
    (j) => !!j.draggedItem
  ), R = !_ || !(O || N), [U, ce] = ke(D || f), { ref: ne, status: K } = Ju({
    id: n,
    index: i,
    group: o,
    type: "component",
    data: {
      areaId: E == null ? void 0 : E.areaId,
      zone: o,
      index: i,
      componentType: r,
      containsActiveZone: c,
      depth: t,
      path: m,
      inDroppableZone: A
    },
    collisionPriority: _ ? t : 0,
    collisionDetector: ad(U),
    disabled: R,
    // "Out of the way" transition from react-beautiful-dnd
    transition: {
      duration: 200,
      easing: "cubic-bezier(0.2, 0, 0, 1)"
    }
  }), fe = K === "dragging", J = Nt(null), Te = he(
    (j) => {
      ne(j), j && (J.current = j);
    },
    [ne]
  ), [Fe, He] = ke();
  ye(() => {
    var j, X, ue;
    He(
      C.enabled ? (j = J.current) == null ? void 0 : j.ownerDocument.body : (ue = (X = J.current) == null ? void 0 : X.closest("[data-puck-preview]")) != null ? ue : document.body
    );
  }, [C.enabled, J.current]);
  const Q = he(() => {
    var j, X, ue;
    if (!J.current) return;
    const _e = J.current.getBoundingClientRect(), Vt = Lo(J.current), It = C.enabled ? null : (j = J.current) == null ? void 0 : j.closest("[data-puck-preview]"), ht = It == null ? void 0 : It.getBoundingClientRect(), Ht = It ? Lo(It) : { x: 0, y: 0 }, Pr = {
      x: Vt.x - Ht.x - ((X = ht == null ? void 0 : ht.left) != null ? X : 0),
      y: Vt.y - Ht.y - ((ue = ht == null ? void 0 : ht.top) != null ? ue : 0)
    };
    return {
      left: `${_e.left + Pr.x}px`,
      top: `${_e.top + Pr.y}px`,
      height: `${_e.height}px`,
      width: `${_e.width}px`
    };
  }, [J.current]), [Se, T] = ke(), l = he(() => {
    T(Q());
  }, [J.current, C]);
  ye(() => {
    if (J.current && !N) {
      const j = new ResizeObserver(l);
      return j.observe(J.current), () => {
        j.disconnect();
      };
    }
  }, [J.current, N]), ye(() => (E == null || E.registerPath(
    n,
    {
      index: i,
      zone: o
    },
    r
  ), () => {
    var j;
    (j = E == null ? void 0 : E.unregisterPath) == null || j.call(E, n);
  }), [n, o, i, r]);
  const p = _r(
    () => M.actionBar || fd,
    [M.actionBar]
  ), I = y({
    item: b
  }), $ = he(
    (j) => {
      j.stopPropagation(), w({
        type: "setUi",
        ui: {
          itemSelector: { index: i, zone: o }
        }
      });
    },
    [i, o, n]
  ), L = he(() => {
    if (!(E != null && E.areaId))
      return;
    const j = E.areaId, X = m[m.length - 3], ue = pd(
      j,
      X,
      x.data
    );
    w({
      type: "setUi",
      ui: {
        itemSelector: ue
      }
    });
  }, [E, m]), B = he(() => {
    w({
      type: "duplicate",
      sourceIndex: i,
      sourceZone: o
    });
  }, [i, o]), V = he(() => {
    w({
      type: "remove",
      index: i,
      zone: o
    });
  }, [i, o]), [Z, Y] = ke(!1), G = (E == null ? void 0 : E.hoveringComponent) === n;
  ye(() => {
    if (!J.current)
      return;
    const j = J.current, X = (_e) => {
      Y(N ? !!fe : !0), _e.stopPropagation();
    }, ue = (_e) => {
      _e.stopPropagation(), Y(!1);
    };
    return j.setAttribute("data-puck-component", n), j.setAttribute("data-puck-dnd", n), j.style.position = "relative", j.addEventListener("click", $), j.addEventListener("mouseover", X), j.addEventListener("mouseout", ue), fe ? j.setAttribute("data-puck-dragging", "") : j.removeAttribute("data-puck-dragging"), () => {
      j.removeAttribute("data-puck-component"), j.removeAttribute("data-puck-dnd"), j.removeEventListener("click", $), j.removeEventListener("mouseover", X), j.removeEventListener("mouseout", ue), j.removeAttribute("data-puck-dragging");
    };
  }, [
    J,
    $,
    c,
    o,
    n,
    N,
    fe,
    A
  ]), ye(() => {
    if (J.current && R)
      return J.current.setAttribute("data-puck-disabled", ""), () => {
        var j;
        (j = J.current) == null || j.removeAttribute("data-puck-disabled");
      };
  }, [R, J]);
  const [oe, ee] = ke(!1);
  ye(() => {
    l(), ee(!!((a || Z || G) && !N));
  }, [a, Z, G, C, x.data, N]);
  const te = he(
    (j) => {
      j && j.ownerDocument.defaultView && j.getBoundingClientRect().x < 0 && (j.style.transformOrigin = "left top", j.style.left = "0px");
    },
    [v]
  );
  ye(() => {
    if (D) {
      ce(D);
      return;
    }
    if (J.current) {
      const j = window.getComputedStyle(J.current);
      if (j.display === "inline" || j.display === "inline-block") {
        ce("x");
        return;
      }
    }
    ce(f);
  }, [J, D, f]);
  const re = (E == null ? void 0 : E.areaId) && (E == null ? void 0 : E.areaId) !== "root" && /* @__PURE__ */ F.jsx(Ye.Action, { onClick: L, label: "Select parent", children: /* @__PURE__ */ F.jsx(zu, { size: 16 }) });
  return /* @__PURE__ */ F.jsxs(
    Ni,
    {
      value: de(q({}, E), {
        areaId: n,
        zoneCompound: o,
        index: i,
        depth: t + 1,
        registerLocalZone: u,
        unregisterLocalZone: g,
        path: [...m, n]
      }),
      children: [
        oe && Ea(
          /* @__PURE__ */ F.jsxs(
            "div",
            {
              className: Jt({
                isSelected: a,
                isDragging: fe,
                hover: Z || G
              }),
              style: q({}, Se),
              "data-puck-overlay": !0,
              children: [
                d,
                s && /* @__PURE__ */ F.jsx("div", { className: Jt("loadingOverlay"), children: /* @__PURE__ */ F.jsx(Zu, {}) }),
                /* @__PURE__ */ F.jsx(
                  "div",
                  {
                    className: Jt("actionsOverlay"),
                    style: {
                      top: ud / v.zoom
                    },
                    children: /* @__PURE__ */ F.jsx(
                      "div",
                      {
                        className: Jt("actions"),
                        style: {
                          transform: `scale(${1 / v.zoom}`,
                          top: dd / v.zoom,
                          right: 0,
                          paddingLeft: To,
                          paddingRight: To
                        },
                        ref: te,
                        children: /* @__PURE__ */ F.jsxs(
                          p,
                          {
                            parentAction: re,
                            label: h,
                            children: [
                              I.duplicate && /* @__PURE__ */ F.jsx(Ye.Action, { onClick: B, label: "Duplicate", children: /* @__PURE__ */ F.jsx(Nu, { size: 16 }) }),
                              I.delete && /* @__PURE__ */ F.jsx(Ye.Action, { onClick: V, label: "Delete", children: /* @__PURE__ */ F.jsx(Wu, { size: 16 }) })
                            ]
                          }
                        )
                      }
                    )
                  }
                ),
                /* @__PURE__ */ F.jsx("div", { className: Jt("overlay") })
              ]
            }
          ),
          Fe || document.body
        ),
        e(Te)
      ]
    }
  );
};
S();
var gd = { DropZone: "_DropZone_kmkdc_1", "DropZone--isActive": "_DropZone--isActive_kmkdc_10", "DropZone--hasChildren": "_DropZone--hasChildren_kmkdc_14", "DropZone--userIsDragging": "_DropZone--userIsDragging_kmkdc_22", "DropZone--isAreaSelected": "_DropZone--isAreaSelected_kmkdc_26", "DropZone--hoveringOverArea": "_DropZone--hoveringOverArea_kmkdc_27", "DropZone--isRootZone": "_DropZone--isRootZone_kmkdc_27", "DropZone--isDestination": "_DropZone--isDestination_kmkdc_37", "DropZone-item": "_DropZone-item_kmkdc_49", "DropZone-hitbox": "_DropZone-hitbox_kmkdc_53", "DropZone--isEnabled": "_DropZone--isEnabled_kmkdc_61", "DropZone--isAnimating": "_DropZone--isAnimating_kmkdc_70" };
S();
var vd = ({
  zoneCompound: e,
  userMinEmptyHeight: t,
  ref: r
}) => {
  const [n, i] = ke(0), [o, s] = ke(!1), { draggedItem: a, isZone: d } = ln(an, (h) => {
    var _, f;
    return {
      draggedItem: ((_ = h.draggedItem) == null ? void 0 : _.data.zone) === e ? h.draggedItem : null,
      isZone: ((f = h.draggedItem) == null ? void 0 : f.data.zone) === e
    };
  });
  return ye(() => {
    if (a && r.current && d) {
      const h = r.current.getBoundingClientRect();
      i(h.height), s(!0);
      return;
    }
    i(0), setTimeout(() => {
      s(!1);
    }, 400);
  }, [r.current, a, e]), [n || t, o];
};
S();
function yd(e, t) {
  typeof e == "function" ? e(t) : e && typeof e == "object" && "current" in e && (e.current = t);
}
function md(e, t) {
  e.forEach((r) => {
    yd(r, t);
  });
}
S();
S();
function bd(e, t) {
  const r = ia();
  return he(
    (...n) => Ba(this, null, function* () {
      return yield r == null ? void 0 : r.renderer.rendering, e(...n);
    }),
    [...t, r]
  );
}
S();
var jo = (e, t, r) => {
  const n = Array.from(e);
  return n.splice(t, 0, r), n;
}, _d = (e, t) => {
  const { draggedItemId: r, preview: n, previewExists: i } = ln(
    an,
    (f) => {
      var D;
      return {
        draggedItemId: (D = f.draggedItem) == null ? void 0 : D.id,
        preview: f.previewIndex[t],
        previewExists: Object.keys(f.previewIndex || {}).length > 0
      };
    }
  ), {
    state: {
      ui: { isDragging: o }
    }
  } = Ar(), [s, a] = ke(e), [d, h] = ke(
    n
  ), _ = bd(
    (f, D, A) => {
      A && !i || (D ? D.type === "insert" ? a(
        jo(
          f.filter((v) => v.props.id !== D.props.id),
          D.index,
          {
            type: "preview",
            props: { id: D.props.id }
          }
        )
      ) : a(
        jo(
          f.filter((v) => v.props.id !== D.props.id),
          D.index,
          {
            type: D.componentType,
            props: D.props
          }
        )
      ) : a(
        i ? f.filter((v) => v.props.id !== r) : f
      ), h(D));
    },
    [r, i]
  );
  return ye(() => {
    _(e, n, o);
  }, [e, n, o]), [s, d];
};
S();
var wd = "dynamic", xd = "x", Ro = "y", kd = (e, t) => {
  const { status: r } = Ar(), [n, i] = ke(
    t || Ro
  ), o = he(() => {
    if (e.current) {
      const s = window.getComputedStyle(e.current);
      s.display === "grid" ? i(wd) : s.display === "flex" && s.flexDirection === "row" ? i(xd) : i(Ro);
    }
  }, [e.current]);
  return ye(() => {
    const s = () => {
      o();
    };
    return window.addEventListener("viewportchange", s), () => {
      window.removeEventListener("viewportchange", s);
    };
  }, []), ye(o, [r, t]), [n, o];
}, Sd = Yt("DropZone", gd), Ed = (e) => /* @__PURE__ */ F.jsx(wa, q({}, e)), wa = wr(
  function({
    zone: t,
    allow: r,
    disallow: n,
    style: i,
    className: o,
    minEmptyHeight: s = 128,
    collisionAxis: a
  }, d) {
    const h = Ar(), _ = St(Or), {
      // These all need setting via context
      data: f,
      config: D,
      areaId: A,
      registerZoneArea: v,
      depth: M,
      registerLocalZone: b,
      unregisterLocalZone: y,
      path: w = [],
      activeZones: C
    } = _;
    let x = rt;
    A && t !== rt && (x = `${A}:${t}`);
    const E = x === rt || t === rt || A === "root", {
      isDeepestZone: k,
      inNextDeepestArea: P,
      draggedComponentType: u,
      userIsDragging: g
    } = ln(an, (Q) => {
      var Se, T, l;
      return {
        isDeepestZone: (Se = Q.zoneDepthIndex[x]) != null ? Se : !1,
        inNextDeepestArea: Q.nextAreaDepthIndex[A || ""],
        draggedItemId: (T = Q.draggedItem) == null ? void 0 : T.id,
        draggedComponentType: (l = Q.draggedItem) == null ? void 0 : l.data.componentType,
        userIsDragging: !!Q.draggedItem
      };
    }), { itemSelector: c } = h.state.ui;
    ye(() => {
      A && v && v(A);
    }, [A]), ye(() => (_ != null && _.registerZone && (_ == null || _.registerZone(x)), () => {
      _ != null && _.unregisterZone && (_ == null || _.unregisterZone(x));
    }), []);
    const m = _r(() => A && t !== rt ? qn(f, x).zones[x] : f.content || [], [f, x]), O = Nt(null), z = he(
      (Q) => {
        if (!Q)
          return !0;
        if (n) {
          const Se = r || [];
          if ((n || []).filter(
            (l) => Se.indexOf(l) === -1
          ).indexOf(Q) !== -1)
            return !1;
        } else if (r && r.indexOf(Q) === -1)
          return !1;
        return !0;
      },
      [r, n]
    );
    ye(() => (b && b(x, z(u)), () => {
      y && y(x);
    }), [u, x]);
    const N = P || E;
    let W = !0;
    g && (W = k), W && (W = z(u));
    const [R, U] = _d(
      m,
      x
    ), ce = W && (U ? R.length === 1 : R.length === 0), ne = {
      id: x,
      collisionPriority: W ? M : 0,
      disabled: !ce,
      collisionDetector: id,
      type: "dropzone",
      data: {
        areaId: A,
        depth: M,
        isDroppableTarget: z(u),
        path: w
      }
    }, { ref: K } = Ku(ne), fe = c ? ma(c, f) : null, J = fe && A === fe.props.id, [Te] = kd(O, a), [Fe, He] = vd({
      zoneCompound: x,
      userMinEmptyHeight: s,
      ref: O
    });
    return /* @__PURE__ */ F.jsx(
      "div",
      {
        className: `${Sd({
          isRootZone: E,
          userIsDragging: g,
          hoveringOverArea: N,
          isEnabled: W,
          isAreaSelected: J,
          hasChildren: m.length > 0,
          isActive: C == null ? void 0 : C[x],
          isAnimating: He
        })}${o ? ` ${o}` : ""}`,
        ref: (Q) => {
          md([O, K, d], Q);
        },
        "data-testid": `dropzone:${x}`,
        "data-puck-dropzone": x,
        style: de(q({}, i), {
          "--min-empty-height": `${Fe}px`,
          backgroundColor: i == null ? void 0 : i.backgroundColor
        }),
        children: R.map((Q, Se) => {
          var T, l, p, I, $, L, B;
          const V = Q.props.id, Z = {
            renderDropZone: Ed,
            isEditing: !0,
            dragRef: null
          }, Y = de(q(q({}, (T = D.components[Q.type]) == null ? void 0 : T.defaultProps), Q.props), {
            puck: Z,
            editMode: !0
            // DEPRECATED
          }), G = (fe == null ? void 0 : fe.props.id) === V || !1;
          let oe = D.components[Q.type] && Q.type !== "preview" ? D.components[Q.type].render : () => /* @__PURE__ */ F.jsxs("div", { style: { padding: 48, textAlign: "center" }, children: [
            "No configuration for ",
            Q.type
          ] });
          const ee = D.components[Q.type];
          let te = Q.type, re = (l = ee == null ? void 0 : ee.label) != null ? l : Q.type.toString();
          if (Q.type === "preview") {
            let j = function() {
              return /* @__PURE__ */ F.jsx(Ad, { name: re, children: h.overrides.componentItem });
            };
            te = (p = U == null ? void 0 : U.componentType) != null ? p : "__preview", re = (L = ($ = (I = D.components[te]) == null ? void 0 : I.label) != null ? $ : te) != null ? L : "Preview", oe = j;
          }
          return /* @__PURE__ */ F.jsx(
            Ni,
            {
              value: de(q({}, _), { path: [...w, x] }),
              children: /* @__PURE__ */ F.jsx(
                hd,
                {
                  id: V,
                  componentType: te,
                  zoneCompound: x,
                  depth: M + 1,
                  index: Se,
                  isLoading: ((B = h.componentState[V]) == null ? void 0 : B.loadingCount) > 0,
                  isSelected: G,
                  label: re,
                  isEnabled: W,
                  autoDragAxis: Te,
                  userDragAxis: a,
                  inDroppableZone: z(u),
                  children: (j) => ee != null && ee.inline ? /* @__PURE__ */ F.jsx(
                    oe,
                    de(q({}, Y), {
                      puck: de(q({}, Y.puck), {
                        dragRef: j
                      })
                    })
                  ) : /* @__PURE__ */ F.jsx("div", { ref: j, children: /* @__PURE__ */ F.jsx(oe, q({}, Y)) })
                }
              )
            },
            V
          );
        })
      }
    );
  }
), Id = (e) => /* @__PURE__ */ F.jsx(xa, q({}, e)), xa = wr(
  function({ className: t, style: r, zone: n }, i) {
    const o = St(Or), { data: s, areaId: a = "root", config: d } = o || {};
    let h = rt, _ = (s == null ? void 0 : s.content) || [];
    return ye(() => (o != null && o.registerZone && (o == null || o.registerZone(h)), () => {
      o != null && o.unregisterZone && (o == null || o.unregisterZone(h));
    }), []), !s || !d ? null : (a && n && n !== rt && (h = `${a}:${n}`, _ = qn(s, h).zones[h]), /* @__PURE__ */ F.jsx("div", { className: t, style: r, ref: i, children: _.map((f) => {
      const D = d.components[f.type];
      return D ? /* @__PURE__ */ F.jsx(
        Ni,
        {
          value: {
            data: s,
            config: d,
            areaId: f.props.id,
            depth: 1,
            path: []
          },
          children: /* @__PURE__ */ F.jsx(
            D.render,
            de(q({}, f.props), {
              puck: {
                renderDropZone: Id
              }
            })
          )
        },
        f.props.id
      ) : null;
    }) }));
  }
), Dd = wr(
  function(t, r) {
    const n = St(Or);
    return (n == null ? void 0 : n.mode) === "edit" ? /* @__PURE__ */ F.jsx(F.Fragment, { children: /* @__PURE__ */ F.jsx(wa, de(q({}, t), { ref: r })) }) : /* @__PURE__ */ F.jsx(F.Fragment, { children: /* @__PURE__ */ F.jsx(xa, de(q({}, t), { ref: r })) });
  }
);
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
Et({
  dragListeners: {}
});
var At = Yt("DrawerItem", ld), Ad = ({
  children: e,
  name: t,
  label: r,
  dragRef: n,
  isDragDisabled: i
}) => {
  const o = _r(
    () => e || (({ children: s }) => /* @__PURE__ */ F.jsx("div", { className: At("default"), children: s })),
    [e]
  );
  return /* @__PURE__ */ F.jsx(
    "div",
    {
      className: At({ disabled: i }),
      ref: n,
      onMouseDown: (s) => s.preventDefault(),
      "data-testid": n ? `drawer-item:${t}` : "",
      "data-puck-drawer-item": !0,
      children: /* @__PURE__ */ F.jsx(o, { name: t, children: /* @__PURE__ */ F.jsx("div", { className: At("draggableWrapper"), children: /* @__PURE__ */ F.jsxs("div", { className: At("draggable"), children: [
        /* @__PURE__ */ F.jsx("div", { className: At("name"), children: r ?? t }),
        /* @__PURE__ */ F.jsx("div", { className: At("icon"), children: /* @__PURE__ */ F.jsx(Hu, {}) })
      ] }) }) })
    }
  );
};
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
Et({});
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
S();
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

lucide-react/dist/esm/shared/src/utils.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/Icon.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-down.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-right.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-up.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/circle-check-big.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/copy.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/corner-left-up.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/ellipsis-vertical.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/globe.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/hash.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/layers.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/layout-grid.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/link.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/list.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/lock-open.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/lock.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/monitor.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/panel-left.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/panel-right.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/plus.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/redo-2.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/search.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/sliders-horizontal.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/smartphone.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/tablet.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/trash.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/type.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/undo-2.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/zoom-in.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/zoom-out.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
const Od = [
  { label: "Center", value: "center" },
  { label: "Flex End", value: "flex-end" },
  { label: "Flex Start", value: "flex-start" },
  { label: "Stretch", value: "stretch" }
], Pd = [
  { label: "Center", value: "center" },
  { label: "End", value: "end" },
  { label: "Flex End", value: "flex-end" },
  { label: "Flex Start", value: "flex-start" },
  { label: "Start", value: "start" },
  { label: "Space Around", value: "space-around" },
  { label: "Space Between", value: "space-between" },
  { label: "Space Evenly", value: "space-evenly" },
  { label: "Stretch", value: "stretch" }
], Cd = [
  { label: "No Wrap", value: "nowrap" },
  { label: "Wrap", value: "wrap" },
  { label: "Wrap Reverse", value: "wrap-reverse" }
], Md = [
  { label: "Row", value: "row" },
  { label: "Row Reverse", value: "row-reverse" },
  { label: "Column", value: "column" },
  { label: "Column Reverse", value: "column-reverse" }
], Fd = {
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
          options: Md
        },
        alignItems: {
          type: "select",
          label: "Align Items",
          options: Od
        },
        justifyContent: {
          type: "select",
          label: "Justify Content",
          options: Pd
        },
        wrap: {
          type: "select",
          label: "Wrap",
          options: Cd
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
  render: ({ puck: e, options: t }) => {
    const r = t.gap ?? 0, n = t.padding ?? 0, i = t.margin ?? 0;
    return /* @__PURE__ */ F.jsx(
      Dd,
      {
        ref: e.dragRef,
        minEmptyHeight: 200,
        zone: "layout",
        style: {
          gap: `${r}px`,
          flexDirection: t.direction ?? "row",
          flexWrap: t.wrap ?? "wrap",
          justifyContent: t.justifyContent ?? "center",
          alignItems: t.alignItems ?? "center",
          "--stretch": t.justifyContent === "stretch" ? "100%" : "false",
          "--gap": `${r}px`,
          padding: `${n}px`,
          margin: `${i}px`
        }
      }
    );
  }
};
export {
  Fd as default
};
