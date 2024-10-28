import { jsx as t } from "react/jsx-runtime";
import { forwardRef as s } from "react";
import { Portal as i, Content as m, Root as p, Trigger as c, Anchor as l, Close as f } from "./my-component-library112.js";
import { cn as g } from "./my-component-library58.js";
const v = p, C = c, w = l, z = f, A = s(
  ({ className: e, align: a = "center", sideOffset: r = 4, container: o, ...d }, n) => /* @__PURE__ */ t(i, { ...o && { container: o }, children: /* @__PURE__ */ t(
    m,
    {
      ref: n,
      align: a,
      sideOffset: r,
      className: g(
        "z-50 w-72 rounded-md border border-border bg-background p-4 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...d
    }
  ) })
);
export {
  v as Popover,
  w as PopoverAnchor,
  z as PopoverClose,
  A as PopoverContent,
  C as PopoverTrigger
};
