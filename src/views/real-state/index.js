import styled from "styled-components";
import { Outlet } from "react-router";
import { ROUTES } from "../../utils/routes";
import MenuBar from "../../containers/menu-bar";
import Images from "../../assets";
import { Link} from "react-router-dom";

const interior_links = [
  {
    route: ROUTES.real_state_projects,
    label: "PROYECTOS"
  },
  {
    route: "contact",
    label: "CONTACTO"
  }
]

const RealState = () => {

  return (
    <div>
      <MenuBar links={interior_links} />   
      <ContentContainer>
        <div className="vertical">
          <Link to={ROUTES.real_state}>
            <img src={Images.realstate_vertical} alt="realstate-vertical" />
          </Link>
        </div>
        <Outlet />
      </ContentContainer>
    </div>
  )
};

const ContentContainer = styled.div`
  display: flex;
  
  .vertical {
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      height: fit-content;
    }
    img {
      width: 20px;
    }
  }
`;

export default RealState;