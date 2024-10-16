import styleHeader from "./CSS/Header.module.css";
import logo from "../../images/logo-block.webp";
import imgMenuHeader from "../../images/menu-header.svg";
import imgUserDefault from "../../images/perfil.webp";
import { dataUser } from "../../../Data/data.ts";
import Settings from "./Settings";
import { useState } from "react";
import { functionTheme } from "../../utils/utlTheme.tsx";
import { functionSideMenu } from "../../utils/utlSideMenu.tsx";
import { useSideMenu } from "../../hook/hookSideMenu.tsx";

type Props = {
  // otros datos
  clickTheme: () => void;
  theme: boolean;
};

function Header(props: Props) {
  const { theme, clickTheme } = props;

  // llamando al contexto
  const { stateMenu, clickStateMenu } = useSideMenu();

  const logoHeader: string = logo;

  // llamando a la funcion verificar tema
  const { verifyTheme } = functionTheme();

  // llamando a la funcion para verificar la barra lateral
  const { funcVerify } = functionSideMenu();

  // nombre y apellido del usuario
  const name: string = dataUser.name;
  const lastName: string = dataUser.lastName;

  // nombre y apellido del usuario completo
  const userName: string = `${dataUser.name} ${dataUser.lastName}`;

  const userEmail: string = dataUser.email;

  // imagen del usuario
  const imgUser: string = dataUser.imgProfile;

  // foto del perfil del usuario
  const imgProfile: string = imgUser == "" ? imgUserDefault : imgUser;

  // llamando a la imagen del menu
  const imgMenu = imgMenuHeader;

  // abriendo el menu de ajustes
  const [menuSetting, funcMenuSetting] = useState(false);

  // funcion para abrir el menu de ajustes
  const clickMenuSetting = () => {
    funcMenuSetting(!menuSetting);
  };

  // obteniendo la funcion verificar para ver si esta activo el menu lateral
  const styleHeaderMenuA: string = funcVerify(
    stateMenu,
    theme,
    styleHeader.header,
    styleHeader.active,
    styleHeader.dark
  );

  const bgImgMenu: string = funcVerify(
    stateMenu,
    theme,
    styleHeader.imgMenu,
    styleHeader.active,
    styleHeader.dark
  );

  const contentImgMenu: string = funcVerify(
    stateMenu,
    theme,
    styleHeader.contentBtnM,
    styleHeader.active,
    styleHeader.dark
  );

  // verificar si esta activo el Sec Two
  const secTwoActive: string = funcVerify(
    menuSetting,
    theme,
    styleHeader.headerSecTwo,
    styleHeader.active,
    styleHeader.dark
  );

  const triangleActive: string = funcVerify(
    menuSetting,
    theme,
    styleHeader.configTriangle,
    styleHeader.active,
    styleHeader.dark
  );

  // aumentando funcionalidad del clickSideM
  const newClickSide = () => {
    clickStateMenu();
    funcMenuSetting(false);
  };

  return (
    <header className={styleHeaderMenuA}>
      {/* primera parte del header Sec One */}
      <div className={styleHeader.headerSecOne}>
        {/* contenido del boton */}
        <div className={contentImgMenu} onClick={newClickSide}>
          {/* logo del menu lateral */}
          <img className={bgImgMenu} src={imgMenu} alt="menu del header" />
        </div>
        <div className={styleHeader.containerLogo}>
          <img
            src={logoHeader}
            className={styleHeader.logoHeader}
            alt="logo de la app"
          />
          {/* nombre del usuario del header */}
          <strong
            className={verifyTheme(
              theme,
              styleHeader.styleTextUserN,
              styleHeader.dark
            )}
          >
            <span className={styleHeader.headerSpan}>Bienvenido, </span>
            {userName}
          </strong>
        </div>
      </div>
      {/* segunda parte del header Sec Two */}
      <div onClick={clickMenuSetting} className={secTwoActive}>
        <div className={styleHeader.contentProfile}>
          <img
            className={styleHeader.imgProfile}
            src={imgProfile}
            alt="Perfil del usuario"
          />
        </div>
        <div className={triangleActive}></div>
      </div>
      {/* ajustes */}
      <Settings
        imgUser={imgProfile}
        name={name}
        lastName={lastName}
        userEmail={userEmail}
        setting={menuSetting}
        theme={theme}
        clickTheme={clickTheme}
      />
    </header>
  );
}

export default Header;
