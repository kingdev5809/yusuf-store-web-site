import React from "react";
import { appleWatchPhoto } from "../../../../Assets/photo";

function DiscountItem() {
  return (
    <div className="discount_item">
      <div className="title">
        <h2>Apple watch aires 8</h2>
        <p>30% chegirma</p>
      </div>
      <div className="content">
        <div className="slide">
          <div className="slide-color">
            <img src={appleWatchPhoto} alt="product" />
          </div>
          <div className="slide-pagination">
            <div className="slide-pagination-item"></div>
            <div className="slide-pagination-item"></div>
            <div className="slide-pagination-item"></div>
          </div>
        </div>
        <div className="right-side">
          <h4>GPS 41 mm midnight</h4>
          <h5>
            1GB watchos <br /> 9.0 282mAh
          </h5>
          <p>
            <span>399$-</span>199$
          </p>
        </div>
      </div>
    </div>
  );
}

export default DiscountItem;
