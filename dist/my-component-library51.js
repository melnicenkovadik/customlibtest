import { jsxs as f, jsx as r } from "react/jsx-runtime";
import { useState as d, useEffect as x } from "react";
import _, { useToaster as g } from "./my-component-library100.js";
import { Avatar as b } from "./my-component-library2.js";
import { Button as v } from "./my-component-library5.js";
import { Typography as h } from "./my-component-library18.js";
import { cn as p } from "./my-component-library58.js";
import w from "./my-component-library84.js";
const M = ({
  id: i,
  className: t,
  header: n,
  headerClassName: c,
  description: m,
  descriptionClassName: a,
  avatarSrc: s,
  suffix: e,
  onClose: o
}) => /* @__PURE__ */ f(
  "div",
  {
    className: p(
      "relative flex flex-row items-center justify-center gap-4 rounded-md border bg-background p-6 shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.10),_0px_4px_6px_-4px_rgba(0,_0,_0,_0.10)]",
      t
    ),
    children: [
      s && /* @__PURE__ */ r(b, { src: s }),
      /* @__PURE__ */ f("div", { className: "flex max-w-[255px] flex-col gap-1", children: [
        /* @__PURE__ */ r(
          h,
          {
            size: "body2",
            className: p("font-semibold", c),
            children: n
          }
        ),
        /* @__PURE__ */ r(
          h,
          {
            size: "body2",
            className: p("font-normal", a),
            children: m
          }
        )
      ] }),
      e,
      /* @__PURE__ */ r(
        w,
        {
          className: "absolute right-2 top-2 h-4 w-4 cursor-pointer",
          onClick: () => {
            _.remove(i), o == null || o();
          }
        }
      )
    ]
  }
), P = ({ maxVisible: i = 3 }) => {
  const { toasts: t, handlers: n } = g(), { startPause: c, endPause: m } = n, [a, s] = d(!1), [e, o] = d([]);
  return x(() => {
    o(t.filter((l) => l.visible));
  }, [t]), x(() => {
    !e.length && a && s(!1);
  }, [e]), /* @__PURE__ */ f(
    "div",
    {
      onMouseEnter: c,
      onMouseLeave: m,
      className: "fixed bottom-2 right-2 flex flex-col gap-2",
      children: [
        e.slice(e.length - (a ? t.length : i)).map((l) => {
          const u = l.message;
          return u({ id: l.id });
        }),
        e.length > i && /* @__PURE__ */ r(
          v,
          {
            variant: "link",
            onClick: () => s(!0),
            children: "View All"
          }
        )
      ]
    }
  );
};
export {
  P as Notifications,
  M as Toast
};
