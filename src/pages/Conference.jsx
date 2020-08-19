import React from "react";

import { Landing, Sponsors, About } from "../components/conference";
import { Anchor } from "../components/common";

export const Conference = (props) => (
  <div id="conference">
    <Landing data={props.data.hero} />
    <Sponsors data={props.data.sponsors} />
    <Anchor anchor="about" />
    <About data={props.data.about} />
    <Anchor anchor="why" />
    <Anchor anchor="schedule" />
    <Anchor anchor="past" />
  </div>
);
