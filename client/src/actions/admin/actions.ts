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

const setKitchensData = (item: any) => {
  return {
    type: types.SET_ADMIN_KITCHENS_DATA,
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

const removeKitchenById = (item: any) => {
  return {
    type: types.REMOVE_ADMIN_KITCHEN_DATA,
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
  setKitchensData,
  setCategoriesData,
  setPrefecturesData,
  removedCityById,
  removedAttractionById,
  removeKitchenById,
  removeCultureById,
  removeCategoryById,
};
