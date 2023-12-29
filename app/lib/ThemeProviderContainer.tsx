'use client';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const ThemeProviderContainer = ({ children, theme }: { children: React.ReactNode; theme: {} }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderContainer;
