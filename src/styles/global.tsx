import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem; 
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme: { colors } }) => colors.white}
   
  }

  #root {
    width: 100%;
    height: 100%;
    min-height: calc(var(--vh, 1vh) * 100);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  `;

export default GlobalStyles;