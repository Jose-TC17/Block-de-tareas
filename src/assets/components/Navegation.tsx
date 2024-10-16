import Header from "./Header/Index.tsx";
import Menu from "./Menu/index.tsx";
import { verifyTheme } from "../hook/hookTheme.tsx";

// impotando el css general
import "../../Index.css";

function Navegation() {
  // llamando a la funcion de los temas
  const { stateTheme, clickStateTheme } = verifyTheme();

  return (
    <div className="container-header-menu">
      <Menu theme={stateTheme} />
      <Header clickTheme={clickStateTheme} theme={stateTheme} />
    </div>
  );
}

export default Navegation;
