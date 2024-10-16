import Content from "./Content.tsx";
import styleHome from "./CSS/Home.module.css";
import Notes from "../components/Notes/index.tsx";
import Navegation from "../components/Navegation.tsx";

function Home() {
  return (
    <>
      <Navegation />
      <Content>
        <h1 className={styleHome.title}>Tareas Registradas</h1>
        <Notes />
      </Content>
    </>
  );
}

export default Home;
