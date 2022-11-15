import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { APIBase } from './api';
import { loadData } from './loadData';

const initialState = {
  governments: [],
  isLoading: false,
  error: null,
};

export const loadGovernments = createAsyncThunk(
  'governments/loadGovernments',
  async (id, thunkAPI) => {
    return axios
      .get(`${APIBase}governoment/govfromcountry`, {
        params: { countryId: id },
      })
      .then(res => res.data)
      .catch(err => err.response.data);
  }
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
