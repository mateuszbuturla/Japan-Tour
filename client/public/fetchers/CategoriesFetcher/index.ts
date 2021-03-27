import Api from 'utils/Api';

const CategoriesFetcher = async () => {
  try {
    const categories = await Api.get(`/categories`);
    return categories.data;
  } catch (e) {}
};

export default CategoriesFetcher;
