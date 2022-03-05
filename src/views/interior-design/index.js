import styled from "styled-components";
import { Outlet } from "react-router";
import { ROUTES } from "../../utils/routes";
import MenuBar from "../../containers/menu-bar";

const interior_links = [
  {
    route: ROUTES.interior_design,
    label: "index"
  },
  {
    route: ROUTES.interior_design_projects,
    label: "PROYECTOS"
  },
  {
    route: "contact",
    label: "CONTACTO"
  }
]

const InteriorDesign = () => {

  return (
    <div>
      <MenuBar links={interior_links} />
      <LateralContainer>
        <p>
          interior <b>interiorisme</b> interior design
        </p>
      </LateralContainer>
      <Outlet />
    </div>
  )
};

const LateralContainer = styled.div`
`;

export default InteriorDesign;