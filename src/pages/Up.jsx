import { About, Landing, PastConference, Why } from "../components/conference";
import { Anchor, ComingSoon, Countdown } from "../components/common";
import { hex2rgba, theme } from "../styles";

import React from "react";
import styled from "styled-components";

const Line = styled.hr`
  border-top: 1px solid ${hex2rgba(theme.colors.bg_alt, 0.1)};
  margin: 0;
`;

export const Up = (props) => (
  <div id="conference">
    <Landing data={props.data.hero} />
    <Line />

    <Anchor anchor="about" />
    <About data={props.data.about} />
    <Countdown
      target={props.data.countdown.time}
      location={props.data.countdown.location}
    />

    <Anchor anchor="why" />
    <Why data={props.data.why} />

    <Anchor anchor="schedule" />
    <ComingSoon title={"Schedule"} />

    <Anchor anchor="past" />
    <PastConference data={props.data.past} />
  </div>
);
