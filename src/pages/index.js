import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import AnimateSwitch from "./animation";

export default class App extends Component {
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
          <Router>
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
