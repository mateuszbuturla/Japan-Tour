import styled from 'styled-components';

const StyledAttractionTilesContainer = styled.div`
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

export default StyledAttractionTilesContainer;
