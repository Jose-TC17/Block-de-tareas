import Rou from "./assets/routes/AppRouter";
// import Navegation from "./assets/components/Navegation.tsx";
import { StateSideMenu } from "./assets/Context/MenuContext.tsx";
import { FuncTheme } from "./assets/Context/ThemeContext.tsx";

function App() {
  return (
    <FuncTheme>
      <StateSideMenu>
        {/* llamando a las paginas */}
        <Rou />
      </StateSideMenu>
    </FuncTheme>
  );
}

export default App;
