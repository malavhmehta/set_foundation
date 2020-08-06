import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, useLocation} from "react-router-dom";

import AnimateSwitch from "./animation";
import {global} from "../data";

import {Nav} from "../components/common/Nav";

import {Error} from "./404";

function CurrentRoute({listen, children}) {
  let route = useLocation();
  return children(route);
}

export default class App extends Component {
  state = {
    animationDone: false,
    dataFetchDone: false,
    animationLength: 0
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
    const {
      animationDone,
      dataFetchDone,
    } = this.state;

    if (animationDone && dataFetchDone) {
      return (
          <Router>
            <CurrentRoute>
              {route => (
                  <Nav navbar={global.nav} current={route}/>
              )}
            </CurrentRoute>

            <Switch>
              <AnimateSwitch>
                <Route path="/" exact/>
                <Route path="/conference" exact/>
                <Route path="/hacks" exact/>
                <Route path="/up" exact/>
                <Route path="/contact" exact/>
                <Route path="*">
                  <Error code={404}/>
                </Route>
              </AnimateSwitch>
            </Switch>
          </Router>
      );
    }

    else {
      return (
          <div className="loader">
            <h1>SET.Foundation</h1>
          </div>
      );
    }
  }
}
