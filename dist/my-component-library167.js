import { computePosition as I, offset as J, shift as K, flip as N, size as Q, hide as T, arrow as L, limitShift as X } from "./my-component-library170.js";
import { autoUpdate as me, platform as pe } from "./my-component-library170.js";
import * as f from "react";
import { useLayoutEffect as Y, useEffect as Z } from "react";
import * as b from "react-dom";
var w = typeof document < "u" ? Y : Z;
function R(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!R(e[r], t[r]))
          return !1;
      return !0;
    }
    if (s = Object.keys(e), n = s.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, s[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const p = s[r];
      if (!(p === "_owner" && e.$$typeof) && !R(e[p], t[p]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function A(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function v(e, t) {
  const n = A(e);
  return Math.round(t * n) / n;
}
function E(e) {
  const t = f.useRef(e);
  return w(() => {
    t.current = e;
  }), t;
}
function re(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: s,
    elements: {
      reference: p,
      floating: q
    } = {},
    transform: k = !0,
    whileElementsMounted: D,
    open: x
  } = e, [i, O] = f.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [M, B] = f.useState(r);
  R(M, r) || B(r);
  const [U, V] = f.useState(null), [W, G] = f.useState(null), _ = f.useCallback((o) => {
    o !== a.current && (a.current = o, V(o));
  }, []), C = f.useCallback((o) => {
    o !== d.current && (d.current = o, G(o));
  }, []), u = p || U, l = q || W, a = f.useRef(null), d = f.useRef(null), y = f.useRef(i), H = D != null, S = E(D), P = E(s), F = E(x), g = f.useCallback(() => {
    if (!a.current || !d.current)
      return;
    const o = {
      placement: t,
      strategy: n,
      middleware: M
    };
    P.current && (o.platform = P.current), I(a.current, d.current, o).then((h) => {
      const m = {
        ...h,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: F.current !== !1
      };
      $.current && !R(y.current, m) && (y.current = m, b.flushSync(() => {
        O(m);
      }));
    });
  }, [M, t, n, P, F]);
  w(() => {
    x === !1 && y.current.isPositioned && (y.current.isPositioned = !1, O((o) => ({
      ...o,
      isPositioned: !1
    })));
  }, [x]);
  const $ = f.useRef(!1);
  w(() => ($.current = !0, () => {
    $.current = !1;
  }), []), w(() => {
    if (u && (a.current = u), l && (d.current = l), u && l) {
      if (S.current)
        return S.current(u, l, g);
      g();
    }
  }, [u, l, g, S, H]);
  const j = f.useMemo(() => ({
    reference: a,
    floating: d,
    setReference: _,
    setFloating: C
  }), [_, C]), c = f.useMemo(() => ({
    reference: u,
    floating: l
  }), [u, l]), z = f.useMemo(() => {
    const o = {
      position: n,
      left: 0,
      top: 0
    };
    if (!c.floating)
      return o;
    const h = v(c.floating, i.x), m = v(c.floating, i.y);
    return k ? {
      ...o,
      transform: "translate(" + h + "px, " + m + "px)",
      ...A(c.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: h,
      top: m
    };
  }, [n, k, c.floating, i.x, i.y]);
  return f.useMemo(() => ({
    ...i,
    update: g,
    refs: j,
    elements: c,
    floatingStyles: z
  }), [i, g, j, c, z]);
}
const ee = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: s
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? L({
        element: r.current,
        padding: s
      }).fn(n) : {} : r ? L({
        element: r,
        padding: s
      }).fn(n) : {};
    }
  };
}, fe = (e, t) => ({
  ...J(e),
  options: [e, t]
}), oe = (e, t) => ({
  ...K(e),
  options: [e, t]
}), se = (e, t) => ({
  ...X(e),
  options: [e, t]
}), ie = (e, t) => ({
  ...N(e),
  options: [e, t]
}), ue = (e, t) => ({
  ...Q(e),
  options: [e, t]
}), le = (e, t) => ({
  ...T(e),
  options: [e, t]
}), ce = (e, t) => ({
  ...ee(e),
  options: [e, t]
});
export {
  ce as arrow,
  me as autoUpdate,
  I as computePosition,
  ie as flip,
  le as hide,
  se as limitShift,
  fe as offset,
  pe as platform,
  oe as shift,
  ue as size,
  re as useFloating
};
