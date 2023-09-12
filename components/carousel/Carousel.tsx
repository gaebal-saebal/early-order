// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Carousel = () => {
  const arr = ["Slide 1", "Slide 2", "Slide 333"];
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("#slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={true}
      className="mySwiper"
    >
      {arr.map((item: string, idx: number) => {
        return (
          <SwiperSlide>
            <div key={idx}>{item}</div>
          </SwiperSlide>
        );
      })}
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
    </Swiper>
  );
};

export default Carousel;
