import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="copyright">
        Made with ❤️ by{" "}
        <a href="https://twitter.com/GanatraArpita" target="_blank">
          Arpita Ganatra
        </a>{" "}
        <br />
        We’re all gonna be okay.
      </div>

      <div className="terms">
        <a href="#">
          Terms and Conditions
          <br /> Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
