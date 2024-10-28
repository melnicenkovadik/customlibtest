import { RULESET as t, KEYFRAMES as f, COMMENT as n, DECLARATION as p, IMPORT as v, LAYER as E } from "./my-component-library190.js";
import { sizeof as c, strlen as R } from "./my-component-library191.js";
function i(r, a) {
  for (var u = "", o = c(r), s = 0; s < o; s++)
    u += a(r[s], s, r, a) || "";
  return u;
}
function T(r, a, u, o) {
  switch (r.type) {
    case E:
      if (r.children.length) break;
    case v:
    case p:
      return r.return = r.return || r.value;
    case n:
      return "";
    case f:
      return r.return = r.value + "{" + i(r.children, o) + "}";
    case t:
      r.value = r.props.join(",");
  }
  return R(u = i(r.children, o)) ? r.return = r.value + "{" + u + "}" : "";
}
export {
  i as serialize,
  T as stringify
};
