import styled from "styled-components";

let Header = styled.h2`
  font-size: ${(props) => props.theme.fontSize.header.small};
  color: ${(props) => props.theme.colors.first};
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }

  @media (min-width: 1200px) {
    font-size: ${(props) => props.theme.fontSize.header.big};
  }
`;

export default Header;
