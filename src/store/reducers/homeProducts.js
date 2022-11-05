import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loadDataWithParams } from './loadData';

const initialState = {
  homeSections: [],
  isLoading: false,
  error: null,
};

export const loadHomeProducts = createAsyncThunk(
  'homeSections/loadHomeProducts',
  thunkAPI =>
    loadDataWithParams(thunkAPI, 'product/subcategoryproduct', { limit: 0 })
);

export const homeSectionsSlice = createSlice({
  name: 'homeSections',
  initialState,
  extraReducers: {
    [loadHomeProducts.pending]: (state, action) => {
      state.homeSections = [];
      state.isLoading = true;
      state.error = null;
    },
    [loadHomeProducts.fulfilled]: (state, { payload }) => {
      console.log(payload);
      if (payload) {
        if (payload.status === 0) {
          state.homeSections = [];
          state.isLoading = false;
          state.error = payload.message;
          return;
        }
        let data = payload.data.map((obj, i) => {
          // console.log(obj.data._id);
          const { catName, catId, subcatName, subcatId, products } = obj;
          const mappedProducts = products.map(p => {
            return {
              id: p._id,
              image: p.images[0].imageUrl,
              price:
                p.prices[0] && p.prices[0].discountPrice
                  ? p.prices[0].discountPrice
                  : p.prices[0].currentPrice,
            };
          });
          return {
            categoryName: catName,
            categoryId: catId,
            subCategoryName: subcatName,
            subCategoryId: subcatId,
            mainImg: products[0].images[0].imageUrl,
            products: mappedProducts,
          };
        });
        // console.log(data);
        state.homeSections = data;
        state.isLoading = false;
        state.error = null;
      }
    },
    [loadHomeProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.homeSections = null;
      state.error = action.payload.response.data.message;
    },
  },
});

export const getHomeSections = state => state.homeSections;

export default homeSectionsSlice.reducer;
