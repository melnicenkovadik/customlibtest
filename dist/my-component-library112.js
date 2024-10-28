import * as i from "react";
import { composeEventHandlers as P } from "./my-component-library128.js";
import { useComposedRefs as O } from "./my-component-library127.js";
import { createContextScope as H } from "./my-component-library123.js";
import { DismissableLayer as K } from "./my-component-library144.js";
import { useFocusGuards as $ } from "./my-component-library147.js";
import { FocusScope as j } from "./my-component-library145.js";
import { useId as U } from "./my-component-library136.js";
import { createPopperScope as _, Anchor as x, Content as V, Arrow as W, Root as Z } from "./my-component-library155.js";
import { Portal as q } from "./my-component-library146.js";
import { Presence as w } from "./my-component-library132.js";
import { Primitive as E } from "./my-component-library126.js";
import { Slot as z } from "./my-component-library60.js";
import { useControllableState as B } from "./my-component-library129.js";
import { hideOthers as J } from "./my-component-library149.js";
import Q from "./my-component-library148.js";
import { jsx as p } from "react/jsx-runtime";
var R = "Popover", [b, Oo] = H(R, [
  _
]), m = _(), [X, f] = b(R), F = (o) => {
  const {
    __scopePopover: n,
    children: t,
    open: a,
    defaultOpen: e,
    onOpenChange: r,
    modal: s = !1
  } = o, c = m(n), u = i.useRef(null), [l, g] = i.useState(!1), [h = !1, d] = B({
    prop: a,
    defaultProp: e,
    onChange: r
  });
  return /* @__PURE__ */ p(Z, { ...c, children: /* @__PURE__ */ p(
    X,
    {
      scope: n,
      contentId: U(),
      triggerRef: u,
      open: h,
      onOpenChange: d,
      onOpenToggle: i.useCallback(() => d((C) => !C), [d]),
      hasCustomAnchor: l,
      onCustomAnchorAdd: i.useCallback(() => g(!0), []),
      onCustomAnchorRemove: i.useCallback(() => g(!1), []),
      modal: s,
      children: t
    }
  ) });
};
F.displayName = R;
var N = "PopoverAnchor", y = i.forwardRef(
  (o, n) => {
    const { __scopePopover: t, ...a } = o, e = f(N, t), r = m(t), { onCustomAnchorAdd: s, onCustomAnchorRemove: c } = e;
    return i.useEffect(() => (s(), () => c()), [s, c]), /* @__PURE__ */ p(x, { ...r, ...a, ref: n });
  }
);
y.displayName = N;
var S = "PopoverTrigger", D = i.forwardRef(
  (o, n) => {
    const { __scopePopover: t, ...a } = o, e = f(S, t), r = m(t), s = O(n, e.triggerRef), c = /* @__PURE__ */ p(
      E.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": e.open,
        "aria-controls": e.contentId,
        "data-state": G(e.open),
        ...a,
        ref: s,
        onClick: P(o.onClick, e.onOpenToggle)
      }
    );
    return e.hasCustomAnchor ? c : /* @__PURE__ */ p(x, { asChild: !0, ...r, children: c });
  }
);
D.displayName = S;
var A = "PopoverPortal", [Y, oo] = b(A, {
  forceMount: void 0
}), M = (o) => {
  const { __scopePopover: n, forceMount: t, children: a, container: e } = o, r = f(A, n);
  return /* @__PURE__ */ p(Y, { scope: n, forceMount: t, children: /* @__PURE__ */ p(w, { present: t || r.open, children: /* @__PURE__ */ p(q, { asChild: !0, container: e, children: a }) }) });
};
M.displayName = A;
var v = "PopoverContent", k = i.forwardRef(
  (o, n) => {
    const t = oo(v, o.__scopePopover), { forceMount: a = t.forceMount, ...e } = o, r = f(v, o.__scopePopover);
    return /* @__PURE__ */ p(w, { present: a || r.open, children: r.modal ? /* @__PURE__ */ p(eo, { ...e, ref: n }) : /* @__PURE__ */ p(ro, { ...e, ref: n }) });
  }
);
k.displayName = v;
var eo = i.forwardRef(
  (o, n) => {
    const t = f(v, o.__scopePopover), a = i.useRef(null), e = O(n, a), r = i.useRef(!1);
    return i.useEffect(() => {
      const s = a.current;
      if (s) return J(s);
    }, []), /* @__PURE__ */ p(Q, { as: z, allowPinchZoom: !0, children: /* @__PURE__ */ p(
      I,
      {
        ...o,
        ref: e,
        trapFocus: t.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: P(o.onCloseAutoFocus, (s) => {
          var c;
          s.preventDefault(), r.current || (c = t.triggerRef.current) == null || c.focus();
        }),
        onPointerDownOutside: P(
          o.onPointerDownOutside,
          (s) => {
            const c = s.detail.originalEvent, u = c.button === 0 && c.ctrlKey === !0, l = c.button === 2 || u;
            r.current = l;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: P(
          o.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), ro = i.forwardRef(
  (o, n) => {
    const t = f(v, o.__scopePopover), a = i.useRef(!1), e = i.useRef(!1);
    return /* @__PURE__ */ p(
      I,
      {
        ...o,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (r) => {
          var s, c;
          (s = o.onCloseAutoFocus) == null || s.call(o, r), r.defaultPrevented || (a.current || (c = t.triggerRef.current) == null || c.focus(), r.preventDefault()), a.current = !1, e.current = !1;
        },
        onInteractOutside: (r) => {
          var u, l;
          (u = o.onInteractOutside) == null || u.call(o, r), r.defaultPrevented || (a.current = !0, r.detail.originalEvent.type === "pointerdown" && (e.current = !0));
          const s = r.target;
          ((l = t.triggerRef.current) == null ? void 0 : l.contains(s)) && r.preventDefault(), r.detail.originalEvent.type === "focusin" && e.current && r.preventDefault();
        }
      }
    );
  }
), I = i.forwardRef(
  (o, n) => {
    const {
      __scopePopover: t,
      trapFocus: a,
      onOpenAutoFocus: e,
      onCloseAutoFocus: r,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: c,
      onPointerDownOutside: u,
      onFocusOutside: l,
      onInteractOutside: g,
      ...h
    } = o, d = f(v, t), C = m(t);
    return $(), /* @__PURE__ */ p(
      j,
      {
        asChild: !0,
        loop: !0,
        trapped: a,
        onMountAutoFocus: e,
        onUnmountAutoFocus: r,
        children: /* @__PURE__ */ p(
          K,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: g,
            onEscapeKeyDown: c,
            onPointerDownOutside: u,
            onFocusOutside: l,
            onDismiss: () => d.onOpenChange(!1),
            children: /* @__PURE__ */ p(
              V,
              {
                "data-state": G(d.open),
                role: "dialog",
                id: d.contentId,
                ...C,
                ...h,
                ref: n,
                style: {
                  ...h.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), T = "PopoverClose", L = i.forwardRef(
  (o, n) => {
    const { __scopePopover: t, ...a } = o, e = f(T, t);
    return /* @__PURE__ */ p(
      E.button,
      {
        type: "button",
        ...a,
        ref: n,
        onClick: P(o.onClick, () => e.onOpenChange(!1))
      }
    );
  }
);
L.displayName = T;
var to = "PopoverArrow", no = i.forwardRef(
  (o, n) => {
    const { __scopePopover: t, ...a } = o, e = m(t);
    return /* @__PURE__ */ p(W, { ...e, ...a, ref: n });
  }
);
no.displayName = to;
function G(o) {
  return o ? "open" : "closed";
}
var _o = F, xo = y, wo = D, Eo = M, bo = k, Fo = L;
export {
  xo as Anchor,
  Fo as Close,
  bo as Content,
  F as Popover,
  y as PopoverAnchor,
  no as PopoverArrow,
  L as PopoverClose,
  k as PopoverContent,
  M as PopoverPortal,
  D as PopoverTrigger,
  Eo as Portal,
  _o as Root,
  wo as Trigger,
  Oo as createPopoverScope
};
