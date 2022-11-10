import React, { useState } from 'react';
import { Counter } from '..';
import prodImg from '../../assets/prod-1.webp';
import { APIBase } from '../../store/reducers/api';
const CartTableRow = ({
  product,
  countNumber,
  addHandler,
  decreaseHandler,
  itemIndex,
}) => {
  const [count, setCount] = useState(countNumber);

  // const oldCart = JSON.parse(localStorage.getItem('cart'))
  //   ? JSON.parse(localStorage.getItem('cart'))
  //   : [];
  // let cart;
  // if (oldCart) {
  //   cart = oldCart.map(e => {
  //     const price = e.product.discountPrice
  //       ? e.product.discountPrice
  //       : e.product.basePrice;
  //     const totalProductPrice = e.count * price;
  //     return {
  //       product: e.product,
  //       count: e.count,
  //       totalPrice: totalProductPrice,
  //     };
  //   });
  // }
  // console.log(cart);
  // // oldCart.push({ product, count });
  // localStorage.setItem('cart', JSON.stringify(cart));

  const price = product.discountPrice
    ? product.discountPrice
    : product.basePrice;

  return (
    <div className='cart__product'>
      <div className='cart__product-img'>
        <img src={`${APIBase}${product.mainImage}`} alt={product.alt} />
      </div>

      <div className='cart__product-title'>{product.englishName}</div>
      <div className='cart__product-desc'>{product.englishDescription}</div>
      <div className='cart__product-count'>
        <Counter
          itemIndex={itemIndex}
          addHandler={addHandler}
          decreaseHandler={decreaseHandler}
          count={count}
          setCount={setCount}
          path='cart'
        />
      </div>
      <div className='cart__product-price'>DA {price}</div>
      <div className='cart__product-total'>DA {count * price}</div>
    </div>
  );
};

export default CartTableRow;
