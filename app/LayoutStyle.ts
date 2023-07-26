'use client';
import { styled } from 'styled-components';

const StyledLayoutContainer = styled.div`
  ${({ theme }) => theme.layout.flexCenter};
`;

const StyledLayout = styled.div`
  max-width: 375px;
  width: 100vw;
  max-height: 812px;
  height: 100vh;
  outline: solid;
`;

export { StyledLayoutContainer, StyledLayout };
