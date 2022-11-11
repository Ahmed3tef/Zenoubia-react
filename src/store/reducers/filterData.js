import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loadData } from './loadData';

const initialState = {
  filterData: [],
  isLoading: false,
  error: null,
};

export const loadFilterData = createAsyncThunk(
  'filterData/loadFilterData',
  (id, thunkAPI) => loadData(thunkAPI, `subcat/show?id=${id}`)
);

export const filterDataSlice = createSlice({
  name: 'filterData',
  initialState,
  extraReducers: {
    [loadFilterData.pending]: (state, action) => {
      state.filterData = [];
      state.isLoading = true;
      state.error = null;
    },
    [loadFilterData.fulfilled]: (state, { payload }) => {
      if (payload) {
        if (payload.status === 0) {
          state.filterData = [];
          state.isLoading = false;
          state.error = payload.message;
          return;
        }
        const { color, size, _id: id } = payload.data;
        const colors = color.map(e => {
          return { id: e._id, name: e.name, hexVal: e.hexValue };
        });
        const sizes = size.map(e => {
          return { id: e._id, name: e.name };
        });
        const data = {
          id,
          colors,
          sizes,
        };

        state.filterData = data;
        state.isLoading = false;
        state.error = null;
      }
    },
    [loadFilterData.rejected]: (state, action) => {
      state.isLoading = false;
      state.filterData = null;
      state.error = action.payload.response.data.message;
    },
  },
});

export const getFilterData = state => state.filterData;

export default filterDataSlice.reducer;
