import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer:{
        cart:cartReducer,
       // user:userReducer, //if you have multiple slices you can add here
    },
});


export default appStore;