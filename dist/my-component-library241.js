import { __spreadArray as x } from "./my-component-library218.js";
import * as n from "react";
import { RemoveScrollBar as A } from "./my-component-library251.js";
import { styleSingleton as I } from "./my-component-library252.js";
import { nonPassive as s } from "./my-component-library253.js";
import { locationCouldBeScrolled as T, handleScroll as W } from "./my-component-library254.js";
var b = function(t) {
  return "changedTouches" in t ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY] : [0, 0];
}, Y = function(t) {
  return [t.deltaX, t.deltaY];
}, B = function(t) {
  return t && "current" in t ? t.current : t;
}, p = function(t, c) {
  return t[0] === c[0] && t[1] === c[1];
}, F = function(t) {
  return `
  .block-interactivity-`.concat(t, ` {pointer-events: none;}
  .allow-interactivity-`).concat(t, ` {pointer-events: all;}
`);
}, K = 0, f = [];
function z(t) {
  var c = n.useRef([]), E = n.useRef([0, 0]), d = n.useRef(), h = n.useState(K++)[0], m = n.useState(I)[0], g = n.useRef(t);
  n.useEffect(function() {
    g.current = t;
  }, [t]), n.useEffect(function() {
    if (t.inert) {
      document.body.classList.add("block-interactivity-".concat(h));
      var e = x([t.lockRef.current], (t.shards || []).map(B), !0).filter(Boolean);
      return e.forEach(function(r) {
        return r.classList.add("allow-interactivity-".concat(h));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(h)), e.forEach(function(r) {
          return r.classList.remove("allow-interactivity-".concat(h));
        });
      };
    }
  }, [t.inert, t.lockRef.current, t.shards]);
  var k = n.useCallback(function(e, r) {
    if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey)
      return !g.current.allowPinchZoom;
    var l = b(e), o = E.current, u = "deltaX" in e ? e.deltaX : o[0] - l[0], i = "deltaY" in e ? e.deltaY : o[1] - l[1], a, C = e.target, v = Math.abs(u) > Math.abs(i) ? "h" : "v";
    if ("touches" in e && v === "h" && C.type === "range")
      return !1;
    var y = T(v, C);
    if (!y)
      return !0;
    if (y ? a = v : (a = v === "v" ? "h" : "v", y = T(v, C)), !y)
      return !1;
    if (!d.current && "changedTouches" in e && (u || i) && (d.current = a), !a)
      return !0;
    var P = d.current || a;
    return W(P, r, e, P === "h" ? u : i, !0);
  }, []), S = n.useCallback(function(e) {
    var r = e;
    if (!(!f.length || f[f.length - 1] !== m)) {
      var l = "deltaY" in r ? Y(r) : b(r), o = c.current.filter(function(a) {
        return a.name === r.type && (a.target === r.target || r.target === a.shadowParent) && p(a.delta, l);
      })[0];
      if (o && o.should) {
        r.cancelable && r.preventDefault();
        return;
      }
      if (!o) {
        var u = (g.current.shards || []).map(B).filter(Boolean).filter(function(a) {
          return a.contains(r.target);
        }), i = u.length > 0 ? k(r, u[0]) : !g.current.noIsolation;
        i && r.cancelable && r.preventDefault();
      }
    }
  }, []), R = n.useCallback(function(e, r, l, o) {
    var u = { name: e, delta: r, target: l, should: o, shadowParent: O(l) };
    c.current.push(u), setTimeout(function() {
      c.current = c.current.filter(function(i) {
        return i !== u;
      });
    }, 1);
  }, []), w = n.useCallback(function(e) {
    E.current = b(e), d.current = void 0;
  }, []), L = n.useCallback(function(e) {
    R(e.type, Y(e), e.target, k(e, t.lockRef.current));
  }, []), M = n.useCallback(function(e) {
    R(e.type, b(e), e.target, k(e, t.lockRef.current));
  }, []);
  n.useEffect(function() {
    return f.push(m), t.setCallbacks({
      onScrollCapture: L,
      onWheelCapture: L,
      onTouchMoveCapture: M
    }), document.addEventListener("wheel", S, s), document.addEventListener("touchmove", S, s), document.addEventListener("touchstart", w, s), function() {
      f = f.filter(function(e) {
        return e !== m;
      }), document.removeEventListener("wheel", S, s), document.removeEventListener("touchmove", S, s), document.removeEventListener("touchstart", w, s);
    };
  }, []);
  var X = t.removeScrollBar, D = t.inert;
  return n.createElement(
    n.Fragment,
    null,
    D ? n.createElement(m, { styles: F(h) }) : null,
    X ? n.createElement(A, { gapMode: t.gapMode }) : null
  );
}
function O(t) {
  for (var c = null; t !== null; )
    t instanceof ShadowRoot && (c = t.host, t = t.host), t = t.parentNode;
  return c;
}
export {
  z as RemoveScrollSideCar,
  Y as getDeltaXY,
  b as getTouchXY
};
