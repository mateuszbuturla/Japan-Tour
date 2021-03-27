import Api from 'utils/Api';
import { LoadingOut, LoadingIn } from 'animations';

const CityAtractionsFetcher = async (key: string) => {
  LoadingIn();
  try {
    const city = await Api.get(`/cities/${key}`);
    const attractions = await Api.get(`/attractions/highlightedFromCity/${key}`);
    LoadingOut();
    return {
      city: city.data,
      attractions: attractions.data,
    };
  } catch (e) {
    LoadingOut();
  }
};

export default CityAtractionsFetcher;
