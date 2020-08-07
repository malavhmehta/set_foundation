import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

import errorImage from "../assets/images/404.png";
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
  padding-top: 3rem;
  ${media.md`
    font-size: ${fontSizes.h1}
    padding-top: 0;
  `};
  font-weight: bold;
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

export const ErrorPage = (props) => (
  <Container>
    <div className="row">
      <div className="col-12 d-md-none">
        <img src={errorImage} alt="404 error." className="img-fluid" />
      </div>

      <div className="col-12 col-md-6">
        <Header>Error 404.</Header>

        <Description>
          We couldn't find route <code>{props.current.pathname}</code> on this
          website. Let us know if we made a mistake. In the meantime, click the
          button below to go back to safety.
        </Description>

        <BackButton to="/">Go back</BackButton>
      </div>

      <div className="d-none d-md-flex col-md-6">
        <img src={errorImage} alt="404 error." className="img-fluid" />
      </div>
    </div>
  </Container>
);
