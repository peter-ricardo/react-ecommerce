import React from 'react';
import starFull from '../../assets/icons/starFull.svg';
import starHalf from '../../assets/icons/starHalf.svg';
import starEmpty from '../../assets/icons/startEmpty.svg';

type IProps = {
  rating?: number;
  reviews?: number | null;
  isSmall?: boolean | null;
};
function Rating({
  rating = 0,
  reviews = null,
  isSmall = false,
}: IProps): JSX.Element {
  const starsToRender = [];
  for (let from = 0; from < Math.floor(rating); from += 1) {
    starsToRender.push(
      <img src={starFull} alt="" className={isSmall ? 'w-5' : 'w-auto'} />,
    );
  }

  if (rating % 1 !== 0) {
    starsToRender.push(
      <img src={starHalf} alt="" className={isSmall ? 'w-5' : 'w-auto'} />,
    );
  }

  for (let from = starsToRender.length; from < 5; from += 1) {
    starsToRender.push(
      <img src={starEmpty} alt="" className={isSmall ? 'w-5' : 'w-auto'} />,
    );
  }

  return (
    <div className="flex items-center">
      {starsToRender.map((star) => star)}
      {!isSmall && reviews && (
        <p className="description pt-2 ml-5">{`${reviews} ${
          reviews > 1 ? 'reviews' : 'review'
        }`}</p>
      )}
    </div>
  );
}

Rating.defaultProps = {
  rating: 0,
  reviews: null,
  isSmall: false,
};

export default Rating;
