import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

import comingSoon from "../assets/images/coming_soon.png";
import { theme, media, hex2rgba } from "../styles";
const { colors, fontSizes } = theme;

const Container = styled.div.attrs({
  className: "container",
})`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  min-height: 100vh;
`;

const Header = styled.h1`
  color: ${colors.text};
  font-size: 50px;
  ${media.md`
    font-size: ${fontSizes.h1}
    padding-top: 0;
  `};
  font-weight: 600;
  padding-top: 3rem;
`;

const Description = styled.p`
  color: ${hex2rgba(colors.text, 0.6)};
  font-size: ${fontSizes.md};
  ${media.md`font-size: ${fontSizes.lg}`};
  font-weight: 500;
  padding: 1.5rem 0 2rem;

  code {
    color: ${colors.accent};
    font-weight: 600;
  }
`;

const BackButton = styled(HashLink)`
  background-color: ${colors.accent};
  border-radius: ${theme.borderRadius};
  color: ${colors.text_alt} !important;
  font-size: ${fontSizes.sm};
  font-weight: 600;
  padding: 0.8rem 1.4rem;
  transition: ${theme.transition};

  &:hover {
    background-color: ${colors.accent_darken};
    text-decoration: none;
  }
`;

export const ComingSoon = () => (
  <Container>
    <div className="row">
      <div className="col-12 d-md-none">
        <img src={comingSoon} alt="Coming soon." className="img-fluid" />
      </div>

      <div className="col-12 col-md-6">
        <Header>Coming soon...</Header>

        <Description>
          This page is still under construction. Check back later to see if the
          web page has updated. In the meantime, click the button below to learn
          more about the SET Foundation.
        </Description>

        <BackButton to="/">Learn more</BackButton>
      </div>

      <div className="d-none d-md-flex col-md-6">
        <img src={comingSoon} alt="Coming soon." className="img-fluid" />
      </div>
    </div>
  </Container>
);
