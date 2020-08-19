import React, { Component } from "react";
import styled from "styled-components";

import { theme, hex2rgba, media } from "../../styles";
const { colors, fontSizes } = theme;

export class Countdown extends Component {
  constructor(props) {
    super(props);
    this.counter = null;

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      date: new Date(this.props.target).getTime(),
    };
  }

  componentDidMount() {
    this.updateTime();
    this.counter = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.counter);
  }

  updateTime = () => {
    const SECOND = 1000,
      MINUTE = SECOND * 60,
      HOUR = MINUTE * 60,
      DAY = HOUR * 24;

    let now = new Date();
    let distance = this.state.date - now;
    let day = 0,
      hour = 0,
      minute = 0,
      second = 0;

    if (distance > 0) {
      day = Math.floor(distance / DAY);
      hour = Math.floor((distance % DAY) / HOUR);
      minute = Math.floor((distance % HOUR) / MINUTE);
      second = Math.floor((distance % MINUTE) / SECOND);
    }

    this.setState({
      day: day,
      hour: hour,
      minute: minute,
      second: second,
    });
  };

  format = (num) => (num < 10 ? "0" : "") + num;

  render() {
    return <div></div>;
  }
}
