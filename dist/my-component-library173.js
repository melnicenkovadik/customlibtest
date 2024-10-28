import n from "./my-component-library200.js";
function p(r, e) {
  if (r == null) return {};
  var t, o, i = n(r, e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(r);
    for (o = 0; o < l.length; o++) t = l[o], e.includes(t) || {}.propertyIsEnumerable.call(r, t) && (i[t] = r[t]);
  }
  return i;
}
export {
  p as default
};
