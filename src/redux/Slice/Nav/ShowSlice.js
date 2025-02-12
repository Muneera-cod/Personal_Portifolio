import { createSlice } from "@reduxjs/toolkit";
const initialState = { smNav:false}
const showSlice = createSlice({
    name:'show',
    initialState,
    reducers:{
       showSmNav(state){
          state.smNav = true
       }, 
       hideSmNav(state){
           state.smNav = false
       }
    }
})
export const { showSmNav , hideSmNav } = showSlice.actions
export const showReducer = showSlice.reducer