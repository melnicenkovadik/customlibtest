import * as i from "react";
import { useEffect as A, useCallback as I, useState as z } from "react";
import { keyframes as p, css as P, styled as u, setup as S } from "./my-component-library164.js";
var j = (t) => typeof t == "function", w = (t, e) => j(t) ? t(e) : t, M = /* @__PURE__ */ (() => {
  let t = 0;
  return () => (++t).toString();
})(), O = /* @__PURE__ */ (() => {
  let t;
  return () => {
    if (t === void 0 && typeof window < "u") {
      let e = matchMedia("(prefers-reduced-motion: reduce)");
      t = !e || e.matches;
    }
    return t;
  };
})(), C = 20, h = /* @__PURE__ */ new Map(), N = 1e3, T = (t) => {
  if (h.has(t)) return;
  let e = setTimeout(() => {
    h.delete(t), m({ type: 4, toastId: t });
  }, N);
  h.set(t, e);
}, V = (t) => {
  let e = h.get(t);
  e && clearTimeout(e);
}, $ = (t, e) => {
  switch (e.type) {
    case 0:
      return { ...t, toasts: [e.toast, ...t.toasts].slice(0, C) };
    case 1:
      return e.toast.id && V(e.toast.id), { ...t, toasts: t.toasts.map((r) => r.id === e.toast.id ? { ...r, ...e.toast } : r) };
    case 2:
      let { toast: a } = e;
      return t.toasts.find((r) => r.id === a.id) ? $(t, { type: 1, toast: a }) : $(t, { type: 0, toast: a });
    case 3:
      let { toastId: o } = e;
      return o ? T(o) : t.toasts.forEach((r) => {
        T(r.id);
      }), { ...t, toasts: t.toasts.map((r) => r.id === o || o === void 0 ? { ...r, visible: !1 } : r) };
    case 4:
      return e.toastId === void 0 ? { ...t, toasts: [] } : { ...t, toasts: t.toasts.filter((r) => r.id !== e.toastId) };
    case 5:
      return { ...t, pausedAt: e.time };
    case 6:
      let s = e.time - (t.pausedAt || 0);
      return { ...t, pausedAt: void 0, toasts: t.toasts.map((r) => ({ ...r, pauseDuration: r.pauseDuration + s })) };
  }
}, g = [], b = { toasts: [], pausedAt: void 0 }, m = (t) => {
  b = $(b, t), g.forEach((e) => {
    e(b);
  });
}, _ = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 }, F = (t = {}) => {
  let [e, a] = z(b);
  A(() => (g.push(a), () => {
    let s = g.indexOf(a);
    s > -1 && g.splice(s, 1);
  }), [e]);
  let o = e.toasts.map((s) => {
    var r, c;
    return { ...t, ...t[s.type], ...s, duration: s.duration || ((r = t[s.type]) == null ? void 0 : r.duration) || (t == null ? void 0 : t.duration) || _[s.type], style: { ...t.style, ...(c = t[s.type]) == null ? void 0 : c.style, ...s.style } };
  });
  return { ...e, toasts: o };
}, G = (t, e = "blank", a) => ({ createdAt: Date.now(), visible: !0, type: e, ariaProps: { role: "status", "aria-live": "polite" }, message: t, pauseDuration: 0, ...a, id: (a == null ? void 0 : a.id) || M() }), f = (t) => (e, a) => {
  let o = G(e, t, a);
  return m({ type: 2, toast: o }), o.id;
}, n = (t, e) => f("blank")(t, e);
n.error = f("error");
n.success = f("success");
n.loading = f("loading");
n.custom = f("custom");
n.dismiss = (t) => {
  m({ type: 3, toastId: t });
};
n.remove = (t) => m({ type: 4, toastId: t });
n.promise = (t, e, a) => {
  let o = n.loading(e.loading, { ...a, ...a == null ? void 0 : a.loading });
  return t.then((s) => (n.success(w(e.success, s), { id: o, ...a, ...a == null ? void 0 : a.success }), s)).catch((s) => {
    n.error(w(e.error, s), { id: o, ...a, ...a == null ? void 0 : a.error });
  }), t;
};
var H = (t, e) => {
  m({ type: 1, toast: { id: t, height: e } });
}, J = () => {
  m({ type: 5, time: Date.now() });
}, ut = (t) => {
  let { toasts: e, pausedAt: a } = F(t);
  A(() => {
    if (a) return;
    let r = Date.now(), c = e.map((d) => {
      if (d.duration === 1 / 0) return;
      let y = (d.duration || 0) + d.pauseDuration - (r - d.createdAt);
      if (y < 0) {
        d.visible && n.dismiss(d.id);
        return;
      }
      return setTimeout(() => n.dismiss(d.id), y);
    });
    return () => {
      c.forEach((d) => d && clearTimeout(d));
    };
  }, [e, a]);
  let o = I(() => {
    a && m({ type: 6, time: Date.now() });
  }, [a]), s = I((r, c) => {
    let { reverseOrder: d = !1, gutter: y = 8, defaultPosition: E } = c || {}, x = e.filter((l) => (l.position || E) === (r.position || E) && l.height), D = x.findIndex((l) => l.id === r.id), k = x.filter((l, v) => v < D && l.visible).length;
    return x.filter((l) => l.visible).slice(...d ? [k + 1] : [0, k]).reduce((l, v) => l + (v.height || 0) + y, 0);
  }, [e]);
  return { toasts: e, handlers: { updateHeight: H, startPause: J, endPause: o, calculateOffset: s } };
}, L = p`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, Q = p`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, R = p`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, U = u("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(t) => t.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Q} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(t) => t.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${R} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, W = p`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, X = u("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(t) => t.secondary || "#e0e0e0"};
  border-right-color: ${(t) => t.primary || "#616161"};
  animation: ${W} 1s linear infinite;
`, Y = p`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, Z = p`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, q = u("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(t) => t.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Y} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Z} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(t) => t.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, B = u("div")`
  position: absolute;
`, K = u("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, tt = p`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, et = u("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${tt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, at = ({ toast: t }) => {
  let { icon: e, type: a, iconTheme: o } = t;
  return e !== void 0 ? typeof e == "string" ? i.createElement(et, null, e) : e : a === "blank" ? null : i.createElement(K, null, i.createElement(X, { ...o }), a !== "loading" && i.createElement(B, null, a === "error" ? i.createElement(U, { ...o }) : i.createElement(q, { ...o })));
}, rt = (t) => `
0% {transform: translate3d(0,${t * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, ot = (t) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t * -150}%,-1px) scale(.6); opacity:0;}
`, st = "0%{opacity:0;} 100%{opacity:1;}", it = "0%{opacity:1;} 100%{opacity:0;}", nt = u("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, dt = u("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, lt = (t, e) => {
  let a = t.includes("top") ? 1 : -1, [o, s] = O() ? [st, it] : [rt(a), ot(a)];
  return { animation: e ? `${p(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${p(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
};
i.memo(({ toast: t, position: e, style: a, children: o }) => {
  let s = t.height ? lt(t.position || e || "top-center", t.visible) : { opacity: 0 }, r = i.createElement(at, { toast: t }), c = i.createElement(dt, { ...t.ariaProps }, w(t.message, t));
  return i.createElement(nt, { className: t.className, style: { ...s, ...a, ...t.style } }, typeof o == "function" ? o({ icon: r, message: c }) : i.createElement(i.Fragment, null, r, c));
});
S(i.createElement);
P`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;
var mt = n;
export {
  q as CheckmarkIcon,
  U as ErrorIcon,
  X as LoaderIcon,
  at as ToastIcon,
  mt as default,
  w as resolveValue,
  n as toast,
  ut as useToaster,
  F as useToasterStore
};
