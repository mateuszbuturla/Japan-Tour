import Api from 'utils/Api';
import { LoadingOut, LoadingIn } from 'animations';

const RegionsPrefecturesFetcher = async () => {
  LoadingIn();
  try {
    const regions = await Api.get('/regions');
    const prefectures = await Api.get('/prefectures');
    LoadingOut();
    return {
      prefectures: prefectures.data,
      regions: regions.data,
    };
  } catch (e) {
    LoadingOut();
  }
};

export default RegionsPrefecturesFetcher;
