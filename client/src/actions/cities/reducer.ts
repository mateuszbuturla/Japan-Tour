import hokkaido from '../../assets/regions/hokkaido.jpg';

const INITIAL_STATE = [
  {
    name: 'Furano',
    url: '/furano',
    img: [hokkaido],
    region: 'hokkaido',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
