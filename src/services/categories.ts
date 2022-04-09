/* eslint-disable class-methods-use-this */
import { ICategory } from '../types/categories';
import categoriesJson from '../utils/json/categories.json';

class CategoriesDataService {
  getAll(): ICategory[] {
    return categoriesJson;
  }
}

export default new CategoriesDataService();
