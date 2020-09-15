import TypesItemDescription from './TypesItemDescription';
import TypesOtherData from './TypesOtherData';

interface TypesDish {
  name: string;
  type: string;
  img: string;
  url: string;
  shortDescription: string;
  description: TypesItemDescription[];
  otherData: TypesOtherData[];
}

export default TypesDish;