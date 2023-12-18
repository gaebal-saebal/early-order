import { styled } from 'styled-components';

const ShopInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 28px 0 0 20px;
  /* overflow: auto; */
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
const IconStyle = styled.span`
  /* width: 18px; */
  height: 16px;
  margin-bottom: 5px;
`;
const IconTitle = styled.span`
  color: ${({ theme }) => theme.colors.GRAY_9D};
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
`;

const ShopInfoWrapper = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  line-height: 130%;
  /* margin: 0 0 0 20px; */
  /* flex-direction: column; */
`;

const ShopInfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  div {
    display: flex;
    align-items: center;
    margin-bottom: 9px;
  }
  span {
    color: ${({ theme }) => theme.colors.GRAY_9D};
    margin-left: 9px;

    .hour-info {
      margin-bottom: 9px;
    }
  }
`;

const ShopInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin-bottom: 9px;
    color: ${({ theme }) => theme.colors.GRAY_50};
  }
`;

const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 95%;
  margin: 40px 0 14px 0;
  /* height: 235px; */
  /* margin-top: 50px; */
`;

export {
  ShopInfoContainer,
  ShopInfoWrapper,
  ShopInfoTitle,
  IconWrapper,
  ShopInfoContent,
  MapContainer,
  IconStyle,
  IconTitle,
};
