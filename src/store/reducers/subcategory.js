import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loadData } from './loadData';

const initialState = {
  subCategories: [],
  isLoading: false,
  error: null,
};

export const loadSubCategories = createAsyncThunk(
  'subCategories/loadSubCategories',
  thunkAPI => loadData(thunkAPI, 'subcat/all')
);

export const subCategoriesSlice = createSlice({
  name: 'subCategories',
  initialState,
  extraReducers: {
    [loadSubCategories.pending]: (state, action) => {
      state.subCategories = [];
      state.isLoading = true;
      state.error = null;
    },
    [loadSubCategories.fulfilled]: (state, { payload }) => {
      // console.log(payload);
      if (payload) {
        if (payload.status === 0) {
          state.subCategories = [];
          state.isLoading = false;
          state.error = payload.message;
          return;
        }
        let data = payload.data.map((obj, i) => {
          // console.log(obj.data._id);
          return {
            id: obj.data._id,
            englishName: obj.data.names.english,
            arabicName: obj.data.names.arabic,
          };
        });
        // console.log(data);
        state.subCategories = data;
        state.isLoading = false;
        state.error = null;
      }
    },
    [loadSubCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.subCategories = null;
      state.error = action.payload.response.data.message;
    },
  },
});

export const getSubCategories = state => state.subCategories;

export default subCategoriesSlice.reducer;
