import types from './types';

const INITIAL_STATE = {
  user: null,
};

const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.item,
      };
    case types.REMOVE_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
