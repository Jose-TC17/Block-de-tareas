import linkMenu from "./CSS/LinksMenu.module.css";
import { NavLink } from "react-router-dom";
import { functionTheme } from "../../utils/utlTheme";

type Props = {
  imgMenu: string;
  theme: boolean;
  textListMenu: string;
  linkPage: string;
};

function LinksMenu(props: Props) {
  const { imgMenu, textListMenu, linkPage, theme } = props;

  const { verifyTheme } = functionTheme();
  const setTheme = verifyTheme(theme, linkMenu.link, linkMenu.dark);

  return (
    <>
      <li className={linkMenu.li}>
        <NavLink
          className={({ isActive }) =>
            isActive ? [setTheme, linkMenu.Page].join(" ") : setTheme
          }
          to={linkPage}
        >
          <img
            className={verifyTheme(theme, linkMenu.img, linkMenu.dark)}
            src={imgMenu}
            alt={`img ${imgMenu}`}
          />
          {textListMenu}
        </NavLink>
      </li>
    </>
  );
}

export default LinksMenu;
