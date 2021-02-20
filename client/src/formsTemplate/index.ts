import AddAttractionForm from './AddAttractionForm';
import AddRegionForm from './AddRegionForm';
import AddCityForm from './AddCityForm';
import AddCategoryForm from './AddCategoryForm';
import AddCultureForm from './AddCultureForm';

const FormsTemplate = async () => {
  let forms: any[] = [AddRegionForm, AddCategoryForm];
  const attractionsForm = await AddAttractionForm();
  const cityForm = await AddCityForm();
  const cultureForm = await AddCultureForm();
  forms = [...forms, attractionsForm, cityForm, cultureForm];
  return forms;
};

export default FormsTemplate;
