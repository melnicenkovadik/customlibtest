import { jsxs as r, jsx as t } from "react/jsx-runtime";
import { cn as c } from "./my-component-library58.js";
import "./my-component-library5.js";
import "./my-component-library6.js";
import "./my-component-library7.js";
import "react";
import "./my-component-library9.js";
import "./my-component-library10.js";
import "./my-component-library12.js";
import { Switch as a } from "./my-component-library13.js";
import "./my-component-library14.js";
import "./my-component-library15.js";
import { TruncateText as d } from "./my-component-library17.js";
import "./my-component-library19.js";
import "./my-component-library29.js";
import "./my-component-library30.js";
import "./my-component-library31.js";
import "./my-component-library32.js";
import "./my-component-library33.js";
import "./my-component-library93.js";
import "./my-component-library36.js";
import "./my-component-library38.js";
import "./my-component-library39.js";
import "./my-component-library41.js";
import "./my-component-library42.js";
import "./my-component-library48.js";
import "./my-component-library50.js";
import "./my-component-library100.js";
import "./my-component-library53.js";
const K = ({
  className: m,
  item: o,
  truncateStart: i = 50
}) => {
  const { icon: p, type: e, message: s } = o;
  return /* @__PURE__ */ r(
    "div",
    {
      className: c(
        "flex h-[70px] items-center gap-4 rounded-md border border-border px-4 py-3.5",
        m
      ),
      children: [
        p,
        /* @__PURE__ */ r("div", { className: "font-medium", children: [
          /* @__PURE__ */ t("p", { children: e }),
          /* @__PURE__ */ t(
            d,
            {
              text: s,
              isTruncate: !0,
              className: "text-sm text-muted-text",
              start: i
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { className: "ml-auto", children: /* @__PURE__ */ t(a, {}) })
      ]
    }
  );
};
export {
  K as TogglePanelItem
};
