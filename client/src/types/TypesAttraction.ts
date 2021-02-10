import TypesItemDescription from './TypesItemDescription';
import TypesOtherData from './TypesOtherData';

interface TypesAttraction {
  _id: string;
  name: string;
  url: string;
  key: string;
  shortDescription: string;
  description: TypesItemDescription[];
  region: string;
  city: string;
  category: string;
  img: string;
  bestAttractions: boolean;
  otherData: TypesOtherData[];
}

export default TypesAttraction;
