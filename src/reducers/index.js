import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";
import { productReducer } from "./productReducer";

export const globalStore = configureStore({
    // memasukkan reducer yg dibutuhkan
    reducer:{
        userReducer,
        productReducer
    }
})