import { charat as h, strlen as g, trim as x, from as p, substr as j, assign as q } from "./my-component-library191.js";
var u = 1, t = 1, m = 0, n = 0, r = 0, i = "";
function z(e, c, k, b, v, w, d) {
  return { value: e, root: c, parent: k, type: b, props: v, children: w, line: u, column: t, length: d, return: "" };
}
function C(e, c) {
  return q(z("", null, null, "", null, null, 0), e, { length: -e.length }, c);
}
function D() {
  return r;
}
function E() {
  return r = n > 0 ? h(i, --n) : 0, t--, r === 10 && (t = 1, u--), r;
}
function a() {
  return r = n < m ? h(i, n++) : 0, t++, r === 10 && (t = 1, u++), r;
}
function s() {
  return h(i, n);
}
function A() {
  return n;
}
function l(e, c) {
  return j(i, e, c);
}
function o(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function F(e) {
  return u = t = 1, m = g(i = e), n = 0, [];
}
function G(e) {
  return i = "", e;
}
function H(e) {
  return x(l(n - 1, f(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function I(e) {
  for (; (r = s()) && r < 33; )
    a();
  return o(e) > 2 || o(r) > 3 ? "" : " ";
}
function J(e, c) {
  for (; --c && a() && !(r < 48 || r > 102 || r > 57 && r < 65 || r > 70 && r < 97); )
    ;
  return l(e, A() + (c < 6 && s() == 32 && a() == 32));
}
function f(e) {
  for (; a(); )
    switch (r) {
      case e:
        return n;
      case 34:
      case 39:
        e !== 34 && e !== 39 && f(r);
        break;
      case 40:
        e === 41 && f(e);
        break;
      case 92:
        a();
        break;
    }
  return n;
}
function K(e, c) {
  for (; a() && e + r !== 57; )
    if (e + r === 84 && s() === 47)
      break;
  return "/*" + l(c, n - 1) + "*" + p(e === 47 ? e : a());
}
function L(e) {
  for (; !o(s()); )
    a();
  return l(e, n);
}
export {
  F as alloc,
  A as caret,
  D as char,
  r as character,
  i as characters,
  t as column,
  K as commenter,
  C as copy,
  G as dealloc,
  H as delimit,
  f as delimiter,
  J as escaping,
  L as identifier,
  m as length,
  u as line,
  a as next,
  z as node,
  s as peek,
  n as position,
  E as prev,
  l as slice,
  o as token,
  I as whitespace
};
