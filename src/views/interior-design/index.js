import { Fragment } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Images from "../../assets";
import BottomBar from "../../containers/bottom-bar";
import MenuBar from "../../containers/menu-bar";
import TopBar from "../../containers/top-bar";
import { ROUTES } from "../../utils/routes";

const interior_links = [
  {
    route: ROUTES.interior_design_projects,
    label: "PROYECTOS"
  },
  {
    route: "contact",
    label: "CLIENTES"
  },
  {
    route: "contact",
    label: "ACERCA DE NOSOTROS"
  },
  {
    route: "contact",
    label: "CONTACTO"
  }
]

const InteriorDesign = () => {

  return (
    <Fragment>
      <TopBar />
      <MenuBar links={interior_links} />
      <ContentContainer>
        <div className="vertical">
          <Link to={ROUTES.interior_design}>
            <img 
              src={Images.interior_vertical} 
              alt="interior-vertical" 
              />
          </Link>
        </div>
        <Outlet />
        <div className="vertical" />
      </ContentContainer>
      <BottomBar />
    </Fragment>
  )
};

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 80vh;

  .vertical {
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      height: fit-content;
    }

    img {
      width: 20px;
    }
  }
`;

export default InteriorDesign;