import React from "react";

import { Landing } from "../components/conference";
import { Anchor } from "../components/common";

export const Conference = (props) => (
  <div id="conference">
    <Landing data={props.data.hero} />
    <Anchor anchor="about" />
    <Anchor anchor="why" />
    <Anchor anchor="schedule" />
    <Anchor anchor="past" />
  </div>
);
