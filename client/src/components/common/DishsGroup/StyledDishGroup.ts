import styled from 'styled-components';

const StyledDishTilesContainer = styled.div`
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

const StyledDishTile = styled.div`
  width: 100%;
  padding: 10px;
  box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  margin-top: 20px;
  cursor: pointer;

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
`;

const StyledDishTileImage = styled.img`
  width: 100%;
`;

const StyledDishTitleTypeContainer = styled.div``;

const StyledDishTileTitle = styled.h4`
  display: inline;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
`;

const StyledDishTileType = styled.p`
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

const StyledDishTileDescription = styled.p`
  margin-top: 10px;
`;

export {
  StyledDishTilesContainer,
  StyledDishTile,
  StyledDishTileImage,
  StyledDishTitleTypeContainer,
  StyledDishTileTitle,
  StyledDishTileType,
  StyledDishTileDescription,
};
