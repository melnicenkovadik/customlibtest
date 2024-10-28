import { jsx as e, jsxs as m, Fragment as b } from "react/jsx-runtime";
import { useState as N, useEffect as v, Fragment as F } from "react";
import { cn as y } from "./my-component-library58.js";
import { ratingVariants as S } from "./my-component-library55.js";
import u from "./my-component-library113.js";
const $ = ({
  label: o,
  fill: r,
  onChange: l,
  value: n,
  size: i = 16
}) => /* @__PURE__ */ m(b, { children: [
  /* @__PURE__ */ e(
    "input",
    {
      className: "absolute left-0 m-0 h-full cursor-pointer appearance-none",
      type: "radio",
      name: "rating",
      "aria-label": o,
      onChange: l,
      value: n
    }
  ),
  /* @__PURE__ */ e(
    u,
    {
      fill: r,
      size: i
    }
  )
] }), P = ({
  className: o,
  score: r = 0,
  state: l = "read-only",
  onChange: n,
  size: i = 16
}) => {
  const [s, f] = N(0), d = (t) => {
    f(Number(t.target.value)), n == null || n(Number(t.target.value));
  }, p = ["*", "*", "*", "*", "*"];
  v(() => {
    Math.floor(r) !== s && f(Math.floor(r));
  }, [r, s]);
  function g(t) {
    return t >= 70 ? 60 : t >= 50 ? 50 : 40;
  }
  const x = g(
    Number((r % 1).toFixed(2).split(".")[1])
  ), h = ({ size: t, index: c }) => /* @__PURE__ */ e(
    u,
    {
      size: t,
      className: "absolute",
      fill: "var(--foreground)",
      style: {
        clipPath: `inset(0 calc(100% - ${x}%) 0 0)`,
        left: `${(t + 4) * c}px`
      }
    }
  );
  return /* @__PURE__ */ e("div", { className: "mx-auto inline-flex", children: /* @__PURE__ */ e(
    "fieldset",
    {
      className: y(
        S({ state: l }),
        "flex justify-center",
        o
      ),
      children: p.map((t, c) => {
        const a = c + 1;
        return /* @__PURE__ */ m(F, { children: [
          a === Math.ceil(r) && l === "read-only" && /* @__PURE__ */ e(
            h,
            {
              size: i,
              index: a
            }
          ),
          /* @__PURE__ */ e(
            $,
            {
              size: i,
              label: `${a} star`,
              fill: a <= s ? "var(--foreground)" : "none",
              onChange: l === "controlled" ? d : () => {
              },
              value: a
            }
          )
        ] }, a);
      })
    }
  ) });
};
export {
  P as Rating
};
