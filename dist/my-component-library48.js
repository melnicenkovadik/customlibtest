import { jsxs as m, jsx as t } from "react/jsx-runtime";
import { forwardRef as d, useId as p } from "react";
import { Label as u } from "./my-component-library67.js";
import { cn as i } from "./my-component-library58.js";
import { textAreaVariants as h } from "./my-component-library56.js";
import N from "./my-component-library101.js";
const F = d(
  ({ className: s, isErrors: e, error: l, variant: c, label: r, disabled: o, icon: n, ...f }, x) => {
    const a = p();
    return /* @__PURE__ */ m("div", { className: "grid w-full gap-1.5", children: [
      r && /* @__PURE__ */ t(
        u,
        {
          htmlFor: a,
          className: i("text-sm", o ? "text-muted-text" : ""),
          children: r
        }
      ),
      /* @__PURE__ */ m("div", { className: "relative", children: [
        n,
        /* @__PURE__ */ t(
          "textarea",
          {
            className: i(
              h({ variant: c }),
              e || l ? "text-destructive outline outline-2 outline-offset-1" : "",
              s
            ),
            ref: x,
            disabled: o,
            id: a,
            ...f
          }
        ),
        e && /* @__PURE__ */ t(N, { className: "absolute right-3 top-2 text-red-500" })
      ] })
    ] });
  }
);
export {
  F as Textarea
};
