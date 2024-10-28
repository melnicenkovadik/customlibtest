import Me, { useMemo as w, useRef as T, useReducer as Ne, useEffect as ue, useCallback as m, forwardRef as $e, useImperativeHandle as Ue, Fragment as qe } from "react";
import a from "./my-component-library160.js";
import { fromEvent as Je } from "./my-component-library161.js";
import { acceptPropAsAcceptAttr as Ye, pickerOptionsFromAccept as Ge, canUseFileSystemAccessAPI as Qe, onDocumentDragOver as je, isEvtWithFiles as H, isPropagationStopped as Re, allFilesAccepted as Ve, fileAccepted as Xe, fileMatchSize as Ze, TOO_MANY_FILES_REJECTION as er, isAbort as rr, isSecurityError as nr, isIeOrEdge as tr, composeEventHandlers as y } from "./my-component-library162.js";
var or = ["children"], ir = ["open"], ar = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], cr = ["refKey", "onChange", "onClick"];
function ur(e) {
  return fr(e) || sr(e) || xe(e) || lr();
}
function lr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sr(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function fr(e) {
  if (Array.isArray(e)) return se(e);
}
function le(e, n) {
  return dr(e) || gr(e, n) || xe(e, n) || pr();
}
function pr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xe(e, n) {
  if (e) {
    if (typeof e == "string") return se(e, n);
    var o = Object.prototype.toString.call(e).slice(8, -1);
    if (o === "Object" && e.constructor && (o = e.constructor.name), o === "Map" || o === "Set") return Array.from(e);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return se(e, n);
  }
}
function se(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var o = 0, i = new Array(n); o < n; o++)
    i[o] = e[o];
  return i;
}
function gr(e, n) {
  var o = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (o != null) {
    var i = [], c = !0, s = !1, b, D;
    try {
      for (o = o.call(e); !(c = (b = o.next()).done) && (i.push(b.value), !(n && i.length === n)); c = !0)
        ;
    } catch (F) {
      s = !0, D = F;
    } finally {
      try {
        !c && o.return != null && o.return();
      } finally {
        if (s) throw D;
      }
    }
    return i;
  }
}
function dr(e) {
  if (Array.isArray(e)) return e;
}
function ke(e, n) {
  var o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    n && (i = i.filter(function(c) {
      return Object.getOwnPropertyDescriptor(e, c).enumerable;
    })), o.push.apply(o, i);
  }
  return o;
}
function u(e) {
  for (var n = 1; n < arguments.length; n++) {
    var o = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ke(Object(o), !0).forEach(function(i) {
      fe(e, i, o[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : ke(Object(o)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(o, i));
    });
  }
  return e;
}
function fe(e, n, o) {
  return n in e ? Object.defineProperty(e, n, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = o, e;
}
function B(e, n) {
  if (e == null) return {};
  var o = Dr(e, n), i, c;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (c = 0; c < s.length; c++)
      i = s[c], !(n.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (o[i] = e[i]);
  }
  return o;
}
function Dr(e, n) {
  if (e == null) return {};
  var o = {}, i = Object.keys(e), c, s;
  for (s = 0; s < i.length; s++)
    c = i[s], !(n.indexOf(c) >= 0) && (o[c] = e[c]);
  return o;
}
var ge = /* @__PURE__ */ $e(function(e, n) {
  var o = e.children, i = B(e, or), c = vr(i), s = c.open, b = B(c, ir);
  return Ue(n, function() {
    return {
      open: s
    };
  }, [s]), /* @__PURE__ */ Me.createElement(qe, null, o(u(u({}, b), {}, {
    open: s
  })));
});
ge.displayName = "Dropzone";
var ze = {
  disabled: !1,
  getFilesFromEvent: Je,
  maxSize: 1 / 0,
  minSize: 0,
  multiple: !0,
  maxFiles: 0,
  preventDropOnDocument: !0,
  noClick: !1,
  noKeyboard: !1,
  noDrag: !1,
  noDragEventsBubbling: !1,
  validator: null,
  useFsAccessApi: !1,
  autoFocus: !1
};
ge.defaultProps = ze;
ge.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: a.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: a.objectOf(a.arrayOf(a.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: a.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: a.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: a.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: a.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: a.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: a.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: a.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: a.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: a.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: a.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: a.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: a.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: a.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: a.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: a.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: a.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: a.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: a.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: a.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: a.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: a.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: a.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: a.func
};
var pe = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function vr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = u(u({}, ze), e), o = n.accept, i = n.disabled, c = n.getFilesFromEvent, s = n.maxSize, b = n.minSize, D = n.multiple, F = n.maxFiles, W = n.onDragEnter, M = n.onDragLeave, N = n.onDragOver, $ = n.onDrop, U = n.onDropAccepted, q = n.onDropRejected, J = n.onFileDialogCancel, Y = n.onFileDialogOpen, de = n.useFsAccessApi, De = n.autoFocus, G = n.preventDropOnDocument, ve = n.noClick, Q = n.noKeyboard, me = n.noDrag, h = n.noDragEventsBubbling, V = n.onError, P = n.validator, S = w(function() {
    return Ye(o);
  }, [o]), ye = w(function() {
    return Ge(o);
  }, [o]), X = w(function() {
    return typeof Y == "function" ? Y : Ie;
  }, [Y]), R = w(function() {
    return typeof J == "function" ? J : Ie;
  }, [J]), p = T(null), v = T(null), Ke = Ne(mr, pe), be = le(Ke, 2), Z = be[0], g = be[1], Le = Z.isFocused, Fe = Z.isFileDialogActive, k = T(typeof window < "u" && window.isSecureContext && de && Qe()), he = function() {
    !k.current && Fe && setTimeout(function() {
      if (v.current) {
        var t = v.current.files;
        t.length || (g({
          type: "closeDialog"
        }), R());
      }
    }, 300);
  };
  ue(function() {
    return window.addEventListener("focus", he, !1), function() {
      window.removeEventListener("focus", he, !1);
    };
  }, [v, Fe, R, k]);
  var O = T([]), Ae = function(t) {
    p.current && p.current.contains(t.target) || (t.preventDefault(), O.current = []);
  };
  ue(function() {
    return G && (document.addEventListener("dragover", je, !1), document.addEventListener("drop", Ae, !1)), function() {
      G && (document.removeEventListener("dragover", je), document.removeEventListener("drop", Ae));
    };
  }, [p, G]), ue(function() {
    return !i && De && p.current && p.current.focus(), function() {
    };
  }, [p, De, i]);
  var A = m(function(r) {
    V ? V(r) : console.error(r);
  }, [V]), Oe = m(function(r) {
    r.preventDefault(), r.persist(), K(r), O.current = [].concat(ur(O.current), [r.target]), H(r) && Promise.resolve(c(r)).then(function(t) {
      if (!(Re(r) && !h)) {
        var l = t.length, f = l > 0 && Ve({
          files: t,
          accept: S,
          minSize: b,
          maxSize: s,
          multiple: D,
          maxFiles: F,
          validator: P
        }), d = l > 0 && !f;
        g({
          isDragAccept: f,
          isDragReject: d,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), W && W(r);
      }
    }).catch(function(t) {
      return A(t);
    });
  }, [c, W, A, h, S, b, s, D, F, P]), Ee = m(function(r) {
    r.preventDefault(), r.persist(), K(r);
    var t = H(r);
    if (t && r.dataTransfer)
      try {
        r.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return t && N && N(r), !1;
  }, [N, h]), _e = m(function(r) {
    r.preventDefault(), r.persist(), K(r);
    var t = O.current.filter(function(f) {
      return p.current && p.current.contains(f);
    }), l = t.indexOf(r.target);
    l !== -1 && t.splice(l, 1), O.current = t, !(t.length > 0) && (g({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), H(r) && M && M(r));
  }, [p, M, h]), I = m(function(r, t) {
    var l = [], f = [];
    r.forEach(function(d) {
      var j = Xe(d, S), C = le(j, 2), re = C[0], ne = C[1], te = Ze(d, b, s), L = le(te, 2), oe = L[0], ie = L[1], ae = P ? P(d) : null;
      if (re && oe && !ae)
        l.push(d);
      else {
        var ce = [ne, ie];
        ae && (ce = ce.concat(ae)), f.push({
          file: d,
          errors: ce.filter(function(We) {
            return We;
          })
        });
      }
    }), (!D && l.length > 1 || D && F >= 1 && l.length > F) && (l.forEach(function(d) {
      f.push({
        file: d,
        errors: [er]
      });
    }), l.splice(0)), g({
      acceptedFiles: l,
      fileRejections: f,
      type: "setFiles"
    }), $ && $(l, f, t), f.length > 0 && q && q(f, t), l.length > 0 && U && U(l, t);
  }, [g, D, S, b, s, F, $, U, q, P]), x = m(function(r) {
    r.preventDefault(), r.persist(), K(r), O.current = [], H(r) && Promise.resolve(c(r)).then(function(t) {
      Re(r) && !h || I(t, r);
    }).catch(function(t) {
      return A(t);
    }), g({
      type: "reset"
    });
  }, [c, I, A, h]), E = m(function() {
    if (k.current) {
      g({
        type: "openDialog"
      }), X();
      var r = {
        multiple: D,
        types: ye
      };
      window.showOpenFilePicker(r).then(function(t) {
        return c(t);
      }).then(function(t) {
        I(t, null), g({
          type: "closeDialog"
        });
      }).catch(function(t) {
        rr(t) ? (R(t), g({
          type: "closeDialog"
        })) : nr(t) ? (k.current = !1, v.current ? (v.current.value = null, v.current.click()) : A(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : A(t);
      });
      return;
    }
    v.current && (g({
      type: "openDialog"
    }), X(), v.current.value = null, v.current.click());
  }, [g, X, R, de, I, A, ye, D]), Ce = m(function(r) {
    !p.current || !p.current.isEqualNode(r.target) || (r.key === " " || r.key === "Enter" || r.keyCode === 32 || r.keyCode === 13) && (r.preventDefault(), E());
  }, [p, E]), we = m(function() {
    g({
      type: "focus"
    });
  }, []), Pe = m(function() {
    g({
      type: "blur"
    });
  }, []), Se = m(function() {
    ve || (tr() ? setTimeout(E, 0) : E());
  }, [ve, E]), _ = function(t) {
    return i ? null : t;
  }, ee = function(t) {
    return Q ? null : _(t);
  }, z = function(t) {
    return me ? null : _(t);
  }, K = function(t) {
    h && t.stopPropagation();
  }, Te = w(function() {
    return function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = r.refKey, l = t === void 0 ? "ref" : t, f = r.role, d = r.onKeyDown, j = r.onFocus, C = r.onBlur, re = r.onClick, ne = r.onDragEnter, te = r.onDragOver, L = r.onDragLeave, oe = r.onDrop, ie = B(r, ar);
      return u(u(fe({
        onKeyDown: ee(y(d, Ce)),
        onFocus: ee(y(j, we)),
        onBlur: ee(y(C, Pe)),
        onClick: _(y(re, Se)),
        onDragEnter: z(y(ne, Oe)),
        onDragOver: z(y(te, Ee)),
        onDragLeave: z(y(L, _e)),
        onDrop: z(y(oe, x)),
        role: typeof f == "string" && f !== "" ? f : "presentation"
      }, l, p), !i && !Q ? {
        tabIndex: 0
      } : {}), ie);
    };
  }, [p, Ce, we, Pe, Se, Oe, Ee, _e, x, Q, me, i]), He = m(function(r) {
    r.stopPropagation();
  }, []), Be = w(function() {
    return function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = r.refKey, l = t === void 0 ? "ref" : t, f = r.onChange, d = r.onClick, j = B(r, cr), C = fe({
        accept: S,
        multiple: D,
        type: "file",
        style: {
          display: "none"
        },
        onChange: _(y(f, x)),
        onClick: _(y(d, He)),
        tabIndex: -1
      }, l, v);
      return u(u({}, C), j);
    };
  }, [v, o, D, x, i]);
  return u(u({}, Z), {}, {
    isFocused: Le && !i,
    getRootProps: Te,
    getInputProps: Be,
    rootRef: p,
    inputRef: v,
    open: _(E)
  });
}
function mr(e, n) {
  switch (n.type) {
    case "focus":
      return u(u({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return u(u({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return u(u({}, pe), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return u(u({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return u(u({}, e), {}, {
        isDragActive: n.isDragActive,
        isDragAccept: n.isDragAccept,
        isDragReject: n.isDragReject
      });
    case "setFiles":
      return u(u({}, e), {}, {
        acceptedFiles: n.acceptedFiles,
        fileRejections: n.fileRejections
      });
    case "reset":
      return u({}, pe);
    default:
      return e;
  }
}
function Ie() {
}
export {
  ge as default,
  vr as useDropzone
};
