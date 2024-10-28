import { jsx as f } from "react/jsx-runtime";
import { forwardRef as p } from "react";
import { cn as a } from "./my-component-library58.js";
import { buttonVariants as e } from "./my-component-library21.js";
const c = p(
  ({ className: t, variant: o, size: r, ...m }, n) => /* @__PURE__ */ f(
    "button",
    {
      type: "button",
      className: a(e({ variant: o, size: r, className: t })),
      ref: n,
      ...m
    }
  )
);
export {
  c as Button
};
