import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css"; // Ensure Swiper's CSS is imported
import "./Category.scss";
import { iphone } from "../../../../Assets/photo";

const CategoryItem = () => {
  return (
    <SwiperSlide>
      <img src={iphone} alt="" />
      <span>Telefon</span>
    </SwiperSlide>
  );
};

export default CategoryItem;
