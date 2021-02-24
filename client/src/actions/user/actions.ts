import types from './types';

const setUser = (item: any) => {
  return {
    type: types.SET_USER,
    item,
  };
};

const removeUser = (item: any) => {
  return {
    type: types.REMOVE_USER,
    item,
  };
};

export default {
  setUser,
  removeUser,
};
