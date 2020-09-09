import TypesItemDescription from './TypesItemDescription';
import TypesOtherData from './TypesOtherData';

interface TypesAttraction {
  name: string;
  url: string;
  key: string;
  shortDescription: string;
  description: TypesItemDescription[];
  region: string;
  city: string;
  type: string;
  img: string;
  bestAttractions: boolean;
  otherData: TypesOtherData[];
}

export default TypesAttraction;
