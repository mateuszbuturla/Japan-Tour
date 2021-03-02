import adminReducer from 'actions/admin';
import categoriesReducer from 'actions/categories';
import titleReducer from 'actions/title';
import userReducer from 'actions/user';
import refReducer from 'actions/ref';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  title: titleReducer,
  admin: adminReducer,
  user: userReducer,
  refs: refReducer,
});

export default rootReducer;
