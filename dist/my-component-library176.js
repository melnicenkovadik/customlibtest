import e from "./my-component-library202.js";
function n(r, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: r,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(r, "prototype", {
    writable: !1
  }), t && e(r, t);
}
export {
  n as default
};
