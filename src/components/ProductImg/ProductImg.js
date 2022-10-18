import React from 'react';
import './_productImg.scss';
const ProductImg = ({ image }) => {
  return (
    <div className='product-img'>
      <img src={image} alt='ProductImage' />
    </div>
  );
};

export default ProductImg;
