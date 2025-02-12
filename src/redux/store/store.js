import { configureStore } from "@reduxjs/toolkit";
import { showReducer } from "../Slice/Nav/ShowSlice";
export const store=configureStore({
    reducer:{
        show:showReducer
    }
})