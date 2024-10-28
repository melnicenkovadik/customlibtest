import m from "./my-component-library171.js";
import r from "./my-component-library172.js";
import F from "./my-component-library173.js";
import { useState as I, useCallback as o } from "react";
var G = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function N(e) {
  var O = e.defaultInputValue, g = O === void 0 ? "" : O, V = e.defaultMenuIsOpen, h = V === void 0 ? !1 : V, v = e.defaultValue, y = v === void 0 ? null : v, u = e.inputValue, t = e.menuIsOpen, p = e.onChange, l = e.onInputChange, s = e.onMenuClose, f = e.onMenuOpen, a = e.value, b = F(e, G), _ = I(u !== void 0 ? u : g), M = r(_, 2), $ = M[0], j = M[1], x = I(t !== void 0 ? t : h), C = r(x, 2), P = C[0], c = C[1], k = I(a !== void 0 ? a : y), S = r(k, 2), w = S[0], A = S[1], T = o(function(n, i) {
    typeof p == "function" && p(n, i), A(n);
  }, [p]), W = o(function(n, i) {
    var d;
    typeof l == "function" && (d = l(n, i)), j(d !== void 0 ? d : n);
  }, [l]), q = o(function() {
    typeof f == "function" && f(), c(!0);
  }, [f]), z = o(function() {
    typeof s == "function" && s(), c(!1);
  }, [s]), B = u !== void 0 ? u : $, D = t !== void 0 ? t : P, E = a !== void 0 ? a : w;
  return m(m({}, b), {}, {
    inputValue: B,
    menuIsOpen: D,
    onChange: T,
    onInputChange: W,
    onMenuClose: z,
    onMenuOpen: q,
    value: E
  });
}
export {
  N as u
};
