import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { forwardRef as d, useId as h } from "react";
import { Root as f, Indicator as u } from "./my-component-library63.js";
import { cn as r } from "./my-component-library58.js";
import x from "./my-component-library64.js";
import p from "./my-component-library65.js";
const q = d(
  ({ className: a, inputClassName: l, labelClassName: i, label: m, details: c, ...t }, n) => {
    const o = h();
    return /* @__PURE__ */ s("div", { className: r("flex", a), children: [
      /* @__PURE__ */ s(
        f,
        {
          ref: n,
          className: r(
            "peer h-4 w-4 shrink-0 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            l
          ),
          id: o,
          ...t,
          children: [
            !t.checked && /* @__PURE__ */ e(x, { className: "h-4 w-4 translate-y-0.5" }),
            /* @__PURE__ */ e(u, { className: r("flex items-center justify-center"), children: t.checked && /* @__PURE__ */ e(p, { className: "h-4 w-4 translate-y-0.5" }) })
          ]
        }
      ),
      /* @__PURE__ */ s(
        "label",
        {
          htmlFor: o,
          className: r("ml-2 cursor-pointer text-sm", i),
          children: [
            m,
            c && /* @__PURE__ */ e("p", { className: "mt-2 text-secondary-text", children: c })
          ]
        }
      )
    ] });
  }
);
export {
  q as Checkbox
};
