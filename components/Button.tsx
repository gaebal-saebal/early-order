// import React from 'react';

import { ButtonContainer } from './ButtonStyle';
export interface ButtonProps {
  width: number;
  radius: string;
  bgColor: string;
  // onClick?: (name: string) => void;
}

const Button = (
  { children }: { children: React.ReactNode },
  { width, radius, bgColor }: ButtonProps
) => {
  return (
    <ButtonContainer width={width} radius={radius} bgColor={bgColor}>
      {children}
    </ButtonContainer>
  );
};

Button.deafultProps = {
  width: 42,
  radius: '10',
  bgColor: 'black',
};

export default Button;
