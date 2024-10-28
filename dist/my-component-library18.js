import { jsx as a } from "react/jsx-runtime";
import { cn as f } from "./my-component-library58.js";
import { highlightHashtags as h } from "./my-component-library75.js";
import { titleVariants as l } from "./my-component-library28.js";
function x({
  size: o,
  variant: r,
  color: i = "default",
  tag: e = "h6",
  component: m,
  disableHashtagsHighlighting: n = !1,
  className: p,
  children: t,
  ...s
}) {
  return /* @__PURE__ */ a(
    e || m || "h6",
    {
      className: f(l({ size: o || r, color: i, className: p })),
      ...s,
      children: typeof t == "string" && !n ? h(t) : t
    }
  );
}
export {
  x as Typography
};
