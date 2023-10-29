import React from "react";
import { SwiperSlide } from "swiper/react";
import { SlideItemContainer } from "./SwiperStyle";

export const SwiperSlideItem = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <SwiperSlide className="swiper-slide">{children}</SwiperSlide>;
};
