import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import jobDetailFormSlice from "./jobDetailFormSlice";
import JobDetailSlice from "./JobDetailSlice";

const Store = configureStore({
  reducer: {
    Product: ProductSlice,
    form: jobDetailFormSlice,
    JobDetailpage: JobDetailSlice,
  },
});

export default Store;
