import React, { Children } from 'react';
import shippingBox from '../../assets/icons/shippingBox.svg';
import shippingExpedited from '../../assets/icons/shippingExpedited.svg';
import shippingFree from '../../assets/icons/shippingFree.svg';

function ShippingSelector(): JSX.Element {
  const shippingsInfo = [
    {
      icon: shippingExpedited,
      description: '15th - 17th September (Expedited shipping)',
    },
    {
      icon: shippingFree,
      description: '20th - 21st September (Standard shipping)',
    },
    {
      icon: shippingBox,
      description: 'Secured Packing',
    },
  ];

  return (
    <div>
      {Children.toArray(
        shippingsInfo.map((shippingInfo) => (
          <div className="flex pt-9 items-center">
            <div className="mr-4 w-10">
              <img src={shippingInfo.icon} alt="" />
            </div>
            <p className="description">{shippingInfo.description}</p>
          </div>
        )),
      )}
    </div>
  );
}

export default ShippingSelector;
