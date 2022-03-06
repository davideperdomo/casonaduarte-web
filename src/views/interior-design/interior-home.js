import styled from "styled-components";

const INTERIOR_HOME_URL_IMG = "https://firebasestorage.googleapis.com/v0/b/casonaduarte-56346.appspot.com/o/interiordesign%2Finterior-home.png?alt=media&token=a2864242-9a9b-4c44-9020-f1df63d1867b";

const InteriorHome = () => {
	return (
		<InteriorHomeContainer>
			<img 
				src={INTERIOR_HOME_URL_IMG}
				alt="interior-home"
			/>
		</InteriorHomeContainer>
	);
};

const InteriorHomeContainer = styled.div`
	img {
		width: 100%;
	}
`;

export default InteriorHome;