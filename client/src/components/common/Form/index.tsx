import React from 'react';
import { StyledForm } from './StyledForm';

interface Props {
  children: any;
  onSubmit: any;
}

function Form({ children, onSubmit }: Props) {
  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      {children}
    </StyledForm>
  );
}

export default Form;
