import { getCategories } from 'utils/ApiRequests';
import TypesElementCategory from 'types/TypesElementCategory';

const AddDishForm = async () => {
  const categories = await getCategories('dishes');
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
    api: '/dishes/create',
    url: '/admin/add-dish',
    dataFromApi: {
      categories: categories.data,
    },
  };
};

export default AddDishForm;
