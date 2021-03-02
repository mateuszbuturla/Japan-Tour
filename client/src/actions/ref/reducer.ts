import types from './types';

const INITIAL_STATE = {
  loading: null,
};

const refReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case types.SET_LOADING_REF:
      return {
        ...state,
        loading: action.item,
      };
    default:
      return state;
  }
};

export default refReducer;
