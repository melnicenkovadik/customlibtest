import p from "./my-component-library194.js";
function o(r, n) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(r);
    n && (t = t.filter(function(c) {
      return Object.getOwnPropertyDescriptor(r, c).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function i(r) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? o(Object(e), !0).forEach(function(t) {
      p(r, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : o(Object(e)).forEach(function(t) {
      Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return r;
}
export {
  i as default
};
