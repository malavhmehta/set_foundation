import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import { X } from "styled-icons/feather";

import { theme, hex2rgba, media } from "../../styles";
const { colors, fontSizes } = theme;

const StyledNav = styled.nav.attrs({
  className:
    "container navbar navbar-expand-lg navbar-light bg-light fixed-top",
})`
  backdrop-filter: blur(5px);
  background-color: ${hex2rgba(colors.bg, 0.75)} !important;
  box-shadow: 0 0 1rem 0 ${hex2rgba(colors.bg, 0.2)};
  padding-bottom: 1.8rem;
  padding-top: 1.8rem;
  transform: translateY(${(props) => (props.show ? "0%" : "-120%")});
  transition: ${theme.transition};
  z-index: 10;
`;

const MobileNav = styled.nav`
  background-color: ${colors.bg};
  border: 1px solid ${hex2rgba(colors.bg_alt, 0.075)};
  border-radius: ${theme.borderRadius};
  box-shadow: 0 0.5rem 2rem ${hex2rgba(colors.bg_alt, 0.05)};
  display: flex;
  flex-direction: column;
  left: 0;
  margin: 0 1rem !important;
  opacity: ${(props) => (props.active ? 1 : 0)};
  padding: 1.8rem;
  position: absolute;
  right: 0;
  transform: scale(${(props) => (props.active ? 1 : 0)});
  transform-origin: top right;
  transition: all 0.2s ease-in-out;
  top: 1.8rem;
`;

const CloseButton = styled.span`
  cursor: pointer;
  height: 18px;
  margin-left: auto;
  position: relative;
  top: 0;
  width: 18px;
`;

const CloseIcon = styled(X)`
  bottom: 0;
  color: ${colors.text} !important;
  display: block;
  left: 0;
  margin: 0 !important;
  padding: 0 !important;
  position: relative;
  right: 0;
  top: 0;
  stroke-width: 1.5;
`;

const NavBrand = styled(HashLink).attrs({
  className: "navbar-brand",
})`
  color: ${colors.accent} !important;
  font-size: ${fontSizes.lg};
  ${media.md`
    font-size: 28px;
    padding-top: .75rem;
  `};
  font-weight: bold;
`;

const NavLink = styled(HashLink).attrs({
  className: "nav-link",
})`
  color: ${colors.text} !important;
  font-size: ${fontSizes.sm};
  font-weight: 600;
  opacity: ${(props) => (props.active ? 1 : 0.6)};
  margin: 8px 15px 0;
  padding: 0.6rem 0 !important;
  position: relative;
  transition: ${theme.transition};

  &:before {
    background-color: ${colors.accent};
    bottom: 0.45rem;
    content: "";
    left: 0;
    height: 0.16rem;
    position: absolute;
    transition: ${theme.transition};
    width: ${(props) => (props.active ? "100%" : "0")};
  }

  &:hover:before {
    width: 100%;
  }

  &:hover {
    opacity: 1;
  }
`;

const MobileNavLink = styled(HashLink)`
  color: ${colors.text} !important;
  font-size: ${fontSizes.sm};
  font-weight: 600;
  opacity: 1;
  margin: 8px 15px 0;
  padding: 0.6rem 0 !important;
  position: relative;
  transition: ${theme.transition};

  &:hover {
    text-decoration: none;
  }
`;

const NavAction = styled.a.attrs({
  className: "ml-auto",
})`
  background-color: ${colors.accent};
  border-radius: ${theme.borderRadius};
  color: ${colors.text_alt};
  font-size: ${fontSizes.sm};
  font-weight: 600;
  padding: 0.6rem 1.75rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${colors.accent_darken};
    color: ${colors.text_alt} !important;
    text-decoration: none;
  }
`;

const MobileNavAction = styled(NavAction)`
  margin-top: 2rem;
  text-align: center;
  width: 100%;
`;

const Dropdown = styled.div`
  align-items: flex-start;
  background-color: ${colors.bg};
  border: 1px solid ${hex2rgba(colors.bg_alt, 0.075)};
  border-radius: ${theme.borderRadius};
  box-shadow: 0 0.5rem 2rem ${hex2rgba(colors.bg_alt, 0.05)};
  display: flex;
  opacity: ${(props) => (props.show ? "1" : "0")};
  flex-direction: column;
  float: left;
  justify-content: flex-start;
  min-width: 160px;
  overflow: hidden;
  padding: 1.2rem;
  position: absolute;
  transform: translateY(${(props) => (props.show ? "0" : "-10%")});
  transition: ${theme.transition};
`;

const MobileDropdown = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem 15px 1.8rem;
`;

const DropdownLink = styled(HashLink)`
  color: ${colors.text} !important;
  font-size: ${fontSizes.xs};
  font-weight: 600;
  opacity: 0.6;
  padding-bottom: 0.6rem;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  transition: ${theme.transition};

  &:last-child {
    padding-bottom: 0;
  }

  &:hover {
    color: ${colors.accent} !important;
    opacity: 1;
    text-decoration: none;
  }
