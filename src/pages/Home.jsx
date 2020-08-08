import React from "react";

import { Landing, Initiatives } from "../components/home";

export const Home = (props) => (
  <div id="home">
    <Landing data={props.data.hero} />
    <Initiatives data={props.data} />
  </div>
);
