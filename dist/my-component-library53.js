import { jsx as r } from "react/jsx-runtime";
import { forwardRef as d } from "react";
import { Content as s, Provider as n, Root as m, Trigger as l, Portal as f } from "./my-component-library119.js";
import { cn as p } from "./my-component-library58.js";
const h = n, x = m, P = l, b = f, v = d(({ className: o, sideOffset: t = 4, children: e, ...i }, a) => /* @__PURE__ */ r(
  s,
  {
    ref: a,
    sideOffset: t,
    className: p(
      "z-50 overflow-hidden rounded-md bg-ghost px-3 py-1.5 text-sm duration-75 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      o
    ),
    ...i,
    children: e
  }
));
export {
  x as Tooltip,
  v as TooltipContent,
  b as TooltipPortal,
  h as TooltipProvider,
  P as TooltipTrigger
};
