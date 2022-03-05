import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import TopBar from "./containers/top-bar";
import BottomBar from "./containers/bottom-bar";
import { ROUTES } from "./utils/routes";
import Home from "./views/home";
import InteriorDesign from "./views/interior-design";
import InteriorProjects from "./views/interior-design/interior-projects";
import RealState from "./views/real-state";
import Contact from "./views/contact";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>  
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.interior_design} element={<InteriorDesign />} >
          <Route index element={<div>preview</div>} />
          <Route path={ROUTES.interior_design_projects} element={<InteriorProjects />} />
          <Route path={"contact"} element={<Contact />} />
        </Route>
        <Route path={ROUTES.real_state} element={<RealState />} />
      </Routes>
      <BottomBar />
    </BrowserRouter>
  );
}

export default App;
