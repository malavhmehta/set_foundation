import { hex2rgba, theme } from "../styles";

import { Anchor } from "../components/common";
import { Form, Embed } from "../components/spark";
import { Landing } from "../components/conference";
import React from "react";
import SparkLandingImage from "../assets/images/spark_landing.jpg";
import styled from "styled-components";

const Line = styled.hr`
  border-top: 1px solid ${hex2rgba(theme.colors.bg_alt, 0.1)};
  margin: 0;
`;

export const Spark = (props) => {
  return (
    <div id="up">
      <Landing data={props.data.hero} image={SparkLandingImage} />
      <Line />
      <div className="mt-5" />
      <Anchor anchor="case" />
      <Embed/>
      <div className="mt-5" />
      <Anchor anchor="register" />
      <Form />
    </div>
  );
};
