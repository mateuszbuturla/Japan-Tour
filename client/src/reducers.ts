import { combineReducers } from 'redux';
import categoriesReducer from './actions/categories';
import refsReducer from './actions/refs';
import regionsRegucer from './actions/regions';
import attractionsReducer from './actions/attractions';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  refs: refsReducer,
  regions: regionsRegucer,
  attractions: attractionsReducer,
});

export default rootReducer;
