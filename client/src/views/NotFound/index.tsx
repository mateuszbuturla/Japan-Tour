import React from 'react';
import {
  StyledNotFoundImage,
  StyledNotFoundDescription,
} from './StyledNotFound';
import { PageHeader, StyledPageContainer } from '../../components/common';
import BG from '../../assets/mainBG.jpg';

function NotFound() {
  return (
    <>
      <PageHeader text="" images={[BG]} small />
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
