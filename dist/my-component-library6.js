import { jsx as t } from "react/jsx-runtime";
import { forwardRef as s } from "react";
import { cn as a } from "./my-component-library58.js";
import { cardVariants as i } from "./my-component-library22.js";
const p = s(
  ({ className: r, isHovered: e = !1, ...o }, n) => /* @__PURE__ */ t(
    "div",
    {
      ref: n,
      className: a(
        "rounded-lg bg-border text-foreground shadow-sm transition delay-150 ease-in-out",
        e && "cursor-pointer p-[1px] hover:bg-hover-stroke",
        r
      ),
      ...o
    }
  )
), u = s(
  ({ className: r, size: e, isBackground: o, ...n }, d) => /* @__PURE__ */ t(
    "div",
    {
      ref: d,
      className: a(
        "h-full rounded-lg",
        i({ size: e, className: r }),
        o && "cursor-pointer hover:bg-banner-stroke"
      ),
      ...n
    }
  )
), v = s(
  ({ className: r, ...e }, o) => /* @__PURE__ */ t(
    "div",
    {
      ref: o,
      className: a(
        "mb-4 flex flex-row items-center justify-between",
        r
      ),
      ...e
    }
  )
), b = s(({ className: r, ...e }, o) => /* @__PURE__ */ t(
  "div",
  {
    ref: o,
    className: a("pt-0", r),
    ...e
  }
)), x = s(({ className: r, ...e }, o) => /* @__PURE__ */ t(
  "div",
  {
    ref: o,
    className: a("flex items-center", r),
    ...e
  }
));
export {
  b as CardContent,
  x as CardFooter,
  v as CardHeader,
  u as CardInner,
  p as CardWrapper
};
