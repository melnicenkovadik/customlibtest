import { styleHookSingleton as o } from "./my-component-library258.js";
var s = function() {
  var e = o(), n = function(t) {
    var r = t.styles, l = t.dynamic;
    return e(r, l), null;
  };
  return n;
};
export {
  s as styleSingleton
};
