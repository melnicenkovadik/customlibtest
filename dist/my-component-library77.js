var ms = Object.defineProperty;
var _s = (n, t, e) => t in n ? ms(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var M = (n, t, e) => _s(n, typeof t != "symbol" ? t + "" : t, e);
import { d as E, a3 as bt, ac as xs, ad as bs, k as z, ae as Te, af as Ae, Q as A, F as L, ag as ze, a7 as ee, Y as ie, $ as se, C as Pe, j as yt, h as Tt, ah as Jt, ai as ys, al as vs, am as ks, an as ji, at as ye, au as Zt, E as X, v as T, aL as ws, g as j, t as dt, M as $i, x as At, O as q, R as Ss, S as Z, U as Ms, b as $, V as Fe, W as Ds, X as rt, i as I, Z as zt, a0 as V, a6 as Ie, a8 as Ee, a9 as Ps, aa as Cs, ao as Os, ap as Ls, aq as Ts, aj as ut, az as mt, a2 as B, aA as Ui, aB as As, aC as Yi, a1 as Ce, aE as zs, aF as tt, aw as _t, aG as Fs, o as Is, r as Es, z as ht, G as Rs, I as Xi, a5 as Bs, f as Ft, av as Vs, ax as Hs, aD as Ws, P as Re, aH as Be, aI as Ns, aJ as oe, ab as Kt, aO as js, _ as Ki, B as ve, a as Ht, e as Ve, u as He, l as $s, J as We, N as Us, H as Ne, a4 as Ys, ar as Xs, as as Ks, ay as je, aK as $e, s as nt, aP as qs, c as Ue, A as Gs, T as Js, q as Zs, w as Qs, D as tn, p as en, K as sn, L as qi } from "./my-component-library137.js";
/*!
 * Chart.js v4.4.5
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */
class nn {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, e, i, s) {
    const o = e.listeners[s], a = e.duration;
    o.forEach((r) => r({
      chart: t,
      initial: e.initial,
      numSteps: a,
      currentStep: Math.min(i - e.start, a)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = Es.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((i, s) => {
      if (!i.running || !i.items.length)
        return;
      const o = i.items;
      let a = o.length - 1, r = !1, l;
      for (; a >= 0; --a)
        l = o[a], l._active ? (l._total > i.duration && (i.duration = l._total), l.tick(t), r = !0) : (o[a] = o[o.length - 1], o.pop());
      r && (s.draw(), this._notify(s, i, t, "progress")), o.length || (i.running = !1, this._notify(s, i, t, "complete"), i.initial = !1), e += o.length;
    }), this._lastDate = t, e === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let i = e.get(t);
    return i || (i = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, e.set(t, i)), i;
  }
  listen(t, e, i) {
    this._getAnims(t).listeners[e].push(i);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((i, s) => Math.max(i, s._duration), 0), this._refresh());
  }
  running(t) {
    if (!this._running)
      return !1;
    const e = this._charts.get(t);
    return !(!e || !e.running || !e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length)
      return;
    const i = e.items;
    let s = i.length - 1;
    for (; s >= 0; --s)
      i[s].cancel();
    e.items = [], this._notify(t, e, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var et = /* @__PURE__ */ new nn();
const Ye = "transparent", on = {
  boolean(n, t, e) {
    return e > 0.5 ? t : n;
  },
  color(n, t, e) {
    const i = Ue(n || Ye), s = i.valid && Ue(t || Ye);
    return s && s.valid ? s.mix(i, e).hexString() : t;
  },
  number(n, t, e) {
    return n + (t - n) * e;
  }
};
class an {
  constructor(t, e, i, s) {
    const o = e[i];
    s = Ht([
      t.to,
      s,
      o,
      t.from
    ]);
    const a = Ht([
      t.from,
      o,
      s
    ]);
    this._active = !0, this._fn = t.fn || on[t.type || typeof a], this._easing = Ve[t.easing] || Ve.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = i, this._from = a, this._to = s, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, i) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop], o = i - this._start, a = this._duration - o;
      this._start = i, this._duration = Math.floor(Math.max(a, t.duration)), this._total += o, this._loop = !!t.loop, this._to = Ht([
        t.to,
        e,
        s,
        t.from
      ]), this._from = Ht([
        t.from,
        s,
        e
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const e = t - this._start, i = this._duration, s = this._prop, o = this._from, a = this._loop, r = this._to;
    let l;
    if (this._active = o !== r && (a || e < i), !this._active) {
      this._target[s] = r, this._notify(!0);
      return;
    }
    if (e < 0) {
      this._target[s] = o;
      return;
    }
    l = e / i % 2, l = a && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[s] = this._fn(o, r, l);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, i) => {
      t.push({
        res: e,
        rej: i
      });
    });
  }
  _notify(t) {
    const e = t ? "res" : "rej", i = this._promises || [];
    for (let s = 0; s < i.length; s++)
      i[s][e]();
  }
}
class Gi {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!I(t))
      return;
    const e = Object.keys(E.animation), i = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const o = t[s];
      if (!I(o))
        return;
      const a = {};
      for (const r of e)
        a[r] = o[r];
      ($(o.properties) && o.properties || [
        s
      ]).forEach((r) => {
        (r === s || !i.has(r)) && i.set(r, a);
      });
    });
  }
  _animateOptions(t, e) {
    const i = e.options, s = ln(t, i);
    if (!s)
      return [];
    const o = this._createAnimations(s, i);
    return i.$shared && rn(t.options.$animations, i).then(() => {
      t.options = i;
    }, () => {
    }), o;
  }
  _createAnimations(t, e) {
    const i = this._properties, s = [], o = t.$animations || (t.$animations = {}), a = Object.keys(e), r = Date.now();
    let l;
    for (l = a.length - 1; l >= 0; --l) {
      const h = a[l];
      if (h.charAt(0) === "$")
        continue;
      if (h === "options") {
        s.push(...this._animateOptions(t, e));
        continue;
      }
      const c = e[h];
      let d = o[h];
      const u = i.get(h);
      if (d)
        if (u && d.active()) {
          d.update(u, c, r);
          continue;
        } else
          d.cancel();
      if (!u || !u.duration) {
        t[h] = c;
        continue;
      }
      o[h] = d = new an(u, t, h, c), s.push(d);
    }
    return s;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const i = this._createAnimations(t, e);
    if (i.length)
      return et.add(this._chart, i), !0;
  }
}
function rn(n, t) {
  const e = [], i = Object.keys(t);
  for (let s = 0; s < i.length; s++) {
    const o = n[i[s]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function ln(n, t) {
  if (!t)
    return;
  let e = n.options;
  if (!e) {
    n.options = t;
    return;
  }
  return e.$shared && (n.options = e = Object.assign({}, e, {
    $shared: !1,
    $animations: {}
  })), e;
}
function Xe(n, t) {
  const e = n && n.options || {}, i = e.reverse, s = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: i ? o : s,
    end: i ? s : o
  };
}
function hn(n, t, e) {
  if (e === !1)
    return !1;
  const i = Xe(n, e), s = Xe(t, e);
  return {
    top: s.end,
    right: i.end,
    bottom: s.start,
    left: i.start
  };
}
function cn(n) {
  let t, e, i, s;
  return I(n) ? (t = n.top, e = n.right, i = n.bottom, s = n.left) : t = e = i = s = n, {
    top: t,
    right: e,
    bottom: i,
    left: s,
    disabled: n === !1
  };
}
function Ji(n, t) {
  const e = [], i = n._getSortedDatasetMetas(t);
  let s, o;
  for (s = 0, o = i.length; s < o; ++s)
    e.push(i[s].index);
  return e;
}
function Ke(n, t, e, i = {}) {
  const s = n.keys, o = i.mode === "single";
  let a, r, l, h;
  if (t !== null) {
    for (a = 0, r = s.length; a < r; ++a) {
      if (l = +s[a], l === e) {
        if (i.all)
          continue;
        break;
      }
      h = n.values[l], j(h) && (o || t === 0 || nt(t) === nt(h)) && (t += h);
    }
    return t;
  }
}
function dn(n, t) {
  const { iScale: e, vScale: i } = t, s = e.axis === "x" ? "x" : "y", o = i.axis === "x" ? "x" : "y", a = Object.keys(n), r = new Array(a.length);
  let l, h, c;
  for (l = 0, h = a.length; l < h; ++l)
    c = a[l], r[l] = {
      [s]: c,
      [o]: n[c]
    };
  return r;
}
function ae(n, t) {
  const e = n && n.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function un(n, t, e) {
  return `${n.id}.${t.id}.${e.stack || e.type}`;
}
function fn(n) {
  const { min: t, max: e, minDefined: i, maxDefined: s } = n.getUserBounds();
  return {
    min: i ? t : Number.NEGATIVE_INFINITY,
    max: s ? e : Number.POSITIVE_INFINITY
  };
}
function gn(n, t, e) {
  const i = n[t] || (n[t] = {});
  return i[e] || (i[e] = {});
}
function qe(n, t, e, i) {
  for (const s of t.getMatchingVisibleMetas(i).reverse()) {
    const o = n[s.index];
    if (e && o > 0 || !e && o < 0)
      return s.index;
  }
  return null;
}
function Ge(n, t) {
  const { chart: e, _cachedMeta: i } = n, s = e._stacks || (e._stacks = {}), { iScale: o, vScale: a, index: r } = i, l = o.axis, h = a.axis, c = un(o, a, i), d = t.length;
  let u;
  for (let f = 0; f < d; ++f) {
    const g = t[f], { [l]: p, [h]: _ } = g, m = g._stacks || (g._stacks = {});
    u = m[h] = gn(s, c, p), u[r] = _, u._top = qe(u, a, !0, i.type), u._bottom = qe(u, a, !1, i.type);
    const b = u._visualValues || (u._visualValues = {});
    b[r] = _;
  }
}
function re(n, t) {
  const e = n.scales;
  return Object.keys(e).filter((i) => e[i].axis === t).shift();
}
function pn(n, t) {
  return yt(n, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function mn(n, t, e) {
  return yt(n, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: t,
    mode: "default",
    type: "data"
  });
}
function St(n, t) {
  const e = n.controller.index, i = n.vScale && n.vScale.axis;
  if (i) {
    t = t || n._parsed;
    for (const s of t) {
      const o = s._stacks;
      if (!o || o[i] === void 0 || o[i][e] === void 0)
        return;
      delete o[i][e], o[i]._visualValues !== void 0 && o[i]._visualValues[e] !== void 0 && delete o[i]._visualValues[e];
    }
  }
}
const le = (n) => n === "reset" || n === "none", Je = (n, t) => t ? n : Object.assign({}, n), _n = (n, t, e) => n && !t.hidden && t._stacked && {
  keys: Ji(e, !0),
  values: null
};
class xt {
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = ae(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && St(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, i = this.getDataset(), s = (d, u, f, g) => d === "x" ? u : d === "r" ? g : f, o = e.xAxisID = T(i.xAxisID, re(t, "x")), a = e.yAxisID = T(i.yAxisID, re(t, "y")), r = e.rAxisID = T(i.rAxisID, re(t, "r")), l = e.indexAxis, h = e.iAxisID = s(l, o, a, r), c = e.vAxisID = s(l, a, o, r);
    e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(a), e.rScale = this.getScaleForId(r), e.iScale = this.getScaleForId(h), e.vScale = this.getScaleForId(c);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && He(this._data, this), t._stacked && St(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), i = this._data;
    if (I(e)) {
      const s = this._cachedMeta;
      this._data = dn(e, s);
    } else if (i !== e) {
      if (i) {
        He(i, this);
        const s = this._cachedMeta;
        St(s), s._parsed = [];
      }
      e && Object.isExtensible(e) && $s(e, this), this._syncList = [], this._data = e;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta, i = this.getDataset();
    let s = !1;
    this._dataCheck();
    const o = e._stacked;
    e._stacked = ae(e.vScale, e), e.stack !== i.stack && (s = !0, St(e), e.stack = i.stack), this._resyncElements(t), (s || o !== e._stacked) && (Ge(this, e._parsed), e._stacked = ae(e.vScale, e));
  }
  configure() {
    const t = this.chart.config, e = t.datasetScopeKeys(this._type), i = t.getOptionScopes(this.getDataset(), e, !0);
    this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, e) {
    const { _cachedMeta: i, _data: s } = this, { iScale: o, _stacked: a } = i, r = o.axis;
    let l = t === 0 && e === s.length ? !0 : i._sorted, h = t > 0 && i._parsed[t - 1], c, d, u;
    if (this._parsing === !1)
      i._parsed = s, i._sorted = !0, u = s;
    else {
      $(s[t]) ? u = this.parseArrayData(i, s, t, e) : I(s[t]) ? u = this.parseObjectData(i, s, t, e) : u = this.parsePrimitiveData(i, s, t, e);
      const f = () => d[r] === null || h && d[r] < h[r];
      for (c = 0; c < e; ++c)
        i._parsed[c + t] = d = u[c], l && (f() && (l = !1), h = d);
      i._sorted = l;
    }
    a && Ge(this, u);
  }
  parsePrimitiveData(t, e, i, s) {
    const { iScale: o, vScale: a } = t, r = o.axis, l = a.axis, h = o.getLabels(), c = o === a, d = new Array(s);
    let u, f, g;
    for (u = 0, f = s; u < f; ++u)
      g = u + i, d[u] = {
        [r]: c || o.parse(h[g], g),
        [l]: a.parse(e[g], g)
      };
    return d;
  }
  parseArrayData(t, e, i, s) {
    const { xScale: o, yScale: a } = t, r = new Array(s);
    let l, h, c, d;
    for (l = 0, h = s; l < h; ++l)
      c = l + i, d = e[c], r[l] = {
        x: o.parse(d[0], c),
        y: a.parse(d[1], c)
      };
    return r;
  }
  parseObjectData(t, e, i, s) {
    const { xScale: o, yScale: a } = t, { xAxisKey: r = "x", yAxisKey: l = "y" } = this._parsing, h = new Array(s);
    let c, d, u, f;
    for (c = 0, d = s; c < d; ++c)
      u = c + i, f = e[u], h[c] = {
        x: o.parse(Ft(f, r), u),
        y: a.parse(Ft(f, l), u)
      };
    return h;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, i) {
    const s = this.chart, o = this._cachedMeta, a = e[t.axis], r = {
      keys: Ji(s, !0),
      values: e._stacks[t.axis]._visualValues
    };
    return Ke(r, a, o.index, {
      mode: i
    });
  }
  updateRangeFromParsed(t, e, i, s) {
    const o = i[e.axis];
    let a = o === null ? NaN : o;
    const r = s && i._stacks[e.axis];
    s && r && (s.values = r, a = Ke(s, o, this._cachedMeta.index)), t.min = Math.min(t.min, a), t.max = Math.max(t.max, a);
  }
  getMinMax(t, e) {
    const i = this._cachedMeta, s = i._parsed, o = i._sorted && t === i.iScale, a = s.length, r = this._getOtherScale(t), l = _n(e, i, this.chart), h = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: c, max: d } = fn(r);
    let u, f;
    function g() {
      f = s[u];
      const p = f[r.axis];
      return !j(f[t.axis]) || c > p || d < p;
    }
    for (u = 0; u < a && !(!g() && (this.updateRangeFromParsed(h, t, f, l), o)); ++u)
      ;
    if (o) {
      for (u = a - 1; u >= 0; --u)
        if (!g()) {
          this.updateRangeFromParsed(h, t, f, l);
          break;
        }
    }
    return h;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed, i = [];
    let s, o, a;
    for (s = 0, o = e.length; s < o; ++s)
      a = e[s][t.axis], j(a) && i.push(a);
    return i;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = e.iScale, s = e.vScale, o = this.getParsed(t);
    return {
      label: i ? "" + i.getLabelForValue(o[i.axis]) : "",
      value: s ? "" + s.getLabelForValue(o[s.axis]) : ""
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || "default"), e._clip = cn(T(this.options.clip, hn(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, e = this.chart, i = this._cachedMeta, s = i.data || [], o = e.chartArea, a = [], r = this._drawStart || 0, l = this._drawCount || s.length - r, h = this.options.drawActiveElementsOnTop;
    let c;
    for (i.dataset && i.dataset.draw(t, o, r, l), c = r; c < r + l; ++c) {
      const d = s[c];
      d.hidden || (d.active && h ? a.push(d) : d.draw(t, o));
    }
    for (c = 0; c < a.length; ++c)
      a[c].draw(t, o);
  }
  getStyle(t, e) {
    const i = e ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i);
  }
  getContext(t, e, i) {
    const s = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const a = this._cachedMeta.data[t];
      o = a.$context || (a.$context = mn(this.getContext(), t, a)), o.parsed = this.getParsed(t), o.raw = s.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = pn(this.chart.getContext(), this.index)), o.dataset = s, o.index = o.datasetIndex = this.index;
    return o.active = !!e, o.mode = i, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", i) {
    const s = e === "active", o = this._cachedDataOpts, a = t + "-" + e, r = o[a], l = this.enableOptionSharing && Tt(i);
    if (r)
      return Je(r, l);
    const h = this.chart.config, c = h.datasetElementScopeKeys(this._type, t), d = s ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], u = h.getOptionScopes(this.getDataset(), c), f = Object.keys(E.elements[t]), g = () => this.getContext(i, s, e), p = h.resolveNamedOptions(u, f, g, d);
    return p.$shared && (p.$shared = l, o[a] = Object.freeze(Je(p, l))), p;
  }
  _resolveAnimations(t, e, i) {
    const s = this.chart, o = this._cachedDataOpts, a = `animation-${e}`, r = o[a];
    if (r)
      return r;
    let l;
    if (s.options.animation !== !1) {
      const c = this.chart.config, d = c.datasetAnimationScopeKeys(this._type, e), u = c.getOptionScopes(this.getDataset(), d);
      l = c.createResolver(u, this.getContext(t, i, e));
    }
    const h = new Gi(s, l && l.animations);
    return l && l._cacheable && (o[a] = Object.freeze(h)), h;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || le(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const i = this.resolveDataElementOptions(t, e), s = this._sharedOptions, o = this.getSharedOptions(i), a = this.includeOptions(e, o) || o !== s;
    return this.updateSharedOptions(o, e, i), {
      sharedOptions: o,
      includeOptions: a
    };
  }
  updateElement(t, e, i, s) {
    le(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i);
  }
  updateSharedOptions(t, e, i) {
    t && !le(e) && this._resolveAnimations(void 0, e).update(t, i);
  }
  _setStyle(t, e, i, s) {
    t.active = s;
    const o = this.getStyle(e, s);
    this._resolveAnimations(e, i, s).update(t, {
      options: !s && this.getSharedOptions(o) || o
    });
  }
  removeHoverStyle(t, e, i) {
    this._setStyle(t, i, "active", !1);
  }
  setHoverStyle(t, e, i) {
    this._setStyle(t, i, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const e = this._data, i = this._cachedMeta.data;
    for (const [r, l, h] of this._syncList)
      this[r](l, h);
    this._syncList = [];
    const s = i.length, o = e.length, a = Math.min(o, s);
    a && this.parse(0, a), o > s ? this._insertElements(s, o - s, t) : o < s && this._removeElements(o, s - o);
  }
  _insertElements(t, e, i = !0) {
    const s = this._cachedMeta, o = s.data, a = t + e;
    let r;
    const l = (h) => {
      for (h.length += e, r = h.length - 1; r >= a; r--)
        h[r] = h[r - e];
    };
    for (l(o), r = t; r < a; ++r)
      o[r] = new this.dataElementType();
    this._parsing && l(s._parsed), this.parse(t, e), i && this.updateElements(o, t, e, "reset");
  }
  updateElements(t, e, i, s) {
  }
  _removeElements(t, e) {
    const i = this._cachedMeta;
    if (this._parsing) {
      const s = i._parsed.splice(t, e);
      i._stacked && St(i, s);
    }
    i.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [e, i, s] = t;
      this[e](i, s);
    }
    this.chart._dataChanges.push([
      this.index,
      ...t
    ]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync([
      "_insertElements",
      this.getDataset().data.length - t,
      t
    ]);
  }
  _onDataPop() {
    this._sync([
      "_removeElements",
      this._cachedMeta.data.length - 1,
      1
    ]);
  }
  _onDataShift() {
    this._sync([
      "_removeElements",
      0,
      1
    ]);
  }
  _onDataSplice(t, e) {
    e && this._sync([
      "_removeElements",
      t,
      e
    ]);
    const i = arguments.length - 2;
    i && this._sync([
      "_insertElements",
      t,
      i
    ]);
  }
  _onDataUnshift() {
    this._sync([
      "_insertElements",
      0,
      arguments.length
    ]);
  }
}
M(xt, "defaults", {}), M(xt, "datasetElementType", null), M(xt, "dataElementType", null);
function xn(n, t) {
  if (!n._cache.$bar) {
    const e = n.getMatchingVisibleMetas(t);
    let i = [];
    for (let s = 0, o = e.length; s < o; s++)
      i = i.concat(e[s].controller.getAllParsedValues(n));
    n._cache.$bar = Ki(i.sort((s, o) => s - o));
  }
  return n._cache.$bar;
}
function bn(n) {
  const t = n.iScale, e = xn(t, n.type);
  let i = t._length, s, o, a, r;
  const l = () => {
    a === 32767 || a === -32768 || (Tt(r) && (i = Math.min(i, Math.abs(a - r) || i)), r = a);
  };
  for (s = 0, o = e.length; s < o; ++s)
    a = t.getPixelForValue(e[s]), l();
  for (r = void 0, s = 0, o = t.ticks.length; s < o; ++s)
    a = t.getPixelForTick(s), l();
  return i;
}
function yn(n, t, e, i) {
  const s = e.barThickness;
  let o, a;
  return z(s) ? (o = t.min * e.categoryPercentage, a = e.barPercentage) : (o = s * i, a = 1), {
    chunk: o / i,
    ratio: a,
    start: t.pixels[n] - o / 2
  };
}
function vn(n, t, e, i) {
  const s = t.pixels, o = s[n];
  let a = n > 0 ? s[n - 1] : null, r = n < s.length - 1 ? s[n + 1] : null;
  const l = e.categoryPercentage;
  a === null && (a = o - (r === null ? t.end - t.start : r - o)), r === null && (r = o + o - a);
  const h = o - (o - Math.min(a, r)) / 2 * l;
  return {
    chunk: Math.abs(r - a) / 2 * l / i,
    ratio: e.barPercentage,
    start: h
  };
}
function kn(n, t, e, i) {
  const s = e.parse(n[0], i), o = e.parse(n[1], i), a = Math.min(s, o), r = Math.max(s, o);
  let l = a, h = r;
  Math.abs(a) > Math.abs(r) && (l = r, h = a), t[e.axis] = h, t._custom = {
    barStart: l,
    barEnd: h,
    start: s,
    end: o,
    min: a,
    max: r
  };
}
function Zi(n, t, e, i) {
  return $(n) ? kn(n, t, e, i) : t[e.axis] = e.parse(n, i), t;
}
function Ze(n, t, e, i) {
  const s = n.iScale, o = n.vScale, a = s.getLabels(), r = s === o, l = [];
  let h, c, d, u;
  for (h = e, c = e + i; h < c; ++h)
    u = t[h], d = {}, d[s.axis] = r || s.parse(a[h], h), l.push(Zi(u, d, o, h));
  return l;
}
function he(n) {
  return n && n.barStart !== void 0 && n.barEnd !== void 0;
}
function wn(n, t, e) {
  return n !== 0 ? nt(n) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function Sn(n) {
  let t, e, i, s, o;
  return n.horizontal ? (t = n.base > n.x, e = "left", i = "right") : (t = n.base < n.y, e = "bottom", i = "top"), t ? (s = "end", o = "start") : (s = "start", o = "end"), {
    start: e,
    end: i,
    reverse: t,
    top: s,
    bottom: o
  };
}
function Mn(n, t, e, i) {
  let s = t.borderSkipped;
  const o = {};
  if (!s) {
    n.borderSkipped = o;
    return;
  }
  if (s === !0) {
    n.borderSkipped = {
      top: !0,
      right: !0,
      bottom: !0,
      left: !0
    };
    return;
  }
  const { start: a, end: r, reverse: l, top: h, bottom: c } = Sn(n);
  s === "middle" && e && (n.enableBorderRadius = !0, (e._top || 0) === i ? s = h : (e._bottom || 0) === i ? s = c : (o[Qe(c, a, r, l)] = !0, s = h)), o[Qe(s, a, r, l)] = !0, n.borderSkipped = o;
}
function Qe(n, t, e, i) {
  return i ? (n = Dn(n, t, e), n = ti(n, e, t)) : n = ti(n, t, e), n;
}
function Dn(n, t, e) {
  return n === t ? e : n === e ? t : n;
}
function ti(n, t, e) {
  return n === "start" ? t : n === "end" ? e : n;
}
function Pn(n, { inflateAmount: t }, e) {
  n.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
class ce extends xt {
  parsePrimitiveData(t, e, i, s) {
    return Ze(t, e, i, s);
  }
  parseArrayData(t, e, i, s) {
    return Ze(t, e, i, s);
  }
  parseObjectData(t, e, i, s) {
    const { iScale: o, vScale: a } = t, { xAxisKey: r = "x", yAxisKey: l = "y" } = this._parsing, h = o.axis === "x" ? r : l, c = a.axis === "x" ? r : l, d = [];
    let u, f, g, p;
    for (u = i, f = i + s; u < f; ++u)
      p = e[u], g = {}, g[o.axis] = o.parse(Ft(p, h), u), d.push(Zi(Ft(p, c), g, a, u));
    return d;
  }
  updateRangeFromParsed(t, e, i, s) {
    super.updateRangeFromParsed(t, e, i, s);
    const o = i._custom;
    o && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, o.min), t.max = Math.max(t.max, o.max));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, { iScale: i, vScale: s } = e, o = this.getParsed(t), a = o._custom, r = he(a) ? "[" + a.start + ", " + a.end + "]" : "" + s.getLabelForValue(o[s.axis]);
    return {
      label: "" + i.getLabelForValue(o[i.axis]),
      value: r
    };
  }
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const e = this._cachedMeta;
    this.updateElements(e.data, 0, e.data.length, t);
  }
  updateElements(t, e, i, s) {
    const o = s === "reset", { index: a, _cachedMeta: { vScale: r } } = this, l = r.getBasePixel(), h = r.isHorizontal(), c = this._getRuler(), { sharedOptions: d, includeOptions: u } = this._getSharedOptions(e, s);
    for (let f = e; f < e + i; f++) {
      const g = this.getParsed(f), p = o || z(g[r.axis]) ? {
        base: l,
        head: l
      } : this._calculateBarValuePixels(f), _ = this._calculateBarIndexPixels(f, c), m = (g._stacks || {})[r.axis], b = {
        horizontal: h,
        base: p.base,
        enableBorderRadius: !m || he(g._custom) || a === m._top || a === m._bottom,
        x: h ? p.head : _.center,
        y: h ? _.center : p.head,
        height: h ? _.size : Math.abs(p.size),
        width: h ? Math.abs(p.size) : _.size
      };
      u && (b.options = d || this.resolveDataElementOptions(f, t[f].active ? "active" : s));
      const y = b.options || t[f].options;
      Mn(b, y, m, a), Pn(b, y, c.ratio), this.updateElement(t[f], f, b, s);
    }
  }
  _getStacks(t, e) {
    const { iScale: i } = this._cachedMeta, s = i.getMatchingVisibleMetas(this._type).filter((c) => c.controller.options.grouped), o = i.options.stacked, a = [], r = this._cachedMeta.controller.getParsed(e), l = r && r[i.axis], h = (c) => {
      const d = c._parsed.find((f) => f[i.axis] === l), u = d && d[c.vScale.axis];
      if (z(u) || isNaN(u))
        return !0;
    };
    for (const c of s)
      if (!(e !== void 0 && h(c)) && ((o === !1 || a.indexOf(c.stack) === -1 || o === void 0 && c.stack === void 0) && a.push(c.stack), c.index === t))
        break;
    return a.length || a.push(void 0), a;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getStackIndex(t, e, i) {
    const s = this._getStacks(t, i), o = e !== void 0 ? s.indexOf(e) : -1;
    return o === -1 ? s.length - 1 : o;
  }
  _getRuler() {
    const t = this.options, e = this._cachedMeta, i = e.iScale, s = [];
    let o, a;
    for (o = 0, a = e.data.length; o < a; ++o)
      s.push(i.getPixelForValue(this.getParsed(o)[i.axis], o));
    const r = t.barThickness;
    return {
      min: r || bn(e),
      pixels: s,
      start: i._startPixel,
      end: i._endPixel,
      stackCount: this._getStackCount(),
      scale: i,
      grouped: t.grouped,
      ratio: r ? 1 : t.categoryPercentage * t.barPercentage
    };
  }
  _calculateBarValuePixels(t) {
    const { _cachedMeta: { vScale: e, _stacked: i, index: s }, options: { base: o, minBarLength: a } } = this, r = o || 0, l = this.getParsed(t), h = l._custom, c = he(h);
    let d = l[e.axis], u = 0, f = i ? this.applyStack(e, l, i) : d, g, p;
    f !== d && (u = f - d, f = d), c && (d = h.barStart, f = h.barEnd - h.barStart, d !== 0 && nt(d) !== nt(h.barEnd) && (u = 0), u += d);
    const _ = !z(o) && !c ? o : u;
    let m = e.getPixelForValue(_);
    if (this.chart.getDataVisibility(t) ? g = e.getPixelForValue(u + f) : g = m, p = g - m, Math.abs(p) < a) {
      p = wn(p, e, r) * a, d === r && (m -= p / 2);
      const b = e.getPixelForDecimal(0), y = e.getPixelForDecimal(1), v = Math.min(b, y), x = Math.max(b, y);
      m = Math.max(Math.min(m, x), v), g = m + p, i && !c && (l._stacks[e.axis]._visualValues[s] = e.getValueForPixel(g) - e.getValueForPixel(m));
    }
    if (m === e.getPixelForValue(r)) {
      const b = nt(p) * e.getLineWidthForValue(r) / 2;
      m += b, p -= b;
    }
    return {
      size: p,
      base: m,
      head: g,
      center: g + p / 2
    };
  }
  _calculateBarIndexPixels(t, e) {
    const i = e.scale, s = this.options, o = s.skipNull, a = T(s.maxBarThickness, 1 / 0);
    let r, l;
    if (e.grouped) {
      const h = o ? this._getStackCount(t) : e.stackCount, c = s.barThickness === "flex" ? vn(t, e, s, h) : yn(t, e, s, h), d = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
      r = c.start + c.chunk * d + c.chunk / 2, l = Math.min(a, c.chunk * c.ratio);
    } else
      r = i.getPixelForValue(this.getParsed(t)[i.axis], t), l = Math.min(a, e.min * e.ratio);
    return {
      base: r - l / 2,
      head: r + l / 2,
      center: r,
      size: l
    };
  }
  draw() {
    const t = this._cachedMeta, e = t.vScale, i = t.data, s = i.length;
    let o = 0;
    for (; o < s; ++o)
      this.getParsed(o)[e.axis] !== null && !i[o].hidden && i[o].draw(this._ctx);
  }
}
M(ce, "id", "bar"), M(ce, "defaults", {
  datasetElementType: !1,
  dataElementType: "bar",
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: !0,
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "base",
        "width",
        "height"
      ]
    }
  }
}), M(ce, "overrides", {
  scales: {
    _index_: {
      type: "category",
      offset: !0,
      grid: {
        offset: !0
      }
    },
    _value_: {
      type: "linear",
      beginAtZero: !0
    }
  }
});
class de extends xt {
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(t) {
    const e = this._cachedMeta, { dataset: i, data: s = [], _dataset: o } = e, a = this.chart._animationsDisabled;
    let { start: r, count: l } = Zs(e, s, a);
    this._drawStart = r, this._drawCount = l, Qs(e) && (r = 0, l = s.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!o._decimated, i.points = s;
    const h = this.resolveDatasetElementOptions(t);
    this.options.showLine || (h.borderWidth = 0), h.segment = this.options.segment, this.updateElement(i, void 0, {
      animated: !a,
      options: h
    }, t), this.updateElements(s, r, l, t);
  }
  updateElements(t, e, i, s) {
    const o = s === "reset", { iScale: a, vScale: r, _stacked: l, _dataset: h } = this._cachedMeta, { sharedOptions: c, includeOptions: d } = this._getSharedOptions(e, s), u = a.axis, f = r.axis, { spanGaps: g, segment: p } = this.options, _ = At(g) ? g : Number.POSITIVE_INFINITY, m = this.chart._animationsDisabled || o || s === "none", b = e + i, y = t.length;
    let v = e > 0 && this.getParsed(e - 1);
    for (let x = 0; x < y; ++x) {
      const S = t[x], k = m ? S : {};
      if (x < e || x >= b) {
        k.skip = !0;
        continue;
      }
      const w = this.getParsed(x), D = z(w[f]), C = k[u] = a.getPixelForValue(w[u], x), P = k[f] = o || D ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, w, l) : w[f], x);
      k.skip = isNaN(C) || isNaN(P) || D, k.stop = x > 0 && Math.abs(w[u] - v[u]) > _, p && (k.parsed = w, k.raw = h.data[x]), d && (k.options = c || this.resolveDataElementOptions(x, S.active ? "active" : s)), m || this.updateElement(S, x, k, s), v = w;
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta, e = t.dataset, i = e.options && e.options.borderWidth || 0, s = t.data || [];
    if (!s.length)
      return i;
    const o = s[0].size(this.resolveDataElementOptions(0)), a = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
    return Math.max(i, o, a) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
  }
}
M(de, "id", "line"), M(de, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1
}), M(de, "overrides", {
  scales: {
    _index_: {
      type: "category"
    },
    _value_: {
      type: "linear"
    }
  }
});
function lt() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class Oe {
  constructor(t) {
    M(this, "options");
    this.options = t || {};
  }
  /**
  * Override default date adapter methods.
  * Accepts type parameter to define options type.
  * @example
  * Chart._adapters._date.override<{myAdapterOption: string}>({
  *   init() {
  *     console.log(this.options.myAdapterOption);
  *   }
  * })
  */
  static override(t) {
    Object.assign(Oe.prototype, t);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return lt();
  }
  parse() {
    return lt();
  }
  format() {
    return lt();
  }
  add() {
    return lt();
  }
  diff() {
    return lt();
  }
  startOf() {
    return lt();
  }
  endOf() {
    return lt();
  }
}
var Cn = {
  _date: Oe
};
function On(n, t, e, i) {
  const { controller: s, data: o, _sorted: a } = n, r = s._cachedMeta.iScale;
  if (r && t === r.axis && t !== "r" && a && o.length) {
    const l = r._reversePixels ? Gs : ve;
    if (i) {
      if (s._sharedOptions) {
        const h = o[0], c = typeof h.getRange == "function" && h.getRange(t);
        if (c) {
          const d = l(o, t, e - c), u = l(o, t, e + c);
          return {
            lo: d.lo,
            hi: u.hi
          };
        }
      }
    } else return l(o, t, e);
  }
  return {
    lo: 0,
    hi: o.length - 1
  };
}
function Et(n, t, e, i, s) {
  const o = n.getSortedVisibleDatasetMetas(), a = e[t];
  for (let r = 0, l = o.length; r < l; ++r) {
    const { index: h, data: c } = o[r], { lo: d, hi: u } = On(o[r], t, a, s);
    for (let f = d; f <= u; ++f) {
      const g = c[f];
      g.skip || i(g, h, f);
    }
  }
}
function Ln(n) {
  const t = n.indexOf("x") !== -1, e = n.indexOf("y") !== -1;
  return function(i, s) {
    const o = t ? Math.abs(i.x - s.x) : 0, a = e ? Math.abs(i.y - s.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(a, 2));
  };
}
function ue(n, t, e, i, s) {
  const o = [];
  return !s && !n.isPointInArea(t) || Et(n, e, t, function(r, l, h) {
    !s && !Pe(r, n.chartArea, 0) || r.inRange(t.x, t.y, i) && o.push({
      element: r,
      datasetIndex: l,
      index: h
    });
  }, !0), o;
}
function Tn(n, t, e, i) {
  let s = [];
  function o(a, r, l) {
    const { startAngle: h, endAngle: c } = a.getProps([
      "startAngle",
      "endAngle"
    ], i), { angle: d } = tn(a, {
      x: t.x,
      y: t.y
    });
    en(d, h, c) && s.push({
      element: a,
      datasetIndex: r,
      index: l
    });
  }
  return Et(n, e, t, o), s;
}
function An(n, t, e, i, s, o) {
  let a = [];
  const r = Ln(e);
  let l = Number.POSITIVE_INFINITY;
  function h(c, d, u) {
    const f = c.inRange(t.x, t.y, s);
    if (i && !f)
      return;
    const g = c.getCenterPoint(s);
    if (!(!!o || n.isPointInArea(g)) && !f)
      return;
    const _ = r(t, g);
    _ < l ? (a = [
      {
        element: c,
        datasetIndex: d,
        index: u
      }
    ], l = _) : _ === l && a.push({
      element: c,
      datasetIndex: d,
      index: u
    });
  }
  return Et(n, e, t, h), a;
}
function fe(n, t, e, i, s, o) {
  return !o && !n.isPointInArea(t) ? [] : e === "r" && !i ? Tn(n, t, e, s) : An(n, t, e, i, s, o);
}
function ei(n, t, e, i, s) {
  const o = [], a = e === "x" ? "inXRange" : "inYRange";
  let r = !1;
  return Et(n, e, t, (l, h, c) => {
    l[a] && l[a](t[e], s) && (o.push({
      element: l,
      datasetIndex: h,
      index: c
    }), r = r || l.inRange(t.x, t.y, s));
  }), i && !r ? [] : o;
}
var zn = {
  evaluateInteractionItems: Et,
  modes: {
    index(n, t, e, i) {
      const s = ht(t, n), o = e.axis || "x", a = e.includeInvisible || !1, r = e.intersect ? ue(n, s, o, i, a) : fe(n, s, o, !1, i, a), l = [];
      return r.length ? (n.getSortedVisibleDatasetMetas().forEach((h) => {
        const c = r[0].index, d = h.data[c];
        d && !d.skip && l.push({
          element: d,
          datasetIndex: h.index,
          index: c
        });
      }), l) : [];
    },
    dataset(n, t, e, i) {
      const s = ht(t, n), o = e.axis || "xy", a = e.includeInvisible || !1;
      let r = e.intersect ? ue(n, s, o, i, a) : fe(n, s, o, !1, i, a);
      if (r.length > 0) {
        const l = r[0].datasetIndex, h = n.getDatasetMeta(l).data;
        r = [];
        for (let c = 0; c < h.length; ++c)
          r.push({
            element: h[c],
            datasetIndex: l,
            index: c
          });
      }
      return r;
    },
    point(n, t, e, i) {
      const s = ht(t, n), o = e.axis || "xy", a = e.includeInvisible || !1;
      return ue(n, s, o, i, a);
    },
    nearest(n, t, e, i) {
      const s = ht(t, n), o = e.axis || "xy", a = e.includeInvisible || !1;
      return fe(n, s, o, e.intersect, i, a);
    },
    x(n, t, e, i) {
      const s = ht(t, n);
      return ei(n, s, "x", e.intersect, i);
    },
    y(n, t, e, i) {
      const s = ht(t, n);
      return ei(n, s, "y", e.intersect, i);
    }
  }
};
const Qi = [
  "left",
  "top",
  "right",
  "bottom"
];
function Mt(n, t) {
  return n.filter((e) => e.pos === t);
}
function ii(n, t) {
  return n.filter((e) => Qi.indexOf(e.pos) === -1 && e.box.axis === t);
}
function Dt(n, t) {
  return n.sort((e, i) => {
    const s = t ? i : e, o = t ? e : i;
    return s.weight === o.weight ? s.index - o.index : s.weight - o.weight;
  });
}
function Fn(n) {
  const t = [];
  let e, i, s, o, a, r;
  for (e = 0, i = (n || []).length; e < i; ++e)
    s = n[e], { position: o, options: { stack: a, stackWeight: r = 1 } } = s, t.push({
      index: e,
      box: s,
      pos: o,
      horizontal: s.isHorizontal(),
      weight: s.weight,
      stack: a && o + a,
      stackWeight: r
    });
  return t;
}
function In(n) {
  const t = {};
  for (const e of n) {
    const { stack: i, pos: s, stackWeight: o } = e;
    if (!i || !Qi.includes(s))
      continue;
    const a = t[i] || (t[i] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    a.count++, a.weight += o;
  }
  return t;
}
function En(n, t) {
  const e = In(n), { vBoxMaxWidth: i, hBoxMaxHeight: s } = t;
  let o, a, r;
  for (o = 0, a = n.length; o < a; ++o) {
    r = n[o];
    const { fullSize: l } = r.box, h = e[r.stack], c = h && r.stackWeight / h.weight;
    r.horizontal ? (r.width = c ? c * i : l && t.availableWidth, r.height = s) : (r.width = i, r.height = c ? c * s : l && t.availableHeight);
  }
  return e;
}
function Rn(n) {
  const t = Fn(n), e = Dt(t.filter((h) => h.box.fullSize), !0), i = Dt(Mt(t, "left"), !0), s = Dt(Mt(t, "right")), o = Dt(Mt(t, "top"), !0), a = Dt(Mt(t, "bottom")), r = ii(t, "x"), l = ii(t, "y");
  return {
    fullSize: e,
    leftAndTop: i.concat(o),
    rightAndBottom: s.concat(l).concat(a).concat(r),
    chartArea: Mt(t, "chartArea"),
    vertical: i.concat(s).concat(l),
    horizontal: o.concat(a).concat(r)
  };
}
function si(n, t, e, i) {
  return Math.max(n[e], t[e]) + Math.max(n[i], t[i]);
}
function ts(n, t) {
  n.top = Math.max(n.top, t.top), n.left = Math.max(n.left, t.left), n.bottom = Math.max(n.bottom, t.bottom), n.right = Math.max(n.right, t.right);
}
function Bn(n, t, e, i) {
  const { pos: s, box: o } = e, a = n.maxPadding;
  if (!I(s)) {
    e.size && (n[s] -= e.size);
    const d = i[e.stack] || {
      size: 0,
      count: 1
    };
    d.size = Math.max(d.size, e.horizontal ? o.height : o.width), e.size = d.size / d.count, n[s] += e.size;
  }
  o.getPadding && ts(a, o.getPadding());
  const r = Math.max(0, t.outerWidth - si(a, n, "left", "right")), l = Math.max(0, t.outerHeight - si(a, n, "top", "bottom")), h = r !== n.w, c = l !== n.h;
  return n.w = r, n.h = l, e.horizontal ? {
    same: h,
    other: c
  } : {
    same: c,
    other: h
  };
}
function Vn(n) {
  const t = n.maxPadding;
  function e(i) {
    const s = Math.max(t[i] - n[i], 0);
    return n[i] += s, s;
  }
  n.y += e("top"), n.x += e("left"), e("right"), e("bottom");
}
function Hn(n, t) {
  const e = t.maxPadding;
  function i(s) {
    const o = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return s.forEach((a) => {
      o[a] = Math.max(t[a], e[a]);
    }), o;
  }
  return i(n ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function Ot(n, t, e, i) {
  const s = [];
  let o, a, r, l, h, c;
  for (o = 0, a = n.length, h = 0; o < a; ++o) {
    r = n[o], l = r.box, l.update(r.width || t.w, r.height || t.h, Hn(r.horizontal, t));
    const { same: d, other: u } = Bn(t, e, r, i);
    h |= d && s.length, c = c || u, l.fullSize || s.push(r);
  }
  return h && Ot(s, t, e, i) || c;
}
function Wt(n, t, e, i, s) {
  n.top = e, n.left = t, n.right = t + i, n.bottom = e + s, n.width = i, n.height = s;
}
function ni(n, t, e, i) {
  const s = e.padding;
  let { x: o, y: a } = t;
  for (const r of n) {
    const l = r.box, h = i[r.stack] || {
      count: 1,
      placed: 0,
      weight: 1
    }, c = r.stackWeight / h.weight || 1;
    if (r.horizontal) {
      const d = t.w * c, u = h.size || l.height;
      Tt(h.start) && (a = h.start), l.fullSize ? Wt(l, s.left, a, e.outerWidth - s.right - s.left, u) : Wt(l, t.left + h.placed, a, d, u), h.start = a, h.placed += d, a = l.bottom;
    } else {
      const d = t.h * c, u = h.size || l.width;
      Tt(h.start) && (o = h.start), l.fullSize ? Wt(l, o, s.top, u, e.outerHeight - s.bottom - s.top) : Wt(l, o, t.top + h.placed, u, d), h.start = o, h.placed += d, o = l.right;
    }
  }
  t.x = o, t.y = a;
}
var Y = {
  addBox(n, t) {
    n.boxes || (n.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [
        {
          z: 0,
          draw(e) {
            t.draw(e);
          }
        }
      ];
    }, n.boxes.push(t);
  },
  removeBox(n, t) {
    const e = n.boxes ? n.boxes.indexOf(t) : -1;
    e !== -1 && n.boxes.splice(e, 1);
  },
  configure(n, t, e) {
    t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight;
  },
  update(n, t, e, i) {
    if (!n)
      return;
    const s = X(n.options.layout.padding), o = Math.max(t - s.width, 0), a = Math.max(e - s.height, 0), r = Rn(n.boxes), l = r.vertical, h = r.horizontal;
    L(n.boxes, (p) => {
      typeof p.beforeLayout == "function" && p.beforeLayout();
    });
    const c = l.reduce((p, _) => _.box.options && _.box.options.display === !1 ? p : p + 1, 0) || 1, d = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: s,
      availableWidth: o,
      availableHeight: a,
      vBoxMaxWidth: o / 2 / c,
      hBoxMaxHeight: a / 2
    }), u = Object.assign({}, s);
    ts(u, X(i));
    const f = Object.assign({
      maxPadding: u,
      w: o,
      h: a,
      x: s.left,
      y: s.top
    }, s), g = En(l.concat(h), d);
    Ot(r.fullSize, f, d, g), Ot(l, f, d, g), Ot(h, f, d, g) && Ot(l, f, d, g), Vn(f), ni(r.leftAndTop, f, d, g), f.x += f.w, f.y += f.h, ni(r.rightAndBottom, f, d, g), n.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, L(r.chartArea, (p) => {
      const _ = p.box;
      Object.assign(_, n.chartArea), _.update(f.w, f.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class es {
  acquireContext(t, e) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, i) {
  }
  removeEventListener(t, e, i) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, i, s) {
    return e = Math.max(0, e || t.width), i = i || t.height, {
      width: e,
      height: Math.max(0, s ? Math.floor(e / s) : i)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class Wn extends es {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const qt = "$chartjs", Nn = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, oi = (n) => n === null || n === "";
function jn(n, t) {
  const e = n.style, i = n.getAttribute("height"), s = n.getAttribute("width");
  if (n[qt] = {
    initial: {
      height: i,
      width: s,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", oi(s)) {
    const o = We(n, "width");
    o !== void 0 && (n.width = o);
  }
  if (oi(i))
    if (n.style.height === "")
      n.height = n.width / (t || 2);
    else {
      const o = We(n, "height");
      o !== void 0 && (n.height = o);
    }
  return n;
}
const is = sn ? {
  passive: !0
} : !1;
function $n(n, t, e) {
  n && n.addEventListener(t, e, is);
}
function Un(n, t, e) {
  n && n.canvas && n.canvas.removeEventListener(t, e, is);
}
function Yn(n, t) {
  const e = Nn[n.type] || n.type, { x: i, y: s } = ht(n, t);
  return {
    type: e,
    chart: t,
    native: n,
    x: i !== void 0 ? i : null,
    y: s !== void 0 ? s : null
  };
}
function Qt(n, t) {
  for (const e of n)
    if (e === t || e.contains(t))
      return !0;
}
function Xn(n, t, e) {
  const i = n.canvas, s = new MutationObserver((o) => {
    let a = !1;
    for (const r of o)
      a = a || Qt(r.addedNodes, i), a = a && !Qt(r.removedNodes, i);
    a && e();
  });
  return s.observe(document, {
    childList: !0,
    subtree: !0
  }), s;
}
function Kn(n, t, e) {
  const i = n.canvas, s = new MutationObserver((o) => {
    let a = !1;
    for (const r of o)
      a = a || Qt(r.removedNodes, i), a = a && !Qt(r.addedNodes, i);
    a && e();
  });
  return s.observe(document, {
    childList: !0,
    subtree: !0
  }), s;
}
const It = /* @__PURE__ */ new Map();
let ai = 0;
function ss() {
  const n = window.devicePixelRatio;
  n !== ai && (ai = n, It.forEach((t, e) => {
    e.currentDevicePixelRatio !== n && t();
  }));
}
function qn(n, t) {
  It.size || window.addEventListener("resize", ss), It.set(n, t);
}
function Gn(n) {
  It.delete(n), It.size || window.removeEventListener("resize", ss);
}
function Jn(n, t, e) {
  const i = n.canvas, s = i && Xi(i);
  if (!s)
    return;
  const o = qi((r, l) => {
    const h = s.clientWidth;
    e(r, l), h < s.clientWidth && e();
  }, window), a = new ResizeObserver((r) => {
    const l = r[0], h = l.contentRect.width, c = l.contentRect.height;
    h === 0 && c === 0 || o(h, c);
  });
  return a.observe(s), qn(n, o), a;
}
function ge(n, t, e) {
  e && e.disconnect(), t === "resize" && Gn(n);
}
function Zn(n, t, e) {
  const i = n.canvas, s = qi((o) => {
    n.ctx !== null && e(Yn(o, n));
  }, n);
  return $n(i, t, s), s;
}
class Qn extends es {
  acquireContext(t, e) {
    const i = t && t.getContext && t.getContext("2d");
    return i && i.canvas === t ? (jn(t, e), i) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[qt])
      return !1;
    const i = e[qt].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const a = i[o];
      z(a) ? e.removeAttribute(o) : e.setAttribute(o, a);
    });
    const s = i.style || {};
    return Object.keys(s).forEach((o) => {
      e.style[o] = s[o];
    }), e.width = e.width, delete e[qt], !0;
  }
  addEventListener(t, e, i) {
    this.removeEventListener(t, e);
    const s = t.$proxies || (t.$proxies = {}), a = {
      attach: Xn,
      detach: Kn,
      resize: Jn
    }[e] || Zn;
    s[e] = a(t, e, i);
  }
  removeEventListener(t, e) {
    const i = t.$proxies || (t.$proxies = {}), s = i[e];
    if (!s)
      return;
    ({
      attach: ge,
      detach: ge,
      resize: ge
    }[e] || Un)(t, e, s), i[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, i, s) {
    return Rs(t, e, i, s);
  }
  isAttached(t) {
    const e = t && Xi(t);
    return !!(e && e.isConnected);
  }
}
function to(n) {
  return !$i() || typeof OffscreenCanvas < "u" && n instanceof OffscreenCanvas ? Wn : Qn;
}
class Q {
  constructor() {
    M(this, "x");
    M(this, "y");
    M(this, "active", !1);
    M(this, "options");
    M(this, "$animations");
  }
  tooltipPosition(t) {
    const { x: e, y: i } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: i
    };
  }
  hasValue() {
    return At(this.x) && At(this.y);
  }
  getProps(t, e) {
    const i = this.$animations;
    if (!e || !i)
      return this;
    const s = {};
    return t.forEach((o) => {
      s[o] = i[o] && i[o].active() ? i[o]._to : this[o];
    }), s;
  }
}
M(Q, "defaults", {}), M(Q, "defaultRoutes");
function eo(n, t) {
  const e = n.options.ticks, i = io(n), s = Math.min(e.maxTicksLimit || i, i), o = e.major.enabled ? no(t) : [], a = o.length, r = o[0], l = o[a - 1], h = [];
  if (a > s)
    return oo(t, h, o, a / s), h;
  const c = so(o, t, s);
  if (a > 0) {
    let d, u;
    const f = a > 1 ? Math.round((l - r) / (a - 1)) : null;
    for (Nt(t, h, c, z(f) ? 0 : r - f, r), d = 0, u = a - 1; d < u; d++)
      Nt(t, h, c, o[d], o[d + 1]);
    return Nt(t, h, c, l, z(f) ? t.length : l + f), h;
  }
  return Nt(t, h, c), h;
}
function io(n) {
  const t = n.options.offset, e = n._tickSize(), i = n._length / e + (t ? 0 : 1), s = n._maxLength / e;
  return Math.floor(Math.min(i, s));
}
function so(n, t, e) {
  const i = ao(n), s = t.length / e;
  if (!i)
    return Math.max(s, 1);
  const o = Us(i);
  for (let a = 0, r = o.length - 1; a < r; a++) {
    const l = o[a];
    if (l > s)
      return l;
  }
  return Math.max(s, 1);
}
function no(n) {
  const t = [];
  let e, i;
  for (e = 0, i = n.length; e < i; e++)
    n[e].major && t.push(e);
  return t;
}
function oo(n, t, e, i) {
  let s = 0, o = e[0], a;
  for (i = Math.ceil(i), a = 0; a < n.length; a++)
    a === o && (t.push(n[a]), s++, o = e[s * i]);
}
function Nt(n, t, e, i, s) {
  const o = T(i, 0), a = Math.min(T(s, n.length), n.length);
  let r = 0, l, h, c;
  for (e = Math.ceil(e), s && (l = s - i, e = l / Math.floor(l / e)), c = o; c < 0; )
    r++, c = Math.round(o + r * e);
  for (h = Math.max(o, 0); h < a; h++)
    h === c && (t.push(n[h]), r++, c = Math.round(o + r * e));
}
function ao(n) {
  const t = n.length;
  let e, i;
  if (t < 2)
    return !1;
  for (i = n[0], e = 1; e < t; ++e)
    if (n[e] - n[e - 1] !== i)
      return !1;
  return i;
}
const ro = (n) => n === "left" ? "right" : n === "right" ? "left" : n, ri = (n, t, e) => t === "top" || t === "left" ? n[t] + e : n[t] - e, li = (n, t) => Math.min(t || n, n);
function hi(n, t) {
  const e = [], i = n.length / t, s = n.length;
  let o = 0;
  for (; o < s; o += i)
    e.push(n[Math.floor(o)]);
  return e;
}
function lo(n, t, e) {
  const i = n.ticks.length, s = Math.min(t, i - 1), o = n._startPixel, a = n._endPixel, r = 1e-6;
  let l = n.getPixelForTick(s), h;
  if (!(e && (i === 1 ? h = Math.max(l - o, a - l) : t === 0 ? h = (n.getPixelForTick(1) - l) / 2 : h = (l - n.getPixelForTick(s - 1)) / 2, l += s < t ? h : -h, l < o - r || l > a + r)))
    return l;
}
function ho(n, t) {
  L(n, (e) => {
    const i = e.gc, s = i.length / 2;
    let o;
    if (s > t) {
      for (o = 0; o < s; ++o)
        delete e.data[i[o]];
      i.splice(0, s);
    }
  });
}
function Pt(n) {
  return n.drawTicks ? n.tickLength : 0;
}
function ci(n, t) {
  if (!n.display)
    return 0;
  const e = V(n.font, t), i = X(n.padding);
  return ($(n.text) ? n.text.length : 1) * e.lineHeight + i.height;
}
function co(n, t) {
  return yt(n, {
    scale: t,
    type: "scale"
  });
}
function uo(n, t, e) {
  return yt(n, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function fo(n, t, e) {
  let i = Ce(n);
  return (e && t !== "right" || !e && t === "right") && (i = ro(i)), i;
}
function go(n, t, e, i) {
  const { top: s, left: o, bottom: a, right: r, chart: l } = n, { chartArea: h, scales: c } = l;
  let d = 0, u, f, g;
  const p = a - s, _ = r - o;
  if (n.isHorizontal()) {
    if (f = B(i, o, r), I(e)) {
      const m = Object.keys(e)[0], b = e[m];
      g = c[m].getPixelForValue(b) + p - t;
    } else e === "center" ? g = (h.bottom + h.top) / 2 + p - t : g = ri(n, e, t);
    u = r - o;
  } else {
    if (I(e)) {
      const m = Object.keys(e)[0], b = e[m];
      f = c[m].getPixelForValue(b) - _ + t;
    } else e === "center" ? f = (h.left + h.right) / 2 - _ + t : f = ri(n, e, t);
    g = B(i, a, s), d = e === "left" ? -Ne : Ne;
  }
  return {
    titleX: f,
    titleY: g,
    maxWidth: u,
    rotation: d
  };
}
class vt extends Q {
  constructor(t) {
    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
  }
  init(t) {
    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: i, _suggestedMax: s } = this;
    return t = q(t, Number.POSITIVE_INFINITY), e = q(e, Number.NEGATIVE_INFINITY), i = q(i, Number.POSITIVE_INFINITY), s = q(s, Number.NEGATIVE_INFINITY), {
      min: q(t, i),
      max: q(e, s),
      minDefined: j(t),
      maxDefined: j(e)
    };
  }
  getMinMax(t) {
    let { min: e, max: i, minDefined: s, maxDefined: o } = this.getUserBounds(), a;
    if (s && o)
      return {
        min: e,
        max: i
      };
    const r = this.getMatchingVisibleMetas();
    for (let l = 0, h = r.length; l < h; ++l)
      a = r[l].controller.getMinMax(this, t), s || (e = Math.min(e, a.min)), o || (i = Math.max(i, a.max));
    return e = o && e > i ? i : e, i = s && e > i ? e : i, {
      min: q(e, q(i, e)),
      max: q(i, q(e, i))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = !1;
  }
  beforeUpdate() {
    A(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, e, i) {
    const { beginAtZero: s, grace: o, ticks: a } = this.options, r = a.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = i = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Ss(this, o, s), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = r < this.ticks.length;
    this._convertTicksToLabels(l ? hi(this.ticks, r) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), a.display && (a.autoSkip || a.source === "auto") && (this.ticks = eo(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, i;
    this.isHorizontal() ? (e = this.left, i = this.right) : (e = this.top, i = this.bottom, t = !t), this._startPixel = e, this._endPixel = i, this._reversePixels = t, this._length = i - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    A(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    A(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    A(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), A(this.options[t], [
      this
    ]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    A(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let i, s, o;
    for (i = 0, s = t.length; i < s; i++)
      o = t[i], o.label = A(e.callback, [
        o.value,
        i,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    A(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    A(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, e = t.ticks, i = li(this.ticks.length, t.ticks.maxTicksLimit), s = e.minRotation || 0, o = e.maxRotation;
    let a = s, r, l, h;
    if (!this._isVisible() || !e.display || s >= o || i <= 1 || !this.isHorizontal()) {
      this.labelRotation = s;
      return;
    }
    const c = this._getLabelSizes(), d = c.widest.width, u = c.highest.height, f = Z(this.chart.width - d, 0, this.maxWidth);
    r = t.offset ? this.maxWidth / i : f / (i - 1), d + 6 > r && (r = f / (i - (t.offset ? 0.5 : 1)), l = this.maxHeight - Pt(t.grid) - e.padding - ci(t.title, this.chart.options.font), h = Math.sqrt(d * d + u * u), a = Ms(Math.min(Math.asin(Z((c.highest.height + 6) / r, -1, 1)), Math.asin(Z(l / h, -1, 1)) - Math.asin(Z(u / h, -1, 1)))), a = Math.max(s, Math.min(o, a))), this.labelRotation = a;
  }
  afterCalculateLabelRotation() {
    A(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    A(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: i, title: s, grid: o } } = this, a = this._isVisible(), r = this.isHorizontal();
    if (a) {
      const l = ci(s, e.options.font);
      if (r ? (t.width = this.maxWidth, t.height = Pt(o) + l) : (t.height = this.maxHeight, t.width = Pt(o) + l), i.display && this.ticks.length) {
        const { first: h, last: c, widest: d, highest: u } = this._getLabelSizes(), f = i.padding * 2, g = dt(this.labelRotation), p = Math.cos(g), _ = Math.sin(g);
        if (r) {
          const m = i.mirror ? 0 : _ * d.width + p * u.height;
          t.height = Math.min(this.maxHeight, t.height + m + f);
        } else {
          const m = i.mirror ? 0 : p * d.width + _ * u.height;
          t.width = Math.min(this.maxWidth, t.width + m + f);
        }
        this._calculatePadding(h, c, _, p);
      }
    }
    this._handleMargins(), r ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, e, i, s) {
    const { ticks: { align: o, padding: a }, position: r } = this.options, l = this.labelRotation !== 0, h = r !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const c = this.getPixelForTick(0) - this.left, d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let u = 0, f = 0;
      l ? h ? (u = s * t.width, f = i * e.height) : (u = i * t.height, f = s * e.width) : o === "start" ? f = e.width : o === "end" ? u = t.width : o !== "inner" && (u = t.width / 2, f = e.width / 2), this.paddingLeft = Math.max((u - c + a) * this.width / (this.width - c), 0), this.paddingRight = Math.max((f - d + a) * this.width / (this.width - d), 0);
    } else {
      let c = e.height / 2, d = t.height / 2;
      o === "start" ? (c = 0, d = t.height) : o === "end" && (c = e.height, d = 0), this.paddingTop = c + a, this.paddingBottom = d + a;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    A(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options;
    return e === "top" || e === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let e, i;
    for (e = 0, i = t.length; e < i; e++)
      z(t[e].label) && (t.splice(e, 1), i--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let i = this.ticks;
      e < i.length && (i = hi(i, e)), this._labelSizes = t = this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, e, i) {
    const { ctx: s, _longestTextCache: o } = this, a = [], r = [], l = Math.floor(e / li(e, i));
    let h = 0, c = 0, d, u, f, g, p, _, m, b, y, v, x;
    for (d = 0; d < e; d += l) {
      if (g = t[d].label, p = this._resolveTickFontOptions(d), s.font = _ = p.string, m = o[_] = o[_] || {
        data: {},
        gc: []
      }, b = p.lineHeight, y = v = 0, !z(g) && !$(g))
        y = Fe(s, m.data, m.gc, y, g), v = b;
      else if ($(g))
        for (u = 0, f = g.length; u < f; ++u)
          x = g[u], !z(x) && !$(x) && (y = Fe(s, m.data, m.gc, y, x), v += b);
      a.push(y), r.push(v), h = Math.max(y, h), c = Math.max(v, c);
    }
    ho(o, e);
    const S = a.indexOf(h), k = r.indexOf(c), w = (D) => ({
      width: a[D] || 0,
      height: r[D] || 0
    });
    return {
      first: w(0),
      last: w(e - 1),
      widest: w(S),
      highest: w(k),
      widths: a,
      heights: r
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return Ds(this._alignToPixels ? rt(this.chart, e, 0) : e);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const i = e[t];
      return i.$context || (i.$context = uo(this.getContext(), t, i));
    }
    return this.$context || (this.$context = co(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = dt(this.labelRotation), i = Math.abs(Math.cos(e)), s = Math.abs(Math.sin(e)), o = this._getLabelSizes(), a = t.autoSkipPadding || 0, r = o ? o.widest.width + a : 0, l = o ? o.highest.height + a : 0;
    return this.isHorizontal() ? l * i > r * s ? r / i : l / s : l * s < r * i ? l / i : r / s;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, i = this.chart, s = this.options, { grid: o, position: a, border: r } = s, l = o.offset, h = this.isHorizontal(), d = this.ticks.length + (l ? 1 : 0), u = Pt(o), f = [], g = r.setContext(this.getContext()), p = g.display ? g.width : 0, _ = p / 2, m = function(R) {
      return rt(i, R, p);
    };
    let b, y, v, x, S, k, w, D, C, P, O, H;
    if (a === "top")
      b = m(this.bottom), k = this.bottom - u, D = b - _, P = m(t.top) + _, H = t.bottom;
    else if (a === "bottom")
      b = m(this.top), P = t.top, H = m(t.bottom) - _, k = b + _, D = this.top + u;
    else if (a === "left")
      b = m(this.right), S = this.right - u, w = b - _, C = m(t.left) + _, O = t.right;
    else if (a === "right")
      b = m(this.left), C = t.left, O = m(t.right) - _, S = b + _, w = this.left + u;
    else if (e === "x") {
      if (a === "center")
        b = m((t.top + t.bottom) / 2 + 0.5);
      else if (I(a)) {
        const R = Object.keys(a)[0], U = a[R];
        b = m(this.chart.scales[R].getPixelForValue(U));
      }
      P = t.top, H = t.bottom, k = b + _, D = k + u;
    } else if (e === "y") {
      if (a === "center")
        b = m((t.left + t.right) / 2);
      else if (I(a)) {
        const R = Object.keys(a)[0], U = a[R];
        b = m(this.chart.scales[R].getPixelForValue(U));
      }
      S = b - _, w = S - u, C = t.left, O = t.right;
    }
    const K = T(s.ticks.maxTicksLimit, d), F = Math.max(1, Math.ceil(d / K));
    for (y = 0; y < d; y += F) {
      const R = this.getContext(y), U = o.setContext(R), Rt = r.setContext(R), Bt = U.lineWidth, gt = U.color, Vt = Rt.dash || [], pt = Rt.dashOffset, kt = U.tickWidth, ot = U.tickColor, wt = U.tickBorderDash || [], at = U.tickBorderDashOffset;
      v = lo(this, y, l), v !== void 0 && (x = rt(i, v, Bt), h ? S = w = C = O = x : k = D = P = H = x, f.push({
        tx1: S,
        ty1: k,
        tx2: w,
        ty2: D,
        x1: C,
        y1: P,
        x2: O,
        y2: H,
        width: Bt,
        color: gt,
        borderDash: Vt,
        borderDashOffset: pt,
        tickWidth: kt,
        tickColor: ot,
        tickBorderDash: wt,
        tickBorderDashOffset: at
      }));
    }
    return this._ticksLength = d, this._borderValue = b, f;
  }
  _computeLabelItems(t) {
    const e = this.axis, i = this.options, { position: s, ticks: o } = i, a = this.isHorizontal(), r = this.ticks, { align: l, crossAlign: h, padding: c, mirror: d } = o, u = Pt(i.grid), f = u + c, g = d ? -c : f, p = -dt(this.labelRotation), _ = [];
    let m, b, y, v, x, S, k, w, D, C, P, O, H = "middle";
    if (s === "top")
      S = this.bottom - g, k = this._getXAxisLabelAlignment();
    else if (s === "bottom")
      S = this.top + g, k = this._getXAxisLabelAlignment();
    else if (s === "left") {
      const F = this._getYAxisLabelAlignment(u);
      k = F.textAlign, x = F.x;
    } else if (s === "right") {
      const F = this._getYAxisLabelAlignment(u);
      k = F.textAlign, x = F.x;
    } else if (e === "x") {
      if (s === "center")
        S = (t.top + t.bottom) / 2 + f;
      else if (I(s)) {
        const F = Object.keys(s)[0], R = s[F];
        S = this.chart.scales[F].getPixelForValue(R) + f;
      }
      k = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (s === "center")
        x = (t.left + t.right) / 2 - f;
      else if (I(s)) {
        const F = Object.keys(s)[0], R = s[F];
        x = this.chart.scales[F].getPixelForValue(R);
      }
      k = this._getYAxisLabelAlignment(u).textAlign;
    }
    e === "y" && (l === "start" ? H = "top" : l === "end" && (H = "bottom"));
    const K = this._getLabelSizes();
    for (m = 0, b = r.length; m < b; ++m) {
      y = r[m], v = y.label;
      const F = o.setContext(this.getContext(m));
      w = this.getPixelForTick(m) + o.labelOffset, D = this._resolveTickFontOptions(m), C = D.lineHeight, P = $(v) ? v.length : 1;
      const R = P / 2, U = F.color, Rt = F.textStrokeColor, Bt = F.textStrokeWidth;
      let gt = k;
      a ? (x = w, k === "inner" && (m === b - 1 ? gt = this.options.reverse ? "left" : "right" : m === 0 ? gt = this.options.reverse ? "right" : "left" : gt = "center"), s === "top" ? h === "near" || p !== 0 ? O = -P * C + C / 2 : h === "center" ? O = -K.highest.height / 2 - R * C + C : O = -K.highest.height + C / 2 : h === "near" || p !== 0 ? O = C / 2 : h === "center" ? O = K.highest.height / 2 - R * C : O = K.highest.height - P * C, d && (O *= -1), p !== 0 && !F.showLabelBackdrop && (x += C / 2 * Math.sin(p))) : (S = w, O = (1 - P) * C / 2);
      let Vt;
      if (F.showLabelBackdrop) {
        const pt = X(F.backdropPadding), kt = K.heights[m], ot = K.widths[m];
        let wt = O - pt.top, at = 0 - pt.left;
        switch (H) {
          case "middle":
            wt -= kt / 2;
            break;
          case "bottom":
            wt -= kt;
            break;
        }
        switch (k) {
          case "center":
            at -= ot / 2;
            break;
          case "right":
            at -= ot;
            break;
          case "inner":
            m === b - 1 ? at -= ot : m > 0 && (at -= ot / 2);
            break;
        }
        Vt = {
          left: at,
          top: wt,
          width: ot + pt.width,
          height: kt + pt.height,
          color: F.backdropColor
        };
      }
      _.push({
        label: v,
        font: D,
        textOffset: O,
        options: {
          rotation: p,
          color: U,
          strokeColor: Rt,
          strokeWidth: Bt,
          textAlign: gt,
          textBaseline: H,
          translation: [
            x,
            S
          ],
          backdrop: Vt
        }
      });
    }
    return _;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-dt(this.labelRotation))
      return t === "top" ? "left" : "right";
    let s = "center";
    return e.align === "start" ? s = "left" : e.align === "end" ? s = "right" : e.align === "inner" && (s = "inner"), s;
  }
  _getYAxisLabelAlignment(t) {
    const { position: e, ticks: { crossAlign: i, mirror: s, padding: o } } = this.options, a = this._getLabelSizes(), r = t + o, l = a.widest.width;
    let h, c;
    return e === "left" ? s ? (c = this.right + o, i === "near" ? h = "left" : i === "center" ? (h = "center", c += l / 2) : (h = "right", c += l)) : (c = this.right - r, i === "near" ? h = "right" : i === "center" ? (h = "center", c -= l / 2) : (h = "left", c = this.left)) : e === "right" ? s ? (c = this.left + o, i === "near" ? h = "right" : i === "center" ? (h = "center", c -= l / 2) : (h = "left", c -= l)) : (c = this.left + r, i === "near" ? h = "left" : i === "center" ? (h = "center", c += l / 2) : (h = "right", c = this.right)) : h = "right", {
      textAlign: h,
      x: c
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const t = this.chart, e = this.options.position;
    if (e === "left" || e === "right")
      return {
        top: 0,
        left: this.left,
        bottom: t.height,
        right: this.right
      };
    if (e === "top" || e === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: t.width
      };
  }
  drawBackground() {
    const { ctx: t, options: { backgroundColor: e }, left: i, top: s, width: o, height: a } = this;
    e && (t.save(), t.fillStyle = e, t.fillRect(i, s, o, a), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display)
      return 0;
    const s = this.ticks.findIndex((o) => o.value === t);
    return s >= 0 ? e.setContext(this.getContext(s)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid, i = this.ctx, s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let o, a;
    const r = (l, h, c) => {
      !c.width || !c.color || (i.save(), i.lineWidth = c.width, i.strokeStyle = c.color, i.setLineDash(c.borderDash || []), i.lineDashOffset = c.borderDashOffset, i.beginPath(), i.moveTo(l.x, l.y), i.lineTo(h.x, h.y), i.stroke(), i.restore());
    };
    if (e.display)
      for (o = 0, a = s.length; o < a; ++o) {
        const l = s[o];
        e.drawOnChartArea && r({
          x: l.x1,
          y: l.y1
        }, {
          x: l.x2,
          y: l.y2
        }, l), e.drawTicks && r({
          x: l.tx1,
          y: l.ty1
        }, {
          x: l.tx2,
          y: l.ty2
        }, {
          color: l.tickColor,
          width: l.tickWidth,
          borderDash: l.tickBorderDash,
          borderDashOffset: l.tickBorderDashOffset
        });
      }
  }
  drawBorder() {
    const { chart: t, ctx: e, options: { border: i, grid: s } } = this, o = i.setContext(this.getContext()), a = i.display ? o.width : 0;
    if (!a)
      return;
    const r = s.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let h, c, d, u;
    this.isHorizontal() ? (h = rt(t, this.left, a) - a / 2, c = rt(t, this.right, r) + r / 2, d = u = l) : (d = rt(t, this.top, a) - a / 2, u = rt(t, this.bottom, r) + r / 2, h = c = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(h, d), e.lineTo(c, u), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const i = this.ctx, s = this._computeLabelArea();
    s && ie(i, s);
    const o = this.getLabelItems(t);
    for (const a of o) {
      const r = a.options, l = a.font, h = a.label, c = a.textOffset;
      zt(i, h, 0, c, l, r);
    }
    s && se(i);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: i, reverse: s } } = this;
    if (!i.display)
      return;
    const o = V(i.font), a = X(i.padding), r = i.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || I(e) ? (l += a.bottom, $(i.text) && (l += o.lineHeight * (i.text.length - 1))) : l += a.top;
    const { titleX: h, titleY: c, maxWidth: d, rotation: u } = go(this, l, e, r);
    zt(t, i.text, 0, 0, o, {
      color: i.color,
      maxWidth: d,
      rotation: u,
      textAlign: fo(r, e, s),
      textBaseline: "middle",
      translation: [
        h,
        c
      ]
    });
  }
  draw(t) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, e = t.ticks && t.ticks.z || 0, i = T(t.grid && t.grid.z, -1), s = T(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== vt.prototype.draw ? [
      {
        z: e,
        draw: (o) => {
          this.draw(o);
        }
      }
    ] : [
      {
        z: i,
        draw: (o) => {
          this.drawBackground(), this.drawGrid(o), this.drawTitle();
        }
      },
      {
        z: s,
        draw: () => {
          this.drawBorder();
        }
      },
      {
        z: e,
        draw: (o) => {
          this.drawLabels(o);
        }
      }
    ];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(), i = this.axis + "AxisID", s = [];
    let o, a;
    for (o = 0, a = e.length; o < a; ++o) {
      const r = e[o];
      r[i] === this.id && (!t || r.type === t) && s.push(r);
    }
    return s;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return V(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class jt {
  constructor(t, e, i) {
    this.type = t, this.scope = e, this.override = i, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let i;
    _o(e) && (i = this.register(e));
    const s = this.items, o = t.id, a = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in s || (s[o] = t, po(t, a, i), this.override && E.override(t.id, t.overrides)), a;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, i = t.id, s = this.scope;
    i in e && delete e[i], s && i in E[s] && (delete E[s][i], this.override && delete bt[i]);
  }
}
function po(n, t, e) {
  const i = Ys(/* @__PURE__ */ Object.create(null), [
    e ? E.get(e) : {},
    E.get(t),
    n.defaults
  ]);
  E.set(t, i), n.defaultRoutes && mo(t, n.defaultRoutes), n.descriptors && E.describe(t, n.descriptors);
}
function mo(n, t) {
  Object.keys(t).forEach((e) => {
    const i = e.split("."), s = i.pop(), o = [
      n
    ].concat(i).join("."), a = t[e].split("."), r = a.pop(), l = a.join(".");
    E.route(o, s, l, r);
  });
}
function _o(n) {
  return "id" in n && "defaults" in n;
}
class xo {
  constructor() {
    this.controllers = new jt(xt, "datasets", !0), this.elements = new jt(Q, "elements"), this.plugins = new jt(Object, "plugins"), this.scales = new jt(vt, "scales"), this._typedRegistries = [
      this.controllers,
      this.scales,
      this.elements
    ];
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, e, i) {
    [
      ...e
    ].forEach((s) => {
      const o = i || this._getRegistryForType(s);
      i || o.isForType(s) || o === this.plugins && s.id ? this._exec(t, o, s) : L(s, (a) => {
        const r = i || this._getRegistryForType(a);
        this._exec(t, r, a);
      });
    });
  }
  _exec(t, e, i) {
    const s = Bs(t);
    A(i["before" + s], [], i), e[t](i), A(i["after" + s], [], i);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const i = this._typedRegistries[e];
      if (i.isForType(t))
        return i;
    }
    return this.plugins;
  }
  _get(t, e, i) {
    const s = e.get(t);
    if (s === void 0)
      throw new Error('"' + t + '" is not a registered ' + i + ".");
    return s;
  }
}
var J = /* @__PURE__ */ new xo();
class bo {
  constructor() {
    this._init = [];
  }
  notify(t, e, i, s) {
    e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
    const o = s ? this._descriptors(t).filter(s) : this._descriptors(t), a = this._notify(o, t, e, i);
    return e === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), a;
  }
  _notify(t, e, i, s) {
    s = s || {};
    for (const o of t) {
      const a = o.plugin, r = a[i], l = [
        e,
        s,
        o.options
      ];
      if (A(r, l, a) === !1 && s.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    z(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const i = t && t.config, s = T(i.options && i.options.plugins, {}), o = yo(i);
    return s === !1 && !e ? [] : ko(t, o, s, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], i = this._cache, s = (o, a) => o.filter((r) => !a.some((l) => r.plugin.id === l.plugin.id));
    this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start");
  }
}
function yo(n) {
  const t = {}, e = [], i = Object.keys(J.plugins.items);
  for (let o = 0; o < i.length; o++)
    e.push(J.getPlugin(i[o]));
  const s = n.plugins || [];
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    e.indexOf(a) === -1 && (e.push(a), t[a.id] = !0);
  }
  return {
    plugins: e,
    localIds: t
  };
}
function vo(n, t) {
  return !t && n === !1 ? null : n === !0 ? {} : n;
}
function ko(n, { plugins: t, localIds: e }, i, s) {
  const o = [], a = n.getContext();
  for (const r of t) {
    const l = r.id, h = vo(i[l], s);
    h !== null && o.push({
      plugin: r,
      options: wo(n.config, {
        plugin: r,
        local: e[l]
      }, h, a)
    });
  }
  return o;
}
function wo(n, { plugin: t, local: e }, i, s) {
  const o = n.pluginScopeKeys(t), a = n.getOptionScopes(i, o);
  return e && t.defaults && a.push(t.defaults), n.createResolver(a, s, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function ke(n, t) {
  const e = E.datasets[n] || {};
  return ((t.datasets || {})[n] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function So(n, t) {
  let e = n;
  return n === "_index_" ? e = t : n === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function Mo(n, t) {
  return n === t ? "_index_" : "_value_";
}
function di(n) {
  if (n === "x" || n === "y" || n === "r")
    return n;
}
function Do(n) {
  if (n === "top" || n === "bottom")
    return "x";
  if (n === "left" || n === "right")
    return "y";
}
function we(n, ...t) {
  if (di(n))
    return n;
  for (const e of t) {
    const i = e.axis || Do(e.position) || n.length > 1 && di(n[0].toLowerCase());
    if (i)
      return i;
  }
  throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`);
}
function ui(n, t, e) {
  if (e[t + "AxisID"] === n)
    return {
      axis: t
    };
}
function Po(n, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((i) => i.xAxisID === n || i.yAxisID === n);
    if (e.length)
      return ui(n, "x", e[0]) || ui(n, "y", e[0]);
  }
  return {};
}
function Co(n, t) {
  const e = bt[n.type] || {
    scales: {}
  }, i = t.scales || {}, s = ke(n.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(i).forEach((a) => {
    const r = i[a];
    if (!I(r))
      return console.error(`Invalid scale configuration for scale: ${a}`);
    if (r._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${a}`);
    const l = we(a, r, Po(a, n), E.scales[r.type]), h = Mo(l, s), c = e.scales || {};
    o[a] = Kt(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      r,
      c[l],
      c[h]
    ]);
  }), n.data.datasets.forEach((a) => {
    const r = a.type || n.type, l = a.indexAxis || ke(r, t), c = (bt[r] || {}).scales || {};
    Object.keys(c).forEach((d) => {
      const u = So(d, l), f = a[u + "AxisID"] || u;
      o[f] = o[f] || /* @__PURE__ */ Object.create(null), Kt(o[f], [
        {
          axis: u
        },
        i[f],
        c[d]
      ]);
    });
  }), Object.keys(o).forEach((a) => {
    const r = o[a];
    Kt(r, [
      E.scales[r.type],
      E.scale
    ]);
  }), o;
}
function ns(n) {
  const t = n.options || (n.options = {});
  t.plugins = T(t.plugins, {}), t.scales = Co(n, t);
}
function os(n) {
  return n = n || {}, n.datasets = n.datasets || [], n.labels = n.labels || [], n;
}
function Oo(n) {
  return n = n || {}, n.data = os(n.data), ns(n), n;
}
const fi = /* @__PURE__ */ new Map(), as = /* @__PURE__ */ new Set();
function $t(n, t) {
  let e = fi.get(n);
  return e || (e = t(), fi.set(n, e), as.add(e)), e;
}
const Ct = (n, t, e) => {
  const i = Ft(t, e);
  i !== void 0 && n.add(i);
};
class Lo {
  constructor(t) {
    this._config = Oo(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = os(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), ns(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return $t(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, e) {
    return $t(`${t}.transition.${e}`, () => [
      [
        `datasets.${t}.transitions.${e}`,
        `transitions.${e}`
      ],
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return $t(`${t}-${e}`, () => [
      [
        `datasets.${t}.elements.${e}`,
        `datasets.${t}`,
        `elements.${e}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id, i = this.type;
    return $t(`${i}-plugin-${e}`, () => [
      [
        `plugins.${e}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, e) {
    const i = this._scopeCache;
    let s = i.get(t);
    return (!s || e) && (s = /* @__PURE__ */ new Map(), i.set(t, s)), s;
  }
  getOptionScopes(t, e, i) {
    const { options: s, type: o } = this, a = this._cachedScopes(t, i), r = a.get(e);
    if (r)
      return r;
    const l = /* @__PURE__ */ new Set();
    e.forEach((c) => {
      t && (l.add(t), c.forEach((d) => Ct(l, t, d))), c.forEach((d) => Ct(l, s, d)), c.forEach((d) => Ct(l, bt[o] || {}, d)), c.forEach((d) => Ct(l, E, d)), c.forEach((d) => Ct(l, Ie, d));
    });
    const h = Array.from(l);
    return h.length === 0 && h.push(/* @__PURE__ */ Object.create(null)), as.has(e) && a.set(e, h), h;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      bt[e] || {},
      E.datasets[e] || {},
      {
        type: e
      },
      E,
      Ie
    ];
  }
  resolveNamedOptions(t, e, i, s = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: a, subPrefixes: r } = gi(this._resolverCache, t, s);
    let l = a;
    if (Ao(a, e)) {
      o.$shared = !1, i = ee(i) ? i() : i;
      const h = this.createResolver(t, i, r);
      l = Ee(a, i, h);
    }
    for (const h of e)
      o[h] = l[h];
    return o;
  }
  createResolver(t, e, i = [
    ""
  ], s) {
    const { resolver: o } = gi(this._resolverCache, t, i);
    return I(e) ? Ee(o, e, void 0, s) : o;
  }
}
function gi(n, t, e) {
  let i = n.get(t);
  i || (i = /* @__PURE__ */ new Map(), n.set(t, i));
  const s = e.join();
  let o = i.get(s);
  return o || (o = {
    resolver: Ps(t, e),
    subPrefixes: e.filter((r) => !r.toLowerCase().includes("hover"))
  }, i.set(s, o)), o;
}
const To = (n) => I(n) && Object.getOwnPropertyNames(n).some((t) => ee(n[t]));
function Ao(n, t) {
  const { isScriptable: e, isIndexable: i } = Cs(n);
  for (const s of t) {
    const o = e(s), a = i(s), r = (a || o) && n[s];
    if (o && (ee(r) || To(r)) || a && $(r))
      return !0;
  }
  return !1;
}
var zo = "4.4.5";
const Fo = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function pi(n, t) {
  return n === "top" || n === "bottom" || Fo.indexOf(n) === -1 && t === "x";
}
function mi(n, t) {
  return function(e, i) {
    return e[n] === i[n] ? e[t] - i[t] : e[n] - i[n];
  };
}
function _i(n) {
  const t = n.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), A(e && e.onComplete, [
    n
  ], t);
}
function Io(n) {
  const t = n.chart, e = t.options.animation;
  A(e && e.onProgress, [
    n
  ], t);
}
function rs(n) {
  return $i() && typeof n == "string" ? n = document.getElementById(n) : n && n.length && (n = n[0]), n && n.canvas && (n = n.canvas), n;
}
const Gt = {}, xi = (n) => {
  const t = rs(n);
  return Object.values(Gt).filter((e) => e.canvas === t).pop();
};
function Eo(n, t, e) {
  const i = Object.keys(n);
  for (const s of i) {
    const o = +s;
    if (o >= t) {
      const a = n[s];
      delete n[s], (e > 0 || o > t) && (n[o + e] = a);
    }
  }
}
function Ro(n, t, e, i) {
  return !e || n.type === "mouseout" ? null : i ? t : n;
}
function Ut(n, t, e) {
  return n.options.clip ? n[e] : t[e];
}
function Bo(n, t) {
  const { xScale: e, yScale: i } = n;
  return e && i ? {
    left: Ut(e, t, "left"),
    right: Ut(e, t, "right"),
    top: Ut(i, t, "top"),
    bottom: Ut(i, t, "bottom")
  } : t;
}
class ct {
  static register(...t) {
    J.add(...t), bi();
  }
  static unregister(...t) {
    J.remove(...t), bi();
  }
  constructor(t, e) {
    const i = this.config = new Lo(e), s = rs(t), o = xi(s);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const a = i.createResolver(i.chartOptionScopes(), this.getContext());
    this.platform = new (i.platform || to(s))(), this.platform.updateConfig(i);
    const r = this.platform.acquireContext(s, a.aspectRatio), l = r && r.canvas, h = l && l.height, c = l && l.width;
    if (this.id = xs(), this.ctx = r, this.canvas = l, this.width = c, this.height = h, this._options = a, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new bo(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = bs((d) => this.update(d), a.resizeDelay || 0), this._dataChanges = [], Gt[this.id] = this, !r || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    et.listen(this, "complete", _i), et.listen(this, "progress", Io), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: i, height: s, _aspectRatio: o } = this;
    return z(t) ? e && o ? o : s ? i / s : null : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return J;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Te(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return Ae(this.canvas, this.ctx), this;
  }
  stop() {
    return et.stop(this), this;
  }
  resize(t, e) {
    et.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    const i = this.options, s = this.canvas, o = i.maintainAspectRatio && this.aspectRatio, a = this.platform.getMaximumSize(s, t, e, o), r = i.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = a.width, this.height = a.height, this._aspectRatio = this.aspectRatio, Te(this, r, !0) && (this.notifyPlugins("resize", {
      size: a
    }), A(i.onResize, [
      this,
      a
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    L(e, (i, s) => {
      i.id = s;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, i = this.scales, s = Object.keys(i).reduce((a, r) => (a[r] = !1, a), {});
    let o = [];
    e && (o = o.concat(Object.keys(e).map((a) => {
      const r = e[a], l = we(a, r), h = l === "r", c = l === "x";
      return {
        options: r,
        dposition: h ? "chartArea" : c ? "bottom" : "left",
        dtype: h ? "radialLinear" : c ? "category" : "linear"
      };
    }))), L(o, (a) => {
      const r = a.options, l = r.id, h = we(l, r), c = T(r.type, a.dtype);
      (r.position === void 0 || pi(r.position, h) !== pi(a.dposition)) && (r.position = a.dposition), s[l] = !0;
      let d = null;
      if (l in i && i[l].type === c)
        d = i[l];
      else {
        const u = J.getScale(c);
        d = new u({
          id: l,
          type: c,
          ctx: this.ctx,
          chart: this
        }), i[d.id] = d;
      }
      d.init(r, t);
    }), L(s, (a, r) => {
      a || delete i[r];
    }), L(i, (a) => {
      Y.configure(this, a, a.options), Y.addBox(this, a);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, i = t.length;
    if (t.sort((s, o) => s.index - o.index), i > e) {
      for (let s = e; s < i; ++s)
        this._destroyDatasetMeta(s);
      t.splice(e, i - e);
    }
    this._sortedMetasets = t.slice(0).sort(mi("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: e } } = this;
    t.length > e.length && delete this._stacks, t.forEach((i, s) => {
      e.filter((o) => o === i._dataset).length === 0 && this._destroyDatasetMeta(s);
    });
  }
  buildOrUpdateControllers() {
    const t = [], e = this.data.datasets;
    let i, s;
    for (this._removeUnreferencedMetasets(), i = 0, s = e.length; i < s; i++) {
      const o = e[i];
      let a = this.getDatasetMeta(i);
      const r = o.type || this.config.type;
      if (a.type && a.type !== r && (this._destroyDatasetMeta(i), a = this.getDatasetMeta(i)), a.type = r, a.indexAxis = o.indexAxis || ke(r, this.options), a.order = o.order || 0, a.index = i, a.label = "" + o.label, a.visible = this.isDatasetVisible(i), a.controller)
        a.controller.updateIndex(i), a.controller.linkScales();
      else {
        const l = J.getController(r), { datasetElementType: h, dataElementType: c } = E.datasets[r];
        Object.assign(l, {
          dataElementType: J.getElement(c),
          datasetElementType: h && J.getElement(h)
        }), a.controller = new l(this, i), t.push(a.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    L(this.data.datasets, (t, e) => {
      this.getDatasetMeta(e).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const e = this.config;
    e.update();
    const i = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), s = this._animationsDisabled = !i.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: !0
    }) === !1)
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let a = 0;
    for (let h = 0, c = this.data.datasets.length; h < c; h++) {
      const { controller: d } = this.getDatasetMeta(h), u = !s && o.indexOf(d) === -1;
      d.buildOrUpdateElements(u), a = Math.max(+d.getMaxOverflow(), a);
    }
    a = this._minPadding = i.layout.autoPadding ? a : 0, this._updateLayout(a), s || L(o, (h) => {
      h.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(mi("z", "_idx"));
    const { _active: r, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : r.length && this._updateHoverStyles(r, r, !0), this.render();
  }
  _updateScales() {
    L(this.scales, (t) => {
      Y.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), i = new Set(t.events);
    (!ze(e, i) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: i, start: s, count: o } of e) {
      const a = i === "_removeElements" ? -o : o;
      Eo(t, s, a);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, i = (o) => new Set(t.filter((a) => a[0] === o).map((a, r) => r + "," + a.splice(1).join(","))), s = i(0);
    for (let o = 1; o < e; o++)
      if (!ze(s, i(o)))
        return;
    return Array.from(s).map((o) => o.split(",")).map((o) => ({
      method: o[1],
      start: +o[2],
      count: +o[3]
    }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: !0
    }) === !1)
      return;
    Y.update(this, this.width, this.height, t);
    const e = this.chartArea, i = e.width <= 0 || e.height <= 0;
    this._layers = [], L(this.boxes, (s) => {
      i && s.position === "chartArea" || (s.configure && s.configure(), this._layers.push(...s._layers()));
    }, this), this._layers.forEach((s, o) => {
      s._idx = o;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: !0
    }) !== !1) {
      for (let e = 0, i = this.data.datasets.length; e < i; ++e)
        this.getDatasetMeta(e).controller.configure();
      for (let e = 0, i = this.data.datasets.length; e < i; ++e)
        this._updateDataset(e, ee(t) ? t({
          datasetIndex: e
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, e) {
    const i = this.getDatasetMeta(t), s = {
      meta: i,
      index: t,
      mode: e,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", s) !== !1 && (i.controller._update(e), s.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", s));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (et.has(this) ? this.attached && !et.running(this) && et.start(this) : (this.draw(), _i({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: i, height: s } = this._resizeBeforeDraw;
      this._resizeBeforeDraw = null, this._resize(i, s);
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: !0
    }) === !1)
      return;
    const e = this._layers;
    for (t = 0; t < e.length && e[t].z <= 0; ++t)
      e[t].draw(this.chartArea);
    for (this._drawDatasets(); t < e.length; ++t)
      e[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const e = this._sortedMetasets, i = [];
    let s, o;
    for (s = 0, o = e.length; s < o; ++s) {
      const a = e[s];
      (!t || a.visible) && i.push(a);
    }
    return i;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: !0
    }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let e = t.length - 1; e >= 0; --e)
      this._drawDataset(t[e]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const e = this.ctx, i = t._clip, s = !i.disabled, o = Bo(t, this.chartArea), a = {
      meta: t,
      index: t.index,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetDraw", a) !== !1 && (s && ie(e, {
      left: i.left === !1 ? 0 : o.left - i.left,
      right: i.right === !1 ? this.width : o.right + i.right,
      top: i.top === !1 ? 0 : o.top - i.top,
      bottom: i.bottom === !1 ? this.height : o.bottom + i.bottom
    }), t.controller.draw(), s && se(e), a.cancelable = !1, this.notifyPlugins("afterDatasetDraw", a));
  }
  isPointInArea(t) {
    return Pe(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, i, s) {
    const o = zn.modes[e];
    return typeof o == "function" ? o(this, t, i, s) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t], i = this._metasets;
    let s = i.filter((o) => o && o._dataset === e).pop();
    return s || (s = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: e && e.order || 0,
      index: t,
      _dataset: e,
      _parsed: [],
      _sorted: !1
    }, i.push(s)), s;
  }
  getContext() {
    return this.$context || (this.$context = yt(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const e = this.data.datasets[t];
    if (!e)
      return !1;
    const i = this.getDatasetMeta(t);
    return typeof i.hidden == "boolean" ? !i.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    const i = this.getDatasetMeta(t);
    i.hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, i) {
    const s = i ? "show" : "hide", o = this.getDatasetMeta(t), a = o.controller._resolveAnimations(void 0, s);
    Tt(e) ? (o.data[e].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), a.update(o, {
      visible: i
    }), this.update((r) => r.datasetIndex === t ? s : void 0));
  }
  hide(t, e) {
    this._updateVisibility(t, e, !1);
  }
  show(t, e) {
    this._updateVisibility(t, e, !0);
  }
  _destroyDatasetMeta(t) {
    const e = this._metasets[t];
    e && e.controller && e.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, e;
    for (this.stop(), et.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Ae(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete Gt[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, e = this.platform, i = (o, a) => {
      e.addEventListener(this, o, a), t[o] = a;
    }, s = (o, a, r) => {
      o.offsetX = a, o.offsetY = r, this._eventHandler(o);
    };
    L(this.options.events, (o) => i(o, s));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, e = this.platform, i = (l, h) => {
      e.addEventListener(this, l, h), t[l] = h;
    }, s = (l, h) => {
      t[l] && (e.removeEventListener(this, l, h), delete t[l]);
    }, o = (l, h) => {
      this.canvas && this.resize(l, h);
    };
    let a;
    const r = () => {
      s("attach", r), this.attached = !0, this.resize(), i("resize", o), i("detach", a);
    };
    a = () => {
      this.attached = !1, s("resize", o), this._stop(), this._resize(0, 0), i("attach", r);
    }, e.isAttached(this.canvas) ? r() : a();
  }
  unbindEvents() {
    L(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, L(this._responsiveListeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, e, i) {
    const s = i ? "set" : "remove";
    let o, a, r, l;
    for (e === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + s + "DatasetHoverStyle"]()), r = 0, l = t.length; r < l; ++r) {
      a = t[r];
      const h = a && this.getDatasetMeta(a.datasetIndex).controller;
      h && h[s + "HoverStyle"](a.element, a.datasetIndex, a.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [], i = t.map(({ datasetIndex: o, index: a }) => {
      const r = this.getDatasetMeta(o);
      if (!r)
        throw new Error("No dataset found at index " + o);
      return {
        datasetIndex: o,
        element: r.data[a],
        index: a
      };
    });
    !Jt(i, e) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, e));
  }
  notifyPlugins(t, e, i) {
    return this._plugins.notify(this, t, e, i);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, i) {
    const s = this.options.hover, o = (l, h) => l.filter((c) => !h.some((d) => c.datasetIndex === d.datasetIndex && c.index === d.index)), a = o(e, t), r = i ? t : o(t, e);
    a.length && this.updateHoverStyle(a, s.mode, !1), r.length && s.mode && this.updateHoverStyle(r, s.mode, !0);
  }
  _eventHandler(t, e) {
    const i = {
      event: t,
      replay: e,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, s = (a) => (a.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", i, s) === !1)
      return;
    const o = this._handleEvent(t, e, i.inChartArea);
    return i.cancelable = !1, this.notifyPlugins("afterEvent", i, s), (o || i.changed) && this.render(), this;
  }
  _handleEvent(t, e, i) {
    const { _active: s = [], options: o } = this, a = e, r = this._getActiveElements(t, s, i, a), l = ys(t), h = Ro(t, this._lastEvent, i, l);
    i && (this._lastEvent = null, A(o.onHover, [
      t,
      r,
      this
    ], this), l && A(o.onClick, [
      t,
      r,
      this
    ], this));
    const c = !Jt(r, s);
    return (c || e) && (this._active = r, this._updateHoverStyles(r, s, e)), this._lastEvent = h, c;
  }
  _getActiveElements(t, e, i, s) {
    if (t.type === "mouseout")
      return [];
    if (!i)
      return e;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, s);
  }
}
M(ct, "defaults", E), M(ct, "instances", Gt), M(ct, "overrides", bt), M(ct, "registry", J), M(ct, "version", zo), M(ct, "getChart", xi);
function bi() {
  return L(ct.instances, (n) => n._plugins.invalidate());
}
function ls(n, t, e = t) {
  n.lineCap = T(e.borderCapStyle, t.borderCapStyle), n.setLineDash(T(e.borderDash, t.borderDash)), n.lineDashOffset = T(e.borderDashOffset, t.borderDashOffset), n.lineJoin = T(e.borderJoinStyle, t.borderJoinStyle), n.lineWidth = T(e.borderWidth, t.borderWidth), n.strokeStyle = T(e.borderColor, t.borderColor);
}
function Vo(n, t, e) {
  n.lineTo(e.x, e.y);
}
function Ho(n) {
  return n.stepped ? Xs : n.tension || n.cubicInterpolationMode === "monotone" ? Ks : Vo;
}
function hs(n, t, e = {}) {
  const i = n.length, { start: s = 0, end: o = i - 1 } = e, { start: a, end: r } = t, l = Math.max(s, a), h = Math.min(o, r), c = s < a && o < a || s > r && o > r;
  return {
    count: i,
    start: l,
    loop: t.loop,
    ilen: h < l && !c ? i + h - l : h - l
  };
}
function Wo(n, t, e, i) {
  const { points: s, options: o } = t, { count: a, start: r, loop: l, ilen: h } = hs(s, e, i), c = Ho(o);
  let { move: d = !0, reverse: u } = i || {}, f, g, p;
  for (f = 0; f <= h; ++f)
    g = s[(r + (u ? h - f : f)) % a], !g.skip && (d ? (n.moveTo(g.x, g.y), d = !1) : c(n, p, g, u, o.stepped), p = g);
  return l && (g = s[(r + (u ? h : 0)) % a], c(n, p, g, u, o.stepped)), !!l;
}
function No(n, t, e, i) {
  const s = t.points, { count: o, start: a, ilen: r } = hs(s, e, i), { move: l = !0, reverse: h } = i || {};
  let c = 0, d = 0, u, f, g, p, _, m;
  const b = (v) => (a + (h ? r - v : v)) % o, y = () => {
    p !== _ && (n.lineTo(c, _), n.lineTo(c, p), n.lineTo(c, m));
  };
  for (l && (f = s[b(0)], n.moveTo(f.x, f.y)), u = 0; u <= r; ++u) {
    if (f = s[b(u)], f.skip)
      continue;
    const v = f.x, x = f.y, S = v | 0;
    S === g ? (x < p ? p = x : x > _ && (_ = x), c = (d * c + v) / ++d) : (y(), n.lineTo(v, x), g = S, d = 0, p = _ = x), m = x;
  }
  y();
}
function Se(n) {
  const t = n.options, e = t.borderDash && t.borderDash.length;
  return !n._decimated && !n._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? No : Wo;
}
function jo(n) {
  return n.stepped ? Os : n.tension || n.cubicInterpolationMode === "monotone" ? Ls : Ts;
}
function $o(n, t, e, i) {
  let s = t._path;
  s || (s = t._path = new Path2D(), t.path(s, e, i) && s.closePath()), ls(n, t.options), n.stroke(s);
}
function Uo(n, t, e, i) {
  const { segments: s, options: o } = t, a = Se(t);
  for (const r of s)
    ls(n, o, r.style), n.beginPath(), a(n, t, r, {
      start: e,
      end: e + i - 1
    }) && n.closePath(), n.stroke();
}
const Yo = typeof Path2D == "function";
function Xo(n, t, e, i) {
  Yo && !t.options.segment ? $o(n, t, e, i) : Uo(n, t, e, i);
}
class ft extends Q {
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    const i = this.options;
    if ((i.tension || i.cubicInterpolationMode === "monotone") && !i.stepped && !this._pointsUpdated) {
      const s = i.spanGaps ? this._loop : this._fullLoop;
      vs(this._points, i, t, s, e), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = ks(this, this.options.segment));
  }
  first() {
    const t = this.segments, e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments, e = this.points, i = t.length;
    return i && e[t[i - 1].end];
  }
  interpolate(t, e) {
    const i = this.options, s = t[e], o = this.points, a = ji(this, {
      property: e,
      start: s,
      end: s
    });
    if (!a.length)
      return;
    const r = [], l = jo(i);
    let h, c;
    for (h = 0, c = a.length; h < c; ++h) {
      const { start: d, end: u } = a[h], f = o[d], g = o[u];
      if (f === g) {
        r.push(f);
        continue;
      }
      const p = Math.abs((s - f[e]) / (g[e] - f[e])), _ = l(f, g, p, i.stepped);
      _[e] = t[e], r.push(_);
    }
    return r.length === 1 ? r[0] : r;
  }
  pathSegment(t, e, i) {
    return Se(this)(t, this, e, i);
  }
  path(t, e, i) {
    const s = this.segments, o = Se(this);
    let a = this._loop;
    e = e || 0, i = i || this.points.length - e;
    for (const r of s)
      a &= o(t, this, r, {
        start: e,
        end: e + i - 1
      });
    return !!a;
  }
  draw(t, e, i, s) {
    const o = this.options || {};
    (this.points || []).length && o.borderWidth && (t.save(), Xo(t, this, i, s), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
M(ft, "id", "line"), M(ft, "defaults", {
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderWidth: 3,
  capBezierPoints: !0,
  cubicInterpolationMode: "default",
  fill: !1,
  spanGaps: !1,
  stepped: !1,
  tension: 0
}), M(ft, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
}), M(ft, "descriptors", {
  _scriptable: !0,
  _indexable: (t) => t !== "borderDash" && t !== "fill"
});
function yi(n, t, e, i) {
  const s = n.options, { [e]: o } = n.getProps([
    e
  ], i);
  return Math.abs(t - o) < s.radius + s.hitRadius;
}
class pe extends Q {
  constructor(e) {
    super();
    M(this, "parsed");
    M(this, "skip");
    M(this, "stop");
    this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, e && Object.assign(this, e);
  }
  inRange(e, i, s) {
    const o = this.options, { x: a, y: r } = this.getProps([
      "x",
      "y"
    ], s);
    return Math.pow(e - a, 2) + Math.pow(i - r, 2) < Math.pow(o.hitRadius + o.radius, 2);
  }
  inXRange(e, i) {
    return yi(this, e, "x", i);
  }
  inYRange(e, i) {
    return yi(this, e, "y", i);
  }
  getCenterPoint(e) {
    const { x: i, y: s } = this.getProps([
      "x",
      "y"
    ], e);
    return {
      x: i,
      y: s
    };
  }
  size(e) {
    e = e || this.options || {};
    let i = e.radius || 0;
    i = Math.max(i, i && e.hoverRadius || 0);
    const s = i && e.borderWidth || 0;
    return (i + s) * 2;
  }
  draw(e, i) {
    const s = this.options;
    this.skip || s.radius < 0.1 || !Pe(this, i, this.size(s) / 2) || (e.strokeStyle = s.borderColor, e.lineWidth = s.borderWidth, e.fillStyle = s.backgroundColor, ye(e, s, this.x, this.y));
  }
  getRange() {
    const e = this.options || {};
    return e.radius + e.hitRadius;
  }
}
M(pe, "id", "point"), /**
* @type {any}
*/
M(pe, "defaults", {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: "circle",
  radius: 3,
  rotation: 0
}), /**
* @type {any}
*/
M(pe, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
function cs(n, t) {
  const { x: e, y: i, base: s, width: o, height: a } = n.getProps([
    "x",
    "y",
    "base",
    "width",
    "height"
  ], t);
  let r, l, h, c, d;
  return n.horizontal ? (d = a / 2, r = Math.min(e, s), l = Math.max(e, s), h = i - d, c = i + d) : (d = o / 2, r = e - d, l = e + d, h = Math.min(i, s), c = Math.max(i, s)), {
    left: r,
    top: h,
    right: l,
    bottom: c
  };
}
function st(n, t, e, i) {
  return n ? 0 : Z(t, e, i);
}
function Ko(n, t, e) {
  const i = n.options.borderWidth, s = n.borderSkipped, o = Vs(i);
  return {
    t: st(s.top, o.top, 0, e),
    r: st(s.right, o.right, 0, t),
    b: st(s.bottom, o.bottom, 0, e),
    l: st(s.left, o.left, 0, t)
  };
}
function qo(n, t, e) {
  const { enableBorderRadius: i } = n.getProps([
    "enableBorderRadius"
  ]), s = n.options.borderRadius, o = _t(s), a = Math.min(t, e), r = n.borderSkipped, l = i || I(s);
  return {
    topLeft: st(!l || r.top || r.left, o.topLeft, 0, a),
    topRight: st(!l || r.top || r.right, o.topRight, 0, a),
    bottomLeft: st(!l || r.bottom || r.left, o.bottomLeft, 0, a),
    bottomRight: st(!l || r.bottom || r.right, o.bottomRight, 0, a)
  };
}
function Go(n) {
  const t = cs(n), e = t.right - t.left, i = t.bottom - t.top, s = Ko(n, e / 2, i / 2), o = qo(n, e / 2, i / 2);
  return {
    outer: {
      x: t.left,
      y: t.top,
      w: e,
      h: i,
      radius: o
    },
    inner: {
      x: t.left + s.l,
      y: t.top + s.t,
      w: e - s.l - s.r,
      h: i - s.t - s.b,
      radius: {
        topLeft: Math.max(0, o.topLeft - Math.max(s.t, s.l)),
        topRight: Math.max(0, o.topRight - Math.max(s.t, s.r)),
        bottomLeft: Math.max(0, o.bottomLeft - Math.max(s.b, s.l)),
        bottomRight: Math.max(0, o.bottomRight - Math.max(s.b, s.r))
      }
    }
  };
}
function me(n, t, e, i) {
  const s = t === null, o = e === null, r = n && !(s && o) && cs(n, i);
  return r && (s || ut(t, r.left, r.right)) && (o || ut(e, r.top, r.bottom));
}
function Jo(n) {
  return n.topLeft || n.topRight || n.bottomLeft || n.bottomRight;
}
function Zo(n, t) {
  n.rect(t.x, t.y, t.w, t.h);
}
function _e(n, t, e = {}) {
  const i = n.x !== e.x ? -t : 0, s = n.y !== e.y ? -t : 0, o = (n.x + n.w !== e.x + e.w ? t : 0) - i, a = (n.y + n.h !== e.y + e.h ? t : 0) - s;
  return {
    x: n.x + i,
    y: n.y + s,
    w: n.w + o,
    h: n.h + a,
    radius: n.radius
  };
}
class xe extends Q {
  constructor(t) {
    super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
  }
  draw(t) {
    const { inflateAmount: e, options: { borderColor: i, backgroundColor: s } } = this, { inner: o, outer: a } = Go(this), r = Jo(a.radius) ? Zt : Zo;
    t.save(), (a.w !== o.w || a.h !== o.h) && (t.beginPath(), r(t, _e(a, e, o)), t.clip(), r(t, _e(o, -e, a)), t.fillStyle = i, t.fill("evenodd")), t.beginPath(), r(t, _e(o, e)), t.fillStyle = s, t.fill(), t.restore();
  }
  inRange(t, e, i) {
    return me(this, t, e, i);
  }
  inXRange(t, e) {
    return me(this, t, null, e);
  }
  inYRange(t, e) {
    return me(this, null, t, e);
  }
  getCenterPoint(t) {
    const { x: e, y: i, base: s, horizontal: o } = this.getProps([
      "x",
      "y",
      "base",
      "horizontal"
    ], t);
    return {
      x: o ? (e + s) / 2 : e,
      y: o ? i : (i + s) / 2
    };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
M(xe, "id", "bar"), M(xe, "defaults", {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0
}), M(xe, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
function Qo(n, t, e) {
  const i = n.segments, s = n.points, o = t.points, a = [];
  for (const r of i) {
    let { start: l, end: h } = r;
    h = Le(l, h, s);
    const c = Me(e, s[l], s[h], r.loop);
    if (!t.segments) {
      a.push({
        source: r,
        target: c,
        start: s[l],
        end: s[h]
      });
      continue;
    }
    const d = ji(t, c);
    for (const u of d) {
      const f = Me(e, o[u.start], o[u.end], u.loop), g = Hs(r, s, f);
      for (const p of g)
        a.push({
          source: p,
          target: u,
          start: {
            [e]: vi(c, f, "start", Math.max)
          },
          end: {
            [e]: vi(c, f, "end", Math.min)
          }
        });
    }
  }
  return a;
}
function Me(n, t, e, i) {
  if (i)
    return;
  let s = t[n], o = e[n];
  return n === "angle" && (s = je(s), o = je(o)), {
    property: n,
    start: s,
    end: o
  };
}
function ta(n, t) {
  const { x: e = null, y: i = null } = n || {}, s = t.points, o = [];
  return t.segments.forEach(({ start: a, end: r }) => {
    r = Le(a, r, s);
    const l = s[a], h = s[r];
    i !== null ? (o.push({
      x: l.x,
      y: i
    }), o.push({
      x: h.x,
      y: i
    })) : e !== null && (o.push({
      x: e,
      y: l.y
    }), o.push({
      x: e,
      y: h.y
    }));
  }), o;
}
function Le(n, t, e) {
  for (; t > n; t--) {
    const i = e[t];
    if (!isNaN(i.x) && !isNaN(i.y))
      break;
  }
  return t;
}
function vi(n, t, e, i) {
  return n && t ? i(n[e], t[e]) : n ? n[e] : t ? t[e] : 0;
}
function ds(n, t) {
  let e = [], i = !1;
  return $(n) ? (i = !0, e = n) : e = ta(n, t), e.length ? new ft({
    points: e,
    options: {
      tension: 0
    },
    _loop: i,
    _fullLoop: i
  }) : null;
}
function ki(n) {
  return n && n.fill !== !1;
}
function ea(n, t, e) {
  let s = n[t].fill;
  const o = [
    t
  ];
  let a;
  if (!e)
    return s;
  for (; s !== !1 && o.indexOf(s) === -1; ) {
    if (!j(s))
      return s;
    if (a = n[s], !a)
      return !1;
    if (a.visible)
      return s;
    o.push(s), s = a.fill;
  }
  return !1;
}
function ia(n, t, e) {
  const i = aa(n);
  if (I(i))
    return isNaN(i.value) ? !1 : i;
  let s = parseFloat(i);
  return j(s) && Math.floor(s) === s ? sa(i[0], t, s, e) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(i) >= 0 && i;
}
function sa(n, t, e, i) {
  return (n === "-" || n === "+") && (e = t + e), e === t || e < 0 || e >= i ? !1 : e;
}
function na(n, t) {
  let e = null;
  return n === "start" ? e = t.bottom : n === "end" ? e = t.top : I(n) ? e = t.getPixelForValue(n.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function oa(n, t, e) {
  let i;
  return n === "start" ? i = e : n === "end" ? i = t.options.reverse ? t.min : t.max : I(n) ? i = n.value : i = t.getBaseValue(), i;
}
function aa(n) {
  const t = n.options, e = t.fill;
  let i = T(e && e.target, e);
  return i === void 0 && (i = !!t.backgroundColor), i === !1 || i === null ? !1 : i === !0 ? "origin" : i;
}
function ra(n) {
  const { scale: t, index: e, line: i } = n, s = [], o = i.segments, a = i.points, r = la(t, e);
  r.push(ds({
    x: null,
    y: t.bottom
  }, i));
  for (let l = 0; l < o.length; l++) {
    const h = o[l];
    for (let c = h.start; c <= h.end; c++)
      ha(s, a[c], r);
  }
  return new ft({
    points: s,
    options: {}
  });
}
function la(n, t) {
  const e = [], i = n.getMatchingVisibleMetas("line");
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.index === t)
      break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function ha(n, t, e) {
  const i = [];
  for (let s = 0; s < e.length; s++) {
    const o = e[s], { first: a, last: r, point: l } = ca(o, t, "x");
    if (!(!l || a && r)) {
      if (a)
        i.unshift(l);
      else if (n.push(l), !r)
        break;
    }
  }
  n.push(...i);
}
function ca(n, t, e) {
  const i = n.interpolate(t, e);
  if (!i)
    return {};
  const s = i[e], o = n.segments, a = n.points;
  let r = !1, l = !1;
  for (let h = 0; h < o.length; h++) {
    const c = o[h], d = a[c.start][e], u = a[c.end][e];
    if (ut(s, d, u)) {
      r = s === d, l = s === u;
      break;
    }
  }
  return {
    first: r,
    last: l,
    point: i
  };
}
class us {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, e, i) {
    const { x: s, y: o, radius: a } = this;
    return e = e || {
      start: 0,
      end: Js
    }, t.arc(s, o, a, e.end, e.start, !0), !i.bounds;
  }
  interpolate(t) {
    const { x: e, y: i, radius: s } = this, o = t.angle;
    return {
      x: e + Math.cos(o) * s,
      y: i + Math.sin(o) * s,
      angle: o
    };
  }
}
function da(n) {
  const { chart: t, fill: e, line: i } = n;
  if (j(e))
    return ua(t, e);
  if (e === "stack")
    return ra(n);
  if (e === "shape")
    return !0;
  const s = fa(n);
  return s instanceof us ? s : ds(s, i);
}
function ua(n, t) {
  const e = n.getDatasetMeta(t);
  return e && n.isDatasetVisible(t) ? e.dataset : null;
}
function fa(n) {
  return (n.scale || {}).getPointPositionForValue ? pa(n) : ga(n);
}
function ga(n) {
  const { scale: t = {}, fill: e } = n, i = na(e, t);
  if (j(i)) {
    const s = t.isHorizontal();
    return {
      x: s ? i : null,
      y: s ? null : i
    };
  }
  return null;
}
function pa(n) {
  const { scale: t, fill: e } = n, i = t.options, s = t.getLabels().length, o = i.reverse ? t.max : t.min, a = oa(e, t, o), r = [];
  if (i.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new us({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(a)
    });
  }
  for (let l = 0; l < s; ++l)
    r.push(t.getPointPositionForValue(l, a));
  return r;
}
function be(n, t, e) {
  const i = da(t), { line: s, scale: o, axis: a } = t, r = s.options, l = r.fill, h = r.backgroundColor, { above: c = h, below: d = h } = l || {};
  i && s.points.length && (ie(n, e), ma(n, {
    line: s,
    target: i,
    above: c,
    below: d,
    area: e,
    scale: o,
    axis: a
  }), se(n));
}
function ma(n, t) {
  const { line: e, target: i, above: s, below: o, area: a, scale: r } = t, l = e._loop ? "angle" : t.axis;
  n.save(), l === "x" && o !== s && (wi(n, i, a.top), Si(n, {
    line: e,
    target: i,
    color: s,
    scale: r,
    property: l
  }), n.restore(), n.save(), wi(n, i, a.bottom)), Si(n, {
    line: e,
    target: i,
    color: o,
    scale: r,
    property: l
  }), n.restore();
}
function wi(n, t, e) {
  const { segments: i, points: s } = t;
  let o = !0, a = !1;
  n.beginPath();
  for (const r of i) {
    const { start: l, end: h } = r, c = s[l], d = s[Le(l, h, s)];
    o ? (n.moveTo(c.x, c.y), o = !1) : (n.lineTo(c.x, e), n.lineTo(c.x, c.y)), a = !!t.pathSegment(n, r, {
      move: a
    }), a ? n.closePath() : n.lineTo(d.x, e);
  }
  n.lineTo(t.first().x, e), n.closePath(), n.clip();
}
function Si(n, t) {
  const { line: e, target: i, property: s, color: o, scale: a } = t, r = Qo(e, i, s);
  for (const { source: l, target: h, start: c, end: d } of r) {
    const { style: { backgroundColor: u = o } = {} } = l, f = i !== !0;
    n.save(), n.fillStyle = u, _a(n, a, f && Me(s, c, d)), n.beginPath();
    const g = !!e.pathSegment(n, l);
    let p;
    if (f) {
      g ? n.closePath() : Mi(n, i, d, s);
      const _ = !!i.pathSegment(n, h, {
        move: g,
        reverse: !0
      });
      p = g && _, p || Mi(n, i, c, s);
    }
    n.closePath(), n.fill(p ? "evenodd" : "nonzero"), n.restore();
  }
}
function _a(n, t, e) {
  const { top: i, bottom: s } = t.chart.chartArea, { property: o, start: a, end: r } = e || {};
  o === "x" && (n.beginPath(), n.rect(a, i, r - a, s - i), n.clip());
}
function Mi(n, t, e, i) {
  const s = t.interpolate(e, i);
  s && n.lineTo(s.x, s.y);
}
var Wa = {
  id: "filler",
  afterDatasetsUpdate(n, t, e) {
    const i = (n.data.datasets || []).length, s = [];
    let o, a, r, l;
    for (a = 0; a < i; ++a)
      o = n.getDatasetMeta(a), r = o.dataset, l = null, r && r.options && r instanceof ft && (l = {
        visible: n.isDatasetVisible(a),
        index: a,
        fill: ia(r, a, i),
        chart: n,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: r
      }), o.$filler = l, s.push(l);
    for (a = 0; a < i; ++a)
      l = s[a], !(!l || l.fill === !1) && (l.fill = ea(s, a, e.propagate));
  },
  beforeDraw(n, t, e) {
    const i = e.drawTime === "beforeDraw", s = n.getSortedVisibleDatasetMetas(), o = n.chartArea;
    for (let a = s.length - 1; a >= 0; --a) {
      const r = s[a].$filler;
      r && (r.line.updateControlPoints(o, r.axis), i && r.fill && be(n.ctx, r, o));
    }
  },
  beforeDatasetsDraw(n, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw")
      return;
    const i = n.getSortedVisibleDatasetMetas();
    for (let s = i.length - 1; s >= 0; --s) {
      const o = i[s].$filler;
      ki(o) && be(n.ctx, o, n.chartArea);
    }
  },
  beforeDatasetDraw(n, t, e) {
    const i = t.meta.$filler;
    !ki(i) || e.drawTime !== "beforeDatasetDraw" || be(n.ctx, i, n.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const Di = (n, t) => {
  let { boxHeight: e = t, boxWidth: i = t } = n;
  return n.usePointStyle && (e = Math.min(e, t), i = n.pointStyleWidth || Math.min(i, t)), {
    boxWidth: i,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, xa = (n, t) => n !== null && t !== null && n.datasetIndex === t.datasetIndex && n.index === t.index;
class Pi extends Q {
  constructor(t) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e, i) {
    this.maxWidth = t, this.maxHeight = e, this._margins = i, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = A(t.generateLabels, [
      this.chart
    ], this) || [];
    t.filter && (e = e.filter((i) => t.filter(i, this.chart.data))), t.sort && (e = e.sort((i, s) => t.sort(i, s, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e;
  }
  fit() {
    const { options: t, ctx: e } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const i = t.labels, s = V(i.font), o = s.size, a = this._computeTitleHeight(), { boxWidth: r, itemHeight: l } = Di(i, o);
    let h, c;
    e.font = s.string, this.isHorizontal() ? (h = this.maxWidth, c = this._fitRows(a, o, r, l) + 10) : (c = this.maxHeight, h = this._fitCols(a, s, r, l) + 10), this.width = Math.min(h, t.maxWidth || this.maxWidth), this.height = Math.min(c, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, e, i, s) {
    const { ctx: o, maxWidth: a, options: { labels: { padding: r } } } = this, l = this.legendHitBoxes = [], h = this.lineWidths = [
      0
    ], c = s + r;
    let d = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let u = -1, f = -c;
    return this.legendItems.forEach((g, p) => {
      const _ = i + e / 2 + o.measureText(g.text).width;
      (p === 0 || h[h.length - 1] + _ + 2 * r > a) && (d += c, h[h.length - (p > 0 ? 0 : 1)] = 0, f += c, u++), l[p] = {
        left: 0,
        top: f,
        row: u,
        width: _,
        height: s
      }, h[h.length - 1] += _ + r;
    }), d;
  }
  _fitCols(t, e, i, s) {
    const { ctx: o, maxHeight: a, options: { labels: { padding: r } } } = this, l = this.legendHitBoxes = [], h = this.columnSizes = [], c = a - t;
    let d = r, u = 0, f = 0, g = 0, p = 0;
    return this.legendItems.forEach((_, m) => {
      const { itemWidth: b, itemHeight: y } = ba(i, e, o, _, s);
      m > 0 && f + y + 2 * r > c && (d += u + r, h.push({
        width: u,
        height: f
      }), g += u + r, p++, u = f = 0), l[m] = {
        left: g,
        top: f,
        col: p,
        width: b,
        height: y
      }, u = Math.max(u, b), f += y + r;
    }), d += u, h.push({
      width: u,
      height: f
    }), d;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: i, labels: { padding: s }, rtl: o } } = this, a = mt(o, this.left, this.width);
    if (this.isHorizontal()) {
      let r = 0, l = B(i, this.left + s, this.right - this.lineWidths[r]);
      for (const h of e)
        r !== h.row && (r = h.row, l = B(i, this.left + s, this.right - this.lineWidths[r])), h.top += this.top + t + s, h.left = a.leftForLtr(a.x(l), h.width), l += h.width + s;
    } else {
      let r = 0, l = B(i, this.top + t + s, this.bottom - this.columnSizes[r].height);
      for (const h of e)
        h.col !== r && (r = h.col, l = B(i, this.top + t + s, this.bottom - this.columnSizes[r].height)), h.top = l, h.left += this.left + s, h.left = a.leftForLtr(a.x(h.left), h.width), l += h.height + s;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      ie(t, this), this._draw(), se(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: i, ctx: s } = this, { align: o, labels: a } = t, r = E.color, l = mt(t.rtl, this.left, this.width), h = V(a.font), { padding: c } = a, d = h.size, u = d / 2;
    let f;
    this.drawTitle(), s.textAlign = l.textAlign("left"), s.textBaseline = "middle", s.lineWidth = 0.5, s.font = h.string;
    const { boxWidth: g, boxHeight: p, itemHeight: _ } = Di(a, d), m = function(S, k, w) {
      if (isNaN(g) || g <= 0 || isNaN(p) || p < 0)
        return;
      s.save();
      const D = T(w.lineWidth, 1);
      if (s.fillStyle = T(w.fillStyle, r), s.lineCap = T(w.lineCap, "butt"), s.lineDashOffset = T(w.lineDashOffset, 0), s.lineJoin = T(w.lineJoin, "miter"), s.lineWidth = D, s.strokeStyle = T(w.strokeStyle, r), s.setLineDash(T(w.lineDash, [])), a.usePointStyle) {
        const C = {
          radius: p * Math.SQRT2 / 2,
          pointStyle: w.pointStyle,
          rotation: w.rotation,
          borderWidth: D
        }, P = l.xPlus(S, g / 2), O = k + u;
        Ws(s, C, P, O, a.pointStyleWidth && g);
      } else {
        const C = k + Math.max((d - p) / 2, 0), P = l.leftForLtr(S, g), O = _t(w.borderRadius);
        s.beginPath(), Object.values(O).some((H) => H !== 0) ? Zt(s, {
          x: P,
          y: C,
          w: g,
          h: p,
          radius: O
        }) : s.rect(P, C, g, p), s.fill(), D !== 0 && s.stroke();
      }
      s.restore();
    }, b = function(S, k, w) {
      zt(s, w.text, S, k + _ / 2, h, {
        strikethrough: w.hidden,
        textAlign: l.textAlign(w.textAlign)
      });
    }, y = this.isHorizontal(), v = this._computeTitleHeight();
    y ? f = {
      x: B(o, this.left + c, this.right - i[0]),
      y: this.top + c + v,
      line: 0
    } : f = {
      x: this.left + c,
      y: B(o, this.top + v + c, this.bottom - e[0].height),
      line: 0
    }, Ui(this.ctx, t.textDirection);
    const x = _ + c;
    this.legendItems.forEach((S, k) => {
      s.strokeStyle = S.fontColor, s.fillStyle = S.fontColor;
      const w = s.measureText(S.text).width, D = l.textAlign(S.textAlign || (S.textAlign = a.textAlign)), C = g + u + w;
      let P = f.x, O = f.y;
      l.setWidth(this.width), y ? k > 0 && P + C + c > this.right && (O = f.y += x, f.line++, P = f.x = B(o, this.left + c, this.right - i[f.line])) : k > 0 && O + x > this.bottom && (P = f.x = P + e[f.line].width + c, f.line++, O = f.y = B(o, this.top + v + c, this.bottom - e[f.line].height));
      const H = l.x(P);
      if (m(H, O, S), P = As(D, P + g + u, y ? P + C : this.right, t.rtl), b(l.x(P), O, S), y)
        f.x += C + c;
      else if (typeof S.text != "string") {
        const K = h.lineHeight;
        f.y += fs(S, K) + c;
      } else
        f.y += x;
    }), Yi(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, i = V(e.font), s = X(e.padding);
    if (!e.display)
      return;
    const o = mt(t.rtl, this.left, this.width), a = this.ctx, r = e.position, l = i.size / 2, h = s.top + l;
    let c, d = this.left, u = this.width;
    if (this.isHorizontal())
      u = Math.max(...this.lineWidths), c = this.top + h, d = B(t.align, d, this.right - u);
    else {
      const g = this.columnSizes.reduce((p, _) => Math.max(p, _.height), 0);
      c = h + B(t.align, this.top, this.bottom - g - t.labels.padding - this._computeTitleHeight());
    }
    const f = B(r, d, d + u);
    a.textAlign = o.textAlign(Ce(r)), a.textBaseline = "middle", a.strokeStyle = e.color, a.fillStyle = e.color, a.font = i.string, zt(a, e.text, f, c, i);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = V(t.font), i = X(t.padding);
    return t.display ? e.lineHeight + i.height : 0;
  }
  _getLegendItemAt(t, e) {
    let i, s, o;
    if (ut(t, this.left, this.right) && ut(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, i = 0; i < o.length; ++i)
        if (s = o[i], ut(t, s.left, s.left + s.width) && ut(e, s.top, s.top + s.height))
          return this.legendItems[i];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!ka(t.type, e))
      return;
    const i = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const s = this._hoveredItem, o = xa(s, i);
      s && !o && A(e.onLeave, [
        t,
        s,
        this
      ], this), this._hoveredItem = i, i && !o && A(e.onHover, [
        t,
        i,
        this
      ], this);
    } else i && A(e.onClick, [
      t,
      i,
      this
    ], this);
  }
}
function ba(n, t, e, i, s) {
  const o = ya(i, n, t, e), a = va(s, i, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: a
  };
}
function ya(n, t, e, i) {
  let s = n.text;
  return s && typeof s != "string" && (s = s.reduce((o, a) => o.length > a.length ? o : a)), t + e.size / 2 + i.measureText(s).width;
}
function va(n, t, e) {
  let i = n;
  return typeof t.text != "string" && (i = fs(t, e)), i;
}
function fs(n, t) {
  const e = n.text ? n.text.length : 0;
  return t * e;
}
function ka(n, t) {
  return !!((n === "mousemove" || n === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (n === "click" || n === "mouseup"));
}
var Na = {
  id: "legend",
  _element: Pi,
  start(n, t, e) {
    const i = n.legend = new Pi({
      ctx: n.ctx,
      options: e,
      chart: n
    });
    Y.configure(n, i, e), Y.addBox(n, i);
  },
  stop(n) {
    Y.removeBox(n, n.legend), delete n.legend;
  },
  beforeUpdate(n, t, e) {
    const i = n.legend;
    Y.configure(n, i, e), i.options = e;
  },
  afterUpdate(n) {
    const t = n.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(n, t) {
    t.replay || n.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(n, t, e) {
      const i = t.datasetIndex, s = e.chart;
      s.isDatasetVisible(i) ? (s.hide(i), t.hidden = !0) : (s.show(i), t.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (n) => n.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(n) {
        const t = n.data.datasets, { labels: { usePointStyle: e, pointStyle: i, textAlign: s, color: o, useBorderRadius: a, borderRadius: r } } = n.legend.options;
        return n._getSortedDatasetMetas().map((l) => {
          const h = l.controller.getStyle(e ? 0 : void 0), c = X(h.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: h.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: h.borderCapStyle,
            lineDash: h.borderDash,
            lineDashOffset: h.borderDashOffset,
            lineJoin: h.borderJoinStyle,
            lineWidth: (c.width + c.height) / 4,
            strokeStyle: h.borderColor,
            pointStyle: i || h.pointStyle,
            rotation: h.rotation,
            textAlign: s || h.textAlign,
            borderRadius: a && (r || h.borderRadius),
            datasetIndex: l.index
          };
        }, this);
      }
    },
    title: {
      color: (n) => n.chart.options.color,
      display: !1,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (n) => !n.startsWith("on"),
    labels: {
      _scriptable: (n) => ![
        "generateLabels",
        "filter",
        "sort"
      ].includes(n)
    }
  }
};
class gs extends Q {
  constructor(t) {
    super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e) {
    const i = this.options;
    if (this.left = 0, this.top = 0, !i.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = t, this.height = this.bottom = e;
    const s = $(i.text) ? i.text.length : 1;
    this._padding = X(i.padding);
    const o = s * V(i.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: i, bottom: s, right: o, options: a } = this, r = a.align;
    let l = 0, h, c, d;
    return this.isHorizontal() ? (c = B(r, i, o), d = e + t, h = o - i) : (a.position === "left" ? (c = i + t, d = B(r, s, e), l = Re * -0.5) : (c = o - t, d = B(r, e, s), l = Re * 0.5), h = s - e), {
      titleX: c,
      titleY: d,
      maxWidth: h,
      rotation: l
    };
  }
  draw() {
    const t = this.ctx, e = this.options;
    if (!e.display)
      return;
    const i = V(e.font), o = i.lineHeight / 2 + this._padding.top, { titleX: a, titleY: r, maxWidth: l, rotation: h } = this._drawArgs(o);
    zt(t, e.text, 0, 0, i, {
      color: e.color,
      maxWidth: l,
      rotation: h,
      textAlign: Ce(e.align),
      textBaseline: "middle",
      translation: [
        a,
        r
      ]
    });
  }
}
function wa(n, t) {
  const e = new gs({
    ctx: n.ctx,
    options: t,
    chart: n
  });
  Y.configure(n, e, t), Y.addBox(n, e), n.titleBlock = e;
}
var ja = {
  id: "title",
  _element: gs,
  start(n, t, e) {
    wa(n, e);
  },
  stop(n) {
    const t = n.titleBlock;
    Y.removeBox(n, t), delete n.titleBlock;
  },
  beforeUpdate(n, t, e) {
    const i = n.titleBlock;
    Y.configure(n, i, e), i.options = e;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "bold"
    },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const Lt = {
  average(n) {
    if (!n.length)
      return !1;
    let t, e, i = /* @__PURE__ */ new Set(), s = 0, o = 0;
    for (t = 0, e = n.length; t < e; ++t) {
      const r = n[t].element;
      if (r && r.hasValue()) {
        const l = r.tooltipPosition();
        i.add(l.x), s += l.y, ++o;
      }
    }
    return o === 0 || i.size === 0 ? !1 : {
      x: [
        ...i
      ].reduce((r, l) => r + l) / i.size,
      y: s / o
    };
  },
  nearest(n, t) {
    if (!n.length)
      return !1;
    let e = t.x, i = t.y, s = Number.POSITIVE_INFINITY, o, a, r;
    for (o = 0, a = n.length; o < a; ++o) {
      const l = n[o].element;
      if (l && l.hasValue()) {
        const h = l.getCenterPoint(), c = zs(t, h);
        c < s && (s = c, r = l);
      }
    }
    if (r) {
      const l = r.tooltipPosition();
      e = l.x, i = l.y;
    }
    return {
      x: e,
      y: i
    };
  }
};
function G(n, t) {
  return t && ($(t) ? Array.prototype.push.apply(n, t) : n.push(t)), n;
}
function it(n) {
  return (typeof n == "string" || n instanceof String) && n.indexOf(`
`) > -1 ? n.split(`
`) : n;
}
function Sa(n, t) {
  const { element: e, datasetIndex: i, index: s } = t, o = n.getDatasetMeta(i).controller, { label: a, value: r } = o.getLabelAndValue(s);
  return {
    chart: n,
    label: a,
    parsed: o.getParsed(s),
    raw: n.data.datasets[i].data[s],
    formattedValue: r,
    dataset: o.getDataset(),
    dataIndex: s,
    datasetIndex: i,
    element: e
  };
}
function Ci(n, t) {
  const e = n.chart.ctx, { body: i, footer: s, title: o } = n, { boxWidth: a, boxHeight: r } = t, l = V(t.bodyFont), h = V(t.titleFont), c = V(t.footerFont), d = o.length, u = s.length, f = i.length, g = X(t.padding);
  let p = g.height, _ = 0, m = i.reduce((v, x) => v + x.before.length + x.lines.length + x.after.length, 0);
  if (m += n.beforeBody.length + n.afterBody.length, d && (p += d * h.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), m) {
    const v = t.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight;
    p += f * v + (m - f) * l.lineHeight + (m - 1) * t.bodySpacing;
  }
  u && (p += t.footerMarginTop + u * c.lineHeight + (u - 1) * t.footerSpacing);
  let b = 0;
  const y = function(v) {
    _ = Math.max(_, e.measureText(v).width + b);
  };
  return e.save(), e.font = h.string, L(n.title, y), e.font = l.string, L(n.beforeBody.concat(n.afterBody), y), b = t.displayColors ? a + 2 + t.boxPadding : 0, L(i, (v) => {
    L(v.before, y), L(v.lines, y), L(v.after, y);
  }), b = 0, e.font = c.string, L(n.footer, y), e.restore(), _ += g.width, {
    width: _,
    height: p
  };
}
function Ma(n, t) {
  const { y: e, height: i } = t;
  return e < i / 2 ? "top" : e > n.height - i / 2 ? "bottom" : "center";
}
function Da(n, t, e, i) {
  const { x: s, width: o } = i, a = e.caretSize + e.caretPadding;
  if (n === "left" && s + o + a > t.width || n === "right" && s - o - a < 0)
    return !0;
}
function Pa(n, t, e, i) {
  const { x: s, width: o } = e, { width: a, chartArea: { left: r, right: l } } = n;
  let h = "center";
  return i === "center" ? h = s <= (r + l) / 2 ? "left" : "right" : s <= o / 2 ? h = "left" : s >= a - o / 2 && (h = "right"), Da(h, n, t, e) && (h = "center"), h;
}
function Oi(n, t, e) {
  const i = e.yAlign || t.yAlign || Ma(n, e);
  return {
    xAlign: e.xAlign || t.xAlign || Pa(n, t, e, i),
    yAlign: i
  };
}
function Ca(n, t) {
  let { x: e, width: i } = n;
  return t === "right" ? e -= i : t === "center" && (e -= i / 2), e;
}
function Oa(n, t, e) {
  let { y: i, height: s } = n;
  return t === "top" ? i += e : t === "bottom" ? i -= s + e : i -= s / 2, i;
}
function Li(n, t, e, i) {
  const { caretSize: s, caretPadding: o, cornerRadius: a } = n, { xAlign: r, yAlign: l } = e, h = s + o, { topLeft: c, topRight: d, bottomLeft: u, bottomRight: f } = _t(a);
  let g = Ca(t, r);
  const p = Oa(t, l, h);
  return l === "center" ? r === "left" ? g += h : r === "right" && (g -= h) : r === "left" ? g -= Math.max(c, u) + s : r === "right" && (g += Math.max(d, f) + s), {
    x: Z(g, 0, i.width - t.width),
    y: Z(p, 0, i.height - t.height)
  };
}
function Yt(n, t, e) {
  const i = X(e.padding);
  return t === "center" ? n.x + n.width / 2 : t === "right" ? n.x + n.width - i.right : n.x + i.left;
}
function Ti(n) {
  return G([], it(n));
}
function La(n, t, e) {
  return yt(n, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function Ai(n, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? n.override(e) : n;
}
const ps = {
  beforeTitle: tt,
  title(n) {
    if (n.length > 0) {
      const t = n[0], e = t.chart.data.labels, i = e ? e.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label)
        return t.label;
      if (i > 0 && t.dataIndex < i)
        return e[t.dataIndex];
    }
    return "";
  },
  afterTitle: tt,
  beforeBody: tt,
  beforeLabel: tt,
  label(n) {
    if (this && this.options && this.options.mode === "dataset")
      return n.label + ": " + n.formattedValue || n.formattedValue;
    let t = n.dataset.label || "";
    t && (t += ": ");
    const e = n.formattedValue;
    return z(e) || (t += e), t;
  },
  labelColor(n) {
    const e = n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);
    return {
      borderColor: e.borderColor,
      backgroundColor: e.backgroundColor,
      borderWidth: e.borderWidth,
      borderDash: e.borderDash,
      borderDashOffset: e.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(n) {
    const e = n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);
    return {
      pointStyle: e.pointStyle,
      rotation: e.rotation
    };
  },
  afterLabel: tt,
  afterBody: tt,
  beforeFooter: tt,
  footer: tt,
  afterFooter: tt
};
function W(n, t, e, i) {
  const s = n[t].call(e, i);
  return typeof s > "u" ? ps[t].call(e, i) : s;
}
class De extends Q {
  constructor(t) {
    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
  }
  initialize(t) {
    this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t)
      return t;
    const e = this.chart, i = this.options.setContext(this.getContext()), s = i.enabled && e.options.animation && i.animations, o = new Gi(this.chart, s);
    return s._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = La(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: i } = e, s = W(i, "beforeTitle", this, t), o = W(i, "title", this, t), a = W(i, "afterTitle", this, t);
    let r = [];
    return r = G(r, it(s)), r = G(r, it(o)), r = G(r, it(a)), r;
  }
  getBeforeBody(t, e) {
    return Ti(W(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: i } = e, s = [];
    return L(t, (o) => {
      const a = {
        before: [],
        lines: [],
        after: []
      }, r = Ai(i, o);
      G(a.before, it(W(r, "beforeLabel", this, o))), G(a.lines, W(r, "label", this, o)), G(a.after, it(W(r, "afterLabel", this, o))), s.push(a);
    }), s;
  }
  getAfterBody(t, e) {
    return Ti(W(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: i } = e, s = W(i, "beforeFooter", this, t), o = W(i, "footer", this, t), a = W(i, "afterFooter", this, t);
    let r = [];
    return r = G(r, it(s)), r = G(r, it(o)), r = G(r, it(a)), r;
  }
  _createItems(t) {
    const e = this._active, i = this.chart.data, s = [], o = [], a = [];
    let r = [], l, h;
    for (l = 0, h = e.length; l < h; ++l)
      r.push(Sa(this.chart, e[l]));
    return t.filter && (r = r.filter((c, d, u) => t.filter(c, d, u, i))), t.itemSort && (r = r.sort((c, d) => t.itemSort(c, d, i))), L(r, (c) => {
      const d = Ai(t.callbacks, c);
      s.push(W(d, "labelColor", this, c)), o.push(W(d, "labelPointStyle", this, c)), a.push(W(d, "labelTextColor", this, c));
    }), this.labelColors = s, this.labelPointStyles = o, this.labelTextColors = a, this.dataPoints = r, r;
  }
  update(t, e) {
    const i = this.options.setContext(this.getContext()), s = this._active;
    let o, a = [];
    if (!s.length)
      this.opacity !== 0 && (o = {
        opacity: 0
      });
    else {
      const r = Lt[i.position].call(this, s, this._eventPosition);
      a = this._createItems(i), this.title = this.getTitle(a, i), this.beforeBody = this.getBeforeBody(a, i), this.body = this.getBody(a, i), this.afterBody = this.getAfterBody(a, i), this.footer = this.getFooter(a, i);
      const l = this._size = Ci(this, i), h = Object.assign({}, r, l), c = Oi(this.chart, i, h), d = Li(i, h, c, this.chart);
      this.xAlign = c.xAlign, this.yAlign = c.yAlign, o = {
        opacity: 1,
        x: d.x,
        y: d.y,
        width: l.width,
        height: l.height,
        caretX: r.x,
        caretY: r.y
      };
    }
    this._tooltipItems = a, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && i.external && i.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: e
    });
  }
  drawCaret(t, e, i, s) {
    const o = this.getCaretPosition(t, i, s);
    e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, e, i) {
    const { xAlign: s, yAlign: o } = this, { caretSize: a, cornerRadius: r } = i, { topLeft: l, topRight: h, bottomLeft: c, bottomRight: d } = _t(r), { x: u, y: f } = t, { width: g, height: p } = e;
    let _, m, b, y, v, x;
    return o === "center" ? (v = f + p / 2, s === "left" ? (_ = u, m = _ - a, y = v + a, x = v - a) : (_ = u + g, m = _ + a, y = v - a, x = v + a), b = _) : (s === "left" ? m = u + Math.max(l, c) + a : s === "right" ? m = u + g - Math.max(h, d) - a : m = this.caretX, o === "top" ? (y = f, v = y - a, _ = m - a, b = m + a) : (y = f + p, v = y + a, _ = m + a, b = m - a), x = y), {
      x1: _,
      x2: m,
      x3: b,
      y1: y,
      y2: v,
      y3: x
    };
  }
  drawTitle(t, e, i) {
    const s = this.title, o = s.length;
    let a, r, l;
    if (o) {
      const h = mt(i.rtl, this.x, this.width);
      for (t.x = Yt(this, i.titleAlign, i), e.textAlign = h.textAlign(i.titleAlign), e.textBaseline = "middle", a = V(i.titleFont), r = i.titleSpacing, e.fillStyle = i.titleColor, e.font = a.string, l = 0; l < o; ++l)
        e.fillText(s[l], h.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + r, l + 1 === o && (t.y += i.titleMarginBottom - r);
    }
  }
  _drawColorBox(t, e, i, s, o) {
    const a = this.labelColors[i], r = this.labelPointStyles[i], { boxHeight: l, boxWidth: h } = o, c = V(o.bodyFont), d = Yt(this, "left", o), u = s.x(d), f = l < c.lineHeight ? (c.lineHeight - l) / 2 : 0, g = e.y + f;
    if (o.usePointStyle) {
      const p = {
        radius: Math.min(h, l) / 2,
        pointStyle: r.pointStyle,
        rotation: r.rotation,
        borderWidth: 1
      }, _ = s.leftForLtr(u, h) + h / 2, m = g + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, ye(t, p, _, m), t.strokeStyle = a.borderColor, t.fillStyle = a.backgroundColor, ye(t, p, _, m);
    } else {
      t.lineWidth = I(a.borderWidth) ? Math.max(...Object.values(a.borderWidth)) : a.borderWidth || 1, t.strokeStyle = a.borderColor, t.setLineDash(a.borderDash || []), t.lineDashOffset = a.borderDashOffset || 0;
      const p = s.leftForLtr(u, h), _ = s.leftForLtr(s.xPlus(u, 1), h - 2), m = _t(a.borderRadius);
      Object.values(m).some((b) => b !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, Zt(t, {
        x: p,
        y: g,
        w: h,
        h: l,
        radius: m
      }), t.fill(), t.stroke(), t.fillStyle = a.backgroundColor, t.beginPath(), Zt(t, {
        x: _,
        y: g + 1,
        w: h - 2,
        h: l - 2,
        radius: m
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(p, g, h, l), t.strokeRect(p, g, h, l), t.fillStyle = a.backgroundColor, t.fillRect(_, g + 1, h - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[i];
  }
  drawBody(t, e, i) {
    const { body: s } = this, { bodySpacing: o, bodyAlign: a, displayColors: r, boxHeight: l, boxWidth: h, boxPadding: c } = i, d = V(i.bodyFont);
    let u = d.lineHeight, f = 0;
    const g = mt(i.rtl, this.x, this.width), p = function(w) {
      e.fillText(w, g.x(t.x + f), t.y + u / 2), t.y += u + o;
    }, _ = g.textAlign(a);
    let m, b, y, v, x, S, k;
    for (e.textAlign = a, e.textBaseline = "middle", e.font = d.string, t.x = Yt(this, _, i), e.fillStyle = i.bodyColor, L(this.beforeBody, p), f = r && _ !== "right" ? a === "center" ? h / 2 + c : h + 2 + c : 0, v = 0, S = s.length; v < S; ++v) {
      for (m = s[v], b = this.labelTextColors[v], e.fillStyle = b, L(m.before, p), y = m.lines, r && y.length && (this._drawColorBox(e, t, v, g, i), u = Math.max(d.lineHeight, l)), x = 0, k = y.length; x < k; ++x)
        p(y[x]), u = d.lineHeight;
      L(m.after, p);
    }
    f = 0, u = d.lineHeight, L(this.afterBody, p), t.y -= o;
  }
  drawFooter(t, e, i) {
    const s = this.footer, o = s.length;
    let a, r;
    if (o) {
      const l = mt(i.rtl, this.x, this.width);
      for (t.x = Yt(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = l.textAlign(i.footerAlign), e.textBaseline = "middle", a = V(i.footerFont), e.fillStyle = i.footerColor, e.font = a.string, r = 0; r < o; ++r)
        e.fillText(s[r], l.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + i.footerSpacing;
    }
  }
  drawBackground(t, e, i, s) {
    const { xAlign: o, yAlign: a } = this, { x: r, y: l } = t, { width: h, height: c } = i, { topLeft: d, topRight: u, bottomLeft: f, bottomRight: g } = _t(s.cornerRadius);
    e.fillStyle = s.backgroundColor, e.strokeStyle = s.borderColor, e.lineWidth = s.borderWidth, e.beginPath(), e.moveTo(r + d, l), a === "top" && this.drawCaret(t, e, i, s), e.lineTo(r + h - u, l), e.quadraticCurveTo(r + h, l, r + h, l + u), a === "center" && o === "right" && this.drawCaret(t, e, i, s), e.lineTo(r + h, l + c - g), e.quadraticCurveTo(r + h, l + c, r + h - g, l + c), a === "bottom" && this.drawCaret(t, e, i, s), e.lineTo(r + f, l + c), e.quadraticCurveTo(r, l + c, r, l + c - f), a === "center" && o === "left" && this.drawCaret(t, e, i, s), e.lineTo(r, l + d), e.quadraticCurveTo(r, l, r + d, l), e.closePath(), e.fill(), s.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, i = this.$animations, s = i && i.x, o = i && i.y;
    if (s || o) {
      const a = Lt[t.position].call(this, this._active, this._eventPosition);
      if (!a)
        return;
      const r = this._size = Ci(this, t), l = Object.assign({}, a, this._size), h = Oi(e, t, l), c = Li(t, l, h, e);
      (s._to !== c.x || o._to !== c.y) && (this.xAlign = h.xAlign, this.yAlign = h.yAlign, this.width = r.width, this.height = r.height, this.caretX = a.x, this.caretY = a.y, this._resolveAnimations().update(this, c));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let i = this.opacity;
    if (!i)
      return;
    this._updateAnimationTarget(e);
    const s = {
      width: this.width,
      height: this.height
    }, o = {
      x: this.x,
      y: this.y
    };
    i = Math.abs(i) < 1e-3 ? 0 : i;
    const a = X(e.padding), r = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && r && (t.save(), t.globalAlpha = i, this.drawBackground(o, t, s, e), Ui(t, e.textDirection), o.y += a.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), Yi(t, e.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const i = this._active, s = t.map(({ datasetIndex: r, index: l }) => {
      const h = this.chart.getDatasetMeta(r);
      if (!h)
        throw new Error("Cannot find a dataset at index " + r);
      return {
        datasetIndex: r,
        element: h.data[l],
        index: l
      };
    }), o = !Jt(i, s), a = this._positionChanged(s, e);
    (o || a) && (this._active = s, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, i = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options, o = this._active || [], a = this._getActiveElements(t, o, e, i), r = this._positionChanged(a, t), l = e || !Jt(a, o) || r;
    return l && (this._active = a, (s.enabled || s.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, e))), l;
  }
  _getActiveElements(t, e, i, s) {
    const o = this.options;
    if (t.type === "mouseout")
      return [];
    if (!s)
      return e.filter((r) => this.chart.data.datasets[r.datasetIndex] && this.chart.getDatasetMeta(r.datasetIndex).controller.getParsed(r.index) !== void 0);
    const a = this.chart.getElementsAtEventForMode(t, o.mode, o, i);
    return o.reverse && a.reverse(), a;
  }
  _positionChanged(t, e) {
    const { caretX: i, caretY: s, options: o } = this, a = Lt[o.position].call(this, t, e);
    return a !== !1 && (i !== a.x || s !== a.y);
  }
}
M(De, "positioners", Lt);
var $a = {
  id: "tooltip",
  _element: De,
  positioners: Lt,
  afterInit(n, t, e) {
    e && (n.tooltip = new De({
      chart: n,
      options: e
    }));
  },
  beforeUpdate(n, t, e) {
    n.tooltip && n.tooltip.initialize(e);
  },
  reset(n, t, e) {
    n.tooltip && n.tooltip.initialize(e);
  },
  afterDraw(n) {
    const t = n.tooltip;
    if (t && t._willRender()) {
      const e = {
        tooltip: t
      };
      if (n.notifyPlugins("beforeTooltipDraw", {
        ...e,
        cancelable: !0
      }) === !1)
        return;
      t.draw(n.ctx), n.notifyPlugins("afterTooltipDraw", e);
    }
  },
  afterEvent(n, t) {
    if (n.tooltip) {
      const e = t.replay;
      n.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: {
      weight: "bold"
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: "bold"
    },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (n, t) => t.bodyFont.size,
    boxWidth: (n, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: "easeOutQuart"
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "width",
          "height",
          "caretX",
          "caretY"
        ]
      },
      opacity: {
        easing: "linear",
        duration: 200
      }
    },
    callbacks: ps
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (n) => n !== "filter" && n !== "itemSort" && n !== "external",
    _indexable: !1,
    callbacks: {
      _scriptable: !1,
      _indexable: !1
    },
    animation: {
      _fallback: !1
    },
    animations: {
      _fallback: "animation"
    }
  },
  additionalOptionScopes: [
    "interaction"
  ]
};
const Ta = (n, t, e, i) => (typeof t == "string" ? (e = n.push(t) - 1, i.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function Aa(n, t, e, i) {
  const s = n.indexOf(t);
  if (s === -1)
    return Ta(n, t, e, i);
  const o = n.lastIndexOf(t);
  return s !== o ? e : s;
}
const za = (n, t) => n === null ? null : Z(Math.round(n), 0, t);
function zi(n) {
  const t = this.getLabels();
  return n >= 0 && n < t.length ? t[n] : n;
}
class Fi extends vt {
  constructor(t) {
    super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const i = this.getLabels();
      for (const { index: s, label: o } of e)
        i[s] === o && i.splice(s, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (z(t))
      return null;
    const i = this.getLabels();
    return e = isFinite(e) && i[e] === t ? e : Aa(i, t, T(e, t), this._addedLabels), za(e, i.length - 1);
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let { min: i, max: s } = this.getMinMax(!0);
    this.options.bounds === "ticks" && (t || (i = 0), e || (s = this.getLabels().length - 1)), this.min = i, this.max = s;
  }
  buildTicks() {
    const t = this.min, e = this.max, i = this.options.offset, s = [];
    let o = this.getLabels();
    o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1), this._valueRange = Math.max(o.length - (i ? 0 : 1), 1), this._startValue = this.min - (i ? 0.5 : 0);
    for (let a = t; a <= e; a++)
      s.push({
        value: a
      });
    return s;
  }
  getLabelForValue(t) {
    return zi.call(this, t);
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
M(Fi, "id", "category"), M(Fi, "defaults", {
  ticks: {
    callback: zi
  }
});
function Fa(n, t) {
  const e = [], { bounds: s, step: o, min: a, max: r, precision: l, count: h, maxTicks: c, maxDigits: d, includeBounds: u } = n, f = o || 1, g = c - 1, { min: p, max: _ } = t, m = !z(a), b = !z(r), y = !z(h), v = (_ - p) / (d + 1);
  let x = Be((_ - p) / g / f) * f, S, k, w, D;
  if (x < 1e-14 && !m && !b)
    return [
      {
        value: p
      },
      {
        value: _
      }
    ];
  D = Math.ceil(_ / x) - Math.floor(p / x), D > g && (x = Be(D * x / g / f) * f), z(l) || (S = Math.pow(10, l), x = Math.ceil(x * S) / S), s === "ticks" ? (k = Math.floor(p / x) * x, w = Math.ceil(_ / x) * x) : (k = p, w = _), m && b && o && Ns((r - a) / o, x / 1e3) ? (D = Math.round(Math.min((r - a) / x, c)), x = (r - a) / D, k = a, w = r) : y ? (k = m ? a : k, w = b ? r : w, D = h - 1, x = (w - k) / D) : (D = (w - k) / x, oe(D, Math.round(D), x / 1e3) ? D = Math.round(D) : D = Math.ceil(D));
  const C = Math.max($e(x), $e(k));
  S = Math.pow(10, z(l) ? C : l), k = Math.round(k * S) / S, w = Math.round(w * S) / S;
  let P = 0;
  for (m && (u && k !== a ? (e.push({
    value: a
  }), k < a && P++, oe(Math.round((k + P * x) * S) / S, a, Ii(a, v, n)) && P++) : k < a && P++); P < D; ++P) {
    const O = Math.round((k + P * x) * S) / S;
    if (b && O > r)
      break;
    e.push({
      value: O
    });
  }
  return b && u && w !== r ? e.length && oe(e[e.length - 1].value, r, Ii(r, v, n)) ? e[e.length - 1].value = r : e.push({
    value: r
  }) : (!b || w === r) && e.push({
    value: w
  }), e;
}
function Ii(n, t, { horizontal: e, minRotation: i }) {
  const s = dt(i), o = (e ? Math.sin(s) : Math.cos(s)) || 1e-3, a = 0.75 * t * ("" + n).length;
  return Math.min(t / o, a);
}
class Ia extends vt {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return z(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: i } = this.getUserBounds();
    let { min: s, max: o } = this;
    const a = (l) => s = e ? s : l, r = (l) => o = i ? o : l;
    if (t) {
      const l = nt(s), h = nt(o);
      l < 0 && h < 0 ? r(0) : l > 0 && h > 0 && a(0);
    }
    if (s === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05);
      r(o + l), t || a(s - l);
    }
    this.min = s, this.max = o;
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: e, stepSize: i } = t, s;
    return i ? (s = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1, s > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`), s = 1e3)) : (s = this.computeTickLimit(), e = e || 11), e && (s = Math.min(e, s)), s;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options, e = t.ticks;
    let i = this.getTickLimit();
    i = Math.max(2, i);
    const s = {
      maxTicks: i,
      bounds: t.bounds,
      min: t.min,
      max: t.max,
      precision: e.precision,
      step: e.stepSize,
      count: e.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: e.minRotation || 0,
      includeBounds: e.includeBounds !== !1
    }, o = this._range || this, a = Fa(s, o);
    return t.bounds === "ticks" && Fs(a, this, "value"), t.reverse ? (a.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), a;
  }
  configure() {
    const t = this.ticks;
    let e = this.min, i = this.max;
    if (super.configure(), this.options.offset && t.length) {
      const s = (i - e) / Math.max(t.length - 1, 1) / 2;
      e -= s, i += s;
    }
    this._startValue = e, this._endValue = i, this._valueRange = i - e;
  }
  getLabelForValue(t) {
    return Is(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Ei extends Ia {
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = j(t) ? t : 0, this.max = j(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, i = dt(this.options.ticks.minRotation), s = (t ? Math.sin(i) : Math.cos(i)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / s));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
M(Ei, "id", "linear"), M(Ei, "defaults", {
  ticks: {
    callback: ws.formatters.numeric
  }
});
const ne = {
  millisecond: {
    common: !0,
    size: 1,
    steps: 1e3
  },
  second: {
    common: !0,
    size: 1e3,
    steps: 60
  },
  minute: {
    common: !0,
    size: 6e4,
    steps: 60
  },
  hour: {
    common: !0,
    size: 36e5,
    steps: 24
  },
  day: {
    common: !0,
    size: 864e5,
    steps: 30
  },
  week: {
    common: !1,
    size: 6048e5,
    steps: 4
  },
  month: {
    common: !0,
    size: 2628e6,
    steps: 12
  },
  quarter: {
    common: !1,
    size: 7884e6,
    steps: 4
  },
  year: {
    common: !0,
    size: 3154e7
  }
}, N = /* @__PURE__ */ Object.keys(ne);
function Ri(n, t) {
  return n - t;
}
function Bi(n, t) {
  if (z(t))
    return null;
  const e = n._adapter, { parser: i, round: s, isoWeekday: o } = n._parseOpts;
  let a = t;
  return typeof i == "function" && (a = i(a)), j(a) || (a = typeof i == "string" ? e.parse(a, i) : e.parse(a)), a === null ? null : (s && (a = s === "week" && (At(o) || o === !0) ? e.startOf(a, "isoWeek", o) : e.startOf(a, s)), +a);
}
function Vi(n, t, e, i) {
  const s = N.length;
  for (let o = N.indexOf(n); o < s - 1; ++o) {
    const a = ne[N[o]], r = a.steps ? a.steps : Number.MAX_SAFE_INTEGER;
    if (a.common && Math.ceil((e - t) / (r * a.size)) <= i)
      return N[o];
  }
  return N[s - 1];
}
function Ea(n, t, e, i, s) {
  for (let o = N.length - 1; o >= N.indexOf(e); o--) {
    const a = N[o];
    if (ne[a].common && n._adapter.diff(s, i, a) >= t - 1)
      return a;
  }
  return N[e ? N.indexOf(e) : 0];
}
function Ra(n) {
  for (let t = N.indexOf(n) + 1, e = N.length; t < e; ++t)
    if (ne[N[t]].common)
      return N[t];
}
function Hi(n, t, e) {
  if (!e)
    n[t] = !0;
  else if (e.length) {
    const { lo: i, hi: s } = qs(e, t), o = e[i] >= t ? e[i] : e[s];
    n[o] = !0;
  }
}
function Ba(n, t, e, i) {
  const s = n._adapter, o = +s.startOf(t[0].value, i), a = t[t.length - 1].value;
  let r, l;
  for (r = o; r <= a; r = +s.add(r, 1, i))
    l = e[r], l >= 0 && (t[l].major = !0);
  return t;
}
function Wi(n, t, e) {
  const i = [], s = {}, o = t.length;
  let a, r;
  for (a = 0; a < o; ++a)
    r = t[a], s[r] = a, i.push({
      value: r,
      major: !1
    });
  return o === 0 || !e ? i : Ba(n, i, s, e);
}
class te extends vt {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, e = {}) {
    const i = t.time || (t.time = {}), s = this._adapter = new Cn._date(t.adapters.date);
    s.init(e), Kt(i.displayFormats, s.formats()), this._parseOpts = {
      parser: i.parser,
      round: i.round,
      isoWeekday: i.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : Bi(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, e = this._adapter, i = t.time.unit || "day";
    let { min: s, max: o, minDefined: a, maxDefined: r } = this.getUserBounds();
    function l(h) {
      !a && !isNaN(h.min) && (s = Math.min(s, h.min)), !r && !isNaN(h.max) && (o = Math.max(o, h.max));
    }
    (!a || !r) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), s = j(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i), o = j(o) && !isNaN(o) ? o : +e.endOf(Date.now(), i) + 1, this.min = Math.min(s, o - 1), this.max = Math.max(s + 1, o);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY;
    return t.length && (e = t[0], i = t[t.length - 1]), {
      min: e,
      max: i
    };
  }
  buildTicks() {
    const t = this.options, e = t.time, i = t.ticks, s = i.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && s.length && (this.min = this._userMin || s[0], this.max = this._userMax || s[s.length - 1]);
    const o = this.min, a = this.max, r = js(s, o, a);
    return this._unit = e.unit || (i.autoSkip ? Vi(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : Ea(this, r.length, e.minUnit, this.min, this.max)), this._majorUnit = !i.major.enabled || this._unit === "year" ? void 0 : Ra(this._unit), this.initOffsets(s), t.reverse && r.reverse(), Wi(this, r, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, i = 0, s, o;
    this.options.offset && t.length && (s = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - s : e = (this.getDecimalForValue(t[1]) - s) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? i = o : i = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const a = t.length < 3 ? 0.5 : 0.25;
    e = Z(e, 0, a), i = Z(i, 0, a), this._offsets = {
      start: e,
      end: i,
      factor: 1 / (e + 1 + i)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, i = this.max, s = this.options, o = s.time, a = o.unit || Vi(o.minUnit, e, i, this._getLabelCapacity(e)), r = T(s.ticks.stepSize, 1), l = a === "week" ? o.isoWeekday : !1, h = At(l) || l === !0, c = {};
    let d = e, u, f;
    if (h && (d = +t.startOf(d, "isoWeek", l)), d = +t.startOf(d, h ? "day" : a), t.diff(i, e, a) > 1e5 * r)
      throw new Error(e + " and " + i + " are too far apart with stepSize of " + r + " " + a);
    const g = s.ticks.source === "data" && this.getDataTimestamps();
    for (u = d, f = 0; u < i; u = +t.add(u, r, a), f++)
      Hi(c, u, g);
    return (u === i || s.bounds === "ticks" || f === 1) && Hi(c, u, g), Object.keys(c).sort(Ri).map((p) => +p);
  }
  getLabelForValue(t) {
    const e = this._adapter, i = this.options.time;
    return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime);
  }
  format(t, e) {
    const s = this.options.time.displayFormats, o = this._unit, a = e || s[o];
    return this._adapter.format(t, a);
  }
  _tickFormatFunction(t, e, i, s) {
    const o = this.options, a = o.ticks.callback;
    if (a)
      return A(a, [
        t,
        e,
        i
      ], this);
    const r = o.time.displayFormats, l = this._unit, h = this._majorUnit, c = l && r[l], d = h && r[h], u = i[e], f = h && d && u && u.major;
    return this._adapter.format(t, s || (f ? d : c));
  }
  generateTickLabels(t) {
    let e, i, s;
    for (e = 0, i = t.length; e < i; ++e)
      s = t[e], s.label = this._tickFormatFunction(s.value, e, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets, i = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + i) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets, i = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + i * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks, i = this.ctx.measureText(t).width, s = dt(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(s), a = Math.sin(s), r = this._resolveTickFontOptions(0).size;
    return {
      w: i * o + r * a,
      h: i * a + r * o
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, i = e.displayFormats, s = i[e.unit] || i.millisecond, o = this._tickFormatFunction(t, 0, Wi(this, [
      t
    ], this._majorUnit), s), a = this._getLabelSize(o), r = Math.floor(this.isHorizontal() ? this.width / a.w : this.height / a.h) - 1;
    return r > 0 ? r : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], e, i;
    if (t.length)
      return t;
    const s = this.getMatchingVisibleMetas();
    if (this._normalized && s.length)
      return this._cache.data = s[0].controller.getAllParsedValues(this);
    for (e = 0, i = s.length; e < i; ++e)
      t = t.concat(s[e].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, i;
    if (t.length)
      return t;
    const s = this.getLabels();
    for (e = 0, i = s.length; e < i; ++e)
      t.push(Bi(this, s[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return Ki(t.sort(Ri));
  }
}
M(te, "id", "time"), M(te, "defaults", {
  bounds: "data",
  adapters: {},
  time: {
    parser: !1,
    unit: !1,
    round: !1,
    isoWeekday: !1,
    minUnit: "millisecond",
    displayFormats: {}
  },
  ticks: {
    source: "auto",
    callback: !1,
    major: {
      enabled: !1
    }
  }
});
function Xt(n, t, e) {
  let i = 0, s = n.length - 1, o, a, r, l;
  e ? (t >= n[i].pos && t <= n[s].pos && ({ lo: i, hi: s } = ve(n, "pos", t)), { pos: o, time: r } = n[i], { pos: a, time: l } = n[s]) : (t >= n[i].time && t <= n[s].time && ({ lo: i, hi: s } = ve(n, "time", t)), { time: o, pos: r } = n[i], { time: a, pos: l } = n[s]);
  const h = a - o;
  return h ? r + (l - r) * (t - o) / h : r;
}
class Ni extends te {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = Xt(e, this.min), this._tableRange = Xt(e, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: i } = this, s = [], o = [];
    let a, r, l, h, c;
    for (a = 0, r = t.length; a < r; ++a)
      h = t[a], h >= e && h <= i && s.push(h);
    if (s.length < 2)
      return [
        {
          time: e,
          pos: 0
        },
        {
          time: i,
          pos: 1
        }
      ];
    for (a = 0, r = s.length; a < r; ++a)
      c = s[a + 1], l = s[a - 1], h = s[a], Math.round((c + l) / 2) !== h && o.push({
        time: h,
        pos: a / (r - 1)
      });
    return o;
  }
  _generate() {
    const t = this.min, e = this.max;
    let i = super.getDataTimestamps();
    return (!i.includes(t) || !i.length) && i.splice(0, 0, t), (!i.includes(e) || i.length === 1) && i.push(e), i.sort((s, o) => s - o);
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length)
      return t;
    const e = this.getDataTimestamps(), i = this.getLabelTimestamps();
    return e.length && i.length ? t = this.normalize(e.concat(i)) : t = e.length ? e : i, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (Xt(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, i = this.getDecimalForPixel(t) / e.factor - e.end;
    return Xt(this._table, i * this._tableRange + this._minPos, !0);
  }
}
M(Ni, "id", "timeseries"), M(Ni, "defaults", te.defaults);
export {
  an as Animation,
  Gi as Animations,
  ce as BarController,
  xe as BarElement,
  es as BasePlatform,
  Wn as BasicPlatform,
  Fi as CategoryScale,
  ct as Chart,
  xt as DatasetController,
  Qn as DomPlatform,
  Q as Element,
  Wa as Filler,
  zn as Interaction,
  Na as Legend,
  de as LineController,
  ft as LineElement,
  Ei as LinearScale,
  pe as PointElement,
  vt as Scale,
  ws as Ticks,
  te as TimeScale,
  Ni as TimeSeriesScale,
  ja as Title,
  $a as Tooltip,
  Cn as _adapters,
  to as _detectPlatform,
  et as animator,
  E as defaults,
  Y as layouts,
  J as registry
};
