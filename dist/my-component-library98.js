import u from "react";
var P = (e) => e.type === "checkbox", j = (e) => e instanceof Date, C = (e) => e == null;
const w = (e) => typeof e == "object";
var b = (e) => !C(e) && !Array.isArray(e) && w(e) && !j(e), B = (e) => b(e) && e.target ? P(e.target) ? e.target.checked : e.target.value : e, R = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, T = (e, r) => e.has(R(r)), U = (e) => {
  const r = e.constructor && e.constructor.prototype;
  return b(r) && r.hasOwnProperty("isPrototypeOf");
}, D = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function h(e) {
  let r;
  const t = Array.isArray(e);
  if (e instanceof Date)
    r = new Date(e);
  else if (e instanceof Set)
    r = new Set(e);
  else if (!(D && (e instanceof Blob || e instanceof FileList)) && (t || b(e)))
    if (r = t ? [] : {}, !t && !U(e))
      r = e;
    else
      for (const n in e)
        e.hasOwnProperty(n) && (r[n] = h(e[n]));
  else
    return e;
  return r;
}
var O = (e) => Array.isArray(e) ? e.filter(Boolean) : [], m = (e) => e === void 0, l = (e, r, t) => {
  if (!r || !b(e))
    return t;
  const n = O(r.split(/[,[\].]+?/)).reduce((s, o) => C(s) ? s : s[o], e);
  return m(n) || n === e ? m(e[r]) ? t : e[r] : n;
}, p = (e) => typeof e == "boolean", L = (e) => /^\w*$/.test(e), W = (e) => O(e.replace(/["|']|\]/g, "").split(/\.|\[/)), V = (e, r, t) => {
  let n = -1;
  const s = L(r) ? [r] : W(r), o = s.length, c = o - 1;
  for (; ++n < o; ) {
    const f = s[n];
    let i = t;
    if (n !== c) {
      const d = e[f];
      i = b(d) || Array.isArray(d) ? d : isNaN(+s[n + 1]) ? {} : [];
    }
    if (f === "__proto__")
      return;
    e[f] = i, e = e[f];
  }
  return e;
};
const F = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, A = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, S = u.createContext(null), v = () => u.useContext(S), Q = (e) => {
  const { children: r, ...t } = e;
  return u.createElement(S.Provider, { value: t }, r);
};
var I = (e, r, t, n = !0) => {
  const s = {
    defaultValues: r._defaultValues
  };
  for (const o in e)
    Object.defineProperty(s, o, {
      get: () => {
        const c = o;
        return r._proxyFormState[c] !== A.all && (r._proxyFormState[c] = !n || A.all), t && (t[c] = !0), e[c];
      }
    });
  return s;
}, H = (e) => b(e) && !Object.keys(e).length, N = (e, r, t, n) => {
  t(e);
  const { name: s, ...o } = e;
  return H(o) || Object.keys(o).length >= Object.keys(r).length || Object.keys(o).find((c) => r[c] === !n);
}, G = (e) => Array.isArray(e) ? e : [e], x = (e, r, t) => !e || !r || e === r || G(e).some((n) => n && (t ? n === r : n.startsWith(r) || r.startsWith(n)));
function k(e) {
  const r = u.useRef(e);
  r.current = e, u.useEffect(() => {
    const t = !e.disabled && r.current.subject && r.current.subject.subscribe({
      next: r.current.next
    });
    return () => {
      t && t.unsubscribe();
    };
  }, [e.disabled]);
}
function M(e) {
  const r = v(), { control: t = r.control, disabled: n, name: s, exact: o } = e || {}, [c, f] = u.useState(t._formState), i = u.useRef(!0), d = u.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), a = u.useRef(s);
  return a.current = s, k({
    disabled: n,
    next: (y) => i.current && x(a.current, y.name, o) && N(y, d.current, t._updateFormState) && f({
      ...t._formState,
      ...y
    }),
    subject: t._subjects.state
  }), u.useEffect(() => (i.current = !0, d.current.isValid && t._updateValid(!0), () => {
    i.current = !1;
  }), [t]), I(c, t, d.current, !1);
}
var $ = (e) => typeof e == "string", K = (e, r, t, n, s) => $(e) ? l(t, e, s) : Array.isArray(e) ? e.map((o) => l(t, o)) : t;
function q(e) {
  const r = v(), { control: t = r.control, name: n, defaultValue: s, disabled: o, exact: c } = e || {}, f = u.useRef(n);
  f.current = n, k({
    disabled: o,
    subject: t._subjects.values,
    next: (a) => {
      x(f.current, a.name, c) && d(h(K(f.current, t._names, a.values || t._formValues, !1, s)));
    }
  });
  const [i, d] = u.useState(t._getWatch(n, s));
  return u.useEffect(() => t._removeUnmounted()), i;
}
function z(e) {
  const r = v(), { name: t, disabled: n, control: s = r.control, shouldUnregister: o } = e, c = T(s._names.array, t), f = q({
    control: s,
    name: t,
    defaultValue: l(s._formValues, t, l(s._defaultValues, t, e.defaultValue)),
    exact: !0
  }), i = M({
    control: s,
    name: t,
    exact: !0
  }), d = u.useRef(s.register(t, {
    ...e.rules,
    value: f,
    ...p(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return u.useEffect(() => {
    const a = s._options.shouldUnregister || o, y = (_, E) => {
      const g = l(s._fields, _);
      g && g._f && (g._f.mount = E);
    };
    if (y(t, !0), a) {
      const _ = h(l(s._options.defaultValues, t));
      V(s._defaultValues, t, _), m(l(s._formValues, t)) && V(s._formValues, t, _);
    }
    return () => {
      (c ? a && !s._state.action : a) ? s.unregister(t) : y(t, !1);
    };
  }, [t, s, c, o]), u.useEffect(() => {
    l(s._fields, t) && s._updateDisabledField({
      disabled: n,
      fields: s._fields,
      name: t,
      value: l(s._fields, t)._f.value
    });
  }, [n, t, s]), {
    field: {
      name: t,
      value: f,
      ...p(n) || i.disabled ? { disabled: i.disabled || n } : {},
      onChange: u.useCallback((a) => d.current.onChange({
        target: {
          value: B(a),
          name: t
        },
        type: F.CHANGE
      }), [t]),
      onBlur: u.useCallback(() => d.current.onBlur({
        target: {
          value: l(s._formValues, t),
          name: t
        },
        type: F.BLUR
      }), [t, s]),
      ref: u.useCallback((a) => {
        const y = l(s._fields, t);
        y && a && (y._f.ref = {
          focus: () => a.focus(),
          select: () => a.select(),
          setCustomValidity: (_) => a.setCustomValidity(_),
          reportValidity: () => a.reportValidity()
        });
      }, [s._fields, t])
    },
    formState: i,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!l(i.errors, t)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!l(i.dirtyFields, t)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!l(i.touchedFields, t)
      },
      isValidating: {
        enumerable: !0,
        get: () => !!l(i.validatingFields, t)
      },
      error: {
        enumerable: !0,
        get: () => l(i.errors, t)
      }
    })
  };
}
const X = (e) => e.render(z(e));
export {
  X as Controller,
  Q as FormProvider,
  l as get,
  V as set,
  z as useController,
  v as useFormContext,
  M as useFormState,
  q as useWatch
};
