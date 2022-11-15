import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import { APIBase } from './api';

const localCart = localStorage.getItem('cart');

const initialState = {
  products:
    localCart && localCart !== undefined ? JSON.parse(localCart).products : [],
  totalQuantity:
    localCart && localCart !== undefined
      ? JSON.parse(localCart).totalQuantity
      : 0,
  totalPrice:
    localCart && localCart !== undefined ? JSON.parse(localCart).totalPrice : 0,
  isLoading: true,
  error: null,
};

// export const loadProducts = createAsyncThunk(
//   'wishlist/loadProducts',
//   async (id, thunkAPI) => {
//     return axios
//       .get(
//         `${APIBase}wishlist`,
//         {
//           headers: {
//             Authorization: token,
//           },
//         },
//         thunkAPI
//       )
//       .then(res => {
//         // console.log(res.data);
//         return res.data;
//       })
//       .catch(err => {
//         return err.response.data;
//       });
//   }
// );
export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addProductToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeProductFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
  // extraReducers: {
  //   [loadProducts.pending]: (state, action) => {
  //     state.products = [];
  //     state.isLoading = true;
  //     state.error = null;
  //   },
  //   [loadProducts.fulfilled]: (state, { payload }) => {
  //     // console.log(payload.data);
  //     if (payload) {
  //       // console.log(payload);
  //       if (payload.status === 0) {
  //         state.products = [];
  //         state.isLoading = false;
  //         state.error = payload.message;
  //         return;
  //       }
  //       let data = payload.data.map((obj, i) => {
  //         const {
  //           id,
  //           name,
  //           images,
  //           alt,
  //           prices,
  //           avgRating,
  //           count,
  //           inStock,
  //           subcat,
  //           smallDescription,
  //         } = obj;
  //         const mainImg = images[0].imageUrl;

  //         return {
  //           id,
  //           name,
  //           mainImg,
  //           images,
  //           alt,
  //           prices,
  //           count,
  //           avgRating,
  //           inStock,
  //           title: smallDescription.headText,
  //           subCatId: subcat.id,
  //           color: prices[0].color,
  //           size: prices[0].size,
  //           currentPrice: prices[0].currentPrice,
  //           discountPrice: prices[0].discountPrice
  //             ? prices[0].discountPrice
  //             : null,
  //           percent: prices[0].percent ? prices[0].percent : null,
  //         };
  //       });

  //       state.products = data;
  //       state.isLoading = false;
  //       state.error = null;
  //     }
  //   },
  //   [loadProducts.rejected]: (state, action) => {
  //     state.isLoading = false;
  //     state.products = null;
  //     state.error = action.payload.response.data.message;
  //   },
  // },
});

export const getWishlist = state => state.products;

export default wishlistSlice.reducer;
