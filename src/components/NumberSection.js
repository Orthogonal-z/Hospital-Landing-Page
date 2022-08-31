import React from "react";
import "./NumberSection.css";
import CountUp from "react-countup";

const NumberSection = () => {
  return (
    <div className="number">
      <div className="number-container">
        <h1 className="number-heading">
          Fertility Treatment That Really Works
        </h1>
      </div>
      <div className="numbers-section">
        <div className="number-box">
          <h2 className="over-head">Over</h2>
          <h1 className="number-count">
            <CountUp end={1000} separator="," enableScrollSpy="true" />
          </h1>
          <p className="par">Babies have been born</p>
        </div>

        <div className="number-box">
          <h2 className="over-head">More than</h2>
          <h1 className="number-count-2">
            <CountUp end={96} enableScrollSpy="true" suffix="%" />
          </h1>
          <p className="par">Recommend Impritus IVF</p>
        </div>

        <div className="number-box">
          <h2 className="over-head">Every</h2>
          <h1 className="number-count-3">
            <CountUp end={2} enableScrollSpy="true" />
          </h1>
          <p className="par">Hour a Baby Born</p>
        </div>

        <div className="number-box">
          <h2 className="over-head">Convinient Access in</h2>
          <h1 className="number-count-4">
            <CountUp end={4} enableScrollSpy="true" />
          </h1>
          <p className="par">Indian States</p>
        </div>
      </div>
    </div>
  );
};

export default NumberSection;
