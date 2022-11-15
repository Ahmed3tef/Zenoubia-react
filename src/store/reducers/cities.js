import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { APIBase } from './api';
import { loadData } from './loadData';

const initialState = {
  cities: [],
  isLoading: false,
  error: null,
};

export const loadCities = createAsyncThunk(
  'cities/loadCities',
  async (id, thunkAPI) => {
    return axios
      .get(`${APIBase}city/cityfromgov`, {
        params: { govId: id },
      })
      .then(res => res.data)
      .catch(err => err.response.data);
  }
);

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  extraReducers: {
    [loadCities.pending]: (state, action) => {
      state.cities = [];
      state.isLoading = true;
      state.error = null;
    },
    [loadCities.fulfilled]: (state, { payload }) => {
      // console.log(payload);
      if (payload) {
        if (payload.status === 0) {
          state.cities = [];
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
        state.cities = data;
        state.isLoading = false;
        state.error = null;
      }
    },
    [loadCities.rejected]: (state, action) => {
      state.isLoading = false;
      state.cities = null;
      state.error = action.payload.response.data.message;
    },
  },
});

export const getCities = state => state.cities;

export default citiesSlice.reducer;
