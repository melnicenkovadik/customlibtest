import { jsxs as l, jsx as i } from "react/jsx-runtime";
import { cn as t } from "./my-component-library58.js";
import { taglineVariants as c } from "./my-component-library26.js";
function p({
  className: n,
  size: s = "full",
  text: a,
  icon: e,
  button: r,
  ...m
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      className: t(c({ size: s }), n, "text-foreground"),
      ...m,
      children: [
        a,
        /* @__PURE__ */ l("div", { className: "ml-2 flex items-center", children: [
          e && /* @__PURE__ */ i("span", { className: "ml-2", children: e }),
          r && /* @__PURE__ */ i("span", { children: r })
        ] })
      ]
    }
  );
}
export {
  p as Tagline
};
