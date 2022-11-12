import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { APIBase } from './api';

const initialState = {
  orders: [],
  isLoading: false,
  error: null,
};

export const loadOrders = createAsyncThunk(
  'orders/loadOrders',
  async (token, thunkAPI) => {
    return axios
      .get(
        `${APIBase}order`,
        {
          headers: {
            Authorization: token,
          },
        },
        thunkAPI
      )
      .then(res => {
        // console.log(res.data);
        return res.data;
      })
      .catch(err => {
        return err.response.data;
      });
  }
);

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  extraReducers: {
    [loadOrders.pending]: (state, action) => {
      state.orders = [];
      state.isLoading = true;
      state.error = null;
    },
    [loadOrders.fulfilled]: (state, { payload }) => {
      if (payload) {
        if (payload.status === 0) {
          state.orders = [];
          state.isLoading = false;
          state.error = payload.message;
          return;
        }
        let data = payload.data.map((obj, i) => {
          // console.log(obj.data._id);
          const {
            ranking: orderNumber,
            _id: id,
            total: totalPrice,
            createdAt: date,
            orderStatus: status,
            products,
          } = obj;

          const mappedProducts = products.map(p => {
            return {
              id: p.productId,

              image: p.imageUrl,
              itemPrice:
                p.priceId.price && p.priceId.price.discountPrice
                  ? p.priceId.price.discountPrice
                  : p.priceId.price.currentPrice,
              quantity: p.quantity,
              name: p.productName,
              totalPrice:
                p.quantity *
                (p.priceId.price && p.priceId.price.discountPrice
                  ? p.priceId.price.discountPrice
                  : p.priceId.price.currentPrice),
            };
          });

          return {
            id,
            status,
            date: date,
            orderNumber,
            totalPrice,
            products: mappedProducts,
          };
        });

        state.orders = data;
        state.isLoading = false;
        state.error = null;
      }
    },
    [loadOrders.rejected]: (state, action) => {
      state.isLoading = false;
      state.orders = null;
      state.error = action.payload.response.data.message;
    },
  },
});

export const getOrders = state => state.orders;

export default ordersSlice.reducer;
