import * as n from "react";
import { Primitive as p } from "./my-component-library126.js";
import { jsx as o } from "react/jsx-runtime";
var v = "Arrow", e = n.forwardRef((r, i) => {
  const { children: t, width: a = 10, height: s = 5, ...m } = r;
  return /* @__PURE__ */ o(
    p.svg,
    {
      ...m,
      ref: i,
      width: a,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: r.asChild ? t : /* @__PURE__ */ o("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
e.displayName = v;
var h = e;
export {
  e as Arrow,
  h as Root
};
