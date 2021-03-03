import Api from 'utils/Api';
import { LoadingOut, LoadingIn } from 'animations';

const CultureSimpleFetcher = async (key: string) => {
  LoadingIn();
  try {
    const culture = await Api.get(`/cultures/${key}`);
    LoadingOut();
    return culture.data;
  } catch (e) {
    LoadingOut();
  }
};

export default CultureSimpleFetcher;
