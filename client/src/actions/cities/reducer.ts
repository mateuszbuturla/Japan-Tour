import hokkaido from '../../assets/regions/hokkaido.jpg';

const INITIAL_STATE = [
  {
    name: 'Furano',
    url: '/furano',
    img: [hokkaido],
    region: 'hokkaido',
    bestAttractions: [
      {
        name: 'attraction1',
      },
      {
        name: 'attraction2',
      },
      {
        name: 'attraction3',
      },
    ],
  },
  {
    name: 'Sapporo',
    url: '/sapporo',
    img: [hokkaido],
    region: 'hokkaido',
    bestAttractions: [
      {
        name: 'attraction1',
      },
      {
        name: 'attraction2',
      },
      {
        name: 'attraction3',
      },
    ],
  },
  {
    name: 'Sendai',
    url: '/sendai',
    img: [hokkaido],
    region: 'tohoku',
    bestAttractions: [
      {
        name: 'attraction1',
      },
      {
        name: 'attraction2',
      },
      {
        name: 'attraction3',
      },
    ],
  },
  {
    name: 'Tokyo',
    url: '/tokyo',
    img: [hokkaido],
    region: 'Kanto',
    bestAttractions: [
      {
        name: 'attraction1',
      },
      {
        name: 'attraction2',
      },
      {
        name: 'attraction3',
      },
    ],
  },
  {
    name: 'Takayama',
    url: '/takayama',
    img: [hokkaido],
    region: 'Chubu',
    bestAttractions: [
      {
        name: 'attraction1',
      },
      {
        name: 'attraction2',
      },
      {
        name: 'attraction3',
      },
    ],
  },
  {
    name: 'Nagoya',
    url: '/nagoya',
    img: [hokkaido],
    region: 'Chubu',
    bestAttractions: [
      {
        name: 'attraction1',
      },
      {
        name: 'attraction2',
      },
      {
        name: 'attraction3',
      },
    ],
  },
  {
    name: 'Kyoto',
    url: '/kyoto',
    img: [hokkaido],
    region: 'Kansai',
    bestAttractions: [
      {
        name: 'attraction1',
      },
      {
        name: 'attraction2',
      },
      {
        name: 'attraction3',
      },
    ],
  },
  {
    name: 'Osaka',
    url: '/osaka',
    img: [hokkaido],
    region: 'Kansai',
    bestAttractions: [
      {
        name: 'attraction1',
      },
      {
        name: 'attraction2',
      },
      {
        name: 'attraction3',
      },
    ],
  },
  {
    name: 'Nara',
    url: '/nara',
    img: [hokkaido],
    region: 'Kansai',
    bestAttractions: [
      {
        name: 'attraction1',
      },
      {
        name: 'attraction2',
      },
      {
        name: 'attraction3',
      },
    ],
  },
  {
    name: 'Hiroshima',
    url: '/hiroshima',
    img: [hokkaido],
    region: 'Chugoku',
    bestAttractions: [
      {
        name: 'attraction1',
      },
      {
        name: 'attraction2',
      },
      {
        name: 'attraction3',
      },
    ],
  },
  {
    name: 'Nagasaki',
    url: '/nagasaki',
    img: [hokkaido],
    region: 'Kyushu',
    bestAttractions: [
      {
        name: 'attraction1',
      },
      {
        name: 'attraction2',
      },
      {
        name: 'attraction3',
      },
    ],
  },
];

const citiesReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default citiesReducer;
