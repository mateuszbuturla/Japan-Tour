import React, { useEffect } from 'react';
import {
  StyledContainer,
  StyledCode,
  StyledDescription,
  StyledDescription2,
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
      <StyledContainer>
        <StyledCode>404</StyledCode>
        <StyledDescription>Oppps! Podana strona nie została znaleziona.</StyledDescription>
        <StyledDescription2>
          Niestety taka strona nie istnieje. Sprawdź adres strony.
        </StyledDescription2>
      </StyledContainer>
    </>
  );
}

export default NotFound;
