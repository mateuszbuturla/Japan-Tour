import React from 'react';
import {
  StyledHomeHeader,
  StyledMainHeader,
  StyledCategoriesContainer,
} from './StyledHomeHeader';
import { HomeCategory } from '../';

import ToriGate from '../../../assets/toriGate.jpg';
import TokyoSkytree from '../../../assets/tokyoSkytree.jpg';
import TokyoSkytower from '../../../assets/tokyoSkytower.jpg';

import Anime from '../../../assets/anime.jpg';
import Obon from '../../../assets/obon.jpg';
import Tanabata from '../../../assets/tanabata.jpg';

import Sushi from '../../../assets/sushi.jpg';
import Ramen from '../../../assets/ramen.jpg';
import Onigiri from '../../../assets/onigiri.jpg';

import GreateWave from '../../../assets/kanagawaTheGreatWave.jpg';
import SawyearsLog from '../../../assets/sawyers-log-cutting-katsushika-hokusai.jpg';
import SojoHenjo from '../../../assets/sojoHenjoKatsushika.jpg';

import { PageTransitionEffect } from '../../../animations';

function HomeHeader() {
  return (
    <StyledHomeHeader>
      <StyledCategoriesContainer>
        <HomeCategory
          url="/architektura"
          header="Architektura"
          images={[ToriGate, TokyoSkytree, TokyoSkytower]}
        />
        <HomeCategory
          url="/kultura"
          header="Kultura"
          images={[Anime, Obon, Tanabata]}
        />
        <HomeCategory
          url="/jedzenie"
          header="Jedzenie"
          images={[Sushi, Ramen, Onigiri]}
        />
        <HomeCategory
          url="/sztuka-i-rozrywka"
          header="Sztuka i rozrywka"
          images={[GreateWave, SawyearsLog, SojoHenjo]}
        />
      </StyledCategoriesContainer>
      <StyledMainHeader>Japonia - Kraj kwitnącej wiśni</StyledMainHeader>
    </StyledHomeHeader>
  );
}

export default HomeHeader;
