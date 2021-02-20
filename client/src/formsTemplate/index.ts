import AddAttractionForm from './AddAttractionForm';
import AddRegionForm from './AddRegionForm';

const FormsTemplate = async () => {
  let forms = [AddRegionForm];
  const attractionsForm = await AddAttractionForm();
  forms = [...forms, attractionsForm];
  return forms;
};

export default FormsTemplate;
