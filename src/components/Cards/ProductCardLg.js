import React, { useState } from 'react';
import './_productCard.scss';
import productImg from '../../assets/prod-1.webp';
import { Ratings } from '..';
import { BsHeart, BsHeartFill, BsCartPlusFill } from 'react-icons/bs';
const ProductCardLg = props => {
  const sizes = ['M', 'L', 'XL'];
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className='card-lg'>
      <div className='card__info-wrapper'>
        <div className='card__img'>
          <div className='card__badge'>-44%</div>
          <img src={productImg} alt='product' />
        </div>
        <div className='card__info-text'>
          <div className='card__title'>Abaya d'été en satin crêpe brodé</div>
          <div className='card__prices'>
            <span className='card__price'>DA 3400</span>
            <Ratings />
          </div>
          <div className='card__info'>
            <div className='card__sizes'>
              {sizes.map((size, i) => (
                <span className='card__size ' key={i}>
                  {size}
                </span>
              ))}
            </div>
            <div className='card__color'>
              Couleur:
              <span
                className='card__color-wrapper'
                style={{ backgroundColor: 'red' }}></span>
            </div>
          </div>
        </div>
      </div>
      <div className='card__actions'>
        <div
          className='card__actions-like'
          onClick={() => setIsLiked(!isLiked)}>
          {isLiked ? <BsHeartFill /> : <BsHeart />}
        </div>
        <div className='card__actions-add'>
          <BsCartPlusFill />
          Ajouter au panier
        </div>
      </div>
    </div>
  );
};

export default ProductCardLg;
