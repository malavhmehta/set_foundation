import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, useLocation} from "react-router-dom";

import AnimateSwitch from "./animation";
import {GlobalStyle} from "../styles";
import {global} from "../data";

import {Nav} from "../components/common/Nav";

function CurrentRoute({listen, children}) {
  let route = useLocation();
  return children(route);
}

class App extends Component {
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

              <Switch>
                <AnimateSwitch>
                  <Route path="/" exact/>
                  <Route path="/conference" exact/>
                  <Route path="/hacks" exact/>
                  <Route path="/up" exact/>
                  <Route path="/contact" exact/>
                </AnimateSwitch>
              </Switch>
            </Router>
          </React.Fragment>
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

export default App;
