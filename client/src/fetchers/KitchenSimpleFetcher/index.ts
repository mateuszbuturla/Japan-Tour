import Api from 'utils/Api';
import { LoadingOut, LoadingIn } from 'animations';

const KitchenSimpleFetcher = async (key: string) => {
  LoadingIn();
  try {
    const kitchen = await Api.get(`/dishes/${key}`);
    LoadingOut();
    return kitchen.data;
  } catch (e) {
    LoadingOut();
    return 404;
  }
};

export default KitchenSimpleFetcher;
