import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import prodImg from '../assets/prod-1.webp';
import { CartTable, PageTitle } from '../components';
import './_cart.scss';
const Cart = () => {
  const navigate = useNavigate();
  // const cart = JSON.parse(localStorage.getItem('cart'))
  //   ? JSON.parse(localStorage.getItem('cart'))
  //   : null;
  const localCart = localStorage.getItem('cart');

  const [cart, setCart] = useState(
    localCart && localCart !== undefined ? JSON.parse(localCart) : null
  );

  useEffect(() => {
    if (cart) {
      const newCart = cart.map(e => {
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
      setCart(newCart);
    }
  }, []);

  // console.log(cart);

  // oldCart.push({ product, count });
  localStorage.setItem('cart', JSON.stringify(cart));
  return (
    <>
      <PageTitle maniTitle={'Mon compte'} subTitle={'Panier'} />
      {!cart && <h2 className='cart-notfound'>No products added yet!</h2>}
      {cart && (
        <div className='cart'>
          <div className='cart__table-container'>
            <CartTable data={cart} />
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
