import Api from 'utils/Api';
import { LoadingOut, LoadingIn } from 'animations';

const RegionSimpleFetcher = async (
  key: string,
  prefectures?: boolean,
  cities?: boolean,
  attractions?: boolean,
) => {
  LoadingIn();
  try {
    const region = await Api.get(
      `/regions/${key}/${prefectures ? 'true' : 'false'}/${cities ? 'true' : 'false'}/${
        attractions ? 'true' : 'false'
      }`,
    );
    LoadingOut();
    return region.data;
  } catch (e) {
    LoadingOut();
    return 404;
  }
};

export default RegionSimpleFetcher;
