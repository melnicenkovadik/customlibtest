import * as r from "react";
function o(t) {
  const e = r.useRef(t);
  return r.useEffect(() => {
    e.current = t;
  }), r.useMemo(() => (...n) => {
    var u;
    return (u = e.current) == null ? void 0 : u.call(e, ...n);
  }, []);
}
export {
  o as useCallbackRef
};
