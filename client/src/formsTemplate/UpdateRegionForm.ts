import { getSelecterRegionData } from 'utils/ApiRequests';

const UpdateRegionForm = {
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
  ],
  description: true,
  otherData: true,
  api: '/regions/create',
  url: '/admin/regions/:id',
  getElementDefaultValueFunction: (id: string) => getSelecterRegionData(id),
};

export default UpdateRegionForm;
