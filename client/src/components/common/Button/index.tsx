import React from 'react';
import { StyledButton } from './StyledButton';

interface Props {
  text: string;
}

function Button({ text }: Props) {
  return <StyledButton>{text}</StyledButton>;
}

export default Button;
