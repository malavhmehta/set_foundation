import React from "react";

import { Landing, Sponsors } from "../components/conference";
import { Anchor } from "../components/common";

export const Conference = (props) => (
  <div id="conference">
    <Landing data={props.data.hero} />
    <Sponsors data={props.data.sponsors} />
    <Anchor anchor="about" />
    <Anchor anchor="why" />
    <Anchor anchor="schedule" />
    <Anchor anchor="past" />
  </div>
);
