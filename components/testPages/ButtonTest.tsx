'use client';

import Button from '@/components/Button';
import { ButtonContainer } from '@/components/ButtonStyle';
import { MiniButton } from '@/components/MiniButton';
import { Tag } from '@/components/Tag';
import theme from '@/theme/theme';
import { styled } from 'styled-components';

export const BtnCuston = styled(ButtonContainer)`
  width: 200px;
`;

export const ButtonTest = () => {
  return (
    <div>
      <BtnCuston width={189} bgcolor={theme.colors.BLACK_00} color='white'>
        바로 등록하기
      </BtnCuston>
      <MiniButton color={theme.colors.GRAY_C7}>미니버튼</MiniButton>
      <Tag>생과일쥬스</Tag>
    </div>
  );
};
