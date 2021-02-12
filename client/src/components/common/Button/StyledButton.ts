import styled from 'styled-components';

interface StyledButtonProps {
  bgColor: 'default' | 'red';
}

const StyledButton = styled.button<StyledButtonProps>`
  width: 100%;
  border: none;
  outline: none;
  padding: 10px;
  background-color: ${(props) =>
    props.bgColor === 'default' ? '#7f81d4' : props.bgColor === 'red' && '#e31305'};
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 2px;

  &:hover {
    background-color: #6366d4;
  }
`;

export { StyledButton };
