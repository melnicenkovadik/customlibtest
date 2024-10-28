import * as d from "react";
import { useComposedRefs as R } from "./my-component-library127.js";
import { Primitive as M } from "./my-component-library126.js";
import { useCallbackRef as y } from "./my-component-library124.js";
import { jsx as _ } from "react/jsx-runtime";
var F = "focusScope.autoFocusOnMount", T = "focusScope.autoFocusOnUnmount", N = { bubbles: !1, cancelable: !0 }, K = "FocusScope", k = d.forwardRef((e, n) => {
  const {
    loop: t = !1,
    trapped: u = !1,
    onMountAutoFocus: p,
    onUnmountAutoFocus: L,
    ...g
  } = e, [o, U] = d.useState(null), E = y(p), v = y(L), b = d.useRef(null), A = R(n, (s) => U(s)), a = d.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  d.useEffect(() => {
    if (u) {
      let s = function(i) {
        if (a.paused || !o) return;
        const c = i.target;
        o.contains(c) ? b.current = c : f(b.current, { select: !0 });
      }, l = function(i) {
        if (a.paused || !o) return;
        const c = i.relatedTarget;
        c !== null && (o.contains(c) || f(b.current, { select: !0 }));
      }, r = function(i) {
        if (document.activeElement === document.body)
          for (const h of i)
            h.removedNodes.length > 0 && f(o);
      };
      document.addEventListener("focusin", s), document.addEventListener("focusout", l);
      const m = new MutationObserver(r);
      return o && m.observe(o, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", s), document.removeEventListener("focusout", l), m.disconnect();
      };
    }
  }, [u, o, a.paused]), d.useEffect(() => {
    if (o) {
      S.add(a);
      const s = document.activeElement;
      if (!o.contains(s)) {
        const r = new CustomEvent(F, N);
        o.addEventListener(F, E), o.dispatchEvent(r), r.defaultPrevented || (w(W(I(o)), { select: !0 }), document.activeElement === s && f(o));
      }
      return () => {
        o.removeEventListener(F, E), setTimeout(() => {
          const r = new CustomEvent(T, N);
          o.addEventListener(T, v), o.dispatchEvent(r), r.defaultPrevented || f(s ?? document.body, { select: !0 }), o.removeEventListener(T, v), S.remove(a);
        }, 0);
      };
    }
  }, [o, E, v, a]);
  const P = d.useCallback(
    (s) => {
      if (!t && !u || a.paused) return;
      const l = s.key === "Tab" && !s.altKey && !s.ctrlKey && !s.metaKey, r = document.activeElement;
      if (l && r) {
        const m = s.currentTarget, [i, c] = x(m);
        i && c ? !s.shiftKey && r === c ? (s.preventDefault(), t && f(i, { select: !0 })) : s.shiftKey && r === i && (s.preventDefault(), t && f(c, { select: !0 })) : r === m && s.preventDefault();
      }
    },
    [t, u, a.paused]
  );
  return /* @__PURE__ */ _(M.div, { tabIndex: -1, ...g, ref: A, onKeyDown: P });
});
k.displayName = K;
function w(e, { select: n = !1 } = {}) {
  const t = document.activeElement;
  for (const u of e)
    if (f(u, { select: n }), document.activeElement !== t) return;
}
function x(e) {
  const n = I(e), t = O(n, e), u = O(n.reverse(), e);
  return [t, u];
}
function I(e) {
  const n = [], t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (u) => {
      const p = u.tagName === "INPUT" && u.type === "hidden";
      return u.disabled || u.hidden || p ? NodeFilter.FILTER_SKIP : u.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; t.nextNode(); ) n.push(t.currentNode);
  return n;
}
function O(e, n) {
  for (const t of e)
    if (!D(t, { upTo: n })) return t;
}
function D(e, { upTo: n }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (n !== void 0 && e === n) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function H(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function f(e, { select: n = !1 } = {}) {
  if (e && e.focus) {
    const t = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== t && H(e) && n && e.select();
  }
}
var S = V();
function V() {
  let e = [];
  return {
    add(n) {
      const t = e[0];
      n !== t && (t == null || t.pause()), e = C(e, n), e.unshift(n);
    },
    remove(n) {
      var t;
      e = C(e, n), (t = e[0]) == null || t.resume();
    }
  };
}
function C(e, n) {
  const t = [...e], u = t.indexOf(n);
  return u !== -1 && t.splice(u, 1), t;
}
function W(e) {
  return e.filter((n) => n.tagName !== "A");
}
export {
  k as FocusScope
};
