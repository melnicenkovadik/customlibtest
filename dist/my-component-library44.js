import { jsxs as m, jsx as t } from "react/jsx-runtime";
import D from "./my-component-library114.js";
import g from "./my-component-library115.js";
import { Label as y } from "./my-component-library10.js";
import { SelectItem as O } from "./my-component-library116.js";
import { cn as l } from "./my-component-library58.js";
import { selectVariants as V, getSelectClassNames as P } from "./my-component-library117.js";
import { c as a } from "./my-component-library118.js";
import j from "./my-component-library79.js";
import M from "./my-component-library84.js";
import $ from "./my-component-library102.js";
const Q = ({
  className: e = "",
  wrapperClassName: o = "",
  setSelectedOption: d,
  selectedOption: f,
  options: p,
  placeholder: u = "Search...",
  //@ts-expect-error  Need to be re-searched and fixed
  CustomOption: h = R,
  CustomControl: C = F,
  variant: x = "default",
  menuPosition: b = "absolute",
  defaultMenuIsOpen: N = !1,
  id: s,
  label: c,
  isErrors: S = !1,
  isCreatable: r = !1,
  // New prop to control creatable behavior
  handleCreate: w,
  isLoading: i = !1,
  ...n
}) => {
  const v = V({ variant: x }), I = r ? g : D;
  return /* @__PURE__ */ m("div", { className: l("flex flex-col gap-1", o), children: [
    c && /* @__PURE__ */ t(
      y,
      {
        htmlFor: s,
        className: "block truncate",
        id: "aria-label",
        children: c
      }
    ),
    /* @__PURE__ */ t(
      I,
      {
        className: l("w-full", e),
        defaultValue: f,
        placeholder: u,
        menuPosition: b,
        defaultMenuIsOpen: N,
        onChange: d,
        options: p,
        inputId: s,
        "aria-labelledby": "aria-label",
        classNames: P(v, S),
        components: {
          DropdownIndicator: k,
          Control: C,
          Option: h,
          ClearIndicator: E
        },
        onCreateOption: r ? w : void 0,
        isClearable: r ? !0 : n.isClearable,
        isLoading: i,
        isDisabled: i || n.isDisabled,
        ...n
      }
    )
  ] });
}, k = (e) => /* @__PURE__ */ t(a.DropdownIndicator, { ...e, children: /* @__PURE__ */ t(
  j,
  {
    className: l(
      "h-5 w-5 text-secondary-text transition-transform",
      e.hasValue && e.selectProps.isClearable && "hidden"
    )
  }
) }), E = (e) => /* @__PURE__ */ t(a.ClearIndicator, { ...e, children: /* @__PURE__ */ t(
  "div",
  {
    onMouseDown: (o) => {
      o.stopPropagation(), o.nativeEvent.stopImmediatePropagation(), e.clearValue();
    },
    className: "cursor-pointer",
    children: /* @__PURE__ */ t(M, { className: "h-4 w-4 text-secondary-text" })
  }
) }), F = ({ children: e, ...o }) => /* @__PURE__ */ m(a.Control, { ...o, children: [
  /* @__PURE__ */ t($, { className: "h-4 w-4 text-secondary-text" }),
  e
] }), R = (e) => {
  const { data: o } = e;
  return /* @__PURE__ */ t(a.Option, { ...e, children: /* @__PURE__ */ t(O, { option: o }) });
};
export {
  E as ClearIndicator,
  F as Control,
  R as CustomOptionComponent,
  k as DropdownIndicator,
  Q as Select
};
