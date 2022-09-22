import React from "react";
import "./herosection.css";

const Herosection = () => {
  return (
    <div className="herosection__container">
      <div className="title__section">
        <div className="okay__color">
          <div className="o-div">
            <img
              src="https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/6229a9b8f02d26602ae2ac99_Green%20O.png"
              alt="o-colored"
            />
          </div>
          <div className="k-div">
            <img
              src="https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/6229a9d35ca27b36b2ad27d5_Blue-K.png"
              alt="k-colored"
            />
          </div>
          <div className="a-div">
            <img
              src="https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/6229a9f818f7b9952912c89e_Purple-A.png"
              alt="a-colored"
            />
          </div>
          <div className="y-div">
            <img
              src="https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/6229aa571d28bf0b7a90af8f_Yellow_Y.png"
              alt="y-colored"
            />
            <img
              className="bears-hero-img"
              src="https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/62205a99f178ba61ca99ec90_TitleSection-Bears.svg"
              alt=""
            />
          </div>
        </div>

        <div className="okay__dark">
          <div className="o-div">
            <img
              src="https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/621f2e39b978735216e2ca6f_OKB-O.svg"
              alt="o-colored"
            />
          </div>
          <div className="k-div">
            <img
              src="https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/621f2eb03586c1ad602f556a_OKB-K.svg"
              alt="k-colored"
            />
          </div>
          <div className="a-div">
            <img
              src="https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/621f2eb4a9cce950b774bfd6_OKB-A.svg"
              alt="a-colored"
            />
          </div>
          <div className="y-div">
            <img
              src="https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/621f2eb99342fe6cb8cc3083_OKB-Y.svg"
              alt="y-colored"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
