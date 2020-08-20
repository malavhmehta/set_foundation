import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Fade from "react-reveal";
import { MapPin, Calendar } from "styled-icons/feather";

import { theme, hex2rgba, media } from "../../styles";
const { colors, fontSizes } = theme;

const Wrapper = styled.div.attrs({
  className: "container",
})`
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 2rem;
`;

const Location = styled.a`
  color: ${colors.text} !important;
  font-size: ${fontSizes.sm};
  ${media.md`font-size: ${fontSizes.md};`};
  font-weight: 600;
  margin-right: 2rem;
  position: relative;
  text-decoration: none !important;

  &:before {
    background-color: ${colors.accent};
    bottom: 0.75rem;
    content: "";
    left: 0;
    height: 0.18rem;
    position: absolute;
    transition: ${theme.transition};
    width: 0;
  }

  &:hover:before {
    width: 100%;
  }

  &:active {
    opacity: 0.75;
  }
`;

const Day = styled.p`
  color: ${colors.accent};
  font-size: ${fontSizes.sm};
  ${media.md`font-size: ${fontSizes.md};`};
  font-weight: 600;
`;

const Icon = styled.span`
  color: inherit !important;
  margin-right: 0.5rem;

  svg {
    height: ${fontSizes.sm};
    width: ${fontSizes.sm};
    ${media.md`
      height: ${fontSizes.md},
      width: ${fontSizes.md},
    `};
    transform: translateY(-1.5px) !important;
    ${media.md`transform: translateY(-2.5px) !important;`};
    stroke-width: 2.5px;
  }
`;

const CountdownContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  & > div {
    box-sizing: border-box;
    flex: 0 50%;
    ${media.md`flex: 0 25%;`};
  }
`;

const Interval = styled.div`
  align-items: center;
  border: 1px solid ${hex2rgba(colors.bg_alt, 0.05)};
  background-color: ${hex2rgba(colors.bg_alt, 0.0075)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 0;
  width: 100%;

  &:first-child {
    border-top-left-radius: ${theme.borderRadius};
    border-bottom: none;
    ${media.md`border-bottom: 1px solid ${hex2rgba(colors.bg_alt, 0.05)};`};
    ${media.md`border-bottom-left-radius: ${theme.borderRadius}`};
  }

  &:nth-child(2) {
    border-top-right-radius: ${theme.borderRadius};
    ${media.md`border-top-right-radius: 0;`};
    border-left: none;
    border-bottom: none;
    ${media.md`border-bottom: 1px solid ${hex2rgba(colors.bg_alt, 0.05)};`};
  }

  &:nth-child(3) {
    border-bottom-left-radius: ${theme.borderRadius};
    ${media.md`border-bottom-left-radius: 0;`};
    ${media.md`border-left: none;`};
  }

  &:nth-child(4) {
    border-bottom-right-radius: ${theme.borderRadius};
    border-top-right-radius: 0;
    border-left: none;
    ${media.md`border-top-right-radius: ${theme.borderRadius};`};
  }
`;

const Value = styled.h2`
  color: ${colors.text};
  font-size: 50px;
  ${media.md`font-size: 75px;`};
  font-weight: 600;
`;

const Label = styled.p`
  color: ${colors.text};
  font-size: ${fontSizes.sm};
  ${media.md`font-size: ${fontSizes.md};`};
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

const timeLeft = (date) => {
  let diff = +new Date(date) - +new Date();
  let time = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (diff > 0) {
    time = {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  return time;
};

const format = (num) => (num < 10 ? "0" : "") + num;

export const Countdown = (props) => {
  const [time, setTime] = useState(timeLeft(props.target));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(timeLeft(props.target));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <div className="row">
        <div className="col-12 d-flex flex-column align-items-center justify-content-center">
          <Fade bottom>
            <Info>
              <Location href={props.location?.href || "#"}>
                <Icon>
                  <MapPin />
                </Icon>
                {props.location?.caption || "TBD"}
              </Location>
              <Day>
                <Icon>
                  <Calendar />
                </Icon>
                {props.target || "TBD"}
              </Day>
            </Info>
          </Fade>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <Fade bottom>
            <CountdownContainer>
              <Interval>
                <Value>{format(time.days)}</Value>
                <Label>days</Label>
              </Interval>
              <Interval>
                <Value>{format(time.hours)}</Value>
                <Label>hours</Label>
              </Interval>
              <Interval>
                <Value>{format(time.minutes)}</Value>
                <Label>minutes</Label>
              </Interval>
              <Interval>
                <Value>{format(time.seconds)}</Value>
                <Label>seconds</Label>
              </Interval>
            </CountdownContainer>
          </Fade>
        </div>
      </div>
    </Wrapper>
  );
};
