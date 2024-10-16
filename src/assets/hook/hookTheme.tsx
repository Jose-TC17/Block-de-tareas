import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export function verifyTheme() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("Tienes que usar el provider");
  }
  return themeContext;
}