`;

const MobileDropdownLink = styled(HashLink)`
  color: ${colors.text} !important;
  font-size: ${fontSizes.xs};
  font-weight: 600;
  opacity: 0.6;
  padding-bottom: 0.6rem;
  transition: ${theme.transition};

  &:last-child {
    padding-bottom: 0;
  }

  &:hover {
    opacity: 1;
    text-decoration: none;
  }
`;

const NavIconButton = styled.button.attrs({
  className: "navbar-toggler collapsed",
})`
  border: 2.5px solid ${hex2rgba(colors.accent, 0)} !important;
  border-radius: 3px;
  transition: ${theme.transition};
  outline: none;

  &:active,
  &:focus {
    border: 2px solid ${colors.accent} !important;
    border-radius: 3px;
    outline: none;
  }
`;

const NavIcon = styled.span.attrs({
  className: "navbar-toggler-icon",
})`
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='${hex2rgba(colors.accent)}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E") !important;
  transition: ${theme.transition};
`;

export class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: false,
      delta: 5,
      prev: 0,
      show: true,
      hover: "",
    };
  }

  scrollTop = () => {
    document.body.scrollIntoView({
      behaviour: "smooth",
      block: "start",
    });
  };

  handleScroll = () => {
    let pos = window.scrollY;

    if (this.state.toggled) {
      window.scroll(this.state.prev, 0);
    }

    if (
      pos - this.state.prev <= -this.state.delta ||
      pos === 0 ||
      this.state.toggled
    ) {
      this.setState({
        prev: pos,
        show: true,
      });
    } else if (pos - this.state.prev >= this.state.delta) {
      this.setState({
        prev: pos,
        show: false,
        hover: "",
      });
    }
  };

  toggleNav = () => {
    this.setState({
      toggled: !this.state.toggled,
    });
  };

  handleResize = () => {
    let width = window.innerWidth;

    if (width > 992) {
      this.setState({
        toggled: false,
      });
    }
  };

  setHover = (href) => {
    let pos = window.scrollY;

    this.setState({
      hover: href,
      prev: pos,
      show: true,
    });
  };

  resetConfig = () => {
    this.setState({
      toggled: false,
      delta: 5,
      prev: 0,
      show: true,
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    const { show, toggled, hover } = this.state;

    const { pathname } = this.props.current;

    return (
      <StyledNav show={show}>
        <NavBrand to={"/"} onClick={this.scrollTop}>
          {this.props.navbar.brand}
        </NavBrand>

        <div className="collapse navbar-collapse" onClick={this.resetConfig}>
          <ul className="navbar-nav ml-auto">
            {this.props.navbar.links.map((link) => (
              <li className="nav-item" key={link.href}>
                <NavLink
                  active={
                    link.href === pathname || hover === link.href
                      ? "active"
                      : ""
                  }
                  to={link.href}
                  onClick={this.scrollTop}
                  onMouseEnter={() => this.setHover(link.href)}
                  onMouseLeave={() => this.setHover("")}
                >
                  {link.caption}
                </NavLink>

                {link.anchors && (
                  <Dropdown
                    show={hover === link.href}
                    onMouseEnter={() => show && this.setHover(link.href)}
                    onMouseLeave={() => this.setHover("")}
                  >
                    {link.anchors.map((anchor) => (
                      <DropdownLink
                        key={anchor.href}
                        to={link.href + anchor.href}
                        disabled={!show}
                      >
                        {anchor.caption}
                      </DropdownLink>
                    ))}
                  </Dropdown>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="collapse navbar-collapse">
          <NavAction href={this.props.navbar.action.href}>
            {this.props.navbar.action.caption}
          </NavAction>
        </div>

        <NavIconButton onClick={this.toggleNav}>
          <NavIcon />
        </NavIconButton>

        <MobileNav active={toggled} onClick={this.toggleNav}>
          <CloseButton>
            <CloseIcon />
          </CloseButton>

          {this.props.navbar.links.map((link) => (
            <div className="nav-item" key={link.href}>
              <MobileNavLink
                active={
                  link.href === pathname || hover === link.href ? "active" : ""
                }
                to={link.href}
                onClick={this.scrollTop}
              >
                {link.caption}
              </MobileNavLink>

              {link.anchors && (
                <MobileDropdown show={hover === link.href}>
                  {link.anchors.map((anchor) => (
                    <MobileDropdownLink
                      key={anchor.href}
                      to={link.href + anchor.href}
                      disabled={!show}
                    >
                      {anchor.caption}
                    </MobileDropdownLink>
                  ))}
                </MobileDropdown>
              )}
            </div>
          ))}

          <MobileNavAction href={this.props.navbar.action.href}>
            {this.props.navbar.action.caption}
          </MobileNavAction>
        </MobileNav>
      </StyledNav>
    );
  }
}
