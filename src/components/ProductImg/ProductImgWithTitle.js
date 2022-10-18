import React from 'react';
import './_productImg.scss';
const ProductImgWithTitle = ({ image, text }) => {
  return (
    <div className='product-card'>
      <div className='product-img-small'>
        <img src={image} alt='ProductImage' />
      </div>
      <h3 className='product-title'>{text}</h3>
    </div>
  );
};

export default ProductImgWithTitle;
