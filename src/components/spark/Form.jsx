import React, { Component, createRef } from "react";
import { hex2rgba, media, theme } from "../../styles";

import Fade from "react-reveal";
import styled from "styled-components";

const { colors, fontSizes } = theme;

const Heading = styled.h2`
  color: ${colors.text};
  font-size: ${fontSizes.lg};
  ${media.md`font-size: ${fontSizes.xl}`};
  font-weight: 500;
  margin: 1rem 0 1.5rem;
  text-align: center;
`;

const Content = styled.p`
  color: ${colors.text};
  font-size: ${fontSizes.sm};
  ${media.md`font-size: ${fontSizes.md}`};
  font-weight: 500;
  max-width: 600px;
  opacity: 0.6;
  text-align: center;
  margin: 0 0 2.25rem;
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

const Input = styled.input.attrs({
  className: "form-control",
})`
  border: 1px solid ${hex2rgba(colors.bg_alt, 0.15)} !important;
  box-shadow: none !important;
  color: ${hex2rgba(colors.text, 0.95)} !important;
  font-size: ${fontSizes.sm};
  font-weight: 500;
  margin-right: 2rem;
  padding: 1.6rem 1.3rem;
  transition: ${theme.transition};

  &:hover,
  &:active,
  &:focus {
    background-color: ${hex2rgba(colors.text, 0.025)} !important;
  }

  &:disabled {
    opacity: 0.25;
    cursor: no-drop;
  }

  ::placeholder {
    color: ${hex2rgba(colors.text, 0.6)} !important;
    font-weight: 600;
  }
`;

const Select = styled.select`
  border: 1px solid ${hex2rgba(colors.bg_alt, 0.15)} !important;
  box-shadow: none !important;
  border-radius: 5px;
  color: ${hex2rgba(colors.text, 0.95)} !important;
  font-size: ${fontSizes.sm};
  font-weight: 500;
  margin-right: 2rem;
  padding: 0.85rem 1.3rem;
  transition: ${theme.transition};
  width: 100%;

  &:hover,
  &:active,
  &:focus {
    background-color: ${hex2rgba(colors.text, 0.025)} !important;
    outline: none;
  }
`;

const SubmitButton = styled.button.attrs({
  className: "btn",
})`
  background-color: ${colors.accent};
  color: ${colors.text_alt} !important;
  font-size: ${fontSizes.sm};
  font-weight: 600;
  padding: 0.9rem 1.2rem;
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

