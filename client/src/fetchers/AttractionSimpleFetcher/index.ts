import Api from 'utils/Api';
import { LoadingOut, LoadingIn } from 'animations';

const AttractionSimpleFetcher = async (key: string, similaryAttractions?: boolean) => {
  LoadingIn();
  try {
    const attraction = await Api.get(
      `/attractions/${key}/${similaryAttractions ? 'true' : 'false'}`,
    );
    LoadingOut();
    return attraction.data;
  } catch (e) {
    LoadingOut();
  }
};

export default AttractionSimpleFetcher;
