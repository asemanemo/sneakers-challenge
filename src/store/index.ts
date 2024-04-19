import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { CartState, CounterState, IncrementAction } from "../types";
// روش اول:
// میتونی هر وقتی که کاربر کلیک میکنه استیت مربوط به اسلایس کونتر به اسلایس کارت داده بشه

// روش دوم: 
// مگر اینکه بتونیم یک استیت برای کلیک کردن روی دکمه تعیین کنیم
// هر وقت که بر روی دکمه کلیک کرده میشه ما با استفاده از یوز افکت از 
// استور اون کونتر رو بگیریم

// بپرس که چجوری میشه یک دکمه رو به عنوان یک استیت قرار داد
// کلا چجوری میتونیم دکمه رو به صورت آری دپندنسی قرار بدم

// مقدار استیت رو از اسلایس بگیر و در متغییر قرار بده 
// متغییر رو در داخل استیت قرار بده 
// از یوز افکت استفاده کن

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
        cartClicked(state) {
            state.cartUpdate = !state.cartUpdate
        }
    }
})




const store = configureStore({
    reducer:{counter:counterSlice.reducer,
        cart: cartSlice.reducer
    }
});


export const counterActions = counterSlice.actions;
export default store;
export const {increment, decrement} =counterSlice.actions;
export const {cartClicked} = cartSlice.actions;


// میخوایم هر وقت روی دکمه کلیک کردیم تغییر کنه، و بعد تغییر نکنه تا زمانی که دوباره روی کارت کلیک کردیم
// میتونیم در یک اسلایس دیگه قرار بدیم و هر وقت که کلیک شد ما از اسلایس کونتر استیت رو بگیریم و نمایش بدیم 