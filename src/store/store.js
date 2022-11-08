import { configureStore } from '@reduxjs/toolkit';
import {
  // adminSlice,
  // adsSlice,
  // authSlice,
  // categoriesSlice,
  // ordersSlice,
  products,
  // reportsSlice,
  reviewsSlice,
  productSlice,
  homeSections,
  subCategories,
  relatedProducts,
  cities,
  governments,
  countries,
} from './reducers';

export const store = configureStore({
  reducer: {
    // auth: authSlice,
    // ads: adsSlice,
    // admin: adminSlice,
    // categories: categoriesSlice,
    subCategories,
    products,
    // orders: ordersSlice,
    // reports: reportsSlice,
    reviews: reviewsSlice,
    product: productSlice,
    homeSections,
    relatedProducts,
    cities,
    governments,
    countries,
  },
});
