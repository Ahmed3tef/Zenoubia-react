import React from 'react';
import { useNavigate } from 'react-router-dom';
import prodImg from '../assets/prod-1.webp';
import { CartTable, PageTitle } from '../components';
import './_cart.scss';
const Cart = () => {
  const navigate = useNavigate();
  const cart = JSON.parse(localStorage.getItem('cart'))
    ? JSON.parse(localStorage.getItem('cart'))
    : null;

  return (
    <>
      <PageTitle maniTitle={'Mon compte'} subTitle={'Panier'} />
      <div className='cart'>
        <div className='cart__table-container'>
          {!cart && <h2>No products added yet!</h2>}
          {cart && <CartTable data={cart} />}
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
    </>
  );
};

export default Cart;
