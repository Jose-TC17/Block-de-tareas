import settingH from "./CSS/Settings.module.css";
import Links from "./LinkSettings";
import themeDay from "../../images/theme-day.svg";
import themeNight from "../../images/theme-night.svg";
import logoPersonalize from "../../images/pencil.svg";
import logoModify from "../../images/key.svg";
import logoQuestion from "../../images/question.svg";
import logoClosedS from "../../images/closed-sesion.svg";
import { functionTheme } from "../../utils/utlTheme.tsx";

type Props = {
  name: string;
  lastName: string;
  userEmail: string;
  imgUser: string;
  setting: boolean;
  theme: boolean;
  clickTheme: () => void;
};

function Settings(props: Props) {
  const { name, lastName, userEmail, imgUser, setting, theme, clickTheme } =
    props;

  // obteniendo la funcion de verificacion de los temas
  const { verifyTheme } = functionTheme();

  // llamando al body
  const body: HTMLElement = document.body;

  // theme body
  const themeBody = theme
    ? body.classList.add("dark")
    : body.classList.remove("dark");

  // obteniendo el click del tema
  const clickStateTheme = () => {
    clickTheme();
    return themeBody;
  };

  // Obteniendo el username
  const shortName: string[] = name.split(" ");
  const shortLastName: string[] = lastName.split(" ");

  // nombre del usuario versión corta
  const userNameProfile: string = `${shortName[0]} ${shortLastName[0]}`;

  // obteniendo la función de verificación de tema
  const styleMenuSetting: string = verifyTheme(
    theme,
    settingH.headerSettings,
    settingH.dark
  );

  // abrir y cerrar el menu
  const stateMenuSetting = setting
    ? [settingH.headerSettings, settingH.active].join(" ")
    : settingH.headerSettings;

  // funcion del icono del tema
  const themeIcon: string = theme ? themeDay : themeNight;

  // nombre de los ajustes
  const nameLinks: string[][] = [
    [logoPersonalize, "Personalizar Perfil"],
    [logoModify, "Cambiar Contraseña"],
    [logoQuestion, "Ayuda"],
    [logoClosedS, "Cerrar Sesión"],
  ];

  return (
    <div className={[styleMenuSetting, stateMenuSetting].join(" ")}>
      <div className={settingH.contentImgs}>
        <div className={settingH.imgSettings}>
          <img
            className={settingH.img}
            src={imgUser}
            alt={`perfil de ${userNameProfile}`}
          />
        </div>
        {/* tema de claro o oscuro */}
        <img
          className={verifyTheme(theme, settingH.theme, settingH.dark)}
          onClick={clickStateTheme}
          src={themeIcon}
          alt="Tema de app"
        />
      </div>
      {/* datos del usuario (nombre y correo) */}
      <div className={settingH.dataUser}>
        <p className={verifyTheme(theme, settingH.nameUser, settingH.dark)}>
          {userNameProfile}
        </p>
        <p className={verifyTheme(theme, settingH.userEmail, settingH.dark)}>
          {userEmail}
        </p>
      </div>
      <hr className={verifyTheme(theme, settingH.hr, settingH.dark)} />
      <div className={settingH.containerButtons}>
        <ul className={settingH.listSettings}>
          {nameLinks.map((link, index) => (
            <Links
              key={index}
              theme={theme}
              funcVerifyTheme={verifyTheme}
              icono={link[0]}
            >
              {link[1]}
            </Links>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Settings;
