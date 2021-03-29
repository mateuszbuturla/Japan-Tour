import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    border: none;
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
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
    bg: "#fff",
    first: "#C850C0",
    firstDark: "#a3349c",
    second: "#4158D0",
    textColor: "#000",
    grey: "#717171",
  },
  fontSize: {
    mainHeader: {
      small: "51px",
      big: "85px",
    },
    header: {
      small: "35px",
      big: "75px",
    },
    subHeader: {
      small: "20px",
      big: "50px",
    },
    text: {
      small: "15px",
      big: "26px",
    },
    nav: {
      header: {
        small: "17px",
      },
      text: {
        small: "20px",
      },
    },
  },
  breakPoints: {
    xs: "0xp",
    sm: "600px",
    md: "960px",
    lg: "1280px",
    xl: "1920px",
  },
  maxWidth: "1700px",
  transition: {
    slow: "0.4s",
    fast: "0.1s",
  },
  borderRadius: "8px",
  shadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.24)",
  mobileHeaderWithImageHeight: "180px",
};

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    {children}
    <GlobalStyle />
  </ThemeProvider>
);

export default Theme;

export { theme };
