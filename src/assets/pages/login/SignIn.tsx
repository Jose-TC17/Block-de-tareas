import ContentLogin from "./ContentLogin";
import HeaderLogin from "./HeaderLogin";
import styleSignIn from "../CSS/SignIn.module.css";
import Input from "./Input";
import imgPerson2 from "../../images/imagen2.webp";
import ShowPassword from "./ShowPassword";
import BtnSocial from "./BtnSocial";
import styleContent from "../CSS/ContentLogin.module.css";
import { useState } from "react";

export default function SignIn() {
  const [checkedP, setCheckedP] = useState(false);

  const funcCheckedP = () => {
    setCheckedP(!checkedP);
  };
  const typeInput: string = checkedP ? "text" : "password";

  const inputSignIn: string[][] = [
    ["NOMBRES:", "text", "name", "Nombres", "name"],
    ["APELLIDOS:", "text", "lastname", "Apellidos", "lastname"],
    ["CREAR CORREO:", "email", "email", "Ejemplo@gmail.com", "email"],
    [
      "CREAR CONTRASEÑA",
      typeInput,
      "email",
      "**********************",
      "password",
    ],
  ];
  return (
    <>
      <HeaderLogin btnName="Iniciar Sesión" link="/" />
      <ContentLogin
        classN={[styleContent.container, styleContent.register].join(" ")}
      >
        <>
          <img className={styleSignIn.imgPerson} src={imgPerson2} alt="img" />
          <div className={styleSignIn.containerForm}>
            <form className={styleSignIn.form} action="">
              <p className={styleSignIn.titleForm}>CREAR CUENTA</p>
              <div className={styleSignIn.containerInput}>
                {inputSignIn.map((element, index) => (
                  <Input
                    text={element[0]}
                    typeInput={element[1]}
                    nameInput={element[2]}
                    placeholder={element[3]}
                    idInput={element[4]}
                    key={index}
                  />
                ))}
              </div>
              <ShowPassword typeChecked={checkedP} funcChecked={funcCheckedP} />
              <input
                className={styleSignIn.submit}
                type="submit"
                value="REGISTRARSE    "
              />
              <BtnSocial />
            </form>
          </div>
        </>
      </ContentLogin>
    </>
  );
}
