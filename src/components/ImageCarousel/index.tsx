/* eslint-disable import/no-unresolved */
import React, { Children } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

type IProps = {
  images: string[];
};

const IMAGE_BASE_PATH = '/products/';

function ImageCarousel({ images = [] }: IProps): JSX.Element {
  if (images.length === 0) {
    return <div />;
  }

  return (
    <Swiper
      className="w-full h-full rounded"
      modules={[Pagination]}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      loop
      slidesPerView="auto"
    >
      {Children.toArray(
        images?.map((image) => {
          return (
            <SwiperSlide className="flex justify-center lg:block">
              <img
                src={`${IMAGE_BASE_PATH}/${image}`}
                alt=""
                className="object-cover"
              />
            </SwiperSlide>
          );
        }),
      )}
    </Swiper>
  );
}

export default ImageCarousel;
