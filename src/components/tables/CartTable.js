import React from 'react';

const CartTable = ({ data }) => {
  return (
    <div className='cart__table'>
      <div className='cart__table-head'>
        <div className='cart__table-head--element'>Photo</div>
        <div className='cart__table-head--element'>Titre du produit</div>
        <div className='cart__table-head--element'>La description</div>
        <div className='cart__table-head--element'>Quantité</div>
        <div className='cart__table-head--element'>Prix ​​Unitaire</div>
        <div className='cart__table-head--element'>Prix ​Total</div>
      </div>
      <div className='cart__table-body'>
        <div className='cart__product'>lgksmfdglkmsdf</div>
        <div className='cart__product'>lgksmfdglkmsdf</div>
      </div>
    </div>
  );
};

export default CartTable;
