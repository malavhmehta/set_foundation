import React from "react";

import { Landing, Initiatives } from "../components/home";
import { Section } from "../components/common";

let initial = 1;

export const Home = (props) => (
  <div id="home">
    <Landing data={props.data.hero} />
    <Initiatives data={props.data.initiatives} />
    {props.data.sections.map((section) => (
      <Section data={section} ltr={initial++ % 2} key={initial} />
    ))}
  </div>
);
