import React from "react";
import ServiceComponent from "./ServiceComponent";
import "./Services.css";
import serviceimg from "../assets/serviceimg.png";

const Services = () => {
  return (
    <div className="services">
      <div className="services-container">
        <h1 className="service-heading">Services We Offer</h1>
        <div className="services-component-container">
          <ServiceComponent img={serviceimg} />
          <ServiceComponent img={serviceimg} />
          <ServiceComponent img={serviceimg} />
        </div>
        <div className="services-component-container">
          <ServiceComponent img={serviceimg} />
          <ServiceComponent img={serviceimg} />
          <ServiceComponent img={serviceimg} />
        </div>
      </div>
    </div>
  );
};

export default Services;

// class User{
//   static count =0;
//   constructor(name,last,sex){
//     this.name = name;
//     this.last = last;
//     this.sex = sex;
//   }

//   register(){
//     console.log(`${this.name} ${this.last} is regiserted`)
//     count ++;

//   }

//   counter(){
//     console.log(this.count)
//   }

// }

// const laksya = new User("lakssh",'aslals','male');
// laksya.register();
// laksya.counter()
