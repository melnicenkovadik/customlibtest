function c() {
  return typeof window < "u";
}
function f(n) {
  return p(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function i(n) {
  var t;
  return (n == null || (t = n.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function E(n) {
  var t;
  return (t = (p(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : t.documentElement;
}
function p(n) {
  return c() ? n instanceof Node || n instanceof i(n).Node : !1;
}
function m(n) {
  return c() ? n instanceof Element || n instanceof i(n).Element : !1;
}
function w(n) {
  return c() ? n instanceof HTMLElement || n instanceof i(n).HTMLElement : !1;
}
function a(n) {
  return !c() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof i(n).ShadowRoot;
}
function y(n) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: o,
    display: r
  } = b(n);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + e) && !["inline", "contents"].includes(r);
}
function D(n) {
  return ["table", "td", "th"].includes(f(n));
}
function N(n) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return n.matches(t);
    } catch {
      return !1;
    }
  });
}
function T(n) {
  const t = v(), e = m(n) ? b(n) : n;
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (e.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (e.contain || "").includes(o));
}
function k(n) {
  let t = l(n);
  for (; w(t) && !g(t); ) {
    if (T(t))
      return t;
    if (N(t))
      return null;
    t = l(t);
  }
  return null;
}
function v() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function g(n) {
  return ["html", "body", "#document"].includes(f(n));
}
function b(n) {
  return i(n).getComputedStyle(n);
}
function C(n) {
  return m(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.scrollX,
    scrollTop: n.scrollY
  };
}
function l(n) {
  if (f(n) === "html")
    return n;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    a(n) && n.host || // Fallback.
    E(n)
  );
  return a(t) ? t.host : t;
}
function h(n) {
  const t = l(n);
  return g(t) ? n.ownerDocument ? n.ownerDocument.body : n.body : w(t) && y(t) ? t : h(t);
}
function d(n, t, e) {
  var o;
  t === void 0 && (t = []), e === void 0 && (e = !0);
  const r = h(n), S = r === ((o = n.ownerDocument) == null ? void 0 : o.body), u = i(r);
  if (S) {
    const s = L(u);
    return t.concat(u, u.visualViewport || [], y(r) ? r : [], s && e ? d(s) : []);
  }
  return t.concat(r, d(r, [], e));
}
function L(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
export {
  b as getComputedStyle,
  k as getContainingBlock,
  E as getDocumentElement,
  L as getFrameElement,
  h as getNearestOverflowAncestor,
  f as getNodeName,
  C as getNodeScroll,
  d as getOverflowAncestors,
  l as getParentNode,
  i as getWindow,
  T as isContainingBlock,
  m as isElement,
  w as isHTMLElement,
  g as isLastTraversableNode,
  p as isNode,
  y as isOverflowElement,
  a as isShadowRoot,
  D as isTableElement,
  N as isTopLayer,
  v as isWebKit
};
