import { jsx as o } from "react/jsx-runtime";
import { forwardRef as h } from "react";
import { Root as n, Thumb as p } from "./my-component-library71.js";
import { cn as m } from "./my-component-library58.js";
import { switchVariants as e, switchThumbVariant as w } from "./my-component-library25.js";
const N = h(
  ({ className: t, classNameThumb: i, size: r, checked: a, onCheckedChange: c, ...s }, f) => /* @__PURE__ */ o(
    n,
    {
      className: m(e({ size: r }), t),
      checked: a,
      onCheckedChange: c,
      ...s,
      ref: f,
      children: /* @__PURE__ */ o(p, { className: m(w({ size: r }), i) })
    }
  )
);
export {
  N as Switch
};
