import s from "react";
import { createContextScope as X } from "./my-component-library123.js";
import { createCollection as Z } from "./my-component-library142.js";
import { useComposedRefs as $ } from "./my-component-library127.js";
import { composeEventHandlers as oo } from "./my-component-library128.js";
import { useControllableState as M } from "./my-component-library129.js";
import { Primitive as V } from "./my-component-library126.js";
import { createCollapsibleScope as H, Root as eo, Trigger as ro, Content as to } from "./my-component-library143.js";
import { useId as no } from "./my-component-library136.js";
import { useDirection as co } from "./my-component-library135.js";
import { jsx as n } from "react/jsx-runtime";
var f = "Accordion", io = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [y, ao, lo] = Z(f), [b, No] = X(f, [
  lo,
  H
]), E = H(), K = s.forwardRef(
  (e, c) => {
    const { type: o, ...t } = e, i = t, r = t;
    return /* @__PURE__ */ n(y.Provider, { scope: e.__scopeAccordion, children: o === "multiple" ? /* @__PURE__ */ n(uo, { ...r, ref: c }) : /* @__PURE__ */ n(fo, { ...i, ref: c }) });
  }
);
K.displayName = f;
var [L, so] = b(f), [z, po] = b(
  f,
  { collapsible: !1 }
), fo = s.forwardRef(
  (e, c) => {
    const {
      value: o,
      defaultValue: t,
      onValueChange: i = () => {
      },
      collapsible: r = !1,
      ...a
    } = e, [l, d] = M({
      prop: o,
      defaultProp: t,
      onChange: i
    });
    return /* @__PURE__ */ n(
      L,
      {
        scope: e.__scopeAccordion,
        value: l ? [l] : [],
        onItemOpen: d,
        onItemClose: s.useCallback(() => r && d(""), [r, d]),
        children: /* @__PURE__ */ n(z, { scope: e.__scopeAccordion, collapsible: r, children: /* @__PURE__ */ n(G, { ...a, ref: c }) })
      }
    );
  }
), uo = s.forwardRef((e, c) => {
  const {
    value: o,
    defaultValue: t,
    onValueChange: i = () => {
    },
    ...r
  } = e, [a = [], l] = M({
    prop: o,
    defaultProp: t,
    onChange: i
  }), d = s.useCallback(
    (v) => l((u = []) => [...u, v]),
    [l]
  ), m = s.useCallback(
    (v) => l((u = []) => u.filter((h) => h !== v)),
    [l]
  );
  return /* @__PURE__ */ n(
    L,
    {
      scope: e.__scopeAccordion,
      value: a,
      onItemOpen: d,
      onItemClose: m,
      children: /* @__PURE__ */ n(z, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ n(G, { ...r, ref: c }) })
    }
  );
}), [mo, I] = b(f), G = s.forwardRef(
  (e, c) => {
    const { __scopeAccordion: o, disabled: t, dir: i, orientation: r = "vertical", ...a } = e, l = s.useRef(null), d = $(l, c), m = ao(o), u = co(i) === "ltr", h = oo(e.onKeyDown, (A) => {
      var O;
      if (!io.includes(A.key)) return;
      const Q = A.target, x = m().filter((N) => {
        var T;
        return !((T = N.ref.current) != null && T.disabled);
      }), C = x.findIndex((N) => N.ref.current === Q), D = x.length;
      if (C === -1) return;
      A.preventDefault();
      let p = C;
      const _ = 0, w = D - 1, R = () => {
        p = C + 1, p > w && (p = _);
      }, P = () => {
        p = C - 1, p < _ && (p = w);
      };
      switch (A.key) {
        case "Home":
          p = _;
          break;
        case "End":
          p = w;
          break;
        case "ArrowRight":
          r === "horizontal" && (u ? R() : P());
          break;
        case "ArrowDown":
          r === "vertical" && R();
          break;
        case "ArrowLeft":
          r === "horizontal" && (u ? P() : R());
          break;
        case "ArrowUp":
          r === "vertical" && P();
          break;
      }
      const W = p % D;
      (O = x[W].ref.current) == null || O.focus();
    });
    return /* @__PURE__ */ n(
      mo,
      {
        scope: o,
        disabled: t,
        direction: i,
        orientation: r,
        children: /* @__PURE__ */ n(y.Slot, { scope: o, children: /* @__PURE__ */ n(
          V.div,
          {
            ...a,
            "data-orientation": r,
            ref: d,
            onKeyDown: t ? void 0 : h
          }
        ) })
      }
    );
  }
), g = "AccordionItem", [vo, k] = b(g), U = s.forwardRef(
  (e, c) => {
    const { __scopeAccordion: o, value: t, ...i } = e, r = I(g, o), a = so(g, o), l = E(o), d = no(), m = t && a.value.includes(t) || !1, v = r.disabled || e.disabled;
    return /* @__PURE__ */ n(
      vo,
      {
        scope: o,
        open: m,
        disabled: v,
        triggerId: d,
        children: /* @__PURE__ */ n(
          eo,
          {
            "data-orientation": r.orientation,
            "data-state": J(m),
            ...l,
            ...i,
            ref: c,
            disabled: v,
            open: m,
            onOpenChange: (u) => {
              u ? a.onItemOpen(t) : a.onItemClose(t);
            }
          }
        )
      }
    );
  }
);
U.displayName = g;
var j = "AccordionHeader", Y = s.forwardRef(
  (e, c) => {
    const { __scopeAccordion: o, ...t } = e, i = I(f, o), r = k(j, o);
    return /* @__PURE__ */ n(
      V.h3,
      {
        "data-orientation": i.orientation,
        "data-state": J(r.open),
        "data-disabled": r.disabled ? "" : void 0,
        ...t,
        ref: c
      }
    );
  }
);
Y.displayName = j;
var S = "AccordionTrigger", q = s.forwardRef(
  (e, c) => {
    const { __scopeAccordion: o, ...t } = e, i = I(f, o), r = k(S, o), a = po(S, o), l = E(o);
    return /* @__PURE__ */ n(y.ItemSlot, { scope: o, children: /* @__PURE__ */ n(
      ro,
      {
        "aria-disabled": r.open && !a.collapsible || void 0,
        "data-orientation": i.orientation,
        id: r.triggerId,
        ...l,
        ...t,
        ref: c
      }
    ) });
  }
);
q.displayName = S;
var B = "AccordionContent", F = s.forwardRef(
  (e, c) => {
    const { __scopeAccordion: o, ...t } = e, i = I(f, o), r = k(B, o), a = E(o);
    return /* @__PURE__ */ n(
      to,
      {
        role: "region",
        "aria-labelledby": r.triggerId,
        "data-orientation": i.orientation,
        ...a,
        ...t,
        ref: c,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...e.style
        }
      }
    );
  }
);
F.displayName = B;
function J(e) {
  return e ? "open" : "closed";
}
var So = K, yo = U, Eo = Y, ko = q, Do = F;
export {
  K as Accordion,
  F as AccordionContent,
  Y as AccordionHeader,
  U as AccordionItem,
  q as AccordionTrigger,
  Do as Content,
  Eo as Header,
  yo as Item,
  So as Root,
  ko as Trigger,
  No as createAccordionScope
};
