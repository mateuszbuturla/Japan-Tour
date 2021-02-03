import React from 'react';
import { StyledButton } from './StyledButton';

interface Props {
  text: string;
  onClick?: any;
}

function Button({ text, onClick }: Props) {
  return <StyledButton onClick={onClick && onClick}>{text}</StyledButton>;
}

export default Button;
