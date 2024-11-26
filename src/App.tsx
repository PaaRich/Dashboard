import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Transactions from "./pages/Transactions";
import Settings from "./pages/Settings";
import Research from "./pages/Research";
import Report from "./pages/Report";
import Team from "./pages/Team";
import Help from "./pages/Help";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetail/>}/>
          <Route path="transactions" element={<Transactions />} />
          <Route path="settings" element={<Settings />} />
          <Route path="research" element={<Research />} />
          <Route path="report" element={<Report />} />
          <Route path="team" element={<Team />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
