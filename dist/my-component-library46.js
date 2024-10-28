import { jsx as t, Fragment as o, jsxs as s } from "react/jsx-runtime";
import { cloneElement as g } from "react";
import { cn as a } from "./my-component-library58.js";
const d = ({
  isCollapsed: r,
  contentOpen: e,
  contentCollapsed: n
}) => /* @__PURE__ */ t(o, { children: r ? n : e }), f = ({
  originalTrigger: r,
  isCollapsed: e,
  onClick: n
}) => {
  const i = g(r, {
    onClick: n,
    isCollapsed: e
  });
  return /* @__PURE__ */ t(o, { children: i });
}, u = ({
  isCollapsed: r,
  toggleSidebar: e,
  contentOpen: n,
  contentCollapsed: i,
  className: c,
  trigger: m,
  ...l
}) => /* @__PURE__ */ s(
  "aside",
  {
    className: a("relative flex", c),
    ...l,
    children: [
      /* @__PURE__ */ t(
        f,
        {
          originalTrigger: m,
          isCollapsed: r,
          onClick: e
        }
      ),
      /* @__PURE__ */ t(
        d,
        {
          isCollapsed: r,
          contentOpen: n,
          contentCollapsed: i
        }
      )
    ]
  }
);
export {
  u as Sidebar,
  d as SidebarContent
};
