import { COMMENT as B, DECLARATION as F, RULESET as G } from "./my-component-library190.js";
import { strlen as E, append as L, charat as I, replace as M, indexof as H, sizeof as J, substr as O, abs as K, trim as P, from as q } from "./my-component-library191.js";
import { dealloc as Q, alloc as V, next as R, peek as x, delimit as y, identifier as W, commenter as X, escaping as Y, whitespace as Z, node as D, char as _, prev as $, caret as z } from "./my-component-library189.js";
function ca(e) {
  return Q(N("", null, null, null, [""], e = V(e), 0, [0], e));
}
function N(e, o, n, f, m, w, T, v, g) {
  for (var l = 0, d = 0, r = T, h = 0, u = 0, b = 0, s = 1, A = 1, i = 1, c = 0, k = "", C = m, p = w, t = f, a = k; A; )
    switch (b = c, c = R()) {
      case 40:
        if (b != 108 && I(a, r - 1) == 58) {
          H(a += M(y(c), "&", "&\f"), "&\f") != -1 && (i = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        a += y(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        a += Z(b);
        break;
      case 92:
        a += Y(z() - 1, 7);
        continue;
      case 47:
        switch (x()) {
          case 42:
          case 47:
            L(j(X(R(), z()), o, n), g);
            break;
          default:
            a += "/";
        }
        break;
      case 123 * s:
        v[l++] = E(a) * i;
      case 125 * s:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            A = 0;
          case 59 + d:
            i == -1 && (a = M(a, /\f/g, "")), u > 0 && E(a) - r && L(u > 32 ? U(a + ";", f, n, r - 1) : U(M(a, " ", "") + ";", f, n, r - 2), g);
            break;
          case 59:
            a += ";";
          default:
            if (L(t = S(a, o, n, l, d, m, v, k, C = [], p = [], r), w), c === 123)
              if (d === 0)
                N(a, o, t, t, C, w, r, v, p);
              else
                switch (h === 99 && I(a, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    N(e, t, t, f && L(S(e, t, t, 0, 0, m, v, k, m, C = [], r), p), m, p, r, v, f ? C : p);
                    break;
                  default:
                    N(a, t, t, t, [""], p, 0, v, p);
                }
        }
        l = d = u = 0, s = i = 1, k = a = "", r = T;
        break;
      case 58:
        r = 1 + E(a), u = b;
      default:
        if (s < 1) {
          if (c == 123)
            --s;
          else if (c == 125 && s++ == 0 && $() == 125)
            continue;
        }
        switch (a += q(c), c * s) {
          case 38:
            i = d > 0 ? 1 : (a += "\f", -1);
            break;
          case 44:
            v[l++] = (E(a) - 1) * i, i = 1;
            break;
          case 64:
            x() === 45 && (a += y(R())), h = x(), d = r = E(k = a += W(z())), c++;
            break;
          case 45:
            b === 45 && E(a) == 2 && (s = 0);
        }
    }
  return w;
}
function S(e, o, n, f, m, w, T, v, g, l, d) {
  for (var r = m - 1, h = m === 0 ? w : [""], u = J(h), b = 0, s = 0, A = 0; b < f; ++b)
    for (var i = 0, c = O(e, r + 1, r = K(s = T[b])), k = e; i < u; ++i)
      (k = P(s > 0 ? h[i] + " " + c : M(c, /&\f/g, h[i]))) && (g[A++] = k);
  return D(e, o, n, m === 0 ? G : v, g, l, d);
}
function j(e, o, n) {
  return D(e, o, n, B, q(_()), O(e, 2, -2), 0);
}
function U(e, o, n, f) {
  return D(e, o, n, F, O(e, 0, f), O(e, f + 1, -1), f);
}
export {
  j as comment,
  ca as compile,
  U as declaration,
  N as parse,
  S as ruleset
};
