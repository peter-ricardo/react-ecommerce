/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import Rating from '../Rating';
import productsService from '../../services/products';

import './styles.scss';
import { IProduct, IProductSizes, ISeller } from '../../types/products';
import ProductSellerSelector from '../ProductSellerSelector';
import ProductSizeSelector from '../ProductSizeSelector';
import QuantitySelector from '../QuantitySelector';
import ShippingAvailability from '../ShippingAvailability';
import ShippingSelector from '../ShippingSelector';

function ProductDetail(): JSX.Element {
  const [productInfo, setProductInfo] = useState<IProduct | null>(null);
  const [sellerSelected, setSellerSelected] = useState<ISeller | undefined>();
  const [sizeSelected, setSizeSelected] = useState<IProductSizes | undefined>();
  const [quantitySelected, setQuantitySelected] = useState(1);

  const [gridTemplateAreasShippingBox, setGridTemplateAreasShippingBox] =
    useState('');

  const generateGridAreas = (priceItem: any): void => {
    // The current width of the viewport
    const width = window.innerWidth;
    // The width below which the mobile view should be rendered
    const breakpoint = 1024;

    const gridAreas = [];
    for (const shippingPrice of productInfo?.sellers || []) {
      if (width < breakpoint) {
        gridAreas.push(`"shippingPriceBox${shippingPrice.id}"`);
        if (shippingPrice.id === priceItem) {
          gridAreas.push(`"productContent"`);
        }
      } else {
        gridAreas.push(
          `"shippingPriceBox${shippingPrice.id} productContent productContent"`,
        );
      }
    }

    setGridTemplateAreasShippingBox(gridAreas.join(' '));
  };

  const fetchProductData = (): void => {
    const data = productsService.getProductBySlug(
      'daves-killer-bread-organic-21',
    );
    setProductInfo(data);
    setSellerSelected(data?.sellers?.[0]);
    setSizeSelected(data?.sellers?.[0]?.productSizes?.[0]);
  };

  const onSellerProductSelect = (seller: ISeller): void => {
    setSellerSelected(seller);
    setSizeSelected(seller?.productSizes?.[0]);
    setQuantitySelected(1);
    generateGridAreas(seller.id);
  };

  const onSizeProductSelect = (size: IProductSizes): void => {
    setSizeSelected(size);
  };

  const onQuantityChange = (quantity: number): void => {
    setQuantitySelected(quantity);
  };

  useEffect(() => {
    generateGridAreas(sellerSelected?.id);
  }, [sellerSelected]);

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="title">{productInfo?.name}</h1>
      <Rating reviews={productInfo?.reviews} rating={productInfo?.rating} />
      <div className="flex">
        <div className="w-[420px]">Gallery</div>
        <div className="w-full">
          <div
            id="productInfo"
            className="selectedPriceBox w-full"
            style={{ gridTemplateAreas: gridTemplateAreasShippingBox }}
          >
            <ProductSellerSelector
              sellers={productInfo?.sellers}
              sellerSelected={sellerSelected || null}
              onSelectSeller={(seller: ISeller) => {
                onSellerProductSelect(seller);
              }}
            />
            <div
              id="productContent"
              className="p-5 border border-grey-light -ml-1"
              style={{ gridArea: 'productContent' }}
            >
              <p className="description">
                Seller:{' '}
                <a
                  href={sellerSelected?.path}
                  className="text-blue-normal underline"
                >
                  {sellerSelected?.name}
                </a>
              </p>
              <Rating isSmall rating={sellerSelected?.rating} />
              <p className="description py-5">Brand: {sellerSelected?.brand}</p>
              <ProductSizeSelector
                sizes={sellerSelected?.productSizes || []}
                sizeSelected={sizeSelected || null}
                onSelectSize={onSizeProductSelect}
              />
              <div className="flex py-5">
                <QuantitySelector
                  value={quantitySelected}
                  onQuantityChange={onQuantityChange}
                />
                <div className="ml-10">
                  <ShippingAvailability />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full mt-5">
            <div>
              <button type="button" className="btn-blue-normal">
                <p className="text-white">See more sellers</p>
              </button>
            </div>
            <div className="flex flex-1 justify-end">
              <button type="button" className="btn-blue-normal">
                <p className="text-white">Add to Cart</p>
              </button>
              <button type="button" className="btn-blue-dark">
                <p className="text-white">BUY Now</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-5">
        <div className="flex-1 pr-28">
          <p className="subtitle">Description</p>
          <p className="description text-left">{productInfo?.description}</p>
        </div>
        <div className="flex-1">
          <ShippingSelector />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
