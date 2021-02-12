import TypesItemDescription from './TypesItemDescription';
import TypesOtherData from './TypesOtherData';

interface TypesDish {
  _id: string;
  name: string;
  category: string;
  img: string;
  key: string;
  shortDescription: string;
  description: TypesItemDescription[];
  otherData: TypesOtherData[];
}

export default TypesDish;
