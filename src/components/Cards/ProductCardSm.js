import React, { useState } from 'react';
import './_productCard.scss';
import productImg from '../../assets/prod-1.webp';
import { Ratings } from '..';
import { BsHeart, BsHeartFill, BsCartPlusFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { addToWishlist, APIBase } from '../../store/reducers/api';
const ProductCardSm = props => {
  const sizes = ['M', 'L', 'XL'];
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();
  const {
    id,
    name,
    mainImg,
    images,
    alt,
    prices,
    count,
    avgRating,
    inStock,
    currentPrice,
    discountPrice,
    percent,
  } = props.data;

  return (
    <div className='card-sm'>
      <div className='card__img' onClick={() => navigate(`/product/${id}`)}>
        {percent && <div className='card__badge'>{`- ${percent}%`}</div>}

        <img src={`${APIBase}${mainImg}`} alt={alt} />
      </div>
      <div className='card__title'>{name}</div>
      <div className='card__prices'>
        {discountPrice && (
          <span className='card__price'>{`DA ${discountPrice}`}</span>
        )}
        {!discountPrice && (
          <span className='card__price'>{`DA ${currentPrice}`}</span>
        )}
        <Ratings value={avgRating} />
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
      <div className='card__actions'>
        <div
          className='card__actions-like'
          onClick={() => {
            addToWishlist(id);
            setIsLiked(!isLiked);
          }}>
          {isLiked ? <BsHeartFill /> : <BsHeart />}
        </div>
        <div className='card__actions-add' onClick={() => navigate(`/cart`)}>
          <BsCartPlusFill />
          Ajouter au panier
        </div>
      </div>
    </div>
  );
};

export default ProductCardSm;
