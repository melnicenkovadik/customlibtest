import { jsxs as f, jsx as m } from "react/jsx-runtime";
import { cn as p } from "./my-component-library58.js";
import "./my-component-library5.js";
import "./my-component-library6.js";
import "./my-component-library7.js";
import "react";
import "./my-component-library9.js";
import "./my-component-library10.js";
import "./my-component-library12.js";
import "./my-component-library13.js";
import "./my-component-library14.js";
import "./my-component-library15.js";
import { TruncateText as x } from "./my-component-library17.js";
import { Typography as d } from "./my-component-library18.js";
import "./my-component-library19.js";
const q = ({
  className: i = "gap-[9px]",
  textClasses: e,
  text: r,
  title: t,
  actions: o,
  startTruncate: a = 4,
  variant: s = "body1",
  isTruncate: n,
  ...c
}) => {
  if (!t && !r)
    throw new Error("title and text props can not be empty at the same time");
  return /* @__PURE__ */ f("div", { className: p("flex items-center", i), children: [
    t && /* @__PURE__ */ m(d, { size: s, children: t }),
    r && /* @__PURE__ */ m(
      x,
      {
        text: r,
        ...c,
        className: p(e, "gap-1"),
        isTruncate: n,
        start: a
      }
    ),
    o.length > 0 && o.map((h) => h)
  ] });
};
export {
  q as TextWithActions
};
