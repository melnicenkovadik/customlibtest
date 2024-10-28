import { useEffect as n } from "react";
const i = (t) => {
  n(() => {
    if (!(typeof window > "u") && t) {
      const e = document.createElement("style");
      return e.textContent = `
        * {
          transition: none !important;
          animation: none !important;
        }
      `, document.head.appendChild(e), () => {
        document.head.removeChild(e);
      };
    }
  }, [t]);
};
export {
  i as useDisableAnimations
};
