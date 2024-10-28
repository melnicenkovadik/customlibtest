import o from "./my-component-library201.js";
function i(e, r, t) {
  return (r = o(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
export {
  i as default
};
