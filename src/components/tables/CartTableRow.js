import React, { useState } from 'react';
import { Counter } from '..';
import prodImg from '../../assets/prod-1.webp';
const CartTableRow = props => {
  const [count, setCount] = useState(2);
  return (
    <div className='cart__product'>
      <div className='cart__product-img'>
        <img src={prodImg} alt='' />
      </div>

      <div className='cart__product-title'>Robes Soiress</div>
      <div className='cart__product-desc'>
        Robe pour votre occasion Henna - Majestic - Eid - Dinner Disponible en 9
        couleurs et bénéficie d'une remise de 44%
      </div>
      <div className='cart__product-count'>
        <Counter count={count} setCount={setCount} />
      </div>
      <div className='cart__product-price'>DA 38400</div>
      <div className='cart__product-total'>DA {count * 38400}</div>
    </div>
  );
};

export default CartTableRow;
