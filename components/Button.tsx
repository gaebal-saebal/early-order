// import React from 'react';

import { ButtonContainer } from "./ButtonStyle";
export interface ButtonProps {
  width: number;
  radius: string;
  bgColor: string;
  // onClick?: (name: string) => void;
}

const Button = ({
  children,
  props,
}: // width,
// radius,
// bgColor,
{
  children: React.ReactNode;
  props: ButtonProps;
  // width: ButtonProps;
  // radius: ButtonProps;
  // bgColor: ButtonProps;
}) => {
  const { width, radius, bgColor } = props;
  return (
    <ButtonContainer width={width} radius="22" bgColor="black">
      {children}
    </ButtonContainer>
  );
};

Button.deafultProps = {
  width: 42,
  radius: "10",
  bgColor: "black",
};

export default Button;
