'use client';

import styled from 'styled-components';

const ListInfoStyle = styled.div`
  display: flex;
  width: 325px;
  height: 100%;
  color: ${({ theme }) => theme.colors.GRAY_78};
  font-size: 12px;
  font-weight: 500;
  line-height: 150%;
  /* flex-direction: column; */
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5px;

  .text {
    text-align: center;
    margin-left: 3px;
  }
`;

export { ListInfoStyle };
