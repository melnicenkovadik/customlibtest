/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
function m(f) {
  return f + 0.5 | 0;
}
const b = (f, e, t) => Math.max(Math.min(f, t), e);
function l(f) {
  return b(m(f * 2.55), 0, 255);
}
function d(f) {
  return b(m(f * 255), 0, 255);
}
function o(f) {
  return b(m(f / 2.55) / 100, 0, 1);
}
function X(f) {
  return b(m(f * 100), 0, 100);
}
const i = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, w = [..."0123456789ABCDEF"], Z = (f) => w[f & 15], A = (f) => w[(f & 240) >> 4] + w[f & 15], y = (f) => (f & 240) >> 4 === (f & 15), U = (f) => y(f.r) && y(f.g) && y(f.b) && y(f.a);
function V(f) {
  var e = f.length, t;
  return f[0] === "#" && (e === 4 || e === 5 ? t = {
    r: 255 & i[f[1]] * 17,
    g: 255 & i[f[2]] * 17,
    b: 255 & i[f[3]] * 17,
    a: e === 5 ? i[f[4]] * 17 : 255
  } : (e === 7 || e === 9) && (t = {
    r: i[f[1]] << 4 | i[f[2]],
    g: i[f[3]] << 4 | i[f[4]],
    b: i[f[5]] << 4 | i[f[6]],
    a: e === 9 ? i[f[7]] << 4 | i[f[8]] : 255
  })), t;
}
const H = (f, e) => f < 255 ? e(f) : "";
function W(f) {
  var e = U(f) ? Z : A;
  return f ? "#" + e(f.r) + e(f.g) + e(f.b) + H(f.a, e) : void 0;
}
const q = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function $(f, e, t) {
  const n = e * Math.min(t, 1 - t), r = (a, s = (a + f / 30) % 12) => t - n * Math.max(Math.min(s - 3, 9 - s, 1), -1);
  return [r(0), r(8), r(4)];
}
function L(f, e, t) {
  const n = (r, a = (r + f / 60) % 6) => t - t * e * Math.max(Math.min(a, 4 - a, 1), 0);
  return [n(5), n(3), n(1)];
}
function j(f, e, t) {
  const n = $(f, 1, 0.5);
  let r;
  for (e + t > 1 && (r = 1 / (e + t), e *= r, t *= r), r = 0; r < 3; r++)
    n[r] *= 1 - e - t, n[r] += e;
  return n;
}
function N(f, e, t, n, r) {
  return f === r ? (e - t) / n + (e < t ? 6 : 0) : e === r ? (t - f) / n + 2 : (f - e) / n + 4;
}
function _(f) {
  const t = f.r / 255, n = f.g / 255, r = f.b / 255, a = Math.max(t, n, r), s = Math.min(t, n, r), c = (a + s) / 2;
  let g, h, x;
  return a !== s && (x = a - s, h = c > 0.5 ? x / (2 - a - s) : x / (a + s), g = N(t, n, r, x, a), g = g * 60 + 0.5), [g | 0, h || 0, c];
}
function M(f, e, t, n) {
  return (Array.isArray(e) ? f(e[0], e[1], e[2]) : f(e, t, n)).map(d);
}
function S(f, e, t) {
  return M($, f, e, t);
}
function K(f, e, t) {
  return M(j, f, e, t);
}
function B(f, e, t) {
  return M(L, f, e, t);
}
function P(f) {
  return (f % 360 + 360) % 360;
}
function Q(f) {
  const e = q.exec(f);
  let t = 255, n;
  if (!e)
    return;
  e[5] !== n && (t = e[6] ? l(+e[5]) : d(+e[5]));
  const r = P(+e[2]), a = +e[3] / 100, s = +e[4] / 100;
  return e[1] === "hwb" ? n = K(r, a, s) : e[1] === "hsv" ? n = B(r, a, s) : n = S(r, a, s), {
    r: n[0],
    g: n[1],
    b: n[2],
    a: t
  };
}
function C(f, e) {
  var t = _(f);
  t[0] = P(t[0] + e), t = S(t), f.r = t[0], f.g = t[1], f.b = t[2];
}
function D(f) {
  if (!f)
    return;
  const e = _(f), t = e[0], n = X(e[1]), r = X(e[2]);
  return f.a < 255 ? `hsla(${t}, ${n}%, ${r}%, ${o(f.a)})` : `hsl(${t}, ${n}%, ${r}%)`;
}
const O = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
}, E = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function v() {
  const f = {}, e = Object.keys(E), t = Object.keys(O);
  let n, r, a, s, c;
  for (n = 0; n < e.length; n++) {
    for (s = c = e[n], r = 0; r < t.length; r++)
      a = t[r], c = c.replace(a, O[a]);
    a = parseInt(E[s], 16), f[c] = [a >> 16 & 255, a >> 8 & 255, a & 255];
  }
  return f;
}
let F;
function G(f) {
  F || (F = v(), F.transparent = [0, 0, 0, 0]);
  const e = F[f.toLowerCase()];
  return e && {
    r: e[0],
    g: e[1],
    b: e[2],
    a: e.length === 4 ? e[3] : 255
  };
}
const I = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function J(f) {
  const e = I.exec(f);
  let t = 255, n, r, a;
  if (e) {
    if (e[7] !== n) {
      const s = +e[7];
      t = e[8] ? l(s) : b(s * 255, 0, 255);
    }
    return n = +e[1], r = +e[3], a = +e[5], n = 255 & (e[2] ? l(n) : b(n, 0, 255)), r = 255 & (e[4] ? l(r) : b(r, 0, 255)), a = 255 & (e[6] ? l(a) : b(a, 0, 255)), {
      r: n,
      g: r,
      b: a,
      a: t
    };
  }
}
function z(f) {
  return f && (f.a < 255 ? `rgba(${f.r}, ${f.g}, ${f.b}, ${o(f.a)})` : `rgb(${f.r}, ${f.g}, ${f.b})`);
}
const Y = (f) => f <= 31308e-7 ? f * 12.92 : Math.pow(f, 1 / 2.4) * 1.055 - 0.055, u = (f) => f <= 0.04045 ? f / 12.92 : Math.pow((f + 0.055) / 1.055, 2.4);
function ee(f, e, t) {
  const n = u(o(f.r)), r = u(o(f.g)), a = u(o(f.b));
  return {
    r: d(Y(n + t * (u(o(e.r)) - n))),
    g: d(Y(r + t * (u(o(e.g)) - r))),
    b: d(Y(a + t * (u(o(e.b)) - a))),
    a: f.a + t * (e.a - f.a)
  };
}
function p(f, e, t) {
  if (f) {
    let n = _(f);
    n[e] = Math.max(0, Math.min(n[e] + n[e] * t, e === 0 ? 360 : 1)), n = S(n), f.r = n[0], f.g = n[1], f.b = n[2];
  }
}
function T(f, e) {
  return f && Object.assign(e || {}, f);
}
function R(f) {
  var e = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(f) ? f.length >= 3 && (e = { r: f[0], g: f[1], b: f[2], a: 255 }, f.length > 3 && (e.a = d(f[3]))) : (e = T(f, { r: 0, g: 0, b: 0, a: 1 }), e.a = d(e.a)), e;
}
function fe(f) {
  return f.charAt(0) === "r" ? J(f) : Q(f);
}
class k {
  constructor(e) {
    if (e instanceof k)
      return e;
    const t = typeof e;
    let n;
    t === "object" ? n = R(e) : t === "string" && (n = V(e) || G(e) || fe(e)), this._rgb = n, this._valid = !!n;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var e = T(this._rgb);
    return e && (e.a = o(e.a)), e;
  }
  set rgb(e) {
    this._rgb = R(e);
  }
  rgbString() {
    return this._valid ? z(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? W(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? D(this._rgb) : void 0;
  }
  mix(e, t) {
    if (e) {
      const n = this.rgb, r = e.rgb;
      let a;
      const s = t === a ? 0.5 : t, c = 2 * s - 1, g = n.a - r.a, h = ((c * g === -1 ? c : (c + g) / (1 + c * g)) + 1) / 2;
      a = 1 - h, n.r = 255 & h * n.r + a * r.r + 0.5, n.g = 255 & h * n.g + a * r.g + 0.5, n.b = 255 & h * n.b + a * r.b + 0.5, n.a = s * n.a + (1 - s) * r.a, this.rgb = n;
    }
    return this;
  }
  interpolate(e, t) {
    return e && (this._rgb = ee(this._rgb, e._rgb, t)), this;
  }
  clone() {
    return new k(this.rgb);
  }
  alpha(e) {
    return this._rgb.a = d(e), this;
  }
  clearer(e) {
    const t = this._rgb;
    return t.a *= 1 - e, this;
  }
  greyscale() {
    const e = this._rgb, t = m(e.r * 0.3 + e.g * 0.59 + e.b * 0.11);
    return e.r = e.g = e.b = t, this;
  }
  opaquer(e) {
    const t = this._rgb;
    return t.a *= 1 + e, this;
  }
  negate() {
    const e = this._rgb;
    return e.r = 255 - e.r, e.g = 255 - e.g, e.b = 255 - e.b, this;
  }
  lighten(e) {
    return p(this._rgb, 2, e), this;
  }
  darken(e) {
    return p(this._rgb, 2, -e), this;
  }
  saturate(e) {
    return p(this._rgb, 1, e), this;
  }
  desaturate(e) {
    return p(this._rgb, 1, -e), this;
  }
  rotate(e) {
    return C(this._rgb, e), this;
  }
}
export {
  k as Color,
  o as b2n,
  V as hexParse,
  W as hexString,
  S as hsl2rgb,
  D as hslString,
  B as hsv2rgb,
  Q as hueParse,
  K as hwb2rgb,
  b as lim,
  d as n2b,
  X as n2p,
  G as nameParse,
  l as p2b,
  _ as rgb2hsl,
  J as rgbParse,
  z as rgbString,
  C as rotate,
  m as round
};
