import { StyleSheet as K } from "./my-component-library185.js";
import { serialize as m, stringify as z } from "./my-component-library186.js";
import { compile as B } from "./my-component-library187.js";
import { middleware as D, rulesheet as F } from "./my-component-library188.js";
import { dealloc as H, alloc as N, copy as g, next as C, token as S, peek as A, delimit as U, slice as Y, position as T } from "./my-component-library189.js";
import { RULESET as Z, KEYFRAMES as _, WEBKIT as e, DECLARATION as G, MS as o, MOZ as k } from "./my-component-library190.js";
import { combine as J, replace as c, from as Q, hash as V, charat as y, strlen as E, indexof as R, match as X } from "./my-component-library191.js";
var j = function(t, a, s) {
  for (var i = 0, n = 0; i = n, n = A(), i === 38 && n === 12 && (a[s] = 1), !S(n); )
    C();
  return Y(t, T);
}, l = function(t, a) {
  var s = -1, i = 44;
  do
    switch (S(i)) {
      case 0:
        i === 38 && A() === 12 && (a[s] = 1), t[s] += j(T - 1, a, s);
        break;
      case 2:
        t[s] += U(i);
        break;
      case 4:
        if (i === 44) {
          t[++s] = A() === 58 ? "&\f" : "", a[s] = t[s].length;
          break;
        }
      default:
        t[s] += Q(i);
    }
  while (i = C());
  return t;
}, v = function(t, a) {
  return H(l(N(t), a));
}, P = /* @__PURE__ */ new WeakMap(), rr = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var a = t.value, s = t.parent, i = t.column === s.column && t.line === s.line; s.type !== "rule"; )
      if (s = s.parent, !s) return;
    if (!(t.props.length === 1 && a.charCodeAt(0) !== 58 && !P.get(s)) && !i) {
      P.set(t, !0);
      for (var n = [], b = v(a, n), w = s.props, h = 0, x = 0; h < b.length; h++)
        for (var d = 0; d < w.length; d++, x++)
          t.props[x] = n[h] ? b[h].replace(/&\f/g, w[d]) : w[d] + " " + b[h];
    }
  }
}, tr = function(t) {
  if (t.type === "decl") {
    var a = t.value;
    // charcode for l
    a.charCodeAt(0) === 108 && // charcode for b
    a.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function L(r, t) {
  switch (V(r, t)) {
    case 5103:
      return e + "print-" + r + r;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return e + r + r;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return e + r + k + r + o + r + r;
    case 6828:
    case 4268:
      return e + r + o + r + r;
    case 6165:
      return e + r + o + "flex-" + r + r;
    case 5187:
      return e + r + c(r, /(\w+).+(:[^]+)/, e + "box-$1$2" + o + "flex-$1$2") + r;
    case 5443:
      return e + r + o + "flex-item-" + c(r, /flex-|-self/, "") + r;
    case 4675:
      return e + r + o + "flex-line-pack" + c(r, /align-content|flex-|-self/, "") + r;
    case 5548:
      return e + r + o + c(r, "shrink", "negative") + r;
    case 5292:
      return e + r + o + c(r, "basis", "preferred-size") + r;
    case 6060:
      return e + "box-" + c(r, "-grow", "") + e + r + o + c(r, "grow", "positive") + r;
    case 4554:
      return e + c(r, /([^-])(transform)/g, "$1" + e + "$2") + r;
    case 6187:
      return c(c(c(r, /(zoom-|grab)/, e + "$1"), /(image-set)/, e + "$1"), r, "") + r;
    case 5495:
    case 3959:
      return c(r, /(image-set\([^]*)/, e + "$1$`$1");
    case 4968:
      return c(c(r, /(.+:)(flex-)?(.*)/, e + "box-pack:$3" + o + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + e + r + r;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return c(r, /(.+)-inline(.+)/, e + "$1$2") + r;
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
      if (E(r) - 1 - t > 6) switch (y(r, t + 1)) {
        case 109:
          if (y(r, t + 4) !== 45) break;
        case 102:
          return c(r, /(.+:)(.+)-([^]+)/, "$1" + e + "$2-$3$1" + k + (y(r, t + 3) == 108 ? "$3" : "$2-$3")) + r;
        case 115:
          return ~R(r, "stretch") ? L(c(r, "stretch", "fill-available"), t) + r : r;
      }
      break;
    case 4949:
      if (y(r, t + 1) !== 115) break;
    case 6444:
      switch (y(r, E(r) - 3 - (~R(r, "!important") && 10))) {
        case 107:
          return c(r, ":", ":" + e) + r;
        case 101:
          return c(r, /(.+:)([^;!]+)(;|!.+)?/, "$1" + e + (y(r, 14) === 45 ? "inline-" : "") + "box$3$1" + e + "$2$3$1" + o + "$2box$3") + r;
      }
      break;
    case 5936:
      switch (y(r, t + 11)) {
        case 114:
          return e + r + o + c(r, /[svh]\w+-[tblr]{2}/, "tb") + r;
        case 108:
          return e + r + o + c(r, /[svh]\w+-[tblr]{2}/, "tb-rl") + r;
        case 45:
          return e + r + o + c(r, /[svh]\w+-[tblr]{2}/, "lr") + r;
      }
      return e + r + o + r + r;
  }
  return r;
}
var er = function(t, a, s, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case G:
      t.return = L(t.value, t.length);
      break;
    case _:
      return m([g(t, {
        value: c(t.value, "@", "@" + e)
      })], i);
    case Z:
      if (t.length) return J(t.props, function(n) {
        switch (X(n, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return m([g(t, {
              props: [c(n, /:(read-\w+)/, ":" + k + "$1")]
            })], i);
          case "::placeholder":
            return m([g(t, {
              props: [c(n, /:(plac\w+)/, ":" + e + "input-$1")]
            }), g(t, {
              props: [c(n, /:(plac\w+)/, ":" + k + "$1")]
            }), g(t, {
              props: [c(n, /:(plac\w+)/, o + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, cr = [er], hr = function(t) {
  var a = t.key;
  if (a === "css") {
    var s = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(s, function(f) {
      var p = f.getAttribute("data-emotion");
      p.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || cr, n = {}, b, w = [];
  b = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + a + ' "]'),
    function(f) {
      for (var p = f.getAttribute("data-emotion").split(" "), $ = 1; $ < p.length; $++)
        n[p[$]] = !0;
      w.push(f);
    }
  );
  var h, x = [rr, tr];
  {
    var d, M = [z, F(function(f) {
      d.insert(f);
    })], W = D(x.concat(i, M)), I = function(p) {
      return m(B(p), W);
    };
    h = function(p, $, O, q) {
      d = O, I(p ? p + "{" + $.styles + "}" : $.styles), q && (u.inserted[$.name] = !0);
    };
  }
  var u = {
    key: a,
    sheet: new K({
      key: a,
      container: b,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: n,
    registered: {},
    insert: h
  };
  return u.sheet.hydrate(w), u;
};
export {
  hr as default
};
