import React from 'react';

import { ISeller } from '../../types/products';
import radioButton from '../../assets/icons/radioButton.svg';
import radioButtonSelected from '../../assets/icons/radioButtonSelected.svg';
import { formatMoney } from '../../utils/functions';

type IProps = {
  sellers: ISeller[] | undefined;
  sellerSelected: ISeller | null;
  onSelectSeller: (id: ISeller) => void;
};

function ProductSellerSelector({
  sellers = [],
  sellerSelected,
  onSelectSeller,
}: IProps): JSX.Element {
  return (
    <>
      {sellers.map((seller) => (
        <button
          id={`shippingPriceBox${seller.id}`}
          style={{ gridArea: `shippingPriceBox${seller.id}` }}
          key={seller.id}
          type="button"
          className={`flex py-5 px-4 border-grey-light z-10 rounded ${
            sellerSelected?.id === seller.id
              ? 'border-t lg:border lg:border-r-white lg:border-r-4 '
              : 'border-t lg:border-t-0'
          }`}
          onClick={() => {
            onSelectSeller(seller);
          }}
        >
          <div className="mr-3">
            <img
              src={
                sellerSelected?.id === seller.id
                  ? radioButtonSelected
                  : radioButton
              }
              alt=""
            />
          </div>
          <div>
            <p className="title">${formatMoney(seller.productPrice)}</p>
            <p className="description">
              {(seller.shippingFee || 0) > 0
                ? `Shipping cost: $${formatMoney(seller.shippingFee || 0)}`
                : 'Free Shipping'}
            </p>
          </div>
        </button>
      ))}
    </>
  );
}

export default ProductSellerSelector;
