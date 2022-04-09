import { combineReducers } from 'redux';
import categoriesReducer from './categories';

const appReducer = combineReducers({
  categories: categoriesReducer,
});

export default appReducer;

export type RootState = ReturnType<typeof appReducer>;
