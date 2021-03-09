import Api from 'utils/Api';
import { LoadingOut, LoadingIn } from 'animations';

const PrefectureSimpleFetcher = async (key: string, cities?: boolean, attractions?: boolean) => {
  LoadingIn();
  try {
    const region = await Api.get(
      `/prefectures/${key}/${cities ? 'true' : 'false'}/${attractions ? 'true' : 'false'}`,
    );
    LoadingOut();
    return region.data;
  } catch (e) {
    LoadingOut();
  }
};

export default PrefectureSimpleFetcher;
