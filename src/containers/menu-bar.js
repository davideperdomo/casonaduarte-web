import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;

export default MenuBar;