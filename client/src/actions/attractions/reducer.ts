import hokkaido from '../../assets/regions/hokkaido.jpg';

const INITIAL_STATE = [
  {
    name: 'Ōdōri Park',
    url: '/odori-park',
    img: [hokkaido],
    shortDescription: 'Lorem Ipsum is simply dummy text',
    region: 'hokkaido',
    city: 'furano',
    bestAttractions: true,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    name: 'Ōdōri Park',
    url: '/odori-park',
    img: [hokkaido],
    shortDescription: 'Lorem Ipsum is simply dummy text',
    region: 'hokkaido',
    city: 'furano',
    bestAttractions: true,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    name: 'Ōdōri Park',
    url: '/odori-park',
    img: [hokkaido],
    shortDescription: 'Lorem Ipsum is simply dummy text',
    region: 'hokkaido',
    city: 'sapporo',
    bestAttractions: true,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    name: 'Ōdōri Park',
    url: '/odori-park',
    img: [hokkaido],
    shortDescription: 'Lorem Ipsum is simply dummy text',
    region: 'hokkaido',
    city: 'sapporo',
    bestAttractions: false,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    name: 'Ōdōri Park',
    url: '/odori-park',
    img: [hokkaido],
    shortDescription: 'Lorem Ipsum is simply dummy text',
    region: 'tohoku',
    city: 'sendai',
    bestAttractions: false,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    name: 'Ōdōri Park',
    url: '/odori-park',
    img: [hokkaido],
    shortDescription: 'Lorem Ipsum is simply dummy text',
    region: 'tohoku',
    city: 'sendai',
    bestAttractions: true,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    name: 'Ōdōri Park',
    url: '/odori-park',
    img: [hokkaido],
    shortDescription: 'Lorem Ipsum is simply dummy text',
    region: 'tohoku',
    city: 'sendai',
    bestAttractions: true,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    name: 'Ōdōri Park',
    url: '/odori-park',
    img: [hokkaido],
    shortDescription: 'Lorem Ipsum is simply dummy text',
    region: 'kanto',
    city: 'tokyo',
    bestAttractions: true,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    name: 'Ōdōri Park',
    url: '/odori-park',
    img: [hokkaido],
    shortDescription: 'Lorem Ipsum is simply dummy text',
    region: 'kanto',
    city: 'tokyo',
    bestAttractions: true,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    name: 'Ōdōri Park',
    url: '/odori-park',
    img: [hokkaido],
    shortDescription: 'Lorem Ipsum is simply dummy text',
    region: 'kanto',
    city: 'tokyo',
    bestAttractions: true,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    name: 'Ōdōri Park',
    url: '/odori-park',
    img: [hokkaido],
    shortDescription: 'Lorem Ipsum is simply dummy text',
    region: 'kanto',
    city: 'tokyo',
    bestAttractions: false,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    name: 'Ōdōri Park',
    url: '/odori-park',
    img: [hokkaido],
    shortDescription: 'Lorem Ipsum is simply dummy text',
    region: 'chubu',
    city: 'takayama',
    bestAttractions: false,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    name: 'Ōdōri Park',
    url: '/odori-park',
    img: [hokkaido],
    shortDescription: 'Lorem Ipsum is simply dummy text',
    region: 'chubu',
    city: 'nagoya',
    bestAttractions: false,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    name: 'Ōdōri Park',
    url: '/odori-park',
    img: [hokkaido],
    shortDescription: 'Lorem Ipsum is simply dummy text',
    region: 'chubu',
    city: 'nagoya',
    bestAttractions: false,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    name: 'Ōdōri Park',
    url: '/odori-park',
    img: [hokkaido],
    shortDescription: 'Lorem Ipsum is simply dummy text',
    region: 'kansai',
    city: 'nara',
    bestAttractions: false,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    name: 'Ōdōri Park',
    url: '/odori-park',
    img: [hokkaido],
    shortDescription: 'Lorem Ipsum is simply dummy text',
    region: 'kansai',
    city: 'nara',
    bestAttractions: false,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    name: 'Ōdōri Park',
    url: '/odori-park',
    img: [hokkaido],
    shortDescription: 'Lorem Ipsum is simply dummy text',
    region: 'kansai',
    city: 'nara',
    bestAttractions: false,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    name: 'Ōdōri Park',
    url: '/odori-park',
    img: [hokkaido],
    shortDescription: 'Lorem Ipsum is simply dummy text',
    region: 'chugoku',
    city: 'hiroshima',
    bestAttractions: false,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
];

const attractionsReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default attractionsReducer;
