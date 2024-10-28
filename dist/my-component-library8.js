import { jsxs as p, jsx as o } from "react/jsx-runtime";
import { useState as d, useEffect as c } from "react";
import { Badge as l } from "./my-component-library3.js";
import { Button as u } from "./my-component-library5.js";
import { cn as f } from "./my-component-library58.js";
import x from "./my-component-library66.js";
const T = ({
  value: r,
  iconClassName: i = "text-muted-text",
  text: a = "Copied",
  className: s,
  ...n
}) => {
  const [t, e] = d(!1);
  return c(() => {
    if (!t) return;
    const m = setTimeout(() => e(!1), 300);
    return () => clearTimeout(m);
  }, [t]), /* @__PURE__ */ p(
    u,
    {
      onClick: () => {
        navigator && navigator.clipboard && navigator.clipboard.writeText && (navigator.clipboard.writeText(r), e(!0));
      },
      variant: "ghost",
      className: f("relative h-4 w-4 p-0", s),
      ...n,
      children: [
        t && /* @__PURE__ */ o(l, { className: "absolute -top-6 text-xs", children: a }),
        /* @__PURE__ */ o(
          x,
          {
            size: 16,
            className: i
          }
        )
      ]
    }
  );
};
export {
  T as CopyButton
};
