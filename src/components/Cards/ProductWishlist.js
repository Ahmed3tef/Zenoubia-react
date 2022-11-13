import React, { useEffect } from 'react';
import { BsCartPlusFill } from 'react-icons/bs';

import bin from '../../assets/bin.svg';
import { useNavigate } from 'react-router-dom';
import { APIBase } from '../../store/reducers/api';

const ProductWishlist = ({ product, setId, setOverlay }) => {
  const navigate = useNavigate();

  return (
    <div className='card-wishlist'>
      <div className='card__details'>
        <div
          className='card__img'
          onClick={() => navigate(`/product/${product.id}`)}>
          <img src={`${APIBase}${product.mainImg}`} alt={product.name} />
        </div>
        <div className='card__info'>
          <div className='card__title'>{product.title}</div>
          <div className='card__info-main'>
            <div className='card__name'>{product.name}</div>

            <div className='card__size'>
              Traille:
              <span className='card__size-wrapper'>{product.size}</span>
            </div>
            <div className='card__color'>
              Couleur:
              <span className='card__color-wrapper'>{product.color}</span>
            </div>
          </div>
          <div className='card__prices'>
            <span className='card__price'>
              DA{' '}
              {product.discountPrice
                ? product.discountPrice
                : product.currentPrice}
            </span>
          </div>
        </div>
      </div>
      <div className='card__actions'>
        <div
          className='card__actions-remove'
          onClick={() => {
            setOverlay(true);
            setId(product.id);
          }}>
          <img src={bin} alt='' />
        </div>
        <div
          className='card__actions-add'
          // onClick={() => {
          //   addToWishlist(product.id)
          // }}
        >
          <BsCartPlusFill />
        </div>
      </div>
    </div>
  );
};

export default ProductWishlist;
