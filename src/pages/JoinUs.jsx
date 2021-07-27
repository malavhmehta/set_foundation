import { About, FormNew } from "../components/joinus";
import { Landing, Section } from "../components/conference";
import { hex2rgba, media, theme } from "../styles";

import { Anchor } from "../components/common";
import { HashLink } from "react-router-hash-link";
import React from "react";
import styled from "styled-components";

const { colors, fontSizes } = theme;

const Line = styled.hr`
  border-top: 1px solid ${hex2rgba(theme.colors.bg_alt, 0.1)};
  margin: 0;
`;

const LinkButton = styled(HashLink).attrs({
  className: "btn",
})`
  background-color: ${colors.accent};
  color: ${colors.text_alt} !important;
  font-size: ${fontSizes.sm};
  font-weight: bold;
  padding: 0.75rem 1.2rem;

  &:hover,
  &:active {
    background-color: ${colors.accent_darken};
    outline: none;
  }

  &:focus {
    box-shadow: none;
  }
`;

const StyledLink = styled.a`
  color: ${colors.accent} !important;
  font-size: ${fontSizes.sm};
  ${media.md`font-size: ${fontSizes.md}`};
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

export const JoinUs = (props) => {
  return (
    <div id="up">
      <Landing data={props.data.hero} />
      <Line />

      <Anchor anchor="about" />
      <Section
        data={{
          text: {
            title:
              "Applications for the SET 2021 Conference Team are now open!",
            content: (
              <>
                We are excited to announce that applications for the SET 2021
                Conference Team are now open!
                <br />
                <br />
                SET is a non-profit, student-run organization that seeks to
                create an interest in engineering and technological career
                opportunities in youth.
                <br />
                <br />
                As a member of the Conference Team, you will work with a group
                of motivated individuals to organize the 2021 SET conference.
                <br />
                <br />
                SET Conference 2021 will be held online due to considerations
                for the COVID-19 pandemic. The event is a one-day conference
                consisting of workshop sessions from industry professionals and
                academics in various engineering disciplines, followed by a
                competition in which participants rapidly draft a solution to a
                design challenge.
                <br />
                <br />
                If you demonstrate great initiative, a thirst for knowledge
                about engineering, and want to join a network of exceptional
                future technological professionals, we encourage you to apply!
                <br />
                <br />
                If you have any questions about our organization or the
                application process, feel free to email us{" "}
                <StyledLink href="mailto:hr@setfoundation.ca">
                  hr@setfoundation.ca
                </StyledLink>
                !
                <br />
                <br />
                <LinkButton to={"/joinus#apply"}>Apply now</LinkButton>
              </>
            ),
          },
        }}
      />

      <About data={props.data.about} />

      <div className="mt-5" />

      <Anchor anchor="apply" />
      <FormNew />
    </div>
  );
};
