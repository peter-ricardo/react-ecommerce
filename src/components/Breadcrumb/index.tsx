import React from 'react';
import { Link } from 'react-router-dom';
import arrowLeft from '../../assets/icons/arrowLeft.svg';

function Breadcrumb(): JSX.Element {
  return (
    <div className="container mx-auto flex items-center mt-12 mb-8">
      <Link to="/#" className="breadcrumb">
        Home
      </Link>
      <img className="mx-4" src={arrowLeft} alt="" />
      <Link to="/#" className="breadcrumb">
        Bakery
      </Link>
      <img className="mx-4" src={arrowLeft} alt="" />
      <Link to="/#" className="breadcrumb">
        Organic Bread
      </Link>
    </div>
  );
}

export default Breadcrumb;
