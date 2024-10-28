import { useState as c, useEffect as r } from "react";
const m = (t) => {
  const [a, n] = c(!1);
  return r(() => {
    const e = window.matchMedia(t), s = () => n(e.matches);
    return n(e.matches), e.addEventListener("change", s), () => {
      e.removeEventListener("change", s);
    };
  }, [t]), a;
};
export {
  m as useMedia
};
