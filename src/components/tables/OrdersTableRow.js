import React, { useState } from 'react';
import { APIBase } from '../../store/reducers/api';
import Counter from '../Counter/Counter';
import prodImg from '../../assets/prod-1.webp';
const OrdersTableRow = ({ data }) => {
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

  return (
    <div className='orders__order'>
      {/* <div className='orders__order-img'>
        <img src={`${APIBase}${order.mainImage}`} alt={order.alt} />
        <img src={data.} alt={order.alt} />
      </div> */}
      <div
        className='orders__order-number'
        style={{
          width: '15rem',
          textAlign: 'center',
        }}>
        {data.orderNumber}
      </div>
      <div
        className='orders__order-number'
        style={{
          width: '15rem',
          textAlign: 'center',
        }}>
        {data.date}
      </div>
      <div className='orders__order-number'>{data.status}</div>
      <div className='orders__order-price'>DA {data.totalPrice}</div>

      <div className='orders__order-products'>
        {data.products.map((prod, i) => (
          <div className='orders__order-product'>
            <div className='orders__order-img'>
              <img src={prod.image} alt='product' />
            </div>
            <div className='orders__order-desc'>
              {prod.name} <br />
              {prod.description}
            </div>
            <div className='orders__order-price'>DA {prod.itemPrice}</div>
            <div className='orders__order-count'>{prod.quantity}</div>
            <div className='orders__order-total'>DA {prod.totalPrice}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersTableRow;
