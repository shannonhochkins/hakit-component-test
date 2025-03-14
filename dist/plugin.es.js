import Re from "react";
var j = { exports: {} }, w = {};
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
function Ce() {
  if (ce) return w;
  ce = 1;
  var i = Symbol.for("react.transitional.element"), C = Symbol.for("react.fragment");
  function x(S, s, c) {
    var b = null;
    if (c !== void 0 && (b = "" + c), s.key !== void 0 && (b = "" + s.key), "key" in s) {
      c = {};
      for (var p in s)
        p !== "key" && (c[p] = s[p]);
    } else c = s;
    return s = c.ref, {
      $$typeof: i,
      type: S,
      key: b,
      ref: s !== void 0 ? s : null,
      props: c
    };
  }
  return w.Fragment = C, w.jsx = x, w.jsxs = x, w;
}
var R = {};
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
function Se() {
  return fe || (fe = 1, process.env.NODE_ENV !== "production" && function() {
    function i(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Te ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case P:
          return "Fragment";
        case ye:
          return "Portal";
        case H:
          return "Profiler";
        case B:
          return "StrictMode";
        case W:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case X:
            return (e.displayName || "Context") + ".Provider";
          case L:
            return (e._context.displayName || "Context") + ".Consumer";
          case Y:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case $:
            return r = e.displayName || null, r !== null ? r : i(e.type) || "Memo";
          case U:
            r = e._payload, e = e._init;
            try {
              return i(e(r));
            } catch {
            }
        }
      return null;
    }
    function C(e) {
      return "" + e;
    }
    function x(e) {
      try {
        C(e);
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
        ), C(e);
      }
    }
    function S() {
    }
    function s() {
      if (T === 0) {
        K = console.log, D = console.info, ee = console.warn, re = console.error, te = console.group, oe = console.groupCollapsed, ne = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: S,
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
      T++;
    }
    function c() {
      if (T--, T === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: m({}, e, { value: K }),
          info: m({}, e, { value: D }),
          warn: m({}, e, { value: ee }),
          error: m({}, e, { value: re }),
          group: m({}, e, { value: te }),
          groupCollapsed: m({}, e, { value: oe }),
          groupEnd: m({}, e, { value: ne })
        });
      }
      0 > T && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function b(e) {
      if (q === void 0)
        try {
          throw Error();
        } catch (t) {
          var r = t.stack.trim().match(/\n( *(at )?)/);
          q = r && r[1] || "", ae = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + q + e + ae;
    }
    function p(e, r) {
      if (!e || F) return "";
      var t = G.get(e);
      if (t !== void 0) return t;
      F = !0, t = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var n = null;
      n = E.H, E.H = null, s();
      try {
        var l = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var d = function() {
                  throw Error();
                };
                if (Object.defineProperty(d.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(d, []);
                  } catch (v) {
                    var h = v;
                  }
                  Reflect.construct(e, [], d);
                } else {
                  try {
                    d.call();
                  } catch (v) {
                    h = v;
                  }
                  e.call(d.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (v) {
                  h = v;
                }
                (d = e()) && typeof d.catch == "function" && d.catch(function() {
                });
              }
            } catch (v) {
              if (v && h && typeof v.stack == "string")
                return [v.stack, h.stack];
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
        var o = l.DetermineComponentFrameRoot(), f = o[0], y = o[1];
        if (f && y) {
          var u = f.split(`
`), g = y.split(`
`);
          for (o = a = 0; a < u.length && !u[a].includes(
            "DetermineComponentFrameRoot"
          ); )
            a++;
          for (; o < g.length && !g[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          if (a === u.length || o === g.length)
            for (a = u.length - 1, o = g.length - 1; 1 <= a && 0 <= o && u[a] !== g[o]; )
              o--;
          for (; 1 <= a && 0 <= o; a--, o--)
            if (u[a] !== g[o]) {
              if (a !== 1 || o !== 1)
                do
                  if (a--, o--, 0 > o || u[a] !== g[o]) {
                    var _ = `
` + u[a].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && G.set(e, _), _;
                  }
                while (1 <= a && 0 <= o);
              break;
            }
        }
      } finally {
        F = !1, E.H = n, c(), Error.prepareStackTrace = t;
      }
      return u = (u = e ? e.displayName || e.name : "") ? b(u) : "", typeof e == "function" && G.set(e, u), u;
    }
    function A(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return p(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string") return b(e);
      switch (e) {
        case W:
          return b("Suspense");
        case M:
          return b("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Y:
            return e = p(e.render, !1), e;
          case $:
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
      var e = E.A;
      return e === null ? null : e.getOwner();
    }
    function be(e) {
      if (Q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function de(e, r) {
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
      var e = i(this.type);
      return ue[e] || (ue[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function me(e, r, t, n, l, a) {
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
    function z(e, r, t, n, l, a) {
      if (typeof e == "string" || typeof e == "function" || e === P || e === H || e === B || e === W || e === M || e === xe || typeof e == "object" && e !== null && (e.$$typeof === U || e.$$typeof === $ || e.$$typeof === X || e.$$typeof === L || e.$$typeof === Y || e.$$typeof === _e || e.getModuleId !== void 0)) {
        var o = r.children;
        if (o !== void 0)
          if (n)
            if (J(o)) {
              for (n = 0; n < o.length; n++)
                I(o[n], e);
              Object.freeze && Object.freeze(o);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else I(o, e);
      } else
        o = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : J(e) ? n = "array" : e !== void 0 && e.$$typeof === k ? (n = "<" + (i(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          n,
          o
        );
      if (Q.call(r, "key")) {
        o = i(e);
        var f = Object.keys(r).filter(function(u) {
          return u !== "key";
        });
        n = 0 < f.length ? "{key: someKey, " + f.join(": ..., ") + ": ...}" : "{key: someKey}", se[o + n] || (f = 0 < f.length ? "{" + f.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          f,
          o
        ), se[o + n] = !0);
      }
      if (o = null, t !== void 0 && (x(t), o = "" + t), be(r) && (x(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var y in r)
          y !== "key" && (t[y] = r[y]);
      } else t = r;
      return o && de(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), me(e, o, a, l, O(), t);
    }
    function I(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== we) {
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
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = ge(r), !ie[r])) {
        ie[r] = !0;
        var t = "";
        e && e._owner != null && e._owner !== O() && (t = null, typeof e._owner.tag == "number" ? t = i(e._owner.type) : typeof e._owner.name == "string" && (t = e._owner.name), t = " It was passed a child from " + t + ".");
        var n = E.getCurrentStack;
        E.getCurrentStack = function() {
          var l = A(e.type);
          return n && (l += n() || ""), l;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          t
        ), E.getCurrentStack = n;
      }
    }
    function ge(e) {
      var r = "", t = O();
      return t && (t = i(t.type)) && (r = `

Check the render method of \`` + t + "`."), r || (e = i(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var pe = Re, k = Symbol.for("react.transitional.element"), ye = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), X = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), xe = Symbol.for("react.offscreen"), Z = Symbol.iterator, Te = Symbol.for("react.client.reference"), E = pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, m = Object.assign, _e = Symbol.for("react.client.reference"), J = Array.isArray, T = 0, K, D, ee, re, te, oe, ne;
    S.__reactDisabledLog = !0;
    var q, ae, F = !1, G = new (typeof WeakMap == "function" ? WeakMap : Map)(), we = Symbol.for("react.client.reference"), le, ue = {}, se = {}, ie = {};
    R.Fragment = P, R.jsx = function(e, r, t, n, l) {
      return z(e, r, t, !1, n, l);
    }, R.jsxs = function(e, r, t, n, l) {
      return z(e, r, t, !0, n, l);
    };
  }()), R;
}
var ve;
function he() {
  return ve || (ve = 1, process.env.NODE_ENV === "production" ? j.exports = Ce() : j.exports = Se()), j.exports;
}
var je = he();
const Ae = [
  { label: "Center", value: "center" },
  { label: "Flex End", value: "flex-end" },
  { label: "Flex Start", value: "flex-start" },
  { label: "Stretch", value: "stretch" }
], Oe = [
  { label: "Center", value: "center" },
  { label: "End", value: "end" },
  { label: "Flex End", value: "flex-end" },
  { label: "Flex Start", value: "flex-start" },
  { label: "Start", value: "start" },
  { label: "Space Around", value: "space-around" },
  { label: "Space Between", value: "space-between" },
  { label: "Space Evenly", value: "space-evenly" },
  { label: "Stretch", value: "stretch" }
], Ne = [
  { label: "No Wrap", value: "nowrap" },
  { label: "Wrap", value: "wrap" },
  { label: "Wrap Reverse", value: "wrap-reverse" }
], ke = [
  { label: "Row", value: "row" },
  { label: "Row Reverse", value: "row-reverse" },
  { label: "Column", value: "column" },
  { label: "Column Reverse", value: "column-reverse" }
], Ye = {
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
          options: ke
        },
        alignItems: {
          type: "select",
          label: "Align Items",
          options: Ae
        },
        justifyContent: {
          type: "select",
          label: "Justify Content",
          options: Oe
        },
        wrap: {
          type: "select",
          label: "Wrap",
          options: Ne
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
  render: () => /* @__PURE__ */ je.jsx("div", { children: "APPLES" })
};
export {
  Ye as default
};
