import types from './types';

const INITIAL_STATE = {
  title: 'Japan Tour',
};

const titleReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case types.SET_TITLE:
      return {
        ...state,
        title: `Moja Japonia | ${action.item}`,
      };
    default:
      return state;
  }
};

export default titleReducer;
