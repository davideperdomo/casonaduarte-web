import styled from "styled-components";

const REALSTATE_HOME_UTL_IMG = "https://firebasestorage.googleapis.com/v0/b/casonaduarte-56346.appspot.com/o/interiordesign%2Frealstate-home.png?alt=media&token=490f8995-3ebd-4f96-a412-2298ac861409";

const RealStateHome = () => {
  return (
    <RealStateHomeContent>
      <img src={REALSTATE_HOME_UTL_IMG} alt="realstate home" />
    </RealStateHomeContent>
  );
};

const RealStateHomeContent = styled.div`
  img {
    width: 100%;
  }
`;

export default RealStateHome;