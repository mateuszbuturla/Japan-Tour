import React, { useEffect } from 'react';
import {
  StyledNotFoundImage,
  StyledNotFoundDescription,
} from './StyledNotFound';
import { PageHeader, StyledPageContainer } from 'components/common';
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
      <PageHeader text="" img={BG} small />
      <StyledPageContainer>
        <StyledNotFoundImage />
        <StyledNotFoundDescription>
          Podana strona nie istnieje
        </StyledNotFoundDescription>
      </StyledPageContainer>
    </>
  );
}

export default NotFound;
