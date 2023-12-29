'use client';
import { styled } from 'styled-components';

const StyledDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 83px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  border-top: 1px solid black; // footer 높이 확인용 임시 border
`;

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
`;

export { StyledDiv, StyledButton };
