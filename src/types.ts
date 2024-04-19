import { PayloadAction } from "@reduxjs/toolkit";
import store from "./store";

export interface CounterState {
    value: number;
}

export interface CartState {
    cartUpdate: boolean;
}

export type RootState = ReturnType<typeof store.getState>


export type IncrementAction = PayloadAction<number>