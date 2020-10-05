import types from './types';

const INITIAL_STATE = {
  data: null,
};

const adminReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case types.SET_ADMIN_DATA:
      return {
        ...state,
        data: action.item,
      };
    default:
      return state;
  }
};

export default adminReducer;
