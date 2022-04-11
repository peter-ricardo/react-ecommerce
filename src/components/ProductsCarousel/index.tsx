/* eslint-disable import/no-unresolved */
import React, { Children, useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import carouselNavigationLeft from '../../assets/icons/carouselNavigationLeft.svg';
import carouselNavigationRight from '../../assets/icons/carouselNavigationRight.svg';
import { IProduct } from '../../types/products';
import { formatMoney } from '../../utils/functions';

type IProps = {
  products: IProduct[];
};

const IMAGE_BASE_PATH = '/products/';

function ProductsCarousel({ products = [] }: IProps): JSX.Element {
  const [swiperRef, setSwipe] = useState<any>();

  if (products.length === 0) {
    return <div />;
  }

  return (
    <div className="relative">
      <Swiper
        className="w-full h-full rounded"
        onBeforeInit={(swipper) => setSwipe(swipper)}
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={20}
        breakpoints={{
          440: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1240: {
            slidesPerView: 5,
          },
        }}
      >
        {Children.toArray(
          products.map((product) => (
            <SwiperSlide>
              <div className="flex cursor-pointer hover:border-blue-normal transition flex-col border border-grey-light rounded py-8 justify-center items-center">
                <img
                  src={`${IMAGE_BASE_PATH}${product?.images?.[0]}`}
                  alt=""
                  className="object-cover w-[162px] rounded mb-4"
                />
                <p className="description text-smoke">{product.name}</p>
                <p className="description pt-3 pb-2">{product.sku}</p>
                <p className="description text-smoke">
                  ${formatMoney(product?.sellers?.[0].productPrice)}
                </p>
              </div>
            </SwiperSlide>
          )),
        )}
      </Swiper>
      <div className="absolute top-2/4 w-full z-50">
        <button
          type="button"
          className="cursor-pointer -left-5 absolute"
          onClick={() => swiperRef?.slidePrev()}
        >
          <img src={carouselNavigationLeft} alt="" />
        </button>
        <button
          type="button"
          className="cursor-pointer absolute -right-5"
          onClick={() => swiperRef?.slideNext()}
        >
          <img src={carouselNavigationRight} alt="" />
        </button>
      </div>
    </div>
  );
}

export default ProductsCarousel;
