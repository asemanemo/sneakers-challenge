// Increment + Decrement + Add to cart

import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { CounterState, IncrementAction } from "../types";



const initialState: CounterState = { count: 0 };

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {
        increment(state, action: IncrementAction) {
            state.count++
        }
    }
})

const store = configureStore({
    reducer:{counter:counterSlice.reducer},
});


// export const {increment} =counterSlice.actions;
export type RootState = ReturnType<typeof store.getState>
export default store;
