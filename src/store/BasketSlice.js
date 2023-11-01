import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: [],

}

const BasketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.basket = [...state.basket, action.payload]
            console.log(state.basket);
        }
    }
})

export default BasketSlice.reducer
export const { addToBasket } = BasketSlice.actions

export const getBasketItems = state => state.basket.basket

