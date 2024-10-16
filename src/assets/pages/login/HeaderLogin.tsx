import styleHeader from "../CSS/HeaderLogin.module.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo-block.webp";

type Props = {
  btnName: string;
  link: string;
};

export default function HeaderLogin(props: Props) {
  const { btnName, link } = props;
  return (
    <header className={styleHeader.headerIndex}>
      <div className={styleHeader.logo}>
        <img src={logo} alt="imagen del logo" className={styleHeader.imgLogo} />
        <p className={styleHeader.headerText}>Block de Tareas</p>
      </div>
      <div className={styleHeader.btnSignIn}>
        <Link className={styleHeader.btnLink} to={link}>
          {btnName}
        </Link>
      </div>
    </header>
  );
}
