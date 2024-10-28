import { Overlay as we, Content as he, Trigger as ge, Close as ve, Title as ye, Description as be, Root as Se, Portal as Re } from "./my-component-library83.js";
import * as Te from "react";
import r, { useMemo as Ee, useLayoutEffect as De, useEffect as Oe } from "react";
function Ce(t) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0], e = document.createElement("style");
  e.type = "text/css", n.appendChild(e), e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
const Wt = r.createContext({
  drawerRef: {
    current: null
  },
  overlayRef: {
    current: null
  },
  onPress: () => {
  },
  onRelease: () => {
  },
  onDrag: () => {
  },
  onNestedDrag: () => {
  },
  onNestedOpenChange: () => {
  },
  onNestedRelease: () => {
  },
  openProp: void 0,
  dismissible: !1,
  isOpen: !1,
  isDragging: !1,
  keyboardIsOpen: {
    current: !1
  },
  snapPointsOffset: null,
  snapPoints: null,
  handleOnly: !1,
  modal: !1,
  shouldFade: !1,
  activeSnapPoint: null,
  onOpenChange: () => {
  },
  setActiveSnapPoint: () => {
  },
  closeDrawer: () => {
  },
  direction: "bottom",
  shouldAnimate: {
    current: !0
  },
  shouldScaleBackground: !1,
  setBackgroundColorOnScale: !0,
  noBodyStyles: !1,
  container: null,
  autoFocus: !1
}), rt = () => {
  const t = r.useContext(Wt);
  if (!t)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return t;
};
Ce(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);
function xe() {
  const t = navigator.userAgent;
  return typeof window < "u" && (/Firefox/.test(t) && /Mobile/.test(t) || // Android Firefox
  /FxiOS/.test(t));
}
function $e() {
  return Ct(/^Mac/);
}
function Ae() {
  return Ct(/^iPhone/);
}
function kt() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function Me() {
  return Ct(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  $e() && navigator.maxTouchPoints > 1;
}
function zt() {
  return Ae() || Me();
}
function Ct(t) {
  return typeof window < "u" && window.navigator != null ? t.test(window.navigator.platform) : void 0;
}
const Pe = 24, Ie = typeof window < "u" ? De : Oe;
function Bt(...t) {
  return (...n) => {
    for (let e of t)
      typeof e == "function" && e(...n);
  };
}
const St = typeof document < "u" && window.visualViewport;
function Ut(t) {
  let n = window.getComputedStyle(t);
  return /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
}
function Vt(t) {
  for (Ut(t) && (t = t.parentElement); t && !Ut(t); )
    t = t.parentElement;
  return t || document.scrollingElement || document.documentElement;
}
const Ne = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
let pt = 0, Rt;
function _e(t = {}) {
  let { isDisabled: n } = t;
  Ie(() => {
    if (!n)
      return pt++, pt === 1 && zt() && (Rt = He()), () => {
        pt--, pt === 0 && (Rt == null || Rt());
      };
  }, [
    n
  ]);
}
function He() {
  let t, n = 0, e = (p) => {
    t = Vt(p.target), !(t === document.documentElement && t === document.body) && (n = p.changedTouches[0].pageY);
  }, a = (p) => {
    if (!t || t === document.documentElement || t === document.body) {
      p.preventDefault();
      return;
    }
    let w = p.changedTouches[0].pageY, B = t.scrollTop, L = t.scrollHeight - t.clientHeight;
    L !== 0 && ((B <= 0 && w > n || B >= L && w < n) && p.preventDefault(), n = w);
  }, i = (p) => {
    let w = p.target;
    Dt(w) && w !== document.activeElement && (p.preventDefault(), w.style.transform = "translateY(-2000px)", w.focus(), requestAnimationFrame(() => {
      w.style.transform = "";
    }));
  }, o = (p) => {
    let w = p.target;
    Dt(w) && (w.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      w.style.transform = "", St && (St.height < window.innerHeight ? requestAnimationFrame(() => {
        Ft(w);
      }) : St.addEventListener("resize", () => Ft(w), {
        once: !0
      }));
    }));
  }, f = () => {
    window.scrollTo(0, 0);
  }, m = window.pageXOffset, R = window.pageYOffset, E = Bt(Le(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let g = Bt(ut(document, "touchstart", e, {
    passive: !1,
    capture: !0
  }), ut(document, "touchmove", a, {
    passive: !1,
    capture: !0
  }), ut(document, "touchend", i, {
    passive: !1,
    capture: !0
  }), ut(document, "focus", o, !0), ut(window, "scroll", f));
  return () => {
    E(), g(), window.scrollTo(m, R);
  };
}
function Le(t, n, e) {
  let a = t.style[n];
  return t.style[n] = e, () => {
    t.style[n] = a;
  };
}
function ut(t, n, e, a) {
  return t.addEventListener(n, e, a), () => {
    t.removeEventListener(n, e, a);
  };
}
function Ft(t) {
  let n = document.scrollingElement || document.documentElement;
  for (; t && t !== n; ) {
    let e = Vt(t);
    if (e !== document.documentElement && e !== document.body && e !== t) {
      let a = e.getBoundingClientRect().top, i = t.getBoundingClientRect().top, o = t.getBoundingClientRect().bottom;
      const f = e.getBoundingClientRect().bottom + Pe;
      o > f && (e.scrollTop += i - a);
    }
    t = e.parentElement;
  }
}
function Dt(t) {
  return t instanceof HTMLInputElement && !Ne.has(t.type) || t instanceof HTMLTextAreaElement || t instanceof HTMLElement && t.isContentEditable;
}
function ke(t, n) {
  typeof t == "function" ? t(n) : t != null && (t.current = n);
}
function Be(...t) {
  return (n) => t.forEach((e) => ke(e, n));
}
function Yt(...t) {
  return Te.useCallback(Be(...t), t);
}
const jt = /* @__PURE__ */ new WeakMap();
function x(t, n, e = !1) {
  if (!t || !(t instanceof HTMLElement)) return;
  let a = {};
  Object.entries(n).forEach(([i, o]) => {
    if (i.startsWith("--")) {
      t.style.setProperty(i, o);
      return;
    }
    a[i] = t.style[i], t.style[i] = o;
  }), !e && jt.set(t, a);
}
function Ue(t, n) {
  if (!t || !(t instanceof HTMLElement)) return;
  let e = jt.get(t);
  e && (t.style[n] = e[n]);
}
const $ = (t) => {
  switch (t) {
    case "top":
    case "bottom":
      return !0;
    case "left":
    case "right":
      return !1;
    default:
      return t;
  }
};
function wt(t, n) {
  if (!t)
    return null;
  const e = window.getComputedStyle(t), a = (
    // @ts-ignore
    e.transform || e.webkitTransform || e.mozTransform
  );
  let i = a.match(/^matrix3d\((.+)\)$/);
  return i ? parseFloat(i[1].split(", ")[$(n) ? 13 : 12]) : (i = a.match(/^matrix\((.+)\)$/), i ? parseFloat(i[1].split(", ")[$(n) ? 5 : 4]) : null);
}
function Fe(t) {
  return 8 * (Math.log(t + 1) - 2);
}
function Tt(t, n) {
  if (!t) return () => {
  };
  const e = t.style.cssText;
  return Object.assign(t.style, n), () => {
    t.style.cssText = e;
  };
}
function We(...t) {
  return (...n) => {
    for (const e of t)
      typeof e == "function" && e(...n);
  };
}
const O = {
  DURATION: 0.5,
  EASE: [
    0.32,
    0.72,
    0,
    1
  ]
}, qt = 0.4, ze = 0.25, Ve = 100, Xt = 8, Z = 16, Ot = 26, Et = "vaul-dragging";
function Kt(t) {
  const n = r.useRef(t);
  return r.useEffect(() => {
    n.current = t;
  }), r.useMemo(() => (...e) => n.current == null ? void 0 : n.current.call(n, ...e), []);
}
function Ye({ defaultProp: t, onChange: n }) {
  const e = r.useState(t), [a] = e, i = r.useRef(a), o = Kt(n);
  return r.useEffect(() => {
    i.current !== a && (o(a), i.current = a);
  }, [
    a,
    i,
    o
  ]), e;
}
function Gt({ prop: t, defaultProp: n, onChange: e = () => {
} }) {
  const [a, i] = Ye({
    defaultProp: n,
    onChange: e
  }), o = t !== void 0, f = o ? t : a, m = Kt(e), R = r.useCallback((E) => {
    if (o) {
      const p = typeof E == "function" ? E(t) : E;
      p !== t && m(p);
    } else
      i(E);
  }, [
    o,
    t,
    i,
    m
  ]);
  return [
    f,
    R
  ];
}
function je({ activeSnapPointProp: t, setActiveSnapPointProp: n, snapPoints: e, drawerRef: a, overlayRef: i, fadeFromIndex: o, onSnapPointChange: f, direction: m = "bottom", container: R, snapToSequentialPoint: E }) {
  const [g, p] = Gt({
    prop: t,
    defaultProp: e == null ? void 0 : e[0],
    onChange: n
  }), [w, B] = r.useState(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  r.useEffect(() => {
    function u() {
      B({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener("resize", u), () => window.removeEventListener("resize", u);
  }, []);
  const L = r.useMemo(() => g === (e == null ? void 0 : e[e.length - 1]) || null, [
    e,
    g
  ]), D = r.useMemo(() => {
    var u;
    return (u = e == null ? void 0 : e.findIndex((b) => b === g)) != null ? u : null;
  }, [
    e,
    g
  ]), U = e && e.length > 0 && (o || o === 0) && !Number.isNaN(o) && e[o] === g || !e, h = r.useMemo(() => {
    const u = R ? {
      width: R.getBoundingClientRect().width,
      height: R.getBoundingClientRect().height
    } : typeof window < "u" ? {
      width: window.innerWidth,
      height: window.innerHeight
    } : {
      width: 0,
      height: 0
    };
    var b;
    return (b = e == null ? void 0 : e.map((y) => {
      const N = typeof y == "string";
      let P = 0;
      if (N && (P = parseInt(y, 10)), $(m)) {
        const l = N ? P : w ? y * u.height : 0;
        return w ? m === "bottom" ? u.height - l : -u.height + l : l;
      }
      const W = N ? P : w ? y * u.width : 0;
      return w ? m === "right" ? u.width - W : -u.width + W : W;
    })) != null ? b : [];
  }, [
    e,
    w,
    R
  ]), M = r.useMemo(() => D !== null ? h == null ? void 0 : h[D] : null, [
    h,
    D
  ]), A = r.useCallback((u) => {
    var b;
    const y = (b = h == null ? void 0 : h.findIndex((N) => N === u)) != null ? b : null;
    f(y), x(a.current, {
      transition: `transform ${O.DURATION}s cubic-bezier(${O.EASE.join(",")})`,
      transform: $(m) ? `translate3d(0, ${u}px, 0)` : `translate3d(${u}px, 0, 0)`
    }), h && y !== h.length - 1 && o !== void 0 && y !== o && y < o ? x(i.current, {
      transition: `opacity ${O.DURATION}s cubic-bezier(${O.EASE.join(",")})`,
      opacity: "0"
    }) : x(i.current, {
      transition: `opacity ${O.DURATION}s cubic-bezier(${O.EASE.join(",")})`,
      opacity: "1"
    }), p(e == null ? void 0 : e[Math.max(y, 0)]);
  }, [
    a.current,
    e,
    h,
    o,
    i,
    p
  ]);
  r.useEffect(() => {
    if (g || t) {
      var u;
      const b = (u = e == null ? void 0 : e.findIndex((y) => y === t || y === g)) != null ? u : -1;
      h && b !== -1 && typeof h[b] == "number" && A(h[b]);
    }
  }, [
    g,
    t,
    e,
    h,
    A
  ]);
  function d({ draggedDistance: u, closeDrawer: b, velocity: y, dismissible: N }) {
    if (o === void 0) return;
    const P = m === "bottom" || m === "right" ? (M ?? 0) - u : (M ?? 0) + u, W = D === o - 1, l = D === 0, F = u > 0;
    if (W && x(i.current, {
      transition: `opacity ${O.DURATION}s cubic-bezier(${O.EASE.join(",")})`
    }), !E && y > 2 && !F) {
      N ? b() : A(h[0]);
      return;
    }
    if (!E && y > 2 && F && h && e) {
      A(h[e.length - 1]);
      return;
    }
    const _ = h == null ? void 0 : h.reduce((I, q) => typeof I != "number" || typeof q != "number" ? I : Math.abs(q - P) < Math.abs(I - P) ? q : I), z = $(m) ? window.innerHeight : window.innerWidth;
    if (y > qt && Math.abs(u) < z * 0.4) {
      const I = F ? 1 : -1;
      if (I > 0 && L && e) {
        A(h[e.length - 1]);
        return;
      }
      if (l && I < 0 && N && b(), D === null) return;
      A(h[D + I]);
      return;
    }
    A(_);
  }
  function Y({ draggedDistance: u }) {
    if (M === null) return;
    const b = m === "bottom" || m === "right" ? M - u : M + u;
    (m === "bottom" || m === "right") && b < h[h.length - 1] || (m === "top" || m === "left") && b > h[h.length - 1] || x(a.current, {
      transform: $(m) ? `translate3d(0, ${b}px, 0)` : `translate3d(${b}px, 0, 0)`
    });
  }
  function J(u, b) {
    if (!e || typeof D != "number" || !h || o === void 0) return null;
    const y = D === o - 1;
    if (D >= o && b)
      return 0;
    if (y && !b) return 1;
    if (!U && !y) return null;
    const P = y ? D + 1 : D - 1, W = y ? h[P] - h[P - 1] : h[P + 1] - h[P], l = u / Math.abs(W);
    return y ? 1 - l : l;
  }
  return {
    isLastSnapPoint: L,
    activeSnapPoint: g,
    shouldFade: U,
    getPercentageDragged: J,
    setActiveSnapPoint: p,
    activeSnapPointIndex: D,
    onRelease: d,
    onDrag: Y,
    snapPointsOffset: h
  };
}
const qe = () => () => {
};
function Xe() {
  const { direction: t, isOpen: n, shouldScaleBackground: e, setBackgroundColorOnScale: a, noBodyStyles: i } = rt(), o = r.useRef(null), f = Ee(() => document.body.style.backgroundColor, []);
  function m() {
    return (window.innerWidth - Ot) / window.innerWidth;
  }
  r.useEffect(() => {
    if (n && e) {
      o.current && clearTimeout(o.current);
      const R = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!R) return;
      We(a && !i ? Tt(document.body, {
        background: "black"
      }) : qe, Tt(R, {
        transformOrigin: $(t) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${O.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${O.EASE.join(",")})`
      }));
      const E = Tt(R, {
        borderRadius: `${Xt}px`,
        overflow: "hidden",
        ...$(t) ? {
          transform: `scale(${m()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${m()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      return () => {
        E(), o.current = window.setTimeout(() => {
          f ? document.body.style.background = f : document.body.style.removeProperty("background");
        }, O.DURATION * 1e3);
      };
    }
  }, [
    n,
    e,
    f
  ]);
}
let ct = null;
function Ke({ isOpen: t, modal: n, nested: e, hasBeenOpened: a, preventScrollRestoration: i, noBodyStyles: o }) {
  const [f, m] = r.useState(() => typeof window < "u" ? window.location.href : ""), R = r.useRef(0), E = r.useCallback(() => {
    if (kt() && ct === null && t && !o) {
      ct = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: p, innerHeight: w } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-R.current}px`,
        left: `${-p}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const B = w - window.innerHeight;
        B && R.current >= w && (document.body.style.top = `${-(R.current + B)}px`);
      }), 300);
    }
  }, [
    t
  ]), g = r.useCallback(() => {
    if (kt() && ct !== null && !o) {
      const p = -parseInt(document.body.style.top, 10), w = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, ct), window.requestAnimationFrame(() => {
        if (i && f !== window.location.href) {
          m(window.location.href);
          return;
        }
        window.scrollTo(w, p);
      }), ct = null;
    }
  }, [
    f
  ]);
  return r.useEffect(() => {
    function p() {
      R.current = window.scrollY;
    }
    return p(), window.addEventListener("scroll", p), () => {
      window.removeEventListener("scroll", p);
    };
  }, []), r.useEffect(() => {
    if (n)
      return () => {
        typeof document > "u" || document.querySelector("[data-vaul-drawer]") || g();
      };
  }, [
    n,
    g
  ]), r.useEffect(() => {
    e || !a || (t ? (!window.matchMedia("(display-mode: standalone)").matches && E(), n || window.setTimeout(() => {
      g();
    }, 500)) : g());
  }, [
    t,
    a,
    f,
    n,
    e,
    E,
    g
  ]), {
    restorePositionSetting: g
  };
}
function Jt({ open: t, onOpenChange: n, children: e, onDrag: a, onRelease: i, snapPoints: o, shouldScaleBackground: f = !1, setBackgroundColorOnScale: m = !0, closeThreshold: R = ze, scrollLockTimeout: E = Ve, dismissible: g = !0, handleOnly: p = !1, fadeFromIndex: w = o && o.length - 1, activeSnapPoint: B, setActiveSnapPoint: L, fixed: D, modal: U = !0, onClose: h, nested: M, noBodyStyles: A = !1, direction: d = "bottom", defaultOpen: Y = !1, disablePreventScroll: J = !0, snapToSequentialPoint: u = !1, preventScrollRestoration: b = !1, repositionInputs: y = !0, onAnimationEnd: N, container: P, autoFocus: W = !1 }) {
  var l, F;
  const [_ = !1, z] = Gt({
    defaultProp: Y,
    prop: t,
    onChange: (s) => {
      n == null || n(s), !s && !M && se(), setTimeout(() => {
        N == null || N(s);
      }, O.DURATION * 1e3), s && !U && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), s || (document.body.style.pointerEvents = "auto");
    }
  }), [I, q] = r.useState(!1), [X, at] = r.useState(!1), [ee, xt] = r.useState(!1), tt = r.useRef(null), dt = r.useRef(null), ht = r.useRef(null), gt = r.useRef(null), ot = r.useRef(null), it = r.useRef(!1), vt = r.useRef(null), yt = r.useRef(0), et = r.useRef(!1), $t = r.useRef(!Y), At = r.useRef(0), c = r.useRef(null), Mt = r.useRef(((l = c.current) == null ? void 0 : l.getBoundingClientRect().height) || 0), Pt = r.useRef(((F = c.current) == null ? void 0 : F.getBoundingClientRect().width) || 0), bt = r.useRef(0), ne = r.useCallback((s) => {
    o && s === st.length - 1 && (dt.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: re, activeSnapPointIndex: nt, setActiveSnapPoint: It, onRelease: ae, snapPointsOffset: st, onDrag: oe, shouldFade: Nt, getPercentageDragged: ie } = je({
    snapPoints: o,
    activeSnapPointProp: B,
    setActiveSnapPointProp: L,
    drawerRef: c,
    fadeFromIndex: w,
    overlayRef: tt,
    onSnapPointChange: ne,
    direction: d,
    container: P,
    snapToSequentialPoint: u
  });
  _e({
    isDisabled: !_ || X || !U || ee || !I || !y || !J
  });
  const { restorePositionSetting: se } = Ke({
    isOpen: _,
    modal: U,
    nested: M ?? !1,
    hasBeenOpened: I,
    preventScrollRestoration: b,
    noBodyStyles: A
  });
  function ft() {
    return (window.innerWidth - Ot) / window.innerWidth;
  }
  function le(s) {
    var S, T;
    !g && !o || c.current && !c.current.contains(s.target) || (Mt.current = ((S = c.current) == null ? void 0 : S.getBoundingClientRect().height) || 0, Pt.current = ((T = c.current) == null ? void 0 : T.getBoundingClientRect().width) || 0, at(!0), ht.current = /* @__PURE__ */ new Date(), zt() && window.addEventListener("touchend", () => it.current = !1, {
      once: !0
    }), s.target.setPointerCapture(s.pointerId), yt.current = $(d) ? s.pageY : s.pageX);
  }
  function _t(s, S) {
    var T;
    let v = s;
    const C = (T = window.getSelection()) == null ? void 0 : T.toString(), k = c.current ? wt(c.current, d) : null, H = /* @__PURE__ */ new Date();
    if (v.tagName === "SELECT" || v.hasAttribute("data-vaul-no-drag") || v.closest("[data-vaul-no-drag]"))
      return !1;
    if (d === "right" || d === "left")
      return !0;
    if (dt.current && H.getTime() - dt.current.getTime() < 500)
      return !1;
    if (k !== null && (d === "bottom" ? k > 0 : k < 0))
      return !0;
    if (C && C.length > 0)
      return !1;
    if (ot.current && H.getTime() - ot.current.getTime() < E && k === 0 || S)
      return ot.current = H, !1;
    for (; v; ) {
      if (v.scrollHeight > v.clientHeight) {
        if (v.scrollTop !== 0)
          return ot.current = /* @__PURE__ */ new Date(), !1;
        if (v.getAttribute("role") === "dialog")
          return !0;
      }
      v = v.parentNode;
    }
    return !0;
  }
  function ue(s) {
    if (c.current && X) {
      const S = d === "bottom" || d === "right" ? 1 : -1, T = (yt.current - ($(d) ? s.pageY : s.pageX)) * S, v = T > 0, C = o && !g && !v;
      if (C && nt === 0) return;
      const k = Math.abs(T), H = document.querySelector("[data-vaul-drawer-wrapper]"), K = d === "bottom" || d === "top" ? Mt.current : Pt.current;
      let V = k / K;
      const Q = ie(k, v);
      if (Q !== null && (V = Q), C && V >= 1 || !it.current && !_t(s.target, v)) return;
      if (c.current.classList.add(Et), it.current = !0, x(c.current, {
        transition: "none"
      }), x(tt.current, {
        transition: "none"
      }), o && oe({
        draggedDistance: T
      }), v && !o) {
        const j = Fe(T), mt = Math.min(j * -1, 0) * S;
        x(c.current, {
          transform: $(d) ? `translate3d(0, ${mt}px, 0)` : `translate3d(${mt}px, 0, 0)`
        });
        return;
      }
      const G = 1 - V;
      if ((Nt || w && nt === w - 1) && (a == null || a(s, V), x(tt.current, {
        opacity: `${G}`,
        transition: "none"
      }, !0)), H && tt.current && f) {
        const j = Math.min(ft() + V * (1 - ft()), 1), mt = 8 - V * 8, Lt = Math.max(0, 14 - V * 14);
        x(H, {
          borderRadius: `${mt}px`,
          transform: $(d) ? `scale(${j}) translate3d(0, ${Lt}px, 0)` : `scale(${j}) translate3d(${Lt}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!o) {
        const j = k * S;
        x(c.current, {
          transform: $(d) ? `translate3d(0, ${j}px, 0)` : `translate3d(${j}px, 0, 0)`
        });
      }
    }
  }
  r.useEffect(() => {
    window.requestAnimationFrame(() => {
      $t.current = !0;
    });
  }, []), r.useEffect(() => {
    var s;
    function S() {
      if (!c.current || !y) return;
      const T = document.activeElement;
      if (Dt(T) || et.current) {
        var v;
        const C = ((v = window.visualViewport) == null ? void 0 : v.height) || 0, k = window.innerHeight;
        let H = k - C;
        const K = c.current.getBoundingClientRect().height || 0, V = K > k * 0.8;
        bt.current || (bt.current = K);
        const Q = c.current.getBoundingClientRect().top;
        if (Math.abs(At.current - H) > 60 && (et.current = !et.current), o && o.length > 0 && st && nt) {
          const G = st[nt] || 0;
          H += G;
        }
        if (At.current = H, K > C || et.current) {
          const G = c.current.getBoundingClientRect().height;
          let j = G;
          G > C && (j = C - (V ? Q : Ot)), D ? c.current.style.height = `${G - Math.max(H, 0)}px` : c.current.style.height = `${Math.max(j, C - Q)}px`;
        } else xe() || (c.current.style.height = `${bt.current}px`);
        o && o.length > 0 && !et.current ? c.current.style.bottom = "0px" : c.current.style.bottom = `${Math.max(H, 0)}px`;
      }
    }
    return (s = window.visualViewport) == null || s.addEventListener("resize", S), () => {
      var T;
      return (T = window.visualViewport) == null ? void 0 : T.removeEventListener("resize", S);
    };
  }, [
    nt,
    o,
    st
  ]);
  function lt(s) {
    ce(), h == null || h(), s || z(!1), setTimeout(() => {
      o && It(o[0]);
    }, O.DURATION * 1e3);
  }
  function Ht() {
    if (!c.current) return;
    const s = document.querySelector("[data-vaul-drawer-wrapper]"), S = wt(c.current, d);
    x(c.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${O.DURATION}s cubic-bezier(${O.EASE.join(",")})`
    }), x(tt.current, {
      transition: `opacity ${O.DURATION}s cubic-bezier(${O.EASE.join(",")})`,
      opacity: "1"
    }), f && S && S > 0 && _ && x(s, {
      borderRadius: `${Xt}px`,
      overflow: "hidden",
      ...$(d) ? {
        transform: `scale(${ft()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${ft()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${O.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${O.EASE.join(",")})`
    }, !0);
  }
  function ce() {
    !X || !c.current || (c.current.classList.remove(Et), it.current = !1, at(!1), gt.current = /* @__PURE__ */ new Date());
  }
  function de(s) {
    if (!X || !c.current) return;
    c.current.classList.remove(Et), it.current = !1, at(!1), gt.current = /* @__PURE__ */ new Date();
    const S = wt(c.current, d);
    if (!s || !_t(s.target, !1) || !S || Number.isNaN(S) || ht.current === null) return;
    const T = gt.current.getTime() - ht.current.getTime(), v = yt.current - ($(d) ? s.pageY : s.pageX), C = Math.abs(v) / T;
    if (C > 0.05 && (xt(!0), setTimeout(() => {
      xt(!1);
    }, 200)), o) {
      ae({
        draggedDistance: v * (d === "bottom" || d === "right" ? 1 : -1),
        closeDrawer: lt,
        velocity: C,
        dismissible: g
      }), i == null || i(s, !0);
      return;
    }
    if (d === "bottom" || d === "right" ? v > 0 : v < 0) {
      Ht(), i == null || i(s, !0);
      return;
    }
    if (C > qt) {
      lt(), i == null || i(s, !1);
      return;
    }
    var k;
    const H = Math.min((k = c.current.getBoundingClientRect().height) != null ? k : 0, window.innerHeight);
    var K;
    const V = Math.min((K = c.current.getBoundingClientRect().width) != null ? K : 0, window.innerWidth), Q = d === "left" || d === "right";
    if (Math.abs(S) >= (Q ? V : H) * R) {
      lt(), i == null || i(s, !1);
      return;
    }
    i == null || i(s, !0), Ht();
  }
  r.useEffect(() => (_ && (x(document.documentElement, {
    scrollBehavior: "auto"
  }), dt.current = /* @__PURE__ */ new Date()), () => {
    Ue(document.documentElement, "scrollBehavior");
  }), [
    _
  ]);
  function fe(s) {
    const S = s ? (window.innerWidth - Z) / window.innerWidth : 1, T = s ? -Z : 0;
    vt.current && window.clearTimeout(vt.current), x(c.current, {
      transition: `transform ${O.DURATION}s cubic-bezier(${O.EASE.join(",")})`,
      transform: `scale(${S}) translate3d(0, ${T}px, 0)`
    }), !s && c.current && (vt.current = setTimeout(() => {
      const v = wt(c.current, d);
      x(c.current, {
        transition: "none",
        transform: $(d) ? `translate3d(0, ${v}px, 0)` : `translate3d(${v}px, 0, 0)`
      });
    }, 500));
  }
  function me(s, S) {
    if (S < 0) return;
    const T = (window.innerWidth - Z) / window.innerWidth, v = T + S * (1 - T), C = -Z + S * Z;
    x(c.current, {
      transform: $(d) ? `scale(${v}) translate3d(0, ${C}px, 0)` : `scale(${v}) translate3d(${C}px, 0, 0)`,
      transition: "none"
    });
  }
  function pe(s, S) {
    const T = $(d) ? window.innerHeight : window.innerWidth, v = S ? (T - Z) / T : 1, C = S ? -Z : 0;
    S && x(c.current, {
      transition: `transform ${O.DURATION}s cubic-bezier(${O.EASE.join(",")})`,
      transform: $(d) ? `scale(${v}) translate3d(0, ${C}px, 0)` : `scale(${v}) translate3d(${C}px, 0, 0)`
    });
  }
  return r.useEffect(() => {
    U || window.requestAnimationFrame(() => {
      document.body.style.pointerEvents = "auto";
    });
  }, [
    U
  ]), /* @__PURE__ */ r.createElement(Se, {
    defaultOpen: Y,
    onOpenChange: (s) => {
      !g && !s || (s ? q(!0) : lt(!0), z(s));
    },
    open: _
  }, /* @__PURE__ */ r.createElement(Wt.Provider, {
    value: {
      activeSnapPoint: re,
      snapPoints: o,
      setActiveSnapPoint: It,
      drawerRef: c,
      overlayRef: tt,
      onOpenChange: n,
      onPress: le,
      onRelease: de,
      onDrag: ue,
      dismissible: g,
      shouldAnimate: $t,
      handleOnly: p,
      isOpen: _,
      isDragging: X,
      shouldFade: Nt,
      closeDrawer: lt,
      onNestedDrag: me,
      onNestedOpenChange: fe,
      onNestedRelease: pe,
      keyboardIsOpen: et,
      modal: U,
      snapPointsOffset: st,
      activeSnapPointIndex: nt,
      direction: d,
      shouldScaleBackground: f,
      setBackgroundColorOnScale: m,
      noBodyStyles: A,
      container: P,
      autoFocus: W
    }
  }, e));
}
const Qt = /* @__PURE__ */ r.forwardRef(function({ ...t }, n) {
  const { overlayRef: e, snapPoints: a, onRelease: i, shouldFade: o, isOpen: f, modal: m, shouldAnimate: R } = rt(), E = Yt(n, e), g = a && a.length > 0;
  if (!m)
    return null;
  const p = r.useCallback((w) => i(w), [
    i
  ]);
  return /* @__PURE__ */ r.createElement(we, {
    onMouseUp: p,
    ref: E,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": f && g ? "true" : "false",
    "data-vaul-snap-points-overlay": f && o ? "true" : "false",
    "data-vaul-animate": R != null && R.current ? "true" : "false",
    ...t
  });
});
Qt.displayName = "Drawer.Overlay";
const Zt = /* @__PURE__ */ r.forwardRef(function({ onPointerDownOutside: t, style: n, onOpenAutoFocus: e, ...a }, i) {
  const { drawerRef: o, onPress: f, onRelease: m, onDrag: R, keyboardIsOpen: E, snapPointsOffset: g, activeSnapPointIndex: p, modal: w, isOpen: B, direction: L, snapPoints: D, container: U, handleOnly: h, shouldAnimate: M, autoFocus: A } = rt(), [d, Y] = r.useState(!1), J = Yt(i, o), u = r.useRef(null), b = r.useRef(null), y = r.useRef(!1), N = D && D.length > 0;
  Xe();
  const P = (l, F, _ = 0) => {
    if (y.current) return !0;
    const z = Math.abs(l.y), I = Math.abs(l.x), q = I > z, X = [
      "bottom",
      "right"
    ].includes(F) ? 1 : -1;
    if (F === "left" || F === "right") {
      if (!(l.x * X < 0) && I >= 0 && I <= _)
        return q;
    } else if (!(l.y * X < 0) && z >= 0 && z <= _)
      return !q;
    return y.current = !0, !0;
  };
  r.useEffect(() => {
    N && window.requestAnimationFrame(() => {
      Y(!0);
    });
  }, []);
  function W(l) {
    u.current = null, y.current = !1, m(l);
  }
  return /* @__PURE__ */ r.createElement(he, {
    "data-vaul-drawer-direction": L,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": d ? "true" : "false",
    "data-vaul-snap-points": B && N ? "true" : "false",
    "data-vaul-custom-container": U ? "true" : "false",
    "data-vaul-animate": M != null && M.current ? "true" : "false",
    ...a,
    ref: J,
    style: g && g.length > 0 ? {
      "--snap-point-height": `${g[p ?? 0]}px`,
      ...n
    } : n,
    onPointerDown: (l) => {
      h || (a.onPointerDown == null || a.onPointerDown.call(a, l), u.current = {
        x: l.pageX,
        y: l.pageY
      }, f(l));
    },
    onOpenAutoFocus: (l) => {
      e == null || e(l), A || l.preventDefault();
    },
    onPointerDownOutside: (l) => {
      if (t == null || t(l), !w || l.defaultPrevented) {
        l.preventDefault();
        return;
      }
      E.current && (E.current = !1);
    },
    onFocusOutside: (l) => {
      if (!w) {
        l.preventDefault();
        return;
      }
    },
    onPointerMove: (l) => {
      if (b.current = l, h || (a.onPointerMove == null || a.onPointerMove.call(a, l), !u.current)) return;
      const F = l.pageY - u.current.y, _ = l.pageX - u.current.x, z = l.pointerType === "touch" ? 10 : 2;
      P({
        x: _,
        y: F
      }, L, z) ? R(l) : (Math.abs(_) > z || Math.abs(F) > z) && (u.current = null);
    },
    onPointerUp: (l) => {
      a.onPointerUp == null || a.onPointerUp.call(a, l), u.current = null, y.current = !1, m(l);
    },
    onPointerOut: (l) => {
      a.onPointerOut == null || a.onPointerOut.call(a, l), W(b.current);
    },
    onContextMenu: (l) => {
      a.onContextMenu == null || a.onContextMenu.call(a, l), b.current && W(b.current);
    }
  });
});
Zt.displayName = "Drawer.Content";
const Ge = 250, Je = 120, te = /* @__PURE__ */ r.forwardRef(function({ preventCycle: t = !1, children: n, ...e }, a) {
  const { closeDrawer: i, isDragging: o, snapPoints: f, activeSnapPoint: m, setActiveSnapPoint: R, dismissible: E, handleOnly: g, isOpen: p, onPress: w, onDrag: B } = rt(), L = r.useRef(null), D = r.useRef(!1);
  function U() {
    if (D.current) {
      A();
      return;
    }
    window.setTimeout(() => {
      h();
    }, Je);
  }
  function h() {
    if (o || t || D.current) {
      A();
      return;
    }
    if (A(), !f || f.length === 0) {
      E || i();
      return;
    }
    if (m === f[f.length - 1] && E) {
      i();
      return;
    }
    const Y = f.findIndex((u) => u === m);
    if (Y === -1) return;
    const J = f[Y + 1];
    R(J);
  }
  function M() {
    L.current = window.setTimeout(() => {
      D.current = !0;
    }, Ge);
  }
  function A() {
    L.current && window.clearTimeout(L.current), D.current = !1;
  }
  return /* @__PURE__ */ r.createElement("div", {
    onClick: U,
    onPointerCancel: A,
    onPointerDown: (d) => {
      g && w(d), M();
    },
    onPointerMove: (d) => {
      g && B(d);
    },
    // onPointerUp is already handled by the content component
    ref: a,
    "data-vaul-drawer-visible": p ? "true" : "false",
    "data-vaul-handle": "",
    "aria-hidden": "true",
    ...e
  }, /* @__PURE__ */ r.createElement("span", {
    "data-vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, n));
});
te.displayName = "Drawer.Handle";
function Qe({ onDrag: t, onOpenChange: n, ...e }) {
  const { onNestedDrag: a, onNestedOpenChange: i, onNestedRelease: o } = rt();
  if (!a)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return /* @__PURE__ */ r.createElement(Jt, {
    nested: !0,
    onClose: () => {
      i(!1);
    },
    onDrag: (f, m) => {
      a(f, m), t == null || t(f, m);
    },
    onOpenChange: (f) => {
      f && i(f);
    },
    onRelease: o,
    ...e
  });
}
function Ze(t) {
  const n = rt(), { container: e = n.container, ...a } = t;
  return /* @__PURE__ */ r.createElement(Re, {
    container: e,
    ...a
  });
}
const nn = {
  Root: Jt,
  NestedRoot: Qe,
  Content: Zt,
  Overlay: Qt,
  Trigger: ge,
  Portal: Ze,
  Handle: te,
  Close: ve,
  Title: ye,
  Description: be
};
export {
  Zt as Content,
  nn as Drawer,
  te as Handle,
  Qe as NestedRoot,
  Qt as Overlay,
  Ze as Portal,
  Jt as Root
};
