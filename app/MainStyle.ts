'use client';
import { styled } from 'styled-components';

const StyledP = styled.p`
  color: ${({ theme }) => theme.colors.GREEN};
`;

const StyledSection = styled.section`
  ${({ theme }) => theme.layout.flexCenter};
`;

const StyledDiv = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius.large};
`;

const StyledSvg = styled.svg`
  &:hover {
  }
`;

export { StyledP, StyledSection, StyledDiv, StyledSvg };
