import * as i from "react";
import { forwardRef as d, useContext as E } from "react";
import g from "./my-component-library184.js";
import { getRegisteredStyles as h, registerStyles as C, insertStyles as S } from "./my-component-library221.js";
import { serializeStyles as P } from "./my-component-library182.js";
import { useInsertionEffectAlwaysWithSyncFallback as w } from "./my-component-library222.js";
var y = !1, v = /* @__PURE__ */ i.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ g({
    key: "css"
  }) : null
);
v.Provider;
var N = function(t) {
  return /* @__PURE__ */ d(function(a, e) {
    var n = E(v);
    return t(a, n, e);
  });
}, T = /* @__PURE__ */ i.createContext({}), u = {}.hasOwnProperty, c = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", A = function(t, a) {
  var e = {};
  for (var n in a)
    u.call(a, n) && (e[n] = a[n]);
  return e[c] = t, e;
}, x = function(t) {
  var a = t.cache, e = t.serialized, n = t.isStringTag;
  return C(a, e, n), w(function() {
    return S(a, e, n);
  }), null;
}, _ = /* @__PURE__ */ N(
  /* <any, any> */
  function(r, t, a) {
    var e = r.css;
    typeof e == "string" && t.registered[e] !== void 0 && (e = t.registered[e]);
    var n = r[c], m = [e], o = "";
    typeof r.className == "string" ? o = h(t.registered, m, r.className) : r.className != null && (o = r.className + " ");
    var f = P(m, void 0, i.useContext(T));
    o += t.key + "-" + f.name;
    var l = {};
    for (var s in r)
      u.call(r, s) && s !== "css" && s !== c && !y && (l[s] = r[s]);
    return l.className = o, a && (l.ref = a), /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(x, {
      cache: t,
      serialized: f,
      isStringTag: typeof n == "string"
    }), /* @__PURE__ */ i.createElement(n, l));
  }
), D = _;
export {
  D as E,
  T,
  A as c,
  u as h,
  y as i,
  N as w
};
