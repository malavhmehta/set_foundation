import { ArrowRight, ChevronLeft, ChevronRight } from "styled-icons/feather";
import React, { useState } from "react";
import { hex2rgba, media, theme } from "../../styles";

import Fade from "react-reveal";
import Fader from "react-fader";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const { colors, fontSizes } = theme;

const Title = styled.h2`
  color: ${colors.text};
  font-size: ${fontSizes.lg};
  ${media.md`font-size: ${fontSizes.xl}`};
  font-weight: 500;
  margin-bottom: 2.5rem;
`;

const Content = styled.p`
  color: ${colors.text};
  font-size: ${fontSizes.sm};
  ${media.md`font-size: ${fontSizes.md}`};
  font-weight: 500;
`;

const StyledLink = styled(HashLink)`
  color: ${colors.accent} !important;
  font-size: ${fontSizes.xs};
  ${media.md`font-size: ${fontSizes.sm}`};
  font-weight: 600;
  text-decoration: none !important;
  position: relative;

  &:before {
    background-color: ${colors.accent};
    bottom: -0.45rem;
    content: "";
    left: 0;
    height: 0.16rem;
    position: absolute;
    transition: ${theme.transition};
    width: 0;
  }

  &:hover:before {
    width: 100%;
  }
`;

const IconContainer = styled.span`
  color: inherit !important;

  svg {
    transform: translateY(-2px) !important;
    stroke-width: 2px;
  }
`;

const InlineIconContainer = styled.span`
  color: inherit !important;

  svg {
    stroke-width: 2px;
  }
`;

const Icon = styled.div`
  align-items: center;
  background-color: ${colors.soft};
  border-radius: 50%;
  color: ${colors.accent};
  display: flex;
  height: 54px;
  justify-content: center;
  margin-bottom: 1.75rem;
  padding: 1rem;
  width: 54px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  ${media.md`margin-bottom: 0 !important;`};
  width: 100%;
`;

const Control = styled.button.attrs({
  className: "btn",
})`
  background-color: ${colors.accent};
  color: ${colors.text_alt} !important;
  font-size: ${fontSizes.xs};
  font-weight: bold;
  padding: 0.65rem 1rem;

  &:hover,
  &:active {
    background-color: ${colors.accent_darken};
    outline: none;
  }

  &:focus {
    box-shadow: none;
  }
`;

const Card = styled.div`
  border: 1px solid ${hex2rgba(colors.bg_alt, 0.1)};
  border-radius: ${theme.borderRadius};
  box-shadow: 0 0 25px ${hex2rgba(colors.bg_alt, 0.02)};
  margin-bottom: 1.5rem;
  padding: 2.5rem;
  ${media.md`padding: 3.5rem;`};
`;

const CardTitle = styled.h3`
  color: ${colors.text};
  font-size: ${fontSizes.sm};
  ${media.md`font-size: ${fontSizes.md}`};
  font-weight: 500;
  margin-bottom: 1.25rem;
`;

const CardContent = styled.p`
  color: ${colors.text};
  font-size: ${fontSizes.xs};
  ${media.md`font-size: ${fontSizes.sm}`};
  font-weight: 500;
  opacity: 0.8;
`;

const renderIcon = (SomeIcon) => <SomeIcon size={"22"} />;

export const About = (props) => {
  const [pos, setPos] = useState(0);
  const max = props.data.cards.length - 1;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items start mt-5 mt-md-0">
          <Fade bottom>
            <Title>{props.data.title}</Title>
            <Content>{props.data.content}</Content>
            <StyledLink to={props.data.link.href}>
              {props.data.link.caption}
              <InlineIconContainer className={"pl-2"}>
                <ArrowRight size="20" />
              </InlineIconContainer>
            </StyledLink>
          </Fade>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center my-5">
          <Fade bottom>
            <Fader>
              <Card>
                <Icon>{renderIcon(props.data.cards[pos].icon)}</Icon>
                <CardTitle>{props.data.cards[pos].title}</CardTitle>
                <CardContent>{props.data.cards[pos].content}</CardContent>
              </Card>
            </Fader>
            <Controls>
              <Control
                onClick={() => setPos(pos > 0 ? pos - 1 : max)}
                className={"mr-3 pr-4"}
              >
                <IconContainer className={"pr-1"}>
                  <ChevronLeft size="20" />
                </IconContainer>
                Previous
              </Control>
              <Control
                onClick={() => setPos(pos === max ? 0 : pos + 1)}
                className={"pl-4"}
              >
                Next
                <IconContainer className={"pl-1"}>
                  <ChevronRight size="20" />
                </IconContainer>
              </Control>
            </Controls>
          </Fade>
        </div>
      </div>
    </div>
  );
};
