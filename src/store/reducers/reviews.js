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
    //   return [
    //     {
    //       productName: 'some product name',
    //       comment: 'comment comment comment',
    //       starRate: 4,
    //       date: '2022-10-30T20:48:59.319Z',
    //       userName: 'Memo Kaka',
    //       userImg,
    //       id: 1,
    //     },
    //     {
    //       productName: 'some product name',
    //       comment: 'comment comment comment',
    //       starRate: 4,
    //       date: '2022-10-30T20:48:59.319Z',
    //       userName: 'Memo Kaka',
    //       userImg,
    //       id: 1,
    //     },
    //     {
    //       productName: 'some product name',
    //       comment: 'comment comment comment',
    //       starRate: 4,
    //       date: '2022-10-30T20:48:59.319Z',
    //       userName: 'Memo Kaka',
    //       userImg,
    //       id: 1,
    //     },
    //     {
    //       productName: 'some product name',
    //       comment: 'comment comment comment',
    //       starRate: 4,
    //       date: '2022-10-30T20:48:59.319Z',
    //       userName: 'Memo Kaka',
    //       userImg,
    //       id: 1,
    //     },
    //   ];
    // }
    axios
      .get(
        `${APIBase}product/review`,
        {
          params: {
            id,
          },
        },
        thunkAPI
      )
      .then(res => {
        return res.data;
      })
      .catch(err => {
        return err.response.data;
      });
  }
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
        // console.log(payload);
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
