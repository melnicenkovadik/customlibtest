var f = function(a, t) {
  if (a && t) {
    var e = Array.isArray(t) ? t : t.split(",");
    if (e.length === 0)
      return !0;
    var u = a.name || "", n = (a.type || "").toLowerCase(), o = n.replace(/\/.*$/, "");
    return e.some(function(v) {
      var r = v.trim().toLowerCase();
      return r.charAt(0) === "." ? u.toLowerCase().endsWith(r) : r.endsWith("/*") ? o === r.replace(/\/.*$/, "") : n === r;
    });
  }
  return !0;
};
export {
  f as default
};
