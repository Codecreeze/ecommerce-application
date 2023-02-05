import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./Slices/CategorySlice";
import ProductListSlice from "./Slices/ProductListSlice";




// Global Store
const store = configureStore({
  reducer: {
    list: ProductListSlice,
    categ: CategorySlice,
  },
});
export default store;
