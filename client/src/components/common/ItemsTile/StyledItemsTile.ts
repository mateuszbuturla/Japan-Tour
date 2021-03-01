import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledTilesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    justify-content: space-around;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    justify-content: left;
  }
`;

const StyledTile = styled(Link)`
  display: block;
  text-decoration: none;
  width: 100%;
  padding: 10px;
  box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  margin-top: 20px;
  cursor: pointer;
  transform: scale(1);
  color: #000;
  transition: 0.5s;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    width: 45%;
    margin-top: 5%;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    width: 30%;
    margin-right: 3%;
    margin-top: 3%;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    width: 23%;
    margin-right: 2%;
  }

  &:hover {
    transform: scale(1.05) rotate(5deg);
  }
`;

const StyledTileImage = styled.img`
  width: 100%;
`;

const StyledTitleTypeContainer = styled.div``;

const StyledTileTitle = styled.h4`
  display: inline;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
`;

const StyledTileType = styled.p`
  display: inline;
  position: relative;
  margin-left: 20px;
  font-size: 15px;
  color: ${(props) => props.theme.colors.grey};

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -10px;
    width: 1px;
    height: 15px;
    transform: rotate(20deg) translateY(-50%);
    background-color: ${(props) => props.theme.colors.grey};
  }
`;

const StyledTileDescription = styled.p`
  margin-top: 10px;
`;

const StyledTilesShowMoreTile = styled(Link)`
  display: flex;
  text-decoration: none;
  width: 100%;
  box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  margin-top: 20px;
  cursor: pointer;
  transform: scale(1);
  background-color: ${(props) => props.theme.colors.mainColor};
  color: #fff;
  transition: 0.5s;
  justify-content: center;
  align-items: center;
  font-size: 25px;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    width: 45%;
    margin-top: 5%;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    width: 30%;
    margin-right: 3%;
    margin-top: 3%;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    width: 23%;
    margin-right: 2%;
  }

  &:hover {
    transform: scale(1.05) rotate(5deg);
  }
`;

export {
  StyledTilesContainer,
  StyledTile,
  StyledTileImage,
  StyledTitleTypeContainer,
  StyledTileTitle,
  StyledTileType,
  StyledTileDescription,
  StyledTilesShowMoreTile,
};
