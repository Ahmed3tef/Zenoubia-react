import React from 'react';
import { useNavigate } from 'react-router-dom';
import './_productImg.scss';
const ProductImg = ({ image }) => {
  const navigate = useNavigate();
  return (
    <div className='product-img' onClick={() => navigate(`/products`)}>
      <img src={image} alt='ProductImage' />
    </div>
  );
};

export default ProductImg;
