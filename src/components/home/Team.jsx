import React, { Component } from "react";
import Fade from "react-reveal";
import styled from "styled-components";

import { theme, media } from "../../styles";
const { colors, fontSizes } = theme;

const Header = styled.h2`
  color: ${colors.text};
  font-size: ${fontSizes.lg};
  ${media.md`font-size: ${fontSizes.xl}`};
  font-weight: 500;
  margin: 0 0 2.5rem;
`;

const Select = styled.select`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: ${colors.soft};
  border: 0;
  border-radius: ${theme.borderRadius};
  color: ${colors.accent};
  cursor: pointer;
  font-size: ${fontSizes.sm};
  font-weight: 600;
  margin: 0 0 2.5rem;
  padding: 0.75rem 1rem;
  transition: ${theme.transition};

  &:hover {
    background-color: ${colors.soft};
  }

  &:active,
  &:focus {
    box-shadow: none;
    outline: none;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
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

const Image = styled.img`
  border-radius: ${theme.borderRadius};
`;

const Name = styled.p`
  color: ${colors.text} !important;
  display: inline-block;
  font-size: ${fontSizes.xs};
  ${media.md`font-size: ${fontSizes.sm}`};
  font-weight: 500;
  margin: 0 0 0.4rem;
  position: relative;

  &:before {
    background-color: ${colors.accent};
    bottom: -0.1rem;
    content: "";
    left: 0;
    height: 0.16rem;
    position: absolute;
    transition: ${theme.transition};
    width: 0;
  }
`;

const Role = styled.p`
  color: ${colors.text} !important;
  display: inline-block;
  font-size: ${fontSizes.xs};
  ${media.md`font-size: ${fontSizes.sm}`};
  font-weight: 500;
  margin: 0 0 1.6rem;
  opacity: 0.75;
`;

export class Team extends Component {
  constructor(props) {
    super(props);

    let team = {};
    let years = [];
    let yearCount = 0;
    let label = props.label.replace(/\w\S*/g, (w) =>
      w.replace(/^\w/, (c) => c.toUpperCase())
    );

    Object.keys(props.team)
      .sort()
      .reverse()
      .forEach(function (key) {
        team[key] = props.team[key];
        years.push(key);
        yearCount++;
      });

    this.state = {
      team: team,
      years: years,
      count: yearCount,
      cur: 0,
      label: label,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;

    this.setState({
      cur: value,
    });
  }

  render() {
    let { team, years, count, cur, label } = this.state;
    const current_team = team[years[cur]];

    return (
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 col-md-6 d-flex align-items-center">
            <Fade bottom>
              <Header>{label}</Header>
            </Fade>
          </div>
          {count > 1 && (
            <div className="col-12 col-md-6 d-md-flex justify-content-md-end">
              <Select onChange={this.handleChange} value={cur}>
                {years.map((year, i) => (
                  <option value={i} key={i}>
                    Year: {year}
                  </option>
                ))}
              </Select>
            </div>
          )}
        </div>

        <div className="row">
          {current_team.map((member, i) => (
            <div className="col-6 col-sm-4 col-md-3" key={i}>
              <Fade bottom>
                <ImageWrapper>
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="img-fluid"
                  />
                </ImageWrapper>
              </Fade>
              <Fade bottom>
                <Name>{member.name}</Name>
                <Role>{member.role}</Role>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
