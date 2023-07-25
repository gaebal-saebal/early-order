'use client';
import { styled } from 'styled-components';
import { ButtonProps } from '@/types/interface';

export const TagContainer = styled.div<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.WHITE};
  border: 1px solid ${({ theme }) => theme.colors.GRAY_DF};
  color: ${({ color, theme }) => (color ? color : theme.colors.GRAY_64)};
  padding: 6px 8px;
  border-radius: 20px;
  font-size: 14px;
  text-align: center;
  display: inline-block;
  white-space: nowrap;
`;
