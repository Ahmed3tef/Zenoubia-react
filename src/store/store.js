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
  // subCategoriesSlice,
} from './reducers';

export const store = configureStore({
  reducer: {
    // auth: authSlice,
    // ads: adsSlice,
    // admin: adminSlice,
    // categories: categoriesSlice,
    // subCategories: subCategoriesSlice,
    // products: productsSlice,
    // orders: ordersSlice,
    // reports: reportsSlice,
    reviews: reviewsSlice,
    product: productSlice,
    homeSections,
  },
});
