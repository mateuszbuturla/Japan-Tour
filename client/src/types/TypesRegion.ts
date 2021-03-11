import TypesItemDescription from './TypesItemDescription';
import TypesOtherData from './TypesOtherData';

interface TypesRegion {
  _id: string;
  name: string;
  url: string;
  key: string;
  description: string;
  img: string;
  shortDescription: string;
  otherData: TypesOtherData[];
}

export default TypesRegion;
