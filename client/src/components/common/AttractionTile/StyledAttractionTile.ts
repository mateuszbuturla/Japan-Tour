import styled from 'styled-components';

const StyledAttractionTile = styled.div`
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

const StyledAttractionTileImage = styled.img`
  width: 100%;
`;

const StyledAttractionTileTitle = styled.h4`
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
`;

const StyledAttractionTileDescription = styled.p`
  margin-top: 10px;
`;

export {
  StyledAttractionTile,
  StyledAttractionTileImage,
  StyledAttractionTileTitle,
  StyledAttractionTileDescription,
};
