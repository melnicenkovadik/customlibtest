import * as a from "react";
import { Primitive as o } from "./my-component-library126.js";
import { jsx as t } from "react/jsx-runtime";
var d = "VisuallyHidden", i = a.forwardRef(
  (r, e) => /* @__PURE__ */ t(
    o.span,
    {
      ...r,
      ref: e,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...r.style
      }
    }
  )
);
i.displayName = d;
var n = i;
export {
  n as Root,
  i as VisuallyHidden
};
