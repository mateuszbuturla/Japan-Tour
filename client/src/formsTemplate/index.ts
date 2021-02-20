import AddAttractionForm from './AddAttractionForm';
import AddRegionForm from './AddRegionForm';
import AddCityForm from './AddCityForm';
import AddCategoryForm from './AddCategoryForm';

const FormsTemplate = async () => {
  let forms: any[] = [AddRegionForm, AddCategoryForm];
  const attractionsForm = await AddAttractionForm();
  const cityForm = await AddCityForm();
  forms = [...forms, attractionsForm, cityForm];
  return forms;
};

export default FormsTemplate;
