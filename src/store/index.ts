// Increment + Decrement + Add to cart

import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { CounterState, IncrementAction } from "../types";



const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++;
        },
        decrement(state) {
            if (state.value === 0) {
                return state;
            } else
            state.value--;
        }
    }
})

const store = configureStore({
    reducer:{counter:counterSlice.reducer},
});


export const counterActions = counterSlice.actions;
export default store;
export const {increment, decrement} =counterSlice.actions;
