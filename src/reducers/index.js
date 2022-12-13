import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";
import { productReducer } from "./productReducer";
import reduxThunk from 'redux-thunk';

export const globalStore = configureStore({
    // memasukkan reducer yg dibutuhkan
    reducer:{
        userReducer,
        productReducer
    }
}, applyMiddleware(reduxThunk))