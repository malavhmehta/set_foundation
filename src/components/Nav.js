import React, {Component} from "react";
import {HashLink} from "react-router-hash-link";

import data from "../data";

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      delta: 5,
      prev: 0,
      show: true
    }
  }

  scrollTop = () => {
    document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  handleScroll = () => {
    let pos = window.scrollY;

    if (this.state.toggle) {
      window.scroll(this.state.prev, 0);
    }

    if (pos - this.state.prev <= - this.state.delta || pos === 0 || this.state.toggle) {
      this.setState({
        prev: pos,
        show: true
      });
    }

    else if (pos - this.state.prev >= this.state.delta) {
      this.setState({
        prev: pos,
        show: false
      });
    }
  }

  toggleNav = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  handleResize = () => {
    let width = window.innerWidth;

    if (width > 992) {
      this.setState({
        toggle: false
      })
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    let {show, toggle} = this.state;

    return (
      <React.Fragment>
        <nav className={"navbar-overlay " + (toggle ? "is-visible" : "")}>
          <div className="navbar-overlay-content" onClick={this.toggleNav}>
            {data.nav.links.map((link) => (
              <HashLink className="nav-link" to={link.to} key={link.to}>{link.name}</HashLink>
            ))}
            <a href={data.register_link} className="nav-link">Register Now</a>
          </div>
        </nav>

        <nav className={"container navbar navbar-expand-lg navbar-light bg-light fixed-top " + (show ? "navbar-transform" : "")}>
          <HashLink className="navbar-brand mr-auto" to="/" onClick={this.scrollTop}>{data.nav.brand}</HashLink>
          <ul className="navbar-nav ml-auto navbar-hidden ">
            {data.nav.links.map((link) => (
              <li className="nav-item" key={link.to}>
                <HashLink className="nav-link" to={link.to}>{link.name.toUpperCase()}</HashLink>
              </li>
            ))}
            <li className="nav-item">

            </li>
          </ul>
          <a href={data.register_link} className="nav-btn d-none d-lg-block">Register Now</a>

          <a href="/#" className={"d-lg-none navicon-button " + (toggle ? "open" : "")} onClick={this.toggleNav}>
            <div className="navicon"/>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}