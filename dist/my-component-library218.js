var y = function() {
  return y = Object.assign || function(o) {
    for (var r, t = 1, a = arguments.length; t < a; t++) {
      r = arguments[t];
      for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (o[e] = r[e]);
    }
    return o;
  }, y.apply(this, arguments);
};
function b(l, o) {
  var r = {};
  for (var t in l) Object.prototype.hasOwnProperty.call(l, t) && o.indexOf(t) < 0 && (r[t] = l[t]);
  if (l != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, t = Object.getOwnPropertySymbols(l); a < t.length; a++)
      o.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(l, t[a]) && (r[t[a]] = l[t[a]]);
  return r;
}
function h(l, o, r, t) {
  function a(e) {
    return e instanceof r ? e : new r(function(c) {
      c(e);
    });
  }
  return new (r || (r = Promise))(function(e, c) {
    function i(u) {
      try {
        n(t.next(u));
      } catch (s) {
        c(s);
      }
    }
    function f(u) {
      try {
        n(t.throw(u));
      } catch (s) {
        c(s);
      }
    }
    function n(u) {
      u.done ? e(u.value) : a(u.value).then(i, f);
    }
    n((t = t.apply(l, o || [])).next());
  });
}
function p(l, o) {
  var r = { label: 0, sent: function() {
    if (e[0] & 1) throw e[1];
    return e[1];
  }, trys: [], ops: [] }, t, a, e, c = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return c.next = i(0), c.throw = i(1), c.return = i(2), typeof Symbol == "function" && (c[Symbol.iterator] = function() {
    return this;
  }), c;
  function i(n) {
    return function(u) {
      return f([n, u]);
    };
  }
  function f(n) {
    if (t) throw new TypeError("Generator is already executing.");
    for (; c && (c = 0, n[0] && (r = 0)), r; ) try {
      if (t = 1, a && (e = n[0] & 2 ? a.return : n[0] ? a.throw || ((e = a.return) && e.call(a), 0) : a.next) && !(e = e.call(a, n[1])).done) return e;
      switch (a = 0, e && (n = [n[0] & 2, e.value]), n[0]) {
        case 0:
        case 1:
          e = n;
          break;
        case 4:
          return r.label++, { value: n[1], done: !1 };
        case 5:
          r.label++, a = n[1], n = [0];
          continue;
        case 7:
          n = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (e = r.trys, !(e = e.length > 0 && e[e.length - 1]) && (n[0] === 6 || n[0] === 2)) {
            r = 0;
            continue;
          }
          if (n[0] === 3 && (!e || n[1] > e[0] && n[1] < e[3])) {
            r.label = n[1];
            break;
          }
          if (n[0] === 6 && r.label < e[1]) {
            r.label = e[1], e = n;
            break;
          }
          if (e && r.label < e[2]) {
            r.label = e[2], r.ops.push(n);
            break;
          }
          e[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      n = o.call(l, r);
    } catch (u) {
      n = [6, u], a = 0;
    } finally {
      t = e = 0;
    }
    if (n[0] & 5) throw n[1];
    return { value: n[0] ? n[1] : void 0, done: !0 };
  }
}
function d(l, o) {
  var r = typeof Symbol == "function" && l[Symbol.iterator];
  if (!r) return l;
  var t = r.call(l), a, e = [], c;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = t.next()).done; ) e.push(a.value);
  } catch (i) {
    c = { error: i };
  } finally {
    try {
      a && !a.done && (r = t.return) && r.call(t);
    } finally {
      if (c) throw c.error;
    }
  }
  return e;
}
function w(l, o, r) {
  if (r || arguments.length === 2) for (var t = 0, a = o.length, e; t < a; t++)
    (e || !(t in o)) && (e || (e = Array.prototype.slice.call(o, 0, t)), e[t] = o[t]);
  return l.concat(e || Array.prototype.slice.call(o));
}
export {
  y as __assign,
  h as __awaiter,
  p as __generator,
  d as __read,
  b as __rest,
  w as __spreadArray
};
