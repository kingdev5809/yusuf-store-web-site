import React from "react";
import "./Category.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CategoryItem from "./CategoryItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Category() {
  return (
    <div className="category">
      <div className="content">
        <div className="title">
          <h2>Kategoriyalar</h2>
          <div className="navigation-swiper">
            <span className="button-prev_category-slider">
              <FontAwesomeIcon icon={faChevronLeft} />
            </span>
            <span className="button-next_category-slider">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </div>
        </div>
        <Swiper
          slidesPerView={8}
          spaceBetween={30}
          // loop={true}
          navigation={{
            nextEl: ".button-next_category-slider",
            prevEl: ".button-prev_category-slider",
          }}
          modules={[Navigation]}
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
