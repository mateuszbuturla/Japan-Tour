import types from './types';

const setRegionsData = (item: any) => {
  return {
    type: types.SET_ADMIN_REGIONS_DATA,
    item,
  };
};

const setCitiesData = (item: any) => {
  return {
    type: types.SET_ADMIN_CITIES_DATA,
    item,
  };
};

const setAttractionsData = (item: any) => {
  return {
    type: types.SET_ADMIN_ATTRACTIONS_DATA,
    item,
  };
};

const setCulturesData = (item: any) => {
  return {
    type: types.SET_ADMIN_CULTURES_DATA,
    item,
  };
};

const setDishesData = (item: any) => {
  return {
    type: types.SET_ADMIN_DISHES_DATA,
    item,
  };
};

export default {
  setRegionsData,
  setCitiesData,
  setAttractionsData,
  setCulturesData,
  setDishesData,
};
