import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  border: none;
  outline: none;
  padding: 10px;
  background-color: #7f81d4;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 2px;

  &:hover {
    background-color: #6366d4;
  }
`;

export { StyledButton };
