import React from "react";
import styled from "styled-components";
import { theme } from "../../styles";

export const Speakers = ({ speakers }) => {
  let n = speakers.length;
  const [cur, setCur] = React.useState(0);

  const prev = () => {
    if (cur - 1 < 0) setCur(n - 1);
    else setCur(cur - 1);
  };
  const next = () => {
    setCur((cur + 1) % n);
  };

  return <div className="container"></div>;
};
