export const functionTheme = () => {
  const verifyTheme = (theme: boolean, styleT: string, dark: string) => {
    return theme ? [styleT, dark].join(" ") : styleT;
  };
  return { verifyTheme };
};
