import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    status: "idle",
    error: null
}

const fetchProductsAsync = createAsyncThunk("products/fetchProducts", async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = res.json()
    return data
})


const ProductsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsAsync.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchProductsAsync.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.products = action.payload
            })
            .addCase(fetchProductsAsync.rejected, (state, action) => {
                state.status = "failder"
                state.error = action.error.message
            })
    }
})


export default ProductsSlice.reducer
export const { } = ProductsSlice.actions;
export { fetchProductsAsync }

export const getProducts = state => state.products.products;
export const getStatus = state => state.products.status;
export const getError = state => state.products.error;
