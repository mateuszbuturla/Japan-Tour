import { combineReducers } from 'redux';
import categoriesReducer from 'actions/categories';
import refsReducer from 'actions/refs';
import titleReducer from 'actions/title';
import adminReducer from 'actions/admin';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  refs: refsReducer,
  title: titleReducer,
  admin: adminReducer,
});

export default rootReducer;
