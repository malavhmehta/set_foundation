import React from "react";
import {HashLink} from "react-router-hash-link";
import styled from "styled-components";

import ErrorImage from "../../assets/images/error.png";

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Button = styled(HashLink)`
  background-color: #5243aa;
  color: #fff;
`

export const Error = (props) => (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1>
              Oops. There was an error.
            </h1>
            <h4>
              {props.code + ". That's all we know. Click the button to go back."}
            </h4>
            <Button to="/">
              Go back.
            </Button>
          </div>
          <div className="col-12 col-md-6">
            <img src={ErrorImage} alt="Error Illustration" className="img-fluid"/>
          </div>
        </div>
      </div>
    </Wrapper>
);
