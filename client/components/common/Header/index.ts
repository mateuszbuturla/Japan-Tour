import styled from "styled-components";

let Header = styled.h2`
  font-size: ${(props) => props.theme.fontSize.header.small};
  color: ${(props) => props.theme.colors.first};
  text-align: center;
`;

export default Header;
