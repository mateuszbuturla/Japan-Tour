import Api from 'utils/Api';
import { LoadingOut, LoadingIn } from 'animations';

const AttractionsCategoriesFetcher = async () => {
  LoadingIn();
  try {
    const attractions = await Api.get('/attractions');
    const categories = await Api.get('/categories/attractions');
    LoadingOut();
    return {
      attractions: attractions.data,
      categories: categories.data,
    };
  } catch (e) {
    LoadingOut();
  }
};

export default AttractionsCategoriesFetcher;
