import styled from "styled-components";
import Images from "../assets";

const TopBar = () => {
  return (
    <TopBarContainer>
      <img src={Images.logo} alt="logo" />
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
