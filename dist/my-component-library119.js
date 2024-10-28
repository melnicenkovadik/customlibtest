import * as s from "react";
import { composeEventHandlers as g } from "./my-component-library128.js";
import { useComposedRefs as N } from "./my-component-library127.js";
import { createContextScope as K } from "./my-component-library123.js";
import { DismissableLayer as W } from "./my-component-library144.js";
import { useId as $ } from "./my-component-library136.js";
import { createPopperScope as S, Anchor as z, Content as J, Arrow as Q, Root as Z } from "./my-component-library155.js";
import { Portal as ee } from "./my-component-library146.js";
import { Presence as G } from "./my-component-library132.js";
import { Primitive as te } from "./my-component-library126.js";
import { Slottable as oe } from "./my-component-library60.js";
import { useControllableState as re } from "./my-component-library129.js";
import { Root as ne } from "./my-component-library163.js";
import { jsx as p, jsxs as se } from "react/jsx-runtime";
var [_, Me] = K("Tooltip", [
  S
]), D = S(), F = "TooltipProvider", ae = 700, L = "tooltip.open", [ie, k] = _(F), j = (t) => {
  const {
    __scopeTooltip: o,
    delayDuration: e = ae,
    skipDelayDuration: r = 300,
    disableHoverableContent: n = !1,
    children: i
  } = t, [c, f] = s.useState(!0), a = s.useRef(!1), u = s.useRef(0);
  return s.useEffect(() => {
    const l = u.current;
    return () => window.clearTimeout(l);
  }, []), /* @__PURE__ */ p(
    ie,
    {
      scope: o,
      isOpenDelayed: c,
      delayDuration: e,
      onOpen: s.useCallback(() => {
        window.clearTimeout(u.current), f(!1);
      }, []),
      onClose: s.useCallback(() => {
        window.clearTimeout(u.current), u.current = window.setTimeout(
          () => f(!0),
          r
        );
      }, [r]),
      isPointerInTransitRef: a,
      onPointerInTransitChange: s.useCallback((l) => {
        a.current = l;
      }, []),
      disableHoverableContent: n,
      children: i
    }
  );
};
j.displayName = F;
var O = "Tooltip", [le, R] = _(O), B = (t) => {
  const {
    __scopeTooltip: o,
    children: e,
    open: r,
    defaultOpen: n = !1,
    onOpenChange: i,
    disableHoverableContent: c,
    delayDuration: f
  } = t, a = k(O, t.__scopeTooltip), u = D(o), [l, d] = s.useState(null), m = $(), v = s.useRef(0), h = c ?? a.disableHoverableContent, y = f ?? a.delayDuration, T = s.useRef(!1), [x = !1, C] = re({
    prop: r,
    defaultProp: n,
    onChange: (H) => {
      H ? (a.onOpen(), document.dispatchEvent(new CustomEvent(L))) : a.onClose(), i == null || i(H);
    }
  }), w = s.useMemo(() => x ? T.current ? "delayed-open" : "instant-open" : "closed", [x]), P = s.useCallback(() => {
    window.clearTimeout(v.current), T.current = !1, C(!0);
  }, [C]), E = s.useCallback(() => {
    window.clearTimeout(v.current), C(!1);
  }, [C]), M = s.useCallback(() => {
    window.clearTimeout(v.current), v.current = window.setTimeout(() => {
      T.current = !0, C(!0);
    }, y);
  }, [y, C]);
  return s.useEffect(() => () => window.clearTimeout(v.current), []), /* @__PURE__ */ p(Z, { ...u, children: /* @__PURE__ */ p(
    le,
    {
      scope: o,
      contentId: m,
      open: x,
      stateAttribute: w,
      trigger: l,
      onTriggerChange: d,
      onTriggerEnter: s.useCallback(() => {
        a.isOpenDelayed ? M() : P();
      }, [a.isOpenDelayed, M, P]),
      onTriggerLeave: s.useCallback(() => {
        h ? E() : window.clearTimeout(v.current);
      }, [E, h]),
      onOpen: P,
      onClose: E,
      disableHoverableContent: h,
      children: e
    }
  ) });
};
B.displayName = O;
var A = "TooltipTrigger", U = s.forwardRef(
  (t, o) => {
    const { __scopeTooltip: e, ...r } = t, n = R(A, e), i = k(A, e), c = D(e), f = s.useRef(null), a = N(o, f, n.onTriggerChange), u = s.useRef(!1), l = s.useRef(!1), d = s.useCallback(() => u.current = !1, []);
    return s.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ p(z, { asChild: !0, ...c, children: /* @__PURE__ */ p(
      te.button,
      {
        "aria-describedby": n.open ? n.contentId : void 0,
        "data-state": n.stateAttribute,
        ...r,
        ref: a,
        onPointerMove: g(t.onPointerMove, (m) => {
          m.pointerType !== "touch" && !l.current && !i.isPointerInTransitRef.current && (n.onTriggerEnter(), l.current = !0);
        }),
        onPointerLeave: g(t.onPointerLeave, () => {
          n.onTriggerLeave(), l.current = !1;
        }),
        onPointerDown: g(t.onPointerDown, () => {
          u.current = !0, document.addEventListener("pointerup", d, { once: !0 });
        }),
        onFocus: g(t.onFocus, () => {
          u.current || n.onOpen();
        }),
        onBlur: g(t.onBlur, n.onClose),
        onClick: g(t.onClick, n.onClose)
      }
    ) });
  }
);
U.displayName = A;
var I = "TooltipPortal", [ce, ue] = _(I, {
  forceMount: void 0
}), V = (t) => {
  const { __scopeTooltip: o, forceMount: e, children: r, container: n } = t, i = R(I, o);
  return /* @__PURE__ */ p(ce, { scope: o, forceMount: e, children: /* @__PURE__ */ p(G, { present: e || i.open, children: /* @__PURE__ */ p(ee, { asChild: !0, container: n, children: r }) }) });
};
V.displayName = I;
var b = "TooltipContent", Y = s.forwardRef(
  (t, o) => {
    const e = ue(b, t.__scopeTooltip), { forceMount: r = e.forceMount, side: n = "top", ...i } = t, c = R(b, t.__scopeTooltip);
    return /* @__PURE__ */ p(G, { present: r || c.open, children: c.disableHoverableContent ? /* @__PURE__ */ p(q, { side: n, ...i, ref: o }) : /* @__PURE__ */ p(pe, { side: n, ...i, ref: o }) });
  }
), pe = s.forwardRef((t, o) => {
  const e = R(b, t.__scopeTooltip), r = k(b, t.__scopeTooltip), n = s.useRef(null), i = N(o, n), [c, f] = s.useState(null), { trigger: a, onClose: u } = e, l = n.current, { onPointerInTransitChange: d } = r, m = s.useCallback(() => {
    f(null), d(!1);
  }, [d]), v = s.useCallback(
    (h, y) => {
      const T = h.currentTarget, x = { x: h.clientX, y: h.clientY }, C = he(x, T.getBoundingClientRect()), w = me(x, C), P = Te(y.getBoundingClientRect()), E = Ce([...w, ...P]);
      f(E), d(!0);
    },
    [d]
  );
  return s.useEffect(() => () => m(), [m]), s.useEffect(() => {
    if (a && l) {
      const h = (T) => v(T, l), y = (T) => v(T, a);
      return a.addEventListener("pointerleave", h), l.addEventListener("pointerleave", y), () => {
        a.removeEventListener("pointerleave", h), l.removeEventListener("pointerleave", y);
      };
    }
  }, [a, l, v, m]), s.useEffect(() => {
    if (c) {
      const h = (y) => {
        const T = y.target, x = { x: y.clientX, y: y.clientY }, C = (a == null ? void 0 : a.contains(T)) || (l == null ? void 0 : l.contains(T)), w = !ye(x, c);
        C ? m() : w && (m(), u());
      };
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [a, l, c, u, m]), /* @__PURE__ */ p(q, { ...t, ref: i });
}), [de, fe] = _(O, { isInside: !1 }), q = s.forwardRef(
  (t, o) => {
    const {
      __scopeTooltip: e,
      children: r,
      "aria-label": n,
      onEscapeKeyDown: i,
      onPointerDownOutside: c,
      ...f
    } = t, a = R(b, e), u = D(e), { onClose: l } = a;
    return s.useEffect(() => (document.addEventListener(L, l), () => document.removeEventListener(L, l)), [l]), s.useEffect(() => {
      if (a.trigger) {
        const d = (m) => {
          const v = m.target;
          v != null && v.contains(a.trigger) && l();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [a.trigger, l]), /* @__PURE__ */ p(
      W,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: c,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: l,
        children: /* @__PURE__ */ se(
          J,
          {
            "data-state": a.stateAttribute,
            ...u,
            ...f,
            ref: o,
            style: {
              ...f.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ p(oe, { children: r }),
              /* @__PURE__ */ p(de, { scope: e, isInside: !0, children: /* @__PURE__ */ p(ne, { id: a.contentId, role: "tooltip", children: n || r }) })
            ]
          }
        )
      }
    );
  }
);
Y.displayName = b;
var X = "TooltipArrow", ve = s.forwardRef(
  (t, o) => {
    const { __scopeTooltip: e, ...r } = t, n = D(e);
    return fe(
      X,
      e
    ).isInside ? null : /* @__PURE__ */ p(Q, { ...n, ...r, ref: o });
  }
);
ve.displayName = X;
function he(t, o) {
  const e = Math.abs(o.top - t.y), r = Math.abs(o.bottom - t.y), n = Math.abs(o.right - t.x), i = Math.abs(o.left - t.x);
  switch (Math.min(e, r, n, i)) {
    case i:
      return "left";
    case n:
      return "right";
    case e:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function me(t, o, e = 5) {
  const r = [];
  switch (o) {
    case "top":
      r.push(
        { x: t.x - e, y: t.y + e },
        { x: t.x + e, y: t.y + e }
      );
      break;
    case "bottom":
      r.push(
        { x: t.x - e, y: t.y - e },
        { x: t.x + e, y: t.y - e }
      );
      break;
    case "left":
      r.push(
        { x: t.x + e, y: t.y - e },
        { x: t.x + e, y: t.y + e }
      );
      break;
    case "right":
      r.push(
        { x: t.x - e, y: t.y - e },
        { x: t.x - e, y: t.y + e }
      );
      break;
  }
  return r;
}
function Te(t) {
  const { top: o, right: e, bottom: r, left: n } = t;
  return [
    { x: n, y: o },
    { x: e, y: o },
    { x: e, y: r },
    { x: n, y: r }
  ];
}
function ye(t, o) {
  const { x: e, y: r } = t;
  let n = !1;
  for (let i = 0, c = o.length - 1; i < o.length; c = i++) {
    const f = o[i].x, a = o[i].y, u = o[c].x, l = o[c].y;
    a > r != l > r && e < (u - f) * (r - a) / (l - a) + f && (n = !n);
  }
  return n;
}
function Ce(t) {
  const o = t.slice();
  return o.sort((e, r) => e.x < r.x ? -1 : e.x > r.x ? 1 : e.y < r.y ? -1 : e.y > r.y ? 1 : 0), xe(o);
}
function xe(t) {
  if (t.length <= 1) return t.slice();
  const o = [];
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    for (; o.length >= 2; ) {
      const i = o[o.length - 1], c = o[o.length - 2];
      if ((i.x - c.x) * (n.y - c.y) >= (i.y - c.y) * (n.x - c.x)) o.pop();
      else break;
    }
    o.push(n);
  }
  o.pop();
  const e = [];
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    for (; e.length >= 2; ) {
      const i = e[e.length - 1], c = e[e.length - 2];
      if ((i.x - c.x) * (n.y - c.y) >= (i.y - c.y) * (n.x - c.x)) e.pop();
      else break;
    }
    e.push(n);
  }
  return e.pop(), o.length === 1 && e.length === 1 && o[0].x === e[0].x && o[0].y === e[0].y ? o : o.concat(e);
}
var He = j, Ne = B, Se = U, Ge = V, Fe = Y;
export {
  Fe as Content,
  Ge as Portal,
  He as Provider,
  Ne as Root,
  B as Tooltip,
  ve as TooltipArrow,
  Y as TooltipContent,
  V as TooltipPortal,
  j as TooltipProvider,
  U as TooltipTrigger,
  Se as Trigger,
  Me as createTooltipScope
};
