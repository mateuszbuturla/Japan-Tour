import AddAttractionForm from './AddAttractionForm';
import AddRegionForm from './AddRegionForm';

const FormsTemplate = async () => {
  let forms: any[] = [AddRegionForm];
  const attractionsForm = await AddAttractionForm();
  forms = [...forms, attractionsForm];
  return forms;
};

export default FormsTemplate;
