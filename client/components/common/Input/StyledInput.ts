import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  background-color: ${(props) => props.theme.colors.bg};
  padding: 10px 20px;
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export { StyledInput };
