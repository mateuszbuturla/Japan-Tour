import React from 'react';
import { StyledHomeHeader, StyledMainHeader, StyledCategoriesContainer } from './StyledHomeHeader';
import { HomeCategory } from 'components/common';

import ToriGate from 'assets/toriGate.jpg';

import Anime from 'assets/anime.jpg';

import Sushi from 'assets/sushi.jpg';

import GreateWave from 'assets/kanagawaTheGreatWave.jpg';

import { PageTransitionEffect } from 'animations';

function HomeHeader() {
  return (
    <StyledHomeHeader>
      <StyledCategoriesContainer>
        <HomeCategory url="/podroze" header="Podróże" img={ToriGate} />
        <HomeCategory url="/kultura" header="Kultura" img={Anime} />
        <HomeCategory url="/kuchnia" header="Kuchnia" img={Sushi} />
        {/* <HomeCategory
          url="/sztuka-i-rozrywka"
          header="Sztuka i rozrywka"
          img={GreateWave}
        /> */}
      </StyledCategoriesContainer>
      <StyledMainHeader>Japonia - Kraj kwitnącej wiśni</StyledMainHeader>
    </StyledHomeHeader>
  );
}

export default HomeHeader;
