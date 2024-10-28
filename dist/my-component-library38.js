import { jsxs as c, jsx as e } from "react/jsx-runtime";
import { forwardRef as y, useState as z, useId as B, useCallback as L } from "react";
import { useDropzone as M } from "./my-component-library99.js";
import { cn as p, truncateText as S } from "./my-component-library58.js";
import "./my-component-library5.js";
import "./my-component-library6.js";
import "./my-component-library7.js";
import { IconButton as k } from "./my-component-library9.js";
import { Label as T } from "./my-component-library10.js";
import "./my-component-library12.js";
import "./my-component-library13.js";
import "./my-component-library14.js";
import "./my-component-library15.js";
import { Typography as u } from "./my-component-library18.js";
import "./my-component-library19.js";
import "./my-component-library29.js";
import "./my-component-library30.js";
import "./my-component-library31.js";
import "./my-component-library32.js";
import "./my-component-library33.js";
import "./my-component-library93.js";
import "./my-component-library36.js";
import "./my-component-library39.js";
import "./my-component-library41.js";
import "./my-component-library42.js";
import "./my-component-library48.js";
import "./my-component-library50.js";
import "./my-component-library100.js";
import "./my-component-library53.js";
import D from "./my-component-library101.js";
import E from "./my-component-library102.js";
import A from "./my-component-library84.js";
import O from "./my-component-library103.js";
import $ from "./my-component-library104.js";
import H from "./my-component-library105.js";
import V from "./my-component-library106.js";
const N = y(
  ({
    start: t,
    end: o,
    label: a,
    className: n,
    inputWrapperClassName: l,
    inputClassName: s,
    isErrors: m,
    error: d,
    helperText: i,
    id: v,
    type: f = "text",
    ...h
  }, F) => {
    const [P, w] = z(!1), j = B(), I = v || j;
    return /* @__PURE__ */ c("div", { className: p("relative", n), children: [
      a && /* @__PURE__ */ e(
        T,
        {
          htmlFor: I,
          className: "mb-1 block truncate",
          children: a
        }
      ),
      /* @__PURE__ */ c(
        "div",
        {
          onFocus: () => w(!0),
          onBlur: () => w(!1),
          className: p(
            "relative flex h-10 w-full items-center rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-text disabled:opacity-50",
            P && "text-secondary-text outline outline-2 outline-offset-1",
            m || d ? "text-destructive outline outline-2 outline-offset-1" : "",
            l
          ),
          children: [
            t,
            /* @__PURE__ */ e(
              "input",
              {
                ref: F,
                className: p(
                  "w-full !bg-transparent text-foreground focus:outline-none focus-visible:outline-none active:bg-transparent disabled:cursor-not-allowed",
                  s
                ),
                type: f,
                id: I,
                ...h
              }
            ),
            o,
            m && /* @__PURE__ */ e(D, {})
          ]
        }
      ),
      /* @__PURE__ */ e("div", { className: "mt-1 text-sm", children: /* @__PURE__ */ e("span", { className: d ? "text-destructive" : "text-secondary-text", children: d || i }) })
    ] });
  }
), C = y(
  ({ value: t, onClear: o, ...a }, n) => /* @__PURE__ */ e(
    N,
    {
      value: t,
      start: /* @__PURE__ */ e(
        k,
        {
          paint: "neutral",
          version: "ghost",
          icon: /* @__PURE__ */ e(E, {}),
          className: "mr-2 h-[18px] w-[18px]"
        }
      ),
      end: t ? /* @__PURE__ */ e(
        k,
        {
          paint: "neutral",
          version: "ghost",
          icon: /* @__PURE__ */ e(A, {}),
          className: "ml-2 h-[18px] w-[18px]",
          onClick: o
        }
      ) : null,
      ref: n,
      ...a
    }
  )
), U = y(
  ({ className: t, inputClassName: o, type: a, ...n }, l) => {
    const [s, m] = z(!1);
    return /* @__PURE__ */ e("div", { className: p("relative", t), children: /* @__PURE__ */ e(
      N,
      {
        type: s ? "text" : a,
        inputClassName: p("hide-password-toggle pr-5", o),
        end: /* @__PURE__ */ e(
          k,
          {
            paint: "neutral",
            size: "sm",
            version: "ghost",
            className: "absolute right-0 top-0 h-full text-secondary-text hover:bg-transparent",
            onClick: (d) => {
              d.preventDefault(), m((i) => !i);
            },
            icon: s ? /* @__PURE__ */ e(
              O,
              {
                "aria-hidden": "true",
                className: "h-4 w-4"
              }
            ) : /* @__PURE__ */ e(
              $,
              {
                "aria-hidden": "true",
                className: "h-4 w-4"
              }
            ),
            children: /* @__PURE__ */ e("span", { className: "sr-only", children: s ? "Hide password" : "Show password" })
          }
        ),
        ref: l,
        ...n
      }
    ) });
  }
), R = y(
  ({ label: t, className: o, fileName: a, acceptFile: n, maxSize: l, maxNumberImg: s, ...m }, d) => {
    const [i, v] = z([]), [f, h] = z(null), F = (r) => l && r.size > l ? (h(
      `File exceeds the size limit of ${l / 1024 / 1024} MB.`
    ), !1) : (h(null), !0), P = L(
      (r) => {
        const x = i.length + r.length;
        if (s && x > s) {
          h(`You can only upload up to ${s} files.`);
          return;
        }
        const g = r.filter((b) => F(b));
        v((b) => [...b, ...g]);
      },
      // eslint-disable-next-line
      [i, n, l, s]
    ), w = (r) => {
      v(
        (x) => x.filter((g) => g !== r)
      );
    }, { getRootProps: j, getInputProps: I } = M({
      onDrop: P,
      accept: n
    });
    return /* @__PURE__ */ c("div", { children: [
      /* @__PURE__ */ c(
        "div",
        {
          ...j(),
          className: p("relative", o),
          children: [
            /* @__PURE__ */ e(
              N,
              {
                type: "file",
                id: "file-upload",
                inputClassName: p("opacity-0 absolute z-10 cursor-pointer"),
                inputWrapperClassName: "[&>svg]:absolute [&>svg]:right-3",
                ref: d,
                label: t,
                isErrors: !!f,
                ...I(),
                ...m
              }
            ),
            /* @__PURE__ */ c("div", { className: "absolute left-3 top-1/2 z-0 flex cursor-pointer gap-2 text-sm text-foreground", children: [
              /* @__PURE__ */ e(u, { size: "body2", children: a || "Upload File" }),
              /* @__PURE__ */ e(
                u,
                {
                  size: "body2",
                  className: "text-secondary-text",
                  children: i.length === 0 && "No file chosen"
                }
              )
            ] })
          ]
        }
      ),
      i.map((r) => {
        const x = URL.createObjectURL(r), g = r.type === "application/pdf", b = (r.size / 1024 / 1024).toFixed(2);
        return /* @__PURE__ */ c(
          "div",
          {
            className: "relative mb-2 flex max-w-full cursor-pointer gap-3 rounded-lg border border-border p-2 hover:bg-muted",
            children: [
              g ? /* @__PURE__ */ e("div", { className: "flex h-12 w-12 items-center justify-center rounded bg-secondary-text text-background", children: /* @__PURE__ */ e(H, { className: "text- h-6 w-6" }) }) : /* @__PURE__ */ e(
                "img",
                {
                  src: x,
                  alt: r.name,
                  className: "h-12 w-12 rounded object-cover"
                }
              ),
              /* @__PURE__ */ c("div", { className: "flex flex-col justify-between", children: [
                /* @__PURE__ */ e(
                  u,
                  {
                    size: "body2",
                    className: "text-foreground",
                    children: S(r.name, 20)
                  }
                ),
                /* @__PURE__ */ c(
                  u,
                  {
                    size: "body2",
                    className: "text-foreground",
                    children: [
                      b,
                      " MB"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ e(
                V,
                {
                  onClick: () => w(r),
                  className: "absolute right-2 top-2 h-4 w-4 rounded-full text-muted-text"
                }
              )
            ]
          },
          r.name
        );
      }),
      /* @__PURE__ */ e("div", { children: f ? /* @__PURE__ */ e(
        u,
        {
          size: "body2",
          className: "mt-2 text-red-500",
          children: f
        }
      ) : i.length === 0 && /* @__PURE__ */ e(
        u,
        {
          size: "body2",
          className: "text-secondary-text",
          children: "Upload a file"
        }
      ) })
    ] });
  }
), W = y(({ ...t }, o) => {
  switch (t.type) {
    case "search":
      return /* @__PURE__ */ e(
        C,
        {
          ...t,
          ref: o
        }
      );
    case "password":
      return /* @__PURE__ */ e(
        U,
        {
          ...t,
          ref: o
        }
      );
    case "upload-file":
      return /* @__PURE__ */ e(
        R,
        {
          ...t,
          ref: o
        }
      );
    default:
      return /* @__PURE__ */ e(
        N,
        {
          ...t,
          ref: o
        }
      );
  }
});
N.displayName = "InputField";
C.displayName = "InputSearch";
U.displayName = "InputPassword";
R.displayName = "InputUploadedPicture";
W.displayName = "Input";
export {
  W as Input
};
