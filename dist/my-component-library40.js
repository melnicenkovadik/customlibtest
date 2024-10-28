import { jsx as t } from "react/jsx-runtime";
import { cn as n } from "./my-component-library58.js";
const m = ({
  disabled: e = !1,
  className: o,
  ...r
}) => /* @__PURE__ */ t(
  "li",
  {
    tabIndex: e ? -1 : 0,
    className: n(
      "flex items-center gap-x-2 rounded p-2 text-sm outline-none",
      e ? "opacity-50" : "cursor-pointer hover:bg-secondary focus:bg-secondary",
      o
    ),
    ...r
  }
);
export {
  m as MenuItem
};
