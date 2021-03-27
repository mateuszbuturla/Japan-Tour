import TypesOtherData from './TypesOtherData';

interface TypesPrefecture {
  _id: string;
  name: string;
  url: string;
  key: string;
  description: string;
  region: string;
  img: string;
  shortDescription: string;
  otherData: TypesOtherData[];
}

export default TypesPrefecture;
