import TypesItemDescription from './TypesItemDescription';

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
}

export default TypesAttraction;
