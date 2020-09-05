import styled from 'styled-components';
import { ReactComponent as Map } from '../../../assets/japanMap.svg';

const StyledJapanMap = styled(Map)`
  display: block;
  width: 100%;
  margin: 50px auto 0px;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    width: 70%;
  }

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
        fill: #2d6e29;
      }
      text {
        fill: #1a4718;
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
        fill: ${(props) => props.theme.colors.mainColor};
      }
      text {
        fill: ${(props) => props.theme.colors.mainColor};
      }
    }
  }
`;

export { StyledJapanMap };
