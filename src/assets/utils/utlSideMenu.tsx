export const functionSideMenu = () => {
  const funcVerify = (
    condition: boolean,
    theme: boolean,
    style: string,
    active: string,
    dark: string
  ) => {
    let styleTheme: string = condition ? [style, active].join(" ") : style;

    const stateTheme: string = theme
      ? [styleTheme, dark].join(" ")
      : styleTheme;
    return stateTheme;
  };
  return { funcVerify };
};
