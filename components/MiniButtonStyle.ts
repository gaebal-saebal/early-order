//버튼스타일
'use client';
import { ButtonProps } from '@/types/interface';
import { styled } from 'styled-components';

export const MiniBtnContainer = styled.button<ButtonProps>`
  width: ${({ width }) => `${width}px`};
  background-color: ${({ theme }) => theme.colors.WHITE};
  border: 1px solid ${({ theme }) => theme.colors.GRAY_C7};
  color: ${({ color, theme }) => (color ? color : theme.colors.GRAY_64)};
  border-radius: 6px;
  text-align: center;
  padding: 5px 10px;
`;
