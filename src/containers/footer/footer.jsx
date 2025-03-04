import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3_footer section_padding">
      <div className="gpt3_footer-heading">
        <h1 className="gradient_text">
          Do you want to step into the Future before others?
        </h1>
      </div>
      <div className="gpt3_footer-button">
        <p>Request Early Acess</p>
      </div>
      <div className="gpt3_footer-links">
        <div className="gpt3_footer-links-logo">
          <img src={gpt3Logo} alt="" />
          <p>Crechterwoord K12 183 DK Alknjcb, All Rights Reserved.</p>
        </div>
        <div className="gpt3_footer-links-div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3_footer-links-div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 183 DK Alknjcb</p>
          <p>000-0000000</p>
          <p>info.gpt@openai.ai</p>
        </div>
        <div className="gpt3_footer-links-div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="gpt3_footer-copyright">
        <p>2021 GPT-3. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
