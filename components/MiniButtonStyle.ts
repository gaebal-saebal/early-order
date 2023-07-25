//버튼스타일
"use client";
import { ButtonProps } from "@/types/interface";
import { styled } from "styled-components";

const MiniBtnContainer = styled.button<ButtonProps>`
  width: ${({ width }) => `${width}px`};
  background-color: ${({ theme }) => theme.colors.WHITE};
  border: 1px solid ${({ theme }) => theme.colors.GRAY_C7};
  color: ${({ theme }) => theme.colors.GRAY_78};
  border-radius: ${({ radius }) => `${radius}px`};
  text-align: center;
`;
