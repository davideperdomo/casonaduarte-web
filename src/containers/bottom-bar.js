import Images from "../assets";
import styled from "styled-components";

const BottomBar = () => {
  return (
    <BottomBarContainer>
      <img src={Images.logo_alt} />
    </BottomBarContainer>
  )
};

const BottomBarContainer = styled.div`
  text-align: center;

  img {
    height: 50px;
  }
`;

export default BottomBar;