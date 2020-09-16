import React, { useEffect } from 'react';
import {
  StyleContainer,
  StyledNotFoundImage,
  StyledNotFoundDescription,
} from './StyledNotFound';
import { PageHeader } from 'components/common';
import BG from 'assets/mainBG.jpg';

interface Props {
  setTitle: Function;
}

function NotFound({ setTitle }: Props) {
  useEffect(() => {
    setTitle('404');
  }, []);

  return (
    <>
      <PageHeader text="404" img={BG} small />
      <StyleContainer>
        <StyledNotFoundImage />
        <StyledNotFoundDescription>
          Podana strona nie istnieje
        </StyledNotFoundDescription>
      </StyleContainer>
    </>
  );
}

export default NotFound;
