import Api from 'utils/Api';
import { LoadingOut, LoadingIn } from 'animations';

const RegionsFetcher = async () => {
  LoadingIn();
  try {
    const regions = await Api.get('/regions');
    LoadingOut();
    return regions.data;
  } catch (e) {
    LoadingOut();
  }
};

export default RegionsFetcher;
