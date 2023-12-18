import { styled } from 'styled-components';

const ShopDetailsWholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .shop-img {
    position: relative;
    top: -50;
  }
`;
const ShopDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 20px 20px 0 0;
  background-color: white;
  position: relative;

  top: -35px;
  z-index: 998;
  /* overflow-y: scroll; */
  /* margin-top: -40px; */
  .Btn-style {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const ShopTitleInfo = styled.div`
  /* background-color: beige; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  /* border-radius: ${({ theme }) => theme.borderRadius.medium}; */
  .shop-name {
    color: ${({ theme }) => theme.colors.BLACK_11};
    font-size: 22px;
    font-weight: 600;
    line-height: 130%;
    margin-top: 39px;
  }
  .shop-detail-content {
    color: ${({ theme }) => theme.colors.GRAY_9D};
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
  }
`;

const ShopDetailInfoTop = styled.div`
  display: flex;
  /* margin-bottom: 200px; */
  padding: 20px 30px 0 30px;
  /* width: 100%; */
`;

export {
  ShopDetailsContainer,
  ShopTitleInfo,
  ShopDetailInfoTop,
  ShopDetailsWholeContainer,
};
