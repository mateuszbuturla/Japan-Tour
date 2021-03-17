import styled from "styled-components";

const StyledTile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const StyledThumbnail = styled.img`
  width: 125px;
  margin-right: 10px;
`;

const StyledName = styled.h3`
  font-size: ${(props) => props.theme.fontSize.text.small};
  font-weight: bold;
`;

const StyledDescription = styled.p`
  font-size: ${(props) => props.theme.fontSize.text.small};
`;

export { StyledTile, StyledThumbnail, StyledName, StyledDescription };
