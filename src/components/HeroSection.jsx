import { Button } from "@mui/material";
import React from "react";
import "./HeroSection.css";
import HeroIcon1 from "../assets/Heroicon1.png";
import HeroIcon2 from "../assets/Heroicon2.png";
import HeroIcon3 from "../assets/Heroicon3.png";
import herobg from "../assets/herobg.png";

import {
  BsFileMedicalFill,
  BsFillFileEarmarkMedicalFill,
} from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="herosection">
      <div className="hero-container">
        <div className="hero-contact-box">
          <h1 className="hero-text">World Class Fertility Treatment</h1>
          <h4 className="hero-desc">
            Imprimis IVF is emerging as the fastest growing and trusted
            fertility chain in india that provides a wide range of infertility
            treatments to help people start their families
          </h4>
          <div className="contact-box">
            <div className="contact-btn">
              <Button
                //   variant="outlined"
                className="contact-btn"
                style={{
                  height: "100%",
                  padding: "20px 40px",
                  fontSize: 15,
                  marginRight: -10,
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: 30,
                }}
              >
                Contact
              </Button>
            </div>
            <h2 className="contact-number">767-855-6881</h2>
          </div>
        </div>

        <div className="feature-box">
          <h1 className="feature-heading">
            Wondering if it's time to see a fertility specialist?
          </h1>
          <div className="icon-box">
            <img src={HeroIcon1} className="icons" alt="" />
            <p className="hide-mob-lines">-------------------</p>
            <img src={HeroIcon2} className="icons" alt="" />
            <p className="hide-mob-lines">-----------------</p>
            <img src={HeroIcon3} className="icons" alt="" />
          </div>
          <div className="icon-names">
            <p className="hero-p">IUI Treatment</p>
            <p className="hero-p">IVF Treatment</p>
            <p className="hero-p">ICSI Treatment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
