import { About, Landing } from "../components/conference";
import { Anchor, Countdown } from "../components/common";
import { Form, Schedule, Speakers } from "../components/up";
import { hex2rgba, theme } from "../styles";

import Modal from "react-bootstrap/Modal";
import React from "react";
import UpLandingImage from "../assets/images/up_landing.jpg";
import styled from "styled-components";

const Line = styled.hr`
  border-top: 1px solid ${hex2rgba(theme.colors.bg_alt, 0.1)};
  margin: 0;
`;

const { colors, fontSizes } = theme;

const LinkButton = styled.a.attrs({
  className: "btn",
})`
  background-color: ${colors.accent};
  color: ${colors.text_alt} !important;
  font-size: ${fontSizes.xs};
  font-weight: bold;
  padding: 0.65rem 1rem;

  &:hover,
  &:active {
    background-color: ${colors.accent_darken};
    outline: none;
  }

  &:focus {
    box-shadow: none;
  }
`;

const Button = styled.button.attrs({
  className: "btn",
})`
  background-color: ${colors.soft};
  color: ${colors.accent} !important;
  font-size: ${fontSizes.xs};
  font-weight: bold;
  padding: 0.65rem 1rem;

  &:hover,
  &:active {
    background-color: ${colors.soft};
    outline: none;
  }

  &:focus {
    box-shadow: none;
  }
`;

export const Up = (props) => {
  const [show, setShow] = React.useState(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>SET UP 2020 is over.</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The 2020 SET University Panel took place on October 10, 2020. You can
          view the panelist slideshows by clicking the button below.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
          <LinkButton href="https://drive.google.com/drive/u/2/folders/1vuWErrgeqYstiyN_eWgTNJ95S_duXCtt">
            View Slides
          </LinkButton>
        </Modal.Footer>
      </Modal>
      <div id="up">
        <Landing data={props.data.hero} image={UpLandingImage} />
        <Line />

        <Anchor anchor="about" />
        <About data={props.data.about} />
        <Countdown
          target={props.data.countdown.time}
          location={props.data.countdown.location}
        />

        <div
          className="container"
          style={{ marginTop: "8rem", marginBottom: "6rem" }}
        >
          <Line />
        </div>
        <Anchor anchor="speakers" />
        <Speakers speakers={props.data.speakers} />

        <div
          className="container"
          style={{ marginTop: "4rem", marginBottom: "6rem" }}
        >
          <Line />
        </div>
        <Anchor anchor="schedule" />
        <Schedule data={props.data.schedule} />

        <div className="container" style={{ marginTop: "6rem" }}>
          <Line />
        </div>

        <Anchor anchor="register" />
        <Form />
      </div>
    </>
  );
};
