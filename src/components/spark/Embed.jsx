import React from "react";
import { media, theme } from "../../styles";

import CasePackage from "../../assets/spark2021_case_package.pdf";
import Fade from "react-reveal";
import styled from "styled-components";

const { colors, fontSizes } = theme;

const Heading = styled.h2`
  color: ${colors.text};
  font-size: ${fontSizes.lg};
  ${media.md`font-size: ${fontSizes.xl}`};
  font-weight: 500;
  margin: 1rem 0 1.5rem;
  text-align: center;
`;



const Frame = styled.iframe`
  width: 100% !important;
  height: 60vh !important;
`;

export const Embed = () => {
    return (
      <>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center justify-content-center">
            <Fade bottom>
              <Heading>SET SPARK Case Package</Heading>
            </Fade>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
              <Frame src={CasePackage}/>
            </div>
        </div>
      </div>
      </>
    );
}