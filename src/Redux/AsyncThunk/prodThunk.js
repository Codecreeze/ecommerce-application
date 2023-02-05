import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getProductList = createAsyncThunk(
    "productList/getProductList", async () => {
        const res = await axios.get('https://fakestoreapi.com/products')
            .then((d) => d.data)
        return res;
    });

export const getCategories = createAsyncThunk(
    "categories/getCategories", async () => {
        const res = await axios.get(`https://fakestoreapi.com/products/categories`)
            .then((d) => d.data)
        return res;
    });

export const getCategoryWiseData = createAsyncThunk(
    "categoryData/getCategoryWiseData", async (arg, { getState }) => {
        const state = getState();
        const CATEGORY = state.categ.categoryList;
        const res = await axios.get(`https://fakestoreapi.com/products/category/${CATEGORY}`)
            .then((d) => d.data)
        return res;
    });