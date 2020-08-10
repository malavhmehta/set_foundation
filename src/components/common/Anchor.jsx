import React from "react";
import styled from "styled-components";

const StyledAnchor = styled.div`
  content: "";
  display: inline-block;
  width: 1px;
  margin-top: -250px !important;
  padding-top: 250px !important;
  visibility: hidden;
`;

export const Anchor = (props) => <StyledAnchor id={props.anchor} />;
