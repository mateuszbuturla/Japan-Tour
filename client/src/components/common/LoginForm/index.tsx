import actions from 'actions/user/actions';
import { Button, Input } from 'components/common';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Api from 'utils/Api';
import {
  StyledLoginForm,
  StyledLoginFormBottomContainer,
  StyledLoginFormError,
  StyledLoginFormForm,
  StyledLoginFormHeader,
  StyledLoginFormTopContainer,
  StyledLoginFormWrapper,
} from './StyledLoginForm';

function LoginForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const [error, setError] = useState();

  const onSubmit = async (data: any, e: any) => {
    try {
      const res = await Api.post('/auth/login', data);
      if (res.status === 201) {
        dispatch(actions.setUser(res.data));
        history.push('/admin');
      }
    } catch (err) {
      if (err.response.status === 401) {
        setError('Błędy e-mail lub hasło');
        setTimeout(() => {
          setError(null);
        }, 3000);
      } else {
        setError('Wystąpił błąd po stronie serwera.');
        setTimeout(() => {
          setError(null);
        }, 3000);
      }
    }
  };

  return (
    <StyledLoginFormWrapper>
      <StyledLoginForm>
        <StyledLoginFormTopContainer>
          <StyledLoginFormHeader>Logowanie</StyledLoginFormHeader>
        </StyledLoginFormTopContainer>
        <StyledLoginFormBottomContainer>
          <StyledLoginFormForm onSubmit={handleSubmit(onSubmit)}>
            {error && <StyledLoginFormError>{error}</StyledLoginFormError>}
            <Input
              id="email"
              name="email"
              label="E-mail"
              inputRef={register({ required: true })}
              errorMessage={errors.email ? 'To pole nie może być puste' : ''}
            />
            <Input
              type="password"
              id="pass"
              name="pass"
              label="Hasło"
              inputRef={register({ required: true })}
              errorMessage={errors.pass ? 'To pole nie może być puste' : ''}
            />
            <Button text="Zaloguj" small />
          </StyledLoginFormForm>
        </StyledLoginFormBottomContainer>
      </StyledLoginForm>
    </StyledLoginFormWrapper>
  );
}

export default LoginForm;
