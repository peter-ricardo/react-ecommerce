import React from 'react';
import starFull from '../../assets/icons/starFull.svg';
import starHalf from '../../assets/icons/starHalf.svg';
import starEmpty from '../../assets/icons/startEmpty.svg';

type IProps = {
  // eslint-disable-next-line react/require-default-props
  small?: boolean;
};

function Rating({ small = false }: IProps): JSX.Element {
  return (
    <div className="flex items-center">
      <img src={starFull} alt="" className={small ? 'w-5' : 'w-auto'} />
      <img src={starFull} alt="" className={small ? 'w-5' : 'w-auto'} />
      <img src={starFull} alt="" className={small ? 'w-5' : 'w-auto'} />
      <img src={starHalf} alt="" className={small ? 'w-5' : 'w-auto'} />
      <img src={starEmpty} alt="" className={small ? 'w-5' : 'w-auto'} />
      {!small && <p className="description pt-2 ml-5">5 reviews</p>}
    </div>
  );
}

export default Rating;
