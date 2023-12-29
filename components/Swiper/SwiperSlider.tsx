import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperContainer } from "./SwiperStyle";

export const SwiperSlider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SwiperContainer>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("#slide change")}
        onSwiper={(swiper) => console.log("#swiper", swiper)}
        className="swiper"
      >
        {children}
      </Swiper>
    </SwiperContainer>
  );
};
