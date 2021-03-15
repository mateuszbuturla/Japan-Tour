import { ThemeProvider, createGlobalStyle } from "styled-components";

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
    bg: "#fff",
    first: "#C850C0",
    second: "#4158D0",
    textColor: "#000",
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
  },
  breakPoints: {
    xs: "0xp",
    sm: "600px",
    md: "960px",
    lg: "1280px",
    xl: "1920px",
  },
  maxWidth: "1500px",
  transition: {
    slow: "0.4s",
    fast: "0.1s",
  },
};

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    {children}
    <GlobalStyle />
  </ThemeProvider>
);

export default Theme;
