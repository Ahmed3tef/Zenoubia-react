import { configureStore } from '@reduxjs/toolkit';
import {
  products,
  reviewsSlice,
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
    reviews: reviewsSlice,
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
