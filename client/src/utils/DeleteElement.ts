import Api from 'utils/Api';

const DeleteElement = async (api: string, id: string) => {
  const res = await Api.delete(`/${api}/remove/${id}`);
  return res;
};

export default DeleteElement;
