import Api from 'utils/Api';

const getCategories = async (section: string) => {
  let res = await Api.get(`/categories/${section}`);
  return res;
};

const getRegions = async () => {
  let res = await Api.get(`/regions`);
  return res;
};

const getCities = async () => {
  let res = await Api.get(`/cities`);
  return res;
};

export { getCategories, getRegions, getCities };
