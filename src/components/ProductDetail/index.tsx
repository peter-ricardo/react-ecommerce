import React, { useEffect, useState } from 'react';
import Rating from '../Rating';
import radioButton from '../../assets/icons/radioButton.svg';
import radioButtonSelected from '../../assets/icons/radioButtonSelected.svg';

import './styles.scss';

function ProductDetail(): JSX.Element {
  const [priceSelected, setPriceSelected] = useState('1');
  const priceList = [
    {
      id: '1',
      price: 5.99,
      shippingFee: 5,
    },
    {
      id: '2',
      price: 3.89,
      shippingFee: 8,
    },
    {
      id: '3',
      price: 7.29,
      shippingFee: 0,
    },
    // {
    //   id: '4',
    //   price: 6.99,
    //   shippingFee: 4.78,
    // },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="title">{`Dave's Killer Bread® Organic 21 Whole Grain Bread`}</h1>
      <Rating />
      <div className="flex">
        <div className="w-[420px]">Gallery</div>
        <div id="productInfo" className={`selectedPriceBox${priceSelected}`}>
          {priceList.map((priceItem, index) => (
            <button
              id={`shippingPriceBox${index + 1}`}
              key={priceItem.id}
              type="button"
              className={`flex py-5 px-4 ${
                priceSelected === priceItem.id &&
                'border border-grey-light  rounded'
              }`}
              onClick={() => {
                setPriceSelected(priceItem.id);
              }}
            >
              <div className="mr-3">
                <img
                  src={
                    priceSelected === priceItem.id
                      ? radioButtonSelected
                      : radioButton
                  }
                  alt=""
                />
              </div>
              <div>
                <p className="title">${priceItem.price}</p>
                <p className="description">
                  {priceItem.shippingFee > 0
                    ? `Shipping cost: $${priceItem.shippingFee}`
                    : 'Free Shipping'}
                </p>
              </div>
            </button>
          ))}
          <div id="productContent" className="p-5 border border-grey-light">
            <p className="description">Seller</p>
            <Rating small />
            <p className="description">Brand: Pampa</p>
            <p className="description">Available in</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
