import styled from "styled-components";

const StyledRegionHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0px;

  @media (min-width: 1024px) {
    flex-direction: column;
    width: 200px;
    margin: 15px 30px 15px 0px;
  }
`;

const StyledRegionName = styled.h2`
  font-size: ${(props) => props.theme.fontSize.subHeader.small};

  @media (min-width: 1200px) {
    font-size: ${(props) => props.theme.fontSize.subHeader.big};
    margin: 0px 0px 30px;
  }
`;

const StyledRegionMap = styled.img`
  width: 100px;

  path {
    fill: #2d6e29;
  }

  @media (min-width: 1024px) {
    width: 100%;
  }
`;

export { StyledRegionHeader, StyledRegionName, StyledRegionMap };
