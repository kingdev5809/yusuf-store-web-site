import React from "react";
import "./Category.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import CategoryItem from "./CategoryItem";

function Category() {
  return (
    <div className="category">
      <div className="content">
        <h2>Kategoriyalar</h2>
        <Swiper
          slidesPerView={8}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          // loop={true}
          modules={[Pagination, Navigation]}
          className="mySwiper">
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
