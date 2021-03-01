import styled from 'styled-components';

interface StyledButtonProps {
  small?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  width: ${(props) => (props.small ? 'auto' : '100%')};
  border: none;
  outline: none;
  padding: 10px 30px;
  border-radius: 11px;
  color: #fff;
  background-color: ${(props) => props.theme.colors.buttonColor};
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 2px;
  transition: ${(props) => props.theme.transition.fast};

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonColor + '95'};
  }
`;

export { StyledButton };
