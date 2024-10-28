import "react";
import { clsx as i } from "./my-component-library121.js";
import { twMerge as g } from "./my-component-library122.js";
const x = (...t) => g(i(t)), P = (t, r = 2, n = 4, o = 3) => {
  if (!t || t.length <= r + n)
    return t;
  const s = t.substring(0, r), c = t.substring(t.length - n), e = ".".repeat(o);
  return `${s}${e}${c}`;
};
export {
  x as cn,
  P as truncateText
};
