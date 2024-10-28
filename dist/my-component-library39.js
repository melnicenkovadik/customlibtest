import { jsx as r, jsxs as m } from "react/jsx-runtime";
import { forwardRef as o, useContext as p } from "react";
import { cn as n } from "./my-component-library58.js";
import { OTPInput as u, OTPInputContext as f } from "./my-component-library107.js";
import x from "./my-component-library108.js";
const T = o(({ className: t, containerClassName: e, ...s }, i) => /* @__PURE__ */ r(
  u,
  {
    ref: i,
    containerClassName: n(
      "flex items-center has-[:disabled]:opacity-50",
      e
    ),
    className: n("disabled:cursor-not-allowed", t),
    ...s
  }
)), I = o(({ className: t, ...e }, s) => /* @__PURE__ */ r(
  "div",
  {
    ref: s,
    className: n("flex items-center", t),
    ...e
  }
)), N = o(({ index: t, className: e, ...s }, i) => {
  const a = p(f), { char: l, hasFakeCaret: c, isActive: d } = a.slots[t];
  return /* @__PURE__ */ m(
    "div",
    {
      ref: i,
      className: n(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        d && "z-10 ring-1 ring-ring",
        e
      ),
      ...s,
      children: [
        l,
        c && /* @__PURE__ */ r("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ r("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) })
      ]
    }
  );
}), g = o(({ ...t }, e) => /* @__PURE__ */ r(
  "div",
  {
    ref: e,
    role: "separator",
    ...t,
    children: /* @__PURE__ */ r(x, { size: 32 })
  }
));
export {
  T as InputOTP,
  I as InputOTPGroup,
  g as InputOTPSeparator,
  N as InputOTPSlot
};
