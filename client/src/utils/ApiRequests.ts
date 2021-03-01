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

const getSelecterRegionData = async (id: string) => {
  const res = await Api.get(`/regions/${id}`);
  return res;
};

const deleteElement = async (api: string, id: string) => {
  const res = await Api.delete(`/${api}/remove/${id}`);
  return res;
};

export { getCategories, getRegions, getCities, getSelecterRegionData, deleteElement };
