import { jsx as o } from "react/jsx-runtime";
import { LogoMain as i } from "./my-component-library68.js";
import { LogoShort as f } from "./my-component-library69.js";
function e({ variant: t = "default", className: r }) {
  return /* @__PURE__ */ o("div", { children: {
    default: /* @__PURE__ */ o(i, { className: r }),
    short: /* @__PURE__ */ o(f, { className: r })
  }[t] });
}
export {
  e as Logo
};
