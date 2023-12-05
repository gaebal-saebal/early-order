'use client';
import React from 'react';
import Home from '../navigation/Home';
import Coupon from '../navigation/Coupon';
import Cart from '../navigation/Cart';
import Group from '../navigation/Group';
import { StyledButton, StyledDiv } from './FooterStyle';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <StyledDiv>
      <StyledButton>
        <Home />
      </StyledButton>
      <StyledButton>
        <Cart />
      </StyledButton>
      <StyledButton>
        <Coupon />
      </StyledButton>
      <StyledButton>
        <Group />
      </StyledButton>
    </StyledDiv>
  );
};

export default Footer;
