import { jsx as e } from "react/jsx-runtime";
import { IconButton as s } from "./my-component-library9.js";
import { cn as p } from "./my-component-library58.js";
const g = ({
  buttons: i,
  className: l,
  variant: c = "default",
  size: r = "lg",
  paint: n = "brand-filled",
  shape: a = "circle",
  version: d = "outlined",
  iconClassName: t
}) => /* @__PURE__ */ e("div", { className: p("flex gap-3", l), children: i.map((o, m) => /* @__PURE__ */ e(
  s,
  {
    icon: o.icon,
    onClick: o.onClick,
    text: o.text,
    variant: c,
    paint: n,
    version: d,
    shape: a,
    className: t,
    size: r,
    disabled: o.disabled
  },
  m
)) });
export {
  g as IconButtonsGroup
};
