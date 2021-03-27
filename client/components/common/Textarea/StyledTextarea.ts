import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: 100%;
  background-color: ${(props) => props.theme.colors.bg};
  padding: 10px 20px;
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: ${(props) => props.theme.borderRadius};
  resize: vertical;
  min-height: 150px;
`;

export { StyledTextarea };
