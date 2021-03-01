import React from 'react';
import { StyledButton } from './StyledButton';

interface Props {
  text: string;
  onClick?: any;
  small?: boolean;
}

function Button({ text, onClick, small }: Props) {
  return (
    <StyledButton onClick={onClick && onClick} small={small}>
      {text}
    </StyledButton>
  );
}

export default Button;
