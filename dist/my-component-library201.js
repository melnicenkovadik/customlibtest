import o from "./my-component-library192.js";
import i from "./my-component-library228.js";
function f(t) {
  var r = i(t, "string");
  return o(r) == "symbol" ? r : r + "";
}
export {
  f as default
};
