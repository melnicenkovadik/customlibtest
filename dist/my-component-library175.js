import i from "./my-component-library201.js";
function a(r, n) {
  for (var t = 0; t < n.length; t++) {
    var e = n[t];
    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(r, i(e.key), e);
  }
}
function p(r, n, t) {
  return n && a(r.prototype, n), t && a(r, t), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
export {
  p as default
};
