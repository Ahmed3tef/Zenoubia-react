import axios from 'axios';
import { toast } from 'react-toastify';

export const APIBase = 'https://api-zenobyah.worldproductsae.com/';
// export const APIBase = 'http://192.168.1.243:3010';

export const token = sessionStorage.getItem('token');

// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoyLCJ1c2VySWQiOiI2MzU1MmJmNDBiY2MxYTZlNTljMDUzYzgiLCJzdGF0dXMiOjEsImlhdCI6MTY2ODE4MTYxOCwiZXhwIjoxNjcwNzczNjE4fQ.diatsfiyWSO0Q5eHHgnWKV2SwzLchuzJBsoyv4AXUig';

export const addToWishlist = id => {
  axios
    .post(
      `${APIBase}wishlist/add`,
      { id },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then(res => {
      toast.success(`Product added`, {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
      });
    })
    .catch(err => {
      const errMsg = err.response.data.message;

      toast.error(`${errMsg}, please login first!`, {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
      });
    });
};
