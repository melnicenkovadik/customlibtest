import * as n from "react";
import { composeEventHandlers as _ } from "./my-component-library128.js";
import { useComposedRefs as H } from "./my-component-library127.js";
import { createContextScope as I } from "./my-component-library123.js";
import { useControllableState as M } from "./my-component-library129.js";
import { usePrevious as N } from "./my-component-library130.js";
import { useSize as j } from "./my-component-library131.js";
import { Primitive as w } from "./my-component-library126.js";
import { jsxs as B, jsx as m } from "react/jsx-runtime";
var S = "Switch", [q, K] = I(S), [z, A] = q(S), C = n.forwardRef(
  (e, s) => {
    const {
      __scopeSwitch: t,
      name: o,
      checked: r,
      defaultChecked: p,
      required: a,
      disabled: c,
      value: i = "on",
      onCheckedChange: f,
      form: b,
      ...u
    } = e, [d, R] = n.useState(null), g = H(s, (h) => R(h)), v = n.useRef(!1), k = d ? b || !!d.closest("form") : !0, [l = !1, E] = M({
      prop: r,
      defaultProp: p,
      onChange: f
    });
    return /* @__PURE__ */ B(z, { scope: t, checked: l, disabled: c, children: [
      /* @__PURE__ */ m(
        w.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": l,
          "aria-required": a,
          "data-state": x(l),
          "data-disabled": c ? "" : void 0,
          disabled: c,
          value: i,
          ...u,
          ref: g,
          onClick: _(e.onClick, (h) => {
            E((T) => !T), k && (v.current = h.isPropagationStopped(), v.current || h.stopPropagation());
          })
        }
      ),
      k && /* @__PURE__ */ m(
        O,
        {
          control: d,
          bubbles: !v.current,
          name: o,
          value: i,
          checked: l,
          required: a,
          disabled: c,
          form: b,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
C.displayName = S;
var P = "SwitchThumb", y = n.forwardRef(
  (e, s) => {
    const { __scopeSwitch: t, ...o } = e, r = A(P, t);
    return /* @__PURE__ */ m(
      w.span,
      {
        "data-state": x(r.checked),
        "data-disabled": r.disabled ? "" : void 0,
        ...o,
        ref: s
      }
    );
  }
);
y.displayName = P;
var O = (e) => {
  const { control: s, checked: t, bubbles: o = !0, ...r } = e, p = n.useRef(null), a = N(t), c = j(s);
  return n.useEffect(() => {
    const i = p.current, f = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(f, "checked").set;
    if (a !== t && u) {
      const d = new Event("click", { bubbles: o });
      u.call(i, t), i.dispatchEvent(d);
    }
  }, [a, t, o]), /* @__PURE__ */ m(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: t,
      ...r,
      tabIndex: -1,
      ref: p,
      style: {
        ...e.style,
        ...c,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function x(e) {
  return e ? "checked" : "unchecked";
}
var Q = C, V = y;
export {
  Q as Root,
  C as Switch,
  y as SwitchThumb,
  V as Thumb,
  K as createSwitchScope
};
