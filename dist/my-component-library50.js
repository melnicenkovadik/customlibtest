import { jsxs as o, Fragment as g, jsx as e } from "react/jsx-runtime";
import { forwardRef as b } from "react";
import { cn as l } from "./my-component-library58.js";
import { Button as d } from "./my-component-library5.js";
import "./my-component-library6.js";
import "./my-component-library7.js";
import "./my-component-library9.js";
import "./my-component-library10.js";
import "./my-component-library12.js";
import "./my-component-library13.js";
import "./my-component-library14.js";
import "./my-component-library15.js";
import { Typography as t } from "./my-component-library18.js";
import "./my-component-library19.js";
import "./my-component-library29.js";
import "./my-component-library30.js";
import "./my-component-library31.js";
import "./my-component-library32.js";
import "./my-component-library33.js";
import "./my-component-library93.js";
import "./my-component-library36.js";
import "./my-component-library38.js";
import "./my-component-library39.js";
import "./my-component-library41.js";
import "./my-component-library42.js";
import "./my-component-library48.js";
import "./my-component-library100.js";
import "./my-component-library53.js";
const Q = b(
  ({
    onModeChanged: n,
    onAccentChanged: c,
    accents: i,
    modes: a,
    title: s,
    text: m,
    iconClose: p,
    selectedMode: u,
    selectedAccent: h
  }, f) => /* @__PURE__ */ o(g, { children: [
    /* @__PURE__ */ o(
      "div",
      {
        ref: f,
        className: "relative mb-6",
        children: [
          /* @__PURE__ */ e(
            t,
            {
              size: "heading4",
              tag: "h4",
              children: s
            }
          ),
          /* @__PURE__ */ e("p", { className: "text-sm text-muted-text", children: m }),
          p
        ]
      }
    ),
    /* @__PURE__ */ o("fieldset", { className: "mb-6", children: [
      /* @__PURE__ */ e(
        t,
        {
          size: "heading4",
          tag: "legend",
          children: "Mode"
        }
      ),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-2", children: a && a.map((r) => /* @__PURE__ */ o(
        "label",
        {
          className: "relative",
          children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "radio",
                name: "theme-mode",
                value: r.code,
                onChange: () => n(r.code),
                className: "peer absolute h-full w-full cursor-pointer opacity-0"
              }
            ),
            /* @__PURE__ */ o(
              d,
              {
                variant: "outline",
                className: l(
                  "flex w-full border border-border transition-colors duration-300",
                  u === r.code && "border-ui-accent-500"
                ),
                children: [
                  /* @__PURE__ */ e("span", { className: "flex h-5 w-5 items-center justify-center text-foreground", children: r.icon }),
                  r.displayValue
                ]
              }
            )
          ]
        },
        r.code
      )) })
    ] }),
    /* @__PURE__ */ o("fieldset", { className: "mb-6", children: [
      /* @__PURE__ */ e(
        t,
        {
          size: "heading4",
          tag: "legend",
          children: "Color"
        }
      ),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-2", children: i && i.map((r) => /* @__PURE__ */ o(
        "label",
        {
          className: "relative",
          children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "radio",
                name: "theme-accent",
                value: r.code,
                onChange: () => c(r.code),
                className: "peer absolute h-full w-full cursor-pointer opacity-0"
              }
            ),
            /* @__PURE__ */ o(
              d,
              {
                variant: "outline",
                className: l(
                  "flex w-full items-center justify-start border border-border px-3.5 py-2 transition-colors duration-300",
                  h === r.code && "border-ui-accent-500"
                ),
                children: [
                  /* @__PURE__ */ e(
                    "div",
                    {
                      className: "h-5 w-5 rounded-full border border-transparent",
                      style: {
                        backgroundColor: r.color
                      }
                    }
                  ),
                  r.displayValue
                ]
              }
            )
          ]
        },
        r.code
      )) })
    ] })
  ] })
);
export {
  Q as ThemeSelector
};
