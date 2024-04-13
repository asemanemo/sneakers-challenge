import { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    count: number;
}



export type IncrementAction = PayloadAction<number>