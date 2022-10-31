import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { APIBase } from './api';
// import { loadDataWithParams } from './loadData';

const initialState = {
  product: [],
  isLoading: true,
  error: null,
};

export const loadProduct = createAsyncThunk(
  'product/loadProduct',

  thunkAPI => {
    return {
      id: 1,
      name: 'Abaya Brodée',
      sizes: ['M', 'L', 'XL', '2XL', '3XL'],
      rating: 4,
      reviews: 122,
      description:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      title: 'Abaya Brodée - Code XD1254',
      price: 'DA 2400',
    };
  }
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
        // let { rating } = payload.data;
        // const productName = payload.data.names.english;
        // let {}
        // const product = rating.map(rating => {
        //   const {
        //     personComment: comment,
        //     starRate,
        //     timestamp: date,
        //     userId: { displayName: userName, imageUrl: userImg },
        //     _id: id,
        //   } = rating;
        //   return {
        //     productName,
        //     comment,
        //     starRate,
        //     date,
        //     userName,
        //     userImg: userImg,
        //     id,
        //     // ? userImg
        //     // : `${APIBase}productImage/9edd350a-966f-494a-8ce0-625ce802fbcd.jpeg`,
        //   };
        // });

        console.log(payload);
        state.product = payload;
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
