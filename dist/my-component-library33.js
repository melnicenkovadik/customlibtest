import { jsx as a, jsxs as i } from "react/jsx-runtime";
import { forwardRef as r } from "react";
import { Trigger as p, SubTrigger as f, SubContent as b, Content as g, Item as h, CheckboxItem as x, ItemIndicator as c, RadioItem as w, Label as N, Separator as S, Root as y, Group as D, Portal as l, Sub as M, RadioGroup as I } from "./my-component-library89.js";
import { useIsSsr as C } from "./my-component-library90.js";
import { cn as s } from "./my-component-library58.js";
import v from "./my-component-library61.js";
import R from "./my-component-library91.js";
import k from "./my-component-library92.js";
const E = y, F = r(({ className: e, children: t, ...o }, n) => /* @__PURE__ */ a(
  p,
  {
    ref: n,
    className: s("focus:outline-none", e),
    ...o,
    children: t
  }
)), H = D, J = l, K = M, O = I, Q = r(({ className: e, inset: t, children: o, ...n }, d) => /* @__PURE__ */ i(
  f,
  {
    ref: d,
    className: s(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-secondary data-[state=open]:bg-secondary",
      t && "pl-8",
      e
    ),
    ...n,
    children: [
      o,
      /* @__PURE__ */ a(v, { className: "ml-auto h-4 w-4" })
    ]
  }
)), U = r(({ className: e, ...t }, o) => /* @__PURE__ */ a(
  b,
  {
    ref: o,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-background p-1 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
)), V = r(
  ({
    className: e,
    contentClassName: t,
    sideOffset: o = 4,
    isInsideParent: n = !1,
    ...d
  }, m) => {
    const u = C() || n ? "div" : l;
    return /* @__PURE__ */ a(u, { className: t, children: /* @__PURE__ */ a(
      g,
      {
        ref: m,
        sideOffset: o,
        className: s(
          "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-background p-1 shadow-md",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          "data-[side=center]:bg-foreground",
          e
        ),
        ...d
      }
    ) });
  }
), W = r(({ className: e, inset: t, ...o }, n) => /* @__PURE__ */ a(
  h,
  {
    ref: n,
    className: s(
      "relative flex h-11 cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-secondary focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...o
  }
)), X = r(({ className: e, children: t, checked: o, ...n }, d) => /* @__PURE__ */ i(
  x,
  {
    ref: d,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-text data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: o,
    ...n,
    children: [
      /* @__PURE__ */ a("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ a(c, { children: /* @__PURE__ */ a(R, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
)), Y = r(({ className: e, children: t, ...o }, n) => /* @__PURE__ */ i(
  w,
  {
    ref: n,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-text data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...o,
    children: [
      /* @__PURE__ */ a("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ a(c, { children: /* @__PURE__ */ a(k, { className: "h-4 w-4 fill-current" }) }) }),
      t
    ]
  }
)), Z = r(({ className: e, inset: t, ...o }, n) => /* @__PURE__ */ a(
  N,
  {
    ref: n,
    className: s(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...o
  }
)), _ = r(({ className: e, ...t }, o) => /* @__PURE__ */ a(
  S,
  {
    ref: o,
    className: s("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
)), $ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ a(
  "span",
  {
    className: s("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
export {
  E as DropdownMenu,
  X as DropdownMenuCheckboxItem,
  V as DropdownMenuContent,
  H as DropdownMenuGroup,
  W as DropdownMenuItem,
  Z as DropdownMenuLabel,
  J as DropdownMenuPortal,
  O as DropdownMenuRadioGroup,
  Y as DropdownMenuRadioItem,
  _ as DropdownMenuSeparator,
  $ as DropdownMenuShortcut,
  K as DropdownMenuSub,
  U as DropdownMenuSubContent,
  Q as DropdownMenuSubTrigger,
  F as DropdownMenuTrigger
};
