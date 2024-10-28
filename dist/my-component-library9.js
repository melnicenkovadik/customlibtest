import { jsx as c, jsxs as y } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import { Typography as b } from "./my-component-library18.js";
import { cn as f } from "./my-component-library58.js";
import { iconButtonVariants as x } from "./my-component-library23.js";
const i = m(
  ({
    variant: n = "default",
    paint: o = "brand-filled",
    size: r = "sm",
    shape: t = "circle",
    icon: e,
    className: a,
    onClick: d,
    version: l = "outlined",
    disabled: u = !1,
    ...p
  }, s) => /* @__PURE__ */ c(
    "button",
    {
      type: "button",
      ref: s,
      className: f(
        x(
          o ? { paint: o, size: r, shape: t } : { variant: n, size: r, shape: t }
        ),
        {
          "border border-border": o === "neutral" && l === "outlined",
          "border border-ui-accent-500": o === "brand" && l === "outlined",
          "pointer-events-none opacity-[0.37]": u
        },
        a
      ),
      disabled: u,
      onClick: d,
      ...p,
      children: e
    }
  )
);
i.displayName = "IconInnerButton";
const B = m(
  ({ text: n, className: o, disabled: r = !1, ...t }, e) => n ? /* @__PURE__ */ y(
    "div",
    {
      className: f(
        "flex flex-col items-center justify-center gap-1",
        o,
        {
          "pointer-events-none opacity-[0.37]": r
        }
      ),
      children: [
        /* @__PURE__ */ c(
          i,
          {
            ref: e,
            className: o,
            disabled: r,
            ...t
          }
        ),
        /* @__PURE__ */ c(
          b,
          {
            size: "body3",
            className: "text-center font-normal",
            children: n
          }
        )
      ]
    }
  ) : /* @__PURE__ */ c(
    i,
    {
      ref: e,
      className: o,
      disabled: r,
      ...t
    }
  )
);
B.displayName = "IconButton";
export {
  B as IconButton
};
