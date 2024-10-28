import { jsx as a, jsxs as o } from "react/jsx-runtime";
import { Slot as n } from "./my-component-library60.js";
import { cn as t } from "./my-component-library58.js";
import i from "./my-component-library61.js";
import c from "./my-component-library62.js";
const f = ({
  ...e
}) => /* @__PURE__ */ a(
  "nav",
  {
    "aria-label": "breadcrumb",
    ...e
  }
), b = ({
  className: e,
  ...r
}) => /* @__PURE__ */ a(
  "ol",
  {
    className: t(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-text",
      e
    ),
    ...r
  }
), h = ({
  className: e,
  ...r
}) => /* @__PURE__ */ a(
  "li",
  {
    className: t("inline-flex items-center gap-1.5", e),
    ...r
  }
), g = ({
  asChild: e,
  className: r,
  ...s
}) => /* @__PURE__ */ a(
  e ? n : "a",
  {
    className: t(
      "text-secondary-text transition-colors hover:text-foreground",
      r
    ),
    ...s
  }
), N = ({
  className: e,
  ...r
}) => /* @__PURE__ */ a(
  "span",
  {
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: t("font-normal text-foreground", e),
    ...r
  }
), B = ({
  children: e,
  className: r,
  ...s
}) => /* @__PURE__ */ a(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: t("[&>svg]:size-5", r),
    ...s,
    children: e ?? /* @__PURE__ */ a(i, {})
  }
), v = ({
  className: e,
  ...r
}) => /* @__PURE__ */ o(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: t("flex h-9 w-9 items-center justify-center", e),
    ...r,
    children: [
      /* @__PURE__ */ a(c, { className: "h-4 w-4" }),
      /* @__PURE__ */ a("span", { className: "sr-only", children: "More" })
    ]
  }
);
export {
  f as Breadcrumb,
  v as BreadcrumbEllipsis,
  h as BreadcrumbItem,
  g as BreadcrumbLink,
  b as BreadcrumbList,
  N as BreadcrumbPage,
  B as BreadcrumbSeparator
};
