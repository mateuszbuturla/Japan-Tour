import types from './types';

const setTitle = (item: any) => {
  return {
    type: types.SET_TITLE,
    item,
  };
};

export default {
  setTitle,
};
