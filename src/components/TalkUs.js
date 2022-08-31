import { Button } from "@mui/material";
import React from "react";
import "./TalkUs.css";
import lady from '../assets/lady.png'

const TalkUs = () => {
  return (
    <div className="talkus">
      <div className="talkus-container">
        <div className="get-pregnant-container">
          <div className="img-box">
            <img src={lady} alt="img" className="img"></img>
          </div>
          <div className="CTA-container">
            <h2 className="pregnant-text">Get Pregnant</h2>
            <p className="pregnant-para">Pregnancy queries</p>
            <Button
              variant="outlined"
              style={{
                fontSize: "16px",

                padding: "12px 30px",
                textTransform: "none",

                color: "white",
                borderRadius: 50,
                background: "#0F616E",
              }}
              size="large"
            >
              Talk to Us
            </Button>
          </div>
        </div>

        <div className="get-pregnant-container">
          <div className="img-box">
            <img src={lady} alt="img" className="img"></img>
          </div>
          <div className="CTA-container">
            <h2 className="pregnant-text">Talk to an Expert</h2>
            <p className="pregnant-para">Pregnancy queries</p>
            <Button
              variant="outlined"
              style={{
                fontSize: "16px",

                padding: "12px 30px",
                textTransform: "none",

                color: "white",
                borderRadius: 50,
                background: "#0F616E",
              }}
              size="large"
            >
              Talk to Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkUs;
