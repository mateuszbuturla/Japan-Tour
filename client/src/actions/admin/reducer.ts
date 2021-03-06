import types from './types';

const INITIAL_STATE = {
  regions: [],
  cities: [],
  attractions: [],
  cultures: [],
  kitchens: [],
  categories: [],
  prefectures: [],
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
    case types.SET_ADMIN_KITCHENS_DATA:
      return {
        ...state,
        kitchens: action.item,
      };
    case types.SET_ADMIN_CATEGOIES_DATA:
      return {
        ...state,
        categories: action.item,
      };
    case types.SET_ADMIN_PREFECTURES_DATA:
      return {
        ...state,
        prefectures: action.item,
      };
    case types.REMOVE_ADMIN_CITY_DATA:
      return {
        ...state,
        cities: state.cities.filter((item: any) => item._id !== action.item),
      };
    case types.REMOVE_ADMIN_ATTRACTIONS_DATA:
      return {
        ...state,
        attractions: state.attractions.filter((item: any) => item._id !== action.item),
      };
    case types.REMOVE_ADMIN_CULUTRE_DATA:
      return {
        ...state,
        cultures: state.cultures.filter((item: any) => item._id !== action.item),
      };
    case types.REMOVE_ADMIN_KITCHEN_DATA:
      return {
        ...state,
        kitchens: state.kitchens.filter((item: any) => item._id !== action.item),
      };
    case types.REMOVE_ADMIN_CATEGORY_DATA:
      return {
        ...state,
        categories: state.categories.filter((item: any) => item._id !== action.item),
      };
    default:
      return state;
  }
};

export default adminReducer;
