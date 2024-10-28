import e from "./my-component-library203.js";
import u from "./my-component-library204.js";
import i from "./my-component-library205.js";
function p(o) {
  var s = u();
  return function() {
    var t, r = e(o);
    if (s) {
      var n = e(this).constructor;
      t = Reflect.construct(r, arguments, n);
    } else t = r.apply(this, arguments);
    return i(this, t);
  };
}
export {
  p as default
};
