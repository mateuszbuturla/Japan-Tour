import styled from "styled-components";

let SubHeader = styled.h3`
  font-size: ${(props) => props.theme.fontSize.subHeader.small};
  color: ${(props) => props.theme.colors.first};
  text-align: left;

  @media (min-width: 1200px) {
    font-size: ${(props) => props.theme.fontSize.subHeader.big};
  }
`;

export default SubHeader;
