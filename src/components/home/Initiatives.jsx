import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import Fade from "react-reveal";

import { theme, media, hex2rgba } from "../../styles";
const { colors, fontSizes } = theme;

const skewFactor = 6;

const Background = styled.div`
  background-color: ${colors.bg_alt};
  margin: 0 0 5rem;
  padding: 10rem 0;
  ${media.sm`padding: 15rem 0;`};
  ${media.lg`padding: 20rem 0 12.5rem;`};
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

const CardTitle = styled.h3`
  color: ${colors.text_alt};
  font-size: ${fontSizes.sm};
  ${media.md`font-size: ${fontSizes.md}`};
  font-weight: 500;
  margin-top: 2rem;
`;

const CardDescription = styled.p`
  color: ${colors.text_alt};
  font-size: ${fontSizes.xs};
  ${media.md`font-size: ${fontSizes.sm}`};
  font-weight: 500;
  margin-top: 1rem;
  opacity: 0.6;
`;

const Icon = styled.div`
  align-items: center;
  background-color: ${hex2rgba(colors.bg, 0.04)};
  border-radius: 50%;
  color: ${colors.text_alt};
  display: flex;
  height: 55px;
  justify-content: center;
  transition: ${theme.transition};
  width: 55px;

  svg {
    color: ${colors.bg};
    height: 40%;
    opacity: 0.5;
    stroke-width: 2px;
    width: 450%;
    transition: ${theme.transition};
  }
`;

const Clickable = styled(HashLink)`
  color: inherit !important;
  text-decoration: none !important;

  &:hover {
    ${Icon} {
      background-color: ${hex2rgba(colors.bg, 0.1)};
    }

    svg {
      opacity: 1;
    }
  }
`;

const renderIcon = (SomeIcon) => <SomeIcon size={"48"} />;

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
      <div className="row">
        {props.data.list.map((card) => (
          <div className="col-12 col-sm-6 col-md-4 mt-5">
            <Fade bottom>
              <Clickable to={card.href} key={card.href}>
                <Icon>{renderIcon(card.icon)}</Icon>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </Clickable>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  </Background>
);
