import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css"; // Ensure Swiper's CSS is imported
import iphone from "../../../../images/iphone.png";
import "./Category.scss";

const CategoryItem = () => {
  return (
    <SwiperSlide>
      <img src={iphone} alt="" />
      <span>Telefon</span>
    </SwiperSlide>
  );
};

export default CategoryItem;
