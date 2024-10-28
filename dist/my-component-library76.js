import b, { forwardRef as C, useRef as h, useEffect as i } from "react";
import { Chart as y, LineController as E, BarController as L } from "./my-component-library77.js";
const w = "label";
function m(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
function T(t, e) {
  const n = t.options;
  n && e && Object.assign(n, e);
}
function R(t, e) {
  t.labels = e;
}
function j(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : w;
  const o = [];
  t.datasets = e.map((a) => {
    const s = t.datasets.find((l) => l[n] === a[n]);
    return !s || !a.data || o.includes(s) ? {
      ...a
    } : (o.push(s), Object.assign(s, a), s);
  });
}
function B(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w;
  const n = {
    labels: [],
    datasets: []
  };
  return R(n, t.labels), j(n, t.datasets, e), n;
}
function D(t, e) {
  const { height: n = 150, width: o = 300, redraw: a = !1, datasetIdKey: s, type: l, data: c, options: u, plugins: I = [], fallbackContent: K, updateMode: p, ...O } = t, d = h(null), r = h(), f = () => {
    d.current && (r.current = new y(d.current, {
      type: l,
      data: B(c, s),
      options: u && {
        ...u
      },
      plugins: I
    }), m(e, r.current));
  }, g = () => {
    m(e, null), r.current && (r.current.destroy(), r.current = null);
  };
  return i(() => {
    !a && r.current && u && T(r.current, u);
  }, [
    a,
    u
  ]), i(() => {
    !a && r.current && R(r.current.config.data, c.labels);
  }, [
    a,
    c.labels
  ]), i(() => {
    !a && r.current && c.datasets && j(r.current.config.data, c.datasets, s);
  }, [
    a,
    c.datasets
  ]), i(() => {
    r.current && (a ? (g(), setTimeout(f)) : r.current.update(p));
  }, [
    a,
    u,
    c.labels,
    c.datasets,
    p
  ]), i(() => {
    r.current && (g(), setTimeout(f));
  }, [
    l
  ]), i(() => (f(), () => g()), []), /* @__PURE__ */ b.createElement("canvas", Object.assign({
    ref: d,
    role: "img",
    height: n,
    width: o
  }, O), K);
}
const _ = /* @__PURE__ */ C(D);
function v(t, e) {
  return y.register(e), /* @__PURE__ */ C((n, o) => /* @__PURE__ */ b.createElement(_, Object.assign({}, n, {
    ref: o,
    type: t
  })));
}
const P = /* @__PURE__ */ v("line", E), $ = /* @__PURE__ */ v("bar", L);
export {
  $ as Bar,
  _ as Chart,
  P as Line
};
