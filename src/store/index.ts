import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { CartState, CartStateClicked, CounterState, IncrementAction } from "../types";

const counterInitialState: CounterState = { value: 0 };

const counterSlice = createSlice({
    name:'counter',
    initialState: counterInitialState,
    reducers: {
        increment(state) {
            state.value++;
        },
        decrement(state) {
            if (state.value === 0) {
                return;
            } else
            state.value--;
        }
    }
})

const cartInitialState: CartState = {cartUpdate: false}

const cartSlice = createSlice({
    name:'cart',
    initialState: cartInitialState,
    reducers: {
        cartUpdate(state) {
            state.cartUpdate = !state.cartUpdate
        },
    }
})

const cartClickedInitial : CartStateClicked = {cartListValue: false}
const cartListSlice = createSlice({
    name:'cartList',
    initialState: cartClickedInitial,
    reducers: {
        cartClicked(state) {
            state.cartListValue = !state.cartListValue
        }
    }
})




const store = configureStore({
    reducer:{counter:counterSlice.reducer,
        cart: cartSlice.reducer, 
        cartList: cartListSlice.reducer
    }
});


export const counterActions = counterSlice.actions;
export default store;
export const {increment, decrement} =counterSlice.actions;
export const {cartUpdate} = cartSlice.actions;
export const {cartClicked} = cartListSlice.actions;
