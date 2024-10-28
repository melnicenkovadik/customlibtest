import * as v from "react";
import { composeEventHandlers as p } from "./my-component-library128.js";
import { createContextScope as x } from "./my-component-library123.js";
import { createRovingFocusGroupScope as C, Root as E, Item as F } from "./my-component-library134.js";
import { Presence as w } from "./my-component-library132.js";
import { Primitive as b } from "./my-component-library126.js";
import { useDirection as D } from "./my-component-library135.js";
import { useControllableState as V } from "./my-component-library129.js";
import { useId as G } from "./my-component-library136.js";
import { jsx as u } from "react/jsx-runtime";
var g = "Tabs", [L, Q] = x(g, [
  C
]), h = C(), [$, T] = L(g), I = v.forwardRef(
  (e, r) => {
    const {
      __scopeTabs: s,
      value: t,
      onValueChange: n,
      defaultValue: c,
      orientation: o = "horizontal",
      dir: d,
      activationMode: f = "automatic",
      ...m
    } = e, i = D(d), [a, l] = V({
      prop: t,
      onChange: n,
      defaultProp: c
    });
    return /* @__PURE__ */ u(
      $,
      {
        scope: s,
        baseId: G(),
        value: a,
        onValueChange: l,
        orientation: o,
        dir: i,
        activationMode: f,
        children: /* @__PURE__ */ u(
          b.div,
          {
            dir: i,
            "data-orientation": o,
            ...m,
            ref: r
          }
        )
      }
    );
  }
);
I.displayName = g;
var R = "TabsList", _ = v.forwardRef(
  (e, r) => {
    const { __scopeTabs: s, loop: t = !0, ...n } = e, c = T(R, s), o = h(s);
    return /* @__PURE__ */ u(
      E,
      {
        asChild: !0,
        ...o,
        orientation: c.orientation,
        dir: c.dir,
        loop: t,
        children: /* @__PURE__ */ u(
          b.div,
          {
            role: "tablist",
            "aria-orientation": c.orientation,
            ...n,
            ref: r
          }
        )
      }
    );
  }
);
_.displayName = R;
var y = "TabsTrigger", A = v.forwardRef(
  (e, r) => {
    const { __scopeTabs: s, value: t, disabled: n = !1, ...c } = e, o = T(y, s), d = h(s), f = N(o.baseId, t), m = P(o.baseId, t), i = t === o.value;
    return /* @__PURE__ */ u(
      F,
      {
        asChild: !0,
        ...d,
        focusable: !n,
        active: i,
        children: /* @__PURE__ */ u(
          b.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": i,
            "aria-controls": m,
            "data-state": i ? "active" : "inactive",
            "data-disabled": n ? "" : void 0,
            disabled: n,
            id: f,
            ...c,
            ref: r,
            onMouseDown: p(e.onMouseDown, (a) => {
              !n && a.button === 0 && a.ctrlKey === !1 ? o.onValueChange(t) : a.preventDefault();
            }),
            onKeyDown: p(e.onKeyDown, (a) => {
              [" ", "Enter"].includes(a.key) && o.onValueChange(t);
            }),
            onFocus: p(e.onFocus, () => {
              const a = o.activationMode !== "manual";
              !i && !n && a && o.onValueChange(t);
            })
          }
        )
      }
    );
  }
);
A.displayName = y;
var S = "TabsContent", M = v.forwardRef(
  (e, r) => {
    const { __scopeTabs: s, value: t, forceMount: n, children: c, ...o } = e, d = T(S, s), f = N(d.baseId, t), m = P(d.baseId, t), i = t === d.value, a = v.useRef(i);
    return v.useEffect(() => {
      const l = requestAnimationFrame(() => a.current = !1);
      return () => cancelAnimationFrame(l);
    }, []), /* @__PURE__ */ u(w, { present: n || i, children: ({ present: l }) => /* @__PURE__ */ u(
      b.div,
      {
        "data-state": i ? "active" : "inactive",
        "data-orientation": d.orientation,
        role: "tabpanel",
        "aria-labelledby": f,
        hidden: !l,
        id: m,
        tabIndex: 0,
        ...o,
        ref: r,
        style: {
          ...e.style,
          animationDuration: a.current ? "0s" : void 0
        },
        children: l && c
      }
    ) });
  }
);
M.displayName = S;
function N(e, r) {
  return `${e}-trigger-${r}`;
}
function P(e, r) {
  return `${e}-content-${r}`;
}
var U = I, W = _, X = A, Y = M;
export {
  Y as Content,
  W as List,
  U as Root,
  I as Tabs,
  M as TabsContent,
  _ as TabsList,
  A as TabsTrigger,
  X as Trigger,
  Q as createTabsScope
};
