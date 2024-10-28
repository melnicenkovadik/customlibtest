import * as e from "react";
var t = function(n) {
  return n();
}, a = e.useInsertionEffect ? e.useInsertionEffect : !1, c = a || t;
export {
  c as useInsertionEffectAlwaysWithSyncFallback
};
