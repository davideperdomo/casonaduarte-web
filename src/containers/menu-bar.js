import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const MenuBar = ({ links }) => {
  const [openMenu, setOpenMenu] = useState(true);

  const getNavigationLinks = () => 
    links.map( (itm, idx) => 
      <Link 
        key={`link-${idx}`} 
        to={itm.route} 
        onClick={()=>setOpenMenu(false)}
      >
        {itm.label}
      </Link>
    );

  return (
    <MenuContainer>
      { openMenu && 
        <MenuResponsive 
          id="responsive-menu"
          animate={{ width: "70vw" }}
          transition={{ duration: 1.5 }}
        >
          <div id="responsive-links">
            { getNavigationLinks() }
          </div>
        </MenuResponsive>
      }
      <button id="menu-btn" onClick={()=>setOpenMenu(!openMenu)}>
        <span className="material-icons-round">
          menu
        </span>
      </button>
      <div className="links">
        { getNavigationLinks() }
      </div>
    </MenuContainer>
  )
};

const MenuResponsive = styled(motion.div)`
  display: none !important;
  position: fixed;
  background-color: white;
  width: 1px;
  max-width: 500px;
  height: 80vh;
  top: 0;
  right: 0;
  border-bottom-left-radius: 5px;

  -webkit-box-shadow: 0px 1px 8px 0px rgb(0 0 0);
  -moz-box-shadow: 0px 1px 8px 0px rgb(0 0 0);
  box-shadow: 0px 1px 8px 0px rgb(0 0 0);

  #responsive-links {
    display: flex;
    flex-direction: column;
    text-align: right;
    padding: 3em 1em;
    font-size: 2em;
  };

  @media (max-width: 720px){
    display: block !important;
    
    a {
      margin: 6px 0;
    }
  };
`;

const MenuContainer = styled.div`
  .links {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 800px;
    margin: auto;
    height: 40px;
  }

  a {
    text-decoration: none;
    font-weight: 600;
    color: black;
  }

  #menu-btn {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    margin: 4px;
    border: 0px;

    -webkit-box-shadow: 0px 0px 1px 0px;
    -moz-box-shadow: 0px 0px 1px 0px;
    box-shadow: 0px 0px 1px 0px;

    span {
      font-size: 30px;
    }
  };


  @media (max-width: 720px){
    .links {
      display: none;
    }

    a {
      margin: 6px 0;
    }

    #menu-btn {
      display: block;
    };
  };

`;

export default MenuBar;