import React, { Component, createRef } from "react";
import Fade from "react-reveal";
import Fader from "react-fader";
import styled from "styled-components";

import { theme, media, hex2rgba } from "../../styles";
import emailjs from "emailjs-com";
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

  ::placeholder {
    color: ${hex2rgba(colors.text, 0.6)} !important;
    font-weight: 600;
  }
`;

const TextArea = styled.textarea.attrs({
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
      message: {
        value: "",
        error: false,
        message: "",
      },
    };

    this.fullName = createRef();
    this.email = createRef();
    this.message = createRef();

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

    let message = {
      value: this.message.current.value,
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

    if (message.value === "") {
      message.error = true;
      message.message = "Message can't be empty.";
    }

    this.setState({
      isValid: !fullName.error && !email.error && !message.error,
      fullName: fullName,
      email: email,
      message: message,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      loading: true,
    });

    emailjs
      .sendForm(
        "set_national_gmail",
        "template_vjd74wMr",
        event.target,
        "user_n6VXM67qmVMaCewsRmJT8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(() => {
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
          message: {
            value: "",
            error: false,
            message: "",
          },
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center justify-content-center">
            <Fade bottom>
              <Heading>Message us directly!</Heading>
              <Content>
                We're excited about receiving your feedback and glad to answer
                your questions.
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
                        <label>Your message</label>
                        <TextArea
                          name="message_html"
                          rows="6"
                          value={this.state.message.value}
                          ref={this.message}
                          onChange={this.handleChange}
                          placeholder="Your message"
                        />
                        <Error>{this.state.message.message}</Error>
                      </div>
                    </Fade>

                    <Fade bottom>
                      <div className="col-12 d-flex justify-content-center mb-5">
                        <SubmitButton
                          type="submit"
                          disabled={!this.state.isValid || this.state.loading}
                        >
                          Send message
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
