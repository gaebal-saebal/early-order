'use client';
import { styled } from 'styled-components';

const StyledLayoutContainer = styled.div`
  ${({ theme }) => theme.layout.flexCenter};
`;

const StyledLayout = styled.div`
  position: relative;

  max-width: 375px;
  width: 100vw;
  max-height: 812px;
  height: 100dvh;
  outline: solid;
`;

export { StyledLayoutContainer, StyledLayout };
