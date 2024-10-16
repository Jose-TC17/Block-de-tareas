// creando el context para los temas
import { createContext, useState, ReactNode } from "react";

type ThemeProps = {
  stateTheme: boolean;
  clickStateTheme: () => void;
};

export const ThemeContext = createContext<ThemeProps | undefined>(undefined);

export function FuncTheme({ children }: { children: ReactNode }) {
  // creando un hook state para los temas
  const [stateTheme, funcStateTheme] = useState(false);

  const clickStateTheme = () => {
    funcStateTheme(!stateTheme);
  };

  return (
    <ThemeContext.Provider value={{ stateTheme, clickStateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
