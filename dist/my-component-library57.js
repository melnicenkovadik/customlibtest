import * as i from "react";
import { createContextScope as C } from "./my-component-library123.js";
import { useCallbackRef as I } from "./my-component-library124.js";
import { useLayoutEffect as g } from "./my-component-library125.js";
import { Primitive as m } from "./my-component-library126.js";
import { jsx as c } from "react/jsx-runtime";
var l = "Avatar", [R, b] = C(l), [_, v] = R(l), p = i.forwardRef(
  (e, r) => {
    const { __scopeAvatar: s, ...a } = e, [o, t] = i.useState("idle");
    return /* @__PURE__ */ c(
      _,
      {
        scope: s,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: t,
        children: /* @__PURE__ */ c(m.span, { ...a, ref: r })
      }
    );
  }
);
p.displayName = l;
var A = "AvatarImage", S = i.forwardRef(
  (e, r) => {
    const { __scopeAvatar: s, src: a, onLoadingStatusChange: o = () => {
    }, ...t } = e, d = v(A, s), n = x(a, t.referrerPolicy), u = I((f) => {
      o(f), d.onImageLoadingStatusChange(f);
    });
    return g(() => {
      n !== "idle" && u(n);
    }, [n, u]), n === "loaded" ? /* @__PURE__ */ c(m.img, { ...t, ref: r, src: a }) : null;
  }
);
S.displayName = A;
var L = "AvatarFallback", w = i.forwardRef(
  (e, r) => {
    const { __scopeAvatar: s, delayMs: a, ...o } = e, t = v(L, s), [d, n] = i.useState(a === void 0);
    return i.useEffect(() => {
      if (a !== void 0) {
        const u = window.setTimeout(() => n(!0), a);
        return () => window.clearTimeout(u);
      }
    }, [a]), d && t.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ c(m.span, { ...o, ref: r }) : null;
  }
);
w.displayName = L;
function x(e, r) {
  const [s, a] = i.useState("idle");
  return g(() => {
    if (!e) {
      a("error");
      return;
    }
    let o = !0;
    const t = new window.Image(), d = (n) => () => {
      o && a(n);
    };
    return a("loading"), t.onload = d("loaded"), t.onerror = d("error"), t.src = e, r && (t.referrerPolicy = r), () => {
      o = !1;
    };
  }, [e, r]), s;
}
var k = p, P = S, F = w;
export {
  p as Avatar,
  w as AvatarFallback,
  S as AvatarImage,
  F as Fallback,
  P as Image,
  k as Root,
  b as createAvatarScope
};
