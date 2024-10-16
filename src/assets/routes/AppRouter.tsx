import { Routes, Route } from "react-router-dom";

// llamando a las páginas
import Index from "../pages/login/login.tsx";
import SignIn from "../pages/login/SignIn.tsx";
import Home from "../pages/Home.tsx";
import PendingTasks from "../pages/PendingTasks.tsx";
import TasksProcess from "../pages/TaskProcess.tsx";
import ImportantTasks from "../pages/ImportantTasks.tsx";
import Favorites from "../pages/Favorites.tsx";
import SavedTasks from "../pages/SavedTasks.tsx";
import Comments from "../pages/Commets.tsx";
import Page404 from "../pages/Page404.tsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pending-tasks" element={<PendingTasks />} />
      <Route path="/tasks-process" element={<TasksProcess />} />
      <Route path="/important-tasks" element={<ImportantTasks />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/saved-tasks" element={<SavedTasks />} />
      <Route path="/my-comments" element={<Comments />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
}

export default AppRouter;
