import { Action } from '../../types/actions';
import { CATEGORIES_STATE, SET_CATEGORIES } from '../types';

const initialstate: CATEGORIES_STATE = {
  data: [],
};

export default (
  state: CATEGORIES_STATE = initialstate,
  action: Action = { type: '', payload: {} },
): CATEGORIES_STATE => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
