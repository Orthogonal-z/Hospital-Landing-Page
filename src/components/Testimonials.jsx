import React from "react";
import "./Testimonials.css";
import testimonial from "../assets/testimonial.png";
import { Button } from "@mui/material";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials-container">
        <h1 className="test-h1">What Our Clients Say</h1>
        <div className="img-text-box">
          <div className="img-container">
            <img src={testimonial} alt="" className="img" />
          </div>
          <div className="text-box">
            <h1 className="test-h2">Rachna & Amit</h1>
            <p className="test-p">
              Imprimis IVF is emerging as the fastest growing and trusted
              fertility chain in India that provides a wide range of infertility
              treatments to help people start their families.
            </p>
          </div>
        </div>
        <div className="readmorebtn">
          <Button
            style={{
              padding: "20px 25px",
              color: "white",
              backgroundColor: "#0F616E",
              borderRadius: 30,
              fontSize: 14,
              textAlign: "center",
            }}
          >
            Read More Stories
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
