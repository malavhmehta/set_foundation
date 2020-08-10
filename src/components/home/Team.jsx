import React, { Component } from "react";
import styled from "styled-components";

import { theme, hex2rgba, media } from "../../styles";
const { colors, fontSizes } = theme;

export class Team extends Component {
  constructor(props) {
    super(props);

    let team = {};
    let years = [];
    let yearCount = 0;

    Object.keys(props.team)
      .sort()
      .forEach(function (key) {
        team[key] = props.team[key];
        years.push(key);
        yearCount++;
      });

    this.state = {
      team: team,
      years: years,
      count: yearCount,
      cur: years[yearCount - 1],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return <div></div>;
  }
}
