import styled from "styled-components";
import Images from "../assets";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/routes"

const TopBar = () => {
  return (
    <TopBarContainer>
      <Link to={ROUTES.home}>
        <img src={Images.logo} alt="logo" />
      </Link>
    </TopBarContainer>
  )
};


const TopBarContainer = styled.div`
  text-align: center;

  img {
    height: 50px;
  }
`;

export default TopBar;
