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
  // {
  //   return {
  //     id: 1,
  //     name: 'Abaya Brodée',
  //     sizes: ['M', 'L', 'XL', '2XL', '3XL'],
  //     rating: 4,
  //     reviews: 122,
  //     description:
  //       'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  //     title: 'Abaya Brodée - Code XD1254',
  //     price: 'DA 2400',
  //   };
  // }
  // axios
  //   .get(
  //     `${APIBase}/product/show`,
  //     {
  //       headers: {
  //         Authorization:
  //           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoyLCJ1c2VySWQiOiI2MzU1MmMyMDBiY2MxYTZlNTljMDUzY2IiLCJzdGF0dXMiOjEsImlhdCI6MTY2Njg2OTA2NSwiZXhwIjoxNjY5NDYxMDY1fQ.1UiCvvjNB58m9Cmr0a4y3oginvFyS808FMMpPugK-vU',
  //       },
  //       params: {
  //         id: '635a662959e79aeeb9cdf176',
  //       },
  //     },
  //     thunkAPI
  //   )
  //   .then(res => {
  //     // console.log(res.data);
  //     return res.data;
  //   })
  //   .catch(err => {
  //     return err.response.data;
  //   })

  // loadDataWithParams(thunkAPI, 'product/review', { id }, null);
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
        // console.log(payload);
        const { fullData: productData } = payload;

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

          basePrice: productData.prices[0].currentPrice,
          discountPrice: productData.prices[0].discountPrice
            ? productData.prices[0].discountPrice
            : null,
          discountPercentage: productData.prices[0].percent
            ? productData.prices[0].percent
            : null,

          inStock: productData.inStock,
          avgRating: productData.avgRating,
          // colorId: productData.prices[0].color,
          // size: productData.prices[0].size,
          reviews: 1220,
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
