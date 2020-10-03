import { GlobalStyle, media, theme } from "../styles";
import React, { Component, useEffect } from "react";
import { Route, BrowserRouter as Router, useLocation } from "react-router-dom";
import { conference, foundation, global, up } from "../data";
import styled, { keyframes } from "styled-components";

import { Conference } from "./Conference";
import { Contact } from "./Contact";
import { ErrorPage } from "./404";
import Fader from "react-fader";
import { Footer } from "../components/common";
import { Home } from "./Home";
import { Nav } from "../components/common";
import Switch from "react-router-transition-switch";
import { Up } from "./Up";
import config from "react-reveal/globals";

config({ bottom: true, duration: 100 });

const { colors, fontSizes } = theme;

const ZoomIn = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Loader = styled.div`
  animation: 0.5s ${ZoomIn} ease-out forwards;
  align-items: center;
  background-color: ${colors.bg};
  display: flex;
  font-size: ${fontSizes.h1};
  height: 100vh;
  justify-content: center;
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

function CurrentRoute({ listen, children }) {
  let route = useLocation();
  return children(route);
}

class App extends Component {
  state = {
    animationDone: false,
    dataFetchDone: false,
    animationLength: 750,
  };

  finishAnimation = () => {
    this.setState({
      animationDone: true,
    });
  };

  fetchData = () => {
    this.setState({
      dataFetchDone: true,
    });
  };

  componentDidMount() {
    window.setTimeout(this.finishAnimation, this.state.animationLength);
    this.fetchData();
  }

  render() {
    const { animationDone } = this.state;
    const { dataFetchDone } = this.state;

    if (animationDone && dataFetchDone) {
      return (
        <React.Fragment>
          <GlobalStyle />

          <Router
            onUpdate={() => {
              document.body.scrollIntoView({
                behaviour: "smooth",
                block: "start",
              });
            }}
          >
            <ScrollToTop />
            <CurrentRoute>
              {(route) => <Nav navbar={global.nav} current={route} />}
            </CurrentRoute>

            <Switch component={Fader}>
              <Route path="/" exact>
                <Home data={foundation} />
              </Route>

              <Route path="/conference" exact>
                <Conference data={conference} />
              </Route>

              <Route
                path="/hackathon"
                exact
                component={() => {
                  setTimeout(
                    () => (window.location.href = "https://sethacks.ca/#/"),
                    750
                  );

                  return (
                    <Loader>
                      <h1>Redirecting...</h1>
                    </Loader>
                  );
                }}
              />

              <Route path="/up" exact>
                <Up data={up} />
              </Route>

              <Route
                path="/register"
                exact
                component={() => {
                  setTimeout(
                    () =>
                      (window.location.href =
                        "https://forms.gle/qNRnKFgquVeGMUx29"),
                    750
                  );
                  return (
                    <Loader>
                      <h1>Redirecting...</h1>
                    </Loader>
                  );
                }}
              />

              <Route path="/contact" exact>
                <Contact data={global.contact} />
              </Route>

              <Route path="*" exact>
                <CurrentRoute>
                  {(route) => <ErrorPage current={route} />}
                </CurrentRoute>
              </Route>
            </Switch>

            <CurrentRoute>
              {(route) => (
                <Footer
                  footer={global.nav}
                  social={global.social_media}
                  route={route}
                />
              )}
            </CurrentRoute>
          </Router>
        </React.Fragment>
      );
    } else {
      return (
        <Loader>
          <h1>SET.Foundation</h1>
        </Loader>
      );
    }
  }
}

export default App;
