import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import { APIBase, token } from './api';

const initialState = {
  products: [],
  isLoading: true,
  error: null,
};

export const loadProducts = createAsyncThunk(
  'wishlist/loadProducts',
  async (id, thunkAPI) => {
    return axios
      .get(
        `${APIBase}wishlist`,
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
export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  extraReducers: {
    [loadProducts.pending]: (state, action) => {
      state.products = [];
      state.isLoading = true;
      state.error = null;
    },
    [loadProducts.fulfilled]: (state, { payload }) => {
      // console.log(payload.data);
      if (payload) {
        // console.log(payload);
        if (payload.status === 0) {
          state.products = [];
          state.isLoading = false;
          state.error = payload.message;
          return;
        }
        let data = payload.data.map((obj, i) => {
          const {
            id,
            name,
            images,
            alt,
            prices,
            avgRating,
            count,
            inStock,
            subcat,
            smallDescription,
          } = obj;
          const mainImg = images[0].imageUrl;

          return {
            id,
            name,
            mainImg,
            images,
            alt,
            prices,
            count,
            avgRating,
            inStock,
            title: smallDescription.headText,
            subCatId: subcat.id,
            color: prices[0].color,
            size: prices[0].size,
            currentPrice: prices[0].currentPrice,
            discountPrice: prices[0].discountPrice
              ? prices[0].discountPrice
              : null,
            percent: prices[0].percent ? prices[0].percent : null,
          };
        });

        state.products = data;
        state.isLoading = false;
        state.error = null;
      }
    },
    [loadProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.products = null;
      state.error = action.payload.response.data.message;
    },
  },
});

export const getWishlist = state => state.products;

export default wishlistSlice.reducer;
