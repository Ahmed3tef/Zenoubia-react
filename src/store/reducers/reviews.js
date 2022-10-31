import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { APIBase } from './api';
import { loadDataWithParams } from './loadData';
import userImg from '../../assets/prod-2.webp';
const initialState = {
  reviews: [],
  error: null,
};

export const loadReviews = createAsyncThunk(
  'reviews/loadReviews',

  (id, thunkAPI) => {
    return [
      {
        productName: 'some product name',
        comment: 'comment comment comment',
        starRate: 4,
        date: '2022-10-30T20:48:59.319Z',
        userName: 'Memo Kaka',
        userImg,
        id: 1,
      },
      {
        productName: 'some product name',
        comment: 'comment comment comment',
        starRate: 4,
        date: '2022-10-30T20:48:59.319Z',
        userName: 'Memo Kaka',
        userImg,
        id: 1,
      },
      {
        productName: 'some product name',
        comment: 'comment comment comment',
        starRate: 4,
        date: '2022-10-30T20:48:59.319Z',
        userName: 'Memo Kaka',
        userImg,
        id: 1,
      },
      {
        productName: 'some product name',
        comment: 'comment comment comment',
        starRate: 4,
        date: '2022-10-30T20:48:59.319Z',
        userName: 'Memo Kaka',
        userImg,
        id: 1,
      },
    ];
  }
  // axios
  //   .get(
  //     `${APIBase}/product/review`,
  //     {
  //       headers: {
  //         Authorization:
  //           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoyLCJ1c2VySWQiOiI2MzM0MmM2NjhkYWRkODU3MjQ0ZTVjNzUiLCJzdGF0dXMiOjEsImlhdCI6MTY2NDM2MzYyNiwiZXhwIjoxNjY2OTU1NjI2fQ.SUIdVlaNzg7RswRKpyEtFrjrHYTtMmDk_vrDTEFEADU',
  //       },
  //       params: {
  //         id,
  //       },
  //     },
  //     thunkAPI
  //   )
  //   .then(res => {
  //     console.log(res.data);
  //     return res.data;
  //   })
  //   .catch(err => {
  //     return err.response.data;
  //   })

  // loadDataWithParams(thunkAPI, 'product/review', { id }, null);
);

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  extraReducers: {
    [loadReviews.pending]: (state, action) => {
      state.reviews = [];
      state.error = null;
    },
    [loadReviews.fulfilled]: (state, { payload }) => {
      if (payload) {
        if (payload.status === 0) {
          state.reviews = [];
          state.error = payload.message;
          return;
        }
        console.log(payload);
        // let { rating } = payload.data;
        // const productName = payload.data.names.english;
        // // let {}
        // const reviews = rating.map(rating => {
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

        // console.log(reviews);
        // state.reviews = reviews;
        state.reviews = payload;
        state.error = null;
      }
    },
  },
  [loadReviews.rejected]: (state, action) => {
    // console.log(action);
    state.reviews = null;
    state.error = action.error;
  },
});

export const getReviews = state => state.reviews;

export default reviewsSlice.reducer;
