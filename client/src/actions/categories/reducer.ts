import ToriGate from '../../assets/toriGate.jpg';

import Anime from '../../assets/anime.jpg';

import Sushi from '../../assets/sushi.jpg';

import GreateWave from '../../assets/kanagawaTheGreatWave.jpg';

const INITIAL_STATE = [
  {
    name: 'Podróże',
    url: 'podroze',
    img: ToriGate,
  },
  {
    name: 'Kultura',
    url: 'kultura',
    img: Anime,
  },
  {
    name: 'Kuchnia',
    url: 'kuchnia',
    img: Sushi,
  },
  {
    name: 'Sztuka i rozrywka',
    url: 'sztuka-i-rozrywka',
    img: GreateWave,
  },
];

const categoriesReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categoriesReducer;
