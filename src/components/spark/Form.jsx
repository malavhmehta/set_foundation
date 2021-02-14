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
      email: {
        value: "",
        error: false,
        message: "",
      },
      topic: {
        value: "",
        error: false,
        message: "",
      },
    };

    this.email = createRef();
    this.topic = createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let email = {
      value: this.email.current.value,
      error: false,
      message: "",
    };

    let topic = {
      value: this.topic.current.value,
      error: false,
      message: "",
    };

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

    this.setState({
      isValid: !email.error && !topic.error,
      email: email,
      topic: topic,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({
      loading: true,
    });

    let payload = new FormData();
    payload.append("emailAddress", this.state.email.value);
    payload.append("entry.8185466", this.state.topic.value);

    await fetch(
      "https://docs.google.com/forms/u/2/d/e/1FAIpQLSdbOFUVUQ1_1xu0azSIdKtstE4aeVWosbzHdtv0GpfA91jxhw/formResponse",
      {
        body: payload,
        method: "POST",
        mode: "no-cors",
      }
    );

    this.setState({
      loading: false,
      isValid: false,
      email: {
        value: "",
        error: false,
        message: "",
      },
      topic: {
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
              <Heading>Register for our newsletter</Heading>
              <Content>
                Sign up below to get our newsletter sent directly to your email
                and to learn more about all sorts of engineering and technology
                related topics!
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
                      <div className="col-12">
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
                          Any topics you would like to see discussed?
                        </label>
                        <Input
                          name="topic"
                          type="text"
                          value={this.state.topic.value}
                          ref={this.topic}
                          onChange={this.handleChange}
                          placeholder=""
                        />
                        <Error>{this.state.topic.message}</Error>
                      </div>
                    </Fade>

                    <Fade bottom>
                      <div className="col-12 d-flex justify-content-center mb-5">
                        <SubmitButton
                          type="submit"
                          disabled={!this.state.isValid || this.state.loading}
                        >
                          Sign up
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
