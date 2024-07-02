import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CartSlice";

const Store = configureStore({
    reducer: {
        cartinStore: cartReducer
    }
})


export default Store