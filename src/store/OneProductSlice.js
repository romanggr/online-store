import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: {},
    status: "idle",
    error: null
}

const fetchOneProductAsync = createAsyncThunk("product/fetchOneProduct", async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json(); // Added 'await' here
    return data;
});

const OneProductSlice = createSlice({
    name: "oneProduct",
    initialState,
    reducers: {
        deleteProduct: (state) => {
            state.product = {}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOneProductAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchOneProductAsync.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.product = action.payload;
            })
            .addCase(fetchOneProductAsync.rejected, (state, action) => {
                state.status = "failed"; // Fixed the typo here
                state.error = action.error.message;
            })
    }
});

export default OneProductSlice.reducer;
export { fetchOneProductAsync };

// You can export the actions as well if needed
export const { deleteProduct } = OneProductSlice.actions;

export const getOneProduct = (state) => state.oneProduct.product;
export const getOneProductStatus = (state) => state.oneProduct.status;
