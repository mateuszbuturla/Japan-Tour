import TypesItemDescription from './TypesItemDescription';
import TypesOtherData from './TypesOtherData';

interface TypesCity {
  name: string;
  url: string;
  key: string;
  description: TypesItemDescription[];
  region: string;
  img: string[];
  otherData: TypesOtherData[];
}

export default TypesCity;
