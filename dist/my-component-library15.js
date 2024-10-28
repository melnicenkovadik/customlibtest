import { jsx as s, jsxs as l } from "react/jsx-runtime";
import { createContext as u, forwardRef as o, useContext as b } from "react";
import { Root as g, List as x, Trigger as d, Content as v } from "./my-component-library73.js";
import { cn as n } from "./my-component-library58.js";
import { tabsRootVariants as p, tabsVariants as N, tabsTriggerVariants as T } from "./my-component-library74.js";
const m = u({
  variant: "default"
}), f = () => b(m), y = o(({ variant: t = "default", className: e, children: r, ...a }, i) => /* @__PURE__ */ s(m.Provider, { value: { variant: t }, children: /* @__PURE__ */ s(
  g,
  {
    ref: i,
    className: n(p({ variant: t }), e),
    ...a,
    children: r
  }
) })), L = o(({ className: t, ...e }, r) => {
  const { variant: a } = f();
  return /* @__PURE__ */ s(
    x,
    {
      ref: r,
      className: n(N({ variant: a }), t),
      ...e
    }
  );
}), h = ({
  details: t,
  variant: e
}) => /* @__PURE__ */ l("span", { className: "relative mt-1 text-xl text-secondary-text", children: [
  t,
  e === "vertical" && /* @__PURE__ */ s("div", { className: "bottom-0 left-0 right-0 mt-1 h-[2px] w-[50px] bg-border group-data-[state=active]:bg-secondary-text" })
] }), k = o(({ className: t, details: e, children: r, ...a }, i) => {
  const { variant: c } = f();
  return /* @__PURE__ */ s(
    d,
    {
      ref: i,
      className: n(T({ variant: c }), t),
      ...a,
      children: /* @__PURE__ */ l("div", { className: "flex flex-col", children: [
        r,
        e && /* @__PURE__ */ s(
          h,
          {
            details: e,
            variant: c
          }
        )
      ] })
    }
  );
}), D = o(({ className: t, ...e }, r) => /* @__PURE__ */ s(
  v,
  {
    ref: r,
    className: n(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      t
    ),
    ...e
  }
));
export {
  y as Tabs,
  D as TabsContent,
  L as TabsList,
  k as TabsTrigger
};
