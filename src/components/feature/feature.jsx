import React from "react";
import "./feature.css";
import { Features } from "../../containers";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message or ask nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Really Ask instantly",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
];

const Feature = () => {
  return (
    <div className="gpt3_features section_padding">
      <div className="gpt3_features-heading">
        <h1 className="gradient_text">
          The Future is Now and You Just Need To Realize It. Step Into The
          Future Today & Make It Happen.
        </h1>
        <p>Request Early Access to get Started.</p>
      </div>
      <div className="gpt_features-container">
        {featuresData.map((item, index) => (
          <Features
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;
