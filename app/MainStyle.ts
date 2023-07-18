'use client';
import { styled } from 'styled-components';

const StyledP = styled.p`
  color: ${({ theme }) => theme.colors.GREEN};
`;

const StyledSection = styled.section`
  ${({ theme }) => theme.layout.flexCenter}
`;

export { StyledP, StyledSection };
