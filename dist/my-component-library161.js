import { __awaiter as f, __generator as s, __spreadArray as v, __read as y } from "./my-component-library218.js";
import { toFileWithPath as a } from "./my-component-library237.js";
var w = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function x(r) {
  return f(this, void 0, void 0, function() {
    return s(this, function(n) {
      return l(r) && _(r.dataTransfer) ? [2, I(r.dataTransfer, r.type)] : A(r) ? [2, D(r)] : Array.isArray(r) && r.every(function(t) {
        return "getFile" in t && typeof t.getFile == "function";
      }) ? [2, T(r)] : [2, []];
    });
  });
}
function _(r) {
  return l(r);
}
function A(r) {
  return l(r) && l(r.target);
}
function l(r) {
  return typeof r == "object" && r !== null;
}
function D(r) {
  return d(r.target.files).map(function(n) {
    return a(n);
  });
}
function T(r) {
  return f(this, void 0, void 0, function() {
    var n;
    return s(this, function(t) {
      switch (t.label) {
        case 0:
          return [4, Promise.all(r.map(function(e) {
            return e.getFile();
          }))];
        case 1:
          return n = t.sent(), [2, n.map(function(e) {
            return a(e);
          })];
      }
    });
  });
}
function I(r, n) {
  return f(this, void 0, void 0, function() {
    var t, e;
    return s(this, function(i) {
      switch (i.label) {
        case 0:
          return r.items ? (t = d(r.items).filter(function(u) {
            return u.kind === "file";
          }), n !== "drop" ? [2, t] : [4, Promise.all(t.map(O))]) : [3, 2];
        case 1:
          return e = i.sent(), [2, g(E(e))];
        case 2:
          return [2, g(d(r.files).map(function(u) {
            return a(u);
          }))];
      }
    });
  });
}
function g(r) {
  return r.filter(function(n) {
    return w.indexOf(n.name) === -1;
  });
}
function d(r) {
  if (r === null)
    return [];
  for (var n = [], t = 0; t < r.length; t++) {
    var e = r[t];
    n.push(e);
  }
  return n;
}
function O(r) {
  if (typeof r.webkitGetAsEntry != "function")
    return F(r);
  var n = r.webkitGetAsEntry();
  return n && n.isDirectory ? P(n) : F(r);
}
function E(r) {
  return r.reduce(function(n, t) {
    return v(v([], y(n), !1), y(Array.isArray(t) ? E(t) : [t]), !1);
  }, []);
}
function F(r) {
  var n = r.getAsFile();
  if (!n)
    return Promise.reject("".concat(r, " is not a File"));
  var t = a(n);
  return Promise.resolve(t);
}
function k(r) {
  return f(this, void 0, void 0, function() {
    return s(this, function(n) {
      return [2, r.isDirectory ? P(r) : G(r)];
    });
  });
}
function P(r) {
  var n = r.createReader();
  return new Promise(function(t, e) {
    var i = [];
    function u() {
      var b = this;
      n.readEntries(function(c) {
        return f(b, void 0, void 0, function() {
          var h, m, p;
          return s(this, function(o) {
            switch (o.label) {
              case 0:
                if (c.length) return [3, 5];
                o.label = 1;
              case 1:
                return o.trys.push([1, 3, , 4]), [4, Promise.all(i)];
              case 2:
                return h = o.sent(), t(h), [3, 4];
              case 3:
                return m = o.sent(), e(m), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                p = Promise.all(c.map(k)), i.push(p), u(), o.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(c) {
        e(c);
      });
    }
    u();
  });
}
function G(r) {
  return f(this, void 0, void 0, function() {
    return s(this, function(n) {
      return [2, new Promise(function(t, e) {
        r.file(function(i) {
          var u = a(i, r.fullPath);
          t(u);
        }, function(i) {
          e(i);
        });
      })];
    });
  });
}
export {
  x as fromEvent
};
