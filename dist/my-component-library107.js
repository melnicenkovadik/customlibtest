import * as t from "react";
var Pe = Object.defineProperty, Ce = Object.defineProperties, Me = Object.getOwnPropertyDescriptors, Y = Object.getOwnPropertySymbols, pe = Object.prototype.hasOwnProperty, de = Object.prototype.propertyIsEnumerable, se = (r, l, a) => l in r ? Pe(r, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[l] = a, xe = (r, l) => {
  for (var a in l || (l = {})) pe.call(l, a) && se(r, a, l[a]);
  if (Y) for (var a of Y(l)) de.call(l, a) && se(r, a, l[a]);
  return r;
}, ke = (r, l) => Ce(r, Me(l)), Re = (r, l) => {
  var a = {};
  for (var s in r) pe.call(r, s) && l.indexOf(s) < 0 && (a[s] = r[s]);
  if (r != null && Y) for (var s of Y(r)) l.indexOf(s) < 0 && de.call(r, s) && (a[s] = r[s]);
  return a;
}, De = "^\\d+$";
function Oe(r) {
  let l = setTimeout(r, 0), a = setTimeout(r, 10), s = setTimeout(r, 50);
  return [l, a, s];
}
function Te(r) {
  let l = t.useRef();
  return t.useEffect(() => {
    l.current = r;
  }), l.current;
}
var We = 18, me = 40, je = `${me}px`, Be = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function Ie({ containerRef: r, inputRef: l, pushPasswordManagerStrategy: a, isFocused: s }) {
  let T = t.useRef({ done: !1, refocused: !1 }), [c, N] = t.useState(!1), [w, z] = t.useState(!1), [W, V] = t.useState(!1), J = t.useMemo(() => a === "none" ? !1 : (a === "increase-width" || a === "experimental-no-flickering") && c && w, [c, w, a]), C = t.useCallback(() => {
    let f = r.current, d = l.current;
    if (!f || !d || W || a === "none") return;
    let o = f, b = o.getBoundingClientRect().left + o.offsetWidth, j = o.getBoundingClientRect().top + o.offsetHeight / 2, q = b - We, U = j;
    if (!(document.querySelectorAll(Be).length === 0 && document.elementFromPoint(q, U) === f) && (N(!0), V(!0), !T.current.refocused && document.activeElement === d)) {
      let A = [d.selectionStart, d.selectionEnd];
      d.blur(), d.focus(), d.setSelectionRange(A[0], A[1]), T.current.refocused = !0;
    }
  }, [r, l, W, a]);
  return t.useEffect(() => {
    let f = r.current;
    if (!f || a === "none") return;
    function d() {
      let b = window.innerWidth - f.getBoundingClientRect().right;
      z(b >= me);
    }
    d();
    let o = setInterval(d, 1e3);
    return () => {
      clearInterval(o);
    };
  }, [r, a]), t.useEffect(() => {
    let f = s || document.activeElement === l.current;
    if (a === "none" || !f) return;
    let d = setTimeout(C, 0), o = setTimeout(C, 2e3), b = setTimeout(C, 5e3), j = setTimeout(() => {
      V(!0);
    }, 6e3);
    return () => {
      clearTimeout(d), clearTimeout(o), clearTimeout(b), clearTimeout(j);
    };
  }, [l, s, a, C]), { hasPWMBadge: c, willPushPWMBadge: J, PWM_BADGE_SPACE_WIDTH: je };
}
var _e = t.createContext({}), Ae = t.forwardRef((r, l) => {
  var a = r, { value: s, onChange: T, maxLength: c, textAlign: N = "left", pattern: w = De, inputMode: z = "numeric", onComplete: W, pushPasswordManagerStrategy: V = "increase-width", containerClassName: J, noScriptCSSFallback: C = Fe, render: f, children: d } = a, o = Re(a, ["value", "onChange", "maxLength", "textAlign", "pattern", "inputMode", "onComplete", "pushPasswordManagerStrategy", "containerClassName", "noScriptCSSFallback", "render", "children"]), b, j, q, U, A;
  let [fe, ve] = t.useState(typeof o.defaultValue == "string" ? o.defaultValue : ""), p = s ?? fe, M = Te(p), F = t.useCallback((e) => {
    T == null || T(e), ve(e);
  }, [T]), h = t.useMemo(() => w ? typeof w == "string" ? new RegExp(w) : w : null, [w]), u = t.useRef(null), K = t.useRef(null), Q = t.useRef({ value: p, onChange: F, isIOS: typeof window < "u" && ((j = (b = window == null ? void 0 : window.CSS) == null ? void 0 : b.supports) == null ? void 0 : j.call(b, "-webkit-touch-callout", "none")) }), X = t.useRef({ prev: [(q = u.current) == null ? void 0 : q.selectionStart, (U = u.current) == null ? void 0 : U.selectionEnd, (A = u.current) == null ? void 0 : A.selectionDirection] });
  t.useImperativeHandle(l, () => u.current, []), t.useEffect(() => {
    let e = u.current, n = K.current;
    if (!e || !n) return;
    Q.current.value !== e.value && Q.current.onChange(e.value), X.current.prev = [e.selectionStart, e.selectionEnd, e.selectionDirection];
    function m() {
      if (document.activeElement !== e) {
        L(null), $(null);
        return;
      }
      let i = e.selectionStart, g = e.selectionEnd, E = e.selectionDirection, k = e.maxLength, R = e.value, _ = X.current.prev, y = -1, P = -1, D;
      if (R.length !== 0 && i !== null && g !== null) {
        let we = i === g, Ee = i === R.length && R.length < k;
        if (we && !Ee) {
          let O = i;
          if (O === 0) y = 0, P = 1, D = "forward";
          else if (O === k) y = O - 1, P = O, D = "backward";
          else if (k > 1 && R.length > 1) {
            let te = 0;
            if (_[0] !== null && _[1] !== null) {
              D = O < _[1] ? "backward" : "forward";
              let ye = _[0] === _[1] && _[0] < k;
              D === "backward" && !ye && (te = -1);
            }
            y = te + O, P = te + O + 1;
          }
        }
        y !== -1 && P !== -1 && y !== P && u.current.setSelectionRange(y, P, D);
      }
      let ue = y !== -1 ? y : i, ce = P !== -1 ? P : g, Se = D ?? E;
      L(ue), $(ce), X.current.prev = [ue, ce, Se];
    }
    if (document.addEventListener("selectionchange", m, { capture: !0 }), m(), document.activeElement === e && Z(!0), !document.getElementById("input-otp-style")) {
      let i = document.createElement("style");
      if (i.id = "input-otp-style", document.head.appendChild(i), i.sheet) {
        let g = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        G(i.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), G(i.sheet, `[data-input-otp]:autofill { ${g} }`), G(i.sheet, `[data-input-otp]:-webkit-autofill { ${g} }`), G(i.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), G(i.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let v = () => {
      n && n.style.setProperty("--root-height", `${e.clientHeight}px`);
    };
    v();
    let S = new ResizeObserver(v);
    return S.observe(e), () => {
      document.removeEventListener("selectionchange", m, { capture: !0 }), S.disconnect();
    };
  }, []);
  let [ne, re] = t.useState(!1), [H, Z] = t.useState(!1), [x, L] = t.useState(null), [B, $] = t.useState(null);
  t.useEffect(() => {
    Oe(() => {
      var e, n, m, v;
      (e = u.current) == null || e.dispatchEvent(new Event("input"));
      let S = (n = u.current) == null ? void 0 : n.selectionStart, i = (m = u.current) == null ? void 0 : m.selectionEnd, g = (v = u.current) == null ? void 0 : v.selectionDirection;
      S !== null && i !== null && (L(S), $(i), X.current.prev = [S, i, g]);
    });
  }, [p, H]), t.useEffect(() => {
    M !== void 0 && p !== M && M.length < c && p.length === c && (W == null || W(p));
  }, [c, W, M, p]);
  let I = Ie({ containerRef: K, inputRef: u, pushPasswordManagerStrategy: V, isFocused: H }), le = t.useCallback((e) => {
    let n = e.currentTarget.value.slice(0, c);
    if (n.length > 0 && h && !h.test(n)) {
      e.preventDefault();
      return;
    }
    typeof M == "string" && n.length < M.length && document.dispatchEvent(new Event("selectionchange")), F(n);
  }, [c, F, M, h]), ae = t.useCallback(() => {
    var e;
    if (u.current) {
      let n = Math.min(u.current.value.length, c - 1), m = u.current.value.length;
      (e = u.current) == null || e.setSelectionRange(n, m), L(n), $(m);
    }
    Z(!0);
  }, [c]), oe = t.useCallback((e) => {
    var n, m;
    let v = u.current;
    if (!Q.current.isIOS || !e.clipboardData || !v) return;
    let S = e.clipboardData.getData("text/plain");
    e.preventDefault();
    let i = (n = u.current) == null ? void 0 : n.selectionStart, g = (m = u.current) == null ? void 0 : m.selectionEnd, E = (i !== g ? p.slice(0, i) + S + p.slice(g) : p.slice(0, i) + S + p.slice(i)).slice(0, c);
    if (E.length > 0 && h && !h.test(E)) return;
    v.value = E, F(E);
    let k = Math.min(E.length, c - 1), R = E.length;
    v.setSelectionRange(k, R), L(k), $(R);
  }, [c, F, h, p]), ge = t.useMemo(() => ({ position: "relative", cursor: o.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [o.disabled]), ie = t.useMemo(() => ({ position: "absolute", inset: 0, width: I.willPushPWMBadge ? `calc(100% + ${I.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: I.willPushPWMBadge ? `inset(0 ${I.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: N, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [I.PWM_BADGE_SPACE_WIDTH, I.willPushPWMBadge, N]), he = t.useMemo(() => t.createElement("input", ke(xe({ autoComplete: o.autoComplete || "one-time-code" }, o), { "data-input-otp": !0, "data-input-otp-mss": x, "data-input-otp-mse": B, inputMode: z, pattern: h == null ? void 0 : h.source, style: ie, maxLength: c, value: p, ref: u, onPaste: (e) => {
    var n;
    oe(e), (n = o.onPaste) == null || n.call(o, e);
  }, onChange: le, onMouseOver: (e) => {
    var n;
    re(!0), (n = o.onMouseOver) == null || n.call(o, e);
  }, onMouseLeave: (e) => {
    var n;
    re(!1), (n = o.onMouseLeave) == null || n.call(o, e);
  }, onFocus: (e) => {
    var n;
    ae(), (n = o.onFocus) == null || n.call(o, e);
  }, onBlur: (e) => {
    var n;
    Z(!1), (n = o.onBlur) == null || n.call(o, e);
  } })), [le, ae, oe, z, ie, c, B, x, o, h == null ? void 0 : h.source, p]), ee = t.useMemo(() => ({ slots: Array.from({ length: c }).map((e, n) => {
    let m = H && x !== null && B !== null && (x === B && n === x || n >= x && n < B), v = p[n] !== void 0 ? p[n] : null;
    return { char: v, isActive: m, hasFakeCaret: m && v === null };
  }), isFocused: H, isHovering: !o.disabled && ne }), [H, ne, c, B, x, o.disabled, p]), be = t.useMemo(() => f ? f(ee) : t.createElement(_e.Provider, { value: ee }, d), [d, ee, f]);
  return t.createElement(t.Fragment, null, C !== null && t.createElement("noscript", null, t.createElement("style", null, C)), t.createElement("div", { ref: K, "data-input-otp-container": !0, style: ge, className: J }, be, t.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, he)));
});
Ae.displayName = "Input";
function G(r, l) {
  try {
    r.insertRule(l);
  } catch {
    console.error("input-otp could not insert CSS rule:", l);
  }
}
var Fe = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;
export {
  Ae as OTPInput,
  _e as OTPInputContext,
  De as REGEXP_ONLY_DIGITS
};
