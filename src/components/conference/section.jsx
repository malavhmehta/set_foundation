import { media, theme } from "../../styles";

import { ArrowRight } from "styled-icons/feather";
import Fade from "react-reveal";
import { HashLink } from "react-router-hash-link";
import React from "react";
import styled from "styled-components";

const { colors, fontSizes } = theme;

const Title = styled.h2`
  color: ${colors.text};
  font-size: ${fontSizes.lg};
  ${media.md`font-size: ${fontSizes.xl}`};
  font-weight: 500;
  margin-bottom: 2.5rem;
`;

const Content = styled.p`
  color: ${colors.text};
  font-size: ${fontSizes.sm};
  ${media.md`font-size: ${fontSizes.md}`};
  font-weight: 500;
`;

const StyledLink = styled(HashLink)`
  color: ${colors.accent} !important;
  font-size: ${fontSizes.xs};
  ${media.md`font-size: ${fontSizes.sm}`};
  font-weight: 600;
  text-decoration: none !important;
  position: relative;

  &:before {
    background-color: ${colors.accent};
    bottom: -0.45rem;
    content: "";
    left: 0;
    height: 0.16rem;
    position: absolute;
    transition: ${theme.transition};
    width: 0;
  }

  &:hover:before {
    width: 100%;
  }
`;

const IconContainer = styled.span`
  color: inherit !important;
  margin-left: 0.6rem;

  svg {
    stroke-width: 2px;
  }
`;

const StyledSection = styled.div.attrs({
  className: "container",
})`
  margin-top: 6rem;
`;

export const Section = (props) => (
  <StyledSection>
    <div className="row">
      <div className="col-12 d-flex flex-column justify-content-center align-items start">
        <Fade bottom>
          <div>
            <Title>{props.data.text.title}</Title>
            <Content>{props.data.text.content}</Content>
            {props.data.text.link && (
              <StyledLink to={props.data.text.link.href}>
                {props.data.text.link.caption}
                <IconContainer>
                  <ArrowRight size="20" />
                </IconContainer>
              </StyledLink>
            )}
          </div>
        </Fade>
      </div>
    </div>
  </StyledSection>
);
