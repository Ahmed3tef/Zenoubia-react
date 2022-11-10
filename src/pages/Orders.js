import React from 'react';
import { CartTable, OrdersTable, PageTitle } from '../components';
import './_orders.scss';
import prodImg from '../assets/prod-1.webp';
const Orders = () => {
  const orders = [
    {
      orderNumber: '#123456789',
      date: '22.09.2022',
      status: 'Livré',
      totalPrice: 42800,
      products: [
        {
          image: prodImg,
          quantity: 3,
          itemPrice: 3000,
          totalPrice: 9000,
          name: 'Jaba- Robe d’hotesse',
          description: `Un repas d'été, des modèles modernes et nouveaux - une innovation - de haute qualité et de qualité garantie, disponible dans des couleurs distinctives`,
        },
        {
          image: prodImg,
          quantity: 3,
          itemPrice: 3000,
          totalPrice: 9000,
          name: 'Jaba- Robe d’hotesse',
          description:
            "Un repas d'été, des modèles modernes et nouveaux - une innovation - de haute qualité et de qualité garantie, disponible dans des couleurs distinctives",
        },
      ],
    },
  ];
  return (
    <>
      <PageTitle maniTitle={'Mon compte'} subTitle={'Panier'} />
      {!orders && <h2>No products added yet!</h2>}
      {orders && (
        <div className='orders'>
          <div className='orders__table-container'>
            <OrdersTable data={orders} path={'orders'} />
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;
