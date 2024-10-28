import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { Root as f, Trigger as p, Close as u, Portal as h, Overlay as g, Content as x, Title as b, Description as v } from "./my-component-library83.js";
import { cn as a } from "./my-component-library58.js";
import { cva as y } from "./my-component-library59.js";
import N from "./my-component-library84.js";
const F = f, P = p, S = u, w = h, C = ({
  className: t,
  ...e
}) => /* @__PURE__ */ o(
  g,
  {
    className: a(
      "fixed inset-0 z-50 bg-dialog-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e
  }
), T = y(
  "fixed z-50 gap-4 border-border bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), V = ({
  side: t = "right",
  className: e,
  overlayClassName: n,
  children: r,
  closeLabel: i = "Close",
  withCloseButton: d = !0,
  ...l
}) => {
  const c = (m) => m.preventDefault();
  return /* @__PURE__ */ s(w, { children: [
    /* @__PURE__ */ o(C, { className: n }),
    /* @__PURE__ */ s(
      x,
      {
        className: a(T({ side: t }), e),
        onOpenAutoFocus: c,
        ...l,
        children: [
          r,
          d && /* @__PURE__ */ s(S, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-text", children: [
            /* @__PURE__ */ o(N, { className: "h-4 w-4" }),
            /* @__PURE__ */ o("span", { className: "sr-only", children: i })
          ] })
        ]
      }
    )
  ] });
}, A = ({
  className: t,
  ...e
}) => /* @__PURE__ */ o(
  "div",
  {
    className: a(
      "flex flex-col space-y-2 text-center sm:text-left",
      t
    ),
    ...e
  }
), H = ({
  className: t,
  ...e
}) => /* @__PURE__ */ o(
  "div",
  {
    className: a(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      t
    ),
    ...e
  }
), R = ({
  className: t,
  ...e
}) => /* @__PURE__ */ o(
  b,
  {
    className: a("text-lg font-semibold text-foreground", t),
    ...e
  }
), X = ({
  className: t,
  ...e
}) => /* @__PURE__ */ o(
  v,
  {
    className: a("text-sm text-muted-text", t),
    ...e
  }
);
export {
  F as Sheet,
  S as SheetClose,
  V as SheetContent,
  X as SheetDescription,
  H as SheetFooter,
  A as SheetHeader,
  C as SheetOverlay,
  w as SheetPortal,
  R as SheetTitle,
  P as SheetTrigger
};
