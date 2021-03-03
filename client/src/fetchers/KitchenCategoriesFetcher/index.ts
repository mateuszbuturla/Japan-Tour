import Api from 'utils/Api';
import { LoadingOut, LoadingIn } from 'animations';

const KitchenCategoriesFetcher = async () => {
  LoadingIn();
  try {
    const kitchens = await Api.get('/dishes');
    const categories = await Api.get('/categories/dishes');
    LoadingOut();
    return {
      kitchens: kitchens.data,
      categories: categories.data,
    };
  } catch (e) {
    LoadingOut();
  }
};

export default KitchenCategoriesFetcher;
