import styled from "styled-components";

const StyledSearchBar = styled.div`
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.shadow};
  padding: 10px 30px;
  display: flex;
  background-color: ${(props) => props.theme.colors.bg};
`;

const StyledButton = styled.button`
  background-color: transparent;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`;

const StyledInput = styled.input`
  flex-grow: 1;
  text-align: right;
  padding: 0px 0px 0px 10px;
`;

export { StyledSearchBar, StyledButton, StyledInput };
