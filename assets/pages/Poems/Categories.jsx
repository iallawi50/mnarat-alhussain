import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper/modules";
import usePoemContext from "../../context/PoemContext";
import { useState } from "react";
const Categories = () => {
  const { category, setCategory, getCategories, categories } = usePoemContext(); 
  return (
    <div className="mx-4">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide
          key={0}
          onClick={(e) => {
            setCategory(0);
          }}
          className={`my-10 items-center justify-center px-5 py-2 text-center bg-[#D9D9D9] text-[#466B54] text-bold rounded-lg ${
            0 == category ? "active" : "cursor-pointer"
          } `}
        >
          جميع القصائد
        </SwiperSlide>
        {categories &&
          categories.map((el, id) => {
            return (
              <SwiperSlide
                key={el.id}
                onClick={(e) => {
                  setCategory(el.id);
                }}
                className={`my-10 items-center justify-center px-5 py-2 text-center bg-[#D9D9D9] text-[#466B54] text-bold rounded-lg ${
                  el.id == category ? "active" : "cursor-pointer"
                } `}
              >
                {el.title}
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Categories;
