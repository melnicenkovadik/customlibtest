import { h as i, E as l, c as u } from "./my-component-library181.js";
import { T as x, w as A } from "./my-component-library181.js";
import * as o from "react";
import { serializeStyles as c } from "./my-component-library182.js";
import "./my-component-library183.js";
var y = function(r, e) {
  var a = arguments;
  if (e == null || !i.call(e, "css"))
    return o.createElement.apply(void 0, a);
  var m = a.length, n = new Array(m);
  n[0] = l, n[1] = u(r, e);
  for (var s = 2; s < m; s++)
    n[s] = a[s];
  return o.createElement.apply(null, n);
};
function f() {
  for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
    r[e] = arguments[e];
  return c(r);
}
var E = function() {
  var r = f.apply(void 0, arguments), e = "animation-" + r.name;
  return {
    name: e,
    styles: "@keyframes " + e + "{" + r.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
export {
  x as ThemeContext,
  y as createElement,
  f as css,
  y as jsx,
  E as keyframes,
  A as withEmotionCache
};
