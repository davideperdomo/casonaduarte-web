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
            animate={{ height: "40vh" }}
            transition={{ duration: 2 }}
          />
          <p className="animated-text" >Interior</p>
          <p className="rotation">Design</p>
          <p>Interiorisme</p>
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
          <p>Inmobiliaria</p>
          <p>Immobiliària</p>
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
  width: 100%;
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

    .rotation {
      transform: rotate(-90deg);
      position: absolute;
      margin-left: 110px;
      margin-top: -128px;
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
    width: 130px;
    left: 50%;
    margin-left: -65px;
    margin-bottom: 5px;
  }

  #realstate-line {
    margin-left: 189px;
    margin-bottom: -60px;
  }

  #inm-line {
    margin-left: 98px;
    margin-top: -39px;
  }

  @media (max-width: 720px){  
    p {
      font-size: 40px;
    }

    .interior {
      right: 44vw;
      .animated-text {
        margin-top: -40px;
      }
    }

    .real-state {
      left: 40vw;
    }

    #realstate-line {
      margin-left: 151px;
      margin-bottom: -30px;
    }

    #inm-line {
      margin-left: 78px;
      margin-top: -34px;
    }

    .logo-line {
      margin-left: 34px;
    }

    #line-2 {    
      margin-left: 108px;
      display: none;
    }

    .alt {
      display: none;
    }
  }
`;


export default Home;