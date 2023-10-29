import styled from "styled-components";

const SwiperContainer = styled.div`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SlideItemContainer = styled.div``;
export { SwiperContainer, SlideItemContainer };
