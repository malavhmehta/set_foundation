import React from "react";
import styled, { keyframes } from "styled-components";
import Fade from "react-reveal";
import { ArrowRight } from "styled-icons/feather";

import HeroImage from "../../assets/images/hero.jpg";

import { theme, media, hex2rgba } from "../../styles";
const { colors, fontSizes } = theme;

const LandingWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8.5rem 0 5rem;
  ${media.sm`padding: 12rem 0 5rem;`};
  width: 100%;
`;

const Detail = styled.p`
  color: ${colors.accent};
  font-size: ${fontSizes.xxs};
  font-weight: 600;
  text-transform: uppercase;
`;

const Header = styled.h1`
  color: ${colors.text};
  font-size: 45px;
  ${media.md`font-size: ${fontSizes.h1}`};
  font-weight: 600;
`;

const Lead = styled.p`
  color: ${hex2rgba(colors.text, 0.6)};
  font-size: ${fontSizes.md};
  ${media.md`font-size: ${fontSizes.lg}`};
  font-weight: 500;
  max-width: 750px;
  padding: 1rem 0 2rem;
  text-align: center;
`;

const Button = styled.a.attrs({
  className: "btn",
})`
  background-color: ${colors.accent};
  color: ${colors.text_alt} !important;
  font-size: ${fontSizes.sm};
  font-weight: bold;
  margin: 0 0 5rem;
  padding: 0.9rem 1.5rem;

  &:hover,
  &:active {
    background-color: ${colors.accent_darken};
    outline: none;
  }

  &:focus {
    box-shadow: none;
  }

  &:disabled {
    cursor: no-drop;
    opacity: 0.7;
  }
`;

const Right = styled(ArrowRight)`
  height: 22px;
  width: 22px;
  stroke-width: 1.5px;
  transform: translateY(-0.5px);
`;

const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(35%);
  }
  
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ImageWrapper = styled.div`
  animation: 1s ${FadeIn} ease forwards;
  height: auto;
  position: relative;
  transition: ${theme.transition};
  width: 100%;
  ${media.sm`width: 90%`};
  ${media.md`width: 85%`};
  ${media.lg`width: 80%`};
  z-index: 1;

  &:before {
    background-color: ${colors.accent};
    border-radius: 7.5px;
    bottom: 0;
    content: "";
    display: block;
    left: 0;
    opacity: 0.65;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 0.4s ease-in-out;
  }

  &:hover:before {
    opacity: 0.4;
  }

  img {
    border-radius: 7.5px;
  }
`;

export const Landing = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <LandingWrapper>
          <Detail>{props.data.expanded}</Detail>
          <Fade bottom>
            <Header>{props.data.title}</Header>
            <Lead>{props.data.lead}</Lead>

            <Button href="/#initiatives">
              Learn more <Right />
            </Button>
          </Fade>

          <ImageWrapper>
            <img
              src={HeroImage}
              alt="SET Ottawa Lecture 2018"
              className="img-fluid"
            />
          </ImageWrapper>
        </LandingWrapper>
      </div>
    </div>
  </div>
);
