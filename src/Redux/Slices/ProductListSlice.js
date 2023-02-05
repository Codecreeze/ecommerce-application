import { createSlice } from "@reduxjs/toolkit";
import { getProductList } from "../AsyncThunk/prodThunk";

// Slice created  for the redux logic
const initialState = {
    loading: false,
    error: null,
    searchTerm: "",
    productList: [],
};


export const ProductListSlice = createSlice({
    name: "productData",
    initialState,
    reducers: {
        updateSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    },
    extraReducers: {
        [getProductList.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getProductList.fulfilled]: (state, action) => {
            state.loading = false;
            state.productList = action.payload;
        },
        [getProductList.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }

});


export const { updateSearchTerm } = ProductListSlice.actions;

export default ProductListSlice.reducer;