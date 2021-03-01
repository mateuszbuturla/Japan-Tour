import adminReducer from 'actions/admin';
import categoriesReducer from 'actions/categories';
import titleReducer from 'actions/title';
import userReducer from 'actions/user';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  title: titleReducer,
  admin: adminReducer,
  user: userReducer,
});

export default rootReducer;
