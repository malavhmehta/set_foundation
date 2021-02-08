import { media, theme } from "../styles";
import styled, { keyframes } from "styled-components";

import React from "react";

const { colors, fontSizes } = theme;

const ZoomIn = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`;

const Loader = styled.div`
  animation: 0.5s ${ZoomIn} ease-out forwards;
  align-items: center;
  background-color: ${colors.bg};
  display: flex;
  flex-direction: column;
  font-size: ${fontSizes.h1};
  height: 100vh;
  justify-content: center;
  width: 100vw;

  h1 {
    color: ${colors.accent};
    font-size: 42px;
    ${media.sm`font-size: 50px;`};
    ${media.md`font-size: 65px;`};
    font-weight: 700;
    transition: ${theme.transition};
  }
`;

const StyledLink = styled.a`
  color: ${colors.text} !important;
  font-size: 30px;
  ${media.sm`font-size: 30px;`};
  ${media.md`font-size: 40px;`};
  font-weight: 600;
  text-decoration: none !important;
  position: relative;
  margin-bottom: 2.5rem;

  &:before {
    background-color: ${colors.accent};
    bottom: 0.15rem;
    content: "";
    left: 0;
    height: 0.25rem;
    position: absolute;
    transition: ${theme.transition};
    width: 0;
  }

  &:hover:before {
    width: 100%;
  }
`;

export const Spark = (props) => {
  return (
    <Loader>
      <h1>SET SPARK</h1>
      <StyledLink href="https://docs.google.com/forms/d/e/1FAIpQLSfoA4mEbsXyCJKWE5jjGYwzICBb8Eg39bIkuuDwP1Nq88s_9w/viewform?usp=sf_link">
        More information
      </StyledLink>
    </Loader>
  );
};
