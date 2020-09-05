import hokkaido from '../../assets/regions/hokkaido.jpg';
import tohoko from '../../assets/regions/tohoko.jpg';
import kanto from '../../assets/regions/kanto.jpg';
import chubu from '../../assets/regions/chubu.jpg';
import kansai from '../../assets/regions/kansai.jpg';
import chugoku from '../../assets/regions/chugoku.jpg';
import shikoku from '../../assets/regions/shikoku.jpg';
import kyushu from '../../assets/regions/kyushu.jpg';
import okinawa from '../../assets/regions/okinawa.jpg';

const INITIAL_STATE = [
  {
    name: 'Hokkaido',
    url: '/hokkaido',
    key: 'hokkaido',
    img: [hokkaido],
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
    name: 'Tōhoku',
    url: '/tohoku',
    key: 'tohoku',
    img: [tohoko],
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
    name: 'Kantō',
    url: '/kanto',
    key: 'kanto',
    img: [kanto],
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
    name: 'Chubu',
    url: '/chubu',
    key: 'chubu',
    img: [chubu],
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
    name: 'Kansai',
    url: '/kansai',
    key: 'kansai',
    img: [kansai],
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
    name: 'Chūgoku',
    url: '/chugoku',
    key: 'chugoku',
    img: [chugoku],
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
    name: 'Shikoku',
    url: '/shikoku',
    key: 'shikoku',
    img: [shikoku],
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
    name: 'Kyushu',
    url: '/kyushu',
    key: 'kyushu',
    img: [kyushu],
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
    name: 'Okinawa',
    url: '/okinawa',
    key: 'okinawa',
    img: [okinawa],
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

const regionsRegucer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default regionsRegucer;
