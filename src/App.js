import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
//import BottomBar from "./containers/bottom-bar";
//import TopBar from "./containers/top-bar";
import { ROUTES } from "./utils/routes";
import Contact from "./views/contact";
import Home from "./views/home";
import InteriorDesign from "./views/interior-design";
import InteriorHome from "./views/interior-design/interior-home";
import InteriorProjects from "./views/interior-design/interior-projects";
import InteriorDetail from "./views/interior-design/interior-detail";
import RealState from "./views/real-state";
import RealStateHome from "./views/real-state/real-state-home";
import RealStateProjects from "./views/real-state/real-state-projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.interior_design} element={<InteriorDesign />} >
          <Route index element={<InteriorHome />} />
          <Route path={ROUTES.interior_design_projects} element={<InteriorProjects />} />
          <Route path={`${ROUTES.interior_design_projects}/:projectId`} element={<InteriorDetail />} />
          <Route path={"contact"} element={<Contact />} />
        </Route>
        <Route path={ROUTES.real_state} element={<RealState />} >
          <Route index element={<RealStateHome />} />
          <Route path={ROUTES.real_state_projects} element={<RealStateProjects />} />
          <Route path={"contact"} element={<Contact />} />
        </Route>
        <Route path={ROUTES.contact} element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
