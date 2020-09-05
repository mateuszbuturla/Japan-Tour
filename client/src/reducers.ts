import { combineReducers } from 'redux';
import categoriesReducer from './actions/categories';
import refsReducer from './actions/refs';
import regionsRegucer from './actions/regions';
import attractionsReducer from './actions/attractions';
import citiesReducer from './actions/cities';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  refs: refsReducer,
  regions: regionsRegucer,
  attractions: attractionsReducer,
  cities: citiesReducer,
});

export default rootReducer;
