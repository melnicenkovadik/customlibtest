let k = { data: "" }, O = (e) => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : e || k, C = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, F = /\/\*[^]*?\*\/|  +/g, y = /\n+/g, d = (e, l) => {
  let n = "", i = "", o = "";
  for (let t in e) {
    let a = e[t];
    t[0] == "@" ? t[1] == "i" ? n = t + " " + a + ";" : i += t[1] == "f" ? d(a, t) : t + "{" + d(a, t[1] == "k" ? "" : l) + "}" : typeof a == "object" ? i += d(a, l ? l.replace(/([^,])+/g, (r) => t.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (s) => /&/.test(s) ? s.replace(/&/g, r) : r ? r + " " + s : s)) : t) : a != null && (t = /^--/.test(t) ? t : t.replace(/[A-Z]/g, "-$&").toLowerCase(), o += d.p ? d.p(t, a) : t + ":" + a + ";");
  }
  return n + (l && o ? l + "{" + o + "}" : o) + i;
}, p = {}, j = (e) => {
  if (typeof e == "object") {
    let l = "";
    for (let n in e) l += n + j(e[n]);
    return l;
  }
  return e;
}, N = (e, l, n, i, o) => {
  let t = j(e), a = p[t] || (p[t] = ((s) => {
    let c = 0, u = 11;
    for (; c < s.length; ) u = 101 * u + s.charCodeAt(c++) >>> 0;
    return "go" + u;
  })(t));
  if (!p[a]) {
    let s = t !== e ? e : ((c) => {
      let u, g, f = [{}];
      for (; u = C.exec(c.replace(F, "")); ) u[4] ? f.shift() : u[3] ? (g = u[3].replace(y, " ").trim(), f.unshift(f[0][g] = f[0][g] || {})) : f[0][u[1]] = u[2].replace(y, " ").trim();
      return f[0];
    })(e);
    p[a] = d(o ? { ["@keyframes " + a]: s } : s, n ? "" : "." + a);
  }
  let r = n && p.g ? p.g : null;
  return n && (p.g = p[a]), ((s, c, u, g) => {
    g ? c.data = c.data.replace(g, s) : c.data.indexOf(s) === -1 && (c.data = u ? s + c.data : c.data + s);
  })(p[a], l, i, r), a;
}, x = (e, l, n) => e.reduce((i, o, t) => {
  let a = l[t];
  if (a && a.call) {
    let r = a(n), s = r && r.props && r.props.className || /^go/.test(r) && r;
    a = s ? "." + s : r && typeof r == "object" ? r.props ? "" : d(r, "") : r === !1 ? "" : r;
  }
  return i + o + (a ?? "");
}, "");
function h(e) {
  let l = this || {}, n = e.call ? e(l.p) : e;
  return N(n.unshift ? n.raw ? x(n, [].slice.call(arguments, 1), l.p) : n.reduce((i, o) => Object.assign(i, o && o.call ? o(l.p) : o), {}) : n, O(l.target), l.g, l.o, l.k);
}
let w, m, b;
h.bind({ g: 1 });
let _ = h.bind({ k: 1 });
function A(e, l, n, i) {
  d.p = l, w = e, m = n, b = i;
}
function L(e, l) {
  let n = this || {};
  return function() {
    let i = arguments;
    function o(t, a) {
      let r = Object.assign({}, t), s = r.className || o.className;
      n.p = Object.assign({ theme: m && m() }, r), n.o = / *go\d+/.test(s), r.className = h.apply(n, i) + (s ? " " + s : "");
      let c = e;
      return e[0] && (c = r.as || e, delete r.as), b && c[0] && b(r), w(c, r);
    }
    return o;
  };
}
export {
  h as css,
  _ as keyframes,
  A as setup,
  L as styled
};
