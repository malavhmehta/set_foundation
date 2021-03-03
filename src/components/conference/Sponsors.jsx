import { hex2rgba, media, theme } from "../../styles";

import Fade from "react-reveal";
import Flickity from "react-flickity-component";
import React from "react";
import styled from "styled-components";

const SponsorImage = styled.img.attrs({
  className: "img",
})`
  filter: grayscale(100%);
  height: 60px;
  width: auto;
  ${media.md`height: 75px;`};
  margin-right: 40px;
  ${media.md`margin-right: 85px;`};
  opacity: 0.6;
  transition: ${theme.transition};

  &:hover {
    opacity: 1;
    filter: grayscale(0);
  }
`;

const StyledFlickity = styled(Flickity)`
  margin: 1.5rem 0;
  overflow-x: auto;
  ${media.md`margin: 2rem 0;`};

  &:hover,
  &:active,
  &:focus {
    outline: none;
    box-shadow: none;
  }

  ol,
  button {
    display: none;
  }
`;

const Line = styled.hr`
  border-top: 1px solid ${hex2rgba(theme.colors.bg_alt, 0.1)};
  margin: 0;
`;

export const Sponsors = (props) => (
  <>
    <Line />
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Fade bottom>
            <StyledFlickity
              options={{
                freeScroll: true,
                imagesLoaded: true,
                initialIndex: props.data.length / 2,
                autoPlay: 1000,
              }}
            >
              {props.data.map((sponsor, key) => (
                <a href={sponsor.href} key={sponsor.name}>
                  <SponsorImage src={sponsor.image} alt={sponsor.name} />
                </a>
              ))}
            </StyledFlickity>
          </Fade>
        </div>
      </div>
    </div>
    <Line />
  </>
);
