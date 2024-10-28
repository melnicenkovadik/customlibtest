import { jsx as o, jsxs as l } from "react/jsx-runtime";
import { forwardRef as d } from "react";
import { Overlay as r, Content as i, Portal as m, Root as c, Trigger as f } from "./my-component-library83.js";
import { cn as s } from "./my-component-library58.js";
const z = c, w = f, p = m, g = d(({ className: t, ...a }, e) => /* @__PURE__ */ o(
  r,
  {
    ref: e,
    className: s(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...a
  }
)), y = d(({ className: t, children: a, ...e }, n) => /* @__PURE__ */ l(p, { children: [
  /* @__PURE__ */ o(g, {}),
  /* @__PURE__ */ o(
    i,
    {
      ref: n,
      className: s(
        "fixed left-[50%] top-[50%] z-50 grid w-max translate-x-[-50%] translate-y-[-50%] gap-4 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        t
      ),
      ...e,
      children: a
    }
  )
] }));
export {
  z as ImageModal,
  y as ImageModalContent,
  w as ImageModalTrigger
};
