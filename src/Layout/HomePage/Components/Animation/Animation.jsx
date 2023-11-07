import React from "react";
import { appleLogo, iphone15 } from "../../../../Assets/photo";
import "./Animation.scss";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function Animation() {
  return (
    <div className="animationBlack">
      <div className="left_side">
        <img src={iphone15} alt="" width="400" data-aos="fade-up" />
      </div>
      <div className="right_side">
        <center data-aos="fade-down">
          <div className="title">
            <img src={appleLogo} alt="" width="30" />
            <h2>Iphone 15 pro</h2>
          </div>
          <p className="titanium">Titanium</p>
          <p className="price">999.00$</p>
        </center>
        <button>Harid qilish</button>
      </div>
    </div>
  );
}

export default Animation;
