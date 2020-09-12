import React, { Component } from "react";
import { hex2rgba, media, theme } from "../../styles";
import styled, { keyframes } from "styled-components";

import Fade from "react-reveal";
import HeroImage from "../../assets/images/conference_hero.jpg";
import Typical from "react-typical";

const { colors, fontSizes } = theme;

const StyledBackground = styled.div`
  background: linear-gradient(
    135deg,
    ${colors.bg} 0%,
    ${colors.bg} 62.5%,
    ${colors.bg_alt} 62.5%,
    ${colors.bg_alt} 100%
  );
  min-height: 100vh;
  width: 100vw;
`;

const StyledRow = styled.div.attrs({
  className: "row align-items-center",
})`
  min-height: 100vh;
`;

const Title = styled.h1`
  color: ${colors.text};
  font-size: 40px;
  ${media.md`font-size: 46px`};
  ${media.lg`font-size: 52px`};
  font-weight: 600;
  margin-bottom: 0.5rem;
  ${media.md`margin-bottom: 2rem`};
`;

const Lead = styled.p`
  color: ${hex2rgba(colors.text, 0.6)};
  font-size: ${fontSizes.sm};
  ${media.md`font-size: 22px`};
  font-weight: 500;
  line-height: 1.75;
  max-width: 750px;
  padding: 1rem 0 2rem;
`;

const EmailInput = styled.input.attrs({
  className: "form-control",
})`
  border: 1px solid ${hex2rgba(colors.bg_alt, 0.15)} !important;
  box-shadow: none !important;
  color: ${hex2rgba(colors.text, 0.95)} !important;
  font-size: ${fontSizes.sm};
  font-weight: 600;
  margin-right: 2rem;
  padding: 1.6rem 1.3rem;
  transition: ${theme.transition};

  &:hover,
  &:active,
  &:focus {
    background-color: ${hex2rgba(colors.text, 0.025)} !important;
  }

  ::placeholder {
    color: ${hex2rgba(colors.text, 0.6)} !important;
    font-weight: 600;
  }
`;

const SubmitButton = styled.button.attrs({
  className: "btn",
})`
  background-color: ${colors.accent};
  color: ${colors.text_alt} !important;
  font-size: ${fontSizes.sm};
  font-weight: 600;
  padding: 0.9rem 1.5rem;
  transition: ${theme.transition};

  &:hover,
  &:active {
    background-color: ${colors.accent_darken};
    outline: none;
  }

  &:focus {
    box-shadow: none;
  }

  &:disabled {
    cursor: no-drop;
    opacity: 0.7;
  }
`;

const FormLabel = styled.p`
  color: ${colors.text};
  font-size: ${fontSizes.xxs};
  font-weight: 500;
  margin-top: 0.75rem;
  opacity: 0.8;
`;

const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(35%);
  }
  
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ImageWrapper = styled.div`
  animation: 1s ${FadeIn} ease forwards;
  height: auto;
  position: relative;
  transition: ${theme.transition};
  width: 100%;
  margin-bottom: 5rem;
  ${media.lg`margin-bottom: 0;`};
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

  img {
    border-radius: ${theme.borderRadius};
  }
`;

const ColMarginTop = styled.div.attrs({
  className: "col-12 col-lg-5",
})`
  margin-top: 7rem;
  ${media.md`margin-top: 10rem;`};
  ${media.lg`margin-top: 0;`};
  margin-bottom: 2rem;
  ${media.lg`margin-bottom: 0;`};
`;

export class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      email: "",
      error: false,
      errorMessage: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let { error, errorMessage } = this.state;
    let value = event.target.value;

    if (value === "") {
      error = true;
      errorMessage = "Email can't be empty.";
    } else if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      error = false;
      errorMessage = "";
    } else {
      error = true;
      errorMessage = "Invalid email address.";
    }

    this.setState({
      email: value,
      error: error,
      errorMessage: errorMessage,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({
      loading: true,
    });

    let payload = new FormData();
    payload.append("entry.1418881111", this.state.email);

    await fetch(
      "https://docs.google.com/forms/u/1/d/e/1FAIpQLSff7FKNfuCe3uTmgcnjQly2ArxjU1sanVy2BXMlBwLdKvIGtw/formResponse",
      {
        body: payload,
        method: "POST",
        mode: "no-cors",
      }
    );

    this.setState({
      loading: false,
      email: "",
    });
  }

  render() {
    return (
      <StyledBackground>
        <div className="container">
          <StyledRow>
            <ColMarginTop>
              <Fade bottom>
                <Title>
                  {this.props.data.title.base}
                  <span style={{ color: colors.accent }}>
                    <Typical
                      steps={this.props.data.title.extensions}
                      loop={Infinity}
                      wrapper={"span"}
                    />
                  </span>
                </Title>
                <Lead>{this.props.data.lead}</Lead>

                <form onSubmit={this.handleSubmit} className="form-inline">
                  <EmailInput
                    type="text"
                    name="message_html"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder={"you@email.com"}
                  />
                  <SubmitButton
                    type="submit"
                    className="mt-4 mt-sm-0 mt-lg-4 mt-xl-0"
                    disabled={
                      this.state.error ||
                      this.state.email === "" ||
                      this.state.loading
                    }
                  >
                    Notify me
                  </SubmitButton>
                </form>
                <FormLabel>Get notified when tickets are released.</FormLabel>
              </Fade>
            </ColMarginTop>
            <div className="col-12 col-lg-7">
              <ImageWrapper>
                <img
                  src={HeroImage}
                  alt="SET Ottawa Competition 2018"
                  className="img-fluid"
                />
              </ImageWrapper>
            </div>
          </StyledRow>
        </div>
      </StyledBackground>
    );
  }
}
