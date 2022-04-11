import React from 'react';
import itemDecrease from '../../assets/icons/itemDecrease.svg';
import itemIncrease from '../../assets/icons/itemIncrease.svg';

type IProps = {
  value: number;
  onQuantityChange: (quantity: number) => void;
};

function QuantitySelector({ value, onQuantityChange }: IProps): JSX.Element {
  const decreaseProductQuantity = (): void => {
    if (value === 1) {
      return;
    }
    onQuantityChange(value - 1);
  };

  const increaseProductQuantity = (): void => {
    onQuantityChange(value + 1);
  };

  return (
    <div>
      <p className="description">Quantity</p>
      <div className="flex rounded w-[98px] p-2 py-[5px] border-2 border-grey-border-normal justify-around">
        <button type="button" onClick={decreaseProductQuantity}>
          <img src={itemDecrease} alt="" />
        </button>
        <input
          className="w-10 text-center text-grey-normal"
          value={value}
          onChange={(event: any) => {
            const newQuantity = event.target.value.replace(/\D/g, '');
            onQuantityChange(+newQuantity);
          }}
          pattern="[0-9]+"
        />
        <button type="button" onClick={increaseProductQuantity}>
          <img src={itemIncrease} alt="" />
        </button>
      </div>
    </div>
  );
}

export default QuantitySelector;
