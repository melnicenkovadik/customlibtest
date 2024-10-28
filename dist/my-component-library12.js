import { jsx as o } from "react/jsx-runtime";
import { forwardRef as f } from "react";
import { Root as n, Indicator as c } from "./my-component-library70.js";
import { cn as t } from "./my-component-library58.js";
import { progressVariants as p, indicatorVariants as l } from "./my-component-library24.js";
const V = f(
  ({ className: s, indicatorClassName: a, variant: r = "default", value: m, ...e }, i) => /* @__PURE__ */ o(
    n,
    {
      ref: i,
      className: t(p({ variant: r }), s),
      ...e,
      children: /* @__PURE__ */ o(
        c,
        {
          className: t(l({ variant: r }), a),
          style: { transform: `translateX(-${100 - (m || 0)}%)` }
        }
      )
    }
  )
);
export {
  V as Progress
};
