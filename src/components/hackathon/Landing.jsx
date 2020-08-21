import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import HeroImage from "../../assets/images/HacksLogo.png";
import { theme, media, hex2rgba } from "../../styles";
const { colors, fontSizes } = theme;

const Background = styled.div`
background: ${colors.bg};
min-height: 60vh;
  width: 100vw;
`
export class Landing extends Component {
constructor(props){
    super(props);
}
render(){
    return(<Background></Background>);
}
}