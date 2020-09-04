import types from './types';

const INITIAL_STATE = {
  pageTransitionEffectRef: null,
};

const refsReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case types.SET_PAGE_TRANSITION_EFFECT_REF:
      return {
        ...state,
        pageTransitionEffectRef: action.item,
      };
    default:
      return state;
  }
};

export default refsReducer;
