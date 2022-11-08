import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loadData } from './loadData';

const initialState = {
  governments: [],
  isLoading: false,
  error: null,
};

export const loadGovernments = createAsyncThunk(
  'governments/loadGovernments',
  thunkAPI => loadData(thunkAPI, 'governoment')
);

export const governmentsSlice = createSlice({
  name: 'governments',
  initialState,
  extraReducers: {
    [loadGovernments.pending]: (state, action) => {
      state.governments = [];
      state.isLoading = true;
      state.error = null;
    },
    [loadGovernments.fulfilled]: (state, { payload }) => {
      // console.log(payload);
      if (payload) {
        if (payload.status === 0) {
          state.governments = [];
          state.isLoading = false;
          state.error = payload.message;
          return;
        }
        let data = payload.data.map((obj, i) => {
          return {
            id: obj.id,
            name: obj.name,
          };
        });
        // console.log(data);
        state.governments = data;
        state.isLoading = false;
        state.error = null;
      }
    },
    [loadGovernments.rejected]: (state, action) => {
      state.isLoading = false;
      state.governments = null;
      state.error = action.payload.response.data.message;
    },
  },
});

export const getGovernments = state => state.governments;

export default governmentsSlice.reducer;
