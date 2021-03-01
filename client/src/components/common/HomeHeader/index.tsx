import Anime from 'assets/anime.jpg';
import Sushi from 'assets/sushi.jpg';
import ToriGate from 'assets/toriGate.jpg';
import { HomeCategory } from 'components/common';
import React from 'react';
import { StyledCategoriesContainer, StyledHomeHeader, StyledMainHeader } from './StyledHomeHeader';

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
