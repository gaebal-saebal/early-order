'use client';

import React from 'react';
import { ShopList } from './ShopList';
import { styled } from 'styled-components';

const TestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShopListTest = () => {
  return (
    <TestContainer>
      <ShopList />
    </TestContainer>
  );
};
