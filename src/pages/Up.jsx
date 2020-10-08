import { About, Landing } from "../components/conference";
import { Anchor, Countdown } from "../components/common";
import { Form, Schedule, Speakers } from "../components/up";
import { hex2rgba, theme } from "../styles";

import React from "react";
import styled from "styled-components";

const Line = styled.hr`
  border-top: 1px solid ${hex2rgba(theme.colors.bg_alt, 0.1)};
  margin: 0;
`;

export const Up = (props) => (
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
);
