import { getCategories, getRegions, getCities } from 'utils/ApiRequests';
import TypesElementCategory from 'types/TypesElementCategory';
import TypesRegion from 'types/TypesRegion';
import TypesCity from 'types/TypesCity';

const AddCultureForm = async () => {
  const categories = await getCategories('cultures');
  return {
    fields: [
      {
        type: 'text',
        label: 'Nazwa',
        name: 'name',
        required: true,
      },
      {
        type: 'file',
        label: 'Zdjęcie',
        name: 'img',
        required: true,
      },
      {
        type: 'text',
        label: 'Krótki opis',
        name: 'shortDescription',
        required: true,
      },
      {
        type: 'select',
        label: 'Kategoria',
        name: 'category',
        required: true,
        selectInputValues: categories.data.map((item: TypesElementCategory) => item.name),
      },
    ],
    description: true,
    otherData: true,
    api: '/cultures/create',
    url: '/admin/add-culture',
    dataFromApi: {
      categories: categories.data,
    },
  };
};

export default AddCultureForm;
