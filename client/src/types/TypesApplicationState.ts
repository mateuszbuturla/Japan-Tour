import TypesCategory from './TypesCategory';

interface TypesApplicationState {
  categories: TypesCategory[];
  refs: any;
  title: {
    title: string;
  };
  admin: any;
  user: any;
}

export default TypesApplicationState;
