import { Color as de } from "./my-component-library151.js";
/*!
 * Chart.js v4.4.5
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */
function Ut() {
}
const $t = /* @__PURE__ */ (() => {
  let e = 0;
  return () => e++;
})();
function L(e) {
  return e === null || typeof e > "u";
}
function T(e) {
  if (Array.isArray && Array.isArray(e))
    return !0;
  const t = Object.prototype.toString.call(e);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function _(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
function ge(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(+e);
}
function Yt(e, t) {
  return ge(e) ? e : t;
}
function x(e, t) {
  return typeof e > "u" ? t : e;
}
const Ae = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 * t : +e;
function Jt(e, t, n) {
  if (e && typeof e.call == "function")
    return e.apply(n, t);
}
function Xt(e, t, n, o) {
  let r, i, s;
  if (T(e))
    for (i = e.length, r = 0; r < i; r++)
      t.call(n, e[r], r);
  else if (_(e))
    for (s = Object.keys(e), i = s.length, r = 0; r < i; r++)
      t.call(n, e[s[r]], s[r]);
}
function Zt(e, t) {
  let n, o, r, i;
  if (!e || !t || e.length !== t.length)
    return !1;
  for (n = 0, o = e.length; n < o; ++n)
    if (r = e[n], i = t[n], r.datasetIndex !== i.datasetIndex || r.index !== i.index)
      return !1;
  return !0;
}
function N(e) {
  if (T(e))
    return e.map(N);
  if (_(e)) {
    const t = /* @__PURE__ */ Object.create(null), n = Object.keys(e), o = n.length;
    let r = 0;
    for (; r < o; ++r)
      t[n[r]] = N(e[n[r]]);
    return t;
  }
  return e;
}
function me(e) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(e) === -1;
}
function Be(e, t, n, o) {
  if (!me(e))
    return;
  const r = t[e], i = n[e];
  _(r) && _(i) ? E(r, i, o) : t[e] = N(i);
}
function E(e, t, n) {
  const o = T(t) ? t : [
    t
  ], r = o.length;
  if (!_(e))
    return e;
  n = n || {};
  const i = n.merger || Be;
  let s;
  for (let a = 0; a < r; ++a) {
    if (s = o[a], !_(s))
      continue;
    const c = Object.keys(s);
    for (let l = 0, u = c.length; l < u; ++l)
      i(c[l], e, s, n);
  }
  return e;
}
function je(e, t) {
  return E(e, t, {
    merger: De
  });
}
function De(e, t, n) {
  if (!me(e))
    return;
  const o = t[e], r = n[e];
  _(o) && _(r) ? je(o, r) : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = N(r));
}
const ee = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (e) => e,
  // default resolvers
  x: (e) => e.x,
  y: (e) => e.y
};
function We(e) {
  const t = e.split("."), n = [];
  let o = "";
  for (const r of t)
    o += r, o.endsWith("\\") ? o = o.slice(0, -1) + "." : (n.push(o), o = "");
  return n;
}
function Le(e) {
  const t = We(e);
  return (n) => {
    for (const o of t) {
      if (o === "")
        break;
      n = n && n[o];
    }
    return n;
  };
}
function Ne(e, t) {
  return (ee[t] || (ee[t] = Le(t)))(e);
}
function be(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Vt = (e) => typeof e < "u", F = (e) => typeof e == "function", en = (e, t) => {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
};
function tn(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const p = Math.PI, M = 2 * p, Ee = M + p, z = Number.POSITIVE_INFINITY, Fe = p / 180, S = p / 2, w = p / 4, te = p * 2 / 3, $ = Math.log10, ne = Math.sign;
function pe(e, t, n) {
  return Math.abs(e - t) < n;
}
function nn(e) {
  const t = Math.round(e);
  e = pe(e, t, e / 1e3) ? t : e;
  const n = Math.pow(10, Math.floor($(e))), o = e / n;
  return (o <= 1 ? 1 : o <= 2 ? 2 : o <= 5 ? 5 : 10) * n;
}
function on(e) {
  const t = [], n = Math.sqrt(e);
  let o;
  for (o = 1; o < n; o++)
    e % o === 0 && (t.push(o), t.push(e / o));
  return n === (n | 0) && t.push(n), t.sort((r, i) => r - i).pop(), t;
}
function rn(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function sn(e, t) {
  const n = Math.round(e);
  return n - t <= e && n + t >= e;
}
function an(e, t, n) {
  let o, r, i;
  for (o = 0, r = e.length; o < r; o++)
    i = e[o][n], isNaN(i) || (t.min = Math.min(t.min, i), t.max = Math.max(t.max, i));
}
function cn(e) {
  return e * (p / 180);
}
function ln(e) {
  return e * (180 / p);
}
function un(e) {
  if (!ge(e))
    return;
  let t = 1, n = 0;
  for (; Math.round(e * t) / t !== e; )
    t *= 10, n++;
  return n;
}
function fn(e, t) {
  const n = t.x - e.x, o = t.y - e.y, r = Math.sqrt(n * n + o * o);
  let i = Math.atan2(o, n);
  return i < -0.5 * p && (i += M), {
    angle: i,
    distance: r
  };
}
function oe(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function ze(e, t) {
  return (e - t + Ee) % M - p;
}
function O(e) {
  return (e % M + M) % M;
}
function He(e, t, n, o) {
  const r = O(e), i = O(t), s = O(n), a = O(i - r), c = O(s - r), l = O(r - i), u = O(r - s);
  return r === i || r === s || o && i === s || a > c && l < u;
}
function Y(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function hn(e) {
  return Y(e, -32768, 32767);
}
function qe(e, t, n, o = 1e-6) {
  return e >= Math.min(t, n) - o && e <= Math.max(t, n) + o;
}
function ye(e, t, n) {
  n = n || ((s) => e[s] < t);
  let o = e.length - 1, r = 0, i;
  for (; o - r > 1; )
    i = r + o >> 1, n(i) ? r = i : o = i;
  return {
    lo: r,
    hi: o
  };
}
const B = (e, t, n, o) => ye(e, n, o ? (r) => {
  const i = e[r][t];
  return i < n || i === n && e[r + 1][t] === n;
} : (r) => e[r][t] < n), dn = (e, t, n) => ye(e, n, (o) => e[o][t] >= n);
function gn(e, t, n) {
  let o = 0, r = e.length;
  for (; o < r && e[o] < t; )
    o++;
  for (; r > o && e[r - 1] > n; )
    r--;
  return o > 0 || r < e.length ? e.slice(o, r) : e;
}
const _e = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function mn(e, t) {
  if (e._chartjs) {
    e._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(e, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [
        t
      ]
    }
  }), _e.forEach((n) => {
    const o = "_onData" + be(n), r = e[n];
    Object.defineProperty(e, n, {
      configurable: !0,
      enumerable: !1,
      value(...i) {
        const s = r.apply(this, i);
        return e._chartjs.listeners.forEach((a) => {
          typeof a[o] == "function" && a[o](...i);
        }), s;
      }
    });
  });
}
function bn(e, t) {
  const n = e._chartjs;
  if (!n)
    return;
  const o = n.listeners, r = o.indexOf(t);
  r !== -1 && o.splice(r, 1), !(o.length > 0) && (_e.forEach((i) => {
    delete e[i];
  }), delete e._chartjs);
}
function pn(e) {
  const t = new Set(e);
  return t.size === e.length ? e : Array.from(t);
}
const Ke = function() {
  return typeof window > "u" ? function(e) {
    return e();
  } : window.requestAnimationFrame;
}();
function yn(e, t) {
  let n = [], o = !1;
  return function(...r) {
    n = r, o || (o = !0, Ke.call(window, () => {
      o = !1, e.apply(t, n);
    }));
  };
}
function _n(e, t) {
  let n;
  return function(...o) {
    return t ? (clearTimeout(n), n = setTimeout(e, t, o)) : e.apply(this, o), t;
  };
}
const Mn = (e) => e === "start" ? "left" : e === "end" ? "right" : "center", Sn = (e, t, n) => e === "start" ? t : e === "end" ? n : (t + n) / 2, On = (e, t, n, o) => e === (o ? "left" : "right") ? n : e === "center" ? (t + n) / 2 : t;
function wn(e, t, n) {
  const o = t.length;
  let r = 0, i = o;
  if (e._sorted) {
    const { iScale: s, _parsed: a } = e, c = s.axis, { min: l, max: u, minDefined: d, maxDefined: g } = s.getUserBounds();
    d && (r = Y(Math.min(
      // @ts-expect-error Need to type _parsed
      B(a, c, l).lo,
      // @ts-expect-error Need to fix types on _lookupByKey
      n ? o : B(t, c, s.getPixelForValue(l)).lo
    ), 0, o - 1)), g ? i = Y(Math.max(
      // @ts-expect-error Need to type _parsed
      B(a, s.axis, u, !0).hi + 1,
      // @ts-expect-error Need to fix types on _lookupByKey
      n ? 0 : B(t, c, s.getPixelForValue(u), !0).hi + 1
    ), r, o) - r : i = o - r;
  }
  return {
    start: r,
    count: i
  };
}
function xn(e) {
  const { xScale: t, yScale: n, _scaleRanges: o } = e, r = {
    xmin: t.min,
    xmax: t.max,
    ymin: n.min,
    ymax: n.max
  };
  if (!o)
    return e._scaleRanges = r, !0;
  const i = o.xmin !== t.min || o.xmax !== t.max || o.ymin !== n.min || o.ymax !== n.max;
  return Object.assign(o, r), i;
}
const j = (e) => e === 0 || e === 1, re = (e, t, n) => -(Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * M / n)), ie = (e, t, n) => Math.pow(2, -10 * e) * Math.sin((e - t) * M / n) + 1, Q = {
  linear: (e) => e,
  easeInQuad: (e) => e * e,
  easeOutQuad: (e) => -e * (e - 2),
  easeInOutQuad: (e) => (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
  easeInCubic: (e) => e * e * e,
  easeOutCubic: (e) => (e -= 1) * e * e + 1,
  easeInOutCubic: (e) => (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
  easeInQuart: (e) => e * e * e * e,
  easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
  easeInOutQuart: (e) => (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2),
  easeInQuint: (e) => e * e * e * e * e,
  easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
  easeInOutQuint: (e) => (e /= 0.5) < 1 ? 0.5 * e * e * e * e * e : 0.5 * ((e -= 2) * e * e * e * e + 2),
  easeInSine: (e) => -Math.cos(e * S) + 1,
  easeOutSine: (e) => Math.sin(e * S),
  easeInOutSine: (e) => -0.5 * (Math.cos(p * e) - 1),
  easeInExpo: (e) => e === 0 ? 0 : Math.pow(2, 10 * (e - 1)),
  easeOutExpo: (e) => e === 1 ? 1 : -Math.pow(2, -10 * e) + 1,
  easeInOutExpo: (e) => j(e) ? e : e < 0.5 ? 0.5 * Math.pow(2, 10 * (e * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
  easeInCirc: (e) => e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1),
  easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
  easeInOutCirc: (e) => (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
  easeInElastic: (e) => j(e) ? e : re(e, 0.075, 0.3),
  easeOutElastic: (e) => j(e) ? e : ie(e, 0.075, 0.3),
  easeInOutElastic(e) {
    return j(e) ? e : e < 0.5 ? 0.5 * re(e * 2, 0.1125, 0.45) : 0.5 + 0.5 * ie(e * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(e) {
    return e * e * ((1.70158 + 1) * e - 1.70158);
  },
  easeOutBack(e) {
    return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1;
  },
  easeInOutBack(e) {
    let t = 1.70158;
    return (e /= 0.5) < 1 ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t)) : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  },
  easeInBounce: (e) => 1 - Q.easeOutBounce(1 - e),
  easeOutBounce(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  },
  easeInOutBounce: (e) => e < 0.5 ? Q.easeInBounce(e * 2) * 0.5 : Q.easeOutBounce(e * 2 - 1) * 0.5 + 0.5
};
function J(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Pn(e) {
  return J(e) ? e : new de(e);
}
function G(e) {
  return J(e) ? e : new de(e).saturate(0.5).darken(0.1).hexString();
}
const Qe = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], Ge = [
  "color",
  "borderColor",
  "backgroundColor"
];
function Ue(e) {
  e.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), e.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (t) => t !== "onProgress" && t !== "onComplete" && t !== "fn"
  }), e.set("animations", {
    colors: {
      type: "color",
      properties: Ge
    },
    numbers: {
      type: "number",
      properties: Qe
    }
  }), e.describe("animations", {
    _fallback: "animation"
  }), e.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: (t) => t | 0
        }
      }
    }
  });
}
function $e(e) {
  e.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const se = /* @__PURE__ */ new Map();
function Ye(e, t) {
  t = t || {};
  const n = e + JSON.stringify(t);
  let o = se.get(n);
  return o || (o = new Intl.NumberFormat(e, t), se.set(n, o)), o;
}
function Je(e, t, n) {
  return Ye(t, n).format(e);
}
const Me = {
  values(e) {
    return T(e) ? e : "" + e;
  },
  numeric(e, t, n) {
    if (e === 0)
      return "0";
    const o = this.chart.options.locale;
    let r, i = e;
    if (n.length > 1) {
      const l = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
      (l < 1e-4 || l > 1e15) && (r = "scientific"), i = Xe(e, n);
    }
    const s = $(Math.abs(i)), a = isNaN(s) ? 1 : Math.max(Math.min(-1 * Math.floor(s), 20), 0), c = {
      notation: r,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(c, this.options.ticks.format), Je(e, o, c);
  },
  logarithmic(e, t, n) {
    if (e === 0)
      return "0";
    const o = n[t].significand || e / Math.pow(10, Math.floor($(e)));
    return [
      1,
      2,
      3,
      5,
      10,
      15
    ].includes(o) || t > 0.8 * n.length ? Me.numeric.call(this, e, t, n) : "";
  }
};
function Xe(e, t) {
  let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n;
}
var Ze = {
  formatters: Me
};
function Ve(e) {
  e.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, n) => n.lineWidth,
      tickColor: (t, n) => n.color,
      offset: !1
    },
    border: {
      display: !0,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: !1,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Ze.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), e.route("scale.ticks", "color", "", "color"), e.route("scale.grid", "color", "", "borderColor"), e.route("scale.border", "color", "", "borderColor"), e.route("scale.title", "color", "", "color"), e.describe("scale", {
    _fallback: !1,
    _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
    _indexable: (t) => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
  }), e.describe("scales", {
    _fallback: "scale"
  }), e.describe("scale.ticks", {
    _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
    _indexable: (t) => t !== "backdropPadding"
  });
}
const et = /* @__PURE__ */ Object.create(null), tt = /* @__PURE__ */ Object.create(null);
function A(e, t) {
  if (!t)
    return e;
  const n = t.split(".");
  for (let o = 0, r = n.length; o < r; ++o) {
    const i = n[o];
    e = e[i] || (e[i] = /* @__PURE__ */ Object.create(null));
  }
  return e;
}
function U(e, t, n) {
  return typeof t == "string" ? E(A(e, t), n) : E(A(e, ""), t);
}
class nt {
  constructor(t, n) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (o) => o.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove"
    ], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (o, r) => G(r.backgroundColor), this.hoverBorderColor = (o, r) => G(r.borderColor), this.hoverColor = (o, r) => G(r.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(n);
  }
  set(t, n) {
    return U(this, t, n);
  }
  get(t) {
    return A(this, t);
  }
  describe(t, n) {
    return U(tt, t, n);
  }
  override(t, n) {
    return U(et, t, n);
  }
  route(t, n, o, r) {
    const i = A(this, t), s = A(this, o), a = "_" + n;
    Object.defineProperties(i, {
      [a]: {
        value: i[n],
        writable: !0
      },
      [n]: {
        enumerable: !0,
        get() {
          const c = this[a], l = s[r];
          return _(c) ? Object.assign({}, l, c) : x(c, l);
        },
        set(c) {
          this[a] = c;
        }
      }
    });
  }
  apply(t) {
    t.forEach((n) => n(this));
  }
}
var ot = /* @__PURE__ */ new nt({
  _scriptable: (e) => !e.startsWith("on"),
  _indexable: (e) => e !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [
  Ue,
  $e,
  Ve
]);
function rt(e) {
  return !e || L(e.size) || L(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family;
}
function Tn(e, t, n, o, r) {
  let i = t[r];
  return i || (i = t[r] = e.measureText(r).width, n.push(r)), i > o && (o = i), o;
}
function kn(e, t, n) {
  const o = e.currentDevicePixelRatio, r = n !== 0 ? Math.max(n / 2, 0.5) : 0;
  return Math.round((t - r) * o) / o + r;
}
function Cn(e, t) {
  !t && !e || (t = t || e.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, e.width, e.height), t.restore());
}
function Rn(e, t, n, o) {
  it(e, t, n, o, null);
}
function it(e, t, n, o, r) {
  let i, s, a, c, l, u, d, g;
  const m = t.pointStyle, b = t.rotation, h = t.radius;
  let f = (b || 0) * Fe;
  if (m && typeof m == "object" && (i = m.toString(), i === "[object HTMLImageElement]" || i === "[object HTMLCanvasElement]")) {
    e.save(), e.translate(n, o), e.rotate(f), e.drawImage(m, -m.width / 2, -m.height / 2, m.width, m.height), e.restore();
    return;
  }
  if (!(isNaN(h) || h <= 0)) {
    switch (e.beginPath(), m) {
      default:
        r ? e.ellipse(n, o, r / 2, h, 0, 0, M) : e.arc(n, o, h, 0, M), e.closePath();
        break;
      case "triangle":
        u = r ? r / 2 : h, e.moveTo(n + Math.sin(f) * u, o - Math.cos(f) * h), f += te, e.lineTo(n + Math.sin(f) * u, o - Math.cos(f) * h), f += te, e.lineTo(n + Math.sin(f) * u, o - Math.cos(f) * h), e.closePath();
        break;
      case "rectRounded":
        l = h * 0.516, c = h - l, s = Math.cos(f + w) * c, d = Math.cos(f + w) * (r ? r / 2 - l : c), a = Math.sin(f + w) * c, g = Math.sin(f + w) * (r ? r / 2 - l : c), e.arc(n - d, o - a, l, f - p, f - S), e.arc(n + g, o - s, l, f - S, f), e.arc(n + d, o + a, l, f, f + S), e.arc(n - g, o + s, l, f + S, f + p), e.closePath();
        break;
      case "rect":
        if (!b) {
          c = Math.SQRT1_2 * h, u = r ? r / 2 : c, e.rect(n - u, o - c, 2 * u, 2 * c);
          break;
        }
        f += w;
      case "rectRot":
        d = Math.cos(f) * (r ? r / 2 : h), s = Math.cos(f) * h, a = Math.sin(f) * h, g = Math.sin(f) * (r ? r / 2 : h), e.moveTo(n - d, o - a), e.lineTo(n + g, o - s), e.lineTo(n + d, o + a), e.lineTo(n - g, o + s), e.closePath();
        break;
      case "crossRot":
        f += w;
      case "cross":
        d = Math.cos(f) * (r ? r / 2 : h), s = Math.cos(f) * h, a = Math.sin(f) * h, g = Math.sin(f) * (r ? r / 2 : h), e.moveTo(n - d, o - a), e.lineTo(n + d, o + a), e.moveTo(n + g, o - s), e.lineTo(n - g, o + s);
        break;
      case "star":
        d = Math.cos(f) * (r ? r / 2 : h), s = Math.cos(f) * h, a = Math.sin(f) * h, g = Math.sin(f) * (r ? r / 2 : h), e.moveTo(n - d, o - a), e.lineTo(n + d, o + a), e.moveTo(n + g, o - s), e.lineTo(n - g, o + s), f += w, d = Math.cos(f) * (r ? r / 2 : h), s = Math.cos(f) * h, a = Math.sin(f) * h, g = Math.sin(f) * (r ? r / 2 : h), e.moveTo(n - d, o - a), e.lineTo(n + d, o + a), e.moveTo(n + g, o - s), e.lineTo(n - g, o + s);
        break;
      case "line":
        s = r ? r / 2 : Math.cos(f) * h, a = Math.sin(f) * h, e.moveTo(n - s, o - a), e.lineTo(n + s, o + a);
        break;
      case "dash":
        e.moveTo(n, o), e.lineTo(n + Math.cos(f) * (r ? r / 2 : h), o + Math.sin(f) * h);
        break;
      case !1:
        e.closePath();
        break;
    }
    e.fill(), t.borderWidth > 0 && e.stroke();
  }
}
function ae(e, t, n) {
  return n = n || 0.5, !t || e && e.x > t.left - n && e.x < t.right + n && e.y > t.top - n && e.y < t.bottom + n;
}
function In(e, t) {
  e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip();
}
function vn(e) {
  e.restore();
}
function An(e, t, n, o, r) {
  if (!t)
    return e.lineTo(n.x, n.y);
  if (r === "middle") {
    const i = (t.x + n.x) / 2;
    e.lineTo(i, t.y), e.lineTo(i, n.y);
  } else r === "after" != !!o ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
  e.lineTo(n.x, n.y);
}
function Bn(e, t, n, o) {
  if (!t)
    return e.lineTo(n.x, n.y);
  e.bezierCurveTo(o ? t.cp1x : t.cp2x, o ? t.cp1y : t.cp2y, o ? n.cp2x : n.cp1x, o ? n.cp2y : n.cp1y, n.x, n.y);
}
function st(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]), L(t.rotation) || e.rotate(t.rotation), t.color && (e.fillStyle = t.color), t.textAlign && (e.textAlign = t.textAlign), t.textBaseline && (e.textBaseline = t.textBaseline);
}
function at(e, t, n, o, r) {
  if (r.strikethrough || r.underline) {
    const i = e.measureText(o), s = t - i.actualBoundingBoxLeft, a = t + i.actualBoundingBoxRight, c = n - i.actualBoundingBoxAscent, l = n + i.actualBoundingBoxDescent, u = r.strikethrough ? (c + l) / 2 : l;
    e.strokeStyle = e.fillStyle, e.beginPath(), e.lineWidth = r.decorationWidth || 2, e.moveTo(s, u), e.lineTo(a, u), e.stroke();
  }
}
function ct(e, t) {
  const n = e.fillStyle;
  e.fillStyle = t.color, e.fillRect(t.left, t.top, t.width, t.height), e.fillStyle = n;
}
function jn(e, t, n, o, r, i = {}) {
  const s = T(t) ? t : [
    t
  ], a = i.strokeWidth > 0 && i.strokeColor !== "";
  let c, l;
  for (e.save(), e.font = r.string, st(e, i), c = 0; c < s.length; ++c)
    l = s[c], i.backdrop && ct(e, i.backdrop), a && (i.strokeColor && (e.strokeStyle = i.strokeColor), L(i.strokeWidth) || (e.lineWidth = i.strokeWidth), e.strokeText(l, n, o, i.maxWidth)), e.fillText(l, n, o, i.maxWidth), at(e, n, o, l, i), o += Number(r.lineHeight);
  e.restore();
}
function Dn(e, t) {
  const { x: n, y: o, w: r, h: i, radius: s } = t;
  e.arc(n + s.topLeft, o + s.topLeft, s.topLeft, 1.5 * p, p, !0), e.lineTo(n, o + i - s.bottomLeft), e.arc(n + s.bottomLeft, o + i - s.bottomLeft, s.bottomLeft, p, S, !0), e.lineTo(n + r - s.bottomRight, o + i), e.arc(n + r - s.bottomRight, o + i - s.bottomRight, s.bottomRight, S, 0, !0), e.lineTo(n + r, o + s.topRight), e.arc(n + r - s.topRight, o + s.topRight, s.topRight, 0, -S, !0), e.lineTo(n + s.topLeft, o);
}
const lt = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, ut = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function ft(e, t) {
  const n = ("" + e).match(lt);
  if (!n || n[1] === "normal")
    return t * 1.2;
  switch (e = +n[2], n[3]) {
    case "px":
      return e;
    case "%":
      e /= 100;
      break;
  }
  return t * e;
}
const ht = (e) => +e || 0;
function Se(e, t) {
  const n = {}, o = _(t), r = o ? Object.keys(t) : t, i = _(e) ? o ? (s) => x(e[s], e[t[s]]) : (s) => e[s] : () => e;
  for (const s of r)
    n[s] = ht(i(s));
  return n;
}
function dt(e) {
  return Se(e, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function Wn(e) {
  return Se(e, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function Ln(e) {
  const t = dt(e);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function Nn(e, t) {
  e = e || {}, t = t || ot.font;
  let n = x(e.size, t.size);
  typeof n == "string" && (n = parseInt(n, 10));
  let o = x(e.style, t.style);
  o && !("" + o).match(ut) && (console.warn('Invalid font style specified: "' + o + '"'), o = void 0);
  const r = {
    family: x(e.family, t.family),
    lineHeight: ft(x(e.lineHeight, t.lineHeight), n),
    size: n,
    style: o,
    weight: x(e.weight, t.weight),
    string: ""
  };
  return r.string = rt(r), r;
}
function En(e, t, n, o) {
  let r, i, s;
  for (r = 0, i = e.length; r < i; ++r)
    if (s = e[r], s !== void 0 && s !== void 0)
      return s;
}
function Fn(e, t, n) {
  const { min: o, max: r } = e, i = Ae(t, (r - o) / 2), s = (a, c) => n && a === 0 ? 0 : a + c;
  return {
    min: s(o, -Math.abs(i)),
    max: s(r, i)
  };
}
function gt(e, t) {
  return Object.assign(Object.create(e), t);
}
function Oe(e, t = [
  ""
], n, o, r = () => e[0]) {
  const i = n || e;
  typeof o > "u" && (o = Pe("_fallback", e));
  const s = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: i,
    _fallback: o,
    _getTarget: r,
    override: (a) => Oe([
      a,
      ...e
    ], t, i, o)
  };
  return new Proxy(s, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(a, c) {
      return delete a[c], delete a._keys, delete e[0][c], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(a, c) {
      return we(a, c, () => wt(c, t, e, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(a, c) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], c);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e[0]);
    },
    /**
    * A trap for the in operator.
    */
    has(a, c) {
      return le(a).includes(c);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(a) {
      return le(a);
    },
    /**
    * A trap for setting property values.
    */
    set(a, c, l) {
      const u = a._storage || (a._storage = r());
      return a[c] = u[c] = l, delete a._keys, !0;
    }
  });
}
function H(e, t, n, o) {
  const r = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: n,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: mt(e, o),
    setContext: (i) => H(e, i, n, o),
    override: (i) => H(e.override(i), t, n, o)
  };
  return new Proxy(r, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(i, s) {
      return delete i[s], delete e[s], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(i, s, a) {
      return we(i, s, () => pt(i, s, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(i, s) {
      return i._descriptors.allKeys ? Reflect.has(e, s) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(e, s);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e);
    },
    /**
    * A trap for the in operator.
    */
    has(i, s) {
      return Reflect.has(e, s);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys() {
      return Reflect.ownKeys(e);
    },
    /**
    * A trap for setting property values.
    */
    set(i, s, a) {
      return e[s] = a, delete i[s], !0;
    }
  });
}
function mt(e, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: n = t.scriptable, _indexable: o = t.indexable, _allKeys: r = t.allKeys } = e;
  return {
    allKeys: r,
    scriptable: n,
    indexable: o,
    isScriptable: F(n) ? n : () => n,
    isIndexable: F(o) ? o : () => o
  };
}
const bt = (e, t) => e ? e + be(t) : t, X = (e, t) => _(t) && e !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function we(e, t, n) {
  if (Object.prototype.hasOwnProperty.call(e, t) || t === "constructor")
    return e[t];
  const o = n();
  return e[t] = o, o;
}
function pt(e, t, n) {
  const { _proxy: o, _context: r, _subProxy: i, _descriptors: s } = e;
  let a = o[t];
  return F(a) && s.isScriptable(t) && (a = yt(t, a, e, n)), T(a) && a.length && (a = _t(t, a, e, s.isIndexable)), X(t, a) && (a = H(a, r, i && i[t], s)), a;
}
function yt(e, t, n, o) {
  const { _proxy: r, _context: i, _subProxy: s, _stack: a } = n;
  if (a.has(e))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + e);
  a.add(e);
  let c = t(i, s || o);
  return a.delete(e), X(e, c) && (c = Z(r._scopes, r, e, c)), c;
}
function _t(e, t, n, o) {
  const { _proxy: r, _context: i, _subProxy: s, _descriptors: a } = n;
  if (typeof i.index < "u" && o(e))
    return t[i.index % t.length];
  if (_(t[0])) {
    const c = t, l = r._scopes.filter((u) => u !== c);
    t = [];
    for (const u of c) {
      const d = Z(l, r, e, u);
      t.push(H(d, i, s && s[e], a));
    }
  }
  return t;
}
function xe(e, t, n) {
  return F(e) ? e(t, n) : e;
}
const Mt = (e, t) => e === !0 ? t : typeof e == "string" ? Ne(t, e) : void 0;
function St(e, t, n, o, r) {
  for (const i of t) {
    const s = Mt(n, i);
    if (s) {
      e.add(s);
      const a = xe(s._fallback, n, r);
      if (typeof a < "u" && a !== n && a !== o)
        return a;
    } else if (s === !1 && typeof o < "u" && n !== o)
      return null;
  }
  return !1;
}
function Z(e, t, n, o) {
  const r = t._rootScopes, i = xe(t._fallback, n, o), s = [
    ...e,
    ...r
  ], a = /* @__PURE__ */ new Set();
  a.add(o);
  let c = ce(a, s, n, i || n, o);
  return c === null || typeof i < "u" && i !== n && (c = ce(a, s, i, c, o), c === null) ? !1 : Oe(Array.from(a), [
    ""
  ], r, i, () => Ot(t, n, o));
}
function ce(e, t, n, o, r) {
  for (; n; )
    n = St(e, t, n, o, r);
  return n;
}
function Ot(e, t, n) {
  const o = e._getTarget();
  t in o || (o[t] = {});
  const r = o[t];
  return T(r) && _(n) ? n : r || {};
}
function wt(e, t, n, o) {
  let r;
  for (const i of t)
    if (r = Pe(bt(i, e), n), typeof r < "u")
      return X(e, r) ? Z(n, o, e, r) : r;
}
function Pe(e, t) {
  for (const n of t) {
    if (!n)
      continue;
    const o = n[e];
    if (typeof o < "u")
      return o;
  }
}
function le(e) {
  let t = e._keys;
  return t || (t = e._keys = xt(e._scopes)), t;
}
function xt(e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    for (const o of Object.keys(n).filter((r) => !r.startsWith("_")))
      t.add(o);
  return Array.from(t);
}
const Pt = Number.EPSILON || 1e-14, I = (e, t) => t < e.length && !e[t].skip && e[t], Te = (e) => e === "x" ? "y" : "x";
function Tt(e, t, n, o) {
  const r = e.skip ? t : e, i = t, s = n.skip ? t : n, a = oe(i, r), c = oe(s, i);
  let l = a / (a + c), u = c / (a + c);
  l = isNaN(l) ? 0 : l, u = isNaN(u) ? 0 : u;
  const d = o * l, g = o * u;
  return {
    previous: {
      x: i.x - d * (s.x - r.x),
      y: i.y - d * (s.y - r.y)
    },
    next: {
      x: i.x + g * (s.x - r.x),
      y: i.y + g * (s.y - r.y)
    }
  };
}
function kt(e, t, n) {
  const o = e.length;
  let r, i, s, a, c, l = I(e, 0);
  for (let u = 0; u < o - 1; ++u)
    if (c = l, l = I(e, u + 1), !(!c || !l)) {
      if (pe(t[u], 0, Pt)) {
        n[u] = n[u + 1] = 0;
        continue;
      }
      r = n[u] / t[u], i = n[u + 1] / t[u], a = Math.pow(r, 2) + Math.pow(i, 2), !(a <= 9) && (s = 3 / Math.sqrt(a), n[u] = r * s * t[u], n[u + 1] = i * s * t[u]);
    }
}
function Ct(e, t, n = "x") {
  const o = Te(n), r = e.length;
  let i, s, a, c = I(e, 0);
  for (let l = 0; l < r; ++l) {
    if (s = a, a = c, c = I(e, l + 1), !a)
      continue;
    const u = a[n], d = a[o];
    s && (i = (u - s[n]) / 3, a[`cp1${n}`] = u - i, a[`cp1${o}`] = d - i * t[l]), c && (i = (c[n] - u) / 3, a[`cp2${n}`] = u + i, a[`cp2${o}`] = d + i * t[l]);
  }
}
function Rt(e, t = "x") {
  const n = Te(t), o = e.length, r = Array(o).fill(0), i = Array(o);
  let s, a, c, l = I(e, 0);
  for (s = 0; s < o; ++s)
    if (a = c, c = l, l = I(e, s + 1), !!c) {
      if (l) {
        const u = l[t] - c[t];
        r[s] = u !== 0 ? (l[n] - c[n]) / u : 0;
      }
      i[s] = a ? l ? ne(r[s - 1]) !== ne(r[s]) ? 0 : (r[s - 1] + r[s]) / 2 : r[s - 1] : r[s];
    }
  kt(e, r, i), Ct(e, i, t);
}
function D(e, t, n) {
  return Math.max(Math.min(e, n), t);
}
function It(e, t) {
  let n, o, r, i, s, a = ae(e[0], t);
  for (n = 0, o = e.length; n < o; ++n)
    s = i, i = a, a = n < o - 1 && ae(e[n + 1], t), i && (r = e[n], s && (r.cp1x = D(r.cp1x, t.left, t.right), r.cp1y = D(r.cp1y, t.top, t.bottom)), a && (r.cp2x = D(r.cp2x, t.left, t.right), r.cp2y = D(r.cp2y, t.top, t.bottom)));
}
function zn(e, t, n, o, r) {
  let i, s, a, c;
  if (t.spanGaps && (e = e.filter((l) => !l.skip)), t.cubicInterpolationMode === "monotone")
    Rt(e, r);
  else {
    let l = o ? e[e.length - 1] : e[0];
    for (i = 0, s = e.length; i < s; ++i)
      a = e[i], c = Tt(l, a, e[Math.min(i + 1, s - (o ? 0 : 1)) % s], t.tension), a.cp1x = c.previous.x, a.cp1y = c.previous.y, a.cp2x = c.next.x, a.cp2y = c.next.y, l = a;
  }
  t.capBezierPoints && It(e, n);
}
function vt() {
  return typeof window < "u" && typeof document < "u";
}
function At(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function q(e, t, n) {
  let o;
  return typeof e == "string" ? (o = parseInt(e, 10), e.indexOf("%") !== -1 && (o = o / 100 * t.parentNode[n])) : o = e, o;
}
const K = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function Bt(e, t) {
  return K(e).getPropertyValue(t);
}
const jt = [
  "top",
  "right",
  "bottom",
  "left"
];
function P(e, t, n) {
  const o = {};
  n = n ? "-" + n : "";
  for (let r = 0; r < 4; r++) {
    const i = jt[r];
    o[i] = parseFloat(e[t + "-" + i + n]) || 0;
  }
  return o.width = o.left + o.right, o.height = o.top + o.bottom, o;
}
const Dt = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot);
function Wt(e, t) {
  const n = e.touches, o = n && n.length ? n[0] : e, { offsetX: r, offsetY: i } = o;
  let s = !1, a, c;
  if (Dt(r, i, e.target))
    a = r, c = i;
  else {
    const l = t.getBoundingClientRect();
    a = o.clientX - l.left, c = o.clientY - l.top, s = !0;
  }
  return {
    x: a,
    y: c,
    box: s
  };
}
function Hn(e, t) {
  if ("native" in e)
    return e;
  const { canvas: n, currentDevicePixelRatio: o } = t, r = K(n), i = r.boxSizing === "border-box", s = P(r, "padding"), a = P(r, "border", "width"), { x: c, y: l, box: u } = Wt(e, n), d = s.left + (u && a.left), g = s.top + (u && a.top);
  let { width: m, height: b } = t;
  return i && (m -= s.width + a.width, b -= s.height + a.height), {
    x: Math.round((c - d) / m * n.width / o),
    y: Math.round((l - g) / b * n.height / o)
  };
}
function Lt(e, t, n) {
  let o, r;
  if (t === void 0 || n === void 0) {
    const i = e && At(e);
    if (!i)
      t = e.clientWidth, n = e.clientHeight;
    else {
      const s = i.getBoundingClientRect(), a = K(i), c = P(a, "border", "width"), l = P(a, "padding");
      t = s.width - l.width - c.width, n = s.height - l.height - c.height, o = q(a.maxWidth, i, "clientWidth"), r = q(a.maxHeight, i, "clientHeight");
    }
  }
  return {
    width: t,
    height: n,
    maxWidth: o || z,
    maxHeight: r || z
  };
}
const W = (e) => Math.round(e * 10) / 10;
function qn(e, t, n, o) {
  const r = K(e), i = P(r, "margin"), s = q(r.maxWidth, e, "clientWidth") || z, a = q(r.maxHeight, e, "clientHeight") || z, c = Lt(e, t, n);
  let { width: l, height: u } = c;
  if (r.boxSizing === "content-box") {
    const g = P(r, "border", "width"), m = P(r, "padding");
    l -= m.width + g.width, u -= m.height + g.height;
  }
  return l = Math.max(0, l - i.width), u = Math.max(0, o ? l / o : u - i.height), l = W(Math.min(l, s, c.maxWidth)), u = W(Math.min(u, a, c.maxHeight)), l && !u && (u = W(l / 2)), (t !== void 0 || n !== void 0) && o && c.height && u > c.height && (u = c.height, l = W(Math.floor(u * o))), {
    width: l,
    height: u
  };
}
function Kn(e, t, n) {
  const o = t || 1, r = Math.floor(e.height * o), i = Math.floor(e.width * o);
  e.height = Math.floor(e.height), e.width = Math.floor(e.width);
  const s = e.canvas;
  return s.style && (n || !s.style.height && !s.style.width) && (s.style.height = `${e.height}px`, s.style.width = `${e.width}px`), e.currentDevicePixelRatio !== o || s.height !== r || s.width !== i ? (e.currentDevicePixelRatio = o, s.height = r, s.width = i, e.ctx.setTransform(o, 0, 0, o, 0, 0), !0) : !1;
}
const Qn = function() {
  let e = !1;
  try {
    const t = {
      get passive() {
        return e = !0, !1;
      }
    };
    vt() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return e;
}();
function Gn(e, t) {
  const n = Bt(e, t), o = n && n.match(/^(\d+)(\.\d+)?px$/);
  return o ? +o[1] : void 0;
}
function R(e, t, n, o) {
  return {
    x: e.x + n * (t.x - e.x),
    y: e.y + n * (t.y - e.y)
  };
}
function Un(e, t, n, o) {
  return {
    x: e.x + n * (t.x - e.x),
    y: o === "middle" ? n < 0.5 ? e.y : t.y : o === "after" ? n < 1 ? e.y : t.y : n > 0 ? t.y : e.y
  };
}
function $n(e, t, n, o) {
  const r = {
    x: e.cp2x,
    y: e.cp2y
  }, i = {
    x: t.cp1x,
    y: t.cp1y
  }, s = R(e, r, n), a = R(r, i, n), c = R(i, t, n), l = R(s, a, n), u = R(a, c, n);
  return R(l, u, n);
}
const Nt = function(e, t) {
  return {
    x(n) {
      return e + e + t - n;
    },
    setWidth(n) {
      t = n;
    },
    textAlign(n) {
      return n === "center" ? n : n === "right" ? "left" : "right";
    },
    xPlus(n, o) {
      return n - o;
    },
    leftForLtr(n, o) {
      return n - o;
    }
  };
}, Et = function() {
  return {
    x(e) {
      return e;
    },
    setWidth(e) {
    },
    textAlign(e) {
      return e;
    },
    xPlus(e, t) {
      return e + t;
    },
    leftForLtr(e, t) {
      return e;
    }
  };
};
function Yn(e, t, n) {
  return e ? Nt(t, n) : Et();
}
function Jn(e, t) {
  let n, o;
  (t === "ltr" || t === "rtl") && (n = e.canvas.style, o = [
    n.getPropertyValue("direction"),
    n.getPropertyPriority("direction")
  ], n.setProperty("direction", t, "important"), e.prevTextDirection = o);
}
function Xn(e, t) {
  t !== void 0 && (delete e.prevTextDirection, e.canvas.style.setProperty("direction", t[0], t[1]));
}
function ke(e) {
  return e === "angle" ? {
    between: He,
    compare: ze,
    normalize: O
  } : {
    between: qe,
    compare: (t, n) => t - n,
    normalize: (t) => t
  };
}
function ue({ start: e, end: t, count: n, loop: o, style: r }) {
  return {
    start: e % n,
    end: t % n,
    loop: o && (t - e + 1) % n === 0,
    style: r
  };
}
function Ft(e, t, n) {
  const { property: o, start: r, end: i } = n, { between: s, normalize: a } = ke(o), c = t.length;
  let { start: l, end: u, loop: d } = e, g, m;
  if (d) {
    for (l += c, u += c, g = 0, m = c; g < m && s(a(t[l % c][o]), r, i); ++g)
      l--, u--;
    l %= c, u %= c;
  }
  return u < l && (u += c), {
    start: l,
    end: u,
    loop: d,
    style: e.style
  };
}
function zt(e, t, n) {
  if (!n)
    return [
      e
    ];
  const { property: o, start: r, end: i } = n, s = t.length, { compare: a, between: c, normalize: l } = ke(o), { start: u, end: d, loop: g, style: m } = Ft(e, t, n), b = [];
  let h = !1, f = null, y, k, v;
  const Ce = () => c(r, v, y) && a(r, v) !== 0, Re = () => a(i, y) === 0 || c(i, v, y), Ie = () => h || Ce(), ve = () => !h || Re();
  for (let C = u, V = u; C <= d; ++C)
    k = t[C % s], !k.skip && (y = l(k[o]), y !== v && (h = c(y, r, i), f === null && Ie() && (f = a(y, r) === 0 ? C : V), f !== null && ve() && (b.push(ue({
      start: f,
      end: C,
      loop: g,
      count: s,
      style: m
    })), f = null), V = C, v = y));
  return f !== null && b.push(ue({
    start: f,
    end: d,
    loop: g,
    count: s,
    style: m
  })), b;
}
function Zn(e, t) {
  const n = [], o = e.segments;
  for (let r = 0; r < o.length; r++) {
    const i = zt(o[r], e.points, t);
    i.length && n.push(...i);
  }
  return n;
}
function Ht(e, t, n, o) {
  let r = 0, i = t - 1;
  if (n && !o)
    for (; r < t && !e[r].skip; )
      r++;
  for (; r < t && e[r].skip; )
    r++;
  for (r %= t, n && (i += r); i > r && e[i % t].skip; )
    i--;
  return i %= t, {
    start: r,
    end: i
  };
}
function qt(e, t, n, o) {
  const r = e.length, i = [];
  let s = t, a = e[t], c;
  for (c = t + 1; c <= n; ++c) {
    const l = e[c % r];
    l.skip || l.stop ? a.skip || (o = !1, i.push({
      start: t % r,
      end: (c - 1) % r,
      loop: o
    }), t = s = l.stop ? c : null) : (s = c, a.skip && (t = c)), a = l;
  }
  return s !== null && i.push({
    start: t % r,
    end: s % r,
    loop: o
  }), i;
}
function Vn(e, t) {
  const n = e.points, o = e.options.spanGaps, r = n.length;
  if (!r)
    return [];
  const i = !!e._loop, { start: s, end: a } = Ht(n, r, i, o);
  if (o === !0)
    return fe(e, [
      {
        start: s,
        end: a,
        loop: i
      }
    ], n, t);
  const c = a < s ? a + r : a, l = !!e._fullLoop && s === 0 && a === r - 1;
  return fe(e, qt(n, s, c, l), n, t);
}
function fe(e, t, n, o) {
  return !o || !o.setContext || !n ? t : Kt(e, t, n, o);
}
function Kt(e, t, n, o) {
  const r = e._chart.getContext(), i = he(e.options), { _datasetIndex: s, options: { spanGaps: a } } = e, c = n.length, l = [];
  let u = i, d = t[0].start, g = d;
  function m(b, h, f, y) {
    const k = a ? -1 : 1;
    if (b !== h) {
      for (b += c; n[b % c].skip; )
        b -= k;
      for (; n[h % c].skip; )
        h += k;
      b % c !== h % c && (l.push({
        start: b % c,
        end: h % c,
        loop: f,
        style: y
      }), u = y, d = h % c);
    }
  }
  for (const b of t) {
    d = a ? d : b.start;
    let h = n[d % c], f;
    for (g = d + 1; g <= b.end; g++) {
      const y = n[g % c];
      f = he(o.setContext(gt(r, {
        type: "segment",
        p0: h,
        p1: y,
        p0DataIndex: (g - 1) % c,
        p1DataIndex: g % c,
        datasetIndex: s
      }))), Qt(f, u) && m(d, g - 1, b.loop, u), h = y, u = f;
    }
    d < g - 1 && m(d, g - 1, b.loop, u);
  }
  return l;
}
function he(e) {
  return {
    backgroundColor: e.backgroundColor,
    borderCapStyle: e.borderCapStyle,
    borderDash: e.borderDash,
    borderDashOffset: e.borderDashOffset,
    borderJoinStyle: e.borderJoinStyle,
    borderWidth: e.borderWidth,
    borderColor: e.borderColor
  };
}
function Qt(e, t) {
  if (!t)
    return !1;
  const n = [], o = function(r, i) {
    return J(i) ? (n.includes(i) || n.push(i), n.indexOf(i)) : i;
  };
  return JSON.stringify(e, o) !== JSON.stringify(t, o);
}
export {
  vn as $,
  dn as A,
  B,
  ae as C,
  fn as D,
  Ln as E,
  Xt as F,
  qn as G,
  S as H,
  At as I,
  Gn as J,
  Qn as K,
  yn as L,
  vt as M,
  on as N,
  Yt as O,
  p as P,
  Jt as Q,
  Fn as R,
  Y as S,
  M as T,
  ln as U,
  Tn as V,
  hn as W,
  kn as X,
  In as Y,
  jn as Z,
  pn as _,
  En as a,
  Nn as a0,
  Mn as a1,
  Sn as a2,
  et as a3,
  E as a4,
  be as a5,
  tt as a6,
  F as a7,
  H as a8,
  Oe as a9,
  Jn as aA,
  On as aB,
  Xn as aC,
  it as aD,
  oe as aE,
  Ut as aF,
  an as aG,
  nn as aH,
  sn as aI,
  pe as aJ,
  un as aK,
  Ze as aL,
  $ as aM,
  gn as aO,
  ye as aP,
  J as aQ,
  G as aR,
  N as aS,
  Be as aT,
  De as aU,
  We as aW,
  rt as aX,
  Tt as aY,
  Rt as aZ,
  Bt as a_,
  mt as aa,
  je as ab,
  $t as ac,
  _n as ad,
  Kn as ae,
  Cn as af,
  en as ag,
  Zt as ah,
  tn as ai,
  qe as aj,
  Se as ak,
  zn as al,
  Vn as am,
  Zn as an,
  Un as ao,
  $n as ap,
  R as aq,
  An as ar,
  Bn as as,
  Rn as at,
  Dn as au,
  dt as av,
  Wn as aw,
  zt as ax,
  O as ay,
  Yn as az,
  T as b,
  ft as b0,
  Ee as b1,
  z as b2,
  Fe as b3,
  w as b4,
  te as b5,
  ze as b6,
  Pn as c,
  ot as d,
  Q as e,
  Ne as f,
  ge as g,
  Vt as h,
  _ as i,
  gt as j,
  L as k,
  mn as l,
  Ae as n,
  Je as o,
  He as p,
  wn as q,
  Ke as r,
  ne as s,
  cn as t,
  bn as u,
  x as v,
  xn as w,
  rn as x,
  Hn as z
};
