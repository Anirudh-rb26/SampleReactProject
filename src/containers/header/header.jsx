import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3_header section_padding" id="home">
      <div className="gpt3_header-content">
        <h1 className="gradient_text">
          Lets build something amazing with Open AI GPT-3.5
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indlugence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3_header-content-input">
          <input type="email" placeholder="your email address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3_header-content-people">
          <img src={people} alt="photo of peoples" />
          <p>1,600 people requested access in the last 24 hours.</p>
        </div>
      </div>
      <div className="gpt3_header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  );
};

export default Header;
