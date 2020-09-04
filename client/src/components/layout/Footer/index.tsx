import React from 'react';
import {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterList,
  StyledFooterListElement,
  StyledFooterCopyright,
} from './StyledFooter';

function Footer() {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <StyledFooterList>
          <StyledFooterListElement header>Regiony</StyledFooterListElement>
          <StyledFooterListElement>Hokkaido</StyledFooterListElement>
          <StyledFooterListElement>Tohoku</StyledFooterListElement>
          <StyledFooterListElement>Kanto</StyledFooterListElement>
          <StyledFooterListElement>Chubu</StyledFooterListElement>
          <StyledFooterListElement>Kansai</StyledFooterListElement>
          <StyledFooterListElement>Chugoku</StyledFooterListElement>
          <StyledFooterListElement>Shikoku</StyledFooterListElement>
          <StyledFooterListElement>Kyushu</StyledFooterListElement>
          <StyledFooterListElement>Okinawa</StyledFooterListElement>
        </StyledFooterList>
        <StyledFooterList>
          <StyledFooterListElement header>
            Topowe lokacje
          </StyledFooterListElement>
          <StyledFooterListElement>Tokyo</StyledFooterListElement>
          <StyledFooterListElement>Kyoto</StyledFooterListElement>
          <StyledFooterListElement>Osaka</StyledFooterListElement>
          <StyledFooterListElement>Nara</StyledFooterListElement>
          <StyledFooterListElement>Góra Fuji</StyledFooterListElement>
          <StyledFooterListElement>Hiroshima</StyledFooterListElement>
          <StyledFooterListElement>Kamakura</StyledFooterListElement>
        </StyledFooterList>
        <StyledFooterList>
          <StyledFooterListElement header>Atrakcje</StyledFooterListElement>
          <StyledFooterListElement>Świątynie</StyledFooterListElement>
          <StyledFooterListElement>Shrines</StyledFooterListElement>
          <StyledFooterListElement>Onses</StyledFooterListElement>
          <StyledFooterListElement>Ogrody</StyledFooterListElement>
        </StyledFooterList>
      </StyledFooterContainer>
      <StyledFooterCopyright>
        Copyright © 2020-2020 Japan Tour Mateusz Buturla All Rights Reserved.
      </StyledFooterCopyright>
    </StyledFooter>
  );
}

export default Footer;
