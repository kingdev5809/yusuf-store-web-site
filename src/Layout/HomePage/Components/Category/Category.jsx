import React from "react";
import "./Category.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import CategoryItem from "./CategoryItem";

function Category() {
  return (
    <div className="category">
      <div className="content">
        <h2>Kategoriyalar</h2>
        <Swiper
          slidesPerView={8}
          spaceBetween={30}
          // freeMode={true}
          pagination={{
            clickable: true,
          }}
          // loop={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <CategoryItem />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryItem />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryItem />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryItem />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryItem />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryItem />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryItem />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryItem />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Category;
