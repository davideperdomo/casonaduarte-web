import styled from "styled-components";
import Images from "../assets";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/routes"

const TopBar = () => {
  return (
    <TopBarContainer>
      <Link to={ROUTES.home}>
        <img src={Images.logo} alt="logo" />
        {/*<p>casona <b>duarte</b></p>*/}
      </Link>
    </TopBarContainer>
  )
};


const TopBarContainer = styled.div`
  text-align: center;

  img {
    height: 50px;
  }

  p {
    font-size: 3em;
    margin: 1px;
  }
`;

export default TopBar;
