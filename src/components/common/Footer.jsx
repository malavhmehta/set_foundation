import React, {Component} from "react";
import {HashLink} from "react-router-hash-link";
import styled from "styled-components";

import {theme, hex2rgba, media} from "../../styles";
const {colors, fontSizes} = theme;

const StyledFooter = styled.footer`
  background-color: ${colors.bg_alt};
  margin-top: 10rem;
  width: 100%;
`

const StyledContainer = styled.div.attrs(({
  className: "container"
}))`
  padding: 1rem 0 4rem;
`;

export class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      error: false,
      errorMessage: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let {error, errorMessage} = this.state;
    let value = event.target.value;

    if (value === "") {
      error = true;
      errorMessage = "Email can't be empty."
    }

    else if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      error = false;
      errorMessage = "";
    }

    else {
      error = true;
      errorMessage = "Invalid email address.";
    }

    this.setState({
      email: value,
      error: error,
      errorMessage: errorMessage
    });
  }

  handleSubmit(event) {
    alert("Email submitted: " + this.state.email);
    event.preventDefault();
  }

  render() {
    const tmp = (
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.email} onChange={this.handleChange}/>
          <input type="submit" value="Subscribe" disabled={this.state.error || this.state.email === ""}/>
        </form>
    );

    return (
        <StyledFooter>
          <StyledContainer>
            
          </StyledContainer>
        </StyledFooter>
    );
  }
}
