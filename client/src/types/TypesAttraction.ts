import TypesItemDescription from './TypesItemDescription';
import TypesOtherData from './TypesOtherData';

interface TypesAttraction {
  _id: string;
  name: string;
  url: string;
  key: string;
  shortDescription: string;
  description: string;
  region: string;
  city: string;
  category: string;
  img: string;
  highlighted: boolean;
  otherData: TypesOtherData[];
}

export default TypesAttraction;
