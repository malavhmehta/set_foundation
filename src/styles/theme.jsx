/**
 * theme.js
 *
 * exports for the theme of the application, as called by the styled
 * components through the app
 */

/**
 * Converts a hex value to an rgba value, with the alpha defaulted as being
 * 1. Comparable to the SASS built-in <code>rgba()</code> mixin.
 *
 * @param hex: the hex code for the color
 * @param alpha: the opacity, a valid decimal in [0, 1]
 * @returns {string} the rgba css value
 */
export const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

const PRIMARY = "#ffffff";
const SECONDARY = "#221c48";
const ACCENT = "#5243aa";
const SOFT_ACCENT = hex2rgba("#eae6ff", 0.5);
const DARK_ACCENT = "#403585";

export const theme = {
  colors: {
    text: SECONDARY,
    text_alt: PRIMARY,
    accent: ACCENT,
    accent_darken: DARK_ACCENT,
    soft: SOFT_ACCENT,
    bg: PRIMARY,
    bg_alt: SECONDARY,
  },

  fonts: {
    sans:
      "HK Grotesk, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif",
    serif: "Times, serif",
    mono: "Roboto Mono, Lucida Console, Monaco, monospace",
  },

  fontSizes: {
    min: "16px",
    xxs: "13px",
    xs: "15px",
    sm: "17px",
    md: "21px",
    lg: "24px",
    xl: "31px",
    h1: "70px",
  },

  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
  borderRadius: "5px",
  boxShadow: "0 1.5rem 4rem",
};
