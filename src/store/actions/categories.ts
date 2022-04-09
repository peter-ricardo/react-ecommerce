import { Action } from '../../types/actions';
import { ICategory } from '../../types/categories';
import { SET_CATEGORIES } from '../types';

const setCategories = (payload: ICategory[]): Action => ({
  type: SET_CATEGORIES,
  payload,
});

export { setCategories };
