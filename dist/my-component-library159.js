import A from "./my-component-library171.js";
import C from "./my-component-library178.js";
import q from "./my-component-library173.js";
import { useMemo as j, useCallback as z } from "react";
import { H as x, D as B } from "./my-component-library118.js";
import { g as E, b as F } from "./my-component-library158.js";
var G = ["allowCreateWhileLoading", "createOptionPosition", "formatCreateLabel", "isValidNewOption", "getNewOptionData", "onCreateOption", "options", "onChange"], k = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", o = arguments.length > 1 ? arguments[1] : void 0, p = arguments.length > 2 ? arguments[2] : void 0, a = String(t).toLowerCase(), n = String(p.getOptionValue(o)).toLowerCase(), g = String(p.getOptionLabel(o)).toLowerCase();
  return n === a || g === a;
}, b = {
  formatCreateLabel: function(t) {
    return 'Create "'.concat(t, '"');
  },
  isValidNewOption: function(t, o, p, a) {
    return !(!t || o.some(function(n) {
      return k(t, n, a);
    }) || p.some(function(n) {
      return k(t, n, a);
    }));
  },
  getNewOptionData: function(t, o) {
    return {
      label: o,
      value: t,
      __isNew__: !0
    };
  }
};
function X(e) {
  var t = e.allowCreateWhileLoading, o = t === void 0 ? !1 : t, p = e.createOptionPosition, a = p === void 0 ? "last" : p, n = e.formatCreateLabel, g = n === void 0 ? b.formatCreateLabel : n, L = e.isValidNewOption, w = L === void 0 ? b.isValidNewOption : L, N = e.getNewOptionData, O = N === void 0 ? b.getNewOptionData : N, d = e.onCreateOption, h = e.options, l = h === void 0 ? [] : h, c = e.onChange, i = q(e, G), $ = i.getOptionValue, V = $ === void 0 ? E : $, P = i.getOptionLabel, _ = P === void 0 ? F : P, r = i.inputValue, S = i.isLoading, D = i.isMulti, m = i.value, y = i.name, s = j(function() {
    return w(r, x(m), l, {
      getOptionValue: V,
      getOptionLabel: _
    }) ? O(r, g(r)) : void 0;
  }, [g, O, _, V, r, w, l, m]), H = j(function() {
    return (o || !S) && s ? a === "first" ? [s].concat(C(l)) : [].concat(C(l), [s]) : l;
  }, [o, a, S, s, l]), M = z(function(u, f) {
    if (f.action !== "select-option")
      return c(u, f);
    var W = Array.isArray(u) ? u : [u];
    if (W[W.length - 1] === s) {
      if (d) d(r);
      else {
        var v = O(r, r), T = {
          action: "create-option",
          name: y,
          option: v
        };
        c(B(D, [].concat(C(x(m)), [v]), v), T);
      }
      return;
    }
    c(u, f);
  }, [O, r, D, y, s, d, c, m]);
  return A(A({}, i), {}, {
    options: H,
    onChange: M
  });
}
export {
  X as u
};
