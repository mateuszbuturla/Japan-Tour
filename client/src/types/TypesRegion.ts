import TypesItemDescription from './TypesItemDescription';
import TypesOtherData from './TypesOtherData';

interface TypesRegion {
  name: string;
  url: string;
  key: string;
  description: TypesItemDescription[];
  img: string[];
  otherData: TypesOtherData[];
}

export default TypesRegion;
