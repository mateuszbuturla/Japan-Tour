import Api from 'utils/Api';
import { LoadingOut, LoadingIn } from 'animations';

const SimpleCityFetcher = async (key: string, attractions?: boolean) => {
  LoadingIn();
  try {
    const cities = await Api.get(`/cities/${key}/${attractions ? 'true' : 'false'}`);
    LoadingOut();
    return cities.data;
  } catch (e) {
    LoadingOut();
  }
};

export default SimpleCityFetcher;
