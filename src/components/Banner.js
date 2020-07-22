import React from "react";
import Fade from "react-reveal/Fade";

import data from "../data";
import BannerImage from "../assets/images/banner.jpg";

export const Banner = () => (
    <div className="banner-wrapper" style={{backgroundImage: `url(${BannerImage})`}}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="banner-text-wrapper">
              <Fade bottom>
                <h2 className="banner-text">
                  SET {data.conference.dates.conference.getFullYear()}
                </h2>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
);

