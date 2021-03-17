import styled from "styled-components";

const StyledRegionHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0px;
`;

const StyledRegionName = styled.h2`
  font-size: ${(props) => props.theme.fontSize.subHeader.small};
`;

const StyledRegionMap = styled.img`
  width: 100px;

  path {
    fill: #2d6e29;
  }
`;

export { StyledRegionHeader, StyledRegionName, StyledRegionMap };
