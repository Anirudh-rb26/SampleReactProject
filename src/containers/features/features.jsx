import React from "react";
import "./features.css";

const Features = ({ title, text }) => {
  return (
    <div className="gpt3_features-container-feature">
      <div className="gpt3_features-container-feature-title">
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className="gpt3_features-container-feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Features;
