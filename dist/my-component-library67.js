import * as i from "react";
import { Primitive as f } from "./my-component-library126.js";
import { jsx as l } from "react/jsx-runtime";
var m = "Label", r = i.forwardRef((e, o) => /* @__PURE__ */ l(
  f.label,
  {
    ...e,
    ref: o,
    onMouseDown: (t) => {
      var a;
      t.target.closest("button, input, select, textarea") || ((a = e.onMouseDown) == null || a.call(e, t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
    }
  }
));
r.displayName = m;
var b = r;
export {
  r as Label,
  b as Root
};
