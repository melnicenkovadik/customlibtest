import { jsx as p } from "react/jsx-runtime";
import { forwardRef as l } from "react";
import { Root as a } from "./my-component-library72.js";
import { cn as e } from "./my-component-library58.js";
const c = l(
  ({ className: o, orientation: r = "horizontal", decorative: m = !0, ...t }, f) => /* @__PURE__ */ p(
    a,
    {
      ref: f,
      decorative: m,
      orientation: r,
      className: e(
        "shrink-0 bg-border",
        r === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        o
      ),
      ...t
    }
  )
);
export {
  c as Separator
};
