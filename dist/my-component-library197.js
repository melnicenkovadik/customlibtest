function c(l, i) {
  var t = l == null ? null : typeof Symbol < "u" && l[Symbol.iterator] || l["@@iterator"];
  if (t != null) {
    var a, u, o, e, n = [], r = !0, f = !1;
    try {
      if (o = (t = t.call(l)).next, i === 0) {
        if (Object(t) !== t) return;
        r = !1;
      } else for (; !(r = (a = o.call(t)).done) && (n.push(a.value), n.length !== i); r = !0) ;
    } catch (y) {
      f = !0, u = y;
    } finally {
      try {
        if (!r && t.return != null && (e = t.return(), Object(e) !== e)) return;
      } finally {
        if (f) throw u;
      }
    }
    return n;
  }
}
export {
  c as default
};
