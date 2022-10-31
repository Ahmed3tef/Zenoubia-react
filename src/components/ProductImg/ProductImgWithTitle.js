import React from 'react';
import { useNavigate } from 'react-router-dom';
import './_productImg.scss';
const ProductImgWithTitle = ({ image, text, id }) => {
  const navigate = useNavigate();

  return (
    <div className='product-card' onClick={() => navigate(`/product/${id}`)}>
      <div className='product-img-small'>
        <img src={image} alt='ProductImage' />
      </div>
      <h3 className='product-title'>{text}</h3>
    </div>
  );
};

export default ProductImgWithTitle;
