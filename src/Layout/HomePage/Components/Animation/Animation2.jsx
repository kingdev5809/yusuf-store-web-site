import React from "react";
import { apple, iphone152 } from "../../../../Assets/photo";
import "./Animation.scss";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function Animation2() {
  return (
    <div className="animationBlack white">
      <div className="left_side">
        <img src={iphone152} alt="" width="400" data-aos="fade-up" />
      </div>
      <div className="right_side">
        <center data-aos="fade-down">
          <img src={apple} alt="" width="60" />
          <div className="title">
            <h2>Iphone 13 pro max</h2>
          </div>
          <p className="titanium">Aqilliroq. Yorqinroq. Qudratliroq</p>
          <p className="price">799$ dan boshlab</p>
        </center>
        <button>Harid qilish</button>
      </div>
    </div>
  );
}

export default Animation2;
