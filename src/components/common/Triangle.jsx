import React from "react";
import styled from "styled-components";

import { theme, media } from "../../styles";
const { colors } = theme;

const StyledTriangle = styled.div`
  border-bottom: 100px solid ${colors.bg_alt};
  ${media.md`border-bottom-width: 200px`};
  ${media.lg`border-bottom-width: 225px`};
  ${media.xl`border-bottom-width: 300px`};
  border-left: 100vw solid transparent;
  height: 0;
  width: 100vw;
  margin: 0;
`;

export const Triangle = () => <StyledTriangle />;
