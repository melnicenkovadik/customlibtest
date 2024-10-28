import { sizeof as p } from "./my-component-library191.js";
function c(t) {
  var r = p(t);
  return function(f, n, i, a) {
    for (var o = "", u = 0; u < r; u++)
      o += t[u](f, n, i, a) || "";
    return o;
  };
}
function d(t) {
  return function(r) {
    r.root || (r = r.return) && t(r);
  };
}
export {
  c as middleware,
  d as rulesheet
};
