import React, { Component, createRef } from "react";
import { hex2rgba, media, theme } from "../../styles";

import Fade from "react-reveal";
import styled from "styled-components";

const { colors, fontSizes } = theme;

const Label = styled.label`
  font-weight: 500;
`;

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

export class FormNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      isValid: false,
      firstName: {
        value: "",
        error: false,
        message: "",
      },
      lastName: {
        value: "",
        error: false,
        message: "",
      },
      email: {
        value: "",
        error: false,
        message: "",
      },
      city: {
        value: "",
        error: false,
        message: "",
      },
      province: {
        value: "Ontario",
        error: false,
        message: "",
      },
      grade: {
        value: "Grade 9",
        error: false,
        message: "",
      },
      grade_other: {
        value: "",
        error: false,
        message: "",
      },
      positions: {
        value: [],
        error: true,
        message: "Select at least one position.",
      },
      q1: {
        value: "",
        error: false,
        message: "",
      },
      q2: {
        value: "",
        error: false,
        message: "",
      },
    };

    this.firstName = createRef();
    this.lastName = createRef();
    this.email = createRef();
    this.city = createRef();
    this.province = createRef();
    this.grade = createRef();
    this.grade_other = createRef();
    this.q1 = createRef();
    this.q2 = createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
  }

  handleChange(e) {
    let firstName = {
      value: this.firstName.current.value,
      error: false,
      message: "",
    };

    let lastName = {
      value: this.lastName.current.value,
      error: false,
      message: "",
    };

    let email = {
      value: this.email.current.value,
      error: false,
      message: "",
    };

    let city = {
      value: this.city.current.value,
      error: false,
      message: "",
    };

    let province = {
      value: this.province.current.value,
      error: false,
      message: "",
    };

    let grade = {
      value: this.grade.current.value,
      error: false,
      message: "",
    };

    let grade_other = {
      value: this.grade_other.current.value,
      error: false,
      message: "",
    };

    let q1 = {
      value: this.q1.current.value,
      error: false,
      message: "",
    };

    let q2 = {
      value: this.q2.current.value,
      error: false,
      message: "",
    };

    if (firstName.value === "") {
      firstName.error = true;
      firstName.message = "First name cannot be empty.";
    }
    if (lastName.value === "") {
      lastName.error = true;
      lastName.message = "Last name cannot be empty.";
    }
    if (email.value === "") {
      email.error = true;
      email.message = "Email cannot be empty.";
    } else if (
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
    ) {
    } else {
      email.error = true;
      email.message = "Invalid email address.";
    }

    if (city.value === "") {
      city.error = true;
      city.message = "City cannot be empty.";
    }

    if (q1.value === "") {
      q1.error = true;
      q1.message = "Answer cannot be empty.";
    } else if (q1.value.split(" ").length > 250) {
      q1.error = true;
      q1.message = `${q1.value.split(" ").length}/250 words.`;
    }

    if (q2.value === "") {
      q2.error = true;
      q2.message = "Answer cannot be empty.";
    } else if (q2.value.split(" ").length > 350) {
      q2.error = true;
      q2.message = `${q2.value.split(" ").length}/350 words.`;
    }

    if (grade.value === "__other_option__") {
      if (grade_other.value === "") {
        grade_other.error = true;
        grade_other.message = "Required.";
      }
    }

    this.setState({
      isValid:
        !firstName.error &&
        !lastName.error &&
        !email.error &&
        !city.error &&
        !province.error &&
        !grade.error &&
        !grade_other.error &&
        !this.state.positions.error &&
        !q1.error &&
        !q2.error,
      firstName: firstName,
      lastName: lastName,
      email: email,
      city: city,
      province: province,
      grade: grade,
      grade_other: grade_other,
      q1: q1,
      q2: q2,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });

    let payload = new FormData();
    payload.append("entry.2006086237", this.state.firstName.value);
    payload.append("entry.1597913982", this.state.lastName.value);
    payload.append("entry.emailAddress", this.state.email.value);
    payload.append("entry.1325484545", this.state.city.value);
    payload.append("entry.986155024:", this.state.province.value);
    payload.append("entry.630043493", this.state.grade.value);
    payload.append(
      "entry.630043493.other_option_response",
      this.state.grade_other.value
    );

    for (let i = 0; i < this.state.positions.value.length; ++i) {
      payload.append("entry.1545013310:", this.state.positions.value[i]);
    }

    payload.append("entry.1270421949", this.state.q1.value);
    payload.append("entry.2062825755", this.state.q2.value);

    console.log(payload);

    await fetch(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfb0v1e2D3BHwFANi1daQk5cyksfTlKMvX7TsSaf4BiBQDEXw/formResponse",
      {
        body: payload,
        method: "POST",
        mode: "no-cors",
      }
    );

    this.setState({
      loading: false,
      isValid: false,
      firstName: {
        value: "",
        error: false,
        message: "",
      },
      lastName: {
        value: "",
        error: false,
        message: "",
      },
      email: {
        value: "",
        error: false,
        message: "",
      },
      city: {
        value: "",
        error: false,
        message: "",
      },
      province: {
        value: "Ontario",
        error: false,
        message: "",
      },
      grade: {
        value: "Grade 9",
        error: false,
        message: "",
      },
      grade_other: {
        value: "",
        error: false,
        message: "",
      },
      positions: {
        value: [],
        error: false,
        message: "",
      },
      q1: {
        value: "",
        error: false,
        message: "",
      },
      q2: {
        value: "",
        error: false,
        message: "",
      },
    });
  }

  handlePositionChange(e) {
    let positions = this.state.positions;
    positions.error = false;
    positions.message = "";

    if (positions.value.includes(e.target.value)) {
      const i = positions.value.indexOf(e.target.value);
      positions.value.splice(i, 1);
    } else {
      positions.value.push(e.target.value);
    }

    if (positions.value.length === 0) {
      positions.error = true;
      positions.message = "Select at least one position.";
    }

    this.setState({
      isValid: this.state.isValid && !positions.error,
      positions: positions,
    });
  }

  render() {
    return (
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center justify-content-center">
            <Fade bottom>
              <Heading>SET Conference 2021</Heading>
              <Content>
                The application is open to all Canadian students who will be in
                high school in fall 2021 (Grade 9 - 12). This form closes on
                August 7, 2021 at 11:59 PM EST (Saturday).
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
                        <Label>First name</Label>
                        <Input
                          name="firstName"
                          type="text"
                          value={this.state.firstName.value}
                          ref={this.firstName}
                          onChange={this.handleChange}
                          placeholder="John"
                        />
                        <Error>{this.state.firstName.message}</Error>
                      </div>
                    </Fade>

                    <Fade bottom>
                      <div className="col-12 col-md-6 mb-4">
                        <Label>Last name</Label>
                        <Input
                          name="lastName"
                          type="text"
                          value={this.state.lastName.value}
                          ref={this.lastName}
                          onChange={this.handleChange}
                          placeholder="Doe"
                        />
                        <Error>{this.state.lastName.message}</Error>
                      </div>
                    </Fade>

                    <Fade bottom>
                      <div className="col-12 mb-4">
                        <Label>Email</Label>
                        <Input
                          name="email"
                          type="text"
                          value={this.state.email.value}
                          ref={this.email}
                          onChange={this.handleChange}
                          placeholder="johndoe@gmail.com"
                        />
                        <Error>{this.state.email.message}</Error>
                      </div>
                    </Fade>

                    <Fade bottom>
                      <div className="col-12 mb-4">
                        <Label>City of residence</Label>
                        <Input
                          name="city"
                          type="text"
                          value={this.state.city.value}
                          ref={this.city}
                          onChange={this.handleChange}
                          placeholder="Ottawa"
                        />
                        <Error>{this.state.city.message}</Error>
                      </div>
                    </Fade>

                    <Fade bottom>
                      <div className="col-12 mb-4">
                        <Label>Province/Territory</Label>
                        <br />
                        <Select
                          name="province"
                          value={this.state.province.value}
                          ref={this.province}
                          onChange={this.handleChange}
                        >
                          <option value="Ontario">Ontario</option>
                          <option value="Quebec">Quebec</option>
                          <option value="Nova Scotia">Nova Scotia</option>
                          <option value="New Brunswick">New Brunswick</option>
                          <option value="Manitoba">Manitoba</option>
                          <option value="British Columbia">
                            British Columbia
                          </option>
                          <option value="Prince Edward Island">
                            Prince Edward Island
                          </option>
                          <option value="Saskatchewan">Saskatchewan</option>
                          <option value="Alberta">Alberta</option>
                          <option value="Newfoundland & Labrador">
                            Newfoundland & Labrador
                          </option>
                          <option value="Northwest Territories">
                            Northwest Territories
                          </option>
                          <option value="Yukon">Yukon</option>
                          <option value="Nunavut">Nunavut</option>
                        </Select>
                        <br />
                        <Error>{this.state.province.message}</Error>
                      </div>
                    </Fade>

                    <Fade bottom>
                      <div className="col-12 mb-4">
                        <Label>Grade (2021-2022 school year)</Label>
                        <br />
                        <Select
                          name="grade"
                          value={this.state.grade.value}
                          ref={this.grade}
                          onChange={this.handleChange}
                        >
                          <option value="Grade 9">Grade 9</option>
                          <option value="Grade 10">Grade 10</option>
                          <option value="Grade 11">Grade 11</option>
                          <option value="Grade 12">Grade 12</option>
                          <option value="__other_option__">Other</option>
                        </Select>
                        <br />
                        <Error>{this.state.grade.message}</Error>
                      </div>
                    </Fade>

                    <Fade bottom>
                      <div className="col-12 mb-4">
                        <Label>Please specify if you selected other:</Label>
                        <Input
                          name="grade_other"
                          type="text"
                          value={this.state.grade_other.value}
                          ref={this.grade_other}
                          onChange={this.handleChange}
                          disabled={
                            !(this.state.grade.value === "__other_option__")
                          }
                        />
                        <Error>{this.state.grade_other.message}</Error>
                      </div>
                    </Fade>

                    <Fade bottom>
                      <div className="col-12 mb-4">
                        <Label>Positions (Select all the apply)</Label>
                        <br />
                        <input
                          onChange={this.handlePositionChange}
                          type="checkbox"
                          name="positions"
                          value="Co-President"
                        />{" "}
                        Co-President
                        <br />
                        <input
                          onChange={this.handlePositionChange}
                          type="checkbox"
                          name="positions"
                          value="Marketing"
                        />{" "}
                        Marketing
                        <br />
                        <input
                          onChange={this.handlePositionChange}
                          type="checkbox"
                          name="positions"
                          value="Logistics & Platform"
                        />{" "}
                        Logistics & Platform
                        <br />
                        <input
                          onChange={this.handlePositionChange}
                          type="checkbox"
                          name="positions"
                          value="Corporate Outreach"
                        />{" "}
                        Corporate Outreach
                        <br />
                        <input
                          onChange={this.handlePositionChange}
                          type="checkbox"
                          name="positions"
                          value="Industry Outreach"
                        />{" "}
                        Industry Outreach
                        <br />
                        <input
                          onChange={this.handlePositionChange}
                          type="checkbox"
                          name="positions"
                          value="Finance"
                        />{" "}
                        Finance
                        <br />
                        <Error>{this.state.positions.message}</Error>
                      </div>
                    </Fade>

                    <Fade bottom>
                      <div className="col-12 mb-4">
                        <Label>
                          Why are you interested in the SET Conference
                          organizational team? (250 words maximum){" "}
                        </Label>
                        <TextArea
                          name="q1"
                          rows="6"
                          value={this.state.q1.value}
                          ref={this.q1}
                          onChange={this.handleChange}
                          placeholder="Type here..."
                        />
                        <Error>{this.state.q1.message}</Error>
                      </div>
                    </Fade>

                    <Fade bottom>
                      <div className="col-12 mb-4">
                        <Label>
                          What do you think you can bring to our team? Please
                          include any relevant experience if applicable. (350
                          words maximum)
                        </Label>
                        <TextArea
                          name="message_html"
                          rows="6"
                          value={this.state.q2.value}
                          ref={this.q2}
                          onChange={this.handleChange}
                          placeholder="Your message"
                        />
                        <Error>{this.state.q2.message}</Error>
                      </div>
                    </Fade>

                    <Fade bottom>
                      <div className="col-12 d-flex justify-content-center mb-5">
                        <SubmitButton
                          type="submit"
                          disabled={!this.state.isValid || this.state.loading}
                        >
                          Apply
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
