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

const setCategoriesData = (item: any) => {
  return {
    type: types.SET_ADMIN_CATEGOIES_DATA,
    item,
  };
};

const setPrefecturesData = (item: any) => {
  return {
    type: types.SET_ADMIN_PREFECTURES_DATA,
    item,
  };
};

const removedCityById = (item: any) => {
  return {
    type: types.REMOVE_ADMIN_CITY_DATA,
    item,
  };
};

const removedAttractionById = (item: any) => {
  return {
    type: types.REMOVE_ADMIN_ATTRACTIONS_DATA,
    item,
  };
};

const removeDishById = (item: any) => {
  return {
    type: types.REMOVE_ADMIN_DISH_DATA,
    item,
  };
};

const removeCultureById = (item: any) => {
  return {
    type: types.REMOVE_ADMIN_CULUTRE_DATA,
    item,
  };
};

const removeCategoryById = (item: any) => {
  return {
    type: types.REMOVE_ADMIN_CATEGORY_DATA,
    item,
  };
};

export default {
  setRegionsData,
  setCitiesData,
  setAttractionsData,
  setCulturesData,
  setDishesData,
  setCategoriesData,
  setPrefecturesData,
  removedCityById,
  removedAttractionById,
  removeDishById,
  removeCultureById,
  removeCategoryById,
};
