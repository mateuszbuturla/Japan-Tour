import { getRegions } from 'utils/ApiRequests';

const AddCityForm = async () => {
  const regions = await getRegions();
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
        label: 'Region',
        name: 'region',
        required: true,
        selectInputValues: regions.data,
      },
    ],
    description: true,
    otherData: true,
    api: '/cities/create',
    url: '/admin/add-city',
    dataFromApi: {
      regions: regions.data,
    },
  };
};

export default AddCityForm;
