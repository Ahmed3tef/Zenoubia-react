import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import prodImg from '../assets/prod-1.webp';
import { CartTable, PageTitle } from '../components';
import './_cart.scss';
const Cart = () => {
  const navigate = useNavigate();
  // const cart = JSON.parse(localStorage.getItem('cart'))
  //   ? JSON.parse(localStorage.getItem('cart'))
  //   : null;
  const [count, setCount] = useState();
  const [oldCart, setOldCart] = useState(
    JSON.parse(localStorage.getItem('cart'))
      ? JSON.parse(localStorage.getItem('cart'))
      : []
  );

  const addHandler = itemIndex => {
    let testCart = oldCart.map((item, i) => {
      if (i === itemIndex) {
        item.count++;
      }
      return item;
    });

    console.log(testCart);
  };

  let cart;
  if (oldCart) {
    cart = oldCart.map(e => {
      const price = e.product.discountPrice
        ? e.product.discountPrice
        : e.product.basePrice;
      const totalProductPrice = e.count * price;
      return {
        product: e.product,
        count: e.count,
        totalPrice: totalProductPrice,
      };
    });
  }
  console.log(cart);

  // oldCart.push({ product, count });
  localStorage.setItem('cart', JSON.stringify(cart));
  return (
    <>
      <PageTitle maniTitle={'Mon compte'} subTitle={'Panier'} />
      {!cart && <h2>No products added yet!</h2>}
      {cart && (
        <div className='cart'>
          <div className='cart__table-container'>
            <CartTable
              data={cart}
              countNum={count}
              setCountNum={setCount}
              addHandler={addHandler}
            />
          </div>
          <div className='cart__confirm'>
            <h3 className='cart__confirm-title'>Total du panier</h3>
            <div className='total'>
              <span className='total-title'>Le Total</span>
              <span className='total-price'>DA {85600}</span>
            </div>
            <div className='form-btns'>
              <div className='form-btn' onClick={() => navigate('/checkout')}>
                Compléter la commande
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
