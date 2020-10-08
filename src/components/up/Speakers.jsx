import { ArrowRight, ChevronLeft, ChevronRight } from "styled-icons/feather";
import { hex2rgba, media, theme } from "../../styles";

import Fade from "react-reveal/Fade";
import Fader from "react-fader";
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

const Name = styled.p`
  color: ${colors.text};
  font-size: ${fontSizes.sm};
  ${media.md`font-size: ${fontSizes.md}`};
  font-weight: 500;
  margin-bottom: 0.5rem;
  padding: 0;
`;

const Role = styled.p`
  color: ${colors.accent};
  font-size: ${fontSizes.sm};
  font-weight: 500;
  margin-bottom: 0.25rem;
  padding: 0;
`;

const Uni = styled.p`
  color: ${colors.accent};
  font-size: ${fontSizes.sm};
  font-weight: 500;
`;

const Content = styled.p`
  color: ${colors.text};
  font-size: ${fontSizes.sm};
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

const Color = styled.div`
  position: relative;
  margin-bottom: 2rem;
  transition: ${theme.transition};
  width: 100%;
  z-index: 1;
  padding: 0;

  &:before {
    background-color: ${colors.accent};
    border-radius: ${theme.borderRadius};
    bottom: 0;
    content: "";
    display: block;
    left: 0;
    opacity: 0.35;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 0.4s ease-in-out;
  }

  &:hover:before {
    opacity: 0.1;
  }
`;

const ImageWrapper = styled.div.attrs({
  className:
    "col-12 col-md-6 flex-column justify-content-center align-items-start",
})`
  display: ${(props) => (!props.top ? "none" : "flex")} !important;
  ${media.md`display: ${(props) =>
    props.ltr ^ props.top ? "flex" : "none"} !important;`};
`;

const StyledSection = styled.div.attrs({
  className: "container",
})`
  margin-bottom: 6rem;
`;

const StyledImage = styled.img.attrs({
  className: "img-fluid",
})`
  border-radius: ${theme.borderRadius};
  box-shadow: 1rem 0 3rem ${hex2rgba(colors.bg_alt, 0.2)};
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  ${media.md`margin-bottom: 0 !important;`};
  width: 100%;
`;

const Control = styled.button.attrs({
  className: "btn",
})`
  background-color: ${colors.accent};
  color: ${colors.text_alt} !important;
  font-size: ${fontSizes.xs};
  font-weight: bold;
  padding: 0.65rem 1rem;

  &:hover,
  &:active {
    background-color: ${colors.accent_darken};
    outline: none;
  }

  &:focus {
    box-shadow: none;
  }
`;

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

  return (
    <StyledSection>
      <div className="row">
        <ImageWrapper ltr={false} top={true}>
          <Fade bottom>
            <Fader>
              <Color>
                <StyledImage
                  src={speakers[cur].image}
                  alt={`${speakers[cur].name}-Portrait`}
                  className="img-fluid"
                />
              </Color>
            </Fader>
          </Fade>

          <Controls>
            <Control onClick={prev} className={"mr-3 pr-4"}>
              <IconContainer className={"pr-1"}>
                <ChevronLeft size="20" />
              </IconContainer>
              Previous
            </Control>
            <Control onClick={next} className={"pl-4"}>
              Next
              <IconContainer className={"pl-1"}>
                <ChevronRight size="20" />
              </IconContainer>
            </Control>
          </Controls>
        </ImageWrapper>
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items start">
          <Title>Speakers</Title>
          <Fade bottom>
            <Fader>
              <Name>{speakers[cur].name}</Name>
              <Role>{speakers[cur].title}</Role>
              <Uni>{speakers[cur].university}</Uni>
              <Content>{speakers[cur].description}</Content>
              <StyledLink to="/up#register">
                Register now
                <IconContainer>
                  <ArrowRight size="20" />
                </IconContainer>
              </StyledLink>
            </Fader>
          </Fade>
        </div>
      </div>
    </StyledSection>
  );
};
