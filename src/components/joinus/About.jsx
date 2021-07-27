import { hex2rgba, media, theme } from "../../styles";

import Fade from "react-reveal";
import Fader from "react-fader";
import React from "react";
import styled from "styled-components";

const { colors, fontSizes } = theme;

const Title = styled.h2`
  color: ${colors.text};
  font-size: ${fontSizes.lg};
  ${media.md`font-size: ${fontSizes.xl}`};
  font-weight: 500;
  margin-bottom: 2.5rem;
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
  return (
    <div className="container pt-5 mt-5">
      <div className="row pt-5">
        <div className="col-12">
          <Fade bottom>
            <Title>{props.data.title}</Title>
          </Fade>
        </div>
      </div>

      {props.data.cards.map((card) => (
        <div className="row" key={card.title}>
          <div className="col-12">
            <Fade bottom>
              <Fader>
                <Card>
                  <Icon>{renderIcon(card.icon)}</Icon>
                  <CardTitle>{card.title}</CardTitle>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <CardContent>{card.content}</CardContent>
                    </div>
                    <div className="col-12 col-md-6">
                      <CardContent>{card.post}</CardContent>
                    </div>
                  </div>
                </Card>
              </Fader>
            </Fade>
          </div>
        </div>
      ))}
    </div>
  );
};
