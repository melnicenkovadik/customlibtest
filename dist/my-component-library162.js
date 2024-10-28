import s from "./my-component-library217.js";
function d(e) {
  return R(e) || F(e) || E(e) || P();
}
function P() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function F(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function R(e) {
  if (Array.isArray(e)) return p(e);
}
function y(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function m(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? y(Object(t), !0).forEach(function(n) {
      O(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function O(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function f(e, r) {
  return D(e) || L(e, r) || E(e, r) || x();
}
function x() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function E(e, r) {
  if (e) {
    if (typeof e == "string") return p(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return p(e, r);
  }
}
function p(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function L(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], o = !0, a = !1, i, u;
    try {
      for (t = t.call(e); !(o = (i = t.next()).done) && (n.push(i.value), !(r && n.length === r)); o = !0)
        ;
    } catch (l) {
      a = !0, u = l;
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (a) throw u;
      }
    }
    return n;
  }
}
function D(e) {
  if (Array.isArray(e)) return e;
}
var C = typeof s == "function" ? s : s.default, H = "file-invalid-type", z = "file-too-large", B = "file-too-small", N = "too-many-files", U = function(r) {
  r = Array.isArray(r) && r.length === 1 ? r[0] : r;
  var t = Array.isArray(r) ? "one of ".concat(r.join(", ")) : r;
  return {
    code: H,
    message: "File type must be ".concat(t)
  };
}, g = function(r) {
  return {
    code: z,
    message: "File is larger than ".concat(r, " ").concat(r === 1 ? "byte" : "bytes")
  };
}, b = function(r) {
  return {
    code: B,
    message: "File is smaller than ".concat(r, " ").concat(r === 1 ? "byte" : "bytes")
  };
}, K = {
  code: N,
  message: "Too many files"
};
function W(e, r) {
  var t = e.type === "application/x-moz-file" || C(e, r);
  return [t, t ? null : U(r)];
}
function Y(e, r, t) {
  if (c(e.size))
    if (c(r) && c(t)) {
      if (e.size > t) return [!1, g(t)];
      if (e.size < r) return [!1, b(r)];
    } else {
      if (c(r) && e.size < r) return [!1, b(r)];
      if (c(t) && e.size > t) return [!1, g(t)];
    }
  return [!0, null];
}
function c(e) {
  return e != null;
}
function V(e) {
  var r = e.files, t = e.accept, n = e.minSize, o = e.maxSize, a = e.multiple, i = e.maxFiles, u = e.validator;
  return !a && r.length > 1 || a && i >= 1 && r.length > i ? !1 : r.every(function(l) {
    var T = W(l, t), _ = f(T, 1), w = _[0], I = Y(l, n, o), S = f(I, 1), j = S[0], M = u ? u(l) : null;
    return w && j && !M;
  });
}
function A(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function k(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(r) {
    return r === "Files" || r === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function q(e) {
  e.preventDefault();
}
function $(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function G(e) {
  return e.indexOf("Edge/") !== -1;
}
function Q() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return $(e) || G(e);
}
function X() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return function(n) {
    for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
      a[i - 1] = arguments[i];
    return r.some(function(u) {
      return !A(n) && u && u.apply(void 0, [n].concat(a)), A(n);
    });
  };
}
function Z() {
  return "showOpenFilePicker" in window;
}
function ee(e) {
  if (c(e)) {
    var r = Object.entries(e).filter(function(t) {
      var n = f(t, 2), o = n[0], a = n[1], i = !0;
      return v(o) || (console.warn('Skipped "'.concat(o, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), i = !1), (!Array.isArray(a) || !a.every(h)) && (console.warn('Skipped "'.concat(o, '" because an invalid file extension was provided.')), i = !1), i;
    }).reduce(function(t, n) {
      var o = f(n, 2), a = o[0], i = o[1];
      return m(m({}, t), {}, O({}, a, i));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: r
    }];
  }
  return e;
}
function re(e) {
  if (c(e))
    return Object.entries(e).reduce(function(r, t) {
      var n = f(t, 2), o = n[0], a = n[1];
      return [].concat(d(r), [o], d(a));
    }, []).filter(function(r) {
      return v(r) || h(r);
    }).join(",");
}
function te(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function ne(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function v(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || /\w+\/[-+.\w]+/g.test(e);
}
function h(e) {
  return /^.*\.[\w]+$/.test(e);
}
export {
  H as FILE_INVALID_TYPE,
  z as FILE_TOO_LARGE,
  B as FILE_TOO_SMALL,
  N as TOO_MANY_FILES,
  K as TOO_MANY_FILES_REJECTION,
  re as acceptPropAsAcceptAttr,
  V as allFilesAccepted,
  Z as canUseFileSystemAccessAPI,
  X as composeEventHandlers,
  W as fileAccepted,
  Y as fileMatchSize,
  U as getInvalidTypeRejectionErr,
  g as getTooLargeRejectionErr,
  b as getTooSmallRejectionErr,
  te as isAbort,
  k as isEvtWithFiles,
  h as isExt,
  Q as isIeOrEdge,
  v as isMIMEType,
  A as isPropagationStopped,
  ne as isSecurityError,
  q as onDocumentDragOver,
  ee as pickerOptionsFromAccept
};
