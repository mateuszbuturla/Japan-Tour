import styled from 'styled-components';

interface StyledButtonProps {
  bgColor: 'default' | 'red';
  small?: boolean;
  style?: 'style1' | 'style2';
}

const StyledButton = styled.button<StyledButtonProps>`
  width: ${(props) => (props.small ? 'auto' : '100%')};
  border: none;
  outline: none;
  padding: 10px 30px;
  border-radius: 50px;
  color: #fff;
  background-color: ${(props) =>
    props.bgColor === 'default'
      ? props.theme.colors.mainColor
      : props.bgColor === 'red' && '#e31305'};
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 2px;
  transition: ${(props) => props.theme.transition.fast};

  &:hover {
    background-color: ${(props) =>
      props.bgColor === 'default'
        ? props.theme.colors.mainColor + '70'
        : props.bgColor === 'red' && '#e31305'};
  }
`;

export { StyledButton };
