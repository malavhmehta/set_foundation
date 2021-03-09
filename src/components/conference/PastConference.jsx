import React, { useState } from "react";
import { hex2rgba, media, theme } from "../../styles";

import Carousel from "react-bootstrap/carousel";
import Fade from "react-reveal";
import { Triangle } from "../common";
import styled from "styled-components";

const { colors, fontSizes } = theme;

const Line = styled.div`
  height: 3px;
  width: 45px;
  background-color: ${colors.bg};
  margin-top: 0.3rem;
  opacity: 0.4;
  border-radius: 1.5px;
`;

const StyledBackground = styled.div`
  background-color: ${colors.bg_alt};
  padding: 3rem 0 0;
`;

const Title = styled.h2`
  color: ${colors.text_alt};
  font-size: ${fontSizes.lg};
  ${media.md`font-size: ${fontSizes.xl}`};
  font-weight: 500;
  margin: 0 0 2rem;
`;

const Radio = styled.input`
  &:after {
    width: 17px;
    height: 17px;
    border-radius: 50%;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: rgb(111, 107, 133);
    content: "";
    display: inline-block;
    visibility: visible;
  }

  &:checked:after {
    width: 17px;
    height: 17px;
    border-radius: 50%;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: rgb(229, 227, 233);
    content: "";
    display: inline-block;
    visibility: visible;
  }
`;

const Description = styled.p`
  color: ${colors.text_alt};
  font-size: ${fontSizes.md};
  ${media.md`font-size: ${fontSizes.lg}`};
  margin: 0 0 2.5rem;
  line-height: 1.6;
  opacity: 0.6;
`;

const Header = styled.h3`
  color: ${colors.text_alt};
  font-size: ${fontSizes.md};
  ${media.md`font-size: ${fontSizes.lg}`};
  font-weight: 500;
  margin: 0 0 2rem;
`;

const Text = styled.p`
  color: ${colors.text_alt};
  font-size: ${fontSizes.sm};
  ${media.md`font-size: ${fontSizes.md}`};
  margin: 0 0 2rem;
  line-height: 1.6;
  opacity: 0.6;
`;

const RadioText = styled.span`
  color: ${colors.text_alt};
  font-size: ${fontSizes.sm};
  font-weight: 500;
  opacity: 0.6;
  margin-top: 0.75rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  margin: 0 0 1.5rem;
  ${media.md`margin-top: 0.25rem;`};
  transition: ${theme.transition};
  width: 100%;
  z-index: 1;

  &:before {
    background-color: ${colors.accent};
    border-radius: ${theme.borderRadius};
    bottom: 0;
    content: "";
    display: block;
    left: 0;
    opacity: 0.65;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 0.4s ease-in-out;
  }

  &:hover:before {
    opacity: 0.4;
  }
`;

const Image = styled.img.attrs({
  className: "img-fluid",
})`
  border-radius: ${theme.borderRadius};
`;

const Avatar = styled.img.attrs({
  className: "img-fluid",
})`
  border-radius: 50%;
  height: 30px;
  object-fit: cover;
  width: 30px;
`;

const Table = styled.table.attrs({
  className: "table",
})`
  border-collapse: collapse;
  border-radius: ${theme.borderRadius};
  overflow: hidden;

  thead {
    border-radius: ${theme.borderRadius};
  }

  thead {
    background-color: ${hex2rgba(colors.bg, 0.1)};
    color: ${hex2rgba(colors.text_alt, 0.5)};
    font-size: ${fontSizes.xs};
    font-weight: 600;
    text-transform: uppercase;
  }

  th,
  td,
  tbody,
  thead {
    border: 0 !important;
  }

  td {
    color: ${colors.text_alt};
    font-size: ${fontSizes.sm};
    font-weight: 600;
  }

  tr {
    border-left: 1px solid ${hex2rgba(colors.bg, 0.1)};
    border-right: 1px solid ${hex2rgba(colors.bg, 0.1)};
  }

  tr:last-child {
    border-bottom: 1px solid ${hex2rgba(colors.bg, 0.1)};
  }

  tr:nth-child(even) {
    background-color: ${hex2rgba(colors.bg, 0.1)};
  }
`;

export const PastConference = (props) => {
  let [cur, setCur] = useState(
    Object.keys(props.data.conferences).reverse()[0]
  );
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const onChangeValue = (e) => {
    setCur(e.target.value);
  };
  React.useEffect(() => {
    const interval = setInterval(() => {
      handleSelect(
        index === props.data.conferences[cur].imgCount ? 0 : index + 1
      );
    }, 2500);
    return () => clearInterval(interval);
  });

  let createImages = () => {
    let start = 1;
    let end = props.data.conferences[cur].imgCount;
    let images = [];
    for (let i = start; i <= end; ++i)
      images.push(
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://raw.githubusercontent.com/itchono/set-website/master/img/gallery-img/${cur}/${cur}%20(${i}).jpg`}
            alt={`${i} for ${cur}`}
            key={`${cur}_${i}`}
          />
        </Carousel.Item>
      );
    return images;
  };

  return (
    <>
      <Triangle />
      <StyledBackground>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-6 d-flex align-items-center">
              <Fade bottom>
                <Title>
                  {"Past Conferences: " + props.data.conferences[cur].title}
                </Title>
              </Fade>
            </div>
            <div className="col-12 col-md-6 d-md-flex justify-content-md-end">
              <Fade bottom>
                <div onChange={onChangeValue} className="d-flex center">
                  {Object.keys(props.data.conferences).map((year, idx) => (
                    <div key={year} className="d-flex center">
                      {idx !== 0 && <Line />}
                      <div className="d-flex flex-column align-items-center justify-content-start">
                        <Radio
                          type="radio"
                          value={year}
                          name="year"
                          checked={year === cur}
                          style={{ margin: 0, padding: 0 }}
                        />
                        <RadioText>{year}</RadioText>
                      </div>
                    </div>
                  ))}
                </div>
              </Fade>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Fade bottom>
                <Description>{props.data.conferences[cur].desc}</Description>
              </Fade>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
              <Fade bottom>
                <Header>Competition</Header>
                <Text>{props.data.conferences[cur].competition}</Text>
              </Fade>
            </div>
            <div className="col-12 col-md-6">
              <Fade bottom>
                <ImageWrapper>
                  <Image
                    src={props.data.conferences[cur].image}
                    alt={`${cur} conference`}
                  />
                </ImageWrapper>
              </Fade>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
              <Fade bottom>
                <Header className="mt-4">Winners</Header>
                <Table>
                  <thead>
                    <tr>
                      <th>Place</th>
                      <th>Team Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.data.conferences[cur].winners.map((winner) => (
                      <tr key={winner.place}>
                        <td>{winner.place}</td>
                        <td>{winner.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Fade>
            </div>
            <div className="col-12 col-md-6">
              <Fade bottom>
                <Header className="mt-4">Speakers</Header>
                <Table>
                  <thead>
                    <tr>
                      <th />
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.data.conferences[cur].speakers.map((speaker) => (
                      <tr key={speaker.name}>
                        <td>
                          <Avatar src={speaker.avatar} alt={speaker.name} />
                        </td>
                        <td>{speaker.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Fade>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-12">
              <Header className="mt-4">Gallery</Header>
              <Carousel activeIndex={index}>{createImages()}</Carousel>
            </div>
          </div>
        </div>
      </StyledBackground>
    </>
  );
};
