import React, { useState } from 'react';
import { Counter } from '..';
import prodImg from '../../assets/prod-1.webp';
import { APIBase } from '../../store/reducers/api';
const CartTableRow = ({ product, countNumber }) => {
  const [count, setCount] = useState(countNumber);

  const price = product.discountPrice
    ? product.discountPrice
    : product.basePrice;

  const [totalPrice, setTotalPrice] = useState(count * price);

  return (
    <div className='cart__product'>
      <div className='cart__product-img'>
        <img src={`${APIBase}${product.mainImage}`} alt={product.alt} />
      </div>

      <div className='cart__product-title'>{product.englishName}</div>
      <div className='cart__product-desc'>{product.englishDescription}</div>
      <div className='cart__product-count'>
        <Counter
          count={count}
          setCount={setCount}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
      </div>
      <div className='cart__product-price'>DA {price}</div>
      <div className='cart__product-total'>DA {count * price}</div>
    </div>
  );
};

export default CartTableRow;
