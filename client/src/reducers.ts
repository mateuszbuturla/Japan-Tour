import { combineReducers } from 'redux';
import categoriesReducer from 'actions/categories';
import refsReducer from 'actions/refs';
import titleReducer from 'actions/title';
import adminReducer from 'actions/admin';
import userReducer from 'actions/user';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  refs: refsReducer,
  title: titleReducer,
  admin: adminReducer,
  user: userReducer,
});

export default rootReducer;
