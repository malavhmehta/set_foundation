import React from "react";

import { Landing, Form } from "../components/contact";
import { Anchor } from "../components/common";

export const Contact = (props) => (
  <div id="contact">
    <Landing data={props.data.hero} />
    <Anchor anchor="form" />
    <Form />
  </div>
);
