import { motion as ut } from "framer-motion";
import * as A from "react";
import { forwardRef as _t, useContext as Ct, useRef as ee, useState as te, useCallback as ae, useEffect as lt } from "react";
import { FabCard as Ne } from "@hakit/components";
import { v4 as Et } from "uuid";
var Q = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ft(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var de = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function Ot() {
  if (Fe) return U;
  Fe = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, i, a) {
    var o = null;
    if (a !== void 0 && (o = "" + a), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      a = {};
      for (var s in i)
        s !== "key" && (a[s] = i[s]);
    } else a = i;
    return i = a.ref, {
      $$typeof: e,
      type: n,
      key: o,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  return U.Fragment = t, U.jsx = r, U.jsxs = r, U;
}
var Le;
function Pt() {
  return Le || (Le = 1, de.exports = Ot()), de.exports;
}
var z = Pt();
function Oe() {
  return Oe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Oe.apply(null, arguments);
}
function At(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function jt(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var It = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(i) {
      var a;
      n.tags.length === 0 ? n.insertionPoint ? a = n.insertionPoint.nextSibling : n.prepend ? a = n.container.firstChild : a = n.before : a = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(i, a), n.tags.push(i);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(jt(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var a = At(i);
      try {
        a.insertRule(n, a.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var i;
      return (i = n.parentNode) == null ? void 0 : i.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), P = "-ms-", oe = "-moz-", x = "-webkit-", dt = "comm", je = "rule", Ie = "decl", $t = "@import", ht = "@keyframes", qt = "@layer", Mt = Math.abs, ce = String.fromCharCode, Nt = Object.assign;
function Ft(e, t) {
  return O(e, 0) ^ 45 ? (((t << 2 ^ O(e, 0)) << 2 ^ O(e, 1)) << 2 ^ O(e, 2)) << 2 ^ O(e, 3) : 0;
}
function pt(e) {
  return e.trim();
}
function Lt(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function w(e, t, r) {
  return e.replace(t, r);
}
function Pe(e, t) {
  return e.indexOf(t);
}
function O(e, t) {
  return e.charCodeAt(t) | 0;
}
function X(e, t, r) {
  return e.slice(t, r);
}
function $(e) {
  return e.length;
}
function $e(e) {
  return e.length;
}
function K(e, t) {
  return t.push(e), e;
}
function zt(e, t) {
  return e.map(t).join("");
}
var ue = 1, G = 1, mt = 0, j = 0, C = 0, B = "";
function le(e, t, r, n, i, a, o) {
  return { value: e, root: t, parent: r, type: n, props: i, children: a, line: ue, column: G, length: o, return: "" };
}
function V(e, t) {
  return Nt(le("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Wt() {
  return C;
}
function Dt() {
  return C = j > 0 ? O(B, --j) : 0, G--, C === 10 && (G = 1, ue--), C;
}
function I() {
  return C = j < mt ? O(B, j++) : 0, G++, C === 10 && (G = 1, ue++), C;
}
function M() {
  return O(B, j);
}
function re() {
  return j;
}
function Z(e, t) {
  return X(B, e, t);
}
function Y(e) {
  switch (e) {
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
function gt(e) {
  return ue = G = 1, mt = $(B = e), j = 0, [];
}
function bt(e) {
  return B = "", e;
}
function ne(e) {
  return pt(Z(j - 1, Ae(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Gt(e) {
  for (; (C = M()) && C < 33; )
    I();
  return Y(e) > 2 || Y(C) > 3 ? "" : " ";
}
function Bt(e, t) {
  for (; --t && I() && !(C < 48 || C > 102 || C > 57 && C < 65 || C > 70 && C < 97); )
    ;
  return Z(e, re() + (t < 6 && M() == 32 && I() == 32));
}
function Ae(e) {
  for (; I(); )
    switch (C) {
      // ] ) " '
      case e:
        return j;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ae(C);
        break;
      // (
      case 40:
        e === 41 && Ae(e);
        break;
      // \
      case 92:
        I();
        break;
    }
  return j;
}
function Ht(e, t) {
  for (; I() && e + C !== 57; )
    if (e + C === 84 && M() === 47)
      break;
  return "/*" + Z(t, j - 1) + "*" + ce(e === 47 ? e : I());
}
function Ut(e) {
  for (; !Y(M()); )
    I();
  return Z(e, j);
}
function Vt(e) {
  return bt(ie("", null, null, null, [""], e = gt(e), 0, [0], e));
}
function ie(e, t, r, n, i, a, o, s, u) {
  for (var c = 0, l = 0, f = o, R = 0, T = 0, v = 0, h = 1, p = 1, g = 1, m = 0, S = "", k = i, y = a, b = n, d = S; p; )
    switch (v = m, m = I()) {
      // (
      case 40:
        if (v != 108 && O(d, f - 1) == 58) {
          Pe(d += w(ne(m), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        d += ne(m);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        d += Gt(v);
        break;
      // \
      case 92:
        d += Bt(re() - 1, 7);
        continue;
      // /
      case 47:
        switch (M()) {
          case 42:
          case 47:
            K(Xt(Ht(I(), re()), t, r), u);
            break;
          default:
            d += "/";
        }
        break;
      // {
      case 123 * h:
        s[c++] = $(d) * g;
      // } ; \0
      case 125 * h:
      case 59:
      case 0:
        switch (m) {
          // \0 }
          case 0:
          case 125:
            p = 0;
          // ;
          case 59 + l:
            g == -1 && (d = w(d, /\f/g, "")), T > 0 && $(d) - f && K(T > 32 ? We(d + ";", n, r, f - 1) : We(w(d, " ", "") + ";", n, r, f - 2), u);
            break;
          // @ ;
          case 59:
            d += ";";
          // { rule/at-rule
          default:
            if (K(b = ze(d, t, r, c, l, i, s, S, k = [], y = [], f), a), m === 123)
              if (l === 0)
                ie(d, t, b, b, k, a, f, s, y);
              else
                switch (R === 99 && O(d, 3) === 110 ? 100 : R) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ie(e, b, b, n && K(ze(e, b, b, 0, 0, i, s, S, i, k = [], f), y), i, y, f, s, n ? k : y);
                    break;
                  default:
                    ie(d, b, b, b, [""], y, 0, s, y);
                }
        }
        c = l = T = 0, h = g = 1, S = d = "", f = o;
        break;
      // :
      case 58:
        f = 1 + $(d), T = v;
      default:
        if (h < 1) {
          if (m == 123)
            --h;
          else if (m == 125 && h++ == 0 && Dt() == 125)
            continue;
        }
        switch (d += ce(m), m * h) {
          // &
          case 38:
            g = l > 0 ? 1 : (d += "\f", -1);
            break;
          // ,
          case 44:
            s[c++] = ($(d) - 1) * g, g = 1;
            break;
          // @
          case 64:
            M() === 45 && (d += ne(I())), R = M(), l = f = $(S = d += Ut(re())), m++;
            break;
          // -
          case 45:
            v === 45 && $(d) == 2 && (h = 0);
        }
    }
  return a;
}
function ze(e, t, r, n, i, a, o, s, u, c, l) {
  for (var f = i - 1, R = i === 0 ? a : [""], T = $e(R), v = 0, h = 0, p = 0; v < n; ++v)
    for (var g = 0, m = X(e, f + 1, f = Mt(h = o[v])), S = e; g < T; ++g)
      (S = pt(h > 0 ? R[g] + " " + m : w(m, /&\f/g, R[g]))) && (u[p++] = S);
  return le(e, t, r, i === 0 ? je : s, u, c, l);
}
function Xt(e, t, r) {
  return le(e, t, r, dt, ce(Wt()), X(e, 2, -2), 0);
}
function We(e, t, r, n) {
  return le(e, t, r, Ie, X(e, 0, n), X(e, n + 1, -1), n);
}
function D(e, t) {
  for (var r = "", n = $e(e), i = 0; i < n; i++)
    r += t(e[i], i, e, t) || "";
  return r;
}
function Yt(e, t, r, n) {
  switch (e.type) {
    case qt:
      if (e.children.length) break;
    case $t:
    case Ie:
      return e.return = e.return || e.value;
    case dt:
      return "";
    case ht:
      return e.return = e.value + "{" + D(e.children, n) + "}";
    case je:
      e.value = e.props.join(",");
  }
  return $(r = D(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Jt(e) {
  var t = $e(e);
  return function(r, n, i, a) {
    for (var o = "", s = 0; s < t; s++)
      o += e[s](r, n, i, a) || "";
    return o;
  };
}
function Zt(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function vt(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Qt = function(t, r, n) {
  for (var i = 0, a = 0; i = a, a = M(), i === 38 && a === 12 && (r[n] = 1), !Y(a); )
    I();
  return Z(t, j);
}, Kt = function(t, r) {
  var n = -1, i = 44;
  do
    switch (Y(i)) {
      case 0:
        i === 38 && M() === 12 && (r[n] = 1), t[n] += Qt(j - 1, r, n);
        break;
      case 2:
        t[n] += ne(i);
        break;
      case 4:
        if (i === 44) {
          t[++n] = M() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      // fallthrough
      default:
        t[n] += ce(i);
    }
  while (i = I());
  return t;
}, er = function(t, r) {
  return bt(Kt(gt(t), r));
}, De = /* @__PURE__ */ new WeakMap(), tr = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, i = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !De.get(n)) && !i) {
      De.set(t, !0);
      for (var a = [], o = er(r, a), s = n.props, u = 0, c = 0; u < o.length; u++)
        for (var l = 0; l < s.length; l++, c++)
          t.props[c] = a[u] ? o[u].replace(/&\f/g, s[l]) : s[l] + " " + o[u];
    }
  }
}, rr = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function yt(e, t) {
  switch (Ft(e, t)) {
    // color-adjust
    case 5103:
      return x + "print-" + e + e;
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
      return x + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return x + e + oe + e + P + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return x + e + P + e + e;
    // order
    case 6165:
      return x + e + P + "flex-" + e + e;
    // align-items
    case 5187:
      return x + e + w(e, /(\w+).+(:[^]+)/, x + "box-$1$2" + P + "flex-$1$2") + e;
    // align-self
    case 5443:
      return x + e + P + "flex-item-" + w(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return x + e + P + "flex-line-pack" + w(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return x + e + P + w(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return x + e + P + w(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return x + "box-" + w(e, "-grow", "") + x + e + P + w(e, "grow", "positive") + e;
    // transition
    case 4554:
      return x + w(e, /([^-])(transform)/g, "$1" + x + "$2") + e;
    // cursor
    case 6187:
      return w(w(w(e, /(zoom-|grab)/, x + "$1"), /(image-set)/, x + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return w(e, /(image-set\([^]*)/, x + "$1$`$1");
    // justify-content
    case 4968:
      return w(w(e, /(.+:)(flex-)?(.*)/, x + "box-pack:$3" + P + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + x + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return w(e, /(.+)-inline(.+)/, x + "$1$2") + e;
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
      if ($(e) - 1 - t > 6) switch (O(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (O(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return w(e, /(.+:)(.+)-([^]+)/, "$1" + x + "$2-$3$1" + oe + (O(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Pe(e, "stretch") ? yt(w(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (O(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (O(e, $(e) - 3 - (~Pe(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return w(e, ":", ":" + x) + e;
        // (inline-)?fl(e)x
        case 101:
          return w(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + x + (O(e, 14) === 45 ? "inline-" : "") + "box$3$1" + x + "$2$3$1" + P + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (O(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return x + e + P + w(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return x + e + P + w(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return x + e + P + w(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return x + e + P + e + e;
  }
  return e;
}
var nr = function(t, r, n, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Ie:
      t.return = yt(t.value, t.length);
      break;
    case ht:
      return D([V(t, {
        value: w(t.value, "@", "@" + x)
      })], i);
    case je:
      if (t.length) return zt(t.props, function(a) {
        switch (Lt(a, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return D([V(t, {
              props: [w(a, /:(read-\w+)/, ":" + oe + "$1")]
            })], i);
          // :placeholder
          case "::placeholder":
            return D([V(t, {
              props: [w(a, /:(plac\w+)/, ":" + x + "input-$1")]
            }), V(t, {
              props: [w(a, /:(plac\w+)/, ":" + oe + "$1")]
            }), V(t, {
              props: [w(a, /:(plac\w+)/, P + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, ir = [nr], ar = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(h) {
      var p = h.getAttribute("data-emotion");
      p.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || ir, a = {}, o, s = [];
  o = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(h) {
      for (var p = h.getAttribute("data-emotion").split(" "), g = 1; g < p.length; g++)
        a[p[g]] = !0;
      s.push(h);
    }
  );
  var u, c = [tr, rr];
  {
    var l, f = [Yt, Zt(function(h) {
      l.insert(h);
    })], R = Jt(c.concat(i, f)), T = function(p) {
      return D(Vt(p), R);
    };
    u = function(p, g, m, S) {
      l = m, T(p ? p + "{" + g.styles + "}" : g.styles), S && (v.inserted[g.name] = !0);
    };
  }
  var v = {
    key: r,
    sheet: new It({
      key: r,
      container: o,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: a,
    registered: {},
    insert: u
  };
  return v.sheet.hydrate(s), v;
}, or = !0;
function sr(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : i && (n += i + " ");
  }), n;
}
var xt = function(t, r, n) {
  var i = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  or === !1) && t.registered[i] === void 0 && (t.registered[i] = r.styles);
}, cr = function(t, r, n) {
  xt(t, r, n);
  var i = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var a = r;
    do
      t.insert(r === a ? "." + i : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function ur(e) {
  for (var t = 0, r, n = 0, i = e.length; i >= 4; ++n, i -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var lr = {
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
}, fr = /[A-Z]|^ms/g, dr = /_EMO_([^_]+?)_([^]*?)_EMO_/g, wt = function(t) {
  return t.charCodeAt(1) === 45;
}, Ge = function(t) {
  return t != null && typeof t != "boolean";
}, he = /* @__PURE__ */ vt(function(e) {
  return wt(e) ? e : e.replace(fr, "-$&").toLowerCase();
}), Be = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(dr, function(n, i, a) {
          return q = {
            name: i,
            styles: a,
            next: q
          }, i;
        });
  }
  return lr[t] !== 1 && !wt(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function J(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var i = r;
      if (i.anim === 1)
        return q = {
          name: i.name,
          styles: i.styles,
          next: q
        }, i.name;
      var a = r;
      if (a.styles !== void 0) {
        var o = a.next;
        if (o !== void 0)
          for (; o !== void 0; )
            q = {
              name: o.name,
              styles: o.styles,
              next: q
            }, o = o.next;
        var s = a.styles + ";";
        return s;
      }
      return hr(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var u = q, c = r(e);
        return q = u, J(e, t, c);
      }
      break;
    }
  }
  var l = r;
  if (t == null)
    return l;
  var f = t[l];
  return f !== void 0 ? f : l;
}
function hr(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++)
      n += J(e, t, r[i]) + ";";
  else
    for (var a in r) {
      var o = r[a];
      if (typeof o != "object") {
        var s = o;
        t != null && t[s] !== void 0 ? n += a + "{" + t[s] + "}" : Ge(s) && (n += he(a) + ":" + Be(a, s) + ";");
      } else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
        for (var u = 0; u < o.length; u++)
          Ge(o[u]) && (n += he(a) + ":" + Be(a, o[u]) + ";");
      else {
        var c = J(e, t, o);
        switch (a) {
          case "animation":
          case "animationName": {
            n += he(a) + ":" + c + ";";
            break;
          }
          default:
            n += a + "{" + c + "}";
        }
      }
    }
  return n;
}
var He = /label:\s*([^\s;{]+)\s*(;|$)/g, q;
function pr(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, i = "";
  q = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    n = !1, i += J(r, t, a);
  else {
    var o = a;
    i += o[0];
  }
  for (var s = 1; s < e.length; s++)
    if (i += J(r, t, e[s]), n) {
      var u = a;
      i += u[s];
    }
  He.lastIndex = 0;
  for (var c = "", l; (l = He.exec(i)) !== null; )
    c += "-" + l[1];
  var f = ur(i) + c;
  return {
    name: f,
    styles: i,
    next: q
  };
}
var mr = function(t) {
  return t();
}, gr = A.useInsertionEffect ? A.useInsertionEffect : !1, br = gr || mr, St = /* @__PURE__ */ A.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ar({
    key: "css"
  }) : null
);
St.Provider;
var vr = function(t) {
  return /* @__PURE__ */ _t(function(r, n) {
    var i = Ct(St);
    return t(r, i, n);
  });
}, yr = /* @__PURE__ */ A.createContext({}), xr = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, wr = /* @__PURE__ */ vt(
  function(e) {
    return xr.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Sr = wr, kr = function(t) {
  return t !== "theme";
}, Ue = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Sr : kr;
}, Ve = function(t, r, n) {
  var i;
  if (r) {
    var a = r.shouldForwardProp;
    i = t.__emotion_forwardProp && a ? function(o) {
      return t.__emotion_forwardProp(o) && a(o);
    } : a;
  }
  return typeof i != "function" && n && (i = t.__emotion_forwardProp), i;
}, Tr = function(t) {
  var r = t.cache, n = t.serialized, i = t.isStringTag;
  return xt(r, n, i), br(function() {
    return cr(r, n, i);
  }), null;
}, Rr = function e(t, r) {
  var n = t.__emotion_real === t, i = n && t.__emotion_base || t, a, o;
  r !== void 0 && (a = r.label, o = r.target);
  var s = Ve(t, r, n), u = s || Ue(i), c = !u("as");
  return function() {
    var l = arguments, f = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (a !== void 0 && f.push("label:" + a + ";"), l[0] == null || l[0].raw === void 0)
      f.push.apply(f, l);
    else {
      var R = l[0];
      f.push(R[0]);
      for (var T = l.length, v = 1; v < T; v++)
        f.push(l[v], R[v]);
    }
    var h = vr(function(p, g, m) {
      var S = c && p.as || i, k = "", y = [], b = p;
      if (p.theme == null) {
        b = {};
        for (var d in p)
          b[d] = p[d];
        b.theme = A.useContext(yr);
      }
      typeof p.className == "string" ? k = sr(g.registered, y, p.className) : p.className != null && (k = p.className + " ");
      var _ = pr(f.concat(y), g.registered, b);
      k += g.key + "-" + _.name, o !== void 0 && (k += " " + o);
      var F = c && s === void 0 ? Ue(S) : u, N = {};
      for (var W in p)
        c && W === "as" || F(W) && (N[W] = p[W]);
      return N.className = k, m && (N.ref = m), /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement(Tr, {
        cache: g,
        serialized: _,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ A.createElement(S, N));
    });
    return h.displayName = a !== void 0 ? a : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", h.defaultProps = t.defaultProps, h.__emotion_real = h, h.__emotion_base = i, h.__emotion_styles = f, h.__emotion_forwardProp = s, Object.defineProperty(h, "toString", {
      value: function() {
        return "." + o;
      }
    }), h.withComponent = function(p, g) {
      var m = e(p, Oe({}, r, g, {
        shouldForwardProp: Ve(h, g, !0)
      }));
      return m.apply(void 0, f);
    }, h;
  };
}, _r = [
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
], se = Rr.bind(null);
_r.forEach(function(e) {
  se[e] = se(e);
});
var pe, Xe;
function qe() {
  if (Xe) return pe;
  Xe = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return pe = e, pe;
}
var me, Ye;
function Cr() {
  if (Ye) return me;
  Ye = 1;
  var e = typeof Q == "object" && Q && Q.Object === Object && Q;
  return me = e, me;
}
var ge, Je;
function kt() {
  if (Je) return ge;
  Je = 1;
  var e = Cr(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return ge = r, ge;
}
var be, Ze;
function Er() {
  if (Ze) return be;
  Ze = 1;
  var e = kt(), t = function() {
    return e.Date.now();
  };
  return be = t, be;
}
var ve, Qe;
function Or() {
  if (Qe) return ve;
  Qe = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return ve = t, ve;
}
var ye, Ke;
function Pr() {
  if (Ke) return ye;
  Ke = 1;
  var e = Or(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return ye = r, ye;
}
var xe, et;
function Tt() {
  if (et) return xe;
  et = 1;
  var e = kt(), t = e.Symbol;
  return xe = t, xe;
}
var we, tt;
function Ar() {
  if (tt) return we;
  tt = 1;
  var e = Tt(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, i = e ? e.toStringTag : void 0;
  function a(o) {
    var s = r.call(o, i), u = o[i];
    try {
      o[i] = void 0;
      var c = !0;
    } catch {
    }
    var l = n.call(o);
    return c && (s ? o[i] = u : delete o[i]), l;
  }
  return we = a, we;
}
var Se, rt;
function jr() {
  if (rt) return Se;
  rt = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return Se = r, Se;
}
var ke, nt;
function Ir() {
  if (nt) return ke;
  nt = 1;
  var e = Tt(), t = Ar(), r = jr(), n = "[object Null]", i = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function o(s) {
    return s == null ? s === void 0 ? i : n : a && a in Object(s) ? t(s) : r(s);
  }
  return ke = o, ke;
}
var Te, it;
function $r() {
  if (it) return Te;
  it = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Te = e, Te;
}
var Re, at;
function qr() {
  if (at) return Re;
  at = 1;
  var e = Ir(), t = $r(), r = "[object Symbol]";
  function n(i) {
    return typeof i == "symbol" || t(i) && e(i) == r;
  }
  return Re = n, Re;
}
var _e, ot;
function Mr() {
  if (ot) return _e;
  ot = 1;
  var e = Pr(), t = qe(), r = qr(), n = NaN, i = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, o = /^0o[0-7]+$/i, s = parseInt;
  function u(c) {
    if (typeof c == "number")
      return c;
    if (r(c))
      return n;
    if (t(c)) {
      var l = typeof c.valueOf == "function" ? c.valueOf() : c;
      c = t(l) ? l + "" : l;
    }
    if (typeof c != "string")
      return c === 0 ? c : +c;
    c = e(c);
    var f = a.test(c);
    return f || o.test(c) ? s(c.slice(2), f ? 2 : 8) : i.test(c) ? n : +c;
  }
  return _e = u, _e;
}
var Ce, st;
function Rt() {
  if (st) return Ce;
  st = 1;
  var e = qe(), t = Er(), r = Mr(), n = "Expected a function", i = Math.max, a = Math.min;
  function o(s, u, c) {
    var l, f, R, T, v, h, p = 0, g = !1, m = !1, S = !0;
    if (typeof s != "function")
      throw new TypeError(n);
    u = r(u) || 0, e(c) && (g = !!c.leading, m = "maxWait" in c, R = m ? i(r(c.maxWait) || 0, u) : R, S = "trailing" in c ? !!c.trailing : S);
    function k(E) {
      var L = l, H = f;
      return l = f = void 0, p = E, T = s.apply(H, L), T;
    }
    function y(E) {
      return p = E, v = setTimeout(_, u), g ? k(E) : T;
    }
    function b(E) {
      var L = E - h, H = E - p, Me = u - L;
      return m ? a(Me, R - H) : Me;
    }
    function d(E) {
      var L = E - h, H = E - p;
      return h === void 0 || L >= u || L < 0 || m && H >= R;
    }
    function _() {
      var E = t();
      if (d(E))
        return F(E);
      v = setTimeout(_, b(E));
    }
    function F(E) {
      return v = void 0, S && l ? k(E) : (l = f = void 0, T);
    }
    function N() {
      v !== void 0 && clearTimeout(v), p = 0, l = h = f = v = void 0;
    }
    function W() {
      return v === void 0 ? T : F(t());
    }
    function fe() {
      var E = t(), L = d(E);
      if (l = arguments, f = this, h = E, L) {
        if (v === void 0)
          return y(h);
        if (m)
          return clearTimeout(v), v = setTimeout(_, u), k(h);
      }
      return v === void 0 && (v = setTimeout(_, u)), T;
    }
    return fe.cancel = N, fe.flush = W, fe;
  }
  return Ce = o, Ce;
}
var Nr = Rt();
const Fr = /* @__PURE__ */ ft(Nr);
var Ee, ct;
function Lr() {
  if (ct) return Ee;
  ct = 1;
  var e = Rt(), t = qe(), r = "Expected a function";
  function n(i, a, o) {
    var s = !0, u = !0;
    if (typeof i != "function")
      throw new TypeError(r);
    return t(o) && (s = "leading" in o ? !!o.leading : s, u = "trailing" in o ? !!o.trailing : u), e(i, a, {
      leading: s,
      maxWait: a,
      trailing: u
    });
  }
  return Ee = n, Ee;
}
var zr = Lr();
const Wr = /* @__PURE__ */ ft(zr), Dr = (e, t, r, n) => {
  switch (t) {
    case "debounce":
      return Fr(e, r, n);
    case "throttle":
      return Wr(e, r, n);
    default:
      return e;
  }
}, Gr = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e) => {
    const t = A.useRef(e);
    return A.useEffect(() => {
      t.current = e;
    }), A.useMemo(() => (...r) => {
      var n;
      return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...r);
    }, []);
  }
), Br = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e) => {
    const [t, r] = A.useState((e == null ? void 0 : e.current) || null);
    return e && setTimeout(() => {
      e.current !== t && r(e.current);
    }, 0), { refProxy: A.useMemo(() => new Proxy((i) => {
      i !== t && r(i);
    }, {
      get(i, a) {
        return a === "current" ? t : i[a];
      },
      set(i, a, o) {
        return a === "current" ? r(o) : i[a] = o, !0;
      }
    }), [t]), refElement: t, setRefElement: r };
  }
), Hr = (e, t) => t === "border-box" ? {
  width: e.borderBoxSize[0].inlineSize,
  height: e.borderBoxSize[0].blockSize
} : t === "content-box" ? {
  width: e.contentBoxSize[0].inlineSize,
  height: e.contentBoxSize[0].blockSize
} : {
  width: e.contentRect.width,
  height: e.contentRect.height
};
function Ur({ skipOnMount: e = !1, refreshMode: t, refreshRate: r = 1e3, refreshOptions: n, handleWidth: i = !0, handleHeight: a = !0, targetRef: o, observerOptions: s, onResize: u } = {}) {
  const c = ee(e), l = Gr(u), [f, R] = te({
    width: void 0,
    height: void 0
  }), { refProxy: T, refElement: v } = Br(o), { box: h } = s || {}, p = ae((m) => {
    if (!i && !a)
      return;
    if (c.current) {
      c.current = !1;
      return;
    }
    const S = (k, y) => i && k.width !== y.width || a && k.height !== y.height;
    m.forEach((k) => {
      const y = Hr(k, h);
      R((b) => S(b, y) ? (l == null || l({
        width: y.width,
        height: y.height,
        entry: k
      }), y) : b);
    });
  }, [i, a, c, h]), g = ae(Dr(p, t, r, n), [
    p,
    t,
    r,
    n
  ]);
  return lt(() => {
    let m;
    return v ? (m = new window.ResizeObserver(g), m.observe(v, s)) : (f.width || f.height) && (l == null || l({
      width: null,
      height: null,
      entry: null
    }), R({ width: void 0, height: void 0 })), () => {
      var S, k, y;
      (S = m == null ? void 0 : m.disconnect) === null || S === void 0 || S.call(m), (y = (k = g).cancel) === null || y === void 0 || y.call(k);
    };
  }, [g, v]), Object.assign({ ref: T }, f);
}
const Vr = se(ut.div)`
  height: 100%;
  max-height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
function Xr({ index: e, onSizeChange: t, ...r }) {
  const { ref: n } = Ur({
    handleHeight: !1,
    refreshMode: "debounce",
    refreshRate: 1e3,
    onResize({ width: i, height: a }) {
      t(e, i, a);
    }
  });
  return /* @__PURE__ */ z.jsx(Vr, { ref: n, ...r });
}
const Yr = se(ut.div)`
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
`, Jr = {
  enter: ({ direction: e }) => ({
    scale: 0.2,
    // Or any initial scale based on index
    x: e < 1 ? 50 : -50,
    opacity: 0
  }),
  center: ({ activeIndex: e, inactiveBlur: t, currentIndex: r, direction: n, x: i, inactiveScaleMultiplier: a }) => {
    let o = 1, s = 1, u = "0px";
    if (r > e && (s = 0.9), r < e) {
      u = `${t}px`, s = 0.9;
      const c = a * (e - r);
      o = Math.max(0, 1 - c);
    }
    return {
      scale: o,
      filter: `blur(${u})`,
      x: i,
      zIndex: Zr({ activeIndex: e, currentIndex: r, direction: n }),
      opacity: o === 0 ? 0 : s
    };
  },
  // ... center variant as previously defined ...
  exit: ({ direction: e }) => ({
    scale: 0.2,
    // Or any exit scale based on index
    x: e < 1 ? -50 : 50,
    opacity: 0
  })
};
function Zr({ activeIndex: e, currentIndex: t, direction: r }) {
  if (!(r < 0))
    return t === e ? 3 : 2;
}
const Qr = 100, Kr = ({
  slides: e,
  options: t,
  ref: r
}) => {
  const {
    spacing: n = 20,
    inactiveOffset: i = 150,
    inactiveScaleMultiplier: a = 0.1,
    inactiveBlur: o = 15
  } = t, s = ee(0), [[u, c], l] = te([0, 0]), [f, R] = te([]), T = ee(null), [v, h] = te(0), p = (u % e.length + e.length) % e.length, g = ee(!1), m = ae(
    (y) => {
      l((b) => {
        const d = b[0] + y;
        return d < 0 || d >= e.length ? b : [d, y];
      });
    },
    [e]
  ), S = ae(
    (y, { offset: b }) => {
      if (g.current) return;
      const d = Qr / 2, _ = u === e.length - 1, F = u === 0;
      b.x < -50 && !_ ? s.current = 1 : b.x > d && !F ? s.current = -1 : s.current = 0;
    },
    [e, u]
  );
  lt(() => {
    if (T.current && f.length > 0) {
      const y = T.current.clientWidth, b = f[u], d = y / 2 - b / 2;
      h(d);
    }
  }, [f, u]);
  const k = (y, b) => {
    let d = 0;
    if (b < y) {
      for (let _ = 0; _ < b; _++)
        d -= f[_] + n;
      i === !1 ? d -= f[b] * (y - b) : d -= i * (y - b);
    } else
      for (let _ = 0; _ < y; _++)
        d -= f[_] + n;
    return d;
  };
  return /* @__PURE__ */ z.jsxs(
    Yr,
    {
      ref: r,
      dragElastic: 0,
      dragMomentum: !1,
      drag: e.length > 1 ? "x" : !1,
      onDrag: S,
      onDragStart: () => g.current = !1,
      onDragEnd: () => {
        g.current = !0, s.current !== 0 && m(s.current);
      },
      dragConstraints: { left: 0, right: 0, top: 0, bottom: 0 },
      children: [
        /* @__PURE__ */ z.jsx(
          "div",
          {
            className: "wrapper",
            ref: T,
            style: {
              gap: `${n}px`
            },
            children: e.map((y, b) => /* @__PURE__ */ z.jsx(
              Xr,
              {
                className: "card",
                onSizeChange: (d, _) => {
                  f[d] !== _ && R((F) => {
                    const N = [...F];
                    return _ && (N[d] = _), N;
                  });
                },
                index: b,
                layout: !0,
                custom: {
                  activeIndex: p,
                  currentIndex: b,
                  direction: c,
                  inactiveBlur: o,
                  inactiveScaleMultiplier: a,
                  x: k(u, b) + v
                },
                variants: Jr,
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
              b
            ))
          }
        ),
        /* @__PURE__ */ z.jsxs("div", { className: "buttons", children: [
          /* @__PURE__ */ z.jsx(
            Ne,
            {
              disabled: u === 0,
              whileTap: { scale: 0.8 },
              onClick: () => m(-1),
              icon: "mdi:chevron-left",
              cssStyles: `
            background: rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            backdrop-filter: blur(5px);
            border: 2px solid rgba(255, 255, 255, 0.1);
          `
            }
          ),
          /* @__PURE__ */ z.jsx(
            Ne,
            {
              disabled: u === e.length - 1,
              icon: "mdi:chevron-right",
              cssStyles: `
            background: rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            backdrop-filter: blur(5px);
            border: 2px solid rgba(255, 255, 255, 0.1);
          `,
              whileTap: { scale: 0.8 },
              onClick: () => m(1)
            }
          )
        ] })
      ]
    }
  );
}, an = {
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
      getItemSummary: (e, t) => e.label || `Viewport #${t}`,
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
  resolveData: ({ props: e }) => {
    let t = null;
    const r = [...e.slides ?? []].map((n) => ({ ...n }));
    for (const n of r) {
      if (!n.id || n.id === t) {
        const i = Et();
        n.id = i;
      }
      t = n.id;
    }
    return e.slides = r, {
      props: e
    };
  },
  inline: !0,
  permissions: {
    drag: !1,
    delete: !1,
    duplicate: !1,
    insert: !1
  },
  render({ puck: e, options: t, slides: r = [] }) {
    const n = r.filter((i) => i.id && i.id.length > 0);
    return /* @__PURE__ */ z.jsx(Kr, { options: t, slides: n, ref: e.dragRef });
  }
};
export {
  an as default
};
