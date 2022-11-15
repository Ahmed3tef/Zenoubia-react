import React, { useEffect, useState } from 'react';
import { TiMinus, TiPlus } from 'react-icons/ti';
import { Counter } from '..';
import prodImg from '../../assets/prod-1.webp';
import { APIBase } from '../../store/reducers/api';
const CartTableRow = ({ product, countNumber, cart, itemIndex }) => {
  const [count, setCount] = useState(countNumber);
  console.log(cart);
  const [oldCart, setOldCart] = useState(cart);

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
  const increaseHandler = itemIndex => {
    let testCart = oldCart.map((item, i) => {
      if (i === itemIndex) {
        item.count++;
      }
      return item;
    });
    setOldCart(testCart);
  };
  const decreaseHandler = itemIndex => {
    let testCart = oldCart.map((item, i) => {
      if (i === itemIndex) {
        item.count--;
      }
      return item;
    });
    setOldCart(testCart);
  };
  const price = product.discountPrice
    ? product.discountPrice
    : product.basePrice;

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(oldCart));
  }, [oldCart]);

  return (
    <div className='cart__product'>
      <div className='cart__product-img'>
        <img src={`${APIBase}${product.mainImage}`} alt={product.alt} />
      </div>

      <div className='cart__product-title'>{product.englishName}</div>
      <div className='cart__product-desc'>
        <div className='desc'>{product.englishDescription}</div>
        <div className='cart__product-size'>Product Size: {product.size}</div>
      </div>
      <div className='cart__product-count'>
        <div className='actions'>
          <span
            className='decrease'
            onClick={() => {
              setCount(prevState => {
                if (prevState === 1) return prevState;
                return prevState - 1;
              });
              decreaseHandler(itemIndex);
            }}>
            <TiMinus />
          </span>
          <span className='number'>{count}</span>
          <span
            className='add'
            onClick={() => {
              setCount(prevState => {
                if (prevState === 10) return prevState;

                return prevState + 1;
              });
              increaseHandler(itemIndex);
            }}>
            <TiPlus />
          </span>
        </div>
        {/* <Counter
          itemIndex={itemIndex}
          addHandler={addHandler}
          decreaseHandler={decreaseHandler}
          count={count}
          setCount={setCount}
          path='cart'
        /> */}
      </div>
      <div className='cart__product-price'>DA {price}</div>
      <div className='cart__product-total'>DA {count * price}</div>
    </div>
  );
};

export default CartTableRow;
