import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../utils/routes";
import { motion } from "framer-motion";
import Images from "../assets";

const Home = () => {
  return (
    <HomeContainer>
      <CasonaLogo>
        <p>
          casona <b>duarte</b>
        </p>
        <div className="logo-line" />
        <div className="logo-line" id="line-2" />
      </CasonaLogo>
      <Link to={ROUTES.home} >
        <img className="logo-alt" src={Images.logo_alt} alt="casona logo" />
      </Link>
      <Link to={ROUTES.interior_design}>
        <div className="interior">
          <AnimatedLine
            animate={{ height: "200px" }}
            transition={{ duration: 2 }}
          />
          <p className="animated-text" >interior</p>
          <p>interiorisme</p>
        </div>
      </Link>
      <Link to={ROUTES.real_state}>
        <div className="interior alt">
          <AnimatedLine
            id="realstate-line"
            animate={{ height: "30vh" }}
            transition={{ duration: 2 }}
            />
          <p>RealState</p>
        </div>
      </Link>
      <Link to={ROUTES.real_state}>
        <div className="real-state">
          <p>inmobiliaria</p>
          <p>immobiliària</p>
          <AnimatedLine
            id="inm-line"
            animate={{ height: "250px" }}
            transition={{ duration: 2 }}
          />
        </div>
      </Link>
    </HomeContainer>
  )
};

const AnimatedLine = styled(motion.div)`
  background-color: black;
  width: 4px;
  height: 0px;
`;

const CasonaLogo = styled.div`
  position: fixed;
  width: 100vw;
  text-align: center;

  p {
    margin: 0;
  }

  .logo-line {
    width: 6px;
    height: 50px;
    background-color: black;
    left: 50%;
    position: absolute;
    top: 0;
    margin-left: 42px;
  }

  #line-2 {    
    margin-left: 136px;
  }
`;

const HomeContainer = styled.div`
  p {
    font-size: 50px;
    color: black;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .interior {
    width: 200px;
    position: absolute;
    right: 60%;

    .animated-text {
      margin-top: -50px;
      margin-left: -3px;
    }
  }

  .real-state {
    width: 200px;
    position: absolute;
    left: 55%;
    bottom: 0px;
  }

  .alt {
    left: 70%;
    bottom: none;
    top: 70vh;
  }

  .logo-alt {
    bottom: 0;
    position: fixed;
    width: 200px;
    left: 50%;
    margin-left: -100px;
  }

  #realstate-line {
    margin-left: 189px;
    margin-bottom: -60px;
  }

  #inm-line {
    margin-left: 97px;
    margin-top: -39px;
  }
`;


export default Home;