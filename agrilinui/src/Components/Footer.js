import React from "react";
import copyRight from "../Images/copyRight.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <img className="img__width" src={copyRight} alt="copy__right" />
    </div>
  );
};

export default Footer;
