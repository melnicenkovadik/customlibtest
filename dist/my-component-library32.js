import { jsx as o, jsxs as c } from "react/jsx-runtime";
import { forwardRef as s } from "react";
import { useDisableAnimations as f } from "./my-component-library85.js";
import { useMedia as w } from "./my-component-library86.js";
import { cn as i } from "./my-component-library58.js";
import { Drawer as a } from "./my-component-library87.js";
import { useDrawerContext as u, DrawerProvider as x } from "./my-component-library88.js";
const z = ({
  shouldScaleBackground: r = !0,
  direction: e = "left",
  ...t
}) => {
  const l = w("(min-width: 768px)");
  return f(!l), /* @__PURE__ */ o(x, { value: { direction: l ? e : "top" }, children: /* @__PURE__ */ o(
    a.Root,
    {
      shouldScaleBackground: r,
      direction: l ? e : "top",
      modal: !l,
      ...t
    }
  ) });
}, F = a.Trigger, D = a.Portal, g = s(({ className: r, ...e }, t) => /* @__PURE__ */ o(
  a.Close,
  {
    ref: t,
    className: i("top-6.5 absolute right-3 cursor-pointer", r),
    ...e
  }
));
g.displayName = "DrawerClose";
const d = s(({ className: r, ...e }, t) => /* @__PURE__ */ o(
  a.Overlay,
  {
    ref: t,
    className: i("fixed inset-0 z-50 bg-black/80", r),
    ...e
  }
));
d.displayName = "DrawerOverlay";
const b = s(({ className: r, children: e, container: t, asChild: l = !1, ...n }, p) => {
  const { direction: m } = u();
  return /* @__PURE__ */ c(D, { ...t && { container: t }, children: [
    /* @__PURE__ */ o(d, { asChild: l }),
    /* @__PURE__ */ o(
      a.Content,
      {
        ref: p,
        className: i(
          "fixed z-50 flex flex-col border border-border bg-background",
          m === "left" && "bottom-0 left-0 top-0 w-full md:w-auto md:min-w-[320px] md:rounded-tl-[10px]",
          m === "right" && "bottom-0 right-0 top-0 w-full md:w-auto md:min-w-[320px] md:rounded-tr-[10px]",
          m === "top" && "left-0 right-0 top-0 h-full md:h-auto md:rounded-t-[10px]",
          m === "bottom" && "bottom-0 left-0 right-0 h-full md:h-auto md:rounded-b-[10px]",
          r
        ),
        ...n,
        children: e
      }
    )
  ] });
});
b.displayName = "DrawerContent";
const R = ({
  className: r,
  ...e
}) => /* @__PURE__ */ o(
  "div",
  {
    className: i(
      "pr-6.5 grid gap-1.5 p-6 text-center sm:text-left",
      r
    ),
    ...e
  }
), h = ({
  className: r,
  ...e
}) => /* @__PURE__ */ o(
  "div",
  {
    className: i("mt-auto flex flex-col gap-2 p-6", r),
    ...e
  }
);
h.displayName = "DrawerFooter";
const N = s(({ className: r, ...e }, t) => /* @__PURE__ */ o(
  a.Title,
  {
    ref: t,
    className: i(
      "text-lg font-semibold leading-none tracking-tight",
      r
    ),
    ...e
  }
));
N.displayName = "DrawerTitle";
const y = s(({ className: r, ...e }, t) => /* @__PURE__ */ o(
  a.Description,
  {
    ref: t,
    className: i("text-sm text-muted-text", r),
    ...e
  }
));
y.displayName = "DrawerDescription";
export {
  z as Drawer,
  g as DrawerClose,
  b as DrawerContent,
  y as DrawerDescription,
  h as DrawerFooter,
  R as DrawerHeader,
  d as DrawerOverlay,
  D as DrawerPortal,
  N as DrawerTitle,
  F as DrawerTrigger
};
