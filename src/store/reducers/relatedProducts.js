import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadDataWithId, loadDataWithParams } from './loadData';

const initialState = {
  relatedProducts: [],
  isLoading: false,
  error: null,
};
export const loadRelated = createAsyncThunk(
  'relatedProducts/loadRelated',
  (id, thunkAPI) => loadDataWithId(thunkAPI, 'product/related', id)
);

export const relatedProductsSlice = createSlice({
  name: 'relatedProducts',
  initialState,
  extraReducers: {
    [loadRelated.pending]: (state, action) => {
      state.relatedProducts = [];
      state.isLoading = true;
      state.error = null;
    },
    [loadRelated.fulfilled]: (state, { payload }) => {
      if (payload.status === 0) {
        state.relatedProducts = [];
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
      state.relatedProducts = data;
      state.isLoading = false;
      state.error = null;
    },
    [loadRelated.rejected]: (state, action) => {
      state.isLoading = false;
      state.relatedProducts = null;
      state.error = action.payload.response.data.message;
    },
    // [loadRelated.pending]: (state, action) => {
    //   state.relatedProducts = [];
    //   state.isLoading = true;
    //   state.error = null;
    // },
    // [loadRelated.fulfilled]: (state, { payload }) => {
    //   // console.log(payload);
    //   if (payload) {
    //     if (payload.status === 0) {
    //       state.relatedProducts = [];
    //       state.isLoading = false;
    //       state.error = payload.message;
    //       return;
    //     }
    //     let data = payload.data.map((obj, i) => {
    //       return {
    //         id: obj.data._id,
    //         catName: obj.catName,
    //         key: obj.data._id,
    //         englishName: obj.data.names.english,
    //         arabicName: obj.data.names.arabic,
    //         imgUrl: obj.data.image.imageUrl,
    //         imgAlt: obj.data.image.alt,
    //         category: obj.data.categoriesId,
    //         position: i + 1,
    //       };
    //     });
    //     console.log(data.id);
    //     state.relatedProducts = data;
    //     state.isLoading = false;
    //     state.error = null;
    //   }
    // },
    // [loadRelated.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.relatedProducts = null;
    //   state.error = action.payload.response.data.message;
    // },
  },
});

export const getRelatedProducts = state => state.relatedProducts;

export default relatedProductsSlice.reducer;
