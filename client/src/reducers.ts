import { combineReducers } from 'redux';
import categoriesReducer from './actions/categories';
import refsReducer from './actions/refs';
import titleReducer from './actions/title';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  refs: refsReducer,
  title: titleReducer,
});

export default rootReducer;
