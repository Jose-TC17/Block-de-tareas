import { useContext } from "react";
import { sideMenuContext } from "../Context/MenuContext.tsx";

export function useSideMenu() {
  const context = useContext(sideMenuContext);
  if (!context) {
    throw new Error("Debe ser usado dentro de un StateSideMenu.Provider");
  }
  return context;
}
