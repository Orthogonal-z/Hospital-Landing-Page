import { Button } from "@mui/material";
import React from "react";
import "./MakeAppointment.css";

const MakeAppointment = () => {
  return (
    <div className="makeappointment">
      <div className="appointment-container">
        <div className="top-container">
          <h1 className="heading">Make an Appointment Today</h1>

          <Button
            variant="outlined"
            style={{
              fontSize: "18px",
              margin: "20px",
              padding: "14px 35px",
              textTransform: "none",

              color: "white",
              borderRadius: 25,
              background: "#0F616E",
            }}
            size="large"
          >
            Schedule Now
          </Button>
        </div>
        <div className="bottom-container">
          <h2 className="bottom-text">Ph: 767-855-6881</h2>
          <h2 className="bottom-text">
            Address: 2nd Floor S. R. Plaza, Hyderpora, Srinagar, J&K 190014
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
