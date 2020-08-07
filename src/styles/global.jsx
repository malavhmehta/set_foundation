import {createGlobalStyle} from "styled-components";

import {fontFaces} from "./fonts";
import {theme, hex2rgba} from "./theme";
const {colors, fonts, fontSizes} = theme;

export const GlobalStyle = createGlobalStyle`
  ${fontFaces};
  
  html {
    box-sizing: border-box;
    min-height: 100vh;
    scroll-behavior: smooth;
    width: 100%;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  body {
    background-color: ${colors.bg};
    color: ${colors.text};
    font-family: ${fonts.sans};
    font-size: ${fontSizes.sm};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1.6;
    margin: 0;
    min-height: 100vh;
    overflow-x: hidden;
    width: 100%;
  }
  
  ::selection {
    background-color: ${hex2rgba(colors.accent, .1)};
  }
  
  #root {
    min-height: 100vh;
  }
`;
