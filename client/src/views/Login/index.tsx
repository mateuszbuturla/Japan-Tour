import React, { useEffect } from 'react';
import { LoginForm } from 'components/common';

interface Props {
  setTitle: Function;
}

function Login({ setTitle }: Props) {
  useEffect(() => {
    setTitle('Logowanie');
  }, []);

  return (
    <>
      <LoginForm />
    </>
  );
}

export default Login;
