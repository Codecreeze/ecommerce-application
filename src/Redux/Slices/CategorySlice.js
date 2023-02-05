import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getCategoryWiseData } from "../AsyncThunk/prodThunk";

// Slice created  for the redux logic
const initialState = {
    loading: false,
    error: null,
    categoryData: [],
    categoryList: [],
    cateLoading: false,
    catError: null,
    categoryProduct: [],
};


export const CategorySlice = createSlice({
    name: "productData",
    initialState,
    reducers: {
        updateCategory: (state, action) => {
            state.categoryList = action.payload;
        }
    },
    extraReducers: {
        [getCategories.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getCategories.fulfilled]: (state, action) => {
            state.loading = false;
            state.categoryData = action.payload;
        },
        [getCategories.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [getCategoryWiseData.pending]: (state) => {
            state.cateLoading = true;
            state.catError = null;
        },
        [getCategoryWiseData.fulfilled]: (state, action) => {
            state.cateLoading = false;
            state.categoryProduct = action.payload;
        },
        [getCategoryWiseData.rejected]: (state, action) => {
            state.cateLoading = false;
            state.catError = action.payload;
        },
    }

});

export const { updateCategory } = CategorySlice.actions;


export default CategorySlice.reducer;