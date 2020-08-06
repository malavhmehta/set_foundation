import {createGlobalStyle} from "styled-components";

import {theme} from "./theme";
import {fontFaces} from "./fonts";
const {colors, fonts, fontSizes} = theme;

export const GlobalStyle = createGlobalStyle`
  ${fontFaces};
  
  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
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
    min-height: 100%;
    overflow-x: hidden;
    width: 100%;
  }
`;
