import React from "react";
import styled from "styled-components";
import { Lock } from "styled-icons/feather";

import { theme, media } from "../../styles";
const { colors, fontSizes } = theme;

const Title = styled.h2`
  color: ${colors.text};
  font-size: ${fontSizes.lg};
  ${media.md`font-size: ${fontSizes.xl}`};
  font-weight: 500;
  margin: 2.5rem 0;
`;

const Icon = styled.div`
  display: inline-block;
  color: ${colors.text};
  margin-right: 0.75rem;
  transform: translateY(-2px);

  svg {
    stroke-width: 2px;
  }
`;

const Text = styled.p`
  color: ${colors.text};
  font-size: ${fontSizes.sm};
  font-weight: 500;
`;

export const ComingSoon = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <Title>{props.title}</Title>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Text>
          <Icon>
            <Lock size={"18"} />
          </Icon>
          Coming soon... check back later for more information.
        </Text>
      </div>
    </div>
  </div>
);
