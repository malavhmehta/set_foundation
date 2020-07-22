import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {Nav} from "./Nav";
import {HomePage} from "./home";
import SwitchWithSlide from "./SwitchWithSlide";

export class App extends Component {
  state = {
    animationDone: false,
    dataFetchDone: true,
  }

  animationLength = 750;

  componentDidMount() {
    window.setTimeout(this.finishAnimation, this.animationLength);
  }

  finishAnimation = () => {
    this.setState({
      animationDone: true,
    });
  }

  render() {
    const {animationDone, dataFetchDone} = this.state;

    if (!(animationDone && dataFetchDone)) {
      return (
        <div className="loader">
          <h1>SET<span>.</span>Ottawa</h1>
        </div>
      );
    }

    return (
      <Router>
        <Nav/>

        <Switch>
          <SwitchWithSlide>
            <Route path="/" component={HomePage} exact/>
            <Route path="/about" exact/>
          </SwitchWithSlide>
        </Switch>
      </Router>
    );
  }
}


