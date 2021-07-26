import { ChevronLeft, ChevronRight } from "styled-icons/feather";
import React, { useEffect, useState } from "react";
import { hex2rgba, media, theme } from "../../styles";

import Fade from "react-reveal";
import Fader from "react-fader";
import styled from "styled-components";

const { colors, fontSizes } = theme;

const Title = styled.h2`
  color: ${colors.text};
  font-size: ${fontSizes.lg};
  ${media.md`font-size: ${fontSizes.xl}`};
  font-weight: 500;
  margin-bottom: 2.5rem;
`;

const IconContainer = styled.span`
  color: inherit !important;

  svg {
    transform: translateY(-2px) !important;
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
  useEffect(() => {
    const interval = setInterval(() => {
      setPos(pos === max ? 0 : pos + 1);
    }, 4500);
    return () => clearInterval(interval);
  });

  return (
    <div className="container pt-5 mt-5">
      <div className="row pt-5">
        <div className="col-12">
          <Fade bottom>
            <Title>{props.data.title}</Title>
          </Fade>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <Fade bottom>
            <Fader>
              <Card>
                <Icon>{renderIcon(props.data.cards[pos].icon)}</Icon>
                <CardTitle>{props.data.cards[pos].title}</CardTitle>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <CardContent>{props.data.cards[pos].content}</CardContent>
                  </div>
                  <div className="col-12 col-md-6">
                    <CardContent>{props.data.cards[pos].post}</CardContent>
                  </div>
                </div>
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
