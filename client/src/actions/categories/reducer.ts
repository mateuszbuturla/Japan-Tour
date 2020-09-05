import ToriGate from '../../assets/toriGate.jpg';
import TokyoSkytree from '../../assets/tokyoSkytree.jpg';
import TokyoSkytower from '../../assets/tokyoSkytower.jpg';

import Anime from '../../assets/anime.jpg';
import Obon from '../../assets/obon.jpg';
import Tanabata from '../../assets/tanabata.jpg';

import Sushi from '../../assets/sushi.jpg';
import Ramen from '../../assets/ramen.jpg';
import Onigiri from '../../assets/onigiri.jpg';

import GreateWave from '../../assets/kanagawaTheGreatWave.jpg';
import SawyearsLog from '../../assets/sawyers-log-cutting-katsushika-hokusai.jpg';
import SojoHenjo from '../../assets/sojoHenjoKatsushika.jpg';

const INITIAL_STATE = [
  {
    name: 'Podróże',
    url: 'podroze',
    images: [ToriGate, TokyoSkytree, TokyoSkytower],
  },
  {
    name: 'Kultura',
    url: 'kultura',
    images: [Anime, Obon, Tanabata],
  },
  {
    name: 'Kuchnia',
    url: 'kuchnia',
    images: [Sushi, Ramen, Onigiri],
  },
  {
    name: 'Sztuka i rozrywka',
    url: 'sztuka-i-rozrywka',
    images: [GreateWave, SawyearsLog, SojoHenjo],
  },
];

const categoriesReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categoriesReducer;
