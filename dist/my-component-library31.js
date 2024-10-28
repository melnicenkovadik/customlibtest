import { jsx as o, jsxs as i } from "react/jsx-runtime";
import { forwardRef as l } from "react";
import { Overlay as r, Content as c, Description as m, Root as f, Trigger as g, Portal as p, Close as u } from "./my-component-library83.js";
import { Typography as x } from "./my-component-library18.js";
import { cn as s } from "./my-component-library58.js";
import h from "./my-component-library84.js";
const j = f, k = g, D = p, y = u, b = l(({ className: t, ...a }, e) => /* @__PURE__ */ o(
  r,
  {
    ref: e,
    className: s(
      "fixed inset-0 z-50 bg-dialog-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...a
  }
)), O = l(({ className: t, children: a, container: e, ...n }, d) => /* @__PURE__ */ i(D, { ...e && { container: e }, children: [
  /* @__PURE__ */ o(b, {}),
  /* @__PURE__ */ i(
    c,
    {
      ref: d,
      className: s(
        "fixed left-[50%] top-[50%] z-50 flex h-screen w-full max-w-lg translate-x-[-50%] translate-y-[-50%] flex-col gap-4 border border-border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:h-auto sm:max-w-md sm:rounded-lg",
        t
      ),
      ...n,
      children: [
        a,
        /* @__PURE__ */ i(y, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-text", children: [
          /* @__PURE__ */ o(h, { className: "h-4 w-4" }),
          /* @__PURE__ */ o("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] })), P = ({
  className: t,
  ...a
}) => /* @__PURE__ */ o(
  "div",
  {
    className: s("flex flex-col text-left", t),
    ...a
  }
), R = ({
  className: t,
  ...a
}) => /* @__PURE__ */ o(
  "div",
  {
    className: s("flex grow flex-col justify-end gap-3 sm:grow-0", t),
    ...a
  }
), F = l(({ className: t, size: a = "heading4", tag: e = "h4", ...n }) => /* @__PURE__ */ o(
  x,
  {
    size: a,
    tag: e,
    className: s("leading-7", t),
    ...n
  }
)), H = l(({ className: t, ...a }, e) => /* @__PURE__ */ o(
  m,
  {
    ref: e,
    className: s("text-sm text-muted-text", t),
    ...a
  }
));
export {
  j as Dialog,
  y as DialogClose,
  O as DialogContent,
  H as DialogDescription,
  R as DialogFooter,
  P as DialogHeader,
  b as DialogOverlay,
  D as DialogPortal,
  F as DialogTitle,
  k as DialogTrigger
};
