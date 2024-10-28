import * as o from "react";
import { composeEventHandlers as T } from "./my-component-library128.js";
import { createContextScope as S } from "./my-component-library123.js";
import { useControllableState as D } from "./my-component-library129.js";
import { useLayoutEffect as L } from "./my-component-library125.js";
import { useComposedRefs as M } from "./my-component-library127.js";
import { Primitive as b } from "./my-component-library126.js";
import { Presence as k } from "./my-component-library132.js";
import { useId as F } from "./my-component-library136.js";
import { jsx as c } from "react/jsx-runtime";
var v = "Collapsible", [B, W] = S(v), [G, g] = B(v), w = o.forwardRef(
  (e, a) => {
    const {
      __scopeCollapsible: i,
      open: r,
      defaultOpen: t,
      disabled: l,
      onOpenChange: s,
      ...u
    } = e, [d = !1, p] = D({
      prop: r,
      defaultProp: t,
      onChange: s
    });
    return /* @__PURE__ */ c(
      G,
      {
        scope: i,
        disabled: l,
        contentId: F(),
        open: d,
        onOpenToggle: o.useCallback(() => p((m) => !m), [p]),
        children: /* @__PURE__ */ c(
          b.div,
          {
            "data-state": h(d),
            "data-disabled": l ? "" : void 0,
            ...u,
            ref: a
          }
        )
      }
    );
  }
);
w.displayName = v;
var A = "CollapsibleTrigger", I = o.forwardRef(
  (e, a) => {
    const { __scopeCollapsible: i, ...r } = e, t = g(A, i);
    return /* @__PURE__ */ c(
      b.button,
      {
        type: "button",
        "aria-controls": t.contentId,
        "aria-expanded": t.open || !1,
        "data-state": h(t.open),
        "data-disabled": t.disabled ? "" : void 0,
        disabled: t.disabled,
        ...r,
        ref: a,
        onClick: T(e.onClick, t.onOpenToggle)
      }
    );
  }
);
I.displayName = A;
var R = "CollapsibleContent", O = o.forwardRef(
  (e, a) => {
    const { forceMount: i, ...r } = e, t = g(R, e.__scopeCollapsible);
    return /* @__PURE__ */ c(k, { present: i || t.open, children: ({ present: l }) => /* @__PURE__ */ c($, { ...r, ref: a, present: l }) });
  }
);
O.displayName = R;
var $ = o.forwardRef((e, a) => {
  const { __scopeCollapsible: i, present: r, children: t, ...l } = e, s = g(R, i), [u, d] = o.useState(r), p = o.useRef(null), m = M(a, p), y = o.useRef(0), x = y.current, N = o.useRef(0), P = N.current, C = s.open || u, _ = o.useRef(C), f = o.useRef();
  return o.useEffect(() => {
    const n = requestAnimationFrame(() => _.current = !1);
    return () => cancelAnimationFrame(n);
  }, []), L(() => {
    const n = p.current;
    if (n) {
      f.current = f.current || {
        transitionDuration: n.style.transitionDuration,
        animationName: n.style.animationName
      }, n.style.transitionDuration = "0s", n.style.animationName = "none";
      const E = n.getBoundingClientRect();
      y.current = E.height, N.current = E.width, _.current || (n.style.transitionDuration = f.current.transitionDuration, n.style.animationName = f.current.animationName), d(r);
    }
  }, [s.open, r]), /* @__PURE__ */ c(
    b.div,
    {
      "data-state": h(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      id: s.contentId,
      hidden: !C,
      ...l,
      ref: m,
      style: {
        "--radix-collapsible-content-height": x ? `${x}px` : void 0,
        "--radix-collapsible-content-width": P ? `${P}px` : void 0,
        ...e.style
      },
      children: C && t
    }
  );
});
function h(e) {
  return e ? "open" : "closed";
}
var X = w, Y = I, Z = O;
export {
  w as Collapsible,
  O as CollapsibleContent,
  I as CollapsibleTrigger,
  Z as Content,
  X as Root,
  Y as Trigger,
  W as createCollapsibleScope
};
