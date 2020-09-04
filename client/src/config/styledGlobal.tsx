import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  body {
    overflow-x: hidden;
  }
`;

interface Props {
  children: any;
}

const theme = {
  colors: {
    bg: '#fff',
    grey: '#6e6e6e',
    lightGrey: '#d9d9d9',
    subPageHeader: '#fff',
    mainColor: '#b73ebd',
  },
  breakPoints: {
    xs: '0xp',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
  },
};

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    {children}
    <GlobalStyle />
  </ThemeProvider>
);

export default Theme;
