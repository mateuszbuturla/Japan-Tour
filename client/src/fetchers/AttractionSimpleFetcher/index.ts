import Api from 'utils/Api';
import { LoadingOut, LoadingIn } from 'animations';

const AttractionSimpleFetcher = async (key: string) => {
  LoadingIn();
  try {
    const attraction = await Api.get(`/attractions/${key}`);
    LoadingOut();
    return attraction.data;
  } catch (e) {
    LoadingOut();
  }
};

export default AttractionSimpleFetcher;
