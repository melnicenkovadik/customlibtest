import * as e from "react";
function c(o, n) {
  typeof o == "function" ? o(n) : o != null && (o.current = n);
}
function u(...o) {
  return (n) => o.forEach((t) => c(t, n));
}
function i(...o) {
  return e.useCallback(u(...o), o);
}
export {
  u as composeRefs,
  i as useComposedRefs
};
