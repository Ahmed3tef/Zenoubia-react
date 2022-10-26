import React from 'react';
import { BsCartPlusFill } from 'react-icons/bs';
import productImg from '../../assets/prod-1.webp';
import bin from '../../assets/bin.svg';
const ProductWishlist = props => {
  return (
    <div className='card-wishlist'>
      <div className='card__details'>
        <div className='card__img'>
          <img src={productImg} alt='product' />
        </div>
        <div className='card__info'>
          <div className='card__title'>Abaya d'été en satin crêpe brodé</div>
          <div className='card__info-main'>
            <div className='card__name'>Abaya d'été en satin crêpe brodé</div>

            <div className='card__size'>
              Traille:
              <span className='card__size-wrapper'>large</span>
            </div>
            <div className='card__color'>
              Couleur:
              <span className='card__color-wrapper'>red</span>
            </div>
          </div>
          <div className='card__prices'>
            <span className='card__price'>DA 3400</span>
          </div>
        </div>
      </div>
      <div className='card__actions'>
        <div className='card__actions-remove'>
          <img src={bin} alt='' />
        </div>
        <div className='card__actions-add'>
          <BsCartPlusFill />
        </div>
      </div>
    </div>
  );
};

export default ProductWishlist;
