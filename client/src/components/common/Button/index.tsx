import React from 'react';
import { StyledButton } from './StyledButton';

interface Props {
  text: string;
  onClick?: any;
  bgColor?: 'default' | 'red';
}

function Button({ text, onClick, bgColor = 'default' }: Props) {
  return (
    <StyledButton onClick={onClick && onClick} bgColor={bgColor}>
      {text}
    </StyledButton>
  );
}

export default Button;
