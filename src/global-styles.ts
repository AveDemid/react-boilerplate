import { createGlobalStyle } from "styled-components";
import reboot from "styled-reboot";

const rebootCss = reboot();

export const GlobalStyles = createGlobalStyle`
  ${rebootCss}
  
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
