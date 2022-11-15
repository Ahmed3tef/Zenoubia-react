import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { APIBase } from './api';

const initialState = {
  reviews: [],
  error: null,
};

export const loadReviews = createAsyncThunk(
  'reviews/loadReviews',
  async (id, thunkAPI) => {
    return axios
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
        let { rating } = payload.data;
        // console.log(rating);
        const productName = payload.data.names.english;
        // let {}
        const newReviews = rating.map(rating => {
          const {
            personComment: comment,
            starRate,
            timestamp: date,
            userId: { displayName: userName, imageUrl: userImg },
            _id: id,
          } = rating;
          return {
            productName,
            comment,
            starRate,
            date,
            userName,
            userImg: userImg,
            id,
          };
        });

        console.log(newReviews);
        state.reviews = newReviews;

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
