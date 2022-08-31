import React from "react";
import "./IvfTreatment.css";
import logo from "../assets/baby.png";
import Button from "@mui/material/Button";
import "./Services.css";

const IvfTreatment = () => {
  return (
    <div className="ivftreatment">
      <h1 className="service-heading">Our IVF Process</h1>
      <div className="ivf-container">
        {/* left */}
        <div className="left">
          <h1 className="ivf-treat">IVF Treatment</h1>
          <p className="left-para">
            We at Imprimis IVF Srinagar offer a wide array of IVF services
            options to our clients. Below are our key services.
          </p>
          <img src={logo} alt="" className="babylogo" />
          <div className="left-btns">
            <Button
              style={{
                padding: "8px 25px",
                textTransform: "none",

                color: "white",
                borderRadius: 50,
                background: "red",
              }}
              size="large"
            >
              Talk to us
            </Button>

            <Button
              style={{
                marginLeft: "2px",
                padding: { xs: "8px 1px" },
                textTransform: "none",

                color: "white",
                borderRadius: 50,
                background: "red",
              }}
              size="large"
            >
              Fix an Appointment
            </Button>
          </div>
          <p className="left-note">
            Note: You can either receive a prescription for the drugs or have an
            associated pharmacy ship them (including the syringes and needles).
          </p>
        </div>
        <div className="right">
          <div className="right-tip">
            <h2 className="right-tip-heading">Consultation</h2>
            <p className="right-tip-descrption">
              It facilitate a faster and more concise order placement as per the
              given mathematical models and applied systematic algorithms.
            </p>
          </div>
          <div className="right-tip">
            <h2 className="right-tip-heading">Consultation</h2>
            <p className="right-tip-descrption">
              It facilitate a faster and more concise order placement as per the
              given mathematical models and applied systematic algorithms.
            </p>
          </div>
          <div className="right-tip">
            <h2 className="right-tip-heading">Consultation</h2>
            <p className="right-tip-descrption">
              It facilitate a faster and more concise order placement as per the
              given mathematical models and applied systematic algorithms.
            </p>
          </div>
          <div className="right-tip">
            <h2 className="right-tip-heading">Consultation</h2>
            <p className="right-tip-descrption">
              It facilitate a faster and more concise order placement as per the
              given mathematical models and applied systematic algorithms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IvfTreatment;
