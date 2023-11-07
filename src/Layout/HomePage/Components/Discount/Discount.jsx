import React from "react";
import DiscountItem from "./DiscountItem";
import "./Discount.scss";
function Discount() {
  return (
    <div className="discount">
      <DiscountItem />
      <DiscountItem />
    </div>
  );
}

export default Discount;
