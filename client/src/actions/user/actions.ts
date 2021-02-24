import types from './types';

const setUser = (item: any) => {
  return {
    type: types.SET_USER,
    item,
  };
};

const removeUser = () => {
  return {
    type: types.REMOVE_USER,
  };
};

export default {
  setUser,
  removeUser,
};
