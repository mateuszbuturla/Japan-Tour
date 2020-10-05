import types from './types';

const setPageTransitionEffectRef = (item: any) => {
  return {
    type: types.SET_ADMIN_DATA,
    item,
  };
};

export default {
  setPageTransitionEffectRef,
};
