import TypesItemDescription from './TypesItemDescription';
import TypesOtherData from './TypesOtherData';

interface TypesDish {
  _id: string;
  name: string;
  category: string;
  img: string;
  key: string;
  shortDescription: string;
  description: string;
  otherData: TypesOtherData[];
}

export default TypesDish;
