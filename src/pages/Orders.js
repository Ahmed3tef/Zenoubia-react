import React from 'react';
import { CartTable, OrdersTable, PageTitle } from '../components';
import './_orders.scss';
import prodImg from '../assets/prod-1.webp';
const Orders = () => {
  const orders = [
    {
      id: '123456789',
      orderNumber: '# 123456789',
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
    {
      id: '123456789',
      orderNumber: '# 123456789',
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
            {/* <OrdersTable data={orders} path={'orders'} /> */}
            {orders.map((order, index) => {
              return (
                <div className='order' key={index}>
                  <div className='order__header'>
                    <div className='order__date'>
                      <span>Order Placed At</span>
                      <span className='order__date-time'>{order.date}</span>
                    </div>
                    <div className='order__total'>
                      <span>Total</span>
                      <span className='order__total-price'>
                        DA {order.totalPrice}
                      </span>
                    </div>
                    <div className='order__number'>
                      <span>Order</span>
                      <span> {order.orderNumber}</span>
                    </div>
                  </div>
                  <div className='order__body'>
                    <h2 className='order__status'>{order.status}</h2>
                    <div className='order__products'>
                      {order.products.map((p, i) => {
                        return (
                          <div className='order__product'>
                            <div className='order__product-img'>
                              <img src={p.image} alt={p.name} />
                            </div>
                            <div className='order__product-info'>
                              <h3 className='order__product-name'>{p.name}</h3>
                              <div className='order__products-price'>
                                Item price: {p.itemPrice}
                              </div>
                              <div className='order__products-total'>
                                Total price: {p.totalPrice}
                              </div>
                              <div className='order__products-total'>
                                Quantity: {p.quantity}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;
