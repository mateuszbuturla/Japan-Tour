import types from './types';

const setPageTransitionEffectRef = (item: any) => {
  return {
    type: types.SET_PAGE_TRANSITION_EFFECT_REF,
    item,
  };
};

export default {
  setPageTransitionEffectRef,
};
