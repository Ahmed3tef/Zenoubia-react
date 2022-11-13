import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { APIBase } from './api';
import { loadDataWithParams } from './loadData';

const initialState = {
  product: [],
  isLoading: true,
  error: null,
};

export const loadProduct = createAsyncThunk(
  'product/loadProduct',

  (id, thunkAPI) => loadDataWithParams(thunkAPI, 'product/show', { id })
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: {
    [loadProduct.pending]: (state, action) => {
      state.product = [];
      state.error = null;
    },
    [loadProduct.fulfilled]: (state, { payload }) => {
      if (payload) {
        if (payload.status === 0) {
          state.product = [];
          state.error = payload.message;
          return;
        }
        console.log(payload);
        const { fullData: productData } = payload;
        // console.log(productData);
        const product = {
          id: productData._id,
          subCatId:
            productData.subcatId && productData.subcatId._id
              ? productData.subcatId._id
              : null,
          name: productData.names,
          arabicName: productData.names.arabic,
          englishName: productData.names.english,
          arabicTitle: productData.smallDescription.headText.arabic,
          englishTitle: productData.smallDescription.headText.english,
          englishDescription: productData.smallDescription.hintText.english,
          arabicDescription: productData.smallDescription.hintText.arabic,
          images: productData.images,
          mainImage: productData.images[0].imageUrl,
          alt: productData.alt,
          basePrice: productData.prices[0].currentPrice,
          discountPrice: productData.prices[0].discountPrice
            ? productData.prices[0].discountPrice
            : null,
          discountPercentage: productData.prices[0].percent
            ? productData.prices[0].percent
            : null,
          priceId: productData.prices[0]._id ? productData.prices[0]._id : null,
          inStock: productData.inStock,
          avgRating: productData.avgRating,
          // colorId: productData.prices[0].color,
          // size: productData.prices[0].size,
          // reviews: productData.rating ? productData.rating.length : 0,
          // ? userImg
          // : `${APIBase}productImage/9edd350a-966f-494a-8ce0-625ce802fbcd.jpeg`,
        };

        state.product = product;
        state.isLoading = false;

        state.error = null;
      }
    },
  },
  [loadProduct.rejected]: (state, action) => {
    // console.log(action);
    state.product = null;
    state.error = action.error;
  },
});

export const getProduct = state => state.product;

export default productSlice.reducer;
