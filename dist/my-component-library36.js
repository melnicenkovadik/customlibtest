import { jsx as s } from "react/jsx-runtime";
import { createContext as l, forwardRef as i, useId as x, useContext as a } from "react";
import { FormProvider as I, Controller as p, useFormContext as g } from "./my-component-library98.js";
import { Slot as v } from "./my-component-library60.js";
import { Label as C } from "./my-component-library10.js";
import { cn as c } from "./my-component-library58.js";
const M = I, f = l(
  {}
), N = ({
  ...e
}) => /* @__PURE__ */ s(f.Provider, { value: { name: e.name }, children: /* @__PURE__ */ s(p, { ...e }) }), d = () => {
  const e = a(f), o = a(F), { getFieldState: t, formState: r } = g(), m = t(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: n } = o;
  return {
    id: n,
    name: e.name,
    formItemId: `${n}-form-item`,
    formDescriptionId: `${n}-form-item-description`,
    formMessageId: `${n}-form-item-message`,
    ...m
  };
}, F = l(
  {}
), P = i(({ className: e, ...o }, t) => {
  const r = x();
  return /* @__PURE__ */ s(F.Provider, { value: { id: r }, children: /* @__PURE__ */ s(
    "div",
    {
      ref: t,
      className: c("relative flex flex-col gap-1", e),
      ...o
    }
  ) });
}), y = i(({ className: e, ...o }, t) => {
  const { formItemId: r } = d();
  return /* @__PURE__ */ s(
    C,
    {
      ref: t,
      className: e,
      htmlFor: r,
      ...o
    }
  );
}), L = i(({ ...e }, o) => {
  const { error: t, formItemId: r, formDescriptionId: m, formMessageId: n } = d();
  return /* @__PURE__ */ s(
    v,
    {
      ref: o,
      id: r,
      "aria-describedby": t ? `${m} ${n}` : `${m}`,
      "aria-invalid": !!t,
      ...e
    }
  );
}), j = i(({ className: e, ...o }, t) => {
  const { formDescriptionId: r } = d();
  return /* @__PURE__ */ s(
    "p",
    {
      ref: t,
      id: r,
      className: c("text-xs text-muted-text", e),
      ...o
    }
  );
}), E = i(({ className: e, children: o, ...t }, r) => {
  const { error: m, formMessageId: n } = d(), u = m ? String(m == null ? void 0 : m.message) : o;
  return /* @__PURE__ */ s(
    "p",
    {
      ref: r,
      id: n,
      className: c("min-h-4 text-xs font-medium text-destructive", e),
      ...t,
      children: u
    }
  );
});
export {
  M as Form,
  L as FormControl,
  j as FormDescription,
  N as FormField,
  P as FormItem,
  y as FormLabel,
  E as FormMessage,
  d as useFormField
};
