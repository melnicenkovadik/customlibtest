import t from "./my-component-library192.js";
import e from "./my-component-library229.js";
function f(o, r) {
  if (r && (t(r) == "object" || typeof r == "function")) return r;
  if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return e(o);
}
export {
  f as default
};
