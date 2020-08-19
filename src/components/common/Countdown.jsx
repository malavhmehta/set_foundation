import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { theme, hex2rgba, media } from "../../styles";
const { colors, fontSizes } = theme;

const Wrapper = styled.div.attrs({
  className: "container",
})``;
const Location = styled.a``;
const Day = styled.p``;
const CountdownContainer = styled.div``;
const Icon = styled.span``;
const Info = styled.div``;
const Interval = styled.div``;
const Value = styled.h2``;
const Label = styled.p``;

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
      <Info>
        <Location href={props.location?.href || "#"}>
          {props.location?.caption || "TBD"}
        </Location>
        <Day>{props.target || "TBD"}</Day>
      </Info>

      <div className="row">
        <div className="col-12">
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
        </div>
      </div>
    </Wrapper>
  );
};
