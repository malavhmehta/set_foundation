import {theme} from "./theme";
const {colors, fontSizes} = theme;

export const Button = `
  background-color: ${colors.accent};
  border-radius: ${theme.borderRadius};
  color: ${colors.text_alt} !important;
  font-size: ${fontSizes.sm};
  font-weight: 600;
  padding: .8rem 1.4rem;
  transition: ${theme.transition};
  
  &:hover {
    background-color: ${colors.accent_darken};
    text-decoration: none;
  }
`;