const Error = styled.p`
  color: #de350b;
  font-size: ${fontSizes.xs};
  font-weight: 500;
  margin-top: 0.25rem;
  transition: ${theme.transition};
`;

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      isValid: false,
      fullName: {
        value: "",
        error: false,
        message: "",
      },
      email: {
        value: "",
        error: false,
        message: "",
      },
      question: "",
      referral: {
        value: "Social media",
        error: false,
        message: "",
      },
      referral_other: {
        value: "",
        error: false,
        message: "",
      },
    };

    this.fullName = createRef();
    this.email = createRef();
    this.question = createRef();
    this.referral = createRef();
    this.referral_other = createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let fullName = {
      value: this.fullName.current.value,
      error: false,
      message: "",
    };

    let email = {
      value: this.email.current.value,
      error: false,
      message: "",
    };

    let referral = {
      value: this.referral.current.value,
      error: false,
      message: "",
    };

    let referral_other = {
      value: this.referral_other.current.value,
      error: false,
      message: "",
    };

    if (fullName.value === "") {
      fullName.error = true;
      fullName.message = "Name can't be empty.";
    }

    if (email.value === "") {
      email.error = true;
      email.message = "Email can't be empty.";
    } else if (
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
    ) {
    } else {
      email.error = true;
      email.message = "Invalid email address.";
    }

    if (referral.value === "") {
      referral.error = true;
      referral.message = "Choose an option.";
    } else if (referral.value === "__other_option__") {
      if (referral_other.value === "") {
        referral_other.error = true;
        referral_other.message = "Required.";
      }
    } else {
      referral_other.value = "";
    }

    this.setState({
      isValid:
        !fullName.error &&
        !email.error &&
        !referral.error &&
        !referral_other.error,
      fullName: fullName,
      email: email,
      question: this.question.current.value,
      referral: referral,
      referral_other: referral_other,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({
      loading: true,
    });

    let payload = new FormData();
    payload.append("entry.674130613", this.state.fullName.value);
    payload.append("entry.2118895946", this.state.email.value);
    payload.append("entry.840195549:", this.state.question);
    payload.append("entry.1327724957", this.state.referral.value);
    payload.append(
      "entry.1327724957.other_option_response",
      this.state.referral_other.value
    );

    await fetch(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfoA4mEbsXyCJKWE5jjGYwzICBb8Eg39bIkuuDwP1Nq88s_9w/formResponse",
      {
        body: payload,
        method: "POST",
        mode: "no-cors",
      }
    );

    this.setState({
      loading: false,
      isValid: false,
      fullName: {
        value: "",
        error: false,
        message: "",
      },
      email: {
        value: "",
        error: false,
        message: "",
      },
      question: "",
      referral: {
        value: "Social media",
        error: false,
        message: "",
      },
      referral_other: {
        value: "",
        error: false,
        message: "",
      },
    });
  }

  render() {
    return (
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center justify-content-center">
            <Fade bottom>
              <Heading>Register for SET SPARK</Heading>
              <Content>
                This year’s theme is digitalization: proposing an idea that
                improves the digitalization or remote accessibility of services
                given the context of COVID-19. More information{" "}
                <StyledLink href="https://docs.google.com/forms/d/e/1FAIpQLSfoA4mEbsXyCJKWE5jjGYwzICBb8Eg39bIkuuDwP1Nq88s_9w/viewform">
                  here.
                </StyledLink>
              </Content>
            </Fade>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2" />
          <div className="col-12 col-md-8">
            <div className="row">
              <div className="col-12">
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <Fade bottom>
                      <div className="col-12 col-md-6 mb-4">
                        <label>Full name</label>
                        <Input
                          name="from_name"
                          type="text"
                          value={this.state.fullName.value}
                          ref={this.fullName}
                          onChange={this.handleChange}
                          placeholder="Your name"
                        />
                        <Error>{this.state.fullName.message}</Error>
                      </div>
                    </Fade>

                    <Fade bottom>
                      <div className="col-12 col-md-6 mb-4">
                        <label>Email address</label>
                        <Input
                          name="reply_to"
                          type="email"
                          value={this.state.email.value}
                          ref={this.email}
                          onChange={this.handleChange}
                          placeholder="you@email.com"
                        />
                        <Error>{this.state.email.message}</Error>
                      </div>
                    </Fade>

                    <Fade bottom>
                      <div className="col-12 mb-4">
                        <label>
                          If you've already made a team, please enter the full
                          names of each member on your team.
                        </label>
                        <Input
                          name="school"
                          type="text"
                          value={this.state.question}
                          ref={this.question}
                          onChange={this.handleChange}
                          placeholder="Team members..."
                        />
                      </div>
                    </Fade>

                    <Fade bottom>
                      <div className="col-12 mb-4">
                        <label>How did you hear about us?</label>
                        <br />
                        <Select
                          name="referral"
                          value={this.state.referral.value}
                          ref={this.referral}
                          onChange={this.handleChange}
                        >
                          <option value="Instagram">Instagram</option>
                          <option value="Word of Mouth">Word of Mouth</option>
                          <option value="SET Foundation Website">
                            SET Foundation Website
                          </option>
                          <option value="__other_option__">Other</option>
                        </Select>
                        <br />
                        <Error>{this.state.referral.message}</Error>
                      </div>
                    </Fade>

                    <Fade bottom>
                      <div className="col-12 mb-4">
                        <label>Please specify if you selected other:</label>
                        <Input
                          name="referral_other"
                          type="text"
                          value={this.state.referral_other.value}
                          ref={this.referral_other}
                          onChange={this.handleChange}
                          disabled={
                            !(this.state.referral.value === "__other_option__")
                          }
                        />
                        <Error>{this.state.referral_other.message}</Error>
                      </div>
                    </Fade>

                    <Fade bottom>
                      <div className="col-12 d-flex justify-content-center mb-5">
                        <SubmitButton
                          type="submit"
                          disabled={!this.state.isValid || this.state.loading}
                        >
                          Register
                        </SubmitButton>
                      </div>
                    </Fade>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-2" />
        </div>
      </div>
    );
  }
}
