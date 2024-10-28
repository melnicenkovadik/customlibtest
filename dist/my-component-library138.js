import { forwardRef as s, createElement as c } from "react";
import { mergeClasses as n, toKebabCase as f } from "./my-component-library139.js";
import l from "./my-component-library140.js";
/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u = (e, r) => {
  const o = s(
    ({ className: t, ...a }, m) => c(l, {
      ref: m,
      iconNode: r,
      className: n(`lucide-${f(e)}`, t),
      ...a
    })
  );
  return o.displayName = `${e}`, o;
};
export {
  u as default
};
