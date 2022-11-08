import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import { APIBase } from './api';

import {
  loadData,
  loadDataWithId,
  loadDataWithParams,
  loadDataWithParamsPost,
} from './loadData';

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};
// products operations

export const loadProducts = createAsyncThunk(
  'products/loadProducts',

  async (id, thunkAPI) => {
    return axios
      .post(
        `${APIBase}product/categoryproducts?subcatId=${id}`,
        null,
        null,
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
  // loadDataWithParamsPost(thunkAPI, 'product/categoryproducts', {
  //   subcatId: id,
  // })
);
export const loadFilteredProducts = createAsyncThunk(
  'products/loadFilteredProducts',
  (params, data, thunkAPI) =>
    loadDataWithParams(thunkAPI, 'product/categoryproducts', params, data)
);

export const loadLatest = createAsyncThunk('products/loadLatest', thunkAPI =>
  loadData(thunkAPI, 'product/latest')
);
export const loadLatestOffers = createAsyncThunk(
  'products/loadLatestOffers',
  thunkAPI => loadData(thunkAPI, 'product/latestoffers')
);
export const loadBestOffers = createAsyncThunk(
  'products/loadBestOffers',
  thunkAPI => loadData(thunkAPI, 'product/bestoffer')
);
export const loadTopRating = createAsyncThunk(
  'products/loadTopRating',
  thunkAPI => loadData(thunkAPI, 'product/toprating')
);

export const loadTopSelling = createAsyncThunk(
  'products/loadTopSelling',
  thunkAPI => loadData(thunkAPI, 'product/topselling')
);

export const productsSlice = createSlice({
  name: 'products',
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
          const { id, name, images, alt, prices, avgRating, count, inStock } =
            obj;
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
            currentPrice: prices[0].currentPrice,
            discountPrice: prices[0].discountPrice
              ? prices[0].discountPrice
              : null,
            percent: prices[0].percent ? prices[0].percent : null,
          };
        });
        console.log(data);
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
    [loadLatest.pending]: (state, action) => {
      state.products = [];
      state.isLoading = true;
      state.error = null;
    },
    [loadLatest.fulfilled]: (state, { payload }) => {
      // console.log(payload);
      if (payload) {
        // console.log(payload);
        if (payload.status === 0) {
          state.products = [];
          state.isLoading = false;
          state.error = payload.message;
          return;
        }
        let data = payload.data.map((obj, i) => {
          const { id, name, images, alt, prices, avgRating, count, inStock } =
            obj;
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
            currentPrice: prices[0].currentPrice,
            discountPrice: prices[0].discountPrice
              ? prices[0].discountPrice
              : null,
            percent: prices[0].percent ? prices[0].percent : null,
          };
        });
        console.log(data);
        state.products = data;
        state.isLoading = false;
        state.error = null;
      }
    },
    [loadLatest.rejected]: (state, action) => {
      state.isLoading = false;
      state.products = null;
      state.error = action.payload.response.data.message;
    },
    [loadLatestOffers.pending]: (state, action) => {
      state.products = [];
      state.isLoading = true;
      state.error = null;
    },
    [loadLatestOffers.fulfilled]: (state, { payload }) => {
      // console.log(payload);
      if (payload) {
        // console.log(payload);
        if (payload.status === 0) {
          state.products = [];
          state.isLoading = false;
          state.error = payload.message;
          return;
        }
        let data = payload.data.map((obj, i) => {
          const { id, name, images, alt, prices, avgRating, count, inStock } =
            obj;
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
            currentPrice: prices[0].currentPrice,
            discountPrice: prices[0].discountPrice
              ? prices[0].discountPrice
              : null,
            percent: prices[0].percent ? prices[0].percent : null,
          };
        });
        console.log(data);
        state.products = data;
        state.isLoading = false;
        state.error = null;
      }
    },
    [loadLatestOffers.rejected]: (state, action) => {
      state.isLoading = false;
      state.products = null;
      state.error = action.payload.response.data.message;
    },
    [loadBestOffers.pending]: (state, action) => {
      state.products = [];
      state.isLoading = true;
      state.error = null;
    },
    [loadBestOffers.fulfilled]: (state, { payload }) => {
      // console.log(payload);
      if (payload) {
        // console.log(payload);
        if (payload.status === 0) {
          state.products = [];
          state.isLoading = false;
          state.error = payload.message;
          return;
        }
        let data = payload.data.map((obj, i) => {
          const { id, name, images, alt, prices, avgRating, count, inStock } =
            obj;
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
            currentPrice: prices[0].currentPrice,
            discountPrice: prices[0].discountPrice
              ? prices[0].discountPrice
              : null,
            percent: prices[0].percent ? prices[0].percent : null,
          };
        });
        console.log(data);
        state.products = data;
        state.isLoading = false;
        state.error = null;
      }
    },
    [loadBestOffers.rejected]: (state, action) => {
      state.isLoading = false;
      state.products = null;
      state.error = action.payload.response.data.message;
    },
    [loadTopRating.pending]: (state, action) => {
      state.products = [];
      state.isLoading = true;
      state.error = null;
    },
    [loadTopRating.fulfilled]: (state, { payload }) => {
      // console.log(payload);
      if (payload) {
        // console.log(payload);
        if (payload.status === 0) {
          state.products = [];
          state.isLoading = false;
          state.error = payload.message;
          return;
        }
        let data = payload.data.map((obj, i) => {
          const { id, name, images, alt, prices, avgRating, count, inStock } =
            obj;
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
            currentPrice: prices[0].currentPrice,
            discountPrice: prices[0].discountPrice
              ? prices[0].discountPrice
              : null,
            percent: prices[0].percent ? prices[0].percent : null,
          };
        });
        console.log(data);
        state.products = data;
        state.isLoading = false;
        state.error = null;
      }
    },
    [loadTopRating.rejected]: (state, action) => {
      state.isLoading = false;
      state.products = null;
      state.error = action.payload.response.data.message;
    },
    [loadTopSelling.pending]: (state, action) => {
      state.products = [];
      state.isLoading = true;
      state.error = null;
    },
    [loadTopSelling.fulfilled]: (state, { payload }) => {
      // console.log(payload);
      if (payload) {
        // console.log(payload);
        if (payload.status === 0) {
          state.products = [];
          state.isLoading = false;
          state.error = payload.message;
          return;
        }
        let data = payload.data.map((obj, i) => {
          const { id, name, images, alt, prices, avgRating, count, inStock } =
            obj;
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
            currentPrice: prices[0].currentPrice,
            discountPrice: prices[0].discountPrice
              ? prices[0].discountPrice
              : null,
            percent: prices[0].percent ? prices[0].percent : null,
          };
        });
        console.log(data);
        state.products = data;
        state.isLoading = false;
        state.error = null;
      }
    },
    [loadTopSelling.rejected]: (state, action) => {
      state.isLoading = false;
      state.products = null;
      state.error = action.payload.response.data.message;
    },
  },
});

export const getProducts = state => state.products;

export default productsSlice.reducer;
