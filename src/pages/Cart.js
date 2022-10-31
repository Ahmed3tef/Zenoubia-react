import React from 'react';
import prodImg from '../assets/prod-1.webp';
import { CartTable, PageTitle } from '../components';
import './_cart.scss';
const Cart = () => {
  const data = [
    {
      id: 1,
      image: prodImg,
      name: 'Robes Soiress',
      description:
        "Robe pour votre occasion Henna - Majestic - Eid - Dinner Disponible en 9 couleurs et bénéficie d'une remise de 44%",
      quantity: 3,
      itemPrice: 38400,
      totalPrice: 38400 * 3,
    },
  ];

  return (
    <>
      <PageTitle maniTitle={'Mon compte'} subTitle={'Panier'} />
      <div className='cart'>
        <div className='cart__table-container'>
          <CartTable data={data} />
        </div>
        <div className='cart__confirm'>
          <h3 className='cart__confirm-title'>Total du panier</h3>
          <div className='total'>
            <span className='total-title'>Le Total</span>
            <span className='total-price'>DA {85600}</span>
          </div>
          {/* <div className='form-btns'>
            <div className='form-btn'>Compléter la commande</div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Cart;
