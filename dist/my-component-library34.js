import { jsx as e, jsxs as r } from "react/jsx-runtime";
import { IconButton as a } from "./my-component-library9.js";
import { ImageModal as n, ImageModalTrigger as o, ImageModalContent as c } from "./my-component-library93.js";
import { cn as p } from "./my-component-library58.js";
import d from "./my-component-library94.js";
import u from "./my-component-library95.js";
import h from "./my-component-library96.js";
const y = ({
  src: l,
  alt: t = "Image",
  onErrorLoading: s,
  content: i,
  className: m
}) => /* @__PURE__ */ e(n, { children: /* @__PURE__ */ r(
  "div",
  {
    className: p(
      "group relative flex flex-col items-center justify-center overflow-hidden rounded-md",
      m
    ),
    children: [
      /* @__PURE__ */ e(
        "img",
        {
          className: "absolute left-0 top-0 h-full w-full",
          loading: "lazy",
          src: l,
          alt: t,
          onError: s
        }
      ),
      /* @__PURE__ */ e(o, { asChild: !0, children: /* @__PURE__ */ e("div", { className: "absolute left-0 top-0 h-full w-full cursor-pointer opacity-50 group-hover:bg-primary" }) }),
      /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 flex gap-1", children: /* @__PURE__ */ e(o, { asChild: !0, children: /* @__PURE__ */ e(
        a,
        {
          size: "sm",
          shape: "square",
          paint: "neutral",
          icon: /* @__PURE__ */ e(d, { className: "h-4 w-4" }),
          className: "opacity-0 transition-opacity group-hover:opacity-100"
        }
      ) }) }),
      /* @__PURE__ */ e(c, { className: "shadow-none", children: i }),
      /* @__PURE__ */ r("div", { className: "absolute bottom-2 left-2 flex gap-1", children: [
        /* @__PURE__ */ e(
          a,
          {
            size: "sm",
            shape: "square",
            paint: "neutral",
            icon: /* @__PURE__ */ e(u, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ e(
          a,
          {
            size: "sm",
            shape: "square",
            paint: "neutral",
            icon: /* @__PURE__ */ e(h, { className: "h-4 w-4" })
          }
        )
      ] })
    ]
  }
) });
export {
  y as ExpandableImage
};
