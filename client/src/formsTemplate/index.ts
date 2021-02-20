import AddAttractionForm from './AddAttractionForm';
import AddRegionForm from './AddRegionForm';
import AddCityForm from './AddCityForm';

const FormsTemplate = async () => {
  let forms: any[] = [AddRegionForm];
  const attractionsForm = await AddAttractionForm();
  const cityForm = await AddCityForm();
  forms = [...forms, attractionsForm, cityForm];
  return forms;
};

export default FormsTemplate;
