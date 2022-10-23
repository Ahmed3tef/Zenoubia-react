import React from 'react';
import { Reviews } from '../components';

const Product = () => {
  return (
    <>
      <div className='product__container'>
        <div className='product__preview'></div>
      </div>
      <Reviews />
    </>
  );
};

export default Product;
