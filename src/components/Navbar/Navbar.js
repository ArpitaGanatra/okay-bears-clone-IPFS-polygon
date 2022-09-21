import React from "react";
import { Link } from "react-router-dom";
import twitter from "../../assets/images/twitter.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="left__container">
        <Link to="/" className="logo__container">
          <img
            src="https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/622063039e289f27bc601f67_OKB-Logo.png"
            alt="okay bears logo"
            className="logo"
          />
        </Link>
      </div>
      <div className="right__container">
        <Link className="link">Home</Link>
        <Link className="link">Bear Market</Link>
        <Link className="link">Park</Link>
        <Link className="link">BluePrint</Link>
        <span className="link">
          <i class="ri-twitter-line"></i>
        </span>
        <span className="link">
          <i class="ri-linkedin-line"></i>
        </span>
        <span className="link">
          <i class="ri-discord-line"></i>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
