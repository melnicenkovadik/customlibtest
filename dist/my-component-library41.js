import { jsx as t, jsxs as o } from "react/jsx-runtime";
import { forwardRef as g, useRef as y, useState as z, useLayoutEffect as R } from "react";
import { cn as n } from "./my-component-library58.js";
import "./my-component-library5.js";
import "./my-component-library6.js";
import "./my-component-library7.js";
import { IconButton as u } from "./my-component-library9.js";
import "./my-component-library10.js";
import "./my-component-library12.js";
import "./my-component-library13.js";
import "./my-component-library14.js";
import "./my-component-library15.js";
import "./my-component-library19.js";
import { buttonVariants as j } from "./my-component-library21.js";
import "./my-component-library29.js";
import "./my-component-library30.js";
import "./my-component-library31.js";
import "./my-component-library32.js";
import "./my-component-library33.js";
import "./my-component-library93.js";
import "./my-component-library36.js";
import { Input as q } from "./my-component-library38.js";
import "./my-component-library39.js";
import "./my-component-library42.js";
import "./my-component-library48.js";
import "./my-component-library50.js";
import "./my-component-library100.js";
import "./my-component-library53.js";
import N from "./my-component-library109.js";
import v from "./my-component-library61.js";
import B from "./my-component-library62.js";
import L from "./my-component-library110.js";
import E from "./my-component-library111.js";
const F = ({
  className: i,
  ...e
}) => /* @__PURE__ */ t(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: n("mx-auto flex w-full items-center justify-end", i),
    ...e
  }
), G = g(({ className: i, ...e }, r) => /* @__PURE__ */ t(
  "ul",
  {
    ref: r,
    className: n("flex flex-row items-center gap-1", i),
    ...e
  }
)), de = g(
  ({ className: i, ...e }, r) => /* @__PURE__ */ t(
    "li",
    {
      ref: r,
      className: n("", i),
      ...e
    }
  )
), w = ({
  className: i,
  isActive: e,
  size: r = "default",
  ...f
}) => /* @__PURE__ */ t(
  "span",
  {
    "aria-current": e ? "page" : void 0,
    className: n(
      j({
        variant: e ? "outline" : "ghost",
        size: r
      }),
      i
    ),
    ...f
  }
), xe = ({
  className: i,
  ...e
}) => /* @__PURE__ */ o(
  w,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: n("gap-1 pl-2.5", i),
    ...e,
    children: [
      /* @__PURE__ */ t(N, { className: "h-4 w-4" }),
      /* @__PURE__ */ t("span", { children: "Previous" })
    ]
  }
), ge = ({
  className: i,
  ...e
}) => /* @__PURE__ */ o(
  w,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: n("gap-1 pr-2.5", i),
    ...e,
    children: [
      /* @__PURE__ */ t("span", { children: "Next" }),
      /* @__PURE__ */ t(v, { className: "h-4 w-4" })
    ]
  }
), Ne = ({
  className: i,
  ...e
}) => /* @__PURE__ */ o(
  "span",
  {
    "aria-hidden": !0,
    className: n("flex h-9 w-9 items-center justify-center", i),
    ...e,
    children: [
      /* @__PURE__ */ t(B, { className: "h-4 w-4" }),
      /* @__PURE__ */ t("span", { className: "sr-only", children: "More pages" })
    ]
  }
), ve = ({
  className: i,
  total: e,
  handleMin: r,
  handleMax: f,
  handleNext: b,
  handlePrev: C,
  handleInputChange: h,
  setCurrentPage: P,
  currentPage: p
}) => {
  const l = y(null), [d, x] = z(!1);
  R(() => {
    if (l.current) {
      const a = "" + p, s = a.length > 0 ? a.length : 1;
      l.current.style.width = isNaN(+a) ? "1ch" : `${s}ch`, d && l.current.focus();
    }
  }, [p, d]);
  const k = (a) => {
    let s = a.target.valueAsNumber;
    s < 1 && (s = 1), s > e && (s = e), x(!0), P(s), h == null || h(s);
  }, m = (a) => {
    x(!1), a();
  }, c = (a) => {
    switch (a) {
      case "min":
      case "prev":
        return p === 1;
      case "next":
      case "max":
        return p === e;
      default:
        return !1;
    }
  };
  return /* @__PURE__ */ o(F, { className: i, children: [
    /* @__PURE__ */ o("div", { className: "mr-10 flex items-center gap-2 text-sm", children: [
      /* @__PURE__ */ t("label", { htmlFor: "current-page", children: "Page" }),
      /* @__PURE__ */ t(
        q,
        {
          type: "number",
          ref: l,
          value: p,
          onChange: k,
          "aria-label": "Current page",
          id: "current-page-input"
        }
      ),
      /* @__PURE__ */ o("span", { className: "text-nowrap", children: [
        " of ",
        e
      ] })
    ] }),
    !(e === 1) && /* @__PURE__ */ o(G, { children: [
      /* @__PURE__ */ t(
        u,
        {
          icon: /* @__PURE__ */ t(L, { className: "h-[12px] w-[12px]" }),
          paint: "neutral",
          size: "sm",
          shape: "square",
          onClick: () => m(r),
          disabled: c("min")
        }
      ),
      /* @__PURE__ */ t(
        u,
        {
          icon: /* @__PURE__ */ t(N, { className: "h-[12px] w-[12px]" }),
          paint: "neutral",
          size: "sm",
          shape: "square",
          onClick: () => m(C),
          disabled: c("prev")
        }
      ),
      /* @__PURE__ */ t(
        u,
        {
          icon: /* @__PURE__ */ t(v, { className: "h-[12px] w-[12px]" }),
          paint: "neutral",
          size: "sm",
          shape: "square",
          onClick: () => m(b),
          disabled: c("next")
        }
      ),
      /* @__PURE__ */ t(
        u,
        {
          icon: /* @__PURE__ */ t(E, { className: "h-[12px] w-[12px]" }),
          paint: "neutral",
          size: "sm",
          shape: "square",
          onClick: () => m(f),
          disabled: c("max")
        }
      )
    ] })
  ] });
};
export {
  ve as Pagination,
  G as PaginationContent,
  Ne as PaginationEllipsis,
  de as PaginationItem,
  w as PaginationLink,
  ge as PaginationNext,
  xe as PaginationPrevious,
  F as PaginationWrapper
};
