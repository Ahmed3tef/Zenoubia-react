import React from 'react';
import { useNavigate } from 'react-router-dom';
import './_productImg.scss';
const ProductImg = ({ image, id }) => {
  const navigate = useNavigate();
  return (
    <div className='product-img' onClick={() => navigate(`/products/${id}`)}>
      <img src={image} alt='ProductImage' />
    </div>
  );
};

export default ProductImg;
