import { combineReducers } from 'redux';
import categoriesReducer from './actions/categories';
import refsReducer from './actions/refs';
import regionsRegucer from './actions/regions';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  refs: refsReducer,
  regions: regionsRegucer,
});

export default rootReducer;
