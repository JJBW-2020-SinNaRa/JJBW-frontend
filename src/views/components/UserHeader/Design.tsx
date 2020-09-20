import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 36px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
`

export const HeaderLink = styled.h3`
  font-size: 24px;
  
   a {
    color: #5C5959;
    text-decoration: none;
    
    &.active {
      color: #A451F7;
    }
   }
`;
