import React from "react";
import styled from "styled-components";

const StyledAnchor = styled.div`
  &:before {
    content: "";
    display: inline-block;
    width: 1px;
    margin-top: -250px;
    padding-top: 250px;
    visibility: hidden;
  }
`;

export const Anchor = (props) => <StyledAnchor id={props.anchor} />;
