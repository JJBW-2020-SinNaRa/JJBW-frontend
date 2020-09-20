import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Noto Sans KR" ,sans-serif;
  }
  
  body {
    padding: 0 24px;
    
    #root {
      max-width: 768px;
      margin: 0 auto;
    }
  }
`;
