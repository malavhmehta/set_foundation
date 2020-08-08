import React from "react";
import styled, { keyframes } from "styled-components";
import Fade from "react-reveal";

import { theme, media } from "../../styles";
const { colors, fontSizes } = theme;

const skewFactor = 6;

const Background = styled.div`
  background-color: ${colors.bg_alt};
  margin: 0 0 5rem;
  padding: 10rem 0;
  ${media.sm`padding: 15rem 0;`};
  ${media.lg`padding: 20rem 0;`};
  transform: skewY(-${skewFactor}deg) translateY(-180px);
  ${media.sm`transform: skewY(-${skewFactor}deg) translateY(-225px);`};
  ${media.lg`transform: skewY(-${skewFactor}deg) translateY(-300px);`};
  transition: ${theme.transition};
  width: 100%;
  z-index: -1;

  & > * {
    transform: skewY(${skewFactor}deg);
  }
`;

const Header = styled.h2`
  color: ${colors.text_alt};
  font-size: ${fontSizes.lg};
  ${media.md`font-size: ${fontSizes.xl}`};
  font-weight: 500;
  margin: 0 0 2.5rem;
  max-width: 550px;
`;

const Description = styled.p`
  color: ${colors.text_alt};
  font-size: ${fontSizes.md};
  ${media.md`font-size: ${fontSizes.lg}`};
  font-weight: 500;
  max-width: 775px;
  opacity: 0.6;
`;

export const Initiatives = (props) => (
  <Background>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Fade bottom>
            <Header>{props.data.title}</Header>
            <Description>{props.data.description}</Description>
          </Fade>
        </div>
      </div>
    </div>
  </Background>
);
