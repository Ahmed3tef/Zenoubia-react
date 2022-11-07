import React from 'react';
import { useNavigate } from 'react-router-dom';
import productImg from '../../assets/prod-1.webp';
import { APIBase } from '../../store/reducers/api';

const ProductRelated = ({ product }) => {
  const navigate = useNavigate();
  const {
    id,
    name,
    mainImg,
    alt,
    inStock,
    currentPrice,
    discountPrice,
    percent,
  } = product;

  return (
    <div className='card-related'>
      <div className='card__img' onClick={() => navigate(`/product/${id}`)}>
        {percent && <div className='card__badge'>{`- ${percent}%`}</div>}
        <img src={`${APIBase}${mainImg}`} alt={alt} />
      </div>
      <div className='card__title'>{name}</div>

      <div className='card__price'>
        {discountPrice && (
          <span className='card__price'>{`DA ${discountPrice}`}</span>
        )}
        {!discountPrice && (
          <span className='card__price'>{`DA ${currentPrice}`}</span>
        )}
      </div>
    </div>
  );
};

export default ProductRelated;
