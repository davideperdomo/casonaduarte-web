import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuBar = ({ links }) => {
  return (
    <MenuContainer>
      {
        links.map( (itm, idx) => 
          <Link to={itm.route} key={`link-${idx}`} >
            {itm.label}
          </Link>
        )
      }
    </MenuContainer>
  )
};

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 800px;
  margin: auto;
  height: 40px;

  a {
    text-decoration: none;
  }
`;

export default MenuBar;