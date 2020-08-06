/**
 * mixins.js
 *
 * contains SCSS type mixins that are useful utilities for the styling of the
 * application, including functionalities for media queries
 */
import {css} from "styled-components";

// derived from the bootstrap breakpoints
const sizes = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em as breakpoints to work properly cross-browser and to support
  // clients that change their browser font size
  // source: https://zellwk.com/blog/media-query-units/

  const em = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${em}em) {
      ${css(...args)}
    }
  `;

  return accumulator;
}, {});
