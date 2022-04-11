import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductDetail from '../../components/ProductDetail';

function Home(): JSX.Element {
  return (
    <div>
      <Header />
      <Breadcrumb />
      <ProductDetail />
      <Footer />
    </div>
  );
}

export default Home;
