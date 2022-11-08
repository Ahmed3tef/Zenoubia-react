import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loadData } from './loadData';

const initialState = {
  countries: [],
  isLoading: false,
  error: null,
};

export const loadCountries = createAsyncThunk(
  'countries/loadCountries',
  thunkAPI => loadData(thunkAPI, 'country')
);

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  extraReducers: {
    [loadCountries.pending]: (state, action) => {
      state.countries = [];
      state.isLoading = true;
      state.error = null;
    },
    [loadCountries.fulfilled]: (state, { payload }) => {
      // console.log(payload);
      if (payload) {
        if (payload.status === 0) {
          state.countries = [];
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
        state.countries = data;
        state.isLoading = false;
        state.error = null;
      }
    },
    [loadCountries.rejected]: (state, action) => {
      state.isLoading = false;
      state.countries = null;
      state.error = action.payload.response.data.message;
    },
  },
});

export const getCountries = state => state.countries;

export default countriesSlice.reducer;
