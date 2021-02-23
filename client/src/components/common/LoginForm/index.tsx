import React from 'react';
import { Input, Button } from 'components/common';
import {
  StyledLoginFormWrapper,
  StyledLoginForm,
  StyledLoginFormTopContainer,
  StyledLoginFormHeader,
  StyledLoginFormBottomContainer,
  StyledLoginFormForm,
} from './StyledLoginForm';

function LoginForm() {
  return (
    <StyledLoginFormWrapper>
      <StyledLoginForm>
        <StyledLoginFormTopContainer>
          <StyledLoginFormHeader>Logowanie</StyledLoginFormHeader>
        </StyledLoginFormTopContainer>
        <StyledLoginFormBottomContainer>
          <StyledLoginFormForm>
            <Input id="email" name="email" label="E-mail" />
            <Input id="pass" name="pass" label="Hasło" />
            <Button text="Zaloguj" small />
          </StyledLoginFormForm>
        </StyledLoginFormBottomContainer>
      </StyledLoginForm>
    </StyledLoginFormWrapper>
  );
}

export default LoginForm;
