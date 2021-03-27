import types from './types';

const setLoadingRef = (item: any) => {
  return {
    type: types.SET_LOADING_REF,
    item,
  };
};

export default {
  setLoadingRef,
};
