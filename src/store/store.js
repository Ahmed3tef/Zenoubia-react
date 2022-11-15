import { configureStore } from '@reduxjs/toolkit';
import {
  products,
  reviews,
  productSlice,
  homeSections,
  subCategories,
  relatedProducts,
  cities,
  governments,
  countries,
  filterData,
  orders,
  wishlist,
  user,
} from './reducers';

export const store = configureStore({
  reducer: {
    subCategories,
    products,
    reviews,
    product: productSlice,
    homeSections,
    relatedProducts,
    cities,
    governments,
    countries,
    filterData,
    orders,
    wishlist,
    user,
  },
});
