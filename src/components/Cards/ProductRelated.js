import React from 'react';
import productImg from '../../assets/prod-1.webp';

const ProductRelated = props => {
  return (
    <div className='card-related'>
      <div className='card__img'>
        <div className='card__badge'>-44%</div>
        <img src={productImg} alt='product' />
      </div>
      <div className='card__title'>Abaya d</div>

      <div className='card__price'>DA 3400</div>
    </div>
  );
};

export default ProductRelated;
