import { jsxs as r, jsx as t } from "react/jsx-runtime";
import "react";
import { Badge as e } from "./my-component-library3.js";
import "./my-component-library5.js";
import "./my-component-library6.js";
import "./my-component-library7.js";
import { CopyButton as p } from "./my-component-library8.js";
import "./my-component-library9.js";
import "./my-component-library10.js";
import "./my-component-library12.js";
import "./my-component-library13.js";
import "./my-component-library14.js";
import "./my-component-library15.js";
import { TruncateText as a } from "./my-component-library17.js";
import { Typography as s } from "./my-component-library18.js";
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
const L = ({
  option: { value: o, label: m, type: i }
}) => /* @__PURE__ */ r("div", { className: "flex h-[56px] w-full cursor-pointer items-center justify-between gap-2", children: [
  /* @__PURE__ */ r("div", { className: "flex-1", children: [
    /* @__PURE__ */ t(
      s,
      {
        tag: "h6",
        size: "body2",
        className: "font-medium",
        children: m
      }
    ),
    /* @__PURE__ */ r("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ t(
        a,
        {
          text: o,
          isTruncate: !0,
          start: 9,
          className: "font-normal text-secondary-text"
        }
      ),
      /* @__PURE__ */ t(
        p,
        {
          value: o,
          className: "text-secondary-text hover:text-primary-hover"
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ t(
    e,
    {
      variant: "secondary",
      className: "h-[22px] text-xs text-foreground",
      children: i
    }
  )
] });
export {
  L as SelectItem
};
