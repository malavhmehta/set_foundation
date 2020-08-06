import React, {Component} from "react";
import cx from "classnames";
import {HashLink} from "react-router-hash-link";

import styles from "./Nav.scss";

export class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: false,
      delta: 5,
      prev: 0,
      show: true
    };
  }

  scrollTop = () => {
    document.body.scrollIntoView({behaviour: "smooth", block: "start"});
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
    const {
      show,
      toggle
    } = this.state;

    const {pathname} = this.props.current;

    let expandedNavClasses = cx({
      "container navbar navbar-expand-lg navbar-light bg-light fixed-top": true,
      [styles.visible]: show,
      [styles.hidden]: !show,
      [styles.navbar]: true,
    });

    let navButtonClasses = cx(
      [styles.navButton],
      "ml-auto"
    );

    return (
        <React.Fragment>
          <nav className={expandedNavClasses}>
            <HashLink className={cx("navbar-brand mr-auto")} to={"/"} onClick={this.scrollTop}>
              {this.props.navbar.brand}
            </HashLink>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                {this.props.navbar.links.map((link) => (
                    <li className="nav-item" key={link.href}>
                      <HashLink className={"nav-link " + (link.href === pathname && "active")} to={link.href}>
                        {link.caption}
                      </HashLink>
                    </li>
                ))}
              </ul>
            </div>

            <div className="collapse navbar-collapse">
              <a href={this.props.navbar.action.href} className={navButtonClasses}>
                {this.props.navbar.action.caption}
              </a>
            </div>
          </nav>
        </React.Fragment>
    )
  }
}
