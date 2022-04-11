export interface IProductSizes {
  id: string;
  name: string;
}

export interface ISeller {
  id: string;
  name: string;
  path: string;
  rating: number;
  brand: string;
  productSizes: IProductSizes[];
  productPrice: number;
  shippingFee?: number | null;
}

export interface IProduct {
  sku: string;
  name: string;
  slug: string;
  images: string[];
  reviews: number;
  rating: number;
  description: string;
  sellers: ISeller[];
}
