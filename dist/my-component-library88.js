import { createContext as t, useContext as o } from "react";
const e = t(void 0), s = () => {
  const r = o(e);
  if (!r)
    throw new Error("useDrawerContext must be used within a DrawerProvider");
  return r;
}, i = e.Provider;
export {
  i as DrawerProvider,
  s as useDrawerContext
};
