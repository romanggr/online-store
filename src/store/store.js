import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketReducer from "../store/BasketSlice"
import productsReducer from "../store/ProductsSlice"
import oneProductReducer from "../store/OneProductSlice"


export const store = configureStore({
    reducer: {
        basket: basketReducer,
        products: productsReducer,
        oneProduct: oneProductReducer
    },

})