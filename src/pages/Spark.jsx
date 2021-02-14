import { hex2rgba, theme } from "../styles";

import { Anchor } from "../components/common";
import { Form } from "../components/newsletter";
import { Landing } from "../components/conference";
import React from "react";
import styled from "styled-components";

const Line = styled.hr`
  border-top: 1px solid ${hex2rgba(theme.colors.bg_alt, 0.1)};
  margin: 0;
`;

export const Spark = (props) => {
  return (
    <div id="up">
      <Landing data={props.data.hero} />
      <Line />

      <div className="mt-5" />
      <Anchor anchor="register" />
      <Form />
    </div>
  );
};
