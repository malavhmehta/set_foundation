import { hex2rgba, media, theme } from "../../styles";

import Fade from "react-reveal";
import React from "react";
import styled from "styled-components";

const { colors, fontSizes } = theme;

const Title = styled.h2`
  color: ${colors.text};
  font-size: ${fontSizes.lg};
  ${media.md`font-size: ${fontSizes.xl}`};
  font-weight: 500;
  margin: 2.5rem 0;
`;

const CardContainer = styled.div`
  border: 1px solid ${hex2rgba(colors.bg_alt, 0.075)};
  border-radius: ${theme.borderRadius};
  box-shadow: 0 0 25px ${hex2rgba(colors.bg_alt, 0.02)};
  border-bottom-left-radius: ${theme.borderRadius};
  border-bottom-right-radius: ${theme.borderRadius};
  margin-bottom: 3rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  transition: ${theme.transition};
  width: 100%;
  z-index: 1;

  &:before {
    background-color: ${colors.accent};
    border-top-left-radius: ${theme.borderRadius};
    border-top-right-radius: ${theme.borderRadius};
    bottom: 0;
    content: "";
    display: block;
    left: 0;
    opacity: 0.6;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 0.4s ease-in-out;
  }

  &:hover:before {
    opacity: 0.4;
  }
`;

const Image = styled.img.attrs({
  className: "img-fluid",
})`
  border-top-left-radius: ${theme.borderRadius};
  border-top-right-radius: ${theme.borderRadius};
`;

const Description = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  ${media.md`flex-direction: row;`};
  justify-content: center;
  padding: 2.5rem 1.75rem;
`;

const Icon = styled.div`
  align-items: center;
  background-color: ${colors.soft};
  border-radius: 50%;
  color: ${colors.accent};
  display: flex;
  height: 54px;
  justify-content: center;
  margin-bottom: 1.5rem;
  ${media.md`
    margin-bottom: 0;
    margin-right: 1.5rem;
  `};
  padding: 1rem;
  width: 54px;

  svg {
    stroke-width: 2px;
  }
`;

const Text = styled.p`
  color: ${hex2rgba(colors.text, 0.6)};
  font-size: ${fontSizes.md};
  font-weight: 500;
  margin: 0;

  span {
    color: ${colors.text} !important;
  }
`;

const renderIcon = (SomeIcon) => <SomeIcon size={"22"} />;

export const Card = (props) => (
  <div className="col-12 col-md-6">
    <Fade bottom>
      <CardContainer>
        <ImageWrapper>
          <Image src={props.data.image} alt={props.data.reason} />
        </ImageWrapper>
        <Description>
          <Icon>{renderIcon(props.data.icon)}</Icon>
          <Text>
            <span>{props.data.reason}</span>: {props.data.description}
          </Text>
        </Description>
      </CardContainer>
    </Fade>
  </div>
);

export const Why = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <Title>Why attend?</Title>
      </div>
    </div>
    <div className="row">
      {props.data.map((card) => (
        <Card data={card} key={card.reason} />
      ))}
    </div>
  </div>
);
