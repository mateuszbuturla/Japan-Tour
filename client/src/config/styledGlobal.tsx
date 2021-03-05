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

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
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
    buttonColor: '#6d7dd1',
  },
  breakPoints: {
    xs: '0xp',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
  },
  maxWidth: '1500px',
  transition: {
    slow: '0.4s',
    fast: '0.1s',
  },
};

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    {children}
    <GlobalStyle />
  </ThemeProvider>
);

export default Theme;
