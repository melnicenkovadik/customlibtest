import { jsx as n, Fragment as e, jsxs as r } from "react/jsx-runtime";
const a = (s) => !s || !s.includes("#") ? /* @__PURE__ */ n(e, { children: s }) : /* @__PURE__ */ n(e, { children: s.split(" ").map(
  (i) => i.startsWith("#") ? /* @__PURE__ */ r(
    "span",
    {
      className: "text-blue-500 dark:text-ui-accent-500",
      children: [
        i,
        " "
      ]
    },
    i
  ) : /* @__PURE__ */ r(e, { children: [
    i,
    " "
  ] })
) });
export {
  a as highlightHashtags
};
