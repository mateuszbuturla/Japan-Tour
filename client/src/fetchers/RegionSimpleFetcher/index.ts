import Api from 'utils/Api';
import { LoadingOut, LoadingIn } from 'animations';

const RegionSimpleFetcher = async (key: string) => {
  LoadingIn();
  try {
    const region = await Api.get(`/regions/${key}`);
    LoadingOut();
    return region.data;
  } catch (e) {
    LoadingOut();
  }
};

export default RegionSimpleFetcher;
