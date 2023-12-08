'use client';

import styled from 'styled-components';

const SimpleOrderContainer = styled.div`
  display: flex;
  /* width: 100%; */
  flex-direction: column;
`;

const SimpleOrderNav = styled.div`
  display: flex;
  flex-direction: column;
  width: 335px;
  padding: 0 20px;
  span {
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
  }
  .simple-nav-top {
    display: flex;
    /* flex: 1; */
    align-items: center;
    /* justify-content: center; */
    margin-bottom: 15px;
    .content {
      width: 45%;
    }
  }
`;

const SimpleShopList = styled.div`
  margin-top: 20px;
  padding: 0 20px;
`;

export { SimpleOrderContainer, SimpleOrderNav, SimpleShopList };
