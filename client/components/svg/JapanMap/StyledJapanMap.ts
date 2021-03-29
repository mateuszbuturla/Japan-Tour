import styled from "styled-components";

const StyledSvg = styled.svg`
  .japanMap__region {
    path {
      transition: 0.5s;
      cursor: pointer;
    }
    text {
      transition: 0.5s;
      cursor: pointer;
    }
    &:hover {
      path {
        fill: ${(props) => props.theme.colors.first};
      }
      text {
        fill: ${(props) => props.theme.colors.firstDark};
      }
    }
  }
  .japanMap__city {
    path {
      transition: 0.5s;
      cursor: pointer;
    }
    text {
      transition: 0.5s;
      cursor: pointer;
    }
    &:hover {
      path {
        fill: ${(props) => props.theme.colors.first};
      }
      text {
        fill: ${(props) => props.theme.colors.first};
      }
    }
  }
`;

export { StyledSvg };
