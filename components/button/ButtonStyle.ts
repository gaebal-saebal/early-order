//버튼스타일
'use client';
import theme from '@/theme/theme';
import { ButtonProps } from '@/types/interface';
import { styled } from 'styled-components';

const bgBlack = theme.colors.BLACK_00;

export const ButtonContainer = styled.button<ButtonProps>`
  width: ${({ width }) => `${width}px`};
  border-radius: ${({ theme, radius }) =>
    radius === 'small'
      ? theme.borderRadius.small
      : radius === 'medium'
      ? '20px'
      : '30px'};
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : bgBlack)};
  color: ${({ color }) => color};
  font-size: 16px;
  text-align: center;
  border: 0;
  height: ${({ radius }) => (radius === 'small' ? '48px' : '45px')};
  cursor: pointer;
`;
