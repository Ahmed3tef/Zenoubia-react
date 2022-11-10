import React, { useState } from 'react';
import { Counter } from '..';

import OrdersTableRow from './OrdersTableRow';
const OrdersTable = ({ data }) => {
  return (
    <div className='orders__table'>
      <div className='orders__table-head'>
        <div
          className='orders__table-head--element'
          style={{
            width: '15rem',
            textAlign: 'center',
          }}>
          Ordre
        </div>
        <div
          className='orders__table-head--element'
          style={{
            width: '15rem',
            textAlign: 'center',
          }}>
          Date
        </div>
        <div className='orders__table-head--element'>Statut</div>
        <div className='orders__table-head--element'>Total</div>
        <div
          className='orders__table-head--element'
          style={{
            width: '28rem',
            textAlign: 'center',
          }}>
          Produit
        </div>
        <div className='orders__table-head--element'>Prix ​​Unitaire</div>
        <div className='orders__table-head--element'>Quantité</div>
        <div className='orders__table-head--element'>Prix ​​Total</div>
      </div>
      <div className='orders__table-body'>
        {data &&
          data.map((order, i) => <OrdersTableRow key={i} data={order} />)}
      </div>
    </div>
  );
};

export default OrdersTable;
