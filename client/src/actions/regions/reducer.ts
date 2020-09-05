const INITIAL_STATE = [
  {
    name: 'Hokkaido',
    url: '/hokkaido',
    key: 'hokkaido',
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
