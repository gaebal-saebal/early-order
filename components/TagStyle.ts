"use client";
import { styled } from "styled-components";
import theme from "../theme/theme";
import { ButtonProps } from "@/types/interface";

export const TagContainer = styled.div<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.WHITE};
  border: 1px solid ${({ theme }) => theme.colors.GRAY_A3};
  color: ${({ theme }) => theme.colors.GRAY_78};
  border-radius: 20px;
`;
