import * as h from "react";
import { useLayoutEffect as z } from "./my-component-library125.js";
function c(r) {
  const [d, e] = h.useState(void 0);
  return z(() => {
    if (r) {
      e({ width: r.offsetWidth, height: r.offsetHeight });
      const f = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const b = i[0];
        let o, t;
        if ("borderBoxSize" in b) {
          const s = b.borderBoxSize, u = Array.isArray(s) ? s[0] : s;
          o = u.inlineSize, t = u.blockSize;
        } else
          o = r.offsetWidth, t = r.offsetHeight;
        e({ width: o, height: t });
      });
      return f.observe(r, { box: "border-box" }), () => f.unobserve(r);
    } else
      e(void 0);
  }, [r]), d;
}
export {
  c as useSize
};
