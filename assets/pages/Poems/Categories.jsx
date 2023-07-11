import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper/modules";
import usePoemContext from "../../context/PoemContext";
import { useState } from "react";
const Categories = () => {
  const { category, setCategory } = usePoemContext();
  const [Array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  return (
    <div className="mx-4">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {Array &&
          Array.map((el, id) => {
            return (
              <SwiperSlide key={id} onClick={(e) => {
                setCategory(id)
              }}
                className={`my-10 items-center justify-center px-5 py-2 text-center bg-[#D9D9D9] text-[#466B54] text-bold rounded-lg ${id == category ? 'active' : 'cursor-pointer'} `}
              >
                الجميع
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Categories;
