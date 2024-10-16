// creando un context
import { createContext, useState, ReactNode } from "react";

interface ValueStateMenu {
  stateMenu: boolean;
  clickStateMenu: () => void;
}

export const sideMenuContext = createContext<ValueStateMenu | undefined>(
  undefined
);

export function StateSideMenu({ children }: { children: ReactNode }) {
  const [stateMenu, funcStateMenu] = useState(false);

  // funcion para alternar el estado
  const clickStateMenu = () => funcStateMenu(() => !stateMenu);

  return (
    <sideMenuContext.Provider value={{ stateMenu, clickStateMenu }}>
      {children}
    </sideMenuContext.Provider>
  );
}
