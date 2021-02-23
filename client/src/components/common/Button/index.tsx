import React from 'react';
import { StyledButton } from './StyledButton';

interface Props {
  text: string;
  onClick?: any;
  bgColor?: 'default' | 'red';
  small?: boolean;
}

function Button({ text, onClick, bgColor = 'default', small }: Props) {
  return (
    <StyledButton onClick={onClick && onClick} bgColor={bgColor} small={small}>
      {text}
    </StyledButton>
  );
}

export default Button;
