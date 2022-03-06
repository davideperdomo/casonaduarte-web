import Images from "../assets";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/routes";

const BottomBar = () => {
  return (
    <BottomBarContainer>
      <div className="lateral" style={{width: "65px"}}></div>
      <Link to={ROUTES.home}>
        <img className="cda-icon" src={Images.logo_alt} alt="logo" />
      </Link>
      <Link to={ROUTES.contact}>
        <img className="lateral" src={Images.contact_icon} alt="contact-lonk" />
      </Link>
    </BottomBarContainer>
  )
};

const BottomBarContainer = styled.div`
  background-color: white;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 55px;

  .cda-icon {
    height: 45px;
  }

  .lateral {
    width: 50px;
  }
`;

export default BottomBar;