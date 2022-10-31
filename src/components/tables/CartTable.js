import React, { useState } from 'react';
import { Counter } from '..';
import prodImg from '../../assets/prod-1.webp';
import CartTableRow from './CartTableRow';
const CartTable = ({ data }) => {
  return (
    <div className='cart__table'>
      <div className='cart__table-head'>
        <div className='cart__table-head--element'>Photo</div>
        <div className='cart__table-head--element'>Titre du produit</div>
        <div
          className='cart__table-head--element'
          style={{
            width: '23rem',
            textAlign: 'center',
          }}>
          La description
        </div>
        <div className='cart__table-head--element'>Quantité</div>
        <div className='cart__table-head--element'>Prix ​​Unitaire</div>
        <div className='cart__table-head--element'>Prix ​Total</div>
      </div>
      <div className='cart__table-body'>
        {[1, 2, 3, 4].map((e, i) => (
          <CartTableRow key={i} />
        ))}
      </div>
    </div>
  );
};

export default CartTable;
