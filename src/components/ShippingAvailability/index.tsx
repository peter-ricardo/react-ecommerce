import React, { useState } from 'react';

function ShippingAvailability(): JSX.Element {
  return (
    <div>
      <p className="description">Check availability</p>
      <div className="flex">
        <input
          className="w-[130px] border border-grey-normal rounded px-4 py-2 text-sm"
          placeholder="Enter zipcode"
        />
        <button type="button" className="btn-blue-normal">
          <p className="text-white">Check</p>
        </button>
      </div>
    </div>
  );
}

export default ShippingAvailability;
