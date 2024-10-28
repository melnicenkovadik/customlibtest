import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { cn as e } from "./my-component-library58.js";
const f = ({
  className: s,
  beforeText: l,
  afterText: a,
  primaryText: m = "",
  secondaryText: x = "",
  primaryTextClassName: n = "",
  secondaryTextClassName: o = "",
  ...c
}) => /* @__PURE__ */ t(
  "div",
  {
    className: e(
      "relative flex flex-row flex-wrap items-center gap-2 px-4 py-3",
      s
    ),
    ...c,
    children: [
      l,
      /* @__PURE__ */ t("div", { className: "flex flex-col items-start", children: [
        /* @__PURE__ */ r(
          "span",
          {
            className: e(
              "text-sm font-normal text-primary",
              n
            ),
            children: m
          }
        ),
        /* @__PURE__ */ r(
          "span",
          {
            className: e(
              "text-xs font-medium text-secondary-text",
              o
            ),
            children: x
          }
        )
      ] }),
      a
    ]
  }
);
export {
  f as TwoRowCell
};
