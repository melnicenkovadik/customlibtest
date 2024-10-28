import E from "./my-component-library157.js";
import G from "./my-component-library171.js";
import ze from "./my-component-library174.js";
import Qe from "./my-component-library175.js";
import _e from "./my-component-library176.js";
import je from "./my-component-library177.js";
import de from "./my-component-library178.js";
import * as h from "react";
import { Component as $e, Fragment as le, useMemo as Q, useRef as U, useCallback as J, useEffect as Le } from "react";
import { z as ve, A as Ke, B as me, C as he, D as te, E as qe, F as et, G as tt, H as Ie, I as Ce, J as nt, M as ut, r as it, a as at, b as ot, d as st, e as rt, g as lt, f as ct, i as dt, h as pt, j as ft, l as bt, k as gt, m as vt, n as mt, o as ht, p as It, q as Ct, t as Et, u as Ft, v as At, w as Vt, x as Dt, y as xt, K as Ot, s as St } from "./my-component-library118.js";
import { createElement as L, css as yt } from "./my-component-library179.js";
import Bt from "./my-component-library180.js";
import Mt from "./my-component-library173.js";
function Gt() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Lt = process.env.NODE_ENV === "production" ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: Gt
}, Rt = function(u) {
  return L("span", E({
    css: Lt
  }, u));
}, Ee = Rt, Wt = {
  guidance: function(u) {
    var s = u.isSearchable, a = u.isMulti, e = u.tabSelectsValue, i = u.context, l = u.isInitialFocus;
    switch (i) {
      case "menu":
        return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(e ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return l ? "".concat(u["aria-label"] || "Select", " is focused ").concat(s ? ",type to refine list" : "", ", press Down to open the menu, ").concat(a ? " press left to focus selected values" : "") : "";
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function(u) {
    var s = u.action, a = u.label, e = a === void 0 ? "" : a, i = u.labels, l = u.isDisabled;
    switch (s) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(e, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(i.length > 1 ? "s" : "", " ").concat(i.join(","), ", selected.");
      case "select-option":
        return l ? "option ".concat(e, " is disabled. Select another option.") : "option ".concat(e, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function(u) {
    var s = u.context, a = u.focused, e = u.options, i = u.label, l = i === void 0 ? "" : i, d = u.selectValue, t = u.isDisabled, n = u.isSelected, o = u.isAppleDevice, c = function(g, p) {
      return g && g.length ? "".concat(g.indexOf(p) + 1, " of ").concat(g.length) : "";
    };
    if (s === "value" && d)
      return "value ".concat(l, " focused, ").concat(c(d, a), ".");
    if (s === "menu" && o) {
      var f = t ? " disabled" : "", b = "".concat(n ? " selected" : "").concat(f);
      return "".concat(l).concat(b, ", ").concat(c(e, a), ".");
    }
    return "";
  },
  onFilter: function(u) {
    var s = u.inputValue, a = u.resultsMessage;
    return "".concat(a).concat(s ? " for search term " + s : "", ".");
  }
}, Zt = function(u) {
  var s = u.ariaSelection, a = u.focusedOption, e = u.focusedValue, i = u.focusableOptions, l = u.isFocused, d = u.selectValue, t = u.selectProps, n = u.id, o = u.isAppleDevice, c = t.ariaLiveMessages, f = t.getOptionLabel, b = t.inputValue, v = t.isMulti, g = t.isOptionDisabled, p = t.isSearchable, m = t.menuIsOpen, C = t.options, F = t.screenReaderStatus, A = t.tabSelectsValue, V = t.isLoading, O = t["aria-label"], x = t["aria-live"], I = Q(function() {
    return G(G({}, Wt), c || {});
  }, [c]), y = Q(function() {
    var B = "";
    if (s && I.onChange) {
      var S = s.option, H = s.options, P = s.removedValue, $ = s.removedValues, K = s.value, q = function(T) {
        return Array.isArray(T) ? null : T;
      }, D = P || S || q(K), M = D ? f(D) : "", w = H || $ || void 0, N = w ? w.map(f) : [], R = G({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: D && g(D, d),
        label: M,
        labels: N
      }, s);
      B = I.onChange(R);
    }
    return B;
  }, [s, I, g, d, f]), W = Q(function() {
    var B = "", S = a || e, H = !!(a && d && d.includes(a));
    if (S && I.onFocus) {
      var P = {
        focused: S,
        label: f(S),
        isDisabled: g(S, d),
        isSelected: H,
        options: i,
        context: S === a ? "menu" : "value",
        selectValue: d,
        isAppleDevice: o
      };
      B = I.onFocus(P);
    }
    return B;
  }, [a, e, f, g, I, i, d, o]), Z = Q(function() {
    var B = "";
    if (m && C.length && !V && I.onFilter) {
      var S = F({
        count: i.length
      });
      B = I.onFilter({
        inputValue: b,
        resultsMessage: S
      });
    }
    return B;
  }, [i, b, m, I, C, F, V]), X = (s == null ? void 0 : s.action) === "initial-input-focus", z = Q(function() {
    var B = "";
    if (I.guidance) {
      var S = e ? "value" : m ? "menu" : "input";
      B = I.guidance({
        "aria-label": O,
        context: S,
        isDisabled: a && g(a, d),
        isMulti: v,
        isSearchable: p,
        tabSelectsValue: A,
        isInitialFocus: X
      });
    }
    return B;
  }, [O, a, e, v, g, p, m, I, d, A, X]), j = L(le, null, L("span", {
    id: "aria-selection"
  }, y), L("span", {
    id: "aria-focused"
  }, W), L("span", {
    id: "aria-results"
  }, Z), L("span", {
    id: "aria-guidance"
  }, z));
  return L(le, null, L(Ee, {
    id: n
  }, X && j), L(Ee, {
    "aria-live": x,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, l && !X && j));
}, Xt = Zt, ce = [{
  base: "A",
  letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
}, {
  base: "AA",
  letters: "Ꜳ"
}, {
  base: "AE",
  letters: "ÆǼǢ"
}, {
  base: "AO",
  letters: "Ꜵ"
}, {
  base: "AU",
  letters: "Ꜷ"
}, {
  base: "AV",
  letters: "ꜸꜺ"
}, {
  base: "AY",
  letters: "Ꜽ"
}, {
  base: "B",
  letters: "BⒷＢḂḄḆɃƂƁ"
}, {
  base: "C",
  letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
}, {
  base: "D",
  letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
}, {
  base: "DZ",
  letters: "ǱǄ"
}, {
  base: "Dz",
  letters: "ǲǅ"
}, {
  base: "E",
  letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
}, {
  base: "F",
  letters: "FⒻＦḞƑꝻ"
}, {
  base: "G",
  letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
}, {
  base: "H",
  letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
}, {
  base: "I",
  letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
}, {
  base: "J",
  letters: "JⒿＪĴɈ"
}, {
  base: "K",
  letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
}, {
  base: "L",
  letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
}, {
  base: "LJ",
  letters: "Ǉ"
}, {
  base: "Lj",
  letters: "ǈ"
}, {
  base: "M",
  letters: "MⓂＭḾṀṂⱮƜ"
}, {
  base: "N",
  letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
}, {
  base: "NJ",
  letters: "Ǌ"
}, {
  base: "Nj",
  letters: "ǋ"
}, {
  base: "O",
  letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
}, {
  base: "OI",
  letters: "Ƣ"
}, {
  base: "OO",
  letters: "Ꝏ"
}, {
  base: "OU",
  letters: "Ȣ"
}, {
  base: "P",
  letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
}, {
  base: "Q",
  letters: "QⓆＱꝖꝘɊ"
}, {
  base: "R",
  letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
}, {
  base: "S",
  letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
}, {
  base: "T",
  letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
}, {
  base: "TZ",
  letters: "Ꜩ"
}, {
  base: "U",
  letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
}, {
  base: "V",
  letters: "VⓋＶṼṾƲꝞɅ"
}, {
  base: "VY",
  letters: "Ꝡ"
}, {
  base: "W",
  letters: "WⓌＷẀẂŴẆẄẈⱲ"
}, {
  base: "X",
  letters: "XⓍＸẊẌ"
}, {
  base: "Y",
  letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
}, {
  base: "Z",
  letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
}, {
  base: "a",
  letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
}, {
  base: "aa",
  letters: "ꜳ"
}, {
  base: "ae",
  letters: "æǽǣ"
}, {
  base: "ao",
  letters: "ꜵ"
}, {
  base: "au",
  letters: "ꜷ"
}, {
  base: "av",
  letters: "ꜹꜻ"
}, {
  base: "ay",
  letters: "ꜽ"
}, {
  base: "b",
  letters: "bⓑｂḃḅḇƀƃɓ"
}, {
  base: "c",
  letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
}, {
  base: "d",
  letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
}, {
  base: "dz",
  letters: "ǳǆ"
}, {
  base: "e",
  letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
}, {
  base: "f",
  letters: "fⓕｆḟƒꝼ"
}, {
  base: "g",
  letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
}, {
  base: "h",
  letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
}, {
  base: "hv",
  letters: "ƕ"
}, {
  base: "i",
  letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
}, {
  base: "j",
  letters: "jⓙｊĵǰɉ"
}, {
  base: "k",
  letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
}, {
  base: "l",
  letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
}, {
  base: "lj",
  letters: "ǉ"
}, {
  base: "m",
  letters: "mⓜｍḿṁṃɱɯ"
}, {
  base: "n",
  letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
}, {
  base: "nj",
  letters: "ǌ"
}, {
  base: "o",
  letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
}, {
  base: "oi",
  letters: "ƣ"
}, {
  base: "ou",
  letters: "ȣ"
}, {
  base: "oo",
  letters: "ꝏ"
}, {
  base: "p",
  letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
}, {
  base: "q",
  letters: "qⓠｑɋꝗꝙ"
}, {
  base: "r",
  letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
}, {
  base: "s",
  letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
}, {
  base: "t",
  letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
}, {
  base: "tz",
  letters: "ꜩ"
}, {
  base: "u",
  letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
}, {
  base: "v",
  letters: "vⓥｖṽṿʋꝟʌ"
}, {
  base: "vy",
  letters: "ꝡ"
}, {
  base: "w",
  letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
}, {
  base: "x",
  letters: "xⓧｘẋẍ"
}, {
  base: "y",
  letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
}, {
  base: "z",
  letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
}], wt = new RegExp("[" + ce.map(function(r) {
  return r.letters;
}).join("") + "]", "g"), Re = {};
for (var ie = 0; ie < ce.length; ie++)
  for (var ae = ce[ie], oe = 0; oe < ae.letters.length; oe++)
    Re[ae.letters[oe]] = ae.base;
var We = function(u) {
  return u.replace(wt, function(s) {
    return Re[s];
  });
}, Tt = Bt(We), Fe = function(u) {
  return u.replace(/^\s+|\s+$/g, "");
}, Ht = function(u) {
  return "".concat(u.label, " ").concat(u.value);
}, Nt = function(u) {
  return function(s, a) {
    if (s.data.__isNew__) return !0;
    var e = G({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: Ht,
      trim: !0,
      matchFrom: "any"
    }, u), i = e.ignoreCase, l = e.ignoreAccents, d = e.stringify, t = e.trim, n = e.matchFrom, o = t ? Fe(a) : a, c = t ? Fe(d(s)) : d(s);
    return i && (o = o.toLowerCase(), c = c.toLowerCase()), l && (o = Tt(o), c = We(c)), n === "start" ? c.substr(0, o.length) === o : c.indexOf(o) > -1;
  };
}, kt = ["innerRef"];
function Jt(r) {
  var u = r.innerRef, s = Mt(r, kt), a = it(s, "onExited", "in", "enter", "exit", "appear");
  return L("input", E({
    ref: u
  }, a, {
    css: /* @__PURE__ */ yt({
      label: "dummyInput",
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: "transparent",
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, process.env.NODE_ENV === "production" ? "" : ";label:DummyInput;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJEdW1teUlucHV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgcmVtb3ZlUHJvcHMgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER1bW15SW5wdXQoe1xuICBpbm5lclJlZixcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW5wdXQnXSAmIHtcbiAgcmVhZG9ubHkgaW5uZXJSZWY6IFJlZjxIVE1MSW5wdXRFbGVtZW50Pjtcbn0pIHtcbiAgLy8gUmVtb3ZlIGFuaW1hdGlvbiBwcm9wcyBub3QgbWVhbnQgZm9yIEhUTUwgZWxlbWVudHNcbiAgY29uc3QgZmlsdGVyZWRQcm9wcyA9IHJlbW92ZVByb3BzKFxuICAgIHByb3BzLFxuICAgICdvbkV4aXRlZCcsXG4gICAgJ2luJyxcbiAgICAnZW50ZXInLFxuICAgICdleGl0JyxcbiAgICAnYXBwZWFyJ1xuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgey4uLmZpbHRlcmVkUHJvcHN9XG4gICAgICBjc3M9e3tcbiAgICAgICAgbGFiZWw6ICdkdW1teUlucHV0JyxcbiAgICAgICAgLy8gZ2V0IHJpZCBvZiBhbnkgZGVmYXVsdCBzdHlsZXNcbiAgICAgICAgYmFja2dyb3VuZDogMCxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHRoaXMgaGlkZXMgdGhlIGZsYXNoaW5nIGN1cnNvclxuICAgICAgICBjYXJldENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgICBncmlkQXJlYTogJzEgLyAxIC8gMiAvIDMnLFxuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHdpdGhvdXQgYHdpZHRoYCBicm93c2VycyB3b24ndCBhbGxvdyBmb2N1c1xuICAgICAgICB3aWR0aDogMSxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIGRlc2t0b3BcbiAgICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG5cbiAgICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBtb2JpbGUgd2hpbHN0IG1haW50YWluaW5nIFwic2Nyb2xsIGludG8gdmlld1wiIGJlaGF2aW91clxuICAgICAgICBsZWZ0OiAtMTAwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoLjAxKScsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG4iXX0= */")
  }));
}
var Pt = function(u) {
  u.cancelable && u.preventDefault(), u.stopPropagation();
};
function Yt(r) {
  var u = r.isEnabled, s = r.onBottomArrive, a = r.onBottomLeave, e = r.onTopArrive, i = r.onTopLeave, l = U(!1), d = U(!1), t = U(0), n = U(null), o = J(function(p, m) {
    if (n.current !== null) {
      var C = n.current, F = C.scrollTop, A = C.scrollHeight, V = C.clientHeight, O = n.current, x = m > 0, I = A - V - F, y = !1;
      I > m && l.current && (a && a(p), l.current = !1), x && d.current && (i && i(p), d.current = !1), x && m > I ? (s && !l.current && s(p), O.scrollTop = A, y = !0, l.current = !0) : !x && -m > F && (e && !d.current && e(p), O.scrollTop = 0, y = !0, d.current = !0), y && Pt(p);
    }
  }, [s, a, e, i]), c = J(function(p) {
    o(p, p.deltaY);
  }, [o]), f = J(function(p) {
    t.current = p.changedTouches[0].clientY;
  }, []), b = J(function(p) {
    var m = t.current - p.changedTouches[0].clientY;
    o(p, m);
  }, [o]), v = J(function(p) {
    if (p) {
      var m = St ? {
        passive: !1
      } : !1;
      p.addEventListener("wheel", c, m), p.addEventListener("touchstart", f, m), p.addEventListener("touchmove", b, m);
    }
  }, [b, f, c]), g = J(function(p) {
    p && (p.removeEventListener("wheel", c, !1), p.removeEventListener("touchstart", f, !1), p.removeEventListener("touchmove", b, !1));
  }, [b, f, c]);
  return Le(function() {
    if (u) {
      var p = n.current;
      return v(p), function() {
        g(p);
      };
    }
  }, [u, v, g]), function(p) {
    n.current = p;
  };
}
var Ae = ["boxSizing", "height", "overflow", "paddingRight", "position"], Ve = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function De(r) {
  r.cancelable && r.preventDefault();
}
function xe(r) {
  r.stopPropagation();
}
function Oe() {
  var r = this.scrollTop, u = this.scrollHeight, s = r + this.offsetHeight;
  r === 0 ? this.scrollTop = 1 : s === u && (this.scrollTop = r - 1);
}
function Se() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var ye = !!(typeof window < "u" && window.document && window.document.createElement), _ = 0, Y = {
  capture: !1,
  passive: !1
};
function Ut(r) {
  var u = r.isEnabled, s = r.accountForScrollbars, a = s === void 0 ? !0 : s, e = U({}), i = U(null), l = J(function(t) {
    if (ye) {
      var n = document.body, o = n && n.style;
      if (a && Ae.forEach(function(v) {
        var g = o && o[v];
        e.current[v] = g;
      }), a && _ < 1) {
        var c = parseInt(e.current.paddingRight, 10) || 0, f = document.body ? document.body.clientWidth : 0, b = window.innerWidth - f + c || 0;
        Object.keys(Ve).forEach(function(v) {
          var g = Ve[v];
          o && (o[v] = g);
        }), o && (o.paddingRight = "".concat(b, "px"));
      }
      n && Se() && (n.addEventListener("touchmove", De, Y), t && (t.addEventListener("touchstart", Oe, Y), t.addEventListener("touchmove", xe, Y))), _ += 1;
    }
  }, [a]), d = J(function(t) {
    if (ye) {
      var n = document.body, o = n && n.style;
      _ = Math.max(_ - 1, 0), a && _ < 1 && Ae.forEach(function(c) {
        var f = e.current[c];
        o && (o[c] = f);
      }), n && Se() && (n.removeEventListener("touchmove", De, Y), t && (t.removeEventListener("touchstart", Oe, Y), t.removeEventListener("touchmove", xe, Y)));
    }
  }, [a]);
  return Le(function() {
    if (u) {
      var t = i.current;
      return l(t), function() {
        d(t);
      };
    }
  }, [u, l, d]), function(t) {
    i.current = t;
  };
}
function zt() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Qt = function(u) {
  var s = u.target;
  return s.ownerDocument.activeElement && s.ownerDocument.activeElement.blur();
}, _t = process.env.NODE_ENV === "production" ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: zt
};
function jt(r) {
  var u = r.children, s = r.lockEnabled, a = r.captureEnabled, e = a === void 0 ? !0 : a, i = r.onBottomArrive, l = r.onBottomLeave, d = r.onTopArrive, t = r.onTopLeave, n = Yt({
    isEnabled: e,
    onBottomArrive: i,
    onBottomLeave: l,
    onTopArrive: d,
    onTopLeave: t
  }), o = Ut({
    isEnabled: s
  }), c = function(b) {
    n(b), o(b);
  };
  return L(le, null, s && L("div", {
    onClick: Qt,
    css: _t
  }), u(c));
}
function $t() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Kt = process.env.NODE_ENV === "production" ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : {
  name: "5kkxb2-requiredInput-RequiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
  toString: $t
}, qt = function(u) {
  var s = u.name, a = u.onFocus;
  return L("input", {
    required: !0,
    name: s,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: a,
    css: Kt,
    value: "",
    onChange: function() {
    }
  });
}, en = qt;
function pe(r) {
  var u;
  return typeof window < "u" && window.navigator != null ? r.test(((u = window.navigator.userAgentData) === null || u === void 0 ? void 0 : u.platform) || window.navigator.platform) : !1;
}
function tn() {
  return pe(/^iPhone/i);
}
function Ze() {
  return pe(/^Mac/i);
}
function nn() {
  return pe(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Ze() && navigator.maxTouchPoints > 1;
}
function un() {
  return tn() || nn();
}
function an() {
  return Ze() || un();
}
var on = function(u) {
  return u.label;
}, sn = function(u) {
  return u.label;
}, rn = function(u) {
  return u.value;
}, ln = function(u) {
  return !!u.isDisabled;
}, cn = {
  clearIndicator: at,
  container: ot,
  control: st,
  dropdownIndicator: rt,
  group: lt,
  groupHeading: ct,
  indicatorsContainer: dt,
  indicatorSeparator: pt,
  input: ft,
  loadingIndicator: bt,
  loadingMessage: gt,
  menu: vt,
  menuList: mt,
  menuPortal: ht,
  multiValue: It,
  multiValueLabel: Ct,
  multiValueRemove: Et,
  noOptionsMessage: Ft,
  option: At,
  placeholder: Vt,
  singleValue: Dt,
  valueContainer: xt
}, dn = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
}, pn = 4, Xe = 4, fn = 38, bn = Xe * 2, gn = {
  baseUnit: Xe,
  controlHeight: fn,
  menuGutter: bn
}, se = {
  borderRadius: pn,
  colors: dn,
  spacing: gn
}, vn = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: ve(),
  captureMenuScroll: !ve(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: Nt(),
  formatGroupLabel: on,
  getOptionLabel: sn,
  getOptionValue: rn,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: ln,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !Ke(),
  noOptionsMessage: function() {
    return "No options";
  },
  openMenuOnFocus: !1,
  openMenuOnClick: !0,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function(u) {
    var s = u.count;
    return "".concat(s, " result").concat(s !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: !0,
  unstyled: !1
};
function Be(r, u, s, a) {
  var e = He(r, u, s), i = Ne(r, u, s), l = Te(r, u), d = ue(r, u);
  return {
    type: "option",
    data: u,
    isDisabled: e,
    isSelected: i,
    label: l,
    value: d,
    index: a
  };
}
function ne(r, u) {
  return r.options.map(function(s, a) {
    if ("options" in s) {
      var e = s.options.map(function(l, d) {
        return Be(r, l, u, d);
      }).filter(function(l) {
        return Ge(r, l);
      });
      return e.length > 0 ? {
        type: "group",
        data: s,
        options: e,
        index: a
      } : void 0;
    }
    var i = Be(r, s, u, a);
    return Ge(r, i) ? i : void 0;
  }).filter(Ot);
}
function we(r) {
  return r.reduce(function(u, s) {
    return s.type === "group" ? u.push.apply(u, de(s.options.map(function(a) {
      return a.data;
    }))) : u.push(s.data), u;
  }, []);
}
function Me(r, u) {
  return r.reduce(function(s, a) {
    return a.type === "group" ? s.push.apply(s, de(a.options.map(function(e) {
      return {
        data: e.data,
        id: "".concat(u, "-").concat(a.index, "-").concat(e.index)
      };
    }))) : s.push({
      data: a.data,
      id: "".concat(u, "-").concat(a.index)
    }), s;
  }, []);
}
function mn(r, u) {
  return we(ne(r, u));
}
function Ge(r, u) {
  var s = r.inputValue, a = s === void 0 ? "" : s, e = u.data, i = u.isSelected, l = u.label, d = u.value;
  return (!Je(r) || !i) && ke(r, {
    label: l,
    value: d,
    data: e
  }, a);
}
function hn(r, u) {
  var s = r.focusedValue, a = r.selectValue, e = a.indexOf(s);
  if (e > -1) {
    var i = u.indexOf(s);
    if (i > -1)
      return s;
    if (e < u.length)
      return u[e];
  }
  return null;
}
function In(r, u) {
  var s = r.focusedOption;
  return s && u.indexOf(s) > -1 ? s : u[0];
}
var re = function(u, s) {
  var a, e = (a = u.find(function(i) {
    return i.data === s;
  })) === null || a === void 0 ? void 0 : a.id;
  return e || null;
}, Te = function(u, s) {
  return u.getOptionLabel(s);
}, ue = function(u, s) {
  return u.getOptionValue(s);
};
function He(r, u, s) {
  return typeof r.isOptionDisabled == "function" ? r.isOptionDisabled(u, s) : !1;
}
function Ne(r, u, s) {
  if (s.indexOf(u) > -1) return !0;
  if (typeof r.isOptionSelected == "function")
    return r.isOptionSelected(u, s);
  var a = ue(r, u);
  return s.some(function(e) {
    return ue(r, e) === a;
  });
}
function ke(r, u, s) {
  return r.filterOption ? r.filterOption(u, s) : !0;
}
var Je = function(u) {
  var s = u.hideSelectedOptions, a = u.isMulti;
  return s === void 0 ? a : s;
}, Cn = 1, En = /* @__PURE__ */ function(r) {
  _e(s, r);
  var u = je(s);
  function s(a) {
    var e;
    if (ze(this, s), e = u.call(this, a), e.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedOptionId: null,
      focusableOptionsWithIds: [],
      focusedValue: null,
      inputIsHidden: !1,
      isFocused: !1,
      selectValue: [],
      clearFocusValueOnUpdate: !1,
      prevWasFocused: !1,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0,
      instancePrefix: ""
    }, e.blockOptionHover = !1, e.isComposing = !1, e.commonProps = void 0, e.initialTouchX = 0, e.initialTouchY = 0, e.openAfterFocus = !1, e.scrollToFocusedOptionOnUpdate = !1, e.userIsDragging = void 0, e.isAppleDevice = an(), e.controlRef = null, e.getControlRef = function(t) {
      e.controlRef = t;
    }, e.focusedOptionRef = null, e.getFocusedOptionRef = function(t) {
      e.focusedOptionRef = t;
    }, e.menuListRef = null, e.getMenuListRef = function(t) {
      e.menuListRef = t;
    }, e.inputRef = null, e.getInputRef = function(t) {
      e.inputRef = t;
    }, e.focus = e.focusInput, e.blur = e.blurInput, e.onChange = function(t, n) {
      var o = e.props, c = o.onChange, f = o.name;
      n.name = f, e.ariaOnChange(t, n), c(t, n);
    }, e.setValue = function(t, n, o) {
      var c = e.props, f = c.closeMenuOnSelect, b = c.isMulti, v = c.inputValue;
      e.onInputChange("", {
        action: "set-value",
        prevInputValue: v
      }), f && (e.setState({
        inputIsHiddenAfterUpdate: !b
      }), e.onMenuClose()), e.setState({
        clearFocusValueOnUpdate: !0
      }), e.onChange(t, {
        action: n,
        option: o
      });
    }, e.selectOption = function(t) {
      var n = e.props, o = n.blurInputOnSelect, c = n.isMulti, f = n.name, b = e.state.selectValue, v = c && e.isOptionSelected(t, b), g = e.isOptionDisabled(t, b);
      if (v) {
        var p = e.getOptionValue(t);
        e.setValue(me(b.filter(function(m) {
          return e.getOptionValue(m) !== p;
        })), "deselect-option", t);
      } else if (!g)
        c ? e.setValue(me([].concat(de(b), [t])), "select-option", t) : e.setValue(he(t), "select-option");
      else {
        e.ariaOnChange(he(t), {
          action: "select-option",
          option: t,
          name: f
        });
        return;
      }
      o && e.blurInput();
    }, e.removeValue = function(t) {
      var n = e.props.isMulti, o = e.state.selectValue, c = e.getOptionValue(t), f = o.filter(function(v) {
        return e.getOptionValue(v) !== c;
      }), b = te(n, f, f[0] || null);
      e.onChange(b, {
        action: "remove-value",
        removedValue: t
      }), e.focusInput();
    }, e.clearValue = function() {
      var t = e.state.selectValue;
      e.onChange(te(e.props.isMulti, [], null), {
        action: "clear",
        removedValues: t
      });
    }, e.popValue = function() {
      var t = e.props.isMulti, n = e.state.selectValue, o = n[n.length - 1], c = n.slice(0, n.length - 1), f = te(t, c, c[0] || null);
      o && e.onChange(f, {
        action: "pop-value",
        removedValue: o
      });
    }, e.getFocusedOptionId = function(t) {
      return re(e.state.focusableOptionsWithIds, t);
    }, e.getFocusableOptionsWithIds = function() {
      return Me(ne(e.props, e.state.selectValue), e.getElementId("option"));
    }, e.getValue = function() {
      return e.state.selectValue;
    }, e.cx = function() {
      for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
        n[o] = arguments[o];
      return qe.apply(void 0, [e.props.classNamePrefix].concat(n));
    }, e.getOptionLabel = function(t) {
      return Te(e.props, t);
    }, e.getOptionValue = function(t) {
      return ue(e.props, t);
    }, e.getStyles = function(t, n) {
      var o = e.props.unstyled, c = cn[t](n, o);
      c.boxSizing = "border-box";
      var f = e.props.styles[t];
      return f ? f(c, n) : c;
    }, e.getClassNames = function(t, n) {
      var o, c;
      return (o = (c = e.props.classNames)[t]) === null || o === void 0 ? void 0 : o.call(c, n);
    }, e.getElementId = function(t) {
      return "".concat(e.state.instancePrefix, "-").concat(t);
    }, e.getComponents = function() {
      return et(e.props);
    }, e.buildCategorizedOptions = function() {
      return ne(e.props, e.state.selectValue);
    }, e.getCategorizedOptions = function() {
      return e.props.menuIsOpen ? e.buildCategorizedOptions() : [];
    }, e.buildFocusableOptions = function() {
      return we(e.buildCategorizedOptions());
    }, e.getFocusableOptions = function() {
      return e.props.menuIsOpen ? e.buildFocusableOptions() : [];
    }, e.ariaOnChange = function(t, n) {
      e.setState({
        ariaSelection: G({
          value: t
        }, n)
      });
    }, e.onMenuMouseDown = function(t) {
      t.button === 0 && (t.stopPropagation(), t.preventDefault(), e.focusInput());
    }, e.onMenuMouseMove = function(t) {
      e.blockOptionHover = !1;
    }, e.onControlMouseDown = function(t) {
      if (!t.defaultPrevented) {
        var n = e.props.openMenuOnClick;
        e.state.isFocused ? e.props.menuIsOpen ? t.target.tagName !== "INPUT" && t.target.tagName !== "TEXTAREA" && e.onMenuClose() : n && e.openMenu("first") : (n && (e.openAfterFocus = !0), e.focusInput()), t.target.tagName !== "INPUT" && t.target.tagName !== "TEXTAREA" && t.preventDefault();
      }
    }, e.onDropdownIndicatorMouseDown = function(t) {
      if (!(t && t.type === "mousedown" && t.button !== 0) && !e.props.isDisabled) {
        var n = e.props, o = n.isMulti, c = n.menuIsOpen;
        e.focusInput(), c ? (e.setState({
          inputIsHiddenAfterUpdate: !o
        }), e.onMenuClose()) : e.openMenu("first"), t.preventDefault();
      }
    }, e.onClearIndicatorMouseDown = function(t) {
      t && t.type === "mousedown" && t.button !== 0 || (e.clearValue(), t.preventDefault(), e.openAfterFocus = !1, t.type === "touchend" ? e.focusInput() : setTimeout(function() {
        return e.focusInput();
      }));
    }, e.onScroll = function(t) {
      typeof e.props.closeMenuOnScroll == "boolean" ? t.target instanceof HTMLElement && tt(t.target) && e.props.onMenuClose() : typeof e.props.closeMenuOnScroll == "function" && e.props.closeMenuOnScroll(t) && e.props.onMenuClose();
    }, e.onCompositionStart = function() {
      e.isComposing = !0;
    }, e.onCompositionEnd = function() {
      e.isComposing = !1;
    }, e.onTouchStart = function(t) {
      var n = t.touches, o = n && n.item(0);
      o && (e.initialTouchX = o.clientX, e.initialTouchY = o.clientY, e.userIsDragging = !1);
    }, e.onTouchMove = function(t) {
      var n = t.touches, o = n && n.item(0);
      if (o) {
        var c = Math.abs(o.clientX - e.initialTouchX), f = Math.abs(o.clientY - e.initialTouchY), b = 5;
        e.userIsDragging = c > b || f > b;
      }
    }, e.onTouchEnd = function(t) {
      e.userIsDragging || (e.controlRef && !e.controlRef.contains(t.target) && e.menuListRef && !e.menuListRef.contains(t.target) && e.blurInput(), e.initialTouchX = 0, e.initialTouchY = 0);
    }, e.onControlTouchEnd = function(t) {
      e.userIsDragging || e.onControlMouseDown(t);
    }, e.onClearIndicatorTouchEnd = function(t) {
      e.userIsDragging || e.onClearIndicatorMouseDown(t);
    }, e.onDropdownIndicatorTouchEnd = function(t) {
      e.userIsDragging || e.onDropdownIndicatorMouseDown(t);
    }, e.handleInputChange = function(t) {
      var n = e.props.inputValue, o = t.currentTarget.value;
      e.setState({
        inputIsHiddenAfterUpdate: !1
      }), e.onInputChange(o, {
        action: "input-change",
        prevInputValue: n
      }), e.props.menuIsOpen || e.onMenuOpen();
    }, e.onInputFocus = function(t) {
      e.props.onFocus && e.props.onFocus(t), e.setState({
        inputIsHiddenAfterUpdate: !1,
        isFocused: !0
      }), (e.openAfterFocus || e.props.openMenuOnFocus) && e.openMenu("first"), e.openAfterFocus = !1;
    }, e.onInputBlur = function(t) {
      var n = e.props.inputValue;
      if (e.menuListRef && e.menuListRef.contains(document.activeElement)) {
        e.inputRef.focus();
        return;
      }
      e.props.onBlur && e.props.onBlur(t), e.onInputChange("", {
        action: "input-blur",
        prevInputValue: n
      }), e.onMenuClose(), e.setState({
        focusedValue: null,
        isFocused: !1
      });
    }, e.onOptionHover = function(t) {
      if (!(e.blockOptionHover || e.state.focusedOption === t)) {
        var n = e.getFocusableOptions(), o = n.indexOf(t);
        e.setState({
          focusedOption: t,
          focusedOptionId: o > -1 ? e.getFocusedOptionId(t) : null
        });
      }
    }, e.shouldHideSelectedOptions = function() {
      return Je(e.props);
    }, e.onValueInputFocus = function(t) {
      t.preventDefault(), t.stopPropagation(), e.focus();
    }, e.onKeyDown = function(t) {
      var n = e.props, o = n.isMulti, c = n.backspaceRemovesValue, f = n.escapeClearsValue, b = n.inputValue, v = n.isClearable, g = n.isDisabled, p = n.menuIsOpen, m = n.onKeyDown, C = n.tabSelectsValue, F = n.openMenuOnFocus, A = e.state, V = A.focusedOption, O = A.focusedValue, x = A.selectValue;
      if (!g && !(typeof m == "function" && (m(t), t.defaultPrevented))) {
        switch (e.blockOptionHover = !0, t.key) {
          case "ArrowLeft":
            if (!o || b) return;
            e.focusValue("previous");
            break;
          case "ArrowRight":
            if (!o || b) return;
            e.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (b) return;
            if (O)
              e.removeValue(O);
            else {
              if (!c) return;
              o ? e.popValue() : v && e.clearValue();
            }
            break;
          case "Tab":
            if (e.isComposing || t.shiftKey || !p || !C || !V || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            F && e.isOptionSelected(V, x))
              return;
            e.selectOption(V);
            break;
          case "Enter":
            if (t.keyCode === 229)
              break;
            if (p) {
              if (!V || e.isComposing) return;
              e.selectOption(V);
              break;
            }
            return;
          case "Escape":
            p ? (e.setState({
              inputIsHiddenAfterUpdate: !1
            }), e.onInputChange("", {
              action: "menu-close",
              prevInputValue: b
            }), e.onMenuClose()) : v && f && e.clearValue();
            break;
          case " ":
            if (b)
              return;
            if (!p) {
              e.openMenu("first");
              break;
            }
            if (!V) return;
            e.selectOption(V);
            break;
          case "ArrowUp":
            p ? e.focusOption("up") : e.openMenu("last");
            break;
          case "ArrowDown":
            p ? e.focusOption("down") : e.openMenu("first");
            break;
          case "PageUp":
            if (!p) return;
            e.focusOption("pageup");
            break;
          case "PageDown":
            if (!p) return;
            e.focusOption("pagedown");
            break;
          case "Home":
            if (!p) return;
            e.focusOption("first");
            break;
          case "End":
            if (!p) return;
            e.focusOption("last");
            break;
          default:
            return;
        }
        t.preventDefault();
      }
    }, e.state.instancePrefix = "react-select-" + (e.props.instanceId || ++Cn), e.state.selectValue = Ie(a.value), a.menuIsOpen && e.state.selectValue.length) {
      var i = e.getFocusableOptionsWithIds(), l = e.buildFocusableOptions(), d = l.indexOf(e.state.selectValue[0]);
      e.state.focusableOptionsWithIds = i, e.state.focusedOption = l[d], e.state.focusedOptionId = re(i, l[d]);
    }
    return e;
  }
  return Qe(s, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && Ce(this.menuListRef, this.focusedOptionRef);
    }
  }, {
    key: "componentDidUpdate",
    value: function(e) {
      var i = this.props, l = i.isDisabled, d = i.menuIsOpen, t = this.state.isFocused;
      // ensure focus is restored correctly when the control becomes enabled
      (t && !l && e.isDisabled || // ensure focus is on the Input when the menu opens
      t && d && !e.menuIsOpen) && this.focusInput(), t && l && !e.isDisabled ? this.setState({
        isFocused: !1
      }, this.onMenuClose) : !t && !l && e.isDisabled && this.inputRef === document.activeElement && this.setState({
        isFocused: !0
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (Ce(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0);
    }
    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      }), this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function(e, i) {
      this.props.onInputChange(e, i);
    }
    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function() {
      this.inputRef && this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function() {
      this.inputRef && this.inputRef.blur();
    }
    // aliased for consumers
  }, {
    key: "openMenu",
    value: function(e) {
      var i = this, l = this.state, d = l.selectValue, t = l.isFocused, n = this.buildFocusableOptions(), o = e === "first" ? 0 : n.length - 1;
      if (!this.props.isMulti) {
        var c = n.indexOf(d[0]);
        c > -1 && (o = c);
      }
      this.scrollToFocusedOptionOnUpdate = !(t && this.menuListRef), this.setState({
        inputIsHiddenAfterUpdate: !1,
        focusedValue: null,
        focusedOption: n[o],
        focusedOptionId: this.getFocusedOptionId(n[o])
      }, function() {
        return i.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function(e) {
      var i = this.state, l = i.selectValue, d = i.focusedValue;
      if (this.props.isMulti) {
        this.setState({
          focusedOption: null
        });
        var t = l.indexOf(d);
        d || (t = -1);
        var n = l.length - 1, o = -1;
        if (l.length) {
          switch (e) {
            case "previous":
              t === 0 ? o = 0 : t === -1 ? o = n : o = t - 1;
              break;
            case "next":
              t > -1 && t < n && (o = t + 1);
              break;
          }
          this.setState({
            inputIsHidden: o !== -1,
            focusedValue: l[o]
          });
        }
      }
    }
  }, {
    key: "focusOption",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", i = this.props.pageSize, l = this.state.focusedOption, d = this.getFocusableOptions();
      if (d.length) {
        var t = 0, n = d.indexOf(l);
        l || (n = -1), e === "up" ? t = n > 0 ? n - 1 : d.length - 1 : e === "down" ? t = (n + 1) % d.length : e === "pageup" ? (t = n - i, t < 0 && (t = 0)) : e === "pagedown" ? (t = n + i, t > d.length - 1 && (t = d.length - 1)) : e === "last" && (t = d.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
          focusedOption: d[t],
          focusedValue: null,
          focusedOptionId: this.getFocusedOptionId(d[t])
        });
      }
    }
  }, {
    key: "getTheme",
    value: (
      // ==============================
      // Getters
      // ==============================
      function() {
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(se) : G(G({}, se), this.props.theme) : se;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var e = this.clearValue, i = this.cx, l = this.getStyles, d = this.getClassNames, t = this.getValue, n = this.selectOption, o = this.setValue, c = this.props, f = c.isMulti, b = c.isRtl, v = c.options, g = this.hasValue();
      return {
        clearValue: e,
        cx: i,
        getStyles: l,
        getClassNames: d,
        getValue: t,
        hasValue: g,
        isMulti: f,
        isRtl: b,
        options: v,
        selectOption: n,
        selectProps: c,
        setValue: o,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function() {
      var e = this.state.selectValue;
      return e.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function() {
      var e = this.props, i = e.isClearable, l = e.isMulti;
      return i === void 0 ? l : i;
    }
  }, {
    key: "isOptionDisabled",
    value: function(e, i) {
      return He(this.props, e, i);
    }
  }, {
    key: "isOptionSelected",
    value: function(e, i) {
      return Ne(this.props, e, i);
    }
  }, {
    key: "filterOption",
    value: function(e, i) {
      return ke(this.props, e, i);
    }
  }, {
    key: "formatOptionLabel",
    value: function(e, i) {
      if (typeof this.props.formatOptionLabel == "function") {
        var l = this.props.inputValue, d = this.state.selectValue;
        return this.props.formatOptionLabel(e, {
          context: i,
          inputValue: l,
          selectValue: d
        });
      } else
        return this.getOptionLabel(e);
    }
  }, {
    key: "formatGroupLabel",
    value: function(e) {
      return this.props.formatGroupLabel(e);
    }
    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value: (
      // ==============================
      // Composition Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1));
      }
    )
  }, {
    key: "stopListeningComposition",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd));
    }
  }, {
    key: "startListeningToTouch",
    value: (
      // ==============================
      // Touch Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1));
      }
    )
  }, {
    key: "stopListeningToTouch",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd));
    }
  }, {
    key: "renderInput",
    value: (
      // ==============================
      // Renderers
      // ==============================
      function() {
        var e = this.props, i = e.isDisabled, l = e.isSearchable, d = e.inputId, t = e.inputValue, n = e.tabIndex, o = e.form, c = e.menuIsOpen, f = e.required, b = this.getComponents(), v = b.Input, g = this.state, p = g.inputIsHidden, m = g.ariaSelection, C = this.commonProps, F = d || this.getElementId("input"), A = G(G(G({
          "aria-autocomplete": "list",
          "aria-expanded": c,
          "aria-haspopup": !0,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": f,
          role: "combobox",
          "aria-activedescendant": this.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
        }, c && {
          "aria-controls": this.getElementId("listbox")
        }), !l && {
          "aria-readonly": !0
        }), this.hasValue() ? (m == null ? void 0 : m.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return l ? /* @__PURE__ */ h.createElement(v, E({}, C, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: F,
          innerRef: this.getInputRef,
          isDisabled: i,
          isHidden: p,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: n,
          form: o,
          type: "text",
          value: t
        }, A)) : /* @__PURE__ */ h.createElement(Jt, E({
          id: F,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: nt,
          onFocus: this.onInputFocus,
          disabled: i,
          tabIndex: n,
          inputMode: "none",
          form: o,
          value: ""
        }, A));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var e = this, i = this.getComponents(), l = i.MultiValue, d = i.MultiValueContainer, t = i.MultiValueLabel, n = i.MultiValueRemove, o = i.SingleValue, c = i.Placeholder, f = this.commonProps, b = this.props, v = b.controlShouldRenderValue, g = b.isDisabled, p = b.isMulti, m = b.inputValue, C = b.placeholder, F = this.state, A = F.selectValue, V = F.focusedValue, O = F.isFocused;
      if (!this.hasValue() || !v)
        return m ? null : /* @__PURE__ */ h.createElement(c, E({}, f, {
          key: "placeholder",
          isDisabled: g,
          isFocused: O,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), C);
      if (p)
        return A.map(function(I, y) {
          var W = I === V, Z = "".concat(e.getOptionLabel(I), "-").concat(e.getOptionValue(I));
          return /* @__PURE__ */ h.createElement(l, E({}, f, {
            components: {
              Container: d,
              Label: t,
              Remove: n
            },
            isFocused: W,
            isDisabled: g,
            key: Z,
            index: y,
            removeProps: {
              onClick: function() {
                return e.removeValue(I);
              },
              onTouchEnd: function() {
                return e.removeValue(I);
              },
              onMouseDown: function(z) {
                z.preventDefault();
              }
            },
            data: I
          }), e.formatOptionLabel(I, "value"));
        });
      if (m)
        return null;
      var x = A[0];
      return /* @__PURE__ */ h.createElement(o, E({}, f, {
        data: x,
        isDisabled: g
      }), this.formatOptionLabel(x, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function() {
      var e = this.getComponents(), i = e.ClearIndicator, l = this.commonProps, d = this.props, t = d.isDisabled, n = d.isLoading, o = this.state.isFocused;
      if (!this.isClearable() || !i || t || !this.hasValue() || n)
        return null;
      var c = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ h.createElement(i, E({}, l, {
        innerProps: c,
        isFocused: o
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function() {
      var e = this.getComponents(), i = e.LoadingIndicator, l = this.commonProps, d = this.props, t = d.isDisabled, n = d.isLoading, o = this.state.isFocused;
      if (!i || !n) return null;
      var c = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ h.createElement(i, E({}, l, {
        innerProps: c,
        isDisabled: t,
        isFocused: o
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function() {
      var e = this.getComponents(), i = e.DropdownIndicator, l = e.IndicatorSeparator;
      if (!i || !l) return null;
      var d = this.commonProps, t = this.props.isDisabled, n = this.state.isFocused;
      return /* @__PURE__ */ h.createElement(l, E({}, d, {
        isDisabled: t,
        isFocused: n
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function() {
      var e = this.getComponents(), i = e.DropdownIndicator;
      if (!i) return null;
      var l = this.commonProps, d = this.props.isDisabled, t = this.state.isFocused, n = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ h.createElement(i, E({}, l, {
        innerProps: n,
        isDisabled: d,
        isFocused: t
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var e = this, i = this.getComponents(), l = i.Group, d = i.GroupHeading, t = i.Menu, n = i.MenuList, o = i.MenuPortal, c = i.LoadingMessage, f = i.NoOptionsMessage, b = i.Option, v = this.commonProps, g = this.state.focusedOption, p = this.props, m = p.captureMenuScroll, C = p.inputValue, F = p.isLoading, A = p.loadingMessage, V = p.minMenuHeight, O = p.maxMenuHeight, x = p.menuIsOpen, I = p.menuPlacement, y = p.menuPosition, W = p.menuPortalTarget, Z = p.menuShouldBlockScroll, X = p.menuShouldScrollIntoView, z = p.noOptionsMessage, j = p.onMenuScrollToTop, B = p.onMenuScrollToBottom;
      if (!x) return null;
      var S = function(M, w) {
        var N = M.type, R = M.data, k = M.isDisabled, T = M.isSelected, ee = M.label, Pe = M.value, fe = g === R, be = k ? void 0 : function() {
          return e.onOptionHover(R);
        }, Ye = k ? void 0 : function() {
          return e.selectOption(R);
        }, ge = "".concat(e.getElementId("option"), "-").concat(w), Ue = {
          id: ge,
          onClick: Ye,
          onMouseMove: be,
          onMouseOver: be,
          tabIndex: -1,
          role: "option",
          "aria-selected": e.isAppleDevice ? void 0 : T
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ h.createElement(b, E({}, v, {
          innerProps: Ue,
          data: R,
          isDisabled: k,
          isSelected: T,
          key: ge,
          label: ee,
          type: N,
          value: Pe,
          isFocused: fe,
          innerRef: fe ? e.getFocusedOptionRef : void 0
        }), e.formatOptionLabel(M.data, "menu"));
      }, H;
      if (this.hasOptions())
        H = this.getCategorizedOptions().map(function(D) {
          if (D.type === "group") {
            var M = D.data, w = D.options, N = D.index, R = "".concat(e.getElementId("group"), "-").concat(N), k = "".concat(R, "-heading");
            return /* @__PURE__ */ h.createElement(l, E({}, v, {
              key: R,
              data: M,
              options: w,
              Heading: d,
              headingProps: {
                id: k,
                data: D.data
              },
              label: e.formatGroupLabel(D.data)
            }), D.options.map(function(T) {
              return S(T, "".concat(N, "-").concat(T.index));
            }));
          } else if (D.type === "option")
            return S(D, "".concat(D.index));
        });
      else if (F) {
        var P = A({
          inputValue: C
        });
        if (P === null) return null;
        H = /* @__PURE__ */ h.createElement(c, v, P);
      } else {
        var $ = z({
          inputValue: C
        });
        if ($ === null) return null;
        H = /* @__PURE__ */ h.createElement(f, v, $);
      }
      var K = {
        minMenuHeight: V,
        maxMenuHeight: O,
        menuPlacement: I,
        menuPosition: y,
        menuShouldScrollIntoView: X
      }, q = /* @__PURE__ */ h.createElement(ut, E({}, v, K), function(D) {
        var M = D.ref, w = D.placerProps, N = w.placement, R = w.maxHeight;
        return /* @__PURE__ */ h.createElement(t, E({}, v, K, {
          innerRef: M,
          innerProps: {
            onMouseDown: e.onMenuMouseDown,
            onMouseMove: e.onMenuMouseMove
          },
          isLoading: F,
          placement: N
        }), /* @__PURE__ */ h.createElement(jt, {
          captureEnabled: m,
          onTopArrive: j,
          onBottomArrive: B,
          lockEnabled: Z
        }, function(k) {
          return /* @__PURE__ */ h.createElement(n, E({}, v, {
            innerRef: function(ee) {
              e.getMenuListRef(ee), k(ee);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": v.isMulti,
              id: e.getElementId("listbox")
            },
            isLoading: F,
            maxHeight: R,
            focusedOption: g
          }), H);
        }));
      });
      return W || y === "fixed" ? /* @__PURE__ */ h.createElement(o, E({}, v, {
        appendTo: W,
        controlElement: this.controlRef,
        menuPlacement: I,
        menuPosition: y
      }), q) : q;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var e = this, i = this.props, l = i.delimiter, d = i.isDisabled, t = i.isMulti, n = i.name, o = i.required, c = this.state.selectValue;
      if (o && !this.hasValue() && !d)
        return /* @__PURE__ */ h.createElement(en, {
          name: n,
          onFocus: this.onValueInputFocus
        });
      if (!(!n || d))
        if (t)
          if (l) {
            var f = c.map(function(g) {
              return e.getOptionValue(g);
            }).join(l);
            return /* @__PURE__ */ h.createElement("input", {
              name: n,
              type: "hidden",
              value: f
            });
          } else {
            var b = c.length > 0 ? c.map(function(g, p) {
              return /* @__PURE__ */ h.createElement("input", {
                key: "i-".concat(p),
                name: n,
                type: "hidden",
                value: e.getOptionValue(g)
              });
            }) : /* @__PURE__ */ h.createElement("input", {
              name: n,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ h.createElement("div", null, b);
          }
        else {
          var v = c[0] ? this.getOptionValue(c[0]) : "";
          return /* @__PURE__ */ h.createElement("input", {
            name: n,
            type: "hidden",
            value: v
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var e = this.commonProps, i = this.state, l = i.ariaSelection, d = i.focusedOption, t = i.focusedValue, n = i.isFocused, o = i.selectValue, c = this.getFocusableOptions();
      return /* @__PURE__ */ h.createElement(Xt, E({}, e, {
        id: this.getElementId("live-region"),
        ariaSelection: l,
        focusedOption: d,
        focusedValue: t,
        isFocused: n,
        selectValue: o,
        focusableOptions: c,
        isAppleDevice: this.isAppleDevice
      }));
    }
  }, {
    key: "render",
    value: function() {
      var e = this.getComponents(), i = e.Control, l = e.IndicatorsContainer, d = e.SelectContainer, t = e.ValueContainer, n = this.props, o = n.className, c = n.id, f = n.isDisabled, b = n.menuIsOpen, v = this.state.isFocused, g = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ h.createElement(d, E({}, g, {
        className: o,
        innerProps: {
          id: c,
          onKeyDown: this.onKeyDown
        },
        isDisabled: f,
        isFocused: v
      }), this.renderLiveRegion(), /* @__PURE__ */ h.createElement(i, E({}, g, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: f,
        isFocused: v,
        menuIsOpen: b
      }), /* @__PURE__ */ h.createElement(t, E({}, g, {
        isDisabled: f
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ h.createElement(l, E({}, g, {
        isDisabled: f
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(e, i) {
      var l = i.prevProps, d = i.clearFocusValueOnUpdate, t = i.inputIsHiddenAfterUpdate, n = i.ariaSelection, o = i.isFocused, c = i.prevWasFocused, f = i.instancePrefix, b = e.options, v = e.value, g = e.menuIsOpen, p = e.inputValue, m = e.isMulti, C = Ie(v), F = {};
      if (l && (v !== l.value || b !== l.options || g !== l.menuIsOpen || p !== l.inputValue)) {
        var A = g ? mn(e, C) : [], V = g ? Me(ne(e, C), "".concat(f, "-option")) : [], O = d ? hn(i, C) : null, x = In(i, A), I = re(V, x);
        F = {
          selectValue: C,
          focusedOption: x,
          focusedOptionId: I,
          focusableOptionsWithIds: V,
          focusedValue: O,
          clearFocusValueOnUpdate: !1
        };
      }
      var y = t != null && e !== l ? {
        inputIsHidden: t,
        inputIsHiddenAfterUpdate: void 0
      } : {}, W = n, Z = o && c;
      return o && !Z && (W = {
        value: te(m, C, C[0] || null),
        options: C,
        action: "initial-input-focus"
      }, Z = !c), (n == null ? void 0 : n.action) === "initial-input-focus" && (W = null), G(G(G({}, F), y), {}, {
        prevProps: e,
        ariaSelection: W,
        prevWasFocused: Z
      });
    }
  }]), s;
}($e);
En.defaultProps = vn;
export {
  En as S,
  vn as a,
  sn as b,
  Nt as c,
  se as d,
  rn as g
};
