import Api from 'utils/Api';
import { LoadingOut, LoadingIn } from 'animations';

const CulturesCategoriesFetcher = async () => {
  LoadingIn();
  try {
    const cultures = await Api.get('/cultures');
    const categories = await Api.get('/categories/cultures');
    LoadingOut();
    return {
      cultures: cultures.data,
      categories: categories.data,
    };
  } catch (e) {
    LoadingOut();
  }
};

export default CulturesCategoriesFetcher;
