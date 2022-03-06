import styled from 'styled-components';

const Card = styled.div`
  max-width: 918px;
  margin: auto;

  -webkit-box-shadow: 0px 5px 8px 0px rgba(153,153,153,1);
  -moz-box-shadow: 0px 5px 8px 0px rgba(153,153,153,1);
  box-shadow: 0px 5px 8px 0px rgba(153,153,153,1);
  
  border-radius: 2px;
  padding: 1em 2em;
`;

export default Card;


  //background-color: ${({ theme }) => theme.colors.backgroundLight};
  //border: 0px solid ${({ theme }) => theme.colors.black};