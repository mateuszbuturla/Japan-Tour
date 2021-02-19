const AddRegionForm = {
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
  url: '/admin/add-region',
};

export default AddRegionForm;
