import { styled } from "styled-components";

const ShopListWholeContainer = styled.div`
  .swiper {
    width: 100%;
    height: 180px;
    display: flex;
  }

  .swiper-slide {
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: stretch;
  }

  .swiper-slide img {
    display: block;
    width: 89px;
    height: 89px;
    object-fit: cover;
  }
  .swiper-pagination {
  }

  .swiper-pagination-bullet {
    --swiper-pagination-color: grey;
  }
`;
const ShopListContainer = styled.div`
  /* ${({ theme }) => theme.layout.flexCenter}; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  width: 325px;
  height: 139px;
  margin: 5px 0;
`;

const ShopDetailContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 104px;
  width: 300px;
  padding: 12px;

  img {
    width: 98px;
    height: 99px;
    border-radius: 10px;
    margin-right: 15px;
  }
`;

const ShopDetailWrapper = styled.div`
  /* display: flex; */
  flex-direction: column;
  justify-content: flex-start;
  height: 104px;
  h4 {
    line-height: 130%;
    text-align: left;
    margin: 6px 0 0 0;
  }
`;

const TagInfo = styled.div`
  display: inline-block;
  margin: 0;
  padding: 2px 8px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.GREEN_LIGHT};
  /* text-align: center; */
  align-items: center;
  justify-content: center;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.GREEN};
  font-size: 12px;
  font-weight: 600;
`;

const DetailInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 0;
  height: 22px;
  width: 139px;
  p {
    /* color: ${({ theme }) => theme.colors.GRAY_A3}; */
    /* font-size: 14px; */
    /* font-weight: 500; */
    margin: 0 0 0 3px;
    display: flex;
  }

  .datail-wrapper {
    ${({ theme }) => theme.layout.flexCenter};
    color: ${({ theme }) => theme.colors.GRAY_A3};
    font-size: 14px;
    font-weight: 500;
    margin-top: 8px;
    line-height: 150%;
    /* :nth-child(1n) {
      height: 12px;
      color: ${({ theme }) => theme.colors.GRAY_A3};
    } */
  }
`;

const TimeInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 12px;
  font-weight: 500;
  line-height: 22px; /* 183.333% */
  margin-top: 10px;
  .open-status {
    color: ${({ theme }) => theme.colors.GREEN};
    margin-right: 6px;
  }
  .lastorder-time {
    color: ${({ theme }) => theme.colors.GRAY_9D};
  }
  p {
    /* color: ${({ theme }) => theme.colors.GRAY_A3}; */
    /* font-size: 14px; */
    /* font-weight: 500; */
    margin: 0;
    display: flex;
  }
`;

export {
  ShopListWholeContainer,
  ShopListContainer,
  ShopDetailContainer,
  ShopDetailWrapper,
  TagInfo,
  DetailInfo,
  TimeInfo,
};
