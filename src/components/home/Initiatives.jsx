import React from "react";
import styled from "styled-components";

import { theme, media } from "../../styles";
const { colors, fontSizes } = theme;

const skewFactor = 6;

const Background = styled.div`
  background-color: ${colors.bg_alt};
  margin: 0 0 5rem;
  padding: 15rem 0;
  transform: skewY(-${skewFactor}deg) translateY(-180px);
  ${media.sm`transform: skewY(-${skewFactor}deg) translateY(-225px);`};
  ${media.lg`transform: skewY(-${skewFactor}deg) translateY(-300px);`};
  width: 100%;
  z-index: -1;
`;

export const Initiatives = (props) => <Background></Background>;
