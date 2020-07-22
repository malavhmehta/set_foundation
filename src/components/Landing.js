import React from "react";
import Fade from "react-reveal/Fade";
import {FaPlay} from "react-icons/fa";

import data from "../data";
import LandingImage from "../assets/images/landing.jpg";

let day = data.conference.dates.conference.getDay(),
    month = data.conference.dates.conference.toLocaleString('default', {month: 'long'}),
    year = data.conference.dates.conference.getFullYear();

export const Landing = () => (
  <div className="container" id="hero">
    <div className="row align-items-center">
      <div className="col-12 col-lg-8">

        <Fade bottom>
          <a href={data.conference.location.map}>
            <h4 className="location landing-header">
              {data.conference.location.name}
            </h4>
          </a>

          <h4 className="landing-header">
            {`${day} ${month}, ${year}`}
          </h4>

          <div className="lead-wrapper">
            <h1 className="lead">
              {data.landing.lead}
            </h1>
          </div>

          <div className="aftermovie-wrapper">
            <span className="link-icon"><FaPlay/></span>
            <a href={data.landing.after_movie} className="link">
              Watch the {year - 1} after movie.
            </a>
          </div>
        </Fade>
      </div>
      <div className="col-12 col-lg-4 d-none d-lg-flex">
        <Fade bottom>
          <img src={LandingImage} alt="Landing - Competition" className="img-fluid landing-img"/>
        </Fade>
      </div>
    </div>
  </div>
);
