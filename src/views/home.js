import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../utils/routes";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <HomeContainer>
      <Link to={ROUTES.interior_design}>
        <div className="interior">
          <AnimatedLine
            animate={{ height: "200px" }}
            transition={{ duration: 2 }}
          />
          <p>interior</p>
          <p>interiorisme</p>
        </div>
      </Link>
      <Link to={ROUTES.real_state}>
        <div className="interior alt">
          <AnimatedLine
            animate={{ height: "200px" }}
            transition={{ duration: 2 }}
            />
          <p>Real state</p>
        </div>
      </Link>
      <Link to={ROUTES.real_state}>
        <div className="real-state">
          <p>inmobiliaria</p>
          <p>immobiliària</p>
          <AnimatedLine
            animate={{ height: "200px" }}
            transition={{ duration: 2 }}
          />
        </div>
      </Link>
    </HomeContainer>
  )
};

const AnimatedLine = styled(motion.div)`
  background-color: black;
  width: 5px;
  height: 0px;
`;

const HomeContainer = styled.div`
  .interior {
    width: 200px;
    position: absolute;
    right: 60%;
  }

  .real-state {
    width: 200px;
    position: absolute;
    left: 60%;
    bottom: 55px;
  }

  .alt {
    left: 70%;
    bottom: none;
    top: 60%;
  }
`;


export default Home;