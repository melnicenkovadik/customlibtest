import * as u from "react";
import { useLayoutEffect as r } from "./my-component-library125.js";
var f = u.useId || (() => {
}), s = 0;
function n(t) {
  const [o, a] = u.useState(f());
  return r(() => {
    t || a((e) => e ?? String(s++));
  }, [t]), t || (o ? `radix-${o}` : "");
}
export {
  n as useId
};
