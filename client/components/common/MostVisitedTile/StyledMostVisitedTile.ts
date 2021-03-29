import styled from "styled-components";

const StyledTile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledThumbnail = styled.img`
  width: 125px;
  margin-right: 10px;
  @media (min-width: 1200px) {
    width: 250px;
  }
`;

const StyledName = styled.h3`
  font-size: ${(props) => props.theme.fontSize.text.small};
  font-weight: bold;

  @media (min-width: 1200px) {
    font-size: ${(props) => props.theme.fontSize.text.big};
  }
`;

const StyledDescription = styled.p`
  font-size: ${(props) => props.theme.fontSize.text.small};
  @media (min-width: 1200px) {
    font-size: ${(props) => props.theme.fontSize.text.big};
  }
`;

export { StyledTile, StyledThumbnail, StyledName, StyledDescription };
