/**
 * fonts.js
 *
 * font imports for the project:
 *  - sans-serif => HK Grotesk
 */

import {css} from "styled-components";

import HKGroteskLight from "../assets/fonts/HKGrotesk-Light.otf";
import HKGroteskLightItalic from "../assets/fonts/HKGrotesk-LightItalic.otf";
import HKGroteskRegular from "../assets/fonts/HKGrotesk-Regular.otf";
import HKGroteskItalic from "../assets/fonts/HKGrotesk-Italic.otf";
import HKGroteskMedium from "../assets/fonts/HKGrotesk-Medium.otf";
import HKGroteskMediumItalic from "../assets/fonts/HKGrotesk-MediumItalic.otf";
import HKGroteskSemiBold from "../assets/fonts/HKGrotesk-SemiBold.otf";
import HKGroteskSemiBoldItalic from "../assets/fonts/HKGrotesk-SemiBoldItalic.otf";
import HKGroteskBold from "../assets/fonts/HKGrotesk-Bold.otf";
import HKGroteskBoldItalic from "../assets/fonts/HKGrotesk-BoldItalic.otf";
import HKGroteskExtraBold from "../assets/fonts/HKGrotesk-ExtraBold.otf";
import HKGroteskBlack from "../assets/fonts/HKGrotesk-Black.otf";

export const fontFaces = css`
  @font-face {
    font-family: 'HK Grotesk';
    src: url(${HKGroteskBold}) format('opentype');
    font-weight: bold;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'HK Grotesk';
    src: url(${HKGroteskRegular}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'HK Grotesk';
    src: url(${HKGroteskSemiBold}) format('opentype');
    font-weight: 600;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'HK Grotesk';
    src: url(${HKGroteskSemiBoldItalic}) format('opentype');
    font-weight: 600;
    font-style: italic;
  }
  
  @font-face {
    font-family: 'HK Grotesk';
    src: url(${HKGroteskExtraBold}) format('opentype');
    font-weight: 800;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'HK Grotesk';
    src: url(${HKGroteskLight}) format('opentype');
    font-weight: 300;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'HK Grotesk';
    src: url(${HKGroteskMediumItalic}) format('opentype');
    font-weight: 500;
    font-style: italic;
  }
  
  @font-face {
    font-family: 'HK Grotesk';
    src: url(${HKGroteskBoldItalic}) format('opentype');
    font-weight: bold;
    font-style: italic;
  }
  
  @font-face {
    font-family: 'HK Grotesk';
    src: url(${HKGroteskItalic}) format('opentype');
    font-weight: normal;
    font-style: italic;
  }
  
  @font-face {
    font-family: 'HK Grotesk';
    src: url(${HKGroteskBlack}) format('opentype');
    font-weight: 900;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'HK Grotesk';
    src: url(${HKGroteskLightItalic}) format('opentype');
    font-weight: 300;
    font-style: italic;
  }
  
  @font-face {
    font-family: 'HK Grotesk';
    src: url(${HKGroteskMedium}) format('opentype');
    font-weight: 500;
    font-style: normal;
  }
`;
