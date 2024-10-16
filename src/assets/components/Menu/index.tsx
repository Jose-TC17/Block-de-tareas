//
import menuStyle from "./CSS/Menu.module.css";
import logoPlus from "../../images/plus.svg";
import LinksMenu from "./LinksMenu.tsx";
// llamando a las imagenes
import imgHome from "../../images/home.svg";
import imgTask from "../../images/imgList.svg";
import imgFavorites from "../../images/favorites.svg";
import imgKeep from "../../images/keep.svg";
import imgComent from "../../images/coment.svg";
import { functionSideMenu } from "../../utils/utlSideMenu.tsx";
import { useSideMenu } from "../../hook/hookSideMenu.tsx";

type Props = {
  // stateMenu: boolean;
  theme: boolean;
};

function Menu(props: Props) {
  const { theme } = props;

  // llamando a la funcion de la Menú lateral
  const { funcVerify } = functionSideMenu();

  // llamando al contexto
  const { stateMenu } = useSideMenu();

  // obteniendo la funcion de verificar
  const styleMenu: string = funcVerify(
    stateMenu,
    theme,
    menuStyle.menu,
    menuStyle.active,
    menuStyle.dark
  );

  // links de menu
  const linksMenu: string[][] = [
    [imgHome, "Inicio", "/home"],
    [imgTask, "Tareas Pendientes", "/pending-tasks"],
    [imgTask, "Tareas en Proceso", "/tasks-process"],
    [imgTask, "Tareas Importantes", "/important-tasks"],
    [imgFavorites, "Favoritos", "/Favorites"],
    [imgKeep, "Guardados", "/saved-tasks"],
    [imgComent, "Mis comentarios", "/my-comments"],
  ];

  return (
    <div className={styleMenu}>
      <div className={menuStyle.secBtnT}>
        <a href="" className={menuStyle.btnNewTask}>
          <img src={logoPlus} className={menuStyle.imgPlus} alt="logo plus" />
          <p>Nueva Tarea</p>
        </a>
      </div>
      <ul className={menuStyle.ul}>
        {linksMenu.map((element, index) => (
          <LinksMenu
            linkPage={element[2]}
            imgMenu={element[0]}
            theme={theme}
            textListMenu={element[1]}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
