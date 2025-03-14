import Re from "react";
import { DropZone as Ce } from "@measured/puck";
var S = { exports: {} }, C = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ce;
function he() {
  if (ce) return C;
  ce = 1;
  var c = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function b(x, i, f) {
    var E = null;
    if (f !== void 0 && (E = "" + f), i.key !== void 0 && (E = "" + i.key), "key" in i) {
      f = {};
      for (var w in i)
        w !== "key" && (f[w] = i[w]);
    } else f = i;
    return i = f.ref, {
      $$typeof: c,
      type: x,
      key: E,
      ref: i !== void 0 ? i : null,
      props: f
    };
  }
  return C.Fragment = s, C.jsx = b, C.jsxs = b, C;
}
var h = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fe;
function je() {
  return fe || (fe = 1, process.env.NODE_ENV !== "production" && function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === we ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case P:
          return "Fragment";
        case ye:
          return "Portal";
        case B:
          return "Profiler";
        case H:
          return "StrictMode";
        case W:
          return "Suspense";
        case $:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case L:
            return (e.displayName || "Context") + ".Provider";
          case X:
            return (e._context.displayName || "Context") + ".Consumer";
          case Y:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case M:
            return r = e.displayName || null, r !== null ? r : c(e.type) || "Memo";
          case U:
            r = e._payload, e = e._init;
            try {
              return c(e(r));
            } catch {
            }
        }
      return null;
    }
    function s(e) {
      return "" + e;
    }
    function b(e) {
      try {
        s(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), s(e);
      }
    }
    function x() {
    }
    function i() {
      if (_ === 0) {
        K = console.log, D = console.info, ee = console.warn, re = console.error, te = console.group, oe = console.groupCollapsed, ne = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: x,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      _++;
    }
    function f() {
      if (_--, _ === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: p({}, e, { value: K }),
          info: p({}, e, { value: D }),
          warn: p({}, e, { value: ee }),
          error: p({}, e, { value: re }),
          group: p({}, e, { value: te }),
          groupCollapsed: p({}, e, { value: oe }),
          groupEnd: p({}, e, { value: ne })
        });
      }
      0 > _ && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function E(e) {
      if (I === void 0)
        try {
          throw Error();
        } catch (t) {
          var r = t.stack.trim().match(/\n( *(at )?)/);
          I = r && r[1] || "", ae = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + I + e + ae;
    }
    function w(e, r) {
      if (!e || q) return "";
      var t = z.get(e);
      if (t !== void 0) return t;
      q = !0, t = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var n = null;
      n = m.H, m.H = null, i();
      try {
        var l = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var g = function() {
                  throw Error();
                };
                if (Object.defineProperty(g.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(g, []);
                  } catch (d) {
                    var j = d;
                  }
                  Reflect.construct(e, [], g);
                } else {
                  try {
                    g.call();
                  } catch (d) {
                    j = d;
                  }
                  e.call(g.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (d) {
                  j = d;
                }
                (g = e()) && typeof g.catch == "function" && g.catch(function() {
                });
              }
            } catch (d) {
              if (d && j && typeof d.stack == "string")
                return [d.stack, j.stack];
            }
            return [null, null];
          }
        };
        l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var a = Object.getOwnPropertyDescriptor(
          l.DetermineComponentFrameRoot,
          "name"
        );
        a && a.configurable && Object.defineProperty(
          l.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var o = l.DetermineComponentFrameRoot(), v = o[0], T = o[1];
        if (v && T) {
          var u = v.split(`
`), y = T.split(`
`);
          for (o = a = 0; a < u.length && !u[a].includes(
            "DetermineComponentFrameRoot"
          ); )
            a++;
          for (; o < y.length && !y[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          if (a === u.length || o === y.length)
            for (a = u.length - 1, o = y.length - 1; 1 <= a && 0 <= o && u[a] !== y[o]; )
              o--;
          for (; 1 <= a && 0 <= o; a--, o--)
            if (u[a] !== y[o]) {
              if (a !== 1 || o !== 1)
                do
                  if (a--, o--, 0 > o || u[a] !== y[o]) {
                    var R = `
` + u[a].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && z.set(e, R), R;
                  }
                while (1 <= a && 0 <= o);
              break;
            }
        }
      } finally {
        q = !1, m.H = n, f(), Error.prepareStackTrace = t;
      }
      return u = (u = e ? e.displayName || e.name : "") ? E(u) : "", typeof e == "function" && z.set(e, u), u;
    }
    function A(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return w(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string") return E(e);
      switch (e) {
        case W:
          return E("Suspense");
        case $:
          return E("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Y:
            return e = w(e.render, !1), e;
          case M:
            return A(e.type);
          case U:
            r = e._payload, e = e._init;
            try {
              return A(e(r));
            } catch {
            }
        }
      return "";
    }
    function O() {
      var e = m.A;
      return e === null ? null : e.getOwner();
    }
    function de(e) {
      if (Q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function be(e, r) {
      function t() {
        le || (le = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function Ee() {
      var e = c(this.type);
      return ue[e] || (ue[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function ge(e, r, t, n, l, a) {
      return t = a.ref, e = {
        $$typeof: k,
        type: e,
        key: r,
        props: a,
        _owner: l
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: Ee
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function F(e, r, t, n, l, a) {
      if (typeof e == "string" || typeof e == "function" || e === P || e === B || e === H || e === W || e === $ || e === xe || typeof e == "object" && e !== null && (e.$$typeof === U || e.$$typeof === M || e.$$typeof === L || e.$$typeof === X || e.$$typeof === Y || e.$$typeof === Te || e.getModuleId !== void 0)) {
        var o = r.children;
        if (o !== void 0)
          if (n)
            if (J(o)) {
              for (n = 0; n < o.length; n++)
                G(o[n], e);
              Object.freeze && Object.freeze(o);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else G(o, e);
      } else
        o = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : J(e) ? n = "array" : e !== void 0 && e.$$typeof === k ? (n = "<" + (c(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          n,
          o
        );
      if (Q.call(r, "key")) {
        o = c(e);
        var v = Object.keys(r).filter(function(u) {
          return u !== "key";
        });
        n = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", se[o + n] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          v,
          o
        ), se[o + n] = !0);
      }
      if (o = null, t !== void 0 && (b(t), o = "" + t), de(r) && (b(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var T in r)
          T !== "key" && (t[T] = r[T]);
      } else t = r;
      return o && be(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), ge(e, o, a, l, O(), t);
    }
    function G(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== _e) {
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            N(n) && V(n, r);
          }
        else if (N(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? t = null : (t = Z && e[Z] || e["@@iterator"], t = typeof t == "function" ? t : null), typeof t == "function" && t !== e.entries && (t = t.call(e), t !== e))
          for (; !(e = t.next()).done; )
            N(e.value) && V(e.value, r);
      }
    }
    function N(e) {
      return typeof e == "object" && e !== null && e.$$typeof === k;
    }
    function V(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = me(r), !ie[r])) {
        ie[r] = !0;
        var t = "";
        e && e._owner != null && e._owner !== O() && (t = null, typeof e._owner.tag == "number" ? t = c(e._owner.type) : typeof e._owner.name == "string" && (t = e._owner.name), t = " It was passed a child from " + t + ".");
        var n = m.getCurrentStack;
        m.getCurrentStack = function() {
          var l = A(e.type);
          return n && (l += n() || ""), l;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          t
        ), m.getCurrentStack = n;
      }
    }
    function me(e) {
      var r = "", t = O();
      return t && (t = c(t.type)) && (r = `

Check the render method of \`` + t + "`."), r || (e = c(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var pe = Re, k = Symbol.for("react.transitional.element"), ye = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), H = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), L = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), xe = Symbol.for("react.offscreen"), Z = Symbol.iterator, we = Symbol.for("react.client.reference"), m = pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, p = Object.assign, Te = Symbol.for("react.client.reference"), J = Array.isArray, _ = 0, K, D, ee, re, te, oe, ne;
    x.__reactDisabledLog = !0;
    var I, ae, q = !1, z = new (typeof WeakMap == "function" ? WeakMap : Map)(), _e = Symbol.for("react.client.reference"), le, ue = {}, se = {}, ie = {};
    h.Fragment = P, h.jsx = function(e, r, t, n, l) {
      return F(e, r, t, !1, n, l);
    }, h.jsxs = function(e, r, t, n, l) {
      return F(e, r, t, !0, n, l);
    };
  }()), h;
}
var ve;
function Se() {
  return ve || (ve = 1, process.env.NODE_ENV === "production" ? S.exports = he() : S.exports = je()), S.exports;
}
var Ae = Se();
const Oe = [
  { label: "Center", value: "center" },
  { label: "Flex End", value: "flex-end" },
  { label: "Flex Start", value: "flex-start" },
  { label: "Stretch", value: "stretch" }
], Ne = [
  { label: "Center", value: "center" },
  { label: "End", value: "end" },
  { label: "Flex End", value: "flex-end" },
  { label: "Flex Start", value: "flex-start" },
  { label: "Start", value: "start" },
  { label: "Space Around", value: "space-around" },
  { label: "Space Between", value: "space-between" },
  { label: "Space Evenly", value: "space-evenly" },
  { label: "Stretch", value: "stretch" }
], ke = [
  { label: "No Wrap", value: "nowrap" },
  { label: "Wrap", value: "wrap" },
  { label: "Wrap Reverse", value: "wrap-reverse" }
], Pe = [
  { label: "Row", value: "row" },
  { label: "Row Reverse", value: "row-reverse" },
  { label: "Column", value: "column" },
  { label: "Column Reverse", value: "column-reverse" }
], $e = {
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
          options: Pe
        },
        alignItems: {
          type: "select",
          label: "Align Items",
          options: Oe
        },
        justifyContent: {
          type: "select",
          label: "Justify Content",
          options: Ne
        },
        wrap: {
          type: "select",
          label: "Wrap",
          options: ke
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
  render: ({ puck: c, options: s }) => {
    const b = s.gap ?? 0, x = s.padding ?? 0, i = s.margin ?? 0;
    return /* @__PURE__ */ Ae.jsx(
      Ce,
      {
        ref: c.dragRef,
        minEmptyHeight: 200,
        zone: "layout",
        style: {
          gap: `${b}px`,
          flexDirection: s.direction ?? "row",
          flexWrap: s.wrap ?? "wrap",
          justifyContent: s.justifyContent ?? "center",
          alignItems: s.alignItems ?? "center",
          "--stretch": s.justifyContent === "stretch" ? "100%" : "false",
          "--gap": `${b}px`,
          padding: `${x}px`,
          margin: `${i}px`
        }
      }
    );
  }
};
export {
  $e as default
};
