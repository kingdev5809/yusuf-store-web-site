import React from "react";
import "./Header.scss";
import { apple, headerImg } from "../../../../Assets/photo";

function Header() {
  return (
    <div className="header">
      <div className="left_side">
        <img src={apple} alt="" />
        <h1>Apple Watch </h1>
        <p>Aqlliroq. Yorqinroq. Qudratliroq.</p>
        <span>399$ dan boshlab</span>
        <button type="button">Harid qilish</button>
      </div>
      <div className="right_side">
        <img src={headerImg} alt="" />
      </div>
    </div>
  );
}

export default Header;
