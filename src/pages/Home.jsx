import React from "react";

import { Landing, Initiatives, Team } from "../components/home";
import { Section, Anchor } from "../components/common";

let initial = 1;

export const Home = (props) => (
  <div id="home">
    <Landing data={props.data.hero} />

    <Anchor anchor="initiatives" />
    <Initiatives data={props.data.initiatives} />

    <Anchor anchor="about" />
    {props.data.sections.map((section) => (
      <Section data={section} ltr={initial++ % 2} key={initial} />
    ))}

    <Anchor anchor="team" />
    {props.data.teams.map((team, i) => (
      <Team label={team.label} team={team.team} key={i} />
    ))}
  </div>
);
