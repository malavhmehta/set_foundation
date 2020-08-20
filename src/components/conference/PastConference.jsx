import React, { useState, useRef } from "react";
import styled from "styled-components";

import { Triangle } from "../common";

import { theme, media, hex2rgba } from "../../styles";
const { colors, fontSizes } = theme;

const StyledBackground = styled.div`
  background-color: ${colors.bg_alt};
`;

export const PastConference = (props) => {
  let yearSelect = useRef();

  return (
    <>
      <Triangle />
      <StyledBackground>
        <div className="container">
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </StyledBackground>
    </>
  );
};
