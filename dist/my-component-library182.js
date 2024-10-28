import d from "./my-component-library223.js";
import C from "./my-component-library224.js";
import E from "./my-component-library225.js";
var _ = !1, x = /[A-Z]|^ms/g, O = /_EMO_([^_]+?)_([^]*?)_EMO_/g, b = function(a) {
  return a.charCodeAt(1) === 45;
}, h = function(a) {
  return a != null && typeof a != "boolean";
}, v = /* @__PURE__ */ E(function(e) {
  return b(e) ? e : e.replace(x, "-$&").toLowerCase();
}), p = function(a, n) {
  switch (a) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(O, function(s, t, r) {
          return i = {
            name: t,
            styles: r,
            next: i
          }, t;
        });
  }
  return C[a] !== 1 && !b(a) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, A = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function l(e, a, n) {
  if (n == null)
    return "";
  var s = n;
  if (s.__emotion_styles !== void 0)
    return s;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var t = n;
      if (t.anim === 1)
        return i = {
          name: t.name,
          styles: t.styles,
          next: i
        }, t.name;
      var r = n;
      if (r.styles !== void 0) {
        var o = r.next;
        if (o !== void 0)
          for (; o !== void 0; )
            i = {
              name: o.name,
              styles: o.styles,
              next: i
            }, o = o.next;
        var f = r.styles + ";";
        return f;
      }
      return S(e, a, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = i, u = n(e);
        return i = c, l(e, a, u);
      }
      break;
    }
  }
  var m = n;
  return m;
}
function S(e, a, n) {
  var s = "";
  if (Array.isArray(n))
    for (var t = 0; t < n.length; t++)
      s += l(e, a, n[t]) + ";";
  else
    for (var r in n) {
      var o = n[r];
      if (typeof o != "object") {
        var f = o;
        h(f) && (s += v(r) + ":" + p(r, f) + ";");
      } else {
        if (r === "NO_COMPONENT_SELECTOR" && _)
          throw new Error(A);
        if (Array.isArray(o) && typeof o[0] == "string" && a == null)
          for (var c = 0; c < o.length; c++)
            h(o[c]) && (s += v(r) + ":" + p(r, o[c]) + ";");
        else {
          var u = l(e, a, o);
          switch (r) {
            case "animation":
            case "animationName": {
              s += v(r) + ":" + u + ";";
              break;
            }
            default:
              s += r + "{" + u + "}";
          }
        }
      }
    }
  return s;
}
var y = /label:\s*([^\s;{]+)\s*(;|$)/g, i;
function R(e, a, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var s = !0, t = "";
  i = void 0;
  var r = e[0];
  if (r == null || r.raw === void 0)
    s = !1, t += l(n, a, r);
  else {
    var o = r;
    t += o[0];
  }
  for (var f = 1; f < e.length; f++)
    if (t += l(n, a, e[f]), s) {
      var c = r;
      t += c[f];
    }
  y.lastIndex = 0;
  for (var u = "", m; (m = y.exec(t)) !== null; )
    u += "-" + m[1];
  var w = d(t) + u;
  return {
    name: w,
    styles: t,
    next: i
  };
}
export {
  R as serializeStyles
};
