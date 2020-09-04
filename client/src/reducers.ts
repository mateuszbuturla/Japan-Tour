import { combineReducers } from 'redux';
import categoriesReducer from './actions/categories';

const rootReducer = combineReducers({
  categories: categoriesReducer,
});

export default rootReducer;
