//버튼스타일
'use client';
import { styled } from 'styled-components';
import { ButtonProps } from './Button';

type ButtonStyleProps = ButtonProps;

export const ButtonContainer = styled.button<ButtonProps>`
  width: ${({ width }) => `${width}px`};
  background-color: ${({ theme, bgColor }) =>
    bgColor ? bgColor : theme.colors.BLACK_00};
  color: white;
  font-size: 16px;
  text-align: center;
  border-radius: ${({ theme, radius }) =>
    radius === 'small'
      ? theme.borderRadius.small
      : radius === 'medium'
      ? '20px'
      : '30px'};
  border: 0;
  height: ${({ radius }) => (radius === 'small' ? '48px' : '45px')};
`;
