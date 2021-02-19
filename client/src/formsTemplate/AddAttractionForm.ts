const AddAttractionForm = {
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
      selectInputValues: [],
    },
  ],
  description: true,
  otherData: true,
  api: '/attractions/create',
  url: '/admin/add-attraction',
};

export default AddAttractionForm;
