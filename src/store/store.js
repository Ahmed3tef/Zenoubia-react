import { configureStore } from '@reduxjs/toolkit';
import {
  // adminSlice,
  // adsSlice,
  // authSlice,
  // categoriesSlice,
  // ordersSlice,
  // productsSlice,
  // reportsSlice,
  reviewsSlice,
  productSlice,
  homeSections,
  subCategories,
} from './reducers';

export const store = configureStore({
  reducer: {
    // auth: authSlice,
    // ads: adsSlice,
    // admin: adminSlice,
    // categories: categoriesSlice,
    subCategories,
    // products: productsSlice,
    // orders: ordersSlice,
    // reports: reportsSlice,
    reviews: reviewsSlice,
    product: productSlice,
    homeSections,
  },
});
