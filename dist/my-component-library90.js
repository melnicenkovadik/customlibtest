import { useState as t, useEffect as r } from "react";
const u = () => {
  const [s, e] = t(!0);
  return r(() => {
    e(!1);
  }, []), s;
};
export {
  u as useIsSsr
};
