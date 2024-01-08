import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Detail: [],
  ProductFeature: [
    {
      headline: "flooring",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      headline: "Bedding",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      headline: "Clothing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      headline: "Footwear",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ],
  display: false,
};

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    ProductAdd: (state, actions) => {
      state.Detail = actions.payload;
      state.display = true;
    },
  },
});

export const { ProductAdd } = ProductSlice.actions;

export default ProductSlice.reducer;
