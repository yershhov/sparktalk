import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
      box-sizing: border-box;   
  }

  * {
      padding: 0;
      margin: 0;
      font-family: "Poppins", sans-serif;
      font-weight: 400;  
      color: white;
  }
`;

export default GlobalStyle;
