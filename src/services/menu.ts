/* eslint-disable class-methods-use-this */
import { IMenu } from '../types/menu';
import footerJson from '../utils/json/menu.json';

class MenuDataService {
  getFooterLinks(): IMenu[] {
    return footerJson;
  }
}

export default new MenuDataService();
