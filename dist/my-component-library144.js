import * as n from "react";
import { composeEventHandlers as m } from "./my-component-library128.js";
import { Primitive as g, dispatchDiscreteCustomEvent as k } from "./my-component-library126.js";
import { useComposedRefs as R } from "./my-component-library127.js";
import { useCallbackRef as w } from "./my-component-library124.js";
import { useEscapeKeydown as U } from "./my-component-library166.js";
import { jsx as T } from "react/jsx-runtime";
var z = "DismissableLayer", y = "dismissableLayer.update", H = "dismissableLayer.pointerDownOutside", M = "dismissableLayer.focusOutside", L, B = n.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), j = n.forwardRef(
  (r, e) => {
    const {
      disableOutsidePointerEvents: i = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: t,
      onFocusOutside: a,
      onInteractOutside: l,
      onDismiss: d,
      ...v
    } = r, c = n.useContext(B), [u, S] = n.useState(null), f = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, F] = n.useState({}), W = R(e, (s) => S(s)), p = Array.from(c.layers), [A] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), N = p.indexOf(A), b = u ? p.indexOf(u) : -1, I = c.layersWithOutsidePointerEventsDisabled.size > 0, P = b >= N, _ = q((s) => {
      const E = s.target, C = [...c.branches].some((h) => h.contains(E));
      !P || C || (t == null || t(s), l == null || l(s), s.defaultPrevented || d == null || d());
    }, f), D = G((s) => {
      const E = s.target;
      [...c.branches].some((h) => h.contains(E)) || (a == null || a(s), l == null || l(s), s.defaultPrevented || d == null || d());
    }, f);
    return U((s) => {
      b === c.layers.size - 1 && (o == null || o(s), !s.defaultPrevented && d && (s.preventDefault(), d()));
    }, f), n.useEffect(() => {
      if (u)
        return i && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (L = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), O(), () => {
          i && c.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = L);
        };
    }, [u, f, i, c]), n.useEffect(() => () => {
      u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), O());
    }, [u, c]), n.useEffect(() => {
      const s = () => F({});
      return document.addEventListener(y, s), () => document.removeEventListener(y, s);
    }, []), /* @__PURE__ */ T(
      g.div,
      {
        ...v,
        ref: W,
        style: {
          pointerEvents: I ? P ? "auto" : "none" : void 0,
          ...r.style
        },
        onFocusCapture: m(r.onFocusCapture, D.onFocusCapture),
        onBlurCapture: m(r.onBlurCapture, D.onBlurCapture),
        onPointerDownCapture: m(
          r.onPointerDownCapture,
          _.onPointerDownCapture
        )
      }
    );
  }
);
j.displayName = z;
var X = "DismissableLayerBranch", Y = n.forwardRef((r, e) => {
  const i = n.useContext(B), o = n.useRef(null), t = R(e, o);
  return n.useEffect(() => {
    const a = o.current;
    if (a)
      return i.branches.add(a), () => {
        i.branches.delete(a);
      };
  }, [i.branches]), /* @__PURE__ */ T(g.div, { ...r, ref: t });
});
Y.displayName = X;
function q(r, e = globalThis == null ? void 0 : globalThis.document) {
  const i = w(r), o = n.useRef(!1), t = n.useRef(() => {
  });
  return n.useEffect(() => {
    const a = (d) => {
      if (d.target && !o.current) {
        let v = function() {
          x(
            H,
            i,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: d };
        d.pointerType === "touch" ? (e.removeEventListener("click", t.current), t.current = v, e.addEventListener("click", t.current, { once: !0 })) : v();
      } else
        e.removeEventListener("click", t.current);
      o.current = !1;
    }, l = window.setTimeout(() => {
      e.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(l), e.removeEventListener("pointerdown", a), e.removeEventListener("click", t.current);
    };
  }, [e, i]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function G(r, e = globalThis == null ? void 0 : globalThis.document) {
  const i = w(r), o = n.useRef(!1);
  return n.useEffect(() => {
    const t = (a) => {
      a.target && !o.current && x(M, i, { originalEvent: a }, {
        discrete: !1
      });
    };
    return e.addEventListener("focusin", t), () => e.removeEventListener("focusin", t);
  }, [e, i]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function O() {
  const r = new CustomEvent(y);
  document.dispatchEvent(r);
}
function x(r, e, i, { discrete: o }) {
  const t = i.originalEvent.target, a = new CustomEvent(r, { bubbles: !1, cancelable: !0, detail: i });
  e && t.addEventListener(r, e, { once: !0 }), o ? k(t, a) : t.dispatchEvent(a);
}
export {
  j as DismissableLayer,
  Y as DismissableLayerBranch
};
