import React from 'react';
import Header from '../../components/Header';

function Home(): JSX.Element {
  return (
    <>
      <Header />
      <div className="container mx-auto bg-grey-light">
        <div className="bg-blue-normal">React E-commerce</div>
      </div>
    </>
  );
}

export default Home;
