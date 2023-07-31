import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
      box-sizing: border-box;
  }

  * {
      padding: 0;
      margin: 0;
      font: inherit;
  }
`;

export default GlobalStyle;
