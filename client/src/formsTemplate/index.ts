import AddAttractionForm from './AddAttractionForm';
import AddRegionForm from './AddRegionForm';
import AddCityForm from './AddCityForm';
import AddCategoryForm from './AddCategoryForm';
import AddCultureForm from './AddCultureForm';
import AddDishForm from './AddDishForm';
import UpdateRegionForm from './UpdateRegionForm';

const FormsTemplate = async () => {
  let forms: any[] = [AddRegionForm, AddCategoryForm, UpdateRegionForm];
  const attractionsForm = await AddAttractionForm();
  const cityForm = await AddCityForm();
  const cultureForm = await AddCultureForm();
  const dishForm = await AddDishForm();
  forms = [...forms, attractionsForm, cityForm, cultureForm, dishForm];
  return forms;
};

export default FormsTemplate;
