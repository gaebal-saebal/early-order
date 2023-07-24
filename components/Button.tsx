// import React from 'react';

import { ButtonProps } from '@/types/interface';
import { ButtonContainer } from './ButtonStyle';

const Button = ({
  children,
  width,
}: // width,
// radius,
// bgColor,
{
  children: React.ReactNode;
  width: number;
  // width: ButtonProps;
  // radius: ButtonProps;
  // bgColor: ButtonProps;
}) => {
  // const { width } = props;
  return <ButtonContainer width={width}>{children}</ButtonContainer>;
};

Button.deafultProps = {
  width: 42,
  radius: '10',
  bgColor: 'black',
};

export default Button;
