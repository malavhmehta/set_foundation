import React from "react";

import { Landing, Sponsors, About } from "../components/conference";
import { Anchor, Countdown } from "../components/common";

export const Conference = (props) => (
  <div id="conference">
    <Landing data={props.data.hero} />
    <Sponsors data={props.data.sponsors} />
    <Anchor anchor="about" />
    <About data={props.data.about} />
    <Countdown
      target={props.data.countdown.time}
      location={props.data.countdown.location}
    />
    <Anchor anchor="why" />
    <Anchor anchor="schedule" />
    <Anchor anchor="past" />
  </div>
);
