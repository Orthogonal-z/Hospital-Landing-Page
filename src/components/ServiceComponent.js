import React from "react";
import "./Services.css";

const ServiceComponent = (props) => {
  return (
    <div className="service-component">
      <div className="image-box">
        <div className="image">
          <img className="img-src" src={props.img} alt="Img" />
        </div>
        <h1 className="image-text"> In Vitro Fertilisation</h1>
      </div>
      <p className="image-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been
      </p>
    </div>
  );
};

export default ServiceComponent;
