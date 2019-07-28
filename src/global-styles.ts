import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 10px;  
  }
  body {
    font-size: 1.6rem;
    font-family: "Open Sans", sans-serif;
  }
`;
