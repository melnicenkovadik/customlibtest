import { useRef as l, useState as f, useCallback as p, useEffect as c } from "react";
import { areOptionsEqual as E, arePluginsEqual as O, canUseDOM as w } from "./my-component-library153.js";
import m from "./my-component-library154.js";
function b(e = {}, r = []) {
  const t = l(e), n = l(r), [u, s] = f(), [a, d] = f(), o = p(() => {
    u && u.reInit(t.current, n.current);
  }, [u]);
  return c(() => {
    E(t.current, e) || (t.current = e, o());
  }, [e, o]), c(() => {
    O(n.current, r) || (n.current = r, o());
  }, [r, o]), c(() => {
    if (w() && a) {
      m.globalOptions = b.globalOptions;
      const i = m(a, t.current, n.current);
      return s(i), () => i.destroy();
    } else
      s(void 0);
  }, [a, s]), [d, u];
}
b.globalOptions = void 0;
export {
  b as default
};
