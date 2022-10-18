import React, { useState } from 'react';
import './_productCard.scss';
import productImg from '../../assets/prod-1.webp';
import { Ratings } from '..';
import { BsHeart, BsHeartFill, BsCartPlusFill } from 'react-icons/bs';
const ProductCardSm = props => {
  const sizes = ['M', 'L', 'XL'];
  const [isLiked, setIsLiked] = useState(false);
  const [largeCards, setLargeCards] = useState(false);

  return (
    <>
      <div className='toggle-card' onClick={() => setLargeCards(!largeCards)}>
        t
      </div>
      <div className={largeCards ? 'card-lg' : 'card-sm'}>
        <div className='card-sm__img'>
          <div className='card-sm__badge'>-44%</div>
          <img src={productImg} alt='product' />
        </div>
        <div className='card-sm__title'>Abaya d'été en satin crêpe brodé</div>
        <div className='card-sm__prices'>
          <span className='card-sm__price'>DA 3400</span>
          <Ratings />
        </div>
        <div className='card-sm__sizes'>
          {sizes.map((size, i) => (
            <span className='card-sm__size ' key={i}>
              {size}
            </span>
          ))}
        </div>
        <div className='card-sm__actions'>
          <div
            className='card-sm__actions-like'
            onClick={() => setIsLiked(!isLiked)}>
            {isLiked ? <BsHeartFill /> : <BsHeart />}
          </div>
          <div className='card-sm__actions-add'>
            <BsCartPlusFill />
            Ajouter au panier
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCardSm;
