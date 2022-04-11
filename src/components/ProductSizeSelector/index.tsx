import React from 'react';
import { IProductSizes } from '../../types/products';

type IProps = {
  sizes: IProductSizes[];
  sizeSelected: IProductSizes | null;
  onSelectSize: (size: IProductSizes) => void;
};

function ProductSizeSelector({
  sizes,
  sizeSelected,
  onSelectSize,
}: IProps): JSX.Element {
  return (
    <>
      <p className="description">Available in</p>
      <div className="flex">
        {sizes.map((size) => {
          const isSelected = sizeSelected?.id === size.id;
          return (
            <button
              key={size.id}
              type="button"
              className={`px-4 py-2 rounded mr-6 ${
                isSelected
                  ? 'bg-blue-normal'
                  : 'border border-grey-border-light'
              }`}
              onClick={() => {
                onSelectSize(size);
              }}
            >
              <p className={isSelected ? 'text-white' : 'text-smoke'}>
                {size.name}
              </p>
            </button>
          );
        })}
      </div>
    </>
  );
}

export default ProductSizeSelector;
