import { jsxs as c, jsx as t } from "react/jsx-runtime";
import { Root as m, Image as h, Fallback as v } from "./my-component-library57.js";
import { cn as a } from "./my-component-library58.js";
import { cva as n } from "./my-component-library59.js";
const b = n(
  "relative flex shrink-0 cursor-pointer items-center justify-center rounded-full border border-transparent transition hover:border-secondary-hover focus:border-secondary-focus",
  {
    variants: {
      variant: {
        default: "text-primary-foreground bg-white",
        dark: "bg-secondary-text text-invert"
      },
      size: {
        default: "h-9 w-9",
        md: "h-10 w-10",
        lg: "h-11 w-11",
        xs: "h-5 w-5",
        xxs: "h-4 w-4"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), w = n(
  "absolute bottom-0 right-0 rounded-full border border-white",
  {
    variants: {
      size: {
        default: "h-2.5 w-2.5",
        md: "h-3 w-3",
        lg: "h-3.5 w-3.5",
        xs: "h-1.5 w-1.5",
        xxs: "h-1.5 w-1.5"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
), x = ({
  ...e
}) => /* @__PURE__ */ t(m, { ...e }), g = ({
  className: e,
  ...r
}) => /* @__PURE__ */ t(
  h,
  {
    className: a("aspect-square h-full w-full rounded-full", e),
    ...r
  }
), p = ({
  className: e,
  ...r
}) => /* @__PURE__ */ t(
  v,
  {
    className: a(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...r
  }
), y = ({
  status: e,
  size: r
}) => /* @__PURE__ */ t(
  "div",
  {
    className: a(w({ size: r }), {
      "bg-success-400": e === "online",
      "bg-neutral-400": e === "offline"
    })
  }
), k = ({
  src: e,
  avatarFallback: r,
  className: l,
  variant: i,
  avatarComponent: d,
  status: s,
  size: o,
  alt: u,
  ...f
}) => /* @__PURE__ */ c(
  x,
  {
    className: a(b({ variant: i, size: o }), l),
    ...f,
    children: [
      e && /* @__PURE__ */ t(
        g,
        {
          src: e,
          alt: u || "Avatar image"
        }
      ),
      r && /* @__PURE__ */ t(p, { children: r }),
      d,
      s && /* @__PURE__ */ t(
        y,
        {
          status: s,
          size: o
        }
      )
    ]
  }
);
export {
  k as Avatar
};
