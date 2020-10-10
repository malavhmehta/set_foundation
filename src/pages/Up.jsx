import { About, Landing } from "../components/conference";
import { Anchor, Countdown } from "../components/common";
import { Form, Schedule, Speakers } from "../components/up";
import { hex2rgba, media, theme } from "../styles";
import styled, { keyframes } from "styled-components";

import { HashLink } from "react-router-hash-link";
import React from "react";

const Line = styled.hr`
  border-top: 1px solid ${hex2rgba(theme.colors.bg_alt, 0.1)};
  margin: 0;
`;

const { colors, fontSizes } = theme;

const ZoomIn = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`;

const Loader = styled.div`
  animation: 0.5s ${ZoomIn} ease-out forwards;
  align-items: center;
  background-color: ${colors.bg};
  display: flex;
  flex-direction: column;
  font-size: ${fontSizes.h1};
  height: 100vh;
  justify-content: center;
  width: 100vw;

  h1 {
    color: ${colors.accent};
    font-size: 42px;
    ${media.sm`font-size: 50px;`};
    ${media.md`font-size: 65px;`};
    font-weight: 700;
    transition: ${theme.transition};
  }
`;

const BackButton = styled(HashLink)`
  background-color: ${colors.accent};
  border: none;
  border-radius: ${theme.borderRadius};
  color: ${colors.text_alt} !important;
  font-size: ${fontSizes.sm};
  font-weight: 600;
  padding: 0.8rem 1.4rem;
  margin-right: 1rem;
  transition: ${theme.transition};

  &:hover {
    background-color: ${colors.accent_darken};
    text-decoration: none;
  }
`;

const OpenStream = styled.a`
  background-color: ${colors.accent};
  border: none;
  border-radius: ${theme.borderRadius};
  color: ${colors.text_alt} !important;
  font-size: ${fontSizes.sm};
  font-weight: 600;
  padding: 0.8rem 1.4rem;
  transition: ${theme.transition};

  &:hover {
    background-color: ${colors.accent_darken};
    text-decoration: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const StyledLink = styled.a`
  color: ${colors.text} !important;
  font-size: 30px;
  ${media.sm`font-size: 30px;`};
  ${media.md`font-size: 40px;`};
  font-weight: 600;
  text-decoration: none !important;
  position: relative;
  margin-bottom: 2.5rem;

  &:before {
    background-color: ${colors.accent};
    bottom: 0.15rem;
    content: "";
    left: 0;
    height: 0.25rem;
    position: absolute;
    transition: ${theme.transition};
    width: 0;
  }

  &:hover:before {
    width: 100%;
  }
`;

export const Up = (props) => {
  const [closed, setClosed] = React.useState(true);

  return closed ? (
    <div id="up">
      <Landing data={props.data.hero} />
      <Line />

      <Anchor anchor="about" />
      <About data={props.data.about} />
      <Countdown
        target={props.data.countdown.time}
        location={props.data.countdown.location}
      />

      <div
        className="container"
        style={{ marginTop: "8rem", marginBottom: "6rem" }}
      >
        <Line />
      </div>
      <Anchor anchor="speakers" />
      <Speakers speakers={props.data.speakers} />

      <div
        className="container"
        style={{ marginTop: "4rem", marginBottom: "6rem" }}
      >
        <Line />
      </div>
      <Anchor anchor="schedule" />
      <Schedule data={props.data.schedule} />

      <div className="container" style={{ marginTop: "6rem" }}>
        <Line />
      </div>

      <Anchor anchor="register" />
      <Form />
    </div>
  ) : (
    <Loader>
      <h1>SET UP is live!</h1>
      <StyledLink href="https://www.twitch.tv/setottawa">
        twitch.tv/setottawa
      </StyledLink>
      <ButtonGroup>
        <BackButton onClick={() => setClosed(true)} to="/up#schedule">
          See schedule
        </BackButton>
        <OpenStream href="https://www.twitch.tv/setottawa">
          Open stream
        </OpenStream>
      </ButtonGroup>
    </Loader>
  );
};
