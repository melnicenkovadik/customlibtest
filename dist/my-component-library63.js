import * as n from "react";
import { useComposedRefs as M } from "./my-component-library127.js";
import { createContextScope as O } from "./my-component-library123.js";
import { composeEventHandlers as S } from "./my-component-library128.js";
import { useControllableState as j } from "./my-component-library129.js";
import { usePrevious as A } from "./my-component-library130.js";
import { useSize as B } from "./my-component-library131.js";
import { Presence as H } from "./my-component-library132.js";
import { Primitive as I } from "./my-component-library126.js";
import { jsxs as K, jsx as h } from "react/jsx-runtime";
var P = "Checkbox", [L, Z] = O(P), [q, z] = L(P), g = n.forwardRef(
  (e, f) => {
    const {
      __scopeCheckbox: t,
      name: i,
      checked: l,
      defaultChecked: r,
      required: p,
      disabled: a,
      value: k = "on",
      onCheckedChange: b,
      form: d,
      ...v
    } = e, [c, C] = n.useState(null), x = M(f, (o) => C(o)), y = n.useRef(!1), R = c ? d || !!c.closest("form") : !0, [u = !1, E] = j({
      prop: l,
      defaultProp: r,
      onChange: b
    }), N = n.useRef(u);
    return n.useEffect(() => {
      const o = c == null ? void 0 : c.form;
      if (o) {
        const m = () => E(N.current);
        return o.addEventListener("reset", m), () => o.removeEventListener("reset", m);
      }
    }, [c, E]), /* @__PURE__ */ K(q, { scope: t, state: u, disabled: a, children: [
      /* @__PURE__ */ h(
        I.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": s(u) ? "mixed" : u,
          "aria-required": p,
          "data-state": D(u),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: k,
          ...v,
          ref: x,
          onKeyDown: S(e.onKeyDown, (o) => {
            o.key === "Enter" && o.preventDefault();
          }),
          onClick: S(e.onClick, (o) => {
            E((m) => s(m) ? !0 : !m), R && (y.current = o.isPropagationStopped(), y.current || o.stopPropagation());
          })
        }
      ),
      R && /* @__PURE__ */ h(
        T,
        {
          control: c,
          bubbles: !y.current,
          name: i,
          value: k,
          checked: u,
          required: p,
          disabled: a,
          form: d,
          style: { transform: "translateX(-100%)" },
          defaultChecked: s(r) ? !1 : r
        }
      )
    ] });
  }
);
g.displayName = P;
var w = "CheckboxIndicator", _ = n.forwardRef(
  (e, f) => {
    const { __scopeCheckbox: t, forceMount: i, ...l } = e, r = z(w, t);
    return /* @__PURE__ */ h(H, { present: i || s(r.state) || r.state === !0, children: /* @__PURE__ */ h(
      I.span,
      {
        "data-state": D(r.state),
        "data-disabled": r.disabled ? "" : void 0,
        ...l,
        ref: f,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
_.displayName = w;
var T = (e) => {
  const { control: f, checked: t, bubbles: i = !0, defaultChecked: l, ...r } = e, p = n.useRef(null), a = A(t), k = B(f);
  n.useEffect(() => {
    const d = p.current, v = window.HTMLInputElement.prototype, C = Object.getOwnPropertyDescriptor(v, "checked").set;
    if (a !== t && C) {
      const x = new Event("click", { bubbles: i });
      d.indeterminate = s(t), C.call(d, s(t) ? !1 : t), d.dispatchEvent(x);
    }
  }, [a, t, i]);
  const b = n.useRef(s(t) ? !1 : t);
  return /* @__PURE__ */ h(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: l ?? b.current,
      ...r,
      tabIndex: -1,
      ref: p,
      style: {
        ...e.style,
        ...k,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function s(e) {
  return e === "indeterminate";
}
function D(e) {
  return s(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var $ = g, ee = _;
export {
  g as Checkbox,
  _ as CheckboxIndicator,
  ee as Indicator,
  $ as Root,
  Z as createCheckboxScope
};
