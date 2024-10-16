import styleIndex from "../CSS/Index.module.css";
import Input from "./Input.tsx";
import ShowPassword from "./ShowPassword.tsx";
import HeaderLogin from "./HeaderLogin.tsx";
import imgPerson from "../../images/imagen.webp";
import Social from "./BtnSocial.tsx";
import ContentLogin from "./ContentLogin.tsx";
import styleContent from "../CSS/ContentLogin.module.css";
import { useState } from "react";

export default function Login() {
  const [checkedP, setCheckedP] = useState(false);

  const funcCheckedP = () => {
    setCheckedP(!checkedP);
  };

  const typeInput: string = checkedP ? "text" : "password";

  const inputLogin: string[][] = [
    ["CORREO:", "email", "email", "Ejemplo@gmail.com", "email"],
    ["CONTRASEÑA", typeInput, "password", "**********************", "password"],
  ];

  return (
    <>
      <HeaderLogin btnName="Registrarse" link="./sign-in" />
      <ContentLogin classN={styleContent.container}>
        <>
          <img className={styleIndex.imgPerson} src={imgPerson} alt="img" />
          <div className={styleIndex.containerForm}>
            <form className={styleIndex.form} action="">
              <p className={styleIndex.titleForm}>Iniciar Sesión</p>
              {inputLogin.map((element, index) => (
                <Input
                  text={element[0]}
                  typeInput={element[1]}
                  nameInput={element[2]}
                  placeholder={element[3]}
                  idInput={element[4]}
                  key={index}
                />
              ))}
              <ShowPassword typeChecked={checkedP} funcChecked={funcCheckedP} />
              <input
                className={styleIndex.submit}
                type="submit"
                value="INGRESAR"
              />
              <Social />
            </form>
          </div>
        </>
      </ContentLogin>
    </>
  );
}
