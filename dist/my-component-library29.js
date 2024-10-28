import { jsx as e, jsxs as s } from "react/jsx-runtime";
import { forwardRef as a } from "react";
import { Item as c, Header as m, Trigger as d, Content as l, Root as f } from "./my-component-library78.js";
import { cn as i } from "./my-component-library58.js";
import p from "./my-component-library79.js";
const u = f, v = a(({ ...o }, t) => /* @__PURE__ */ e(
  c,
  {
    ref: t,
    ...o
  }
)), A = a(({ className: o, children: t, ...r }, n) => /* @__PURE__ */ e(m, { className: "flex", children: /* @__PURE__ */ s(
  d,
  {
    ref: n,
    className: i(
      "flex flex-1 items-center justify-between pb-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
      o
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ e(p, { className: "transform-origin h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) })), C = a(({ className: o, children: t, ...r }, n) => /* @__PURE__ */ e(
  l,
  {
    ref: n,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...r,
    children: /* @__PURE__ */ e("div", { className: i("pb-4 pt-0", o), children: t })
  }
));
export {
  u as Accordion,
  C as AccordionContent,
  v as AccordionItem,
  A as AccordionTrigger
};
