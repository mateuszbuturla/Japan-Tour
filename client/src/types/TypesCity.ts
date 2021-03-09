import TypesOtherData from './TypesOtherData';

interface TypesCity {
  _id: string;
  name: string;
  url: string;
  key: string;
  description: string;
  region: string;
  prefecture: string;
  img: string;
  otherData: TypesOtherData[];
}

export default TypesCity;
