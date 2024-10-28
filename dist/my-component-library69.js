import { jsxs as e, jsx as r } from "react/jsx-runtime";
import { cn as o } from "./my-component-library58.js";
const c = ({ className: i }) => /* @__PURE__ */ e(
  "svg",
  {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: o(i),
    children: [
      /* @__PURE__ */ e("g", { clipPath: "url(#clip0)", children: [
        /* @__PURE__ */ r(
          "path",
          {
            d: "M5 5 Q5 35 20 35 Q35 35 35 5",
            stroke: "rgb(var(--ui-accent-500))",
            strokeLinecap: "round",
            fill: "none",
            strokeWidth: "3"
          }
        ),
        /* @__PURE__ */ r(
          "path",
          {
            d: "M25 15 L25 35",
            stroke: "var(--secondary-logo)",
            strokeLinecap: "round",
            fill: "none",
            strokeWidth: "3"
          }
        ),
        /* @__PURE__ */ r(
          "circle",
          {
            cx: "25",
            cy: "8",
            r: "3",
            fill: "var(--secondary-logo)"
          }
        )
      ] }),
      /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ r("clipPath", { id: "clip0", children: /* @__PURE__ */ r(
        "rect",
        {
          width: "40",
          height: "40",
          fill: "white"
        }
      ) }) })
    ]
  }
);
export {
  c as LogoShort
};
