import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { Counter } from '..';
import './_ordersTable.scss';
import OrdersTableRow from './OrdersTableRow';
const OrdersTable = ({ data }) => {
  const cols = [
    {
      field: 'orderNumber',
      sortable: false,
      headerName: 'Ordre',
      width: 100,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'date',
      sortable: false,
      headerName: 'Date',
      width: 100,

      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <div>
            <span>{`${row.firstName}`}</span> -<span>{`${row.lastName}`}</span>
          </div>
        );
      },
    },
    {
      field: 'status',
      sortable: false,
      headerName: 'Contact',
      width: 250,

      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <div>
            <p>{`${row.phone}`}</p>
            <p>{`${row.email}`}</p>
          </div>
        );
      },
    },
    {
      field: 'totalPrice',
      sortable: false,
      headerName: 'Total Amount',
      width: 200,

      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'products',
      sortable: false,
      headerName: 'Products',
      width: 200,

      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'products',
      sortable: false,
      headerName: 'Total Amount',
      width: 200,

      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'products',
      sortable: false,
      headerName: 'Products',
      width: 200,

      headerAlign: 'center',
      align: 'center',
    },
  ];

  return (
    <Box sx={{ height: 450, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={cols}
        pageSize={6}
        rowsPerPageOptions={[6]}
        disableSelectionOnClick={true}
        experimentalFeatures={{
          newEditingApi: true,
        }}
        disableColumnMenu={true}
        disableColumnSelector={true}
        disableColumnFilter={true}
        hideFooter={true}
        sx={{
          ' .MuiDataGrid-root': {
            border: '2px solid var(--color-main-lighter)',
          },
          '& .MuiDataGrid-row': {
            minHeight: '10rem !important',
            maxHeight: '10rem !important',
            overflowY: 'scroll',
            scrollbarGutter: 'unset',
            backgroundColor: 'var(--color-table-row)',
            borderBottom: '1px solid var(--color-white)',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: 'var(--color-table-row)',
          },
          '& .MuiDataGrid-row:not(:last-child)': {},
          '& .MuiDataGrid-row:not(:first-child)': {
            boxShadow: 'inset 0 3px 3px rgba(0, 0, 0, 0.1);',
          },
          '& .MuiDataGrid-row:hover': {
            backgroundColor: 'var(--color-table-row)',
            // color: "red"
          },

          '& .MuiDataGrid-cell--textCenter': {
            minHeight: '10rem !important',
            maxHeight: '10rem !important',
          },
          '& .MuiSvgIcon-root,& .MuiSvgIcon-fontSizeMedium': {
            fontSize: '2.7rem !important',
            fill: 'black !important',
            color: 'black !important',
          },
          '&  .MuiDataGrid-columnSeparator': {
            visibility: 'hidden',
          },
          '& .MuiDataGrid-cell:focus': {
            outline: 0,
          },
          '& .MuiDataGrid-columnHeader:focus': {
            outline: 0,
          },
          '& .MuiDataGrid-columnHeader': {
            color: 'var(--color-btn-form-text)',
            fontSize: '1.6rem',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: 'var(--color-main-lighter)',
          },
          '& .MuiDataGrid-columnHeaderTitleContainer': {
            width: '100%',
          },
        }}
      />
    </Box>
    // <div className='orders__table'>
    //   <div className='orders__table-head'>
    //     <div
    //       className='orders__table-head--element'
    //       style={{
    //         width: '15rem',
    //         textAlign: 'center',
    //       }}>
    //       Ordre
    //     </div>
    //     <div
    //       className='orders__table-head--element'
    //       style={{
    //         width: '15rem',
    //         textAlign: 'center',
    //       }}>
    //       Date
    //     </div>
    //     <div className='orders__table-head--element'>Statut</div>
    //     <div className='orders__table-head--element'>Total</div>
    //     <div
    //       className='orders__table-head--element'
    //       style={{
    //         width: '28rem',
    //         textAlign: 'center',
    //       }}>
    //       Produit
    //     </div>
    //     <div className='orders__table-head--element'>Prix ​​Unitaire</div>
    //     <div className='orders__table-head--element'>Quantité</div>
    //     <div className='orders__table-head--element'>Prix ​​Total</div>
    //   </div>
    //   <div className='orders__table-body'>
    //     {data &&
    //       data.map((order, i) => <OrdersTableRow key={i} data={order} />)}
    //   </div>
    // </div>
  );
};

export default OrdersTable;
