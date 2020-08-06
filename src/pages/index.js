import React, {Component} from "react";
import {BrowserRouter as Router, Route, useLocation} from "react-router-dom";
import styled, {keyframes} from "styled-components";
import Switch from "react-router-transition-switch";
import Fader from "react-fader";

import {GlobalStyle, theme, media} from "../styles";
import {global} from "../data";

import {Nav} from "../components/common/Nav";
import {ErrorPage} from "./404";

const {colors, fontSizes} = theme;

const SlideIn = keyframes`
  from {
    transform: translateY(100%);
  }
  
  to {
    transform: translateY(0);
  }
`

const Loader = styled.div`
  animation: .75s ${SlideIn} ease-out forwards;
  align-items: center;
  background-color: ${colors.bg};
  display: flex;
  font-size: ${fontSizes.h1};
  height: 100vh;
  justify-content: center;
  transform: translateY(-100%);
  width: 100vw;
  
  h1 {
    color: ${colors.accent};
    font-size: 42px;
    ${media.sm`font-size: 60px;`};
    ${media.md`font-size: 80px;`};
    font-weight: 600;
    transition: ${theme.transition};  
  }
`;

function CurrentRoute({listen, children}) {
  let route = useLocation();
  return children(route);
}

class App extends Component {
  state = {
    animationDone: false,
    dataFetchDone: false,
    animationLength: 750
  };

  finishAnimation = () => {
    this.setState({
      animationDone: true
    });
  }

  fetchData = () => {
    this.setState({
      dataFetchDone: true
    });
  }

  componentDidMount() {
    window.setTimeout(this.finishAnimation, this.state.animationLength);
    this.fetchData();
  }

  render() {
    const {animationDone} = this.state;
    const {dataFetchDone} = this.state;

    if (animationDone && dataFetchDone) {
      return (
          <React.Fragment>
            <GlobalStyle/>

            <Router>
              <CurrentRoute>
                {route => (
                    <Nav navbar={global.nav} current={route}/>
                )}
              </CurrentRoute>

              <Switch component={Fader}>
                <Route path="/" exact>
                  Home
                </Route>

                <Route path="/conference" exact>
                  Conference
                </Route>

                <Route path="/hackathon" exact>
                  Hackathon
                </Route>

                <Route path="/up" exact>
                  SET Up
                </Route>

                <Route path="/contact" exact>
                  Contact
                </Route>

                <Route path="*" exact>
                  <CurrentRoute>
                    {route => (
                        <ErrorPage current={route}/>
                    )}
                  </CurrentRoute>
                </Route>
              </Switch>
            </Router>
          </React.Fragment>
      );
    }

    else {
      return (
          <React.Fragment>
            <Loader>
              <h1>SET.Foundation</h1>
            </Loader>
          </React.Fragment>
      );
    }
  }
}

export default App;
