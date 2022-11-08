import axios from 'axios';
import { APIBase } from './api';
// import { getAdminToken } from './auth';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoyLCJ1c2VySWQiOiI2MzM0MmM2NjhkYWRkODU3MjQ0ZTVjNzUiLCJzdGF0dXMiOjEsImlhdCI6MTY2NDM2MzYyNiwiZXhwIjoxNjY2OTU1NjI2fQ.SUIdVlaNzg7RswRKpyEtFrjrHYTtMmDk_vrDTEFEADU';
// console.log(token);
const config = {
  headers: {
    authorization: token,
  },
};
export async function loadData(thunkAPI, path) {
  return axios
    .get(`${APIBase}${path}`, thunkAPI)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err.response.data;
    });
}
export async function loadDataWithId(thunkAPI, path, id) {
  const configId = {
    params: {
      subcatId: id,
    },
  };
  return axios
    .get(`${APIBase}${path}`, configId, thunkAPI)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err.response.data;
    });
}
export async function loadDataWithParams(thunkAPI, path, params) {
  const config = {
    params,
  };
  return axios
    .get(`${APIBase}${path}`, config, thunkAPI)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err.response.data;
    });
}
export async function loadDataWithParamsPost(thunkAPI, path, params, data) {
  const config = {
    headers: {
      authorization: token,
    },
    params,
  };
  return axios
    .post(`${APIBase}${path}`, params, data, thunkAPI)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err.response.data;
    });
}
