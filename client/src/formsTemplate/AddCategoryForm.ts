const AddCategoryForm = {
  fields: [
    {
      type: 'text',
      label: 'Nazwa',
      name: 'title',
      required: true,
    },
    {
      type: 'select',
      label: 'Sekcja',
      name: 'section',
      required: true,
      selectInputValues: ['attractions', 'cultures', 'dishes'],
    },
  ],
  description: true,
  otherData: true,
  api: '/categories/create',
  url: '/admin/add-category',
};

export default AddCategoryForm;
