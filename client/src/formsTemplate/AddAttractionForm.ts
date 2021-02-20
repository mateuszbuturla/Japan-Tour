import { getCategories, getRegions, getCities } from 'utils/ApiRequests';
import TypesElementCategory from 'types/TypesElementCategory';
import TypesRegion from 'types/TypesRegion';
import TypesCity from 'types/TypesCity';

const AddAttractionForm = async () => {
  const categories = await getCategories('attractions');
  const regions = await getRegions();
  const cities = await getCities();
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
        type: 'checkbox',
        label: 'Topowa atrakcja',
        name: 'bestAttractions',
      },
      {
        type: 'select',
        label: 'Kategoria',
        name: 'category',
        required: true,
        selectInputValues: categories.data.map((item: TypesElementCategory) => item.name),
      },
      {
        type: 'select',
        label: 'Region',
        name: 'region',
        required: true,
        selectInputValues: regions.data.map((item: TypesRegion) => item.name),
      },
      {
        type: 'select',
        label: 'Miasto',
        name: 'city',
        required: true,
        selectInputValues: cities.data.map((item: TypesCity) => item.name),
      },
    ],
    description: true,
    otherData: true,
    api: '/attractions/create',
    url: '/admin/add-attraction',
    dataFromApi: {
      categories: categories.data,
      regions: regions.data,
      cities: cities.data,
    },
  };
};

export default AddAttractionForm;
