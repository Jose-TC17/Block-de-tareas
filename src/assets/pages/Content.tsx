import styleContent from "./CSS/Content.module.css";
import { functionSideMenu } from "../utils/utlSideMenu";
import { useSideMenu } from "../hook/hookSideMenu";
import { verifyTheme } from "../hook/hookTheme";

import React from "react";

type Props = {
  children: React.ReactNode;
};

function Content(props: Props) {
  const { children } = props;

  // llamando a la funcion de activar menu
  const { stateMenu } = useSideMenu();

  // llamando a la funcion de los temas
  const { stateTheme } = verifyTheme();

  // llamando a la funcion de la barra lateral
  const { funcVerify } = functionSideMenu();

  const styleContainer: string = funcVerify(
    stateMenu,
    stateTheme,
    styleContent.content,
    styleContent.active,
    styleContent.dark
  );

  return <div className={styleContainer}>{children}</div>;
}

export default Content;
