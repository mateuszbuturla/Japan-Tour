import types from './types';

const INITIAL_STATE = {
  regions: [],
  cities: [],
  attractions: [],
  cultures: [],
  dishes: [],
};

const adminReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case types.SET_ADMIN_REGIONS_DATA:
      return {
        ...state,
        regions: action.item,
      };
    case types.SET_ADMIN_CITIES_DATA:
      return {
        ...state,
        cities: action.item,
      };
    case types.SET_ADMIN_ATTRACTIONS_DATA:
      return {
        ...state,
        attractions: action.item,
      };
    case types.SET_ADMIN_CULTURES_DATA:
      return {
        ...state,
        cultures: action.item,
      };
    case types.SET_ADMIN_DISHES_DATA:
      return {
        ...state,
        dishes: action.item,
      };
    default:
      return state;
  }
};

export default adminReducer;
