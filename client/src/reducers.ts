import { combineReducers } from 'redux';
import categoriesReducer from './actions/categories';
import refsReducer from './actions/refs';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  refs: refsReducer,
});

export default rootReducer;
