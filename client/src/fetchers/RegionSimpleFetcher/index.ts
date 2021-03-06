import Api from 'utils/Api';
import { LoadingOut, LoadingIn } from 'animations';

const RegionSimpleFetcher = async (key: string, cities?: boolean, attractions?: boolean) => {
  LoadingIn();
  try {
    const region = await Api.get(
      `/regions/${key}/${cities ? 'true' : 'false'}/${attractions ? 'true' : 'false'}`,
    );
    LoadingOut();
    return region.data;
  } catch (e) {
    LoadingOut();
  }
};

export default RegionSimpleFetcher;
