import Api from 'utils/Api';
import { LoadingOut, LoadingIn } from 'animations';

const RegionsCitiesFetcher = async () => {
  LoadingIn();
  try {
    const regions = await Api.get('/regions');
    const cities = await Api.get('/cities');
    LoadingOut();
    return {
      cities: cities.data,
      regions: regions.data,
    };
  } catch (e) {
    LoadingOut();
  }
};

export default RegionsCitiesFetcher;
