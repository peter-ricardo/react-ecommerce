/* eslint-disable no-restricted-syntax */
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import Rating from '../Rating';
import productsService from '../../services/products';

import './styles.scss';
import { IProduct, IProductSizes, ISeller } from '../../types/products';
import ProductSellerSelector from '../ProductSellerSelector';
import ProductSizeSelector from '../ProductSizeSelector';
import QuantitySelector from '../QuantitySelector';
import ShippingAvailability from '../ShippingAvailability';
import ShippingSelector from '../ShippingSelector';
import ImageCarousel from '../ImageCarousel';
import ProductsCarousel from '../ProductsCarousel';

function ProductDetail(): JSX.Element {
  const [productInfo, setProductInfo] = useState<IProduct | null>(null);
  const [sellerSelected, setSellerSelected] = useState<ISeller | undefined>();
  const [sizeSelected, setSizeSelected] = useState<IProductSizes | undefined>();
  const [quantitySelected, setQuantitySelected] = useState(1);
  const [productsRelated, setProductsRelated] = useState<IProduct[]>([]);

  const [gridTemplateAreasShippingBox, setGridTemplateAreasShippingBox] =
    useState('');

  const generateGridAreas = (priceItem: string | undefined): void => {
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

  const fetchProductsRelated = (): void => {
    const data = productsService.getAllProducts(
      'daves-killer-bread-organic-21',
    );
    setProductsRelated(data);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sellerSelected]);

  useEffect(() => {
    fetchProductData();
    fetchProductsRelated();
  }, []);

  useLayoutEffect(() => {
    function updateSize(): void {
      generateGridAreas(sellerSelected?.id);
    }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sellerSelected]);

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>{productInfo?.name || 'Product Detail'}</title>
      </Helmet>
      <h1 className="title pb-2 lg:pb-0">{productInfo?.name}</h1>
      <Rating reviews={productInfo?.reviews} rating={productInfo?.rating} />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full py-8 lg:py-0 lg:w-5/12 lg:mr-14 flex rounded justify-center items-center ">
          <div className="w-full lg:w-[266px] h-[266px]">
            <ImageCarousel images={productInfo?.images || []} />
          </div>
        </div>
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
              className="lg:border border-grey-light -ml-1 pb-14 lg:pb-0"
              style={{ gridArea: 'productContent' }}
            >
              <div className="p-5">
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
                <p className="description py-5">
                  Brand: {sellerSelected?.brand}
                </p>
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
              <button
                type="button"
                className="btn-blue-normal block lg:hidden w-full"
              >
                <p className="text-white">Request for Quote</p>
              </button>
            </div>
          </div>
          <div className="flex w-full mt-5 justify-center">
            <div>
              <button type="button" className="btn-blue-normal">
                <p className="text-white">See more sellers</p>
              </button>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
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
      <div className="flex flex-col-reverse lg:flex-row mt-14">
        <div className="flex-1 mt-14 lg:mt-0 lg:pr-28">
          <p className="subtitle">Description</p>
          <p className="description text-left">{productInfo?.description}</p>
        </div>
        <div className="flex-1 pt-5 lg:pt-0">
          <ShippingSelector />
        </div>
      </div>
      <div className="my-12">
        <p className="subtitle">Related Products</p>
        <ProductsCarousel products={productsRelated} />
      </div>
    </div>
  );
}

export default ProductDetail;
