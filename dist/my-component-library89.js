import * as u from "react";
import { composeEventHandlers as m } from "./my-component-library128.js";
import { composeRefs as K } from "./my-component-library127.js";
import { createContextScope as U } from "./my-component-library123.js";
import { useControllableState as g } from "./my-component-library129.js";
import { Primitive as B } from "./my-component-library126.js";
import { createMenuScope as D, Anchor as F, Content as H, Group as W, Label as $, Item as j, CheckboxItem as X, RadioGroup as q, RadioItem as z, ItemIndicator as J, Separator as Q, Arrow as V, SubTrigger as Y, SubContent as Z, Root as oo, Portal as eo, Sub as ro } from "./my-component-library152.js";
import { useId as M } from "./my-component-library136.js";
import { jsx as t } from "react/jsx-runtime";
var v = "DropdownMenu", [no, xo] = U(
  v,
  [D]
), i = D(), [ao, _] = no(v), h = (o) => {
  const {
    __scopeDropdownMenu: n,
    children: r,
    dir: e,
    open: a,
    defaultOpen: d,
    onOpenChange: c,
    modal: p = !0
  } = o, s = i(n), f = u.useRef(null), [l = !1, w] = g({
    prop: a,
    defaultProp: d,
    onChange: c
  });
  return /* @__PURE__ */ t(
    ao,
    {
      scope: n,
      triggerId: M(),
      triggerRef: f,
      contentId: M(),
      open: l,
      onOpenChange: w,
      onOpenToggle: u.useCallback(() => w((L) => !L), [w]),
      modal: p,
      children: /* @__PURE__ */ t(oo, { ...s, open: l, onOpenChange: w, dir: e, modal: p, children: r })
    }
  );
};
h.displayName = v;
var R = "DropdownMenuTrigger", I = u.forwardRef(
  (o, n) => {
    const { __scopeDropdownMenu: r, disabled: e = !1, ...a } = o, d = _(R, r), c = i(r);
    return /* @__PURE__ */ t(F, { asChild: !0, ...c, children: /* @__PURE__ */ t(
      B.button,
      {
        type: "button",
        id: d.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": d.open,
        "aria-controls": d.open ? d.contentId : void 0,
        "data-state": d.open ? "open" : "closed",
        "data-disabled": e ? "" : void 0,
        disabled: e,
        ...a,
        ref: K(n, d.triggerRef),
        onPointerDown: m(o.onPointerDown, (p) => {
          !e && p.button === 0 && p.ctrlKey === !1 && (d.onOpenToggle(), d.open || p.preventDefault());
        }),
        onKeyDown: m(o.onKeyDown, (p) => {
          e || (["Enter", " "].includes(p.key) && d.onOpenToggle(), p.key === "ArrowDown" && d.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(p.key) && p.preventDefault());
        })
      }
    ) });
  }
);
I.displayName = R;
var to = "DropdownMenuPortal", b = (o) => {
  const { __scopeDropdownMenu: n, ...r } = o, e = i(n);
  return /* @__PURE__ */ t(eo, { ...e, ...r });
};
b.displayName = to;
var S = "DropdownMenuContent", C = u.forwardRef(
  (o, n) => {
    const { __scopeDropdownMenu: r, ...e } = o, a = _(S, r), d = i(r), c = u.useRef(!1);
    return /* @__PURE__ */ t(
      H,
      {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...d,
        ...e,
        ref: n,
        onCloseAutoFocus: m(o.onCloseAutoFocus, (p) => {
          var s;
          c.current || (s = a.triggerRef.current) == null || s.focus(), c.current = !1, p.preventDefault();
        }),
        onInteractOutside: m(o.onInteractOutside, (p) => {
          const s = p.detail.originalEvent, f = s.button === 0 && s.ctrlKey === !0, l = s.button === 2 || f;
          (!a.modal || l) && (c.current = !0);
        }),
        style: {
          ...o.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
C.displayName = S;
var po = "DropdownMenuGroup", N = u.forwardRef(
  (o, n) => {
    const { __scopeDropdownMenu: r, ...e } = o, a = i(r);
    return /* @__PURE__ */ t(W, { ...a, ...e, ref: n });
  }
);
N.displayName = po;
var uo = "DropdownMenuLabel", x = u.forwardRef(
  (o, n) => {
    const { __scopeDropdownMenu: r, ...e } = o, a = i(r);
    return /* @__PURE__ */ t($, { ...a, ...e, ref: n });
  }
);
x.displayName = uo;
var io = "DropdownMenuItem", A = u.forwardRef(
  (o, n) => {
    const { __scopeDropdownMenu: r, ...e } = o, a = i(r);
    return /* @__PURE__ */ t(j, { ...a, ...e, ref: n });
  }
);
A.displayName = io;
var so = "DropdownMenuCheckboxItem", P = u.forwardRef((o, n) => {
  const { __scopeDropdownMenu: r, ...e } = o, a = i(r);
  return /* @__PURE__ */ t(X, { ...a, ...e, ref: n });
});
P.displayName = so;
var co = "DropdownMenuRadioGroup", E = u.forwardRef((o, n) => {
  const { __scopeDropdownMenu: r, ...e } = o, a = i(r);
  return /* @__PURE__ */ t(q, { ...a, ...e, ref: n });
});
E.displayName = co;
var lo = "DropdownMenuRadioItem", O = u.forwardRef((o, n) => {
  const { __scopeDropdownMenu: r, ...e } = o, a = i(r);
  return /* @__PURE__ */ t(z, { ...a, ...e, ref: n });
});
O.displayName = lo;
var wo = "DropdownMenuItemIndicator", y = u.forwardRef((o, n) => {
  const { __scopeDropdownMenu: r, ...e } = o, a = i(r);
  return /* @__PURE__ */ t(J, { ...a, ...e, ref: n });
});
y.displayName = wo;
var mo = "DropdownMenuSeparator", T = u.forwardRef((o, n) => {
  const { __scopeDropdownMenu: r, ...e } = o, a = i(r);
  return /* @__PURE__ */ t(Q, { ...a, ...e, ref: n });
});
T.displayName = mo;
var fo = "DropdownMenuArrow", vo = u.forwardRef(
  (o, n) => {
    const { __scopeDropdownMenu: r, ...e } = o, a = i(r);
    return /* @__PURE__ */ t(V, { ...a, ...e, ref: n });
  }
);
vo.displayName = fo;
var Mo = (o) => {
  const { __scopeDropdownMenu: n, children: r, open: e, onOpenChange: a, defaultOpen: d } = o, c = i(n), [p = !1, s] = g({
    prop: e,
    defaultProp: d,
    onChange: a
  });
  return /* @__PURE__ */ t(ro, { ...c, open: p, onOpenChange: s, children: r });
}, go = "DropdownMenuSubTrigger", G = u.forwardRef((o, n) => {
  const { __scopeDropdownMenu: r, ...e } = o, a = i(r);
  return /* @__PURE__ */ t(Y, { ...a, ...e, ref: n });
});
G.displayName = go;
var Do = "DropdownMenuSubContent", k = u.forwardRef((o, n) => {
  const { __scopeDropdownMenu: r, ...e } = o, a = i(r);
  return /* @__PURE__ */ t(
    Z,
    {
      ...a,
      ...e,
      ref: n,
      style: {
        ...o.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
k.displayName = Do;
var Ao = h, Po = I, Eo = b, Oo = C, yo = N, To = x, Go = A, ko = P, Lo = E, Ko = O, Uo = y, Bo = T, Fo = Mo, Ho = G, Wo = k;
export {
  ko as CheckboxItem,
  Oo as Content,
  h as DropdownMenu,
  vo as DropdownMenuArrow,
  P as DropdownMenuCheckboxItem,
  C as DropdownMenuContent,
  N as DropdownMenuGroup,
  A as DropdownMenuItem,
  y as DropdownMenuItemIndicator,
  x as DropdownMenuLabel,
  b as DropdownMenuPortal,
  E as DropdownMenuRadioGroup,
  O as DropdownMenuRadioItem,
  T as DropdownMenuSeparator,
  Mo as DropdownMenuSub,
  k as DropdownMenuSubContent,
  G as DropdownMenuSubTrigger,
  I as DropdownMenuTrigger,
  yo as Group,
  Go as Item,
  Uo as ItemIndicator,
  To as Label,
  Eo as Portal,
  Lo as RadioGroup,
  Ko as RadioItem,
  Ao as Root,
  Bo as Separator,
  Fo as Sub,
  Wo as SubContent,
  Ho as SubTrigger,
  Po as Trigger,
  xo as createDropdownMenuScope
};
