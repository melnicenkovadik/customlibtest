import { jsxs as s, jsx as i, Fragment as g } from "react/jsx-runtime";
import { IconButton as m } from "./my-component-library9.js";
import { Typography as c } from "./my-component-library18.js";
import { DialogClose as h } from "./my-component-library31.js";
import { cn as n } from "./my-component-library58.js";
import f from "./my-component-library97.js";
import x from "./my-component-library84.js";
const N = (e, a) => {
  const l = /* @__PURE__ */ i(
    m,
    {
      icon: e.icon,
      onClick: e.onClick,
      text: e.text,
      disabled: e.disabled,
      size: "sm",
      paint: "neutral",
      shape: "square"
    },
    (e == null ? void 0 : e.id) || a
  );
  return e.isDialogClose ? /* @__PURE__ */ i(h, { children: l }, (e == null ? void 0 : e.id) || a) : l;
}, B = ({
  src: e,
  className: a,
  imgClassName: l,
  name: d,
  description: o,
  customControllers: r
}) => /* @__PURE__ */ s(
  "div",
  {
    className: n(
      "group relative m-auto flex flex-col items-end justify-between overflow-hidden rounded-md",
      a
    ),
    children: [
      /* @__PURE__ */ i("div", { className: "mb-2 flex gap-2", children: r && r.length > 0 ? r.map(
        (p, t) => N(p, t)
      ) : /* @__PURE__ */ s(g, { children: [
        /* @__PURE__ */ i(
          m,
          {
            size: "sm",
            paint: "neutral",
            shape: "square",
            icon: /* @__PURE__ */ i(f, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ i(h, { asChild: !0, children: /* @__PURE__ */ i(
          m,
          {
            size: "sm",
            paint: "neutral",
            shape: "square",
            icon: /* @__PURE__ */ i(x, { className: "h-4 w-4" })
          }
        ) })
      ] }) }),
      /* @__PURE__ */ i(
        "img",
        {
          className: n("rounded-2xl", l),
          src: e,
          alt: `${d} | ${o}`
        }
      ),
      /* @__PURE__ */ i("div", { className: "absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 lg:bottom-6 lg:left-6 lg:right-6", children: /* @__PURE__ */ s("div", { className: "flex-1", children: [
        /* @__PURE__ */ i(
          c,
          {
            tag: "h6",
            size: "body2",
            color: "invert",
            className: "mb-[6px] font-normal",
            children: d
          }
        ),
        /* @__PURE__ */ i(
          c,
          {
            tag: "p",
            size: "heading4",
            color: "invert",
            className: "leading-[25px]",
            children: o
          }
        )
      ] }) })
    ]
  }
);
export {
  B as ExpandedImage
};
