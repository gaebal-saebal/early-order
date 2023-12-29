import { styled } from "styled-components";

const ShopCardContainer = styled.div`
  /* width: 100%; */
  /* height: 180px; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: beige; */
`;

const ShopCardListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  width: 325px;
  height: 139px;
  margin: 10px 0 20px 0;
`;

const ShopCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardDetailContainer = styled.div`
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

const CardDetailWrapper = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  height: 104px;

  h4 {
    line-height: 130%;
    text-align: left;
    margin: 6px 0 0 0;
  }
`;

export {
  ShopCardContainer,
  ShopCardListContainer,
  ShopCardWrapper,
  CardDetailContainer,
  CardDetailWrapper,
};
