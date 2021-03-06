/* eslint-disable class-methods-use-this */

import { IProduct } from '../types/products';
import productsJson from '../utils/json/products.json';

class ProductsDataService {
  getProductBySlug(slug: string): IProduct | null {
    const index = productsJson.findIndex((product) => product.slug === slug);
    return index < 0 ? null : productsJson[index];
  }

  getAllProducts(slug: string): IProduct[] {
    return productsJson.filter((product) => product.slug !== slug);
  }
}

export default new ProductsDataService();
