import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { APIBase } from './api';

const initialState = {
  token: '',
  userData: {},
  isLoading: false,
  error: null,
  isLoggedIn: false,
  successMessage: '',
  userCreated: false,
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (user, thunkAPI) => {
    return axios
      .post(`${APIBase}user/login`, user, thunkAPI)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        // const errMsg = err.response.data.message;
        // toast.error(`${errMsg}`, {
        //   position: 'top-right',
        //   autoClose: 4500,
        //   hideProgressBar: true,
        //   closeOnClick: false,
        //   pauseOnHover: true,
        //   draggable: true,
        // });
        return err.response.data;
      });
  }
);
export const createUser = createAsyncThunk(
  'auth/createUser',
  async (user, thunkAPI) => {
    return axios
      .post(`${APIBase}user/create`, user, thunkAPI)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        const errMsg = err.response.data.message;
        toast.error(`${errMsg}`, {
          position: 'top-right',
          autoClose: 4500,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
        });
        return err.response.data;
      });
  }
);
export const getUserData = createAsyncThunk(
  'auth/getUserData',
  async (tokenId, thunkAPI) => {
    return axios
      .get(
        `${APIBase}user`,
        {
          headers: {
            Authorization: tokenId,
          },
        },
        thunkAPI
      )
      .then(res => {
        return res.data;
      })
      .catch(err => {
        const errMsg = err.response.data.message;
        toast.error(`${errMsg}`, {
          position: 'top-right',
          autoClose: 4500,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
        });
        return err.response.data;
      });
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.token = '';
      state.isLoading = false;
      state.error = null;
      state.isLoggedIn = false;
      localStorage.clear();
      sessionStorage.clear();
    },
    setTokenFromRememberMe(state, action) {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      // console.log(payload);
      if (payload) {
        if (payload.status === 0) {
          const errMsg = payload.message;
          toast.error(`${errMsg}`, {
            position: 'top-right',
            autoClose: 4500,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
          });
          state.token = null;
          state.isLoading = false;
          state.error = payload.message;
          state.isLoggedIn = false;
          return;
        }

        state.token = payload.token.token;
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
        sessionStorage.setItem('token', payload.token.token);
      }
    },
    [loginUser.rejected]: (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.token = null;
      state.error = action.payload;
      state.isLoggedIn = false;
    },
    //
    // create user
    //
    [createUser.pending]: (state, action) => {
      state.isLoading = true;
      state.userCreated = false;
      state.error = null;
    },
    [createUser.fulfilled]: (state, { payload }) => {
      // console.log(payload);
      if (payload) {
        if (payload.status === 0) {
          state.isLoading = false;
          state.error = payload.message;
          state.userCreated = false;

          const errMsg = payload.message;
          toast.error(`${errMsg}`, {
            position: 'top-right',
            autoClose: 4500,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
          });
          return;
        }

        state.isLoading = false;
        state.error = null;
        state.userCreated = true;
        state.successMessage = 'User Created Successfully.';
      }
    },
    [createUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.userCreated = false;

      state.error = payload;
    },
    [getUserData.pending]: (state, action) => {
      state.isLoading = true;
      state.userData = {};
    },
    [getUserData.fulfilled]: (state, { payload }) => {
      // console.log(payload);
      if (payload) {
        if (payload.status === 0) {
          state.isLoading = false;
          state.error = payload.message;
          state.userData = {};

          const errMsg = payload.message;
          toast.error(`${errMsg}`, {
            position: 'top-right',
            autoClose: 4500,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
          });
          return;
        }
        const {
          _id: id,
          firstName,
          lastName,
          displayName,
          email,
          address,
          phone,
        } = payload.data;
        state.isLoading = false;
        state.userData = {
          id,
          firstName,
          lastName,
          displayName,
          email,
          address,
          phone,
        };
      }
    },
    [getUserData.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.userData = {};
      state.error = payload;
    },
  },
});

export const getAdminToken = state => state.auth.token;
export const { logout, setTokenFromRememberMe } = authSlice.actions;

export default authSlice.reducer;
