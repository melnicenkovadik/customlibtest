import { jsx as u } from "react/jsx-runtime";
import { truncateText as f, cn as p } from "./my-component-library58.js";
import { truncateVariants as x } from "./my-component-library27.js";
const h = ({
  className: r,
  variant: e,
  size: c,
  text: t,
  start: n = 4,
  end: o = 4,
  dots: a = 3,
  isTruncate: m = !1,
  ...s
}) => {
  const i = m ? f(t, n, o, a) : t;
  return /* @__PURE__ */ u(
    "div",
    {
      className: p(x({ variant: e, size: c }), r),
      ...s,
      children: i
    }
  );
};
export {
  h as TruncateText
};